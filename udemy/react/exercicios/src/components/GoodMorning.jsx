import React, { Fragment } from 'react'

export default (props) => {
    return (
        <Fragment>
            <h1> {props.saudacao} {props.name}!</h1>
            <h2>Lets learning this stuff in {props.time} hours</h2>
        </Fragment>
    )
}
