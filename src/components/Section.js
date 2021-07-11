const Section = (props) => {

    const thisId = props.id;
    const thisClass = props.className;
    const thisChilds = props.children;
    const thisValue = props.value;
    var thisDisplayDown = props.displayDown;
    var thisDisplayMove = props.displayMove;
    var thisDisplayLeave = props.displayLeave;


    return ( 
        <div id={thisId} className={thisClass} value={thisValue} onMouseDown={thisDisplayDown}  onMouseMove={thisDisplayMove} onMouseLeave={thisDisplayLeave}>
            {thisChilds} 
        </div>        
    );

}

export default Section; 

