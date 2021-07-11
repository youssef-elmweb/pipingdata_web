const Line = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisStroke = props.stroke
    var thisD = props.d;
    var thisM = props.m;
    var thisStrokeLinecap = props.strokeLinecap;
  
      return (
        <line 
            id = {thisId}
            className = {thisClass}
            stroke = {thisStroke}
            d={thisD}
            m={thisM}
            strokeLinecap={thisStrokeLinecap}
        />
      );
  }
  
  export default Line;