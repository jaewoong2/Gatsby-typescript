import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Lists from '../components/lists';
import { MainInfos } from '../repo/app';
import MainComponent from '../templates/Layout';
import { ImdProps } from '../utils/type';

const Title = styled.div`
    font-size: 1.5em;
    margin-left: 10px;
    margin-top: 8px;
`;

const Description = styled.p`
    font-size: 0.925em;
    margin-left: 11px;
`;

const ListWrapper = styled.section`
    margin-top: 10px;
    border-top: 2px solid ${({ theme }) => theme.color.border};
`;

const Index: React.FC<ImdProps> = ({ data }) => {
    return (
        <MainComponent>
            <section>
                {MainInfos.map(info => (
                    <>
                        <Title key={info.title} className="text">
                            {info?.title}
                        </Title>
                        {info?.description && (
                            <Description key={info.title} className="text">
                                - {info?.description}
                            </Description>
                        )}
                        {info?.descriptions &&
                            info.descriptions.map(description => (
                                <Description key={info.title} className="text">
                                    - {description}
                                </Description>
                            ))}
                    </>
                ))}
            </section>
            <ListWrapper>
                <Title className="text">Posts</Title>
                {data?.allMarkdownRemark?.edges.map((edge, idx) => (
                    <Lists
                        tags={edge?.node?.frontmatter?.tags}
                        title={edge.node.frontmatter.title}
                        key={edge.node.id.slice(0, 10) + idx}
                        date={edge.node.frontmatter.date}
                        slug={edge.node.fields.slug}
                    />
                ))}
            </ListWrapper>
        </MainComponent>
    );
};

export default Index;

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 5) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "DD MMMM, YYYY")
                        tags
                    }
                    fields {
                        slug
                    }
                    excerpt
                }
            }
        }
    }
`;
