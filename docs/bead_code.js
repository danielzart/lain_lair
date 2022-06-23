window.addEventListener("load",()=>{

  //Init keys touch pads:
  let keysGroup = document.querySelector("#g4394").children
  for(let i=0;i<keysGroup.length;i++){
    let key = keysGroup[i]
    let keyDefFill = key.style.fill
    key.style.fill = "rgba(0,0,0,0)"
    key.addEventListener("mouseenter",()=>{
      key.style.fill = keyDefFill
    })
    key.addEventListener("mouseleave",()=>{
      key.style.fill = "rgba(0,0,0,0)"
    })
  }


  //Init Output Cylinder:
  let cylTouchGroup = document.querySelector("#g356797").children
  for(let i=0;i<cylTouchGroup.length;i++){
    let key = cylTouchGroup[i]
    let keyDefFill = key.style.fill
    key.style.fill = "rgba(0,0,0,0)"
    key.addEventListener("mouseenter",()=>{
      key.style.fill = keyDefFill
    })
    key.addEventListener("mouseleave",()=>{
      key.style.fill = "rgba(0,0,0,0)"
    })
  }

  let cylRolls = []
  cylRolls.push(document.querySelector("#g334241"))
  cylRolls.push(document.querySelector("#g334241-7"))
  cylRolls.push(document.querySelector("#g334233"))
  cylRolls.push(document.querySelector("#g334233-5"))
  //Hide roll set A:
  for(let i=0;i<2;i++){
    cylRolls[i].style.display = "none"
  }

  //Hide punches:
  let punches = []
  let punchLinesGroup = document.querySelector("#g344977").children
  for(let i=0;i<punchLinesGroup.length;i++){
    let line = punchLinesGroup[i].children
    let indexLength = line.length
    for(let I=0;I<indexLength;I++){
      punches.push(line[I])
    }
  }
  for(let i=0;i<punches.length;i++){
    punches[i].style.display = "none"
  }
  
  //Init border bead switches:
  let borBeadSw = []
  let borderBeadSwGroup = document.querySelector("#g17725").children
  for(let i=0;i<borderBeadSwGroup.length;i++){
    borBeadSw.push(borderBeadSwGroup[i])
  }
  for(let i=0;i<borBeadSw.length;i++){
    borBeadSw[i].querySelectorAll(".bead")[0].style.display = "none"
  }

})//End of window load.
