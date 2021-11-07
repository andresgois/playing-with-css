
  window.addEventListener("load", function(event) {
    
    let display = document.querySelector("#flex");
    let flexDirection = document.querySelector("#flex-direction");
    let flexWrap = document.querySelector("#flex-wrap");
    let justifyContent = document.querySelector("#justify-content");
    let alignItems = document.querySelector("#align-items");
    let alignContent = document.querySelector("#align-content");

    let block = document.querySelector(".block");
    let box1 = document.querySelector(".box-1");
    let box2 = document.querySelector(".box-2");
    let box3 = document.querySelector(".box-3");
    let box4 = document.querySelector(".box-4");
    let p_flex = this.document.querySelector('.p-flex');
    let p_grid = this.document.querySelector('.p-grid');
    

    display.addEventListener("change", () => {
      block.style.display = display.value;
      if(display.value === 'flex'){        
        //p_flex.classList.contains("hidden");
        p_flex.classList.remove('hidden')
      }else if(display.value === 'grid'){
          p_flex.classList.add('hidden')
          p_grid.classList.remove('hidden2')          
      }
      
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

    alignContent.addEventListener("change", () => {
      block.style.alignContent = alignContent.value
    });

    box1.addEventListener("keyup", () => {
      document.querySelector(".box1").style.order = box1.value
    })
    box2.addEventListener("keyup", () => {
      document.querySelector(".box2").style.order = box2.value
    })
    box3.addEventListener("keyup", () => {
      document.querySelector(".box3").style.order = box3.value
    })
    box4.addEventListener("keyup", () => {
      document.querySelector(".box4").style.order = box4.value
    })




  });