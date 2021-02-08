function setup() {
    var simplelist = ["Hello", "What is your name?", "How are you?", "Do you like bots?"];
    let phrase = random(simplelist); 
    console.log(phrase);
    document.getElementById("coco").innerHTML = phrase;
}    