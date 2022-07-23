//Given a Date() object, return the date from three days prior as 
//a string: "2016-01-19".

function threeDaysAgo(date){
  let currentTime = date.getTime()
 let oneDay = 1000 * 60 * 60 * 24
 let threeDayBefore = 3 * oneDay
 let result = currentTime - threeDayBefore
 let resultToStr = new Date(result).toLocaleString();
 console.log(resultToStr);
}


threeDaysAgo(new Date(2018, 0, 1))
threeDaysAgo(new Date(2015, 5, 17))
threeDaysAgo(new Date(1965, 3, 15))