const Img = (props) => {
    const thisSrc = props.src; 
    const thisId = props.id;
    const thisClass = props.className;
    const thisValue = props.value;
    const thisAlt = props.alt;

    return (
        <img src={thisSrc} id={thisId} className={thisClass} value={thisValue} alt={thisAlt} />
    );

}

export default Img;

