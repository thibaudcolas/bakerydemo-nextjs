import { client } from '@/lib/graphql';
import { popUpHomePage } from '@/lib/queries';
import HomePage, { HomePageType } from '@/components/HomePage';

export default async function HomePageRoute() {
  const {
    data: { homePage, breadsIndex },
  } = await client.query({
    query: popUpHomePage,
    variables: {
      urlPath: '/pop-up-bakery/',
    },
  });

  return <HomePage homePage={homePage as HomePageType} />;
}
