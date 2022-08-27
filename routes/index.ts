import express from 'express';
const Router = express.Router();

Router.get('/', (req, res) => {
    res.json('Hello :)');
});

Router.post('/', (req, res) => {
    res.json(req.body);
});

export default [Router] as typeof Router[];