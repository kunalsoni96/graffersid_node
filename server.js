const app = require('express')()
const env = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

env.config()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const rootRouter = require('./src/routes/index')
app.use('/api', rootRouter)

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is running on ${process.env.PORT}`)
})