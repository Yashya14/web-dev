const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Root get post")
});

router.get('/:id', (req, res) => {
    res.send("Root get id post route")
});

router.post('/', (req, res) => {
    res.send("Root post posts route")
});

module.exports = router;