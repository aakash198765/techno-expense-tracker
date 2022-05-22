import React from 'react';
import {View,} from 'react-native-paper'

import {Card, Title, Paragraph} from 'react-native-paper';

const TechnoCustomCard  = (props) => {
    return (
        <Card style={props.cardStyle}>
            {
                props.cardTitle || props.cardSubtitle ? 
                <Card.Title style={props.cardTitleStyle} title={props.cardTitle} subtitle={props.cardSubtitle} />
                : 
                <></>
            }
            <Card.Content style={props.contentStyle}>
                <Title style={props.contentTitleStyle}>{props.contentTitle}</Title>
                {props.contentSubtitle ? <Title style={props.contentBodyStyle}>{props.contentSubtitle}</Title> : <></>}
                <Paragraph style={props.contentBodyStyle}>{props.contentBody}</Paragraph>
            </Card.Content>
        </Card>
    )
}

export default TechnoCustomCard;