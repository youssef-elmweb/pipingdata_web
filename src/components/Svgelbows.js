import React from 'react';
import Path from '.././components/Path';
import Text from '.././components/Text';

const Svgelbows = (props) => {

    var anglesScreen = [];
    var indicesAnglesScreen = [];
    var unDegre = Math.PI/180;
    var cosExtrado = 0; 
    var sinExtrado = 0;

    for (var i = 0; i < 361; i++) {
        cosExtrado = 8 + Math.cos(unDegre*i) * 6.75; 
        sinExtrado = 8 - Math.sin(unDegre*i) * 6.75;

        anglesScreen[i] = <Text 
        key={`angle-screen-${i}`}
            id = {`angle-screen-${i}`}
            className = {`Angle_screen`}
            fill = {"white"}
            fontSize = {"0.7"}
            fontWeight = {"bold"}
            textAnchor = {"middle"}
            container={(i !== 90 ? "" : props.angleScreen+ "°")}
            value={i}
            /*onMouseMove={displayAngle}
            onMouseLeave={displayAngleFinal}
            onMouseOut={hiddenAngle}*/
            x = {cosExtrado}
            y = {sinExtrado}
        />

        indicesAnglesScreen[i] = <Text 
        key={`angle-screen-indice-${i}`}
            id = {`angle-screen-indice-${i}`}
            className = {`Angle_screen_indice`}
            fill = {(i !== 90 ? "gray" : "red")}
            fontSize = {(i !== 90 ? "0.5" : "1.5")}
            fontWeight = {(i !== 90 ? "normal" : "bold")}
            textAnchor = {"middle"}
            container = {(i !== 90 ? "." : "|")}
            /*onMouseMove={displayAngle}
            onMouseLeave={displayAngleFinal}
            onMouseOut={hiddenAngle}*/
            x = {8 + Math.cos(unDegre*i) * 7.75}
            y = {8 - Math.sin(unDegre*i) * 7.75}
        />
        
    }

    return (

        <svg id="screenSvg" className="Screen_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">

            {
            (props.screensElbows === "elbow-double" || props.screensElbows === "elbow-double-oriented" ? 
                <g>
                    {
                        [
                        indicesAnglesScreen,
                        anglesScreen
                        ]
                    }
                </g>
            : false)
            }

            <g>
                {
                    (props.children[0][0].props.id !== "double-elbow-oriented-layer" ? 
                    (props.children[0][0].props.id !== "elbow-slice-layer" ? 
                    (props.children[0][0].props.id !== "double-elbow-layer" ? <Path
                        key={"elbow-layer-axe"}
                            id="elbow-layer-axe"
                                className="Elbow_layer_axe"
                                strokeWidth="0.05"
                                strokeLinecap="square"
                                stroke="red"     
                                strokeDasharray="1.5px, 0.3px, 0.35px, 0.3px"     
                                d={`M 10.5 15.5 A 10 10, 0, 0, 0, 0.5 5.5`}
                        />
                    :   <Path
                            key={"elbow-double-layer-axe"}
                                id="elbow-double-layer-axe"
                                    className="Elbow_double_layer_axe"
                                    strokeWidth="0.05"
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
                                d={`M 3.5 10.5 A 2.5 2.5, 0, 0, 0, 3.5 5.5`}
                        />,
                        <Path
                            key={"double-elbow-oriented-layer-axe"}
                                id="double-elbow-oriented-layer-axe"
                                    className="Double_elbow_oriented_layer_axe"
                                    strokeWidth="0.05"
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

          
          
