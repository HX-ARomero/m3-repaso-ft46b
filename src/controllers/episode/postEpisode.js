const axios = require("axios");
const allEpisodes = require("../../utils/allEpisodes.js");

const postEpisode = async (req, res) => {
  const { id } = req.params;
  try {
    //* Verificar que no exista en allEpisodes
    const foundEpisode = allEpisodes.find(
      episode => episode.id === Number(id)
    )
    if(foundEpisode) {
      return res.status(400).json({ message: `Ya existe episodio con el id ${id}` })
    }

    //* Petición
    const { data } = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    const newEpisode = {
      id: data.id,
      name: data.name,
      air_date: data.air_date,
      completed: false
    };
    //* Response traiga el episodio
    if(!newEpisode.name) {
      return res
        .status(404)
        .json({ message: `No existe episodio con el id ${id}` })
    }
    allEpisodes.push(newEpisode);
    res.status(200).json(allEpisodes);
    
  } catch (error) {
    res.status(404).json({ message: `No existe episodio con el id ${id}` });
  }
}

module.exports = postEpisode;