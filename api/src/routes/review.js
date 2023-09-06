import { Router } from "express";

//? Controllers

import postReview from "../controllers/review/postReview.js";
import getReview from "../controllers/review/getAllReviews.js"
import getReviewById from "../controllers/review/getReviewById.js"
import putReview from "../controllers/review/putReview.js"
import deleteReview from "../controllers/review/deleteReview.js";

const router = Router();


//? Rutas .get
router.get("/review", getReview)
router.get("/review/:reviewId", getReviewById)

//? Ruta .put
router.put("/review/:reviewId", putReview)

//? Ruta .post
router.post("/review", postReview)

//? Ruta .delete
router.delete("/review/:reviewId", deleteReview)

import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

import Review from "../models/schemas/reviews.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);




router.post("/review/bulk", async (req, res) => {
    try {
        const filePath = path.join(__dirname, "../data/reviews.json");
        console.log(fs.readFileSync(filePath, "utf8"));
        const reviews = JSON.parse(fs.readFileSync(filePath, "utf8"));

        if (!Array.isArray(reviews)) {
            return res.status(400).json({ message: "Invalid data format. Expecting an array of reviews." });
        }

        const createdReviews = await Review.create(reviews);
        return res.json(createdReviews);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
});

export default router