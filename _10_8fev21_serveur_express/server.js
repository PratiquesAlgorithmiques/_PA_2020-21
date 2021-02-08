const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
    var txt = getText();
    res.send('<h1>' + txt + '</h1>');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});


function getText() {
    var simplelist = ["Hello", "What is your name?", "How are you?", "Do you like bots?"];
    var i = Math.floor(Math.random() * simplelist.length);
    return simplelist[i];
}