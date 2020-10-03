import React from 'react'
import ReactDOM from 'react-dom'

import FirstComponent from './components/FirstComponent'
//import GoodMorning from './components/GoodMorning'
import { GoodMorning, Bonjuor } from './components/Multipos'
import Saudacao from './components/Saudacao'

ReactDOM.render( 
    <div>
        <Saudacao type = "Bonjuor" name = "Thay"></Saudacao>
    </div>,
    document.getElementById('root') // jogou o componente detro do html de id root em public/index.html
)