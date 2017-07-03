var express = require('express'),
bodyParser = require('body-parser');


//var Loan = require('./Models/loanModel');
var app = express();

var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//ROUTING
//LoanRouter = require('./Routes/LoanRoutes')(Loan);




//app.use('/api/loan',LoanRouter);

app.get('/',function(req,res){
    res.send('Welcome to my api');
});

app.listen(port,function(){
    console.log('Running on PORT: '+ port);
});
