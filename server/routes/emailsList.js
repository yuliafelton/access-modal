const express = require('express');
const fs = require('promise-fs');
const router = express.Router();

const EMAILS_PATH = './emails.json';

router.get('/', async (req, res) => {
    const emails = await fs.readFile(EMAILS_PATH);
    res.send(emails);
});

module.exports = router;