const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const RegisterController = require('./controllers/RegisterController.js');


const PORT = process.env.PORT || 8000;


if(process.env.NODE_ENV !== 'prodcuction'){
	require('dotenv').config()
}


app.use(cors());


app.use(express.json());


app.get('/', (req, res)=>{
	res.send("I am trash");
})

app.post('/register', RegisterController.store)

try {
	mongoose.connect(process.env.MONGO_DB_CONNECTION, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
	)
	console.log("mongo connected");
}
catch (error) {
	console.log("nah bro");
}

app.listen(PORT, ()=>{
console.log(`listening on ${PORT}`);	
})