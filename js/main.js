let txt  = document.querySelector('.text')

document.addEventListener("click",function(event){
    
    if(event.target.closest('.buttons')){
        txt.innerHTML += event.target.value
    }           
})

function equal(){
let mass = txt.innerText.match(/(\d+)([/+-])(\d+)/gi);
let resMass = mass[0].split('')
  const actions =[{
          value: '*',
          func: (a,b) => (parseInt(a) * parseInt(b))
        },{
          value: '/',
          func: (a,b) => (a / b)
        },{
          value:'+',
          func: (a,b) => (parseInt(a) + parseInt(b))
        },{
          value: '-',
          func: (a,b) => (parseInt(a) - parseInt(b))
        }]
    let first = resMass[0]
    let action = resMass[1]
    let second = resMass[2]
      const result = actions.forEach((elem) =>{
          if (elem.value == action){
           return txt.innerText = elem.func(first,second)
          }          
      })
}
function delet(){
    txt.innerText = txt.innerText.slice(0,-1)
}