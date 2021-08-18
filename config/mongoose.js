const mongoose = require('mongoose');

// connecting to mongoDB

mongoose.connect('mongodb://localhost/to_do_list_inDB',
                   {useNewUrlParser: true, useUnifiedTopology: true} );


//acquiring connection whether it is connect or not

const db = mongoose.connection;
db.on('error' , console.error.bind(console , 'connection error :'));
db.once('open' , function(){
    console.log('yeah! we are successfully connected');
});