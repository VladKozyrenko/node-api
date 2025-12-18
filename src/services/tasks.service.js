let tasks = [];
let idCounter = 1;

function getAllTasks() {
    return tasks;
}

function getTaskById(id) {
    return tasks.find(t => t.id === id);
}

function createTask(title) {
    const task = { id: idCounter++, title };
    tasks.push(task);
    return task;
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask
};
