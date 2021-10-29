
  window.addEventListener("load", function(event) {
    
    let display = document.querySelector("#flex");
    let alignFlex = document.querySelector("#align-flex");
    let flexDirection = document.querySelector("#flex-direction");
    let flexWrap = document.querySelector("#flex-wrap");
    let justifyContent = document.querySelector("#justify-content");
    let alignItems = document.querySelector("#align-items");
    let alignContent = document.querySelector("#align-content");
    let flexFlow = document.querySelector("#flex-flow");

    let flexGrow = document.querySelector("#flex-grow");
    let flexBasis = document.querySelector("#flex-basis");
    let flexShrink = document.querySelector("#flex-shrink");
    let flex = document.querySelector("#flex");
    let order = document.querySelector("#order");
    let alignSelf = document.querySelector("#align-self");

    let block = document.querySelector(".block");
    let box1 = document.querySelector(".box-1");
    let box2 = document.querySelector(".box-2");
    let box3 = document.querySelector(".box-3");
    let box4 = document.querySelector(".box-4");
    

    display.addEventListener("change", () => {
      block.style.display = display.value
    });
    
    flexDirection.addEventListener("change", () => {
      block.style.flexDirection = flexDirection.value
    });
    
    flexWrap.addEventListener("change", () => {
      block.style.flexWrap = flexWrap.value
    });
    
    justifyContent.addEventListener("change", () => {
      block.style.justifyContent = justifyContent.value
    });

    alignItems.addEventListener("change", () => {
      block.style.alignItems = alignItems.value
    });
    /*

    flexFlow.addEventListener("change", () => {
      block.style.flexFlow = flexFlow.value
    });

    alignContent.addEventListener("change", () => {
      block.style.alignContent = alignContent.value
    });

    flexGrow.addEventListener("change", () => {
      block.style.flexGrow = flexGrow.value
    });
    flexBasis.addEventListener("change", () => {
      block.style.flexBasis = flexBasis.value
    });

    flexShrink.addEventListener("change", () => {
      block.style.flexShrink = flexShrink.value
    });

    flex.addEventListener("change", () => {
      block.style.flex = flex.value
    });
    // alignContent.addEventListener("change", () => {
    //   block.style.alignContent = alignContent.value
    // });
    alignSelf.addEventListener("change", () => {
      block.style.alignSelf = alignSelf.value
    });

    if(box1){
      box1.addEventListener("keyup", () => {
        document.querySelector(".box1").style.order = box1.value
      })
    }

    if(box2){
      box2.addEventListener("keyup", () => {
        document.querySelector(".box2").style.order = box2.value
      })
    }

    if(box3){
      box3.addEventListener("keyup", () => {
        document.querySelector(".box3").style.order = box3.value
      })
    }

    if(box4){
      box4.addEventListener("keyup", () => {
        document.querySelector(".box4").style.order = box4.value
      })
    }*/


  });