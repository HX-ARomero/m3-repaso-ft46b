const express = require("express");
const { postEpisode, getEpisode } = require("../controllers");
const episodeRouter = express.Router();

episodeRouter.post("/:id", postEpisode);
episodeRouter.get("/", getEpisode);

module.exports = episodeRouter;