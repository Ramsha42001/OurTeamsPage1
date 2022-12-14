import React from "react";
import Details from "./Details";
import CoordiCss from "./coordinator.module.css";

function QuarksDivisonHead(props)
{
    return (
        <div>
             <h1 className={CoordiCss.coordinatorsHeading}>Quarks Divison Head</h1>
            <div className={CoordiCss.coordinators}>
            <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img1}`} alt="quarksHead1"/>
                </div>
                
                <Details
             name={props.name1}
            />
                </div>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img2}`} alt="quarksHead2"/>
                </div>
                
                <Details
             name={props.name2}
            />
                </div>
                <div className={CoordiCss.imageDiv}>
                    <div className={CoordiCss.images}>
                <img  src={`/images/${props.img3}`} alt="quarksHead3"/>
                </div>
                
                <Details
             name={props.name3}
            />
                </div>
        </div>
        </div>
    )
}

export default QuarksDivisonHead;