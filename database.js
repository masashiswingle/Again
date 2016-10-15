var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.conenction; 
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});

var bananaSchema = mongoose.Schema({
	name: String, 
	Origin: String, 
	Barcode: Number
});

var Banana = mongoose.model('Banana', bananaSchema)

var yellowBanana = new Banana({ name: 'Henry', 'SF', '123' });
console.log(yellowBanana.name);
