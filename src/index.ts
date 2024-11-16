import express from "express";
import jwt from "jsonwebtoken";
import { UserModel } from "./ds";
import { ExitStatus } from "typescript";

const app = express();
app.use(express.json())

app.post("/api/v1/signup", async (req, res)=> {
    const { username, password } = req.body

    await UserModel.create({
        username,
        password
    })

    res.json({
        message: "Signed Up"
    })
})

app.post("/api/v1/signin", async (req, res)=> {
    const { username, password } = req.body

    const existingUser = await UserModel.findOne({
        username,
        password
    })
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, jwt_password)
    }
})

app.post("/api/v1/content", (req, res)=> {

})

app.get("/api/v1/content", (req, res)=> {

})

app.delete("/api/v1/content", (req, res)=> {

})

app.post("/api/v1/brain/share", (req, res)=> {

})

app.get("/api/v1/brain/:sharelink", (req, res)=> {

})

app.listen(3000);