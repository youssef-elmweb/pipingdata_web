import React from 'react';

const Button = (props) => {
    const thisId = props.id;
    const thisClass = props.className;
    const thisType = props.type;
    const thisContent = props.children;
    const thisValue = props.value;
    const thisDisplay = props.display;
    //const thisDisplayLoad = props.displayLoad;

      const dispatchFunctions = (e) => {
          e.stopPropagation();

              switch(props.value) {
                  case "utility":
                    //console.log(props.value + " depuis Button > switch");
                    break;  

                  default:
                    e.target.removeEventListener("click", dispatchFunctions);
              }
      } 

    return (
        <button id={thisId} className={thisClass} type={thisType} value={thisValue} onClick={thisDisplay || dispatchFunctions} /*onLoad={thisDisplayLoad}*/>{thisContent}</button>
    );

}

export default Button;
