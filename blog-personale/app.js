const express = require ('express');
const app = express();

const PORT = 3000;

const posts = require('./posts');

app.use(express.static('images'));

app.get('/', (req, res) => {
    res.send('Server del mio blog');
})

app.get('/bacheca' , (req, res) => {
    res.json({ posts });
});

app.listen(PORT, () => {
    console.log(`Server avviato su http://localhost:${PORT}`);
});

