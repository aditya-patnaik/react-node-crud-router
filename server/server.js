require('./config/config');

const path = require('path');
const appRoot = require('app-root-path');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
var swig = require('swig');
const { ObjectId } = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Card} = require('./models/card');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.static(path.join(appRoot.toString(), '/client')));
app.engine('html', swig.renderFile);
app.set('views', path.join(appRoot.toString(), 'views'));
app.set('view engine', 'html');

app.get('/cards', (req, res) => {
	Card.find().then((cards) => {
		res.send(cards)
	}, (err) => {
		res.status(400).send(e);
	});
});

app.get('/cards/:id', (req, res) => {
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return res.status(404).send();
	} 
	Card.findOne({
		_id: id
	}).then((card)=>{
		if(!card){
			return res.status(404).send();
		}

		res.send({card});
	}).catch((e) => {
		res.status(400).send();
	});
});

app.get('/*', (req, res) => {
	res.render('Home', {title: 'Home'});
});

app.post('/card', (req, res) => {
	var newEntry = new Card({
		title: req.body.title,
		content: req.body.content,
		author: req.body.author
	});

	newEntry.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});

module.exports = {app};