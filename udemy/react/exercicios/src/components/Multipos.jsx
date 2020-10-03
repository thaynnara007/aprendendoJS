import React, { Fragment } from 'react'

export const GoodMorning = (props) => {
    return (
        <Fragment>
            <h1>Good morning {props.nome}!</h1>
            <h2>Lets learning this stuff in {props.time} hours</h2>
        </Fragment>
    )
}

export const Bonjuor = (props) => <h1>Bonjuor {props.nome}!</h1>

// ou tb:
export default {
    GoodMorning,
    Bonjuor
}
