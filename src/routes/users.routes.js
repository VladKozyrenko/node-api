const express = require('express');
const router = express.Router();
const usersService = require('../services/users.service');

router.get('/', (req, res) => {
    res.json(usersService.getAllUsers());
});

router.get('/:id', (req, res) => {
    const user = usersService.getUserById(Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
});

router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }
    const user = usersService.createUser(name);
    res.status(201).json(user);
});

module.exports = router;
