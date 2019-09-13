import React from 'react'
import styled from 'styled-components';


const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2%;
    flex-wrap: wrap;
    color: #FCEEE1;
    background-color: #443e3e;
    width: 25%;
    margin: 1%;
`
export default function InfoCard(props) {
    return (
        <InfoDiv>
            <h1>{props.name}</h1>
            <h3>Basic Info</h3>
            <h3>Birth Year: {props.birthYear}</h3>
            <h3>Height: {props.height}cm</h3>
            <h3>Mass: {props.mass}kg</h3>
        </InfoDiv>
    )
}
