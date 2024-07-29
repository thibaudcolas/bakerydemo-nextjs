import { gql } from '@apollo/client';

export const popUpHomePage = gql`
  query FetchPopUpHomePage(
    $urlPath: String
    $contentType: String
    $token: String
  ) {
    homePage: page(
      urlPath: $urlPath
      contentType: $contentType
      token: $token
    ) {
      __typename
      title
      ... on PopUpHomePage {
        heroText
        heroCtaLink {
          url
        }
        heroCta
        image {
          src: rendition(format: "jpeg", fill: "800x650") {
            url
            width
            height
          }
        }
        promoTitle
        promoText
        promoImage {
          src: rendition(format: "jpeg", fill: "590x413-c100") {
            url
            width
            height
          }
        }
        featuredSection1 {
          title
          children {
            title
            url
            ... on BreadPage {
              origin {
                title
              }
              breadType {
                title
              }
              image {
                src: rendition(format: "jpeg", fill: "180x180-c100") {
                  url
                  width
                  height
                }
              }
            }
          }
        }
        featuredSection2 {
          title
          children {
            title
            url
            ... on LocationPage {
              introduction
              image {
                src: rendition(format: "jpeg", fill: "300x320-c100") {
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
    breadsIndex: page(slug: "breads") {
      url
    }
  }
`;

export const popupBlogPage = gql`
  query FetchPopUpBlogPage(
    $urlPath: String
    $contentType: String
    $token: String
  ) {
    page: page(urlPath: $urlPath, contentType: $contentType, token: $token) {
      __typename
      title
      ... on PopUpBlogPage {
        introduction
        image {
          src: rendition(format: "jpeg", fill: "1920x600") {
            url
            width
            height
          }
        }
        authors {
          firstName
          lastName
          image {
            src: rendition(format: "jpeg", fill: "50x50-c100") {
              url
            }
          }
        }
        body {
          id
          blockType
          ... on RichTextBlock {
            value
          }
          ... on HeadingBlock {
            headingText
            size
          }
          ... on ImageBlock {
            image {
              src: rendition(format: "jpeg", fill: "600x338") {
                url
                width
                height
                alt
              }
            }
            caption
            attribution
          }
          ... on EmbedBlock {
            embed
          }
        }
        subtitle
        datePublished
      }
    }
    blogIndex: page(slug: "blog", site: "popup.localhost:3000") {
      url
    }
  }
`;

export const previewQueries = {
  'pop_up_bakery.popuphomepage': popUpHomePage,
  'pop_up_bakery.popupblogpage': popupBlogPage,
};

export type PreviewableContentType = keyof typeof previewQueries;
