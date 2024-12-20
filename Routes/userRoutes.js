const express = require("express")
const router = express.Router()
const User = require("../models/userSchema")

router.post("/createUser", async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json({ msg: "user created", user: newUser })
    } catch (error) {
        res.status(500).json({ msg: error.msg })
    }
})

router.get("/getUser", async (req, res) => {
    try {
        const user = await User.find()
        res.status(201).json({ msg: "user not found", user: user })
    } catch (error) {
        res.status(500).json({ msg: error.msg })
    }
})

router.put("/updateUser/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({_id: req.params.id}, {...req.body});
        res.status(201).json({ msg: "user updated", user: user });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
});

router.delete("/deleteUser", async (req, res) => {
    try {
        const user = await User.find()
        res.status(201).json({ msg: "user deleted", user: user })
    } catch (error) {
        res.status(500).json({ msg: error.msg })
    }
})
module.exports = router