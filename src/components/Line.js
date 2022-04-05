import React from 'react';

const Line = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisFill = props.fill;
    var thisStroke = props.stroke;
    var thisStrokeWidth = props.strokeWidth;
    var thisStrokeLinecap = props.strokeLinecap;
    var thisD = props.d;
    var thisM = props.m;
    var thisXUn = props.x1;
    var thisYUn = props.y1;
    var thisXDeux = props.x2;
    var thisYDeux = props.y2;
  
      return (
        <line 
            id = {thisId}
            className = {thisClass}
            fill = {thisFill}
            stroke = {thisStroke}
            strokeWidth = {thisStrokeWidth}
            strokeLinecap={thisStrokeLinecap}
            d = {thisD}
            x1 = {thisXUn}
            y1 = {thisYUn}
            x2 = {thisXDeux}
            y2 = {thisYDeux}
            m = {thisM}
        />
      );
  }
  
  export default Line;