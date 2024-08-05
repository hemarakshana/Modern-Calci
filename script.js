let buttons = document.querySelectorAll(".btns-container .btn");

let screen = document.querySelector(".screen");

let screenContent = "";

let buttonsCount = buttons.length;

for(let i=0;i<buttonsCount;i++)
  {
    //console.log(buttons[i]);
    
    buttons[i].addEventListener("click",()=>{
     // console.log(buttons[i].innerText)
      let buttonSymbol = buttons[i].innerText;
      
      
      if(buttonSymbol != "=" && buttonSymbol != "AC")
        {
            screenContent = screenContent+buttonSymbol;
            //                     "" +"7" --> "7"
            //               "7"+"5" -->  "75"
            screen.innerText = screenContent;
        }
      else if(buttonSymbol == "AC")
        {
          screenContent = "";
           screen.innerText = screenContent;
        }
      else
        {
          // console.log("result is : ");
          // console.log(eval(screenContent));
          let result = eval(screenContent)+"";
          screenContent = result;
           screen.innerText = screenContent;
        }

    });
  }
// console.log(buttons.length);

