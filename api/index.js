const express = require('express');
const cors = require('cors');
const Users = require("./fbConfig");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;

// GET data of all users (returns a list in which each element is one user's data)
app.get("/api/v1/users/all", async (req, res) => {
    try{
        const theUsers = await Users.get();
        const allUserData = theUsers.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
        res.send(allUserData);
    } catch (e) {
        console.log(e);
        res.send("ERROR");
    }
   
})

// GET data of a specific user by ID
app.get("/api/v1/users/:id", async (req, res) => {
    try {
        const userDoc = await Users.doc(req.params.id).get();
        const allUserData = ({
            id: userDoc.id,
            ...userDoc.data()
        });
        res.send(allUserData);
    } catch (e) {
        console.log(e);
        res.send("ERROR");
    }
})

// POST a new user to the db
app.post("/api/v1/users", async (req, res) => {
    try {
        await Users.add(req.body);
        res.send({ msg: "User Added to DB"});
    } catch (e) {
        console.log(e);
        res.send({ msg: "ERROR"});
    }
})

// PATCH (edit) the data of a specific user by ID
app.patch("/api/v1/users/:id", async (req, res) => {
    try {
        await Users.doc(req.params.id).update(req.body);
        res.send({ msg: "Data Updated"});
    } catch (e) {
        console.log(e);
        res.send({ msg: "ERROR"});
    }
})

// DELETE specific user by ID
app.delete("/api/v1/users/:id", async (req, res) => {
    try {
        await Users.doc(req.params.id).delete();
        res.send({ msg: "User Deleted"});
    } catch (e) {
        console.log(e);
        res.send({ msg: "ERROR"});
    }
    
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));