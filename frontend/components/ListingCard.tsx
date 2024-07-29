import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ListingCardPage {
  title: string;
  url: string;
  image?: {
    src: {
      url: string;
      width: number;
      height: number;
    };
  };
  origin?: {
    title: string;
  };
  breadType?: {
    title: string;
  };
}

const ListingCard = ({ page }: { page: ListingCardPage }) => {
  return (
    <div className="listing-card">
      <Link href={page.url} className="listing-card__link">
        {page.image && (
          <figure className="listing-card__image">
            <Image
              src={page.image.src.url}
              alt=""
              width={page.image.src.width}
              height={page.image.src.height}
              layout="fixed"
              objectFit="cover"
              loading="lazy"
              className="listing-card__img"
            />
          </figure>
        )}
        <div className="listing-card__contents">
          <h3 className="listing-card__title">{page.title}</h3>
          {(page.origin || page.breadType) && (
            <table className="listing-card__meta">
              <tbody>
                {page.origin && (
                  <tr>
                    <td className="listing-card__meta-category">Origin</td>
                    <td className="listing-card__meta-content">
                      {page.origin.title}
                    </td>
                  </tr>
                )}
                {page.breadType && (
                  <tr>
                    <td className="listing-card__meta-category">Type</td>
                    <td className="listing-card__meta-content">
                      {page.breadType.title}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
