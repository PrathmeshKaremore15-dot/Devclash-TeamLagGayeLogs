import express from "express" ;
import dotenv from "dotenv" ;
import axios from "axios" ;

dotenv.config() ;

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json()); 
app.set("view engine", "ejs");

app.get("/" , async (req , res) => {
  res.render("home.ejs") ;
});

app.listen(port , ()=> {
  console.log(`Listening on port http://localhost:${port}`) ;
});