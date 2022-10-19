# Crypto Coin app

## 1. Description

This app helps the investor tracking the crypto they are investing on by:

- Getting the live current price.
- Finding out the most 8 cryptos moved in last 24 hours.
- Checking the crypto coin details such as: about the coin, current price, market cap, crypto rank and chart.
- The user can check the current price according the currencies: USD & EURO.
- Able to add a coin to the favorite.
- Search and found a specific coin.
- You can read more about this app in the about page.
</br>

All this information are provided from most popular and famous website, which is: [coin market cap](https://coinmarketcap.com).</br>

## 2. Link and Preview

![App view](./assets/Laptop-and-mobile.jpg)

### Color guide

![App color guide](./assets/Color-guide.jpg)

In this App I have followed the styling of [IMDB](https://www.imdb.com/). All the styling was made by css, react-alice-carousel and recharts</br>
Project link is available at [Crypto Coin App](https://pro-crypto-coin.netlify.app/)

## 3. App Folder Structure

```text
assets
└── Laptop-and-mobile.jpg
public
└── index.html
src
└── components
  └── Banner.jsx
  └── Carousel.jsx
  └── ChartDaysData.jsx
  └── CoinChart.jsx
  └── CoinDetails.jsx
  └── CoinsList.jsx
  └── CustomTooltip.jsx
  └── FavoriteButton.jsx
  └── Header.jsx
  └── Pagination.jsx
└── context
  └── CryptoContext.jsx
  └── FavoriteContext.jsx
└── images
  └── banner
    └── banner-logo.png
    └── Banner-new2.jpg
    └── banner.jpg
  └── logo
    └── Logo.png
└── pages
  └── AboutPage.jsx
  └── CoinPage.jsx
  └── FavoritePage.jsx
  └── HomePage.jsx
└── style
  └── AboutPage.css
  └── Banner.css
  └── CoinChart.css
  └── CoinDetails.css
  └── CoinsList.css
  └── favoritePage.css
  └── Header.css
  └── HomePage.css
  └── index.css
  └── Pagination.css
└── index.jsx
README.md
```

## The app must have

- [x] Logo.
- [x] Home page.
- [x] Coin details page.
- [x] favorite page.
- [x] About page.
- [x] User can search for a crypto coin.
- [x] User can change the currency.
- [x] User can add and remove crypto coin from favorite.
- [x] App interacts with different types of devices (TV, Laptop, tablet and Mobile).

## nice to have

- [ ] server side where the user can login, register and logout.
- [ ] Pagination and Carousel.
