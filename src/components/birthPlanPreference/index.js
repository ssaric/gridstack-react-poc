import React from "react";
import {Card, Badge} from "react-bootstrap";
import './style.css';

const BirthPlanPreference = ({title, imageSrc, tags, preferenceId}) => {
    return (
        <Card
            draggable={true}
            data-title={title}
            data-imagesrc={imageSrc}
            data-tags={tags}
            unselectable="on"
            onDragStart={e => {
                e.dataTransfer.setData("text/plain", "");
                e.dataTransfer.setData("preference-id", preferenceId);
            }}
            className="grid-stack-item preference-card" data-gs-w="2" data-gs-h="1">
            <Card.Img className="preference-card__img" variant="left" src={imageSrc}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {tags.map(t => <Badge>{t}</Badge>)}
            </Card.Body>
        </Card>
    );
};


export default BirthPlanPreference;