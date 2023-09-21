const express = require("express");
const app = express();

const admin = require("firebase-admin")
const credentials = require("./key.json")

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});
const db = admin.firestore()

app.use(express.json());
app.use(express.urlencoded({extended:true}));



const PORT = 3000
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))




// --------------------view----------------------------------
app.get('/', (req, res) => res.send('Hello World!'))

//-----------------------create------------------------------
app.post('/create', async (req, res)=>{
    try {
        console.log(req.body)
        const userJson = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            sex: req.body.sex,
        };
        const response = await db.collection("users").add(userJson);
        res.send(response)
    } catch (e) {
        res.send(e)
    }
})

// --------------------------read all----------------------
app.get('/read/all',  async (req, res)=>{
    try {
        const userRef = db.collection("users");
        const response =  await userRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch (e) {
        res.send(e);
    }
})

// -------------------------read any one------------------------------
app.get('/read/:id',  async (req, res)=>{
    try {
        const userRef = db.collection("users").doc(req.params.id);
        const response =  await userRef.get();
        res.send(response.data());
    } catch (e) {
        res.send(e);
    }
})


//----------------update--------------------------
app.post('/update',  async (req, res)=>{
    try {
        const id= req.body.id;
        const newEmail = "taylorislove@gmail.com";
        const newFirstName = "Taylor";
        const newLastName = "Swift";
        const newAge = "16";
        const newSex = "female";

        const userRef = await db.collection("users").doc(id)
        .update({
            email: newEmail,
            firstName: newFirstName,
            lastName: newLastName,
            age: newAge,
            sex: newSex,
        })
        const response =  await userRef.get();
        res.send(response);
    } catch (e) {
        res.send(e);
    }
})


// --------------------delete-------------------------------
app.delete('/delete/:id',  async (req, res)=>{
    try {
        const response = await db.collection("users").doc(req.params.id).delete();
        res.send(response);
    } catch (e) {
        res.send(e);
    }
})