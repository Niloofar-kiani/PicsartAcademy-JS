//Jake is a very habitual person. He eats breakfast at 7:00 a.m. each morning,
// lunch at 12:00 p.m. and dinner at 7:00 p.m. in the evening.




function timeToEat(str) {
    const BREAKFAST = 7 * 60;
    const LUNCH = 12 * 60;
    const DINNER = 19 * 60;
    let time = str.split(" ");
    let hours = +time[0].split(":")[0];
    let minutes = +time[0].split(":")[1];

   
    if (time[1] === "p.m." && hours < 12) {
        hours += 12;
    }

    let givenHour = hours * 60 + minutes;
    let hoursLeft = [];
  
    if (givenHour < BREAKFAST) {
        hoursLeft[0] = Math.floor((BREAKFAST - givenHour) / 60);
        hoursLeft[1] = (BREAKFAST - givenHour) % 60;
    } else if (givenHour < LUNCH) {
        hoursLeft[0] = Math.floor((LUNCH - givenHour) / 60);
        hoursLeft[1] = (LUNCH - givenHour) % 60;
    } else {
        hoursLeft[0] = Math.floor((DINNER - givenHour) / 60);
        hoursLeft[1] = (DINNER - givenHour) % 60;
    }
    return hoursLeft
}
console.log(timeToEat("12:20 a.m."));
console.log(timeToEat("5:50 a.m."));
console.log(timeToEat("2:00 p.m."));






