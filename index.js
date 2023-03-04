import express from "express";
import bodyParser from "body-parser";
import weather from "weather-js";

const router = express.Router();
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`server started`));
app.get("/", (req,res) => {
  console.log("test");

  weather.find({search: 'Padangsambian', degreeType: 'C'}, (err, result) => {
  if (err) console.log(err);
  res.send(result[0]);
  })
})
