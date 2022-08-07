const btnStart = document.querySelector(".btn-start");
const btnReset = document.querySelector(".btn-reset");
const cells = document.querySelectorAll(".grid-item");
const levelNo = document.querySelector(".level-no")
const levelStatus = document.querySelector(".status")


let num=1;
let greens=[];
let reds=[];
btnStart.addEventListener("click",()=>{
  levels(num).then((res)=>{

    for (let i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click",(e)=>{
        let clickId=Number(e.target.id); 
        cells[i].style.backgroundColor = "green";
          if(!greens.includes(clickId)){
            greens.push(clickId);
          }
         
        
          if(greens.length === reds.length){
        

            if(check()){
              levelStatus.textContent = "status: Levels Passed 🎉 "
              setTimeout(()=>{
                num++;
                resetBoard();
                levels(num);
                console.log("next level");
              },2000);

            }else{
              levelStatus.textContent = "status: failed❗️ Try again 👹 "
              setTimeout(()=>{
                resetBoard();
                levels(num);
                console.log("same level");
              },2000)
            }
          
          }
      });
    }
  })

})

const check=()=>{
  for (let i = 0; i < greens.length; i++){
    if (greens[i] != reds[i]){
     return false;
    }
  }
  return true;
}

btnReset.addEventListener("click",()=>{
  resetBoard();
  num =1;
  levels(num);
})

 levels = async function(num){ 
  levelNo.textContent = num;
  levelStatus.textContent = "status: -";
  let arr = new Set();
  const lev = num;
  let count = lev >=6 ? 6 : lev+1;
  for(let i = 0; arr.size < count; i++){ 
    let i = Math.trunc(Math.random()*12); 
    arr.add(i);
  }
  arr = [...arr];
  async function setRandomColor(){
    for(let i = 0; i <arr.length; i++){ 
      let u = await foo(arr[i])
      cells[u].style.backgroundColor = "red";
      setTimeout(()=>{
        cells[u].style.backgroundColor = "beige"
      },500);
    }
  }
  await setRandomColor()
  reds=arr;
  return arr;  
}

const resetBoard=()=>{
  for(let i = 0; i <12; i++){ 
    cells[i].style.backgroundColor = "beige";
  }
  greens=[];
  reds=[];
}


async function foo(i){
  return new Promise((resolve)=>{
    setTimeout(()=> resolve(i),2000)
  })
}