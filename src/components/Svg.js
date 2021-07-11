const Svg = (props) => {
    const thisClass = props.className;
    const thisComponentSvg = props.children;

    return (
        <svg className={thisClass} xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox} fill="none" strokeWidth="0.2px">
            {thisComponentSvg}
        </svg>
    );
}

export default Svg;



