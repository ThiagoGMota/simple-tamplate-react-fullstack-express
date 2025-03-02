const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3000;

app.use(cors())

app.get('/', (req, res) => {
    res.json([
        {
            saudacao: "Welcome to my api",
            id: crypto.randomUUID()
        }
    ])
})

app.listen(PORT, () => {
    console.log(`Working on port ${PORT}`);
})
