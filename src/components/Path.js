const Path = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisStroke = props.stroke;
    var thisFill = props.fill;
    var thisStrokeWidth = props.strokeWidth;
    var thisStrokeDasharray = props.strokeDasharray;
    var thisStrokeLinecap = props.strokeLinecap;
    var thisD = props.d;
    var thisM = props.m;
    var thisDisplayLeave = props.displayLeave;
    var thisDisplayDown = props.displayDown;
    var thisDisplayDrag = props.displayDrag;
  
      return (
        <path 
            id={thisId}
            className={thisClass}
            strokeWidth={thisStrokeWidth}
            stroke={thisStroke}
            fill={thisFill}
            strokeLinecap={thisStrokeLinecap}
            strokeDasharray={thisStrokeDasharray}
            d={thisD}
            m={thisM}
            onMouseLeave={thisDisplayLeave}
            onMouseDown={thisDisplayDown}
            onDragStart={thisDisplayDrag}
        />
      );
  }
  
  export default Path;
