# News-Explorer

Author: Assel Kadyrkul

News-Explorer is a search results page using 3rd party API to search for relevant news by keyword.


## Live

Link to deployed [website](https://news-search.students.nomoreparties.site/)

## Description
Aim: production of a MERN stack application with pull requests and review.

Functionalities:

- Separate API for managing users and saved articles [backend repo](https://github.com/aselyaa8/news-explorer-backend)
- Allows unregistered and registered users to search for news by keywords. 3rd party [News API](https://newsapi.org/) was integrated.
- User authentication and authorization. JWT is handled for authentication on subsequent visits.
- Allows the user to sign up and authenticate if that email name is not taken
- Clicking bookmark allows authorized users to save news articles to a personal profile or delete them. In personal profiles, the bookmark icon is substituted by the delete icon.
- Clicking bookmark prompts unauthorized users to sign in
- Personal profile page shows the most popular among saved articles 3 user's search keywords.
- Login and registration forms contain validation using hooks
- App is fully responsive using a mobile-first approach.


## Tech
React, React router, NodeJS, Express.js, MongoDB, GCP

## Future improvements
 - Opening article, displaying full information on a new page
- Default images and texts when problems occur
- Use Typescript and refactor.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
