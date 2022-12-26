/*const list ={
    value: 2,
    next:{
        value:5,
        next:{
            value:6,
            next:{
                value:8,
                next:null
            }
        
        }
    }
}

function reverseList (list){
    if(list.next !== null){
        reverseList(list.next)
    }
    console.log(list.value)
}

reverseList(list)*/
/*
class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
  }


  class Extended extends Clock{
    constructor(prop){
        super(prop);
        let {prec = 1000} = prop;
        this.prec = prec;

    }
    start(){
        this.render();
        this.timer = setInterval(()=>this.render(),this.prec);
    }
  }


  let extended = new Extended({template:'h-m-s', prec: 5000})
  extended.start()*/

  ////Help me !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  /*

  const a = document.getElementById("Id")
  const b = document.getElementsByClassName("Class")
  const c = document.getElementsByName("Name")
  const d = document.getElementsByTagName('div')

  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)

  function foo(){
    return new Promise(function(resolve,reject){
      setTimeout(() => resolve((5)),3000)
    })
  }

  // foo().then((result) => {
  //   console.log(result)
  // })

function boo(sum){
  return new Promise(function(resolve,reject){
    setTimeout (()=> resolve((sum + 10)),1000)
  })

}

foo().then(function(result){
  return boo(result)
}).then(function(result){
  console.log(result)
})

*/





/*Async/Await*/


fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);



