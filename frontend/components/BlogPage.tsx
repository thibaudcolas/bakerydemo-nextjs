import Image from 'next/image';
import BlogHero from './BlogHero';
import BaseStreamBlock, {
  BaseStreamBlockType,
} from './streamfield/BaseStreamBlock';

export interface BlogPageType {
  title: string;
  subtitle?: string;
  introduction?: string;
  datePublished?: string;
  image?: {
    src: {
      url: string;
      width: number;
      height: number;
    };
  };
  authors: ReadonlyArray<{
    firstName: string;
    lastName: string;
    image: {
      src: {
        url: string;
      };
    };
  }>;
  body: ReadonlyArray<BaseStreamBlockType>;
}

interface BlogPageProps {
  page: BlogPageType;
}

export default function BlogPage({ page }: BlogPageProps) {
  return (
    <div>
      <BlogHero page={page} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="blog__meta">
              {page.authors && (
                <div className="blog__avatars">
                  {page.authors.map((author, index) => (
                    <div key={index} className="blog__author">
                      <Image
                        src={author.image.src.url}
                        alt=""
                        className="blog__avatar"
                        width={50}
                        height={50}
                      />
                      {author.firstName} {author.lastName}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <BaseStreamBlock blocks={page.body} />

            {page.tags && (
              <>
                <p className="blog__tag-introduction">
                  Find more blog posts with similar tags
                </p>
                <div className="blog-tags blog-tags--condensed">
                  <span className="u-sr-only">Filter blog posts by tag</span>
                  {page.tags.map((tag, index) => (
                    <a key={index} href={tag.url} className="blog-tags__pill">
                      {tag.name}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
