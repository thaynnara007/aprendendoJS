import React, { Fragment, Component } from 'react'
import GoodMorning from './GoodMorning'

function childrenWithProps (props) {
    return (
        React.Children.map( props.children, child => {
            return React.cloneElement( child, {
                ...props, ...child.props
                })
            })
    )
}

export default class Saudacao extends Component {

    constructor(props){
        super(props)

        this.state = {
            type: this.props.type,
            name: this.props.name
        }

        this.setType = this.setType.bind(this)
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
                <ul>
                    { childrenWithProps( this.props ) }
                </ul>
                <GoodMorning {...this.state} time="10" ></GoodMorning> {/** passa todos os atributos de props do pai para o filho*/}
                <hr></hr>
                <input 
                    type = "text" placeholder = "Type..." value = {type} 
                    onChange = {this.setType}>
                </input>
                <input 
                    type = "text" placeholder = "Name..." value = {name} 
                    onChange = { ( event ) => this.setName(event) }>    
                </input>
            </Fragment>
        )
    }
}