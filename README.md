# Crypto Coin app

## 1. Description

This app help the investor tracking the crypto they are investing on by checking the current price, market cap, crypto rank, analyzing, finding crypto and adding them crypto to a favorite.</br>

All this information are provided from most popular and famous website, which is: [coin market cap](https://coinmarketcap.com).</br>

## 2. Link and Preview

![App view](./assets/Laptop-and-mobile.jpg)

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
  └── Banner.js
  └── ChartDaysData.js
  └── CoinChart.js
  └── CoinDetails.js
  └── CoinsList.js
  └── CustomTooltip.js
  └── FavoriteButton.js
  └── Header.js
  └── TrendingCoins.js
└── context
  └── CryptoContext.js
  └── FavoriteContext.js
└── image
  └── banner-logo.png
  └── Banner-new2.jpg
  └── Logo.png
└── pages
  └── AboutPage.js
  └── CoinPage.js
  └── FavoritePage.js
  └── HomePage.js
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
  └── TrendingCoins.css
└── index.js
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
