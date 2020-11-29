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
                    preferenceId={i}
                    {...gi}
                />)}
        </div>
    )
}
export default AvailableBirthPlanPreferences;