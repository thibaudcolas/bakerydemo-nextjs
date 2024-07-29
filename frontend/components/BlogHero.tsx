import Image from 'next/image';

interface BlogHeroPage {
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
}

function formatDate(date: string) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

export default function BlogHero({ page }: { page: BlogHeroPage }) {
  return (
    <>
      {page.image && (
        <div className="container-fluid hero hero--blog">
          <Image
            src={page.image.src.url}
            width={page.image.src.width}
            height={page.image.src.height}
            alt=""
            className="hero-image"
          />
        </div>
      )}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <h1 className="index-header__title index-header__title--blog">
              {page.title}
            </h1>
            {page.subtitle && <p>{page.subtitle}</p>}
          </div>
          <div className="col-sm-12 col-md-7">
            {page.introduction && (
              <p className="index-header__introduction index-header__introduction--blog">
                {page.introduction}
              </p>
            )}
            {page.datePublished && (
              <div className="blog__published">
                {formatDate(page.datePublished)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
