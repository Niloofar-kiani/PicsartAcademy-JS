function hackerSpeak (speak){
  for (let i = 0; i < speak.length; i++) {
    switch (speak[i]) {
        case 'a':
          speak = speak.replace("a", "4");
            break;
        case 'e':
          speak = speak.replace("e", "3");
            break;
        case 'i':
          speak = speak.replace("i", "1");
            break;
        case 'o':
          speak = speak.replace("o", "0");
            break;
        case 's':
          speak = speak.replace("s", "5");
            break;
    }
}
console.log(speak) ;
}

hackerSpeak("javascript is cool") ;

hackerSpeak("programming is fun");

hackerSpeak("become a coder");