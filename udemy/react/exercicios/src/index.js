import React from 'react'
import ReactDOM from 'react-dom'

import FirstComponent from './components/FirstComponent'
import GoodMorning from './components/GoodMorning'
//import { GoodMorning, Bonjuor } from './components/Multipos'
import Saudacao from './components/Saudacao'

ReactDOM.render( 
    <div>
        <Saudacao type = "n serve mais" name = "Thay">
            <GoodMorning saudacao="Bonjuor" time="109" ></GoodMorning>
            <GoodMorning saudacao="Bonsoir" time="109" ></GoodMorning>
        </Saudacao>
    </div>,
    document.getElementById('root') // jogou o componente detro do html de id root em public/index.html
)