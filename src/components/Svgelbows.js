import Path from '.././components/Path';

const Svgelbows = (props) => {

    return (
        <svg id="screenSvg" className="Screen_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
        <g>
            {
                    (props.children[0][0].props.id !== "double-elbow-oriented-layer" ? 
                    (props.children[0][0].props.id !== "elbow-slice-layer" ? 
                    (props.children[0][0].props.id !== "double-elbow-layer" ? <Path
                        key={"elbow-layer-axe"}
                            id="elbow-layer-axe"
                                className="Elbow_layer_axe"
                                strokeWidth="0.075"
                                strokeLinecap="square"
                                stroke="red"     
                                strokeDasharray="1.5px, 0.3px, 0.35px, 0.3px"     
                                d={`M 10.5 15.5 A 10 10, 0, 0, 0, 0.5 5.5`}
                        />
                    :   <Path
                            key={"elbow-double-layer-axe"}
                                id="elbow-double-layer-axe"
                                    className="Elbow_double_layer_axe"
                                    strokeWidth="0.075"
                                    strokeLinecap="square"
                                    stroke="red"     
                                    strokeDasharray="1.5px, 0.3px, 0.35px, 0.3px"     
                                    d={`M 12.5 12.5 A 4.5 4.5, 0, 0, 0, 8 8
                                        M 8 8 A 4.5 4.5, 0, 0, 1, 3.5 3.5`}
                        />) 
                        
                    : false)

                    :   [<Path
                            key={"double-elbow-oriented-layer-dashed"}
                                id="double-elbow-oriented-layer-dashed"
                                className="Double_elbow_oriented_layer_dashed"
                                strokeLinecap="square"
                                stroke="#8e8e8e"                      
                                d={`M 3.5 11.25 A 3.25 3.25, 0, 0, 0, 3.5 4.75`}
                        />,
                        <Path
                            key={"double-elbow-oriented-layer-axe"}
                                id="double-elbow-oriented-layer-axe"
                                    className="Double_elbow_oriented_layer_axe"
                                    strokeWidth="0.075"
                                    strokeLinecap="square"
                                    stroke="red"     
                                    strokeDasharray="1.5px, 0.3px, 0.35px, 0.3px"     
                                    d={`M 12.5 12.5 A 4.5 4.5, 0, 0, 0, 8 8
                                        M 3.5 8 8 8`}
                        />])

                }
                <g>
                    {props.children}
                </g> 

        </g>

        </svg>
    );

}
  
export default Svgelbows;

          
          
