const express = require("express");
const { postEpisode, getEpisode, putEpisode, deleteEpisode } = require("../controllers");
// const postEpisode = require("../controllers/episode/putEpisode.js");
// const getEpisode = require("../controllers/episode/getEpisode.js");
// const putEpisode = require("../controllers/episode/putEpisode.js");
// const deleteEpisode = require("../controllers/episode/deleteEpisode.js");

const episodeRouter = express.Router();

episodeRouter.post("/:id", postEpisode);
episodeRouter.get("/", getEpisode);
episodeRouter.put("/:id", putEpisode);
episodeRouter.delete("/:id", deleteEpisode)

module.exports = episodeRouter;