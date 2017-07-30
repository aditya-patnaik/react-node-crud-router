var env = process.env.NODE_ENV || 'development';
console.log('******************');
console.log('ENV = ', env);
console.log('******************');

if(env === 'development' || env === 'test') {	
	process.env.PORT = 3000;
	process.env.MONGODB_URI = "mongodb://Aditya:password@ds057862.mlab.com:57862/armentum";
}