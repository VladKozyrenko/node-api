const express = require('express');
const router = express.Router();
const tasksService = require('../services/tasks.service');

router.get('/', (req, res) => {
    res.json(tasksService.getAllTasks());
});

router.get('/:id', (req, res) => {
    const task = tasksService.getTaskById(Number(req.params.id));
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
});

router.post('/', (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const task = tasksService.createTask(title);
    res.status(201).json(task);
});

module.exports = router;
