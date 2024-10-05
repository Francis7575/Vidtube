const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cookieParser = require('cookie-parser')
const cors = require('cors')

const FRONTEND_URL = process.env.FRONTEND_URL

const corsOptions = {
    origin: FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
    methods: 'GET, POST, PUT, DELETE',
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Combine headers
    next();
});
app.use(express.json())
app.use(cookieParser(process.env.SECURITY_KEY))
app.use(express.urlencoded({ extended: true }))

const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.status(200).send('Server is up!')
})

// Added on cron-job to ping the server every 10 mins to avoid the server sleep on render for inactivity
app.get("/server-alive", (req, res) => {
    try {
        res.status(200).send("Test route working");
    } catch (error) {
        console.error(error);
        res.status(500).send("Something went wrong");
    }
});

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server is running on port ${process.env.BACKEND_PORT}...`)
})