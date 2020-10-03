import React, { Fragment } from 'react'

export default (props) => {
    return (
        <Fragment>
            <h1>Good morning {props.nome}!</h1>
            <h2>Lets learning this stuff in {props.time} hours</h2>
        </Fragment>
    )
}
