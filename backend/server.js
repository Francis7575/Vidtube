const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const allowedOrigins = ['https://vidtube-1.onrender.com', 'http://localhost:5173'];

const dynamicCorsOptions = {
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);  // Allow the request if the origin is in the allowedOrigins array
        } else {
            callback(new Error('Not allowed by CORS'));  // Block the request if the origin is not allowed
        }
    },
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PUT, DELETE',
};

app.use(cors(dynamicCorsOptions)); 
app.use(express.json())
app.use(cookieParser(process.env.SECURITY_KEY))
app.use(express.urlencoded({ extended: true }))

const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Server is up!')
})

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is running on port ${process.env.BACKEND_PORT}...`)
})