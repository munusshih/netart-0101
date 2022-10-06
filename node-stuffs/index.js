import express from 'express';

const app = express();

// start hosting a webserver
const port = 5500;
app.listen(port, function () {
    console.log("cooking things up at port" + port);
});


// host some fron-end HTML/CSS/JS
app.use(express.static("public"));

// capture anyone who goes to website.com/abc and drop this line of code --> routing
console.log('hello! im here this is node.')