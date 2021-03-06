const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ( { node, getNode, actions } ) => {
  if ( node.internal.type === 'MarkdownRemark' ) {
    const { createNodeField } = actions;
    const slug =  createFilePath( { node, getNode, basePath: `pages` } )
    createNodeField({
      node, 
      name: `slug`,
      value: slug 
    });
  }
}

//  GraphQL Node API that creates the pages dynamic pages that takes data.
exports.createPages = ( { graphql, actions } ) => {
  const { createPage } = actions;
  
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              title
            }
          }
        }
      }
    }
  `)
    .then(results => {
      const allPosts = results.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title !== 'About'); 
      const postsPerPage = 5;  
      const numPages = Math.ceil( allPosts.length / postsPerPage );

      Array.from({ length: numPages }).forEach((_, i) => {        createPage({
          path: i === 0 ? '/page' : `/page/${ i + 1 }`,
          component: path.resolve('./src/templates/blog-list.js'),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i
          }
        })
      })

      // Making a seperate page for a particular blog
      results.data.allMarkdownRemark.edges.forEach( ({ node }) => {
        const { slug } = node.fields; 
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug
          }
        })
      } )      
    });
}