const express = require('express');
const pool = require('../modules/pool');
const pg = require('pg');

const router = express.Router();

router.get('/', (req, res) => {
    // return all movies
    const queryText =
        `SELECT movies.id, movies.title, movies.poster, movies.description, array_agg(genres.name) as genres
        FROM movies 
        JOIN movie_genre ON movies.id = movie_genre.movies_id
        JOIN genres ON genres.id = movie_genre.genres_id
        GROUP BY movies.id
        ORDER BY title;`
        ;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error on query ', err);
            res.sendStatus(500);
        });
});

router.put('/edit', (req, res) => {
    // return all movies
    const queryText =
        `UPDATE movies SET title = $1, description = $2;`
        ;
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error on put server ', err);
            res.sendStatus(500);
        });
});







module.exports = router;
