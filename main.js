
  window.addEventListener("load", function(event) {
    
    let display = document.querySelector("#flex");
    let alignFlex = document.querySelector("#align-flex");
    let flexDirection = document.querySelector("#flex-direction");
    let flexWrap = document.querySelector("#flex-wrap");
    let flexFlow = document.querySelector("#flex-flow");
    let justifyContent = document.querySelector("#justify-content");
    let alignItems = document.querySelector("#align-items");
    let alignContent = document.querySelector("#align-content");

    let flexGrow = document.querySelector("#flex-grow");
    let flexBasis = document.querySelector("#flex-basis");
    let flexShrink = document.querySelector("#flex-shrink");
    let flex = document.querySelector("#flex");
    let order = document.querySelector("#order");
    let alignSelf = document.querySelector("#align-self");

    let block = document.querySelector(".block");
    let box = document.querySelector(".box");
    
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

    flexFlow.addEventListener("change", () => {
      block.style.flexFlow = flexFlow.value
    });

    alignItems.addEventListener("change", () => {
      block.style.alignItems = alignItems.value
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


  });