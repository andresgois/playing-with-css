
  window.addEventListener("load", function(event) {
    
    let flex = document.querySelector("#flex");
    let alignFlex = document.querySelector("#align-flex");
    let flexDirection = document.querySelector("#flex-direction");
    let flexWrap = document.querySelector("#flex-wrap");
    let flexFlow = document.querySelector("#flex-flow");
    let justifyContent = document.querySelector("#justify-content");
    let alignItems = document.querySelector("#align-items");

    let block = document.querySelector(".block");
    let box = document.querySelector(".box");
    
    flex.addEventListener("change", () => {
      block.style.display = flex.value
    });
    
    justifyContent.addEventListener("change", () => {
      block.style.justifyContent = justifyContent.value
    });

    flexDirection.addEventListener("change", () => {
      block.style.flexDirection = flexDirection.value
    });

  });