const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages/md` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allMarkdownRemark {
                    edges {
                        node {
                            fields {
                                slug
                            }
                        }
                        next {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                        previous {
                            fields {
                                slug
                            }
                            frontmatter {
                                title
                            }
                        }
                    }
                }
            }
        `).then(({ data: data }) => {
            data.allMarkdownRemark.edges.map(({ node, next, previous }, idx) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve(`./src/templates/blog-post/index.tsx`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables.
                        slug: node.fields.slug,
                        next: idx === data.allMarkdownRemark.edges.length - 1 ? '' : next.fields.slug,
                        nextTitle: idx === data.allMarkdownRemark.edges.length - 1 ? '' : next.frontmatter.title,
                        previous: idx === 0 ? '' : previous.fields.slug,
                        previousTitle: idx === 0 ? '' : previous.frontmatter.title,
                    },
                });
            });
            resolve();
        });
    });
};
