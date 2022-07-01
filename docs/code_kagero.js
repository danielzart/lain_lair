window.addEventListener("load",()=>{
  document.querySelector("svg").style.backgroundColor = "rgb(0,0,0)"

  function rnd(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
  }

  //Init click area:
  let clickArea = document.querySelector("#rect43915")
  clickArea.style.fill = "rgba(0,0,0,0)"
  clickArea.addEventListener("click",()=>{
    play()
  })
  //End of click area init.
  
  //Init cells:
  let cellsGroup = document.querySelector("#cells_group").children
  //End of cells init.

  //Create logical cells:
  let cellStack = []
  class Cell {
    constructor(...args){
      this.cell = cellsGroup[args[0]]
      this.back = this.cell.children[0]
      this.strip = this.cell.children[1]
      this.clip = document.querySelector("#"+this.strip.getAttribute("clip-path").split("#")[1].split(")")[0])
      this.topChar = this.cell.children[1].children[0]
      this.midChar = this.cell.children[1].children[1]
      this.lowChar = this.cell.children[1].children[2]
      this.backColRed = 77
      this.backColGreen = 77
      this.backColBlue = 77
      this.rnd = function(min,max){
        return Math.floor(Math.random()*(max-min+1)+min)
      }
      this.init = function(){
	this.strip.setAttribute("transform","translate(0,0)")
	this.clip.setAttribute("transform","translate(0,0)")
      }
      this.setCharColor = function(...args){
	let inverseBackColor = args[0] || "rgb("+(255-this.backColRed)+","+(255-this.backColGreen)+","+(255-this.backColBlue)+")"
	this.midChar.style.fill = inverseBackColor
	this.topChar.style.fill = inverseBackColor
	this.lowChar.style.fill = inverseBackColor
      }
      this.scroll = function(...args){
	let step = args[0] || 47
	this.strip.setAttribute("transform","translate(0,"+step+")")
	this.clip.setAttribute("transform","translate(0,"+step*(-1)+")")
      }
      this.setTopChar = function(a){
	this.topChar.textContent = a || "?"
      }
      this.setMidChar = function(a){
	this.midChar.textContent = a || "?"
      }
      this.setLowChar = function(a){
	this.lowChar.textContent = a || "?"
      }
      this.setBackColor = function(a){
	this.back.style.fill = a
      }
      //Random background color with a min max from 1 to 255 for r,g,b:
      this.rndBg = function(...args){
	let minRed = args[0] || 1
	let maxRed = args[1] || 255
	let minGreen = args[2] || 1
	let maxGreen = args[3] || 255
	let minBlue = args[4] || 1
	let maxBlue = args[5] || 255
	this.backColRed = rnd(minRed,maxRed)
	this.backColGreen = rnd(minGreen,maxGreen)
	this.backColBlue = rnd(minBlue,maxBlue)
	this.setBackColor("rgba("+this.backColRed+","+this.backColGreen+","+this.backColBlue+",255)")
      }
      this.check = function(){
	console.log(this.cell)
      }
    }
  }

  for(let i=0;i<cellsGroup.length;i++){
    cellStack.push(new Cell(i))
    //Run init method on each cell on object creation:
    cellStack[i].init()
  }
  //End create logical cells.


  //Noncense
  let alpha = "ABCDEF"
  function play(){
    for(let i=0;i<cellStack.length;i++){
      cellStack[i].rndBg(50,255,50,255,50,255)
      cellStack[i].setCharColor()
    }
    let step = 47
    var run = setInterval(()=>{
      for(let i=0;i<cellStack.length;i++){
	if(step == 47){
          cellStack[i].setTopChar(alpha[rnd(0,alpha.length-1)])
	}
	if(step>0){
	  cellStack[i].scroll(47-step)
	}else{
	  step = 47
	  clearInterval(run)
	}
      }
      step--
    },100)
  }
  
})//End of window load.
