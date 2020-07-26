const express = require('express');
const pool = require('../modules/pool');
const pg = require( 'pg' );

const router = express.Router();


//Get specific genres for movie
router.get('/:id', (req, res) => {
    console.log('GET - movie using id =', req.params.id);
    let queryString = 
    `SELECT movies.title, movies.poster, movies.description, array_agg(genres.name) as genres
    FROM movies 
    JOIN movie_genre ON movies.id = movie_genre.movies_id
    JOIN genres ON genres.id = movie_genre.genres_id
    GROUP BY movies.id
    ORDER BY title;`;
    pool.query(queryString, [req.params.id]).then((result) => {
        res.send(result.rows[0]);
    }).catch((err) => {
        console.log('ERROR GETTING movie --------------->', err);
        res.send(500);
    })
}) // end /genre GET







module.exports = router;
