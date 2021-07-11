const Input = (props) => {
    const thisId = props.id;
    const thisClass = props.className;
    //const thisDisplay = props.display;
    const thisType = props.type;
    var thisMin = props.min;
    var thisMax = props.max;
    var thisValue = props.value;
    var thisStep = props.step;

    console.log(thisMax);

    const test = (e) => {
      e.stopPropagation();
      console.log(thisMin + " - " + thisValue);
    }

    return (
      <input id={thisId} className={thisClass} type={thisType} min={thisMin} max={thisMax} value={thisValue} step={thisStep} onChange={test} />
    );

}

export default Input;