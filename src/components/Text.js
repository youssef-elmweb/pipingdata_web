const Text = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisX = props.x;
    var thisY = props.y;
    var thisStroke = props.stroke;
    var thisFill = props.fill;
    var thisFontSize = props.fontSize;
    var thisFontWeight = props.fontWeight;
    var thisContainer = props.container;
  
      return (
        <text id={thisId} className={thisClass} x={thisX} y={thisY} stroke={thisStroke} fill={thisFill} fontSize={thisFontSize} fontWeight={thisFontWeight}>
            {thisContainer}
        </text>
      );
  }
  
  export default Text;


            



