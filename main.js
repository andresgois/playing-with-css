
  window.addEventListener("load", function(event) {
    
    let flex = document.querySelector("#flex");
    let block = document.querySelector(".block");
    let box = document.querySelector(".box");
    
    flex.addEventListener("change", () => {
      console.log(flex.value)
      block.style.display = flex.value
    });


  });