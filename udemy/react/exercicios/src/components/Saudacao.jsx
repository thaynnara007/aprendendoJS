import React, { Fragment, Component } from 'react'

export default class Saudacao extends Component {

    state = {
        type: this.props.type,
        name: this.props.name
    }

    setType(event) {
        this.setState({
            type: event.target.value
        })
    } 

    setName(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        const { type, name } = this.state

        return (
            <Fragment>
                <h1>{type} {name}</h1>
                <hr></hr>
                <input 
                    type = "text" placeholder = "Type..." value = {type} 
                    onChange = { ( event ) => this.setType(event) }>
                </input>
                <input 
                    type = "text" placeholder = "Name..." value = {name} 
                    onChange = { ( event ) => this.setName(event) }>        
                </input>

            </Fragment>
        )
    }
}