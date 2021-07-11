const Circle = (props) => {
  var thisClass = props.className;
  var thisCx = props.cx;
  var thisCy = props.cy;
  var thisR = props.r;
  var thisStroke = props.stroke

    const displayCircle = () => {

    }
    
    displayCircle();

    return (
      <circle stroke={thisStroke} className={thisClass} cx={thisCx} cy={thisCy} r={thisR} />
    );
}

export default Circle;   