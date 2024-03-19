import React, { useState }  from 'react';
import Section from '.././components/Section';
import Aside from '.././components/Aside';
import Span from '.././components/Span';
import Button from '.././components/Button';
import Input from '.././components/Input';
import Img from '.././components/Img';

import Svgelbows from '.././components/Svgelbows';
import Path from '.././components/Path';
import Line from '.././components/Line';
import Text from '.././components/Text';
import datasPipe from '../datasPipe';

import image from './../chaufferie.png';

const Sectionsmart = (props) => {

    ///////////////////////// CONST VALUES /////////////////////////////
    ////////////////////////////////////////////////////////////////////
    const thisId = props.id;
    const thisClass = props.className;
    const PiSurDeux = Math.PI / 2;
    const unDegre = (Math.PI / 180);
    ///////////////////////// CONST VALUES /////////////////////////////
    ////////////////////////////////////////////////////////////////////


    /////////////////////// CONST OBJECT STYLE /////////////////////////
    ////////////////////////////////////////////////////////////////////
    const divStyle = {
        display: "flex",
        flex: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
    };

    const asideStyle = {
        margin: "0 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "max-content",
        fontSize: "0.7vw",
        color: "#48dbfb",
    };

    const spanStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "10px",
        height: "max-content",
        padding: "0 7%",
        fontSize: "13px"
    }
    /////////////////////// CONST OBJECT STYLE /////////////////////////
    ////////////////////////////////////////////////////////////////////


    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    const [currentAngle, setCurrentAngleState] = useState(90);

    const [currentPos, setCurrentPosState] = useState("2.5vw");

    const [currentAngleADoubleElbow, setCurrentAngleAState] = useState(90);
    const [currentAngleBDoubleElbow, setCurrentAngleBState] = useState(90);

    const [currentAngleADoubleElbowOriented, setCurrentAngleAOrientedState] = useState(90);
    const [currentAngleBDoubleElbowOriented, setCurrentAngleBOrientedState] = useState(90);
    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    ////////////////////////// VAR VALUES //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    var lengthRadiusAOriented = Math.tan((unDegre * currentAngleADoubleElbowOriented) / 2) * 4.5;
    var lengthRadiusBOriented = Math.tan((unDegre * currentAngleBDoubleElbowOriented) / 2) * 4.5;
    ////////////////////////// VAR VALUES //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    const [currentButtonLayerState, setCurrentButtonLayerState] = useState(props.values[0]);

    const [currentAngleScreen, setAngleScreenText] = useState(0);
    const [currentAngleScreenReal, setAngleScreenState] = useState(0); 

    const [currentFormatButton, setFormatButtonState] = useState(1);
    const [currentNormeButton, setNormeButtonState] = useState(0);

    const [currentDiameter, setDiameter] = useState(datasPipe[0]);
    const [currentDiameterOnly, setDiameterOnly] = useState(datasPipe[0]);
    const [currentFormatElbow, setFormatElbowState] = useState(3);
    const [currentNorme, setNormeState] = useState(2);
    const [currentNormeLabel, setNormeLabelState] = useState("iso");

    const [currentIntra, setCurrentIntraState] = useState(42.96);
    const [currentExtra, setCurrentExtraState] = useState(76.42);

    const [currentIntraA, setCurrentIntraAState] = useState(42.96);
    const [currentIntraB, setCurrentIntraBState] = useState(42.96);
    const [currentIntraAOriented, setCurrentIntraAOrientedState] = useState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleADoubleElbowOriented);
    const [currentIntraBOriented, setCurrentIntraBOrientedState] = useState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleBDoubleElbowOriented);

    const [currentExtraA, setCurrentExtraAState] = useState(76.42);
    const [currentExtraB, setCurrentExtraBState] = useState(76.42);
    const [currentExtraAOriented, setCurrentExtraAOrientedState] = useState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleADoubleElbowOriented);
    const [currentExtraBOriented, setCurrentExtraBOrientedState] = useState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleBDoubleElbowOriented);

    const [currentEntraxe, setEntraxeState] = useState((76.00) * Math.sin(unDegre * currentAngleBDoubleElbow));
    const [lengthEqualDoubleElbow, setlengthEqualDoubleElbowState] = useState(currentDiameter[currentFormatElbow]*2);

    const [currentEntraxeDoubleOriented, setEntraxeDoubleOrientedState] = useState(((lengthRadiusAOriented + lengthRadiusBOriented) * (Math.cos(unDegre * (90-currentAngleADoubleElbowOriented)))));
    const [currentLengthAxeToBaseDoubleOriented, setlengthAxeToBase] = useState(Math.cos(currentAngleADoubleElbowOriented * unDegre) * (lengthRadiusAOriented+lengthRadiusBOriented) + lengthRadiusAOriented);

    const [currentNbrGeneratrices, setNbrGeneratrices] = useState(4);
    const [displayGeneratrices, setDisplayGeneratrices] = useState(false);

    const [radiusElbowSlice, setRadiusElbowSlice] = useState(100);

    const [currentGeneratriceOne, setcurrentGeneratriceOne] = useState(Number(Math.tan(unDegre*15) * (100-(21.3/2))).toFixed(1));
    const [currentGeneratriceLast, setcurrentGeneratriceLast] = useState(Number(Math.tan(unDegre*15) * (100+(21.3/2))).toFixed(1));

    const [currentDatasForDiamByNorme, setCurrentDatasForDiamByNorme] = useState([0]);
    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    /////////////////////////// COMPONENT //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    var sectionAllGeneratrices =    <Section key="bloc-genez-4-8" style={{  }} id="block_generatrices_values" className="Block_generatrices_values">
                                        <Span key={`gene-${2}`} id="gene" className="Gene" container={(`${2}/${2}: ${26.8}`)} />
                                    </Section>

    var sectionTwoG =   <Section  key="bloc-genes-one-last" id="block_two_generatrices_values" className="Block_two_generatrices_values">
                            <Aside key="gene-one" style={asideStyle}><Span style={{ marginRight: "3px", fontSize: "11px" }}>1: </Span><Span id="gene" className="Two_gene" container={currentGeneratriceOne} /></Aside>
                            <Aside key="gene-last" style={asideStyle}><Span style={{ marginRight: "3px", fontSize: "11px" }}>{(currentNbrGeneratrices/2)+1}: </Span><Span id="gene" className="Two_gene" container={currentGeneratriceLast} /></Aside>
                        </Section>     
                        
    var allPathGeneratrices =   [
                                    <Line
                                        key={"gene-1"}
                                        x1 = {0.5} y1 = {10.5} 
                                        x2 = {0.5+Math.tan(unDegre*15) * 5} y2 = {10.5}
                                        stroke = "white" 
                                        strokeWidth = {0.2}
                                        strokeLinecap = "round"   
                                    />,
                                    <Line
                                        key={"gene-2"}
                                        x1 = {0.5} y1 = {0.5+((10/2)*1)} 
                                        x2 = {0.5+Math.tan(unDegre*15) * ((10/1)*1)} y2 = {0.5+((10/2)*1)}
                                        stroke = "white" 
                                        strokeWidth = {0.1}
                                        strokeLinecap = "round"   
                                    />,                              
                                    <Line
                                        key={"gene-3"}
                                        x1 = {0.5} y1 = {0.5} 
                                        x2 = {0.5+Math.tan(unDegre*15) * 15} y2 = {0.5}
                                        stroke = "white" 
                                        strokeWidth = {0.2}
                                        strokeLinecap = "round"   
                                    />,
                                    <Text key={"text-gene-1"} className="Two_label_gene" y={10.5} container={"1"} fill={"#48dbfb"} fontSize={"0.5"} fontWeight={900} />,
                                    <Text key={"text-gene-2"} className="Two_label_gene" y={0.5+((10/2)*1)} container={"2"} fill={"white"} fontSize={"0.5"} fontWeight={900} />,
                                    <Text key={"text-gene-3"} className="Two_label_gene" y={0.5} container={"3"} fill={"#48dbfb"} fontSize={"0.5"} fontWeight={900} />
                                ]
    /////////////////////////// COMPONENT //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    const [currentGeneratrices, setCurrentGeneratrices] = useState(sectionAllGeneratrices);
    const [currentPathGeneratrices, setCurrentPathGeneratrices] = useState(allPathGeneratrices);
    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    ////////////////////////// VAR VALUES //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    var cosIntrado, sinIntrado, cosExtrado, sinExtrado;
    var rowsSpan = [];
    var colectPathGeneratrices = [];
    var count = 0;
    var iteration = 0;
    var tabAngles = [];
    var tabAnglesADoubleElbow = [];
    var tabAnglesBDoubleElbow = [];
    var tabAnglesBDoubleElbowOriented = []; 
    var styleButtonElbow = {backgroundColor: "forestgreen"};
    var lengthRadiusA = Math.tan((unDegre * currentAngleADoubleElbow) / 2) * 4.5;
    var lengthRadiusB = Math.tan((unDegre * currentAngleBDoubleElbow) / 2) * 4.5;
    var coteAdj = 9 - (2 * lengthRadiusB) * Math.cos((90-currentAngleBDoubleElbow) * unDegre); // 9 * 9 = (diamètre + rayon intraA + rayon intraB) pour la mesure bleu
    var lengthRadiusElbowsOriented = ((4.5/90) * (currentAngleBDoubleElbowOriented)) + lengthRadiusAOriented;
    var toLengthRadiusElbowsOriented = 12.5 - (Math.cos(unDegre * (90-currentAngleADoubleElbowOriented)) * lengthRadiusElbowsOriented);
    var generatriceAxial = Number(((currentNbrGeneratrices-(currentNbrGeneratrices/2))/2)+1);
    ////////////////////////// VAR VALUES //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    ////////////////////////// FUNCTIONS ///////////////////////////////
    ////////////////////////////////////////////////////////////////////
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
                setCurrentAngleState(() => angle);
            } 

            if (currentButtonLayerState === "elbow-double") {
                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "a") { 
                    e.currentTarget.parentElement.children["angle-"+currentAngleADoubleElbow+"-a"].attributes.opacity.nodeValue = "0";

                    angleADoubleElbow = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleAState(() => angleADoubleElbow);
                } 

                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "b") {
                    e.currentTarget.parentElement.children["angle-"+currentAngleBDoubleElbow+"-b"].attributes.opacity.nodeValue = "0";
                    
                    angleBDoubleElbow = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleBState(() => angleBDoubleElbow);
                } 
            }

            if (currentButtonLayerState === "elbow-double-oriented") {
                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "o") { 
                    e.currentTarget.parentElement.children["angle-"+currentAngleADoubleElbowOriented+"-ao"].attributes.opacity.nodeValue = "0";

                    angleADoubleElbowOriented = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleAOrientedState(() => angleADoubleElbowOriented);
                } 

                if (e.target.id.substr(e.target.id.length-1, e.target.id.length) === "i") {
                    e.currentTarget.parentElement.children["angle-"+currentAngleBDoubleElbowOriented+"-bi"].attributes.opacity.nodeValue = "0";
                    
                    angleBDoubleElbowOriented = Number(e.currentTarget.attributes.value.value);
                    setCurrentAngleBOrientedState(() => angleBDoubleElbowOriented);
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

        const getNbrGeneratrices = (e) => { 
            e.stopPropagation();
                
            setNbrGeneratrices(Number(e.currentTarget.value));
        }
    ////////////////////////// FUNCTIONS ///////////////////////////////
    ////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////
        for (let i = 1; i < 91; i++) {
            cosIntrado = Math.cos(unDegre*i) * 5.1; // for pseudo padding. 5 is reel proportion from svg elbow
            sinIntrado = Math.sin(unDegre*i) * 5.1; // for pseudo padding. 5 is reel proportion from svg elbow
        
            cosExtrado = Math.cos(unDegre*i) * 14.9; // for pseudo padding. 15 is reel proportion from svg elbow
            sinExtrado = Math.sin(unDegre*i) * 14.9; // for pseudo padding. 15 is reel proportion from svg elbow

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
                    M ${(0.5+cosIntrado)} ${15.5-(sinIntrado)}   
                    L ${(0.5+cosExtrado)} ${15.5-(sinExtrado)}                       
                `} 
                strokeLinecap={"strokeLinecap"}
            />
        }
        let courbeExtra = [<Path key={"courbe-zero"} id={"courbe-zero"} className={"Courbe_zero"} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 5.5 15.5 15.5 15.5`} />, <Path key={"courbe-ext-"+currentAngle} id={"courbe-ext-"+currentAngle} className={"Courbe_ext_"+currentAngle} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 15.5 15.5 A 15 15, 0, 0, 0, ${0.5+Math.cos(unDegre*currentAngle) * 15} ${15.5-Math.sin(unDegre*currentAngle) * 15}`} />]
        let courbeIntra = <Path key={"courbe-ext-"+currentAngle} id={"courbe-ext-"+currentAngle} className={"Courbe_ext_"+currentAngle} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 5.5 15.5 A 5 5, 0, 0, 0, ${0.5+Math.cos(unDegre*currentAngle) * 5} ${15.5-Math.sin(unDegre*currentAngle) * 5}`} />
        tabAngles.push(courbeExtra, courbeIntra);

        for (let i = 0; i < 90; i++) { 
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
                    M ${(8+cosIntrado)} ${3.5-(sinIntrado)}   
                    L ${(8+cosExtrado)} ${3.5-(sinExtrado)}                       
                `} 
                strokeLinecap={"strokeLinecap"}
            />
        } 
        let courbeExtraElbowB = <Path key={"courbe-ext-b"+currentAngleBDoubleElbow} id={"courbe-ext-b"+currentAngleBDoubleElbow} className={"Courbe_ext_b"+currentAngleBDoubleElbow} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 8 5.5 A 2 2, 0, 0, 1, ${(8+Math.cos(unDegre*(90-(currentAngleBDoubleElbow))) * -2)} ${3.5-(Math.sin(unDegre*(90-currentAngleBDoubleElbow)) * -2)}`} />
        let courbeIntraElbowB = <Path key={"courbe-int-b"+currentAngleBDoubleElbow} id={"courbe-int-b"+currentAngleBDoubleElbow} className={"Courbe_int_b"+currentAngleBDoubleElbow} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 8 10.5 A 7 7, 0, 0, 1, ${8+Math.cos(unDegre*(90-currentAngleBDoubleElbow)) * -7} ${3.5-Math.sin(unDegre*(90-currentAngleBDoubleElbow)) * -7}`} />
        tabAnglesBDoubleElbow.push(courbeExtraElbowB, courbeIntraElbowB);


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
                        M ${halfDiameter+(i*angle)} ${10.5}   
                        L ${halfDiameter+(i*angle)} ${5.5} 
                        M 8 5.5
                        L ${halfDiameter+(i*angle)} ${5.5} 
                        M 8 10.5
                        L ${halfDiameter+(i*angle)} ${10.5} Z
                    `} 
                    strokeLinecap={"square"}
            />
        }
    ////////////////////////////////////////////////////////////////////////////


    ////////////////////////////////////////////////////////////////////////////
        var blocChoiceGeneratrices = [<Aside key={"title-genes"} style={spanStyle}>Génératrices</Aside>,

                                        <div key={"bloc-genes-a"} style={divStyle}>
                                            <Button key={"gene-4"} id="quatre_g" thisMargin={"2.5% 10%"} thisPadding={"3.5% 0"} thisWidth={"30%"} thisBorderButton={"1px solid darkgray"} thisFontSize={"11px"} className="Format" thisColorButton={(currentNbrGeneratrices === 4 ? "forestgreen" : "transparent")} type="button" value="4" display={getNbrGeneratrices}>4</Button>
                                            <Button key={"gene-8"} id="huit_g" thisMargin={"2.5% 10%"} thisPadding={"3.5% 0"} thisWidth={"30%"} thisBorderButton={"1px solid darkgray"} thisFontSize={"11px"} className="Format" thisColorButton={(currentNbrGeneratrices === 8 ? "forestgreen" : "transparent")} type="button" value="8" display={getNbrGeneratrices}>8</Button>
                                        </div>,

                                        <div key={"bloc-genes-b"} style={divStyle}>
                                            <Button key={"gene-12"} id="douze_g" thisMargin={"2.5% 10%"} thisPadding={"3.5% 0"} thisWidth={"30%"} thisBorderButton={"1px solid darkgray"} thisFontSize={"11px"} className="Format" thisColorButton={(currentNbrGeneratrices === 12 ? "forestgreen" : "transparent")} type="button" value="12" display={getNbrGeneratrices}>12</Button>
                                            <Button key={"gene-16"} id="seize_g" thisMargin={"2.5% 10%"} thisPadding={"3.5% 0"} thisWidth={"30%"} thisBorderButton={"1px solid darkgray"} thisFontSize={"11px"} className="Format" thisColorButton={(currentNbrGeneratrices === 16 ? "forestgreen" : "transparent")} type="button" value="16" display={getNbrGeneratrices}>16</Button>
                                        </div>,

                                        <div key={"bloc-genes-cc"} style={divStyle}>
                                            <Button key={"gene-24"} id="24_g" thisMargin={"2.5% 10%"} thisPadding={"3.5% 0"} thisWidth={"30%"} thisBorderButton={"1px solid darkgray"} thisFontSize={"11px"} className="Format" thisColorButton={(currentNbrGeneratrices === 24 ? "forestgreen" : "transparent")} type="button" value="24" display={getNbrGeneratrices}>24</Button>
                                            <Button key={"gene-32"} id="32_g" thisMargin={"2.5% 10%"} thisPadding={"3.5% 0"} thisWidth={"30%"} thisBorderButton={"1px solid darkgray"} thisFontSize={"11px"} className="Format" thisColorButton={(currentNbrGeneratrices === 32 ? "forestgreen" : "transparent")} type="button" value="32" display={getNbrGeneratrices}>32</Button>
                                        </div>]

        var elbowLayer = [<Path
                            key={"elbow-layer"}
                                id="elbow-layer"
                                className="Elbow_layer"
                                strokeLinecap="square"
                                stroke="#454545"             
                                d={`M 5.5 15.5 15.5 15.5 
                                    M 5.5 15.5 A 5 5, 0, 0, 0, 0.5 10.5
                                    M 15.5 15.5 A 15 15, 0, 0, 0, 0.5 0.5 
                                    M 0.5 10.5 0.5 0.5 Z`}
                        />] 

        var doubleElbowLayer = [<Path
                                    key={"double-elbow" /*0.75*/}
                                        id="double-elbow-layer"
                                        className="Double_elbow_layer"
                                        strokeLinecap="square"
                                        stroke="#454545"                        
                                        d={`M 10 12.5 15 12.5 Z 
                                            M 10 12.5 A 2 2, 0, 0, 0, 8 10.5
                                            M 15 12.5 A 7 7, 0, 0, 0, 8 5.5 

                                            M 6 3.5 A 2 2, 0, 0, 0, 8 5.5
                                            M 1 3.5 A 7 7, 0, 0, 0, 8 10.5 
                                            M 1 3.5 6 3.5 Z`}
                                />,
                                <Path
                                    key={"double-elbow-join" /*0.75*/}
                                        id="double-elbow-layer-join"
                                        className="Double_elbow_layer_join"
                                        strokeLinecap="square"
                                        stroke="white"   
                                        strokeWidth="0.1"                     
                                        d={`M 8 10.5 8 5.5 Z`}
                                />] 
                                
        var doubleOrientedElbowLayer = [<Path
                                            key={"double-elbow-oriented"}
                                                id="double-elbow-oriented-layer"
                                                className="Double_elbow_oriented_layer"
                                                strokeLinecap="square"
                                                stroke="#454545"                      
                                                d={`M 10 12.5 15 12.5 Z 
                                                    M 10 12.5 A 2 2, 0, 0, 0, 8 10.5
                                                    M 15 12.5 A 7 7, 0, 0, 0, 8 5.5 
                                                    
                                                    M 3.5 10.5 8 10.5
                                                    M 3.5 5.5 8 5.5 Z
                                                    M 3.5 10.5 A 2.5 2.5, 0, 0, 1, 3.5 5.5`}
                                        />,
                                        <Path
                                            key={"double-elbow-join" /*0.75*/}
                                                id="double-elbow-layer-join"
                                                className="Double_elbow_layer_join"
                                                strokeLinecap="square"
                                                stroke="white"   
                                                strokeWidth="0.1"                     
                                                d={`M 8 10.5 8 5.5 Z`}
                                        />]   

        var elbowSliceLayer =   [<line //////// line base vertical on 0.5 0.5
                                        key={"elbow-slice-base-v"}
                                            id="elbow-slice-layer"
                                            className="Elbow_slice_layer"
                                            x1 = {0.5} y1 = {0.5}
                                            x2 = {0.5} y2 = {10.5}
                                            stroke = "white" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "square"   
                                    />,

                                    <line //////// Axe half section on 0.5 0.5
                                        key={"elbow-slice-half"}
                                            x1 = {0.5 + Math.cos(unDegre * 60) * 15} y1 = {15.5 - Math.sin(unDegre * 60) * 15} 
                                            x2 = {0.5 + Math.cos(unDegre * 60) * 5} y2 = {15.5 - Math.sin(unDegre * 60) * 5}
                                            stroke = "white" 
                                            strokeWidth = {0.1}
                                            strokeOpacity = {0.5}
                                            strokeLinecap = "round" 
                                            strokeDasharray = "1.5px, 0.3px, 0.35px, 0.3px"  
                                            strokeDashoffset="50%"
                                    />,

                                    //////// section on 0.5 0.5
                                    <line
                                        key={"elbow-slice-top-a"}
                                            x1 = {0.5+Math.tan(unDegre*15) * 15} y1 = {0.5} 
                                            x2 = {0.5+(Math.tan(unDegre*15) * 15)*3} y2 = {0.5}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                            transform = {`rotate(${30}, ${0.5+Math.tan(unDegre*15) * 15}, ${0.5})`}
                                    />,
                                    <line
                                        key={"elbow-slice-top-b"}
                                            x1 = {0.5+Math.tan(unDegre*15) * 5} y1 = {10.5} 
                                            x2 = {0.5+(Math.tan(unDegre*15) * 5)*3} y2 = {10.5}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                            transform = {`rotate(${30}, ${0.5+Math.tan(unDegre*15) * 5}, ${10.5})`}
                                    />,

                                    <line
                                        key={"elbow-slice-top-c"}
                                            x1 = {0.5 + Math.tan(unDegre * 15) * 15} y1 = {0.5}
                                            x2 = {0.5 + Math.tan(unDegre * 15) * 5} y2 = {10.5}
                                            stroke = "white" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                    />,

                                    ////////////// SECTION AXIAL //////////////////////////////////
                                    /////////////////////////////////////////////////////////////// 0.5 is depart of svg and path 
                                    <line
                                        key={"elbow-slice-axe"}
                                            x1 = {0.5+Math.tan(unDegre*15) * 5} y1 = {10.5}
                                            x2 = {0.5+Math.tan(unDegre*15) * 15} y2 = {0.5}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                            transform = {`rotate(${30}, ${0.5}, ${15.5})`}
                                    />,
                                    ////////////// SECTION AXIAL //////////////////////////////////
                                    ///////////////////////////////////////////////////////////////

                                    //////// line base horizontal on 15.5 15.5
                                    <line
                                        key={"elbow-slice-base-h-a"}
                                            x1 = {5.5} y1 = {15.5}
                                            x2 = {15.5} y2 = {15.5}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "square"   
                                    />,
                                    <Path
                                        key={"elbow-slice-base-h-b"}
                                            className="Elbow_slice_layer"
                                            strokeLinecap="round"
                                            stroke="#454545"                      
                                            d={`M ${15.5} ${15.5 - Math.tan(unDegre * 15) * 15} ${5.5} ${15.5 - Math.tan(unDegre * 15) * 5}Z`} 
                                    />,
                                    //////// line base horizontal on 15.5 15.5

                                    <line //////// Axe half section on 15.5 15.5
                                        key={"elbow-slice-half-section"}
                                            x1 = {0.5 + Math.cos(unDegre * 30) * 15} y1 = {15.5 - Math.sin(unDegre * 30) * 15} 
                                            x2 = {0.5 + Math.cos(unDegre * 30) * 5} y2 = {15.5 - Math.sin(unDegre * 30) * 5}
                                            stroke = "white" 
                                            strokeWidth = {0.1}
                                            strokeOpacity = {0.5}
                                            strokeLinecap = "round" 
                                            strokeDasharray = "1.5px, 0.3px, 0.35px, 0.3px"  
                                            strokeDashoffset="50%"
                                    />,                                                                                               

                                    //////// section on 15.5 15.5
                                    <line
                                        key={"elbow-slice-base-a"}
                                            x1 = {15.5} y1 = {15.5 - Math.tan(unDegre*15) * 15} 
                                            x2 = {15.5} y2 = {15.5 - (Math.tan(unDegre*15) * 15)*3}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                            transform = {`rotate(${-30}, ${15.5}, ${15.5 - Math.tan(unDegre*15) * 15})`}
                                    />,
                                    <line
                                        key={"elbow-slice-base-b"}
                                            x1 = {5.5} y1 = {15.5 - Math.tan(unDegre*15) * 5} 
                                            x2 = {5.5} y2 = {15.5 - (Math.tan(unDegre*15) * 5)*3}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                            transform = {`rotate(${-30}, ${5.5}, ${15.5 - Math.tan(unDegre*15) * 5})`}
                                    />,
                                    //////// section on 15.5 15.5

                                    //////// half section on 15.5 15.5
                                    <Line
                                        key={"elbow-slice-half-s-b-a"}
                                            x1 = {15.5} y1 = {15.5} 
                                            x2 = {15.5} y2 = {15.5 - Math.tan(unDegre*15) * 15}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                    />,
                                    <Line //////// half section on 15.5 15.5
                                        key={"elbow-slice-half-s-b-b"}
                                            x1 = {5.5} y1 = {15.5} 
                                            x2 = {5.5} y2 = {15.5 - Math.tan(unDegre*15) * 5}
                                            stroke = "#454545" 
                                            strokeWidth = {0.2}
                                            strokeLinecap = "round"   
                                    />]
    ////////////////////////////////////////////////////////////////////////////  
                           

    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////
    const [elbowsLayerState, setStateElbows] = useState(elbowLayer);

    const [showModal, setShowModal] = useState(false);
    const [showModalDiameters, setShowModalDiameters] = useState(false);
    /////////////////////////// USE STATE //////////////////////////////
    ////////////////////////////////////////////////////////////////////


    ////////////////////////// FUNCTIONS ///////////////////////////////
    ////////////////////////////////////////////////////////////////////

    const makeModalTrialVersion = () => {
        document.addEventListener("click", (e) => {
            if (e.target.className == "showModalTrialVersion" || e.target.className == "format") {
                setShowModal(true);
            } else if (e.target.className == "hideModalTrialVersion") {
                setShowModal(false)
            }
            e.stopPropagation();
        })
    }


    const dispatchFunctions = (e) => {
        e.stopPropagation();
        let elements = e.currentTarget.parentElement.parentElement.children[3].children;
        let rowsOfGenesAndPaths;

            switch(e.currentTarget.value) {
                case "elbow":
                        setStateElbows(elbowLayer);
                        setCurrentAngleState(currentAngle);
                        setCurrentButtonLayerState(props.values[0]);
                        
                        setCurrentAngleAState(90);
                        setCurrentAngleBState(90);
                        setCurrentAngleAOrientedState(90);
                        setCurrentAngleBOrientedState(90);

                        setDisplayGeneratrices(false);

                        setNbrGeneratrices(currentNbrGeneratrices);

                        rowsOfGenesAndPaths = makeGenesAndPaths(e); 
                        (displayGeneratrices === true ? setCurrentGeneratrices(rowsOfGenesAndPaths) : setDisplayGeneratrices(false));

                    break;  
                    
                case "elbow-double":                  
                        setStateElbows(doubleElbowLayer);
                        setCurrentAngleAState(currentAngleADoubleElbow);
                        setCurrentAngleBState(currentAngleBDoubleElbow);             
                        setCurrentButtonLayerState(props.values[1]);
                        
                        setCurrentAngleState(90);
                        setCurrentAngleAOrientedState(90);
                        setCurrentAngleBOrientedState(90);

                        setDisplayGeneratrices(false);

                        setNbrGeneratrices(currentNbrGeneratrices);

                        rowsOfGenesAndPaths = makeGenesAndPaths(e); 
                        (displayGeneratrices === true ? setCurrentGeneratrices(rowsOfGenesAndPaths) : setDisplayGeneratrices(false));
                    break;

                case "elbow-double-oriented":
                        setStateElbows(doubleOrientedElbowLayer);
                        setCurrentAngleAOrientedState(currentAngleADoubleElbowOriented);
                        setCurrentAngleBOrientedState(currentAngleBDoubleElbowOriented);
                        setCurrentButtonLayerState(props.values[2]);

                        setCurrentAngleState(90);
                        setCurrentAngleAState(90);
                        setCurrentAngleBState(90); 

                        setDisplayGeneratrices(false);

                        setNbrGeneratrices(currentNbrGeneratrices);

                        rowsOfGenesAndPaths = makeGenesAndPaths(e); 
                        (displayGeneratrices === true ? setCurrentGeneratrices(rowsOfGenesAndPaths) : setDisplayGeneratrices(false));
                    break; 
                    
                case "elbow-slice":
                        setStateElbows(elbowSliceLayer);
                        setCurrentButtonLayerState(props.values[3]);

                        setCurrentAngleState(90);
                        setCurrentAngleAState(90);
                        setCurrentAngleBState(90);
                        setCurrentAngleAOrientedState(90); 
                        setCurrentAngleBOrientedState(90);

                        if (currentNorme === 6) {
                            setCurrentPosState("0px"); 
                            setNormeLabelState("ansi");
                        } else if (currentNorme === 2) {
                            setCurrentPosState("50%");
                            setNormeLabelState("iso");
                        }

                        setFormatButtonState(currentFormatButton);
                        setCurrentGeneratrices(currentGeneratrices); 
                    break;

                default:
                    console.log("error");
            }

            if (e.currentTarget.value !== currentButtonLayerState) {
                elements[elements.length-1].style.transform = `rotate(${iteration-=iteration}deg)`; 
                setAngleScreenText(0); 
                setAngleScreenState(currentAngleScreenReal);

                e.target.style.backgroundColor = "forestgreen";
                e.currentTarget.parentElement.children[currentButtonLayerState].children[0].style.backgroundColor = "#e74c3c";
            }

    } 

    const makeBlocsOfGeneratrices = (rows) => {
        let bloc = [];
        
        if (currentNbrGeneratrices === 4 || currentNbrGeneratrices === 8) {
            bloc[0] =  <Section key="bloc-genez-4-8" id="block_generatrices_values" className="Block_generatrices_values">
                        {rows}
                       </Section>;
        }
        if (currentNbrGeneratrices === 12) {
            bloc[0] =  <Section key="bloc-genez-12-a" id="block_generatrices_values" className="Block_generatrices_values">
                        {rows}
                       </Section>;

            rows = rows.splice(3, 5); // array muted by method splice in final this is an another array 
            bloc[1] =  <Section key="bloc-genez-12-b" id="block_generatrices_values" className="Block_generatrices_values">
                        {rows}
                       </Section>; 
        } else if (currentNbrGeneratrices === 16) {
            bloc[0] =  <Section key="bloc-genez-16-a" id="block_generatrices_values" className="Block_generatrices_values">
                        {rows}
                    </Section>;

            rows = rows.splice(4, 3);
            bloc[1] =  <Section key="bloc-genez-16-b" id="block_generatrices_values" className="Block_generatrices_values">
                        {rows}
                       </Section>;                                                                                
        } else if (currentNbrGeneratrices === 24) {
            let d = 8; // départure length -3 (last bloc)
            let n = 3; // number of elements (3 for this last bloc)

                for (let i = 0; i < n-1; i++) {
                    bloc[i] = <Section key={`bloc-genez-24-${i}`} id="block_generatrices_values" className="Block_generatrices_values">
                                {rows.splice(d, n)}
                              </Section>;  
                            d-=4; 
                            n=4;
                } 
                bloc = bloc.reverse();
                                                                                    
        }   else if (currentNbrGeneratrices === 32) {
                let d = 12;
                let n = 3;

                    for (let i = 0; i < n; i++) {
                        bloc[i] = <Section key={`bloc-genez-32-${i}`} id="block_generatrices_values" className="Block_generatrices_values">
                                    {rows.splice(d, n)}
                                  </Section>;  
                                d-=4; 
                                n=4;
                    } 
                    bloc = bloc.reverse();                                                                                               
            }
            return bloc;
    }

    const getFormat = (e) => { 
        e.stopPropagation();

            if (e.target.value === "2D") {
                setFormatButtonState(0);
                setFormatElbowState(4);
            } else if (e.target.value === "3D") {
                setFormatButtonState(1);
                setFormatElbowState(3);
            } else if (e.target.value === "5D") {
                setFormatButtonState(2);
                setFormatElbowState(5);
            } 
    }

    const getNorme = (e) => { 
        e.stopPropagation();

        let iter = 1;
        let resultsOfMakeGenes;

        const makeGenesByNorme = (a) => {
            let rows = currentDatasForDiamByNorme.map((elmt) => {
                    
                let differenceLenghtGeneratrice = Number((currentDiameter[a]/elmt) * iter);
                let elmtNew = Number.parseFloat(radiusElbowSlice-(Number(currentDiameter[a]/2))+differenceLenghtGeneratrice).toFixed(2);
    
                iter++;
    
                return <Span key={`gene-${iter-1}`} id="gene" className="Gene" container={`${iter}/${iter}: ${Number(Math.tan(unDegre*15) * elmtNew).toFixed(2)}`} />;
    
            })
            return rows;
        }

        if (currentNormeButton === 0) {
            setCurrentPosState("0px");
            setNormeLabelState("ansi");

            e.target.textContent = currentNormeLabel;

            setNormeButtonState(1);
            setNormeState(6); // diameter index 6 in array norme ansi

            resultsOfMakeGenes = makeGenesByNorme(6);

            setcurrentGeneratriceOne(() => Number(Math.tan(unDegre*15) * (radiusElbowSlice-(currentDiameter[6]/2))).toFixed(1));
            setcurrentGeneratriceLast(() => Number(Math.tan(unDegre*15) * (radiusElbowSlice+(currentDiameter[6]/2))).toFixed(1));

        } else {
            setCurrentPosState("50%");
            setNormeLabelState("iso");

            e.target.textContent = currentNormeLabel;

            setNormeButtonState(0);

            setNormeState(2);

            resultsOfMakeGenes = makeGenesByNorme(2);

            setcurrentGeneratriceOne(() => Number(Math.tan(unDegre*15) * (radiusElbowSlice-(currentDiameter[2]/2))).toFixed(1));
            setcurrentGeneratriceLast(() => Number(Math.tan(unDegre*15) * (radiusElbowSlice+(currentDiameter[2]/2))).toFixed(1));

        }

            if (currentDiameter[currentNorme] === 76.1 || currentDiameter[currentNorme] === 73 || currentDiameter[currentNorme] === 139.7 || currentDiameter[currentNorme] === 141) {

                let r = makeBlocsOfGeneratrices(resultsOfMakeGenes);
                setCurrentGeneratrices(() => r);

            }
        
    }

    const resetOrientationScreen = (e) => {
        e.stopPropagation();

        setAngleScreenText(0);
        e.currentTarget.parentElement.parentElement.children[1].style.transform = "rotate(0deg)";
    }

    const makeRadiusElbow = (angleACurrent, callbackOne, callbackTwo, angleBCurrent) => { // argument angleACurrent OR angleCurrent single elbow
        let radius = Math.tan((unDegre * angleACurrent) / 2) * currentDiameter[currentFormatElbow]; // radius = radius of elbow simple OR radiusA of elbow double
        let radiusB = Math.tan((unDegre * angleBCurrent) / 2) * currentDiameter[currentFormatElbow];

            if (angleBCurrent !== undefined && angleBCurrent !== null) { 
                
                if (currentIntraA !== (((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleADoubleElbow) {
                    setCurrentIntraAState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleADoubleElbow);
                }
                if (currentIntraB !== (((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleBDoubleElbow) {
                    setCurrentIntraBState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleBDoubleElbow);
                }
                if (currentIntraAOriented !== (((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleADoubleElbowOriented) {
                    setCurrentIntraAOrientedState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleADoubleElbowOriented);
                }
                if (currentIntraBOriented !== (((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleBDoubleElbowOriented) {
                    setCurrentIntraBOrientedState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngleBDoubleElbowOriented);
                }

                if (currentExtraA !== ((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleADoubleElbow) {
                    setCurrentExtraAState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleADoubleElbow);
                }
                if (currentExtraB !== ((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleBDoubleElbow) {
                    setCurrentExtraBState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleBDoubleElbow);
                }
                if (currentExtraAOriented !== ((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleADoubleElbowOriented) {
                    setCurrentExtraAOrientedState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleADoubleElbowOriented);
                }
                if (currentExtraBOriented !== ((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleBDoubleElbowOriented) {
                    setCurrentExtraBOrientedState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngleBDoubleElbowOriented);
                }

                (currentButtonLayerState === "elbow-double-oriented" ? callbackTwo() : callbackOne(radius, radiusB));

                return Number.parseFloat(radius+radiusB).toFixed(1) + " mm";
            }
                
                if (currentIntra !== (((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngle) {
                    setCurrentIntraState((((currentDiameter[currentFormatElbow] - (currentDiameter[currentNorme] / 2)) * PiSurDeux) / 90) * currentAngle);
                }
                if (currentExtra !== ((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngle) {
                    setCurrentExtraState(((((currentDiameter[currentNorme] / 2) + currentDiameter[currentFormatElbow]) * PiSurDeux) / 90) * currentAngle);
                }
                
                return radius.toFixed(1) + " mm";
    }

    const makeEntraxeDoubleElbow = (radius, radiusB) => {
        if (currentEntraxe !== (radius+radiusB) * Math.sin(unDegre * currentAngleBDoubleElbow)) {
            let entraxeLessDifferenceTwoElbow = currentDiameter[currentFormatElbow] - ((radiusB * 2) * Math.sin(unDegre * currentAngleBDoubleElbow) - currentDiameter[currentFormatElbow]);

            setEntraxeState((radius+radiusB) * Math.sin(unDegre * currentAngleBDoubleElbow));
            setlengthEqualDoubleElbowState(Number.parseFloat(Math.sqrt(((currentDiameter[currentFormatElbow] * 2) * (currentDiameter[currentFormatElbow] * 2)) - (entraxeLessDifferenceTwoElbow * entraxeLessDifferenceTwoElbow))));
        }
    } 

    const makeEntraxeDoubleElbowOriented = () => {
        let radiusAOriented = Math.tan((unDegre * currentAngleADoubleElbowOriented) / 2) * currentDiameter[currentFormatElbow];
        let radiusBOriented = Math.tan((unDegre * currentAngleBDoubleElbowOriented) / 2) * currentDiameter[currentFormatElbow];
        
        let entraxeDoubleElbowOriented = ((radiusAOriented + radiusBOriented) * (Math.cos(unDegre * (90-currentAngleADoubleElbowOriented))));
        
        let lengthAxeToBase = Math.cos(currentAngleADoubleElbowOriented * unDegre) * (radiusAOriented+radiusBOriented) + radiusAOriented;

        if (currentEntraxeDoubleOriented !== entraxeDoubleElbowOriented) {
            setEntraxeDoubleOrientedState(entraxeDoubleElbowOriented);
            setlengthAxeToBase(lengthAxeToBase);
        }
    }

    const makeGenesAndPaths = (e) => {
        e.stopPropagation();

        let datasForGenesByNorme = [];

        let test = () => {

            for (let l = 1; l <= (currentNbrGeneratrices/2)+1; l++) {

                if (l === 1) {

                    colectPathGeneratrices.push(<Line
                        key = {`gene-line-${l}`}
                            x1 = {0.5} y1 = {10.5} 
                            x2 = {0.5+Math.tan(unDegre*15) * 5} y2 = {10.5}
                            stroke = "white" 
                            strokeWidth = {0.2}
                            strokeLinecap = "round"   
                    />,
                    <Text key = {`gene-text-${l}`} className="Two_label_gene" y={10.5} container={l.toString()} fill={"#48dbfb"} fontSize={"0.6"} fontWeight={600} />)

                } else if (l === (currentNbrGeneratrices/2)+1) {

                    colectPathGeneratrices.push(<Line 
                        key = {`gene-line-${l}`}
                            x1 = {0.5} y1 = {0.5} 
                            x2 = {0.5+Math.tan(unDegre*15) * 15} y2 = {0.5}
                            stroke = "white" 
                            strokeWidth = {0.2}
                            strokeLinecap = "round"    
                    />,
                    <Text key = {`gene-text-${l}`} className="Two_label_gene" y={0.5} container={l.toString()} fill={"#48dbfb"} fontSize={"0.6"} fontWeight={600} />)

                }   else {

                        count++;

                            let differenceLenghtGeneratrice = Number((currentDiameter[currentNorme]/(currentNbrGeneratrices/2))*count); 
                            let gen = Number.parseFloat((radiusElbowSlice-(currentDiameter[currentNorme]/2)+differenceLenghtGeneratrice).toFixed(1));

                            if (l < generatriceAxial) {

                                rowsSpan.push(<Span key={`gene-${l}`} id="gene" value={`${l}/${l}: ${Number((Math.tan(unDegre*15) * gen)).toFixed(1)}`} className="Gene" />);
                                datasForGenesByNorme.push(Number(currentNbrGeneratrices/2));

                            } else if (l === generatriceAxial) {

                                rowsSpan.push(<Span key={`gene-${l}`} id="gene" value={`${l}/${l}: ${Number(Math.tan(unDegre*15) * radiusElbowSlice).toFixed(1)}`} className="Gene" />);
                                datasForGenesByNorme.push(Number(currentNbrGeneratrices/2));

                            } else {

                                rowsSpan.push(<Span key={`gene-${l}`} id="gene" value={`${l}/${l}: ${Number((Math.tan(unDegre*15) * gen)).toFixed(1)}`} className="Gene" />);
                                datasForGenesByNorme.push(Number(currentNbrGeneratrices/2));

                            }

                            colectPathGeneratrices.push(<Line
                                key = {`gene-line-${l}`}
                                    x1 = {0.5} y1 = {0.5+(10/(currentNbrGeneratrices/2))*count} 
                                    x2 = {0.5+Math.tan(unDegre*15) * (15-(0.5+(10/(currentNbrGeneratrices/2))*count))} y2 = {0.5+(10/(currentNbrGeneratrices/2))*count}
                                    stroke = "white" 
                                    strokeWidth = {0.1}
                                    strokeLinecap = "round"   
                            />,
                            <Text  key = {`gene-text-${l}`} className="Two_label_gene" y={10.5-(10/(currentNbrGeneratrices/2))*count} container={l.toString()} fill={"white"} fontSize={"0.6"} fontWeight={600} />);

                        }
            }

            let rows = makeBlocsOfGeneratrices(rowsSpan);

            setCurrentDatasForDiamByNorme(() => datasForGenesByNorme); 
            setCurrentPathGeneratrices(() => colectPathGeneratrices);

            return rows;

        }

            if (displayGeneratrices === false && e.target.className !== "Radius_elbow_slice") {
                setDisplayGeneratrices(true);
            } else {
                setDisplayGeneratrices(false);
                var result = test();
            }

            return result;
    }

    const makeGeneValue = (e, diam) => {
        e.stopPropagation();

            for (let l = 1; l <= (currentNbrGeneratrices/2)+1; l++) {

                if (l !== 1 && l !== (currentNbrGeneratrices/2)+1) {

                    count++;
                    
                        let differenceLenghtGeneratrice = Number((diam/(currentNbrGeneratrices/2))*count); 
                        let gen = Number.parseFloat((e.target.value-(diam/2)+differenceLenghtGeneratrice).toFixed(1));

                        if (l < generatriceAxial) {

                            rowsSpan.push(<Span key={`gene-${l}`} id="gene" className="Gene" container={`${l}/${l}: ${Number((Math.tan(unDegre*15) * gen)).toFixed(1)}`} />);

                        } else if (l === generatriceAxial) {

                            rowsSpan.push(<Span key={`gene-${l}`} id="gene" className="Gene" container={`${l}/${l}: ${Number(Math.tan(unDegre*15) * e.target.value).toFixed(1)}`} />);

                        } else {

                            rowsSpan.push(<Span key={`gene-${l}`} id="gene" className="Gene" container={`${l}/${l}: ${Number((Math.tan(unDegre*15) * gen)).toFixed(1)}`} />);

                        }

                }

            }

            let result = makeBlocsOfGeneratrices(rowsSpan);
            setCurrentGeneratrices(() => result);
    }

    const makeGeneValueOnDiam = (e, diam) => {
        e.stopPropagation();

        let datasForGenesByNorme = [];

            for (let l = 1; l <= (currentNbrGeneratrices/2)+1; l++) {

                if (l !== 1 && l !== (currentNbrGeneratrices/2)+1) {

                    count++;
                    
                        let differenceLenghtGeneratrice = Number((diam/(currentNbrGeneratrices/2))*count); 
                        let gen = Number.parseFloat((radiusElbowSlice-(diam/2)+differenceLenghtGeneratrice).toFixed(1));

                        if (l < generatriceAxial) {

                            rowsSpan.push(<Span key={`gene-${l}`} id="gene" className="Gene" container={`${l}/${l}: ${Number((Math.tan(unDegre*15) * gen)).toFixed(1)}`} />);
                            datasForGenesByNorme.push(Number(currentNbrGeneratrices/2));

                        } else if (l === generatriceAxial) {

                            rowsSpan.push(<Span key={`gene-${l}`} id="gene" className="Gene" container={`${l}/${l}: ${Number(Math.tan(unDegre*15) * radiusElbowSlice).toFixed(1)}`} />);
                            datasForGenesByNorme.push(Number(currentNbrGeneratrices/2));

                        } else {

                            rowsSpan.push(<Span key={`gene-${l}`} id="gene" className="Gene" container={`${l}/${l}: ${Number((Math.tan(unDegre*15) * gen)).toFixed(1)}`} />);
                            datasForGenesByNorme.push(Number(currentNbrGeneratrices/2));

                        }

                }

            }

            setCurrentDatasForDiamByNorme(() => datasForGenesByNorme);

            let result = makeBlocsOfGeneratrices(rowsSpan);
            setCurrentGeneratrices(() => result);

    }    
    ////////////////////////// FUNCTIONS ///////////////////////////////
    ////////////////////////////////////////////////////////////////////


    return (
        <Section style={{ position: "relative" }} values={props.values} id={thisId} className={thisClass}>

            {(showModal == true ?
                <Section style={{ zIndex: 10000, position: "absolute", width: "86%", minHeight: "545px", maxHeight: "566px", left: "7%", marginTop: "15px", backgroundColor: "black", borderRadius: "35px", textAlign: "center", backgroundImage:`url(${image})`, backgroundRepeat:"no-repeat", backgroundSize: "cover", backgroundPosition: "bottom center", opacity: 1 }}>
                    <p style={{ color: "white", fontWeight: "bold" }}>{"Version d'essai."}</p>
                    <p style={{ color: "white", fontWeight: "bold", margin: "0 5px" }}>{"Voir les Screenshots pour cette section"}</p>
                    <Section className="hideModalTrialVersion" style={{ margin: "20px", padding: "20px 10px", color: "white", fontWeight: "bold", borderRadius: "5px", backgroundColor: "#0000FF" }} display={() => {makeModalTrialVersion(); setShowModal(() => false)} }>Revenir</Section>
                    <Img                            
                        id={"padlock-close"} 
                        style={{ zIndex: 10, height: "15%", marginTop: "15%", alignSelf: "center" }}
                        src="assets/padlock-close.png"  
                        alt="padlock-close" 
                    />
                </Section> : 
            false)}


            {(showModalDiameters == true ?
                <Section style={{ zIndex: 5000, position: "absolute", width: "80%", left: "10%", bottom: "12.5%", backgroundColor: "white", borderRadius: "10px", fontSize: "11px", textAlign: "center" }}>
                    <p style={{ color: "black", fontWeight: "600" }}>{"Version d'éssai"}<br/>{"(DN15, DN125, DN1200 disponible)"}</p>
                    <p style={{ color: "black", fontWeight: "600" }}>{"L'application comprend 32 diamètres"}<br/>{`ISO/ANSI | DN${currentDiameterOnly[0]}`}</p>
                </Section> : 
            false)}

            <Section style={{ display: "flex", marginTop: "12.5%", padding: "0 10%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }} id="app-setting-smart" value="app-setting-smart">
                <Section style={{ flex: "7.5%", justifyContent: "center", alignItems: "center" }} key={"utility"} id="utility-smart" type="button" value="utility"
                    children={
                        <div onClick={ () => {makeModalTrialVersion(); setShowModal(() => true)} } style={{ flex: "50%", position: "relative", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>
                            <Img                            
                                className={"showModalTrialVersion"} 
                                style={{ zIndex: 10, width: "23px", height: "23px", alignSelf: "center" }}
                                src="assets/utility.png"  
                                alt="utility" 
                            />
                        </div>
                    }
                />

                <Section style={{ position: "relative", flex: "25%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Section style={{ width: "25%", textAlign: "center", justifyContent: "center", alignItems: "center", backgroundColor: "#555555", borderRadius: "15% 0 0 15%" }} type="button"
                        children={
                            <div onClick={ () => {makeModalTrialVersion(); setShowModal(() => true)} }>
                                <Img 
                                    className={"showModalTrialVersion"}
                                    style={{ height: "0.75em" }}
                                    src="assets/text-decrease.png"  
                                    alt="text-decrease" 
                                />
                            </div>
                        }
                    />

                    <Section style={{ width: "25%", textAlign: "center", justifyContent: "center", alignItems: "center", backgroundColor: "#555555", borderRadius: "0 15% 15% 0" }} type="button"
                        children={
                            <div onClick={ () => {makeModalTrialVersion(); setShowModal(() => true)} }>
                                <Img 
                                    className={"showModalTrialVersion"}
                                    style={{ height: "0.75em" }}
                                    src="assets/text-increase.png"  
                                    alt="text-increase" 
                                />
                            </div>
                        }
                    />
                </Section>

                <Section style={{ height: "2vw", width: "32.5%", fontSize: "10px", color: "white", fontSize: "9px", fontWeight: "700", textAlign: "left" }}><Span container="unité: mm" /></Section>

                <Section style={{ flex: "15%" }}> 
                    <div onClick={ () => {makeModalTrialVersion(); setShowModal(() => true)} }>
                        <Img 
                            className={"showModalTrialVersion"}
                            style={{ width: "23px", height: "23px" }}
                            src="assets/languages.png"  
                            alt="languages" 
                        />
                    </div>
                </Section>

                <Section style={{ display: "flex", width: "5%", justifyContent: "flex-end" }}> 
                    <div onClick={ () => {makeModalTrialVersion(); setShowModal(() => true)} }>
                        <Img 
                            className={"showModalTrialVersion"}
                            style={{ width: "23px", height: "23px" }}
                            src="assets/setting.png"  
                            alt="settings" 
                        />
                    </div>
                </Section>
            </Section>

            <Section key={"buttons-screens"} value={"elbow"} className="App_buttons_smart">
                    
                <Button id="elbow" type="button" value={"elbow"} display={dispatchFunctions}   
                    children={
                        <Img 
                            className="Elbow"
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

            </Section>

            
            <Section id="app-values" className="App_values">
                { 
                    (
                        currentButtonLayerState !== "elbow-slice" ?
                            [<Section key={"bloc-diameter"} id="diameters" style={{ width: "20%" }} className="Values_elbow">
                                <Span key="title-diameters" className="Title_diameter" container="Ø" />
                                <Span style={{ fontSize: "11px" }} key="diameter-mm" className="Diameter" container={currentDiameter[currentNorme] + " mm"} />
                                <Span style={{ fontSize: "11px" }}  key="diameter-dn-inch" className="Diameter" container={`DN ${currentDiameter[0]}`} />
                            </Section>,

                            <Section key={"bloc-values-elbows-standard"} id="values-elbow" className="Values_principal">
                                <Span className="Title_values_principal" container="Extrado/Intrado" />
                                    {
                                        (
                                            currentButtonLayerState === "elbow-double" ?
                                                <Section style={{ width: "max-content", display: "flex", flexDirection: "column" }}>
                                                    <Span style={{ fontSize: "11px", color: "white" }} key={"elbow-double-intra-a"} container = {`A ${parseFloat(currentExtraA).toFixed(2)} - ${parseFloat(currentIntraA).toFixed(1)}`} />
                                                    <Span style={{ fontSize: "11px", color: "white" }} key={"elbow-double-intra-b"} container = {`B ${parseFloat(currentExtraB).toFixed(2)} - ${parseFloat(currentIntraB).toFixed(1)}`} />
                                                </Section>
                                            :
                                            (currentButtonLayerState === "elbow-double-oriented" ?
                                                <Section style={{ width: "max-content", display: "flex", flexDirection: "column" }}>
                                                    <Span key={"elbow-double-o-intra-a"} style={{ fontSize: "11px", color: "white" }} container = {`A ${parseFloat(currentExtraAOriented).toFixed(1)} - ${parseFloat(currentIntraAOriented).toFixed(1)}`} />
                                                    <Span key={"elbow-double-o-intra-b"} style={{ fontSize: "11px", color: "white" }} container = {`B ${parseFloat(currentExtraBOriented).toFixed(1)} - ${parseFloat(currentIntraBOriented).toFixed(1)}`} />
                                                </Section>
                                            :
                                                [<Span style={{ fontSize: "11px", color: "white" }} key={"elbow-intra"} container = {`${parseFloat(currentExtra).toFixed(1)} mm`} />,
                                                <Span style={{ fontSize: "11px", color: "white" }} key={"elbow-extra"} container = {`${parseFloat(currentIntra).toFixed(1)} mm`} />])
                                        )
                                    }
                            </Section>]

                        :
                        
                        <Section id="app-values" className="App_values-elbow-slices">
                                <Section key={"bloc-diameter-in-elbow-slice"} style={{ display: "flex", minWidth: "64px", maxWidth: "64px", flexDirection: "column" }} id="diameters">
                                    <Span key="title-diameters-in-elbow-slice" className="Title_diameter" container="Ø" />
                                    <Span key="diameter-mm-in-elbow-slice" style={{ fontSize: "11px" }} className="Diameter" container={currentDiameter[currentNorme] + " mm"} />
                                    <Span key="diameter-dn-inch-in-elbow-slice" style={{ fontSize: "11px" }} className="Diameter" container={`DN ${currentDiameter[0]}`} />
                                </Section>
                                
                                <Button key={"button-genes-in-slice"} className="Generatrices" container="Generatrices" display={(e) => {var f = makeGenesAndPaths(e); setCurrentGeneratrices(f);}}>
                                    {`${(displayGeneratrices === false && currentButtonLayerState === "elbow-slice" ? currentNbrGeneratrices : "✔︎")}`}
                                </Button>
                                
                                <Section key={"section-norme-in-slice"} className="Normes_in_elbow_slices">
                                    <span key={"span-norme-in-slice"} className="Iso">ansi</span>
                                        {(currentDiameter[currentNorme] === 76.1 || currentDiameter[currentNorme] === 139.7 || currentDiameter[currentNorme] === 73 || currentDiameter[currentNorme] === 141 ? 
                                            <Button key={"button-norme-in-slice"} thisLeft={currentPos} colorButton={"forestgreen"} name="iso-ansi" id="iso-ansi" className="Iso_Ansi" type="radio" value="iso-ansi" display={getNorme}>{currentNormeLabel}</Button> 
                                        : false)}
                                    <span className="Ansi">iso</span>
                                </Section>

                                <Input className="Radius_elbow_slice" type="number" min={100} max={10000} step={1}
                                    displayChange = {
                                        (e) =>  {

                                                    let innerRadiusElbowSlice = Number(e.target.value);
                                                    
                                                    setRadiusElbowSlice(() => innerRadiusElbowSlice);
                                                    setcurrentGeneratriceOne(() => Number(Math.tan(unDegre*15) * (innerRadiusElbowSlice-(currentDiameter[currentNorme]/2))).toFixed(1));
                                                    setcurrentGeneratriceLast(() => Number(Math.tan(unDegre*15) * (innerRadiusElbowSlice+(currentDiameter[currentNorme]/2))).toFixed(1));
                                                    
                                                    makeGeneValue(e, currentDiameter[currentNorme]);
                                                    
                                                }
                                    } 
                                    defaultValue={radiusElbowSlice} 
                                />
                        </Section>
                    )
                } 
                
                
                { 
                    (
                        currentButtonLayerState !== "elbow-slice" ? 

                            <Section id="values-principal" className="Values_principal">
                                <Span className="Title_values_principal" container="Angle/Rayon" />

                                <Span style={{ fontSize: "11px", color: "rgb(47, 255, 40)" }}
                                    container = 
                                    {
                                        (currentButtonLayerState !== "elbow-double-oriented" ?
                                        (currentButtonLayerState !== "elbow-slice" ? 
                                        (currentButtonLayerState !== "elbow-double" ? currentAngle + "°" 
                                        : "A " + currentAngleADoubleElbow + "° - B " + currentAngleBDoubleElbow + "°") 
                                        : 90 + "°")
                                        : "A " + currentAngleADoubleElbowOriented + "° - B " + currentAngleBDoubleElbowOriented + "°")
                                    }
                                />

                                <Span style={{ fontSize: "11px", color: "rgb(47, 255, 40)" }}
                                    container = 
                                    {
                                        (currentButtonLayerState !== "elbow-double-oriented" ?
                                        (currentButtonLayerState !== "elbow-slice" ? 
                                        (currentButtonLayerState !== "elbow-double" ? makeRadiusElbow(currentAngle, makeEntraxeDoubleElbow, makeEntraxeDoubleElbowOriented) 
                                        : makeRadiusElbow(currentAngleADoubleElbow, makeEntraxeDoubleElbow, makeEntraxeDoubleElbowOriented, currentAngleBDoubleElbow)) 
                                        : "rayon")
                                        : makeRadiusElbow(currentAngleADoubleElbowOriented, makeEntraxeDoubleElbow, makeEntraxeDoubleElbowOriented, currentAngleBDoubleElbowOriented))
                                    }
                                />
                                
                            </Section>

                        : false
                    )

                }
                
            </Section>

            <Section className="Elbow_svg">   
                    {
                        ((currentButtonLayerState === "elbow-double" || currentButtonLayerState === "elbow-double-oriented") ?           
                            <Aside style={{ flexDirection: "row", width: "100%", marginTop: "5%" }} children={(currentButtonLayerState === "elbow-double-oriented" || currentButtonLayerState === "elbow-double" ? 
                                [<Section style={{ display: "flex", width: "60%", flexDirection: "row", justifyContent: "flex-start" }}>
                                    <Span key={"entraxe"} style={{ width: "50%" }} id="entraxe" container={(currentButtonLayerState !== "elbow-double-oriented" || currentButtonLayerState === "elbow-double" ? currentEntraxe.toFixed(1) : currentEntraxeDoubleOriented.toFixed(1))}></Span>
                                    <Span key={"lengthEqualDoubleElbow"} style={{ width: "50%", color: "#48dbfb" }} id="lengthEqualDoubleElbow" container={(currentButtonLayerState !== "elbow-double-oriented" || currentButtonLayerState === "elbow-double" ? lengthEqualDoubleElbow.toFixed(1) : currentLengthAxeToBaseDoubleOriented.toFixed(1))}></Span>
                                </Section>,

                                <Section key={"reset-orientation-screen"} style={{ flexDirection: "row", justifyContent: "row-reverse" }} className="Reset_orientation_screen"
                                    children={
                                        <div onClick={ () => {makeModalTrialVersion(); setShowModal(() => true)} }>
                                            <Img 
                                                className={"showModalTrialVersion"}
                                                style={{ height: "21px" }}
                                                src="assets/padlock-open.png"  
                                                alt="elbow-double-oriented-steel"
                                            />
                                        </div>
                                    }
                                />]
                                : false)}>
                            </Aside>
                        : (currentButtonLayerState === "elbow-slice" && displayGeneratrices !== true ? 

                            sectionTwoG 
                        
                        : false))
                    }
                    
                    <Svgelbows pathGeneratrices={currentPathGeneratrices} choiceGeneratrices={blocChoiceGeneratrices} nbrGeneratrices={currentNbrGeneratrices} currentElbowLayer={currentButtonLayerState} generatrices={displayGeneratrices} id={"elbows-svg"} className={"Elbows_svg"} screensElbows={currentButtonLayerState} angleScreen={currentAngleScreen}>
                        
                        {elbowsLayerState}

                        {
                            (currentButtonLayerState !== "elbow-double-oriented" ?
                            (currentButtonLayerState !== "elbow-slice" ? 
                            (currentButtonLayerState !== "elbow-double" ? 

                                [
                                    tabAngles.map(angle => angle), 
                                    <line key="line-a" x1 = "10.5" y1="15.5" x2="10.5" y2={15.5 - (Math.tan((unDegre * currentAngle) / 2) * 10)} strokeWidth="0.1" stroke="rgb(47, 255, 40)" />, 
                                    <line key="line-b" x1 = "10.5" y1={15.5 - (Math.tan((unDegre * currentAngle) / 2) * 10)} x2={0.5 + Math.cos(unDegre*currentAngle) * 10} y2={15.5 - Math.sin(unDegre*currentAngle) * 10}  strokeWidth="0.1" stroke="rgb(47, 255, 40)" />, 
                                    <circle key="point-a" cx = "10.5" cy={15.5 - (Math.tan((unDegre * currentAngle) / 2) * 10)} r="0.15"  fill="rgb(47, 255, 40)" />,
                                    <circle key="point-b" cx = "10.5" cy="15.5" r="0.15"  fill="rgb(47, 255, 40)" />,
                                    <circle key="point-c" cx = {0.5 + Math.cos(unDegre*currentAngle) * 10} cy={15.5 - Math.sin(unDegre*currentAngle) * 10} r="0.15"  fill="rgb(47, 255, 40)" />
                                ]

                            :   [
                                    <line key="line-doubl-e-a" x1 = {15} y1 = {12.5} x2 = {1 - (Math.cos(unDegre*currentAngleBDoubleElbow) * -9)} y2 = {12.5} stroke = {(currentAngleADoubleElbow === currentAngleBDoubleElbow ? "white" : "#454545")} strokeWidth = {0.2} strokeLinecap = "square" transform = {`rotate(${currentAngleBDoubleElbow-90}, ${8}, ${12.5})`} />,
                                    
                                    <line key="line-doubl-e-b" x1 = {8 + (Math.tan((unDegre * currentAngleADoubleElbow) / 2) * 4.5)} y1="8" x2={8 + Math.cos(unDegre * (90-currentAngleADoubleElbow)) * 4.5} y2={12.5 - Math.sin(unDegre * (90-currentAngleADoubleElbow)) * 4.5} strokeWidth="0.1" stroke="gray" />,
                                    <line key="line-doubl-e-c" x1 = {8 + (Math.tan((unDegre * currentAngleBDoubleElbow) / 2) * -4.5)} y1="8" x2={8 + Math.cos(unDegre * (90-(currentAngleBDoubleElbow))) * -4.5} y2={3.5 - Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * -4.5} strokeWidth="0.1" stroke="gray" />,

                                    tabAnglesADoubleElbow.map(angle => angle), tabAnglesBDoubleElbow.map(angle => angle), 
                                    <Path key = {"courbe-ext-a"+currentAngleADoubleElbow} id={"courbe-ext-a"+currentAngleADoubleElbow} className={"Courbe_ext_a"+currentAngleADoubleElbow} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 8 5.5 A 7 7, 0, 0, 1, ${8 + (Math.cos(unDegre * (90-currentAngleADoubleElbow)) * 7)} ${12.5 - (Math.sin(unDegre * (90-currentAngleADoubleElbow)) * 7)}`} />, 
                                    <Path key = {"courbe-int-a"+currentAngleADoubleElbow} id={"courbe-int-a"+currentAngleADoubleElbow} className={"Courbe_int_a"+currentAngleADoubleElbow} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 8 10.5 A 2 2, 0, 0, 1, ${8 + (Math.cos(unDegre * (90-currentAngleADoubleElbow)) * 2)} ${12.5 - (Math.sin(unDegre * (90-currentAngleADoubleElbow)) * 2)}`} />,
    
                                    [
                                        <line
                                            key="line-blue-d-e"
                                                x1 = {(8 + Math.cos(unDegre * (90-currentAngleBDoubleElbow)) * -7)} y1 = {3.5 + (Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * 7)} // haut du coude B elbow double
                                                x2 = {(8 + Math.cos(unDegre * (90-currentAngleBDoubleElbow)) * -7)} y2 = {3.5 + (Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * 7) + Number.parseFloat((Math.sqrt((9 * 9) - (coteAdj * coteAdj))))} // 9 * 9 = (diamètre + rayon intraA + rayon intraB)                                   
                                                stroke = "#48dbfb" // mesure bleu double coudes angles égaux
                                                strokeWidth = {0.1}
                                                strokeLinecap = "square" 
                                                transform = {`rotate(${currentAngleBDoubleElbow-90}, ${(8 + Math.cos(unDegre * (90-currentAngleBDoubleElbow)) * -7)}, ${3.5 + (Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * 7)})`}
                                        />,
                                        <circle key="point-doubl-e-a" cx = {(8 + Math.cos(unDegre * (90-currentAngleBDoubleElbow)) * -7)} cy={3.5 + (Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * 7) + Number.parseFloat((Math.sqrt((9 * 9) - (coteAdj * coteAdj))))} 
                                            r="0.15"  
                                            fill="rgb(47, 255, 40)"
                                            transform = {`rotate(${currentAngleBDoubleElbow-90}, ${(8 + Math.cos(unDegre * (90-currentAngleBDoubleElbow)) * -7)}, ${3.5 + (Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * 7)})`}
                                        />,
                                        <circle key="line-doubl-e-b" cx = {(8 + Math.cos(unDegre * (90-currentAngleBDoubleElbow)) * -7)} cy = {3.5 - (Math.sin(unDegre * (90-currentAngleBDoubleElbow)) * -7)} 
                                            r="0.15"  
                                            fill="rgb(47, 255, 40)" 
                                        /> 
                                    ],

                                    <line
                                        key="line-yellow-doubl-e-a"
                                            x1 = {8 + Math.tan(unDegre * (currentAngleADoubleElbow/2)) * 4.5} y1={8} 
                                            x2 = {(8 + Math.tan(unDegre * (currentAngleADoubleElbow/2)) * 4.5) - ((lengthRadiusA+lengthRadiusB) * Math.sin(unDegre * currentAngleBDoubleElbow))} y2 = {8}
                                            stroke="#fdff83" // entraxe jaune
                                            strokeWidth={0.1}
                                            strokeLinecap="square"   
                                            transform = {`rotate(${currentAngleBDoubleElbow-90}, ${8 + Math.tan(unDegre * (currentAngleADoubleElbow/2)) * 4.5}, ${8})`}
                                    />,

                                    <line 
                                        key="line-radius-doubl-e"
                                            x1 = {8 + Math.tan(unDegre * (currentAngleBDoubleElbow/2)) * -4.5} y1 = {8} 
                                            x2 = {8 + Math.tan(unDegre * (currentAngleBDoubleElbow/2)) * -4.5} y2 = {8 + ((lengthRadiusA+lengthRadiusB) * Math.cos(unDegre * currentAngleBDoubleElbow))}
                                            stroke="red" 
                                            strokeWidth={0.075}
                                            strokeLinecap="square"
                                            strokeDasharray="0.35px, 0.2px, 0.15px, 0.2px"
                                            transform = {`rotate(${currentAngleBDoubleElbow-90}, ${8 + Math.tan(unDegre * (currentAngleBDoubleElbow/2)) * -4.5}, ${8})`}
                                    />,
                                    
                                    <line key="line-radius-a-d-e" x1="8" y1="8" x2={8 + lengthRadiusA} y2="8" strokeWidth="0.1" stroke="rgb(47, 255, 40)" />,  
                                    <line key="line-radius-b-d-e" x1="8" y1="8" x2={8 - lengthRadiusB} y2="8" strokeWidth="0.1" stroke="rgb(47, 255, 40)" />, 

                                    <circle key="point-a-d-e" cx = {(8 + Math.tan(unDegre * (currentAngleADoubleElbow/2)) * 4.5) - ((lengthRadiusA+lengthRadiusB) * Math.sin(unDegre * currentAngleBDoubleElbow))} 
                                        cy={8} 
                                        r="0.15"  
                                        fill="rgb(47, 255, 40)"
                                        transform = {`rotate(${currentAngleBDoubleElbow-90}, ${8 + Math.tan(unDegre * (currentAngleADoubleElbow/2)) * 4.5}, ${8})`}
                                    />, // intersection entraxe (jaune) et flèche

                                    <circle key="point-b-d-e" cx = {8 + Math.tan(unDegre * (currentAngleADoubleElbow/2) ) * 4.5} 
                                        cy="8" 
                                        r="0.15"  
                                        fill="rgb(47, 255, 40)" 
                                    />, // intersection entraxe (jaune) rayon (vert)
                                    
                                    <circle key="point-cc-d-e" cx = {8 + Math.tan(unDegre * (currentAngleBDoubleElbow/2)) * -4.5} 
                                        cy="8" 
                                        r="0.15"  
                                        fill="rgb(47, 255, 40)" 
                                    />, // intersection flèche rayon (vert)

                                ])                             

                            : false) 

                            :   [
                                    <line key="line-doubl-e-o-a" x1={8 + Math.tan((currentAngleADoubleElbowOriented/2) * unDegre) * 4.5} y1="8" x2={8 + Math.cos(unDegre * (90-currentAngleADoubleElbowOriented)) * 4.5} y2={12.5 - Math.sin(unDegre * (90-currentAngleADoubleElbowOriented)) * 4.5} strokeWidth="0.1" stroke="gray" />, 
                                    
                                    <line key="line-doubl-e-o-b" x1={12.5} y1={12.5} x2={toLengthRadiusElbowsOriented} y2={12.5} stroke="#454545" strokeWidth={0.2} strokeLinecap="square" 
                                        transform={`rotate(${currentAngleADoubleElbowOriented-90}, ${8}, ${12.5})`} 
                                    />,
                                    
                                    tabAnglesADoubleElbow.map(angle => angle), tabAnglesBDoubleElbowOriented.map(angle => angle), 
                                    <Path key={"courbe-ext-a"+currentAngleADoubleElbowOriented} id={"courbe-ext-a"+currentAngleADoubleElbowOriented} className={"Courbe_ext_a"+currentAngleADoubleElbowOriented} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 8 5.5 A 7 7, 0, 0, 1, ${8 + Math.cos(unDegre * (90-currentAngleADoubleElbowOriented)) * 7} ${12.5 - Math.sin(unDegre * (90-currentAngleADoubleElbowOriented)) * 7}`} />, 
                                    <Path key={"courbe-int-a"+currentAngleADoubleElbowOriented} id={"courbe-int-a"+currentAngleADoubleElbowOriented} className={"Courbe_int_a"+currentAngleADoubleElbowOriented} opacity="1" strokeWidth="0.2" stroke="white" strokeLinecap="square" d={`M 8 10.5 A 2 2, 0, 0, 1, ${8 + Math.cos(unDegre * (90-currentAngleADoubleElbowOriented)) * 2} ${12.5 - Math.sin(unDegre * (90-currentAngleADoubleElbowOriented)) * 2}`} />,
                                    
                                    <line
                                        key="line-blue-doubl-e-o"
                                            x1 = {8 - ((4.5/90) * (currentAngleBDoubleElbowOriented))} y1 = {8} 
                                            x2 = {8 - ((4.5/90) * (currentAngleBDoubleElbowOriented))} y2 = {8 + ((lengthRadiusAOriented+((4.5/90) * (currentAngleBDoubleElbowOriented))) * Math.cos(unDegre * currentAngleADoubleElbowOriented) + lengthRadiusAOriented)}
                                            stroke = "#48dbfb" // mesure bleu
                                            strokeWidth = {0.1}
                                            strokeLinecap = "square"
                                            transform = {`rotate(${currentAngleADoubleElbowOriented-90}, ${8 - ((4.5/90) * (currentAngleBDoubleElbowOriented))}, ${8})`}
                                    />,

                                    <line
                                        key="line-yellow-doubl-e-o"
                                            x1 = {(8 + Math.tan(unDegre * (currentAngleADoubleElbowOriented/2)) * 4.5)} y1={8} 
                                            x2 = {(8 + Math.tan(unDegre * (currentAngleADoubleElbowOriented/2)) * 4.5) - ((lengthRadiusAOriented+((4.5/90) * (currentAngleBDoubleElbowOriented))) * (Math.sin(unDegre * currentAngleADoubleElbowOriented)))} y2 = {8}
                                            stroke = "#fdff83" // entraxe jaune
                                            strokeWidth = {0.1}
                                            strokeLinecap = "square"   
                                            transform = {`rotate(${currentAngleADoubleElbowOriented-90}, ${8 + Math.tan(unDegre * (currentAngleADoubleElbowOriented/2)) * 4.5}, ${8})`}
                                    />,

                                    <line key="line-radius-a-d-e-o" x1={8} y1={8} x2={8 + Math.tan(unDegre * (currentAngleADoubleElbowOriented/2)) * 4.5} y2="8" strokeWidth="0.1" stroke="rgb(47, 255, 40)" />, 
                                    <line key="line-radius-b-d-e-o" x1={8} y1={8} x2={3.5 + ((4.5/90) * (90-currentAngleBDoubleElbowOriented))} y2={8} strokeWidth="0.1" stroke="rgb(47, 255, 40)" />,
                                    
                                    <circle key="point-a-d-e-o" cx={3.5 + ((4.5/90) * (90-currentAngleBDoubleElbowOriented))} cy="8" r="0.15"  fill="rgb(47, 255, 40)" /> ,
                                    <circle key="point-b-d-e-o" cx={8 + Math.tan(unDegre * (currentAngleADoubleElbowOriented/2)) * 4.5} cy="8" r="0.15"  fill="rgb(47, 255, 40)" />,
                                    
                                    <circle key="point-c-d-e-o" cx = {8 - ((4.5/90) * (currentAngleBDoubleElbowOriented))} 
                                        cy={8 + ((lengthRadiusAOriented+((4.5/90) * (currentAngleBDoubleElbowOriented))) * Math.cos(unDegre * currentAngleADoubleElbowOriented))} 
                                        r="0.15"  
                                        fill="rgb(47, 255, 40)"
                                        transform = {`rotate(${currentAngleADoubleElbowOriented-90}, ${8 - ((4.5/90) * (currentAngleBDoubleElbowOriented))}, ${8})`}
                                    />,

                                    <circle key="point-d-d-e-o" cx = {toLengthRadiusElbowsOriented} 
                                        cy = {12.5} 
                                        r = "0.15"  
                                        fill = "rgb(47, 255, 40)" 
                                        transform = {`rotate(${currentAngleADoubleElbowOriented-90}, ${8}, ${12.5})`} // intersection flèche bleu-bas et base gris clair
                                    />,

                                ])
                        }
                    </Svgelbows>
            </Section>

            <Section style={{ height: "125px" }}>

            { 
                (
                    currentButtonLayerState !== "elbow-slice" ? 

                        <Section key="section-formats-normes" id="app-format-norme" className="App-format-norme">
                            <Section key="section-formats" id="formats" className="Formats">
                                <Button id="2D" className={"showModalTrialVersion"} display={ () => {makeModalTrialVersion(); setShowModal(() => true)} } key="button-2-d" thisColorButton={"#525252"} className="Format" type="button">2D</Button>
                                <Button id="3d" thisColorButton={"forestgreen"} className="Format" type="button" value="3D" display={getFormat}>3D</Button>
                                <Button id="5D" className={"showModalTrialVersion"} display={ () => {makeModalTrialVersion(); setShowModal(() => true)} } key="button-5-d" thisColorButton={"#525252"} className="Format" type="button">5D</Button>
                            </Section>

                            <Section key="section-normes" className="Normes">
                                <span key="span-norme-iso" className="Iso">ansi</span>
                                    {(currentDiameter[currentNorme] === 76.1 || currentDiameter[currentNorme] === 139.7 || currentDiameter[currentNorme] === 73 || currentDiameter[currentNorme] === 141 ? 
                                        <Button key="button-normes" thisLeft={currentPos} thisColorButton={"forestgreen"} name="iso-ansi" id="iso-ansi" className="Iso_Ansi" type="radio" value="iso-ansi" display={getNorme}>{currentNormeLabel}</Button> 
                                    : false)}
                                <span key="span-norme-ansi" className="Ansi">iso</span>
                            </Section>
                        </Section>

                    : 

                        <Section key="current-genes" id="generatrices_values" className="Generatrices_values">
                            { displayGeneratrices !== true ? currentGeneratrices : false }
                        </Section>

                )
            }
            </Section>

            <Section id="app-range" className="App-range">
                <Input className="range" type="range" min={0} max={datasPipe.length-1} step={1} 
                    displayChange = {
                                        (e) => {

                                            if (datasPipe[e.target.value][0] == 15 || datasPipe[e.target.value][0] == 125 || datasPipe[e.target.value][0] == 1200) { 
                                                    setShowModalDiameters(() => false);
                                                    setNormeButtonState(0);
                                                    setDiameter(datasPipe[e.target.value]);
                                                    setCurrentPosState("50%");
                                                    setNormeLabelState("iso");

                                                    makeGeneValueOnDiam(e, datasPipe[e.target.value][2], radiusElbowSlice);

                                                    setcurrentGeneratriceOne(() => Number(Math.tan(unDegre*15) * (radiusElbowSlice-(datasPipe[e.target.value][2]/2))).toFixed(1));
                                                    setcurrentGeneratriceLast(() => Number(Math.tan(unDegre*15) * (radiusElbowSlice+(datasPipe[e.target.value][2]/2))).toFixed(1));
                                                    
                                            
                                            } else {
                                                setShowModalDiameters(() => true);
                                                setDiameterOnly(datasPipe[e.target.value]);
                                            }
                                        }
                                    } 
                    defaultValue={0} 
                />
            </Section>

        </Section>        
    );

}

export default Sectionsmart;