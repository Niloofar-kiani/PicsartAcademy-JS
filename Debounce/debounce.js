const input = document.querySelector("input");
const defaultSec = document.getElementById("default");
const debounceSec = document.getElementById("debounce");

const updateDebounce = debounce((text)=>{
  debounceSec.textContent = text
})

input.addEventListener("input", e => {
defaultSec.textContent = e.target.value
updateDebounce(e.target.value)

})



function debounce(fn, delay = 1000){
  let timer;
  return (...args) => {
    clearTimeout(timer)
   timer = setTimeout(() => {
    fn(...args)
    },delay)
  }
}