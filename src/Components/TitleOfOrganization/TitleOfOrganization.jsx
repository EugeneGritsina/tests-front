import React from 'react';

import './TitleOfOrganization.css';

function TitleOfOrganization(props) {
    let {text} = props;
    if (!text) {
        text = 'БЕЛОРУССКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ';
    }
    return (
        <div className="title__organization">{text}</div>
    )
}

export default TitleOfOrganization;