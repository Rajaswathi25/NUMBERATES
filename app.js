const submitbutton = document.getElementById("checkButton");
console.log(submitbutton);
console.log()
var randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
var live = 10;
var text;
const message = document.getElementById("message");
const lives = document.getElementById("attemptCount");
submitbutton.onclick = () => {
    var inputValue = document.getElementById("textBox").value;
    console.log(inputValue);
    live--;
    //winning condition if input == random no
    if (inputValue == randomNumber)
{ location.href = './win.html' }
else if (live == 0) {
    location.href='./lose.html'
} 
else if (inputValue > randomNumber) {
    text=`Your guess is too high.You have ${live} attempts remaining`;
}
else if (inputValue < randomNumber) {
    text = `Your guess is too low. You have ${ live } attempts remaining`;
}
console.log(live);
    console.log(text);
    message.style.display = "inherit";
    message.innerHTML = text;
    lives.innerHTML = live;
}