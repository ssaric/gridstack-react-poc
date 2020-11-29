import React from "react";
import '../birthPlanPreference/style.css';
import {mockPreferences} from "../../mockData";
import BirthPlanPreference from "../birthPlanPreference";


const AvailableBirthPlanPreferences = props => {
    return (
        <div className="birth-plan-cards">
            {mockPreferences.map((gi, i) =>
                <BirthPlanPreference
                    key={i}
                    {...gi}
                    draggable={true}
                    unselectable="on"
                    onDragStart={e => {
                        e.dataTransfer.setData("text/plain", "");
                        e.dataTransfer.setData("preference-id", i);
                    }}
                />)}
        </div>
    )
}
export default AvailableBirthPlanPreferences;