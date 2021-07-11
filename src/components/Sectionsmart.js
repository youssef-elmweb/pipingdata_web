import Section from '.././components/Section';
import Span from '.././components/Span';
import Button from '.././components/Button';
import Input from '.././components/Input';
import Img from '.././components/Img';
import Svgelbows from '.././components/Svgelbows';
import Path from '.././components/Path';
import React, { useState } from 'react';

const Sectionsmart = (props) => {

    const thisId = props.id;
    const thisClass = props.className;

    const [currentAngle, setCurrentAngleState] = useState(90);

    const [currentAngleADoubleElbow, setCurrentAngleAState] = useState(90);
    const [currentAngleBDoubleElbow, setCurrentAngleBState] = useState(90);

    const [currentAngleADoubleElbowOriented, setCurrentAngleAOrientedState] = useState(90);
    const [currentAngleBDoubleElbowOriented, setCurrentAngleBOrientedState] = useState(90);

    const [currentButtonLayerState, setCurrentButtonLayerState] = useState(props.values[0]);


    var tabAngles = [];
    var tabAnglesADoubleElbow = [];
    var tabAnglesBDoubleElbow = [];
    var tabAnglesBDoubleElbowOriented = [];
    var unDegre = (Math.PI / 180); 
    var ii = 0;

        const displayAngle = (e) => {
            e.stopPropagation();
            e.preventDefault();

            let angle = 0; 
            let angleADoubleElbow = 0;
            let angleBDoubleElbow = 0;
            let angleADoubleElbowOriented = 0;
            let angleBDoubleElbowOriented = 0;

            if (currentButtonLayerState === "elbow") {
                    e.target.parentElement.children[currentAngle].attributes.opacity.nodeValue = "0";
                    e.target.parentElement.children[90].attributes.opacity.nodeValue = "0";
                    angle = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleState(angle);
            } 

            if (currentButtonLayerState === "elbow-double") {
                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "a") { 
                    e.currentTarget.parentElement.children["angle-"+currentAngleADoubleElbow+"-a"].attributes.opacity.nodeValue = "0";

                    angleADoubleElbow = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleAState(angleADoubleElbow);
                } 

                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "b") {
                    e.currentTarget.parentElement.children["angle-"+currentAngleBDoubleElbow+"-b"].attributes.opacity.nodeValue = "0";
                    
                    angleBDoubleElbow = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleBState(angleBDoubleElbow);
                } 
            }

            if (currentButtonLayerState === "elbow-double-oriented") {
                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "o") { 
                    e.currentTarget.parentElement.children["angle-"+currentAngleADoubleElbowOriented+"-ao"].attributes.opacity.nodeValue = "0";

                    angleADoubleElbowOriented = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleAOrientedState(angleADoubleElbowOriented);
                } 

                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "i") {
                    e.currentTarget.parentElement.children["angle-"+currentAngleBDoubleElbowOriented+"-bi"].attributes.opacity.nodeValue = "0";
                    
                    angleBDoubleElbowOriented = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleBOrientedState(angleBDoubleElbowOriented);
                }
            }

                    e.target.attributes.opacity.value = "1";    
        }

        const hiddenAngle = (e) => {
            e.stopPropagation();
            e.target.attributes.opacity.value = "0";
        }

        const displayAngleFinal = (e) => {
            if (currentButtonLayerState === "elbow") {
                    e.target.parentElement.children["angle-"+currentAngle].attributes.opacity.nodeValue = "1";
            }


            if (currentButtonLayerState === "elbow-double") {
                    if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "a") {
                        e.target.parentElement.children["angle-"+currentAngleADoubleElbow+"-a"].attributes.opacity.nodeValue = "1";
                    } else if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "b") {
                        e.target.parentElement.children["angle-"+currentAngleBDoubleElbow+"-b"].attributes.opacity.nodeValue = "1";
                      }
            }

            if (currentButtonLayerState === "elbow-double-oriented") {
                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "o") {
                    e.target.parentElement.children["angle-"+currentAngleADoubleElbowOriented+"-ao"].attributes.opacity.nodeValue = "1";
                } else if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "i") {
                    e.target.parentElement.children["angle-"+currentAngleBDoubleElbowOriented+"-bi"].attributes.opacity.nodeValue = "1";
                  }
            }

            return false;
        }


        for (let i = 1; i < 91; i++) {
            var cosIntrado = Math.cos(unDegre*i) * 5.1; // for pseudo padding. 5 is reel proportion from svg elbow
            var sinIntrado = Math.sin(unDegre*i) * 5.1; // for pseudo padding. 5 is reel proportion from svg elbow
        
            var cosExtrado = Math.cos(unDegre*i) * 14.9; // for pseudo padding. 15 is reel proportion from svg elbow
            var sinExtrado = Math.sin(unDegre*i) * 14.9; // for pseudo padding. 15 is reel proportion from svg elbow

            tabAngles[i] = <path 
            key={`angle-${i}`}
                id = {`angle-${i}`}
                className = {`Angle`}
                stroke = {"white"}
                opacity = {(i % 90 ? "0" : "1")} 
                value = {i} 
                onMouseMove={displayAngle}
                onMouseLeave={displayAngleFinal}
                onMouseOut={hiddenAngle}
                d={`
                    M${(0.5+cosIntrado)} ${15.5-(sinIntrado)}   
                    L${(0.5+cosExtrado)} ${15.5-(sinExtrado)}                       
                `} 
                strokeLinecap={"strokeLinecap"}
            />
        } 



        for (var i = 0; i < 90; i++) { 
            cosIntrado = Math.cos(unDegre*i) * 1.25; // for pseudo padding. 5 is reel proportion from svg elbow
            sinIntrado = Math.sin(unDegre*i) * 1.25; // for pseudo padding. 5 is reel proportion from svg elbow
        
            cosExtrado = Math.cos(unDegre*i) * 7.75; // for pseudo padding. 15 is reel proportion from svg elbow
            sinExtrado = Math.sin(unDegre*i) * 7.75; // for pseudo padding. 15 is reel proportion from svg elbow

            tabAnglesADoubleElbow[i] = <path 
            key={(currentButtonLayerState === "elbow-double" ? "angle-"+(90-i)+"-a" : "angle-"+(90-i)+"-ao")}
                id = {(currentButtonLayerState === "elbow-double" ? "angle-"+(90-i)+"-a" : "angle-"+(90-i)+"-ao")}
                className = {`Angle`}
                stroke = {"white"}
                opacity = {(i % 90 ? "0" : "1")} 
                value = {90-i} 
                onMouseMove={displayAngle}
                onMouseLeave={displayAngleFinal}
                onMouseOut={hiddenAngle}
                d={`
                    M ${(8+cosIntrado)} ${12.5-(sinIntrado)}  
                    L ${(8+cosExtrado)} ${12.5-(sinExtrado)}                       
                `} 
                strokeLinecap={"strokeLinecap"}
            />
        } 




        for (let i = 0; i < 90; i++) {
            cosIntrado = Math.cos(unDegre*i) * -1.25; // for pseudo padding. 5 is reel proportion from svg elbow
            sinIntrado = Math.sin(unDegre*i) * -1.25; // for pseudo padding. 5 is reel proportion from svg elbow
        
            cosExtrado = Math.cos(unDegre*i) * -7.75; // for pseudo padding. 15 is reel proportion from svg elbow
            sinExtrado = Math.sin(unDegre*i) * -7.75; // for pseudo padding. 15 is reel proportion from svg elbow

            tabAnglesBDoubleElbow[i] = <path 
            key={`angle-${90-i}-b`}
                id = {`angle-${90-i}-b`}
                className = {`Angle`}
                stroke = {"white"}
                opacity = {(i % 90 ? "0" : "1")} 
                value = {90-i} 
                onMouseMove={displayAngle}
                onMouseLeave={displayAngleFinal}
                onMouseOut={hiddenAngle}
                d={`
                    M${(8+cosIntrado)} ${3.5-(sinIntrado)}   
                    L${(8+cosExtrado)} ${3.5-(sinExtrado)}                       
                `} 
                strokeLinecap={"strokeLinecap"}
            />
        } 



        for (let i = 0; i < 91; i++) {
            let halfDiameter = 3.5;
            let angle = 4.5/90;

            tabAnglesBDoubleElbowOriented[i] = <path 
            key={`angle-${90-i}-bi`}
                id = {`angle-${90-i}-bi`}
                className = {`Angle`}
                stroke = {"white"}
                opacity = {( i === 0 ? (i % 90 ? "0" : "1") : "0")} 
                value = {90-i} 
                onMouseMove={displayAngle}
                onMouseLeave={displayAngleFinal}
                onMouseOut={hiddenAngle}
                d={`
                    M${halfDiameter+(i*angle)} ${11.25}   
                    L${halfDiameter+(i*angle)} ${4.75}                       
                `} 
                strokeLinecap={"strokeLinecap"}
            />
        }


    var elbowLayer = [<Path
                        key={"elbow-layer"}
                            id="elbow-layer"
                            className="Elbow_layer"
                            strokeLinecap="square"
                            stroke="#8e8e8e"             
                            d={`M 5.5 15.5 15.5 15.5 Z
                                M 5.5 15.5 A 5 5, 0, 0, 0, 0.5 10.5
                                M 15.5 15.5 A 15 15, 0, 0, 0, 0.5 0.5 
                                M 0.5 10.5 0.5 0.5 
                                M 5.5 15.5 15.5 15.5 Z`}
                     />] 

    var doubleElbowLayer = [<Path
                                key={"double-elbow-layer"}
                                    id="double-elbow-layer"
                                    className="Double_elbow_layer"
                                    strokeLinecap="square"
                                    stroke="#8e8e8e"    
                                    //display={displayAngleFinal}                     
                                    d={`M 9.25 12.5 15.75 12.5 Z
                                        M 9.25 12.5 A 1.25 1.25, 0, 0, 0, 8 11.25
                                        M 15.75 12.5 A 7.75 7.75, 0, 0, 0, 8 4.75 

                                        M 8 11.25 8 4.75 

                                        M 6.75 3.5 A 1.25 1.25, 0, 0, 0, 8 4.75
                                        M 0.25 3.5 A 7.75 7.75, 0, 0, 0, 8 11.25 
                                        M 0.25 3.5 6.75 3.5 Z`}
                            />] 
                            
    var doubleOrientedElbowLayer = [<Path
                                        key={"double-elbow-oriented-layer"}
                                            id="double-elbow-oriented-layer"
                                            className="Double_elbow_oriented_layer"
                                            strokeLinecap="square"
                                            stroke="#8e8e8e"                      
                                            d={`M 9.25 12.5 15.75 12.5 Z
                                                M 9.25 12.5 A 1.25 1.25, 0, 0, 0, 8 11.25
                                                M 15.75 12.5 A 7.75 7.75, 0, 0, 0, 8 4.75 
                                                M 8 11.25 8 4.75 Z

                                                M 3.5 11.25 8 11.25
                                                M 3.5 4.75 8 4.75 Z
                                                M 3.5 11.25 A 3.25 3.25, 0, 0, 1, 3.5 4.75`}
                                    />]   

    var elbowSliceLayer = [<Path
                                key={"elbow-slice-layer"}
                                id="elbow-slice-layer"
                                className="Elbow_slice_layer"
                                strokeLinecap="round"
                                stroke="#8e8e8e"                      
                                d={`M 5.5 15.5 15.5 15.5 Z

                                    M 5.5 15.5 5.5 ${15.5-Math.sin(unDegre*15) * 5}                 
                                    ${0.5 + (Math.cos(unDegre*45) * 5)} ${15.5-Math.sin(unDegre*45) * 5}    
                                    ${0.5 + (Math.cos(unDegre*75) * 5)} ${15.5-Math.sin(unDegre*75) * 5} 
                                    0.5 ${15.5-Math.sin(unDegre*75) * 5} ${0.5 + (Math.cos(unDegre*75) * 5)} ${15.5-Math.sin(unDegre*75) * 5} 
                                
                                    M 15.5 15.5 15.5 ${15.5-Math.sin(unDegre*15) * 15}                 
                                    ${0.5 + (Math.cos(unDegre*45) * 15)} ${15.5-Math.sin(unDegre*45) * 15}    
                                    ${0.5 + (Math.cos(unDegre*75) * 15)} 0.5    
                                    M 0.5 0.5 ${0.5 + (Math.cos(unDegre*75) * 15)} 0.5 

                                    M 0.5 ${15.5-Math.sin(unDegre*75) * 5} 0.5 0.5 

                                    M 5.5 ${15.5-Math.sin(unDegre*15) * 5} 15.5 ${15.5-Math.sin(unDegre*15) * 15} Z
                                    
                                    M ${0.5 + (Math.cos(unDegre*45) * 5)} ${15.5-Math.sin(unDegre*45) * 5} ${0.5 + (Math.cos(unDegre*45) * 15)} ${15.5-Math.sin(unDegre*45) * 15} Z
                                    M ${0.5 + (Math.cos(unDegre*75) * 5)} ${15.5-Math.sin(unDegre*75) * 5} ${0.5 + (Math.cos(unDegre*75) * 15)} 0.5 Z`}
                           />,
                           <Path
                                key={"elbow-slice-half-dashed"}
                                id="elbow-slice-half-dashed"
                                className="Elbow_slice_half_dashed"
                                strokeLinecap="round"
                                stroke="#dbdbdb"                       
                                d={`M ${0.6+Math.cos(unDegre*30) * 5} ${15.6-Math.sin(unDegre*30) * 5} ${0.6+Math.cos(unDegre*30) * 14.55} ${15.6-Math.sin(unDegre*30) * 14.55}
                                    M ${0.5+Math.cos(unDegre*60) * 5} ${15.5-Math.sin(unDegre*60) * 5} ${0.5+Math.cos(unDegre*60) * 14.55} ${15.5-Math.sin(unDegre*60) * 14.55}`}
                           />]                                             
                           

const [elbowsLayerState, setStateElbows] = useState(elbowLayer);

    const dispatchFunctions = (e) => {
        e.stopPropagation();
        let elements = e.currentTarget.parentElement.parentElement.children[3].children;

            switch(e.currentTarget.value) {
                case "elbow":
                        setStateElbows(elbowLayer);
                        setCurrentAngleState(currentAngle);
                        setCurrentButtonLayerState(props.values[0]);
                        
                        setCurrentAngleAState(90);
                        setCurrentAngleBState(90);
                        setCurrentAngleAOrientedState(90);
                        setCurrentAngleBOrientedState(90);
                    break;  
                    
                case "elbow-double":                  
                        setStateElbows(doubleElbowLayer);
                        setCurrentAngleAState(currentAngleADoubleElbow);
                        setCurrentAngleBState(currentAngleBDoubleElbow);             
                        setCurrentButtonLayerState(props.values[1]);
                        
                        setCurrentAngleState(90);
                        setCurrentAngleAOrientedState(90);
                        setCurrentAngleBOrientedState(90);
                    break;

                case "elbow-double-oriented":
                        setStateElbows(doubleOrientedElbowLayer);
                        setCurrentAngleAOrientedState(currentAngleADoubleElbowOriented);
                        setCurrentAngleBOrientedState(currentAngleBDoubleElbowOriented);
                        setCurrentButtonLayerState(props.values[2]);

                        setCurrentAngleState(90);
                        setCurrentAngleAState(90);
                        setCurrentAngleBState(90); 
                    break; 
                    
                case "elbow-slice":
                        setStateElbows(elbowSliceLayer);
                        setCurrentButtonLayerState(props.values[3]);

                        setCurrentAngleState(90);
                        setCurrentAngleAState(90);
                        setCurrentAngleBState(90);
                        setCurrentAngleAOrientedState(90);
                    break;

                case "turn":
                        turnInitial(e);
                    break;

                default:
                    console.log("rien");
            }
                elements[elements.length-1].style.transform = `rotate(${ii-=ii}deg)`; 
    } 


    const turnInitial = (e) => { 
        e.stopPropagation();
            let blocSvg = e.currentTarget.parentElement.parentElement.children[3].children[1];   
            blocSvg.style.transform = `rotate(${0}deg)`;    
    }


    return (
        <div values={props.values} id={thisId} className={thisClass}>

            <Section id="app_setting_smart" value="app_setting_smart" className="App_setting_smart">
                <Button key={"utility"} id="utility-smart" className="Utility_smart" type="button" value="utility"
                    children={
                        <Img 
                            className="Utility_smart_img"
                            src="assets/utility.png"  
                            alt="utility" 
                        />
                    }
                />

                <Button key={"setting"} id="setting-smart" className="Setting_smart" type="button" value="setting" 
                    children={
                        <Img 
                            className="Setting_smart_img"
                            src="assets/setting_smart.png"  
                            alt="setting" 
                        />
                    }
                />
            </Section>

            <Section key={"buttons-screens"} value={"elbow"} className="App_buttons_smart">
                    
                <Button id="elbow" className="Elbow" type="button" value={"elbow"} display={dispatchFunctions}   
                    children={
                        <Img 
                            className="Elbow"
                            value={props.values.elbow}
                            src="assets/elbow.png"  
                            alt="elbow-steel" 
                        />
                    }
                />

                <Button id="elbow_double" type="button" value="elbow-double" display={dispatchFunctions}
                    children={
                        <Img 
                            className="Elbow_double"
                            src="assets/elbow_double.png"  
                            alt="elbow-double-steel" 
                        />
                    }
                />      

                <Button id="elbow_double_oriented" type="button" value="elbow-double-oriented" display={dispatchFunctions}
                    children={
                        <Img 
                            className="Elbow_double_oriented"                                    
                            src="assets/elbow_double_oriented.png"  
                            alt="elbow-double-oriented-steel"
                        />
                    }
                />

                <Button id="elbow_slice" type="button" value="elbow-slice" display={dispatchFunctions}
                    children={
                        <Img 
                            className="Elbow_slice" 
                            src="assets/elbow_slice.png" 
                            alt="elbow-slice-steel"
                        />
                    }
                />     
                    {(currentButtonLayerState === "elbow-double" || currentButtonLayerState === "elbow-double-oriented" ? [<Button key={"turn-left"} id="turn-left" className="Turn" type="button" value="turn" display={dispatchFunctions}>⥁</Button>,<Button key={"turn-right"} id="turn-right" className="Turn" type="button" value="turn" display={dispatchFunctions}>⥁</Button>] : false)}  
            </Section>

            <Section id="app-values" className="App_values">
                <Section id="diameters" className="Diameters">
                    <Span className="Title_diameters" container="Ø" />
                    <Span container="114 mm" />
                    <Span container="4 pouces" />
                </Section>

                <Section id="values-elbow" className="Values_elbow">
                    <Span className="Title_values_elbow" container="Extra/Intra" />
                    <Span container="127 mm" />
                    <Span container="61 mm" />
                </Section>

                <Section id="values-principal" className="Values_principal">
                    <Span className="Title_values_principal" container="Angle/Rayon" />

                    <Span
                        container= 
                        {
                            (currentButtonLayerState !== "elbow-double-oriented" ?
                            (currentButtonLayerState !== "elbow-slice" ? 
                            (currentButtonLayerState !== "elbow-double" ? currentAngle + "°" 
                            : "A " + currentAngleADoubleElbow + "° - B " + currentAngleBDoubleElbow + "°") 
                            : 90 + "°")
                            : "A " + currentAngleADoubleElbowOriented + "° - B " + currentAngleBDoubleElbowOriented + "°")
                        }
                    />

                    <Span container="152.4 mm" />
                </Section>
            </Section>


            <Section className="Elbow_svg">              
                <Span container={(currentButtonLayerState === "elbow-double-oriented" || currentButtonLayerState === "elbow-double" ? 6666 : false)} fontSize="0.75"></Span>
                    <Svgelbows id={"elbows-svg"} className={"Elbows_svg"} screensElbows={currentButtonLayerState}>
                        {elbowsLayerState}
                        {
                            (currentButtonLayerState !== "elbow-double-oriented" ?
                            (currentButtonLayerState !== "elbow-slice" ? 
                            (currentButtonLayerState !== "elbow-double" ? [tabAngles.map(angle => angle)]
                            : [tabAnglesADoubleElbow.map(angle => angle), tabAnglesBDoubleElbow.map(angle => angle)/*, cercle*/])  // ici cercle
                            : false)
                            : [tabAnglesADoubleElbow.map(angle => angle), tabAnglesBDoubleElbowOriented.map(angle => angle)])
                        }
                    </Svgelbows>
            </Section>


            <Section id="App-format-norme" className="App-format-norme">
                <Section id="formats" className="Formats">
                    <Button id="2d" className="Format" type="button" value="2D">2D</Button>
                    <Button id="3d" className="Format" type="button" value="3D">3D</Button>
                    <Button id="5d" className="Format" type="button" value="5D">5D</Button>
                </Section>

                <Section className="Normes">
                    <span className="Iso">iso</span>
                        <Span name="iso-ansi" id="iso-ansi" className="Iso_Ansi" type="radio" value="iso" />
                    <span className="Ansi">ansi</span>
                </Section>
            </Section>

            <Section id="app-range" className="App-range">
                <Input className="range" type="range" min={0} max={10} step={1} />
            </Section>

        </div>        
    );

}

export default Sectionsmart; 