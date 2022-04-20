setTimeout(()=>{

  /* JS code injection */
  /* Timeout for testing purposes: Waiting for the DOM */

  //Salt to avoid ID naming conflict:
  let salt = "Code_Injection_by_Danzou_lain-code_"+String(Math.random()).split(".")[1]+"_"

  //Define|add the stage for the app:
  let stage = document.createElement("div")
  stage.setAttribute("id",salt+"stage")
  stage.style.cssText = "position: absolute; top: 10px; left: 10px; width: 200px; height: 300px; background-color: gray; z-index: 9999;"
  document.querySelector("body").appendChild(stage)
  let domStage = document.getElementById(stage.getAttribute("id"))

  //Define draggable title:
  let dragBar = document.createElement("div")
  dragBar.setAttribute("id",salt+"dragBar")
  dragBar.style.cssText = "position: relative;  width: 200px; height: 20px; background-color:darkgreen; z-index:10000"
  domStage.appendChild(dragBar)
  dragBar.innerHTML = "<span>◁◀▷▶△▲▽▼</span>"

},100)
