const app = require('express')();
const http = require('http').createServer(app);

http.listen(3000, () => {
    console.log('helllllllllo      localhost:3000');
});

/* ----------- */

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>');
});


// // '/' = localhost:3000
// app.get('/', (req, res) => {

//     var arr = ['one', 'two', 'three', 'four']

//     var i = Math.floor(Math.random() * arr.length);

//     res.send('<h1>' + arr[i] + '</h1>');
// });


// app.get('/testme', (req, res) => {
//     res.send('<h1>It works</h1>');
// });

// app.get('/testme2', (req, res) => {
//     res.send('<h1>this is testme2</h1>');
// });


