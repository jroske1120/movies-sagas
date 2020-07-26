# PROJECT NAME
Saga Movies

## Description

_Duration: 2 Days_

This is Joel Roske's full stack React App incorporating Reducers and Sagas.

## Screen Shot

![Joel Roske React Saga Movies](MovieSaga.gif)

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation

1. Create a database named `saga_movies_weekend`.
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries. 
3. Open up your editor of choice and run an `npm install`
- Make sure you also have `express`, `axios`, `react-redux`, `redux-logger`, `react-router`, and `pg` installed
4. Run `npm run server` in your first terminal
5. Run `npm run client` in your second terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. On loading the page, the user will see a scrolling list of films fade in from the left.
2. Clicking on the movie poster brings you to that movie's detail page.
3. On the details page, the user can see all details and decide to either return to the main list of movies or edit the details of the movie they clicked.
4. Any changes made on the edit page are visible to the user in the poster below.
5. When user submits, an axios PUT request edits that information and is visible when they are returned to the details page. 
6. The user can either make more changes, or return to the main page where they will see their changes. 

## Built With

The full stack! React, JSX, Javascript, CSS, Axios, Node, Express, Material UI, and Postgres with SQL and Sagas.

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality, well as the members of my cohort, Paxos.

## Support
If you have suggestions or issues, please email me at [joel.j.roske@gmail.com](www.google.com)