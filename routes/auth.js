import express from "express"

const router = express.Router()


router.get("/login", (req, res) => {
    res.send("THIS IS LOGIN ENDPOINT!")
})

router.get("/register", (req, res) => {
        res.send("THIS IS REGISTER ENDPOINT!")
})



export default router
