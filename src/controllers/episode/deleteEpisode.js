let allEpisodes = require("../../utils/allEpisodes");

const deleteEpisode = (req, res) => {
  const { id } = req.params;
  const foundEpisode = allEpisodes.find(
    episode => episode.id === Number(id)
  );
  if(!foundEpisode) {
    return res.status(404).json({ message: `No existe episodio con el id ${id}` });
  }
  allEpisodes = allEpisodes.filter(
    episode => episode.id !== Number(id)
  );
  return res.status(200).json(allEpisodes);
}

module.exports = deleteEpisode;

// const myObject = {};
// myObject.hola = "Hola";
// // myObject = {}
// const myArray = [];
// myArray.push("a");