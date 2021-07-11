

const Span = (props) => {
    const thisId = props.id;
    const thisClass = props.className;
    const thisContainer = props.container;
    var thisDisplay = props.display;

    return (
        <span id={thisId} className={thisClass} onClick={thisDisplay}>{thisContainer}</span>  
    );
}

export default Span;