let txt  = document.querySelector('.text')

document.addEventListener("click",function(event){
    if(event.target.closest('.buttons')){
      if(txt){
        txt.innerHTML += event.target.value
      }
    }           
})

function equal(){

    let first = txt.innerText.match(/(\d+)[.]*(\d*)/)[0]
    let action = txt.innerText.match(/[/+-]/gi)
    let second = txt.innerText.match(/(\d+)[.]*(\d*)$/)[0]

    console.log(first);
    console.log(action);
    console.log(second);
  const actions =[{
          value: '*',
          func: (a,b) => (+(a) * +(b))
        },{
          value: '/',
          func: (a,b) => (a / b)
        },{
          value:'+',
          func: (a,b) => (+(a) + +(b))
        },{
          value: '-',
          func: (a,b) => (+(a) - +(b))
        }]
    
      const result = actions.forEach((elem) =>{
          
          if (elem.value == action){
                let num = (elem.func(first,second)).toFixed(4)
                let mathedNum = num.match(/[.]\d+/gi)
                console.log(num);
            
                if(mathedNum[0].slice(1,2) == 0){
                    txt.innerText = (elem.func(first,second)).toFixed(0)
                }else{
                    let numSplited = num.split('')
                    let index = num.indexOf('.')
                    for (let i = index;i < numSplited.length; i++) {
                      console.log(i);
                      if (numSplited[i] == 0) {
                        
                        txt.innerText = (numSplited.slice(0,i)).join('')
                        return
                      }
                      
                    }
                }
          }          
      })
}

function delet(){
    txt.innerText = txt.innerText.slice(0,-1)
}