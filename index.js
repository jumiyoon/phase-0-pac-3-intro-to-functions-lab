function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string){
    const a = string.toUpperCase();
    console.log(a);
}

function logWhisper(string){
    const b = string.toLowerCase();
    console.log(b);
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!"}
    else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
    }  