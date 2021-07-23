import Section from '.././components/Section';
import Aside from '.././components/Aside';
import Span from '.././components/Span';
import Button from '.././components/Button';
import Input from '.././components/Input';
import Img from '.././components/Img';
import Svgelbows from '.././components/Svgelbows';
import Path from '.././components/Path';
import React, { useState }  from 'react';

const Sectionsmart = (props) => {

    const thisId = props.id;
    const thisClass = props.className;

    const [currentAngle, setCurrentAngleState] = useState(90);

    const [currentAngleADoubleElbow, setCurrentAngleAState] = useState(90);
    const [currentAngleBDoubleElbow, setCurrentAngleBState] = useState(90);

    const [currentAngleADoubleElbowOriented, setCurrentAngleAOrientedState] = useState(90);
    const [currentAngleBDoubleElbowOriented, setCurrentAngleBOrientedState] = useState(90);

    const [currentButtonLayerState, setCurrentButtonLayerState] = useState(props.values[0]);

    const [currentAngleScreen, setAngleScreenText] = useState(0);
    const [currentAngleScreenReal, setAngleScreenState] = useState(0); 

    const [currentFormatButton, setFormatButtonState] = useState(1);
    const [currentNormeButton, setNormeButtonState] = useState(0);

    var datasPipe = [ // std->sh->lg
        [15, 0.5, 21.3, 38, 28, 45],
        [20, 0.75, 27, 38, 0, 57.5],
        [25, 1, 33.5, 38, 25, 72.5],
        [32, 1.15, 42.3, 47.6, 32, 92.5],
        [40, 1.5, 48.3, 57.2, 38, 109],
        [50, 2, 60.3, 76.2, 51, 135],
        [65, 2.5, 76.1, 95.4, 64, 175, 73], // 95.8, 95
        [80, 3, 88.9, 114.3, 76, 205],
        [100, 4, 114.3, 152.4, 102, 270],
        [125, 5, 139.7, 190.5, 127, 330, 141], // 191, 190
        [150, 6, 168.3, 228.6, 152, 390],
        [200, 8, 219.1, 304.8, 203, 510],
        [250, 10, 273, 381, 254, 650],
        [300, 12, 323.9, 457, 305, 770],
        [350, 14, 355.6, 533, 356, 850],
        [400, 16, 406.4, 609.6, 406, 970],
        [450, 18, 457, 685.8, 457, 1122],
        [500, 20, 508, 762, 508, 1254],
        [550, 22, 559, 838, 559, 1398],
        [600, 24, 610, 914, 610, 1525],
        [650, 26, 660, 991, 660, 1650],
        [700, 28, 711, 1067, 711, 1778],
        [750, 30, 762, 1143, 762, 1905],
        [800, 32, 814, 1219, 813, 2033],
        [850, 34, 864, 1295, 864, 2155],
        [900, 36, 914, 1372, 914, 2285],
        [950, 38, 965, 1448, 965, 0],
        [1000, 40, 1016, 1524, 1016, 0],
        [1050, 42, 1067, 1600, 1067, 0],
        [1100, 44, 1118, 1676, 1118, 0],
        [1150, 46, 1168, 1753, 1168, 0],
        [1200, 48, 1219, 1829, 1219, 0]
    ];

    const [currentDiameter, setDiameter] = useState(datasPipe[0]);
    const [currentFormatElbow, setFormatElbowState] = useState(3);
    const [currentNorme, setNormeState] = useState(2);

    var tabAngles = [];
    var tabAnglesADoubleElbow = [];
    var tabAnglesBDoubleElbow = [];
    var tabAnglesBDoubleElbowOriented = [];
    var unDegre = (Math.PI / 180); 
    var ii = 0;
    var style = {backgroundColor: "forestgreen"};

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
            cosIntrado = Math.cos(unDegre*i) * 2; // for pseudo padding. 5 is reel proportion from svg elbow
            sinIntrado = Math.sin(unDegre*i) * 2; // for pseudo padding. 5 is reel proportion from svg elbow
        
            cosExtrado = Math.cos(unDegre*i) * 7; // for pseudo padding. 15 is reel proportion from svg elbow
            sinExtrado = Math.sin(unDegre*i) * 7; // for pseudo padding. 15 is reel proportion from svg elbow

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
            cosIntrado = Math.cos(unDegre*i) * -2; // for pseudo padding. 5 is reel proportion from svg elbow
            sinIntrado = Math.sin(unDegre*i) * -2; // for pseudo padding. 5 is reel proportion from svg elbow
        
            cosExtrado = Math.cos(unDegre*i) * -7; // for pseudo padding. 15 is reel proportion from svg elbow
            sinExtrado = Math.sin(unDegre*i) * -7; // for pseudo padding. 15 is reel proportion from svg elbow

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



        for (let i = 0; i < 90; i++) {
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
                    M${halfDiameter+(i*angle)} ${10.5}   
                    L${halfDiameter+(i*angle)} ${5.5}                       
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
                                key={"double-elbow-layer" /*0.75*/}
                                    id="double-elbow-layer"
                                    className="Double_elbow_layer"
                                    strokeLinecap="square"
                                    stroke="#8e8e8e"                        
                                    d={`M 10 12.5 15 12.5 Z 
                                        M 10 12.5 A 2 2, 0, 0, 0, 8 10.5
                                        M 15 12.5 A 7 7, 0, 0, 0, 8 5.5 

                                        M 8 10.5 8 5.5 

                                        M 6 3.5 A 2 2, 0, 0, 0, 8 5.5
                                        M 1 3.5 A 7 7, 0, 0, 0, 8 10.5 
                                        M 1 3.5 6 3.5 Z`}
                            />] 
                            
    var doubleOrientedElbowLayer = [<Path
                                        key={"double-elbow-oriented-layer"}
                                            id="double-elbow-oriented-layer"
                                            className="Double_elbow_oriented_layer"
                                            strokeLinecap="square"
                                            stroke="#8e8e8e"                      
                                            d={`M 10 12.5 15 12.5 Z 
                                                M 10 12.5 A 2 2, 0, 0, 0, 8 10.5
                                                M 15 12.5 A 7 7, 0, 0, 0, 8 5.5 
                                                M 8 10.5 8 5.5 Z

                                                M 3.5 10.5 8 10.5
                                                M 3.5 5.5 8 5.5 Z
                                                M 3.5 10.5 A 2.5 2.5, 0, 0, 1, 3.5 5.5`}
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

                default:
                    console.log("rien");
            }

            if (e.currentTarget.value !== currentButtonLayerState) {
                console.log(e.currentTarget.value, currentButtonLayerState);
                elements[elements.length-1].style.transform = `rotate(${ii-=ii}deg)`; 
                setAngleScreenText(0); 
                setAngleScreenState(currentAngleScreenReal);

                e.target.style.backgroundColor = "forestgreen";
                e.currentTarget.parentElement.children[currentButtonLayerState].children[0].style.backgroundColor = "tomato";
            }

    } 

    const currentFormatButtonWork = (e, format) => { 
        e.stopPropagation();

            if (format !== e.target.parentElement.children[currentFormatButton].value) {
                e.target.style.backgroundColor = "forestgreen";
                e.target.parentElement.children[currentFormatButton].style.backgroundColor = "#525252";
            } 
    }

    const getFormat = (e) => { 
        e.stopPropagation();
            let format = e.target.value;  

            if (e.target.value === "2D") {
                setFormatButtonState(0);
                currentFormatButtonWork(e, format);
                setFormatElbowState(4);
            } else if (e.target.value === "3D") {
                setFormatButtonState(1);
                currentFormatButtonWork(e, format);
                setFormatElbowState(3);
            } else if (e.target.value === "5D") {
                setFormatButtonState(2);
                currentFormatButtonWork(e, format);
                setFormatElbowState(5);
            }
    }

    const getNorme = (e) => { 
        e.stopPropagation();

        if (currentNormeButton === 0) {
            e.target.style.left = "0px";
            e.target.textContent = "ansi";
            setNormeButtonState(1);
            setNormeState(6);
        } else {
            e.target.style.left = "50%";
            e.target.textContent = "iso";
            setNormeButtonState(0);
            (currentNorme !== 2 ? setNormeState(2) : false);
        }
        
    }

    const resetOrientationScreen = (e) => {
        e.stopPropagation();

        setAngleScreenText(0);
        e.currentTarget.parentElement.parentElement.children[1].style.transform = "rotate(0deg)";
    }


    return (
        <div values={props.values} id={thisId} className={thisClass}>

            <Section id="app-setting-smart" value="app-setting-smart" className="App_setting_smart">
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
                            style={style}
                            value={props.values.elbow}
                            src="assets/elbow.png"  
                            alt="elbow-steel" 
                        />
                    }
                />

                <Button id="elbow-double" type="button" value="elbow-double" display={dispatchFunctions}
                    children={
                        <Img 
                            className="Elbow_double"
                            src="assets/elbow_double.png"  
                            alt="elbow-double-steel" 
                        />
                    }
                />      

                <Button id="elbow-double-oriented" type="button" value="elbow-double-oriented" display={dispatchFunctions}
                    children={
                        <Img 
                            className="Elbow_double_oriented"                                  
                            src="assets/elbow_double_oriented.png"  
                            alt="elbow-double-oriented-steel"
                        />
                    }
                />

                <Button id="elbow-slice" type="button" value="elbow-slice" display={dispatchFunctions}
                    children={
                        <Img 
                            className="Elbow_slice" 
                            src="assets/elbow_slice.png" 
                            alt="elbow-slice-steel"
                        />
                    }
                />     
                    {(currentButtonLayerState === "elbow-double" || currentButtonLayerState === "elbow-double-oriented" ? <Input className="Button_turn" type="number" min={0} max={360} step={1} value={currentAngleScreen} displayChange={(e) => {e.stopPropagation(); setAngleScreenText(e.currentTarget.value); e.currentTarget.parentElement.parentElement.children[3].children[1].style.transform = `rotate(${e.target.value}deg)`}} /> : false)}  
            </Section>

            <Section id="app-values" className="App_values">
                <Section id="diameters" className="Diameters">
                    <Span className="Title_diameters" container="Ø" />
                    <Span container={currentDiameter[currentNorme] + " mm"} />
                    <Span container={currentDiameter[1] + " pouces"} />
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

                    <Span container={currentDiameter[currentFormatElbow] + " mm"} />
                </Section>
            </Section>

            <Section className="Elbow_svg">              
                <Aside children={(currentButtonLayerState === "elbow-double-oriented" || currentButtonLayerState === "elbow-double" ? [<Span key={"turn"} id="turn" className="Turn" container={"test"}></Span>, <Span key={"test"} id="turn" className="Test" container={"angle"}></Span>, <Span key={"reset-orientation-screen"} className="Reset_orientation_screen" container="↺" display={resetOrientationScreen}></Span>] : false)}></Aside>
                    <Svgelbows id={"elbows-svg"} className={"Elbows_svg"} screensElbows={currentButtonLayerState} angleScreen={currentAngleScreen}>
                        {elbowsLayerState}
                        {
                            (currentButtonLayerState !== "elbow-double-oriented" ?
                            (currentButtonLayerState !== "elbow-slice" ? 
                            (currentButtonLayerState !== "elbow-double" ? [tabAngles.map(angle => angle)]
                            : [tabAnglesADoubleElbow.map(angle => angle), tabAnglesBDoubleElbow.map(angle => angle)])  
                            : false)
                            : [tabAnglesADoubleElbow.map(angle => angle), tabAnglesBDoubleElbowOriented.map(angle => angle)])
                        }
                    </Svgelbows>
            </Section>


            <Section id="App-format-norme" className="App-format-norme">
                <Section id="formats" className="Formats">
                    <Button id="2d" className="Format" type="button" value="2D" display={getFormat}>2D</Button>
                    <Button id="3d" className="Format" type="button" value="3D" display={getFormat}>3D</Button>
                    <Button id="5d" className="Format" type="button" value="5D" display={getFormat}>5D</Button>
                </Section>

                <Section className="Normes">
                    <span className="Iso">ansi</span>
                        {(currentDiameter[currentNorme] === 76.1 || currentDiameter[currentNorme] === 139.7 || currentDiameter[currentNorme] === 73 || currentDiameter[currentNorme] === 141 ? <Button name="iso-ansi" id="iso-ansi" className="Iso_Ansi" type="radio" value="iso-ansi" display={getNorme}>iso</Button> : false)}
                    <span className="Ansi">iso</span>
                </Section>
            </Section>

            <Section id="app-range" className="App-range">
                <Input className="range" type="range" min={0} max={datasPipe.length-1} step={1} displayChange={(e) => {(datasPipe[e.target.value] !== 73 || datasPipe[e.target.value] !== 141 ? setNormeState(2) : false); setNormeButtonState(0); setDiameter(datasPipe[e.target.value])}} defaultValue={0} />
            </Section>

        </div>        
    );

}

export default Sectionsmart; 