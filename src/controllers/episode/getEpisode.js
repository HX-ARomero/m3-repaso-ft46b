const allEpisodes = require("../../utils/allEpisodes");

const getEpisode = (req, res) => {
  const { id } = req.query;
  if(id) {
    const foundEpisode = allEpisodes.find(
      episode => episode.id === Number(id)
    )
    if(foundEpisode) {
      return res.status(200).json(foundEpisode);
    }
    return res.status(404).json({ message: `No existe episodio con el id ${id}` });
  }
  return res.status(200).json(allEpisodes);
}

module.exports = getEpisode;