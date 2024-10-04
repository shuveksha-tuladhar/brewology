# Brewology

Brewology is a web application that allows users to explore a wide range of hot and iced coffee drinks. Users can browse through a list of drinks, access detailed information about each drink, and use a search function to filter drinks. The application fetches coffee drink data from an external API, categorizes them as hot or iced drinks, and offers a modal popup for in-depth descriptions of each drink.  The detailed description includes the drink title, description, image, and ingredients.

## Features
- Fetch coffee data from an external API.
- Display categorized lists of hot and iced drinks.
- Search functionality to filter drinks based on keywords.
- Modal popups with detailed descriptions, images, and ingredients of each drink.
- Loading indicator while fetching drink data.
- Error handling in case the API call fails.

## API
The app fetches data from the [Sample Coffee API](https://sampleapis.com/api-list/coffee). The API returns a list of coffee drinks, which are categorized into hot and iced drinks.

## Technologies Used
- React
- Bootstrap 5
- [External API](https://sampleapis.com/api-list/coffee)
- Vite

## Getting Started
- Clone this repository
  ```
  https://github.com/shuveksha-tuladhar/brewology.git
  ```
- Install node libraries
  ```
  npm install
  ```
- Run the server
  ```
  npm run dev
  ```
