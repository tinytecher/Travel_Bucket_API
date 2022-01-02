import express from "express";
//import books from "../data.js";
import { findPlaceByID, getPlaces } from "./models/places.js";
const app = express();
const port = 3000;

//telling app when you see a get request check which url in came in on "/"
app.get("/", function (req, res)  {
  const data = ({ message: "Hello from the root path!" });
  res.json(data);
});

app.get("/places", function (req, res){
  const places = getPlaces();
  res.json(places);
});

// GET /places/:placeID -> give the user the place with that id
app.get("/places/:placeID", function (req, res){
//make what is returns into a number
const id = req.params.placeID;
const found = findPlaceByID(id);
if(found === undefined){
  res.json ({message: `${req.params.placeID} does not exist`});
  return;
}
res.json({message: "i found", payload: found});
}); 

app.listen(port, function()  {
  console.log(`App listening at http://localhost:${port}`);
});