const btn = document.getElementById('btn');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;
recognition.onstart = function(){
    console.log('You can speak now!!!');
}

recognition.onresult = function(event){
    var text = event.results[0][0].transcript;
    //console.log(text);
    document.getElementById('result').innerHTML = text;
    read(text);
}

function read(text){
    var speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    var test = false ;
    speech.text = text;

    if(text.includes('hello Alexia')){
        test = true ;
        speech.text = 'Hello Sir Saif ';
    //window.speechSynthesis.speak(speech);
    }else if(text.includes('how are you')){
        speech.text = 'I am fine , what about you ? ';
        test = true ;

       // window.speechSynthesis.speak(speech);
    }else if(text.includes('fine')){
        speech.text = 'Good how can i help you today ?';
        test = true ;

    }
    else if(text.includes('Kitchen on') || text.includes('kitchen light on') ||  text.includes('kitchen led on') ||  text.includes('kitchen on')){
        speech.text = 'Yes Sir kitchen light on';
        test = true ;

    }
    else if(text.includes('thank you')){
        speech.text = 'your welcome';
        test = true ;

    }
    if (test) {
        window.speechSynthesis.speak(speech);

    }else{
        speech.text = "Excuse me, sir, I don't get it.";
        window.speechSynthesis.speak(speech);

    }


    //speech.text = 'It is '+new Date().getHours() + " " + new Date().getMinutes()+" right now";

}