let sendMsg = document.querySelector('.fa-paper-plane');
let botMsg = document.getElementById('bot-text');
let chatTime = document.getElementById('chat-time');
let chatDiv = document.getElementById('chat-appending');
let inputBlock = document.getElementById('user-msg');


let userInputArray = []
let today = new Date();
let hours = today.getHours();
let min = today.getMinutes();


// click functions
function heart() {
    let heartIcon = document.querySelector('.fa-heart');
    heartIcon.classList.add('icon-animation');
    setTimeout(() => {
        heartIcon.classList.remove('icon-animation');
    }, 500);
};
function send() {
    const sendIcon = document.querySelector('.fa-paper-plane');
    sendIcon.style.color = 'green';
    setTimeout(() => {
        sendIcon.style.color = "aqua";
    }, 500);
}

sendMsg.addEventListener("click",function msginit() {
    // send message click
        chatTime.innerHTML = `
       <p>${hours} : ${min}</p>
        `;
    let newpara = document.createElement('p');
    let botpara = document.createElement('p');
    let userMsg = document.getElementById('user-msg').value;

    userInputArray.push(userMsg);
    newpara.innerHTML = `<p>${userMsg} <img src="./static/user-icon-yellow.jpeg"></p>`;
    newpara.classList.add('input-chat');
    chatDiv.appendChild(newpara);
    if (userMsg === 'Tell me a joke!' || userMsg === 'tell me a joke!' || userMsg === 'Tell me a joke' || userMsg === 'tell me a joke') {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'jokeapi-v2.p.rapidapi.com',
                'X-RapidAPI-Key': '18bab2eda6msh0029f8a7d7fcf40p1af132jsn0ef36b5211bd'
            }
        };

        fetch('https://jokeapi-v2.p.rapidapi.com/joke/Programming?format=json&idRange=0-319&blacklistFlags=nsfw%2Cracist&type=single', options)
            .then(response => response.json())
            .then(response => {
                botpara.innerHTML = `<p><img src="./static/bot icon.jpg">${response.joke}</p>`;
                botpara.classList.add('bot-text');
                chatDiv.appendChild(botpara);
                botpara.scrollIntoView(false);// scroll to last line present
            })
            .catch(err => console.error(err));
    }
    else {
        let reply = bot_message_init(userMsg);
        setTimeout(() => {
            botpara.innerHTML = `<p><img src="./static/bot icon.jpg">${reply}</p>`;
            botpara.classList.add('bot-text');
            chatDiv.appendChild(botpara);
            botpara.scrollIntoView(false);// scroll to last line present
        }, 600);

    }
    setTimeout(() => { // clearing user input panel 
        document.getElementById('user-msg').value = '';
        userMsg = "";
    }, 100);
    
});

inputBlock.addEventListener('keyup',(event)=>{
    if(event.key === "Enter"){
        msgInit();
    }
});

let display = false;
const container = document.getElementById('container');
container.style.display = 'none';
let hint = document.getElementById('hint');
const chatbtn =  document.getElementById('chat-btn');
chatbtn.addEventListener('click',()=>{
    if(display===false){
        container.style.display="block";
        hint.textContent = "close!";
        display=true;
    }
    else if(display){
        container.style.display='none';
        hint.textContent = "open!"
        display=false;
    }
    else{
        display=false;
    }
})

const refresh = document.getElementById('reset-btn')
refresh.addEventListener('click',()=>{
    setTimeout(()=>{
        window.location.reload();
    },400);
});

