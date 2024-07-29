import { draftMode } from 'next/headers';
import { gql } from '@apollo/client';
import { client } from '@/lib/graphql';
import { previewQueries, PreviewableContentType } from '@/lib/queries';
import HomePage from '@/components/HomePage';
import BlogPage from '@/components/BlogPage';

export default async function Preview({
  searchParams,
}: {
  searchParams: {
    content_type: PreviewableContentType;
    token: string;
  };
}) {
  const { isEnabled } = draftMode();
  const contentType = searchParams.content_type;

  const query = previewQueries[contentType] || gql``;
  const { data } = await client.query({
    query,
    variables: {
      contentType: searchParams.content_type,
      token: searchParams.token,
    },
  });

  let page;

  switch (contentType) {
    case 'pop_up_bakery.popuphomepage':
      page = <HomePage homePage={data.homePage} />;
      break;
    case 'pop_up_bakery.popupblogpage':
      page = <BlogPage page={data.page} />;
      break;
    default:
      page = <pre>{JSON.stringify(data, null, 2)}</pre>;
      break;
  }

  return page;
}
