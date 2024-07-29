import Image from 'next/image';
import Link from 'next/link';

export interface LocationCardPage {
  title: string;
  url: string;
  introduction?: string;
  image: {
    src: {
      url: string;
      width: number;
      height: number;
    };
  };
}

const LocationCard = ({ page }: { page: LocationCardPage }) => {
  return (
    <div className="location-card col-sm-4">
      <Link href={page.url} className="location-card__link">
        <figure className="location-card__image">
          <Image
            src={page.image.src.url}
            alt=""
            width={page.image.src.width}
            height={page.image.src.height}
            loading="lazy"
            className="location-card__img"
          />
        </figure>
        <div className="location-card__contents">
          <h3 className="location-card__title">{page.title}</h3>
          {page.introduction && (
            <p className="location-card__text">
              {page.introduction.replace(/(.{50}).*/, '$1…')}
            </p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default LocationCard;
