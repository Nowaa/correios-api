const app = require('express')();
const cors = require('cors');
const { json } = require('express');

app.use(json());
app.use(cors());

app.use('/tracking', require('./routes/trackingRoutes'));

app.listen(3000, function () {
    console.log("!");
})