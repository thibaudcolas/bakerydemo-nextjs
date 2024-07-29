import Image from 'next/image';
import Link from 'next/link';
import ChevronIcon from '@/components/ChevronIcon';
import ListingCard, { ListingCardPage } from '@/components/ListingCard';
import LocationCard, { LocationCardPage } from '@/components/LocationCard';

export interface HomePageType {
  title: string;
  heroText: string;
  heroCtaLink: {
    url: string;
  };
  heroCta: string;
  image: {
    src: {
      url: string;
    };
  };
  promoTitle: string;
  promoText: string;
  promoImage: {
    src: {
      url: string;
      width: number;
      height: number;
    };
  };
  featuredSection1Title: string;
  featuredSection1: {
    title: string;
    children: ReadonlyArray<ListingCardPage>;
  };
  featuredSection2Title: string;
  featuredSection2: {
    title: string;
    children: ReadonlyArray<LocationCardPage>;
  };
}

interface HomePageProps {
  homePage: HomePageType;
}

export default function HomePage({ homePage }: HomePageProps) {
  return (
    <div className="homepage">
      <div className="container-fluid hero">
        {homePage.image ? (
          <Image
            src={homePage?.image.src.url}
            alt=""
            layout="fill"
            objectFit="cover"
            className="hero-image"
          />
        ) : null}
        <div className="hero-gradient-mask"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-1 col-lg-5 home-hero">
              <h1>{homePage.title}</h1>
              <p className="lead">{homePage.heroText}</p>
              {homePage.heroCtaLink ? (
                <Link href={homePage.heroCtaLink.url} className="hero-cta-link">
                  {homePage.heroCta}
                </Link>
              ) : (
                <span>{homePage.heroCta}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row promo-row">
          <div className="featured-cards col-sm-5 col-sm-offset-1">
            {homePage.featuredSection1 && (
              <>
                <h2 className="featured-cards__title">
                  {homePage.featuredSection1Title}
                </h2>
                <ul className="featured-cards__list">
                  {homePage.featuredSection1.children
                    .slice(0, 3)
                    .map((child) => (
                      <li key={child.url}>
                        <ListingCard page={child} />
                      </li>
                    ))}
                </ul>
                <Link href="/breads" className="featured-cards__link">
                  <span>View more of our breads</span>
                  <ChevronIcon className="featured-cards__chevron-icon" />
                </Link>
              </>
            )}
          </div>

          <div className="col-sm-6 promo">
            {(homePage.promoImage ||
              homePage.promoTitle ||
              homePage.promoText) && (
              <div className="col-lg-10 promo-text">
                {homePage.promoTitle && <h2>{homePage.promoTitle}</h2>}
                {homePage.promoText && (
                  <div
                    dangerouslySetInnerHTML={{ __html: homePage.promoText }}
                  />
                )}
              </div>
            )}
            {homePage.promoImage && (
              <figure>
                <Image
                  src={homePage.promoImage.src.url}
                  alt=""
                  width={homePage.promoImage.src.width}
                  height={homePage.promoImage.src.height}
                  className="promo-image"
                />
              </figure>
            )}
          </div>
        </div>
      </div>

      {homePage.body && (
        <div className="container-fluid streamfield">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 streamfield-column">
              <div dangerouslySetInnerHTML={{ __html: homePage.body }} />
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <div className="row">
          <div className="col-md-12 locations-section">
            {homePage.featuredSection2 && (
              <>
                <h2 className="locations-section__title">
                  {homePage.featuredSection2Title}
                </h2>
                {homePage.featuredSection2.children.slice(0, 3).map((child) => (
                  <LocationCard key={child.url} page={child} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      {/*
      {homePage.featured_section_3 && (
        <div className="blog-section__background">
          <div className="container">
            <div className="row">
              <div className="col-md-12 blog-section">
                <h2 className="blog-section__title">
                  {homePage.featured_section_3_title}
                </h2>
                <div className="blog-section__grid">
                  {homePage.featured_section_3.specific.children
                    .slice(0, 6)
                    .map((child) => (
                      <PictureCard key={child.id} page={child} portrait />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
