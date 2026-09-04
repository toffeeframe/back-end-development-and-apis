import express from "express";
import { readWatchlists } from "../utils/db";

const router = express.Router();

/*
When an authenticated user with the parent role makes a PUT request to :userId/movies/:movieId, the server should return a 200 status and update the movie on that user's watchlist.

When an authenticated user with the child role makes a PUT request to :userId/movies/:movieId where :userId belongs to another user, the server should return a 403 status.

When an authenticated user with the child role makes a PUT request to :userId/movies/:movieId where :userId is their own, the server should return a 200 status and update the movie.

When an authenticated user with the parent role makes a DELETE request to :userId/movies/:movieId, the server should return a 200 status and remove the movie from that user's watchlist.

When an authenticated user with the child role makes a DELETE request to :userId/movies/:movieId where :userId belongs to another user, the server should return a 403 status.

When an authenticated user with the child role makes a DELETE request to :userId/movies/:movieId where :userId is their own, the server should return a 200 status and remove the movie.
*/

router.get("/:userId", authenticate, (req, res) => {
    const { userId } = req.params;
    
    res.status(200).json(readWatchlists(userId));
});

router.route("/:userId/movies")
.post((req, res) => {
    const { userId } = req.params;
    const { role } = JSON.parse(req.body);

    if (role === "parent") {
        
    } else if (role === "child") {

    }

/*

When an authenticated user with the parent role makes a POST request to :userId/movies, the server should return a 201 status and add the movie to that user's watchlist.

When an authenticated user with the child role makes a POST request to :userId/movies where :userId belongs to another user, the server should return a 403 status.

When an authenticated user with the child role makes a POST request to :userId/movies where :userId is their own, the server should return a 201 status and add the movie to their watchlist.

*/
});

router.route("/:userId/movies/:movieId")
.put((req, res) => {
    const { userId, movieId } = req.params;
})
.delete((req, res) => {
    const { userId, movieId } = req.params;
});

export default router;
