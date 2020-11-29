import React from "react";
import {Card, Badge} from "react-bootstrap";
import cn from "classnames";
import './style.css';

const BirthPlanPreference = ({title, imageSrc, tags, preferenceId, className, ...rest}) => {
    return (
        <Card
            className={cn(className, 'preference-card')} {...rest}>
            <Card.Img className="preference-card__img" variant="left" src={imageSrc}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                {tags.map(t => <Badge>{t}</Badge>)}
            </Card.Body>
        </Card>
    );
};


export default BirthPlanPreference;