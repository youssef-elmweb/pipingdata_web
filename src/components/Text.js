import React from 'react';

const Text = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisX = props.x;
    var thisY = props.y;
    var thisStroke = props.stroke;
    var thisFill = props.fill;
    var thisFontSize = props.fontSize;
    var thisOpacity = props.opacity;
    var thisValue = props.value;
    var thisFontWeight = props.fontWeight;
    var thisTextAnchor = props.textAnchor;
    var thisContainer = props.container;
    var thisZIndex = props.zindex;

    var thisDisplay = props.display;
    var thisDisplayDown = props.displayDown;
  
      return (
        <text id={thisId} className={thisClass} zindex={thisZIndex} x={thisX} y={thisY} stroke={thisStroke} fill={thisFill} fontSize={thisFontSize} opacity={thisOpacity} value={thisValue} fontWeight={thisFontWeight} textAnchor={thisTextAnchor} onClick={thisDisplay} onMouseDown={thisDisplayDown}>
            {thisContainer}
        </text>
      );
  }
  
  export default Text;


            



