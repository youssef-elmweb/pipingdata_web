import React from 'react';
import Section from '.././components/Section';
import Link from '.././components/Link';

const EditableBar = (props) => {

    return ( 
        <Section style={{ display: "inline-flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Link key={`delete_${props.i}`} id={props.idUserDelete || props.idAdminDelete} className={"Edit_icone"} style={{ width: "20px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"  }} href="#">
                <svg style={{ margin: "0 7.5px" }} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            </Link>

            <Link key={`edit_${props.i}`} id={props.idUserEdit || props.idAdminEdit} className={"Edit_icone"} style={{ width: "20px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"  }} href="#">
                <svg style={{ margin: "0 7.5px" }} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                    <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/>
                </svg>
            </Link>

            <Link key={`update_${props.i}`} id={props.idUserUpdate || props.idAdminUpdate} className={"Edit_icone"} style={{ width: "20px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"  }} href="#">
                <svg style={{ margin: "0 7.5px" }} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                </svg>
            </Link>

            <Link key={`close_${props.i}`} id={props.idUserClose || props.idAdminClose} className={"Edit_icone"} style={{ width: "20px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start"  }} href="#">
                <svg style={{ margin: "0 7.5px" }} xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20">
                    <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z"/>
                </svg>
            </Link>
        </Section>       
    );

}

export default EditableBar;
            
