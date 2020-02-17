const  express =require('express');
const  path = require('path');
const morgan =require('morgan');
const  mysql =require('mysql');
const myConnnection = require('express-myconnection');
const  app =express();

app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const  cutomerRoutes = require('./routes/customer');

app.use(express.static(path.join(__dirname,'public')))

app.use(morgan('dev'));

app.use(myConnnection(mysql,{
    host:'localhost',
    user:'root',
    password:'root',
    port:3306,
    database:'crud_node'
},'single'));

app.use(express.urlencoded({extended:false}));
//routes

app.use('/',cutomerRoutes);


app.listen(app.get('port'),()=> {

        console.log('server is running');
    }
);
