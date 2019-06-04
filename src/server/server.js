const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");


const app = express();

const port = 5000;

routes(app);

const uri = "mongodb+srv://vincent:vincent@cluster0-ekcxm.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,{
  useNewUrlParser: true
}).then(() => {
  console.info('Connected to Database successfully!');
}).catch((er) => {
  console.error('Error connection to db', er);
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})