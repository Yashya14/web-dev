const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Root get user")
});

router.get('/:id', (req, res) => {
    res.send("Root get id route")
});

router.post('/', (req, res) => {
    res.send("Root post route")
});

module.exports = router;