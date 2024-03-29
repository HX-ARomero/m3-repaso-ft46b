const app = require("./src/app.js");
require("dotenv").config({ path: "./.env" });
const PORT = process.env.PORT || 3001;

app.listen(PORT, () =>
  console.log(`Server listening on http://localhost:${PORT}`)
);