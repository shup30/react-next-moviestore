import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({
  id,
  originalTitle,
  genresData,
  releaseYear,
  posterPath,
  overview,
  price,
  voteAverage,
}) => (
  <div key={id}>
    <div>
        <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={originalTitle} />
      <div>
        <div>
          <h2>{originalTitle}</h2>
          <h3>{`${releaseYear}  |  ${genresData.toString().replace(/,/g, ', ')}`}</h3>
          <div>
            Rating:
            {' '}
            <strong>{voteAverage}</strong>
          </div>
          <div>
            {overview}
          </div>
        </div>
        <div>
          <h2>{`$${price}`}</h2>
        </div>
      </div>
    </div>
  </div>
);

ProductCard.propTypes = {
  id: PropTypes.number,
  originalTitle: PropTypes.string,
  genresData: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  releaseYear: PropTypes.string,
  posterPath: PropTypes.string,
  overview: PropTypes.string,
  price: PropTypes.number,
  voteAverage: PropTypes.number,
};

export default ProductCard;
