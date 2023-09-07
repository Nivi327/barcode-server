const express = require('express');
const cors = require('cors');

const postRouter = require('./Router/Posts');

const PORT = 4000;

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/posts', postRouter);

app.listen(PORT, () => {
    console.log(`PORT is running on http://localhost:${PORT}`);
});