import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CryptoContext } from '../context/CryptoContext';

const Carousel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = useContext(CryptoContext);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
        );
        const coins = await response.json();
        const sortedCoins = coins?.sort((a, b) => {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
        setTrending(sortedCoins.slice(0, 8));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [currency]);
  const items = trending?.map((coin) => {
    const profit = coin?.price_change_percentage_24h >= 0;
    return (
      <>
        <div
          style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.1',
            padding: '10px',
            borderBottom: '1px solid #f5c518',
            borderTop: '1px solid #f5c518',
          }}
        >
          {error && (
            <div div className="error-container">
              <p className="error-message">Server responds with error 404!</p>
            </div>
          )}
          {isLoading && (
            <div className="loading-container">
              <p className="loading">Loading ...</p>
            </div>
          )}
          <Link
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              textTransform: 'uppercase',
              color: 'white',
            }}
            to={`/coin/${coin?.id}`}
            key={coin?.id}
          >
            <img
              src={coin?.image}
              alt={coin?.name}
              height="60"
              style={{ marginBottom: '10px', padding: '5px' }}
            />
            <p
              style={{
                fontSize: '14px',
              }}
            >
              {coin?.symbol}
              <span
                className="coin-percentage"
                style={{
                  color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
                  fontWeight: 500,
                  fontSize: '14px',
                }}
              >
                {profit && '+'}
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </span>
            </p>
            <p style={{ fontSize: '16px', fontWeight: 500, color: '#f5c518' }}>
              {symbol} {coin?.current_price?.toFixed(6)}
            </p>
          </Link>
        </div>
      </>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div
      style={{
        height: '50%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1200}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
