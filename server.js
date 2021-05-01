const express = require("express");
const app = express();
const PORT = 3005;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('client'));



app.get('/ping', (req, res) => {
    res.send('pong');
})

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
})