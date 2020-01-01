const router = require("express").Router();
const Task = require("../models/task");

router.post("", async (req, res) => {

    let task = new Task(req.body);
    try {
        task = await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("", async (req, res) => {

    try {
        let tasks = await Task.find({});
        res.send(tasks);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);

    } catch (e) {
        res.status(500).send();
    }
});

router.patch("/:id", async (req, res) => {
    const allowUpdates = ['description', 'completed'];
    const updates = Object.keys(req.body);

    const isValidoperations = updates.every(update => allowUpdates.includes(update));
    if (!isValidoperations) {
        return res.status(400).send({
            error: "Invalid Updates"
        });
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});

        if (!task) {
            return res.status(400).send("");
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }


});

router.delete("/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({
                error: 'Task Not Found'
            });
        }
        res.send(task);

    } catch (e) {
        res.status(500).send(e);
    }
});


module.exports = router;