const allEpisodes = require("../../utils/allEpisodes");

const putEpisode = (req, res) => {
  const { id } = req.params;
  const { name, air_date, episode, completed } = req.body;

  const foundEpisode = allEpisodes.find(
    episode => episode.id === Number(id)
  )
  //* foundEpisode = { id:... } || undefined

  if(!foundEpisode) {
    return res.status(404).json({ message: `No existe episodio con el id ${id}` });
  }
  if(!name && !air_date && !episode && completed === undefined) {
    return res.status(400).json({ message: `Debe enviara al menos una propiedad que modificar` });
  }
  //* Referencia al episodio => foundEpisode
  if(name) foundEpisode.name = name;
  if(air_date) foundEpisode.air_date = air_date;
  if(episode) foundEpisode.episode = episode;
  if(completed !== undefined) foundEpisode.completed = completed;

  return res.status(200).json(allEpisodes);

}

module.exports = putEpisode;

