const express = require('express');
const app = express();
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRout = require('./routes/users')
const postRout = require('./routes/posts')
const categoryRout = require('./routes/categories')
const multer = require('multer')

dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log('connected to MongoDB'))
    .catch(err => console.log(`there is ${err}`));


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    }, filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});


const upload = multer({storage})
app.post('/api/upload', upload.single("file"), (req, res) => {
    res.status(200).json('File has been uploaded')
})
app.use('/api/auth', authRoute)
app.use('/api/users', userRout)
app.use('/api/posts', postRout)
app.use('/api/categories', categoryRout)


app.listen(3000, () => {
    console.log('Backend is running')
})
