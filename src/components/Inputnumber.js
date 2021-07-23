const Inputnumber = (props) => {
    var thisId = props.id;
    var thisClass = props.className;
    var thisMin = props.x;
    var thisMax = props.y;
    var thisStep = props.stroke;
    var thisValue = props.fill;
    var thisType = props.type
  
    return (
        <input type={thisType} id={thisId} className={thisClass} thisMin={thisMin} thisMax={thisMax} thisStep={thisStep} thisValue={thisValue} />
      );
  }
  
  export default Inputnumber;