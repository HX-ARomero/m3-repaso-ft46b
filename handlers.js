//! REQUEST
//? http://localhost:3001/episode/2

//* HOST
//* http://localhost:3001/

//* MIDDLEWARES
app.use("/episode", episodeRouter);

//* RUTAS
episodeRouter.put("/:id", putEpisodeHandler);

//* HANDLER
//*   - Desestructurar la información recibida
//*   - Manejar el error con Try/Catch
//*   - Ejecutar el Controller
//*   - Devuelve respuesta
const putEpisodeHandler = (req, res) => {
  const { id } = req.params;
  try {
    const response = putEpisodeController(id);
    res.json(response);
  } catch (error) {
    res.send(error.message);
  }
};

//* CONTROLLER
//*   - Manejar la lógica
//*   - Interacción con fuentes externas (BBDD, API... => ASYNC)
//*   - Devuelve la respuesta o lanza un ERROR
const putEpisodeController = async (id) => {
  if (true) return "Esta es la respuesta";
  else throw new Error("Este es el error");
};
