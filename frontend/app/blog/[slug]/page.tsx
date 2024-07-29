import type { Metadata, ResolvingMetadata } from 'next';
import { client } from '@/lib/graphql';
import { popupBlogPage } from '@/lib/queries';
import BlogPage from '@/components/BlogPage';

export async function generateMetadata(
  {
    params: { slug },
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data } = await client.query({
    query: popupBlogPage,
    variables: {
      urlPath: `/pop-up-bakery/blog/${slug}/`,
    },
  });

  return {
    title: data.page.title,
  };
}

export default async function BlogPageRoute({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { data } = await client.query({
    query: popupBlogPage,
    variables: {
      urlPath: `/pop-up-bakery/blog/${slug}/`,
    },
  });

  return <BlogPage page={data.page} />;
}
