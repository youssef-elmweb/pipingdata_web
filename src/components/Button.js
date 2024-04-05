import React from 'react';

const Button = (props) => {
    const thisId = props.id;
    const thisClass = props.className;
    const thisType = props.type;
    const thisContent = props.children;
    const thisValue = props.value;
    const thisDisplay = props.display;
    const thisTest = props.test;

    const buttonStyle = {
      left: props.thisLeft,
      border: props.thisBorderButton,
      backgroundColor: props.thisColorButton,
      width: props.thisWidth,
      margin: props.thisMargin,
      padding: props.thisPadding,
      fontSize: props.thisFontSize
    }; 

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
        <button style={buttonStyle} height={props.height} test={thisTest} id={thisId} className={thisClass} type={thisType} value={thisValue} onClick={thisDisplay || dispatchFunctions}>{thisContent}</button>
    );

}

export default Button;
