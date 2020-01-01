const router = require("express").Router();
const User = require("../models/user");


router.post("", async (req, res) => {

    let user = new User(req.body);

    try {
        user = await user.save();
        return res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("", async (req, res) => {

    try {
        const users = await User.find({});
        res.send(users);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.get("/:id", async (req, res) => {

    try {
        let user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);

    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/:id", async (req, res) => {
    const updates = Object.keys(req.body);
    console.log(updates);
    const allowedUpdates = ['name', 'email', 'password', 'age'];


    const isValidOperations = updates.every((update => {
        return allowedUpdates.includes(update);
    }));

    if (!isValidOperations) {
        return res.status(400).send({
            error: 'Invalid Updates'
        });
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (e) {
        res.status(500).send();
    }
});

router.delete("/:id", async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({
                error: "user not found"
            })
        }

        res.send(user);

    } catch (e) {
        res.status(500).send(e);
    }
});


module.exports = router;