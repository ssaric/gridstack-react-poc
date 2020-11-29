import React, {useEffect, useState} from "react";
import {Responsive, WidthProvider} from "react-grid-layout";
import './style.css';
import {mockPreferences} from "../../mockData";
import BirthPlanPreference from "../birthPlanPreference";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function generateLayout(items) {
    return items.map(gi => ({
        x: gi.x,
        y: gi.y,
        w: gi.width,
        h: gi.height,
        i: `${gi.x}-${gi.y}`,
    }));
}

const BirthPlanPreferencesGrid = props => {
    const [layout, setLayout] = useState({});
    const [birthPreferences, setBirthPreferences] = useState([]);
    const onDrop = (layout, item, e) => {
        const preferenceId = e.dataTransfer.getData('preference-id');
        const preferenceData = mockPreferences[preferenceId];
        setBirthPreferences(prevState => [
            ...prevState,
            {
                "x": item.x,
                "y": item.y,
                "width": 5,
                "height": 4,
                ...preferenceData,
            }
        ])
    }

    useEffect(() => {
        setLayout({
            lg: generateLayout(birthPreferences),
            md: generateLayout(birthPreferences),
            sm: generateLayout(birthPreferences),
            xs: generateLayout(birthPreferences),
            xxs: generateLayout(birthPreferences),
        });
    }, [setLayout, birthPreferences])

    return (<ResponsiveReactGridLayout
        className="layout"
        style={{height: '100%', overflow: 'auto',}}
        layouts={layout}
        onDrop={onDrop}
        rowHeight={30}
        cols={{lg: 12, md: 12, sm: 12, xs: 12, xxs: 12}}
        isDroppable={true}
        isResizable={false}>
        {birthPreferences.map((gi, i) => {
            const {x, y} = gi;
            return (<BirthPlanPreference key={`${x}-${y}`} {...gi}  />);
        })}
    </ResponsiveReactGridLayout>)
}
export default BirthPlanPreferencesGrid;