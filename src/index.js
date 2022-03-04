const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const GlobleMiddleware=require('./middlewares/allMiddlewares')
app.use(GlobleMiddleware.mid10)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(mid1.mid1)


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

///////////////////////////////////////////////////////////////////////////////////

app.use((req,res,next) =>{
    console.log("Welcome to Middleware, this is global middleware.")
    next();
})




app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
