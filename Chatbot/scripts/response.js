emojis=['😥','😟','😧','🙃','🤣',]

let reply;
function bot_message_init(input) {
    if(input==="" || input==="."|| input==="/"){
        reply="Send a proper message please!🙃";
    }

    else if (input === 'hello' || input === 'hello!' || input === 'Hello' || input === 'Hello!' || input === 'Hi' || input === 'Hi!' || input === 'hi' || input === 'hey' || input === 'hey!' || input === 'Hey!' || input === 'Hey!' || input === 'Hey'||input==="hiii") {
        reply = "How's it going?😀";
    }

    else if(input==="Am good!"||input==="I am good!"||input==="Am good"||input===" am good"||input==="Am fine"||input==="I am fine"||input==="Am good"||input==="am fine"||input==="i m good"||input==="gud"||input==="Good"||input==="Good!"||input==="good"||input==="good!"){
        reply= "That's great!!😃";
    }

    else if(input==="Bad!"||input==="Not good!"||input==="not good!"||input==="nothing special"||input==="am sad!"||input==="not fine"||input==="not fine!"||input==="Not fine!"||input==="average day"||input==="Am sad"||input==="I am not feeling well"||input==="am not feeling well"||input==="not feeling well"||input==="am sad"){
        reply="Oh no! I'm sorry!😟";
    }

    else if(input === 'Good morning!' || input === 'Good morning' || input === 'good morning!' || input === 'good morning' || input === 'morning!' || input === 'Morning!' || input === 'morning' || input === 'Morning!!') {
        reply = "Good morning!☕";
    }
    
    else if (input === 'Good afteroon!' || input === 'Good afternoon' || input === 'good afternoon!' || input === 'good afternoon' || input === 'afternoon!' || input === 'afternoon!' || input === 'afternoon' || input === 'afternoon!!') {
        reply = "Good afternoon!☀️";
    }
    else if (input === 'Good evening!' || input === 'Good evening' || input === 'good evening!' || input === 'good evening' || input === 'evening!' || input === 'evening!' || input === 'evening' || input === 'evening!!') {
        reply = "Good evening!🌇";
    }
    else if (input === 'Good night!' || input === 'Good night' || input === 'good night!' || input === 'good night' || input === 'night!' || input === 'night!' || input === 'night' || input === 'night!!') {
        reply = "Good night!😴";
    }
    else if (input === 'how are you?!' || input === 'how are you' || input === 'How are you?!' || input === 'what"s up?' || input === 'how r u?' || input === 'howdy?' || input === 'How is you?' || input === 'how is u?') {
        reply = "I am good! Thanks for asking!😍";
    }
    else if (input === 'who are you?' || input === 'who are you' || input === 'Who are you?' || input === 'what is your name?' || input === 'what is ur name?' || input === "ur name?"|| input === 'what is you?' || input === 'who is u?') {
        reply = "I am Eve, a chatbot 👧";
    }
    else if(input==="That's funny!"||input==="that's funny!"||input==="That's funny"||input==="that's funny"||input==="That's funny!!"||input==="That is funny!"||input==="It is funny!"||input==="it's funny"||input==="it is funny"||input==="Hilarious!"||input==="LOL"||input==="Lmao"||input==="lol"||input==="lmao"||input==="Funny"||input==="funny"||input==="Funny!"||input==="funny!"||input==="haha"||input==="Haha"||input==="HAHA"){
        reply = "Hehe 🤣 Glad you enjoyed it ❤️";
    }
    else if(input==="Clear chat"||input==="Clear"|| input==="clear chat"|| input==="chat chat"|| input==="cls"|| input==="clr chat"||input==="CLS"){
        setTimeout(() => {
            window.location.reload();
        }, 600);
    }
    else 
        reply="Ask me something else!😧";

    return reply;
}
