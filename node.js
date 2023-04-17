import express from 'express';
const app = express();
const Students = [
    "abdelrahman",
    "ahmed",
    "anas",
    "ibrahim",
    "kareem"
]
const studentlist = (req, res) => {
    let op = "<ul>"
    for (let i = 0; i < Students.length; i++) {
        op += "<li>" + Students[i] + "</li>";
    }
    op += "</ul>"
    res.send(op)
}
app.get("/students", studentlist)
app.listen(3000)