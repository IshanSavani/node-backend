require('dotenv').config();
require('./config/connectdb').connect();
const express = require('express');
const app = express();
const cors = require('cors');
const {API_PORT} = process.env
const port = process.env.PORT || API_PORT;
app.use(cors());
app.use(express());
var swaggerJson = require('./swagger/swagger.json');
var publicDir = require('path').join(__dirname, '/');
const swaggerUi = require('swagger-ui-express');
app.use('/app-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use(express.static(publicDir))

app.get('/', (req, res) => {
    res.sendFile(__dirname + './index.html');
})

app.listen(port, () => {
    console.log(`Server Running on http://localhost:${port}`);
})