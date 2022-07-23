//Create a function that takes two dates and 
//returns the number of days between the first and second date.


function getDays(case1, case2){
      const Difference_In_Days =
      (case2.getTime() - case1.getTime())/ (1000 * 3600 * 24);  //second , minute , hour ,day
      console.log(Difference_In_Days)
    }
    
  getDays(
      new Date("June 14, 2019"),
      new Date("June 20, 2019")
    ) 
  
  getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  )
  getDays(
    new Date("July 20, 2019"),
    new Date("July 30, 2019")
  )