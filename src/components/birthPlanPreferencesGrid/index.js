import React, {useEffect, useState} from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import './style.css';
import {mockPlan} from "../../mockData";
import {mockPreferences} from "../../mockData";
const ResponsiveReactGridLayout = WidthProvider(Responsive);
const gridItems = mockPlan.layoutItems;

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
    const [birthPreferences, setBirthPreferences] = useState( gridItems);
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
                "imageId": 5,
                "itemText": preferenceData.title
            }
        ])
    }

    useEffect(() => {
        setLayout({sm: generateLayout(birthPreferences)});
    }, [setLayout, birthPreferences])

    return (<ResponsiveReactGridLayout
        className="layout"
        layouts={layout}
        onDrop={onDrop}
        rowHeight={30}
        cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 2 }}
        isDroppable={true}
        isResizable={false}>
        {birthPreferences.map((gi, i) => {
            const {itemText, x, y} = gi;
            return (<div key={`${x}-${y}`} className="card">
                {itemText}
            </div>);
        })}
    </ResponsiveReactGridLayout>)
}
export default BirthPlanPreferencesGrid;