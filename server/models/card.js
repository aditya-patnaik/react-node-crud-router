var mongoose = require('mongoose');

var Card = mongoose.model('Card', {
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		default: false
	},
	author: {
		type: String,
		default: null
	}
});

module.exports = {Card};