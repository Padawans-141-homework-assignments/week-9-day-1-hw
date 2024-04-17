import { useState } from 'react'

import React from 'react'


export default function GameAlliancePicker() {

    let alliances = ['Draenei', 'Dwarf', 'Gnome', 'Human', 'Night Elf', 'Worgen', 'Void Elf',
'Lightforged', 'Dark Iron', 'Kul Tiran', 'Mechagnome', 'Pandaren', 'Dracthyr', 'Blood Elf', 
'Goblin']

    const[userAlliance, setUserAlliance] = useState(0);

    const prevAlliance = () => {
        if(userAlliance === 0){
        }
        else {
            setUserAlliance(userAlliance - 1)
        }
    }

    const nextAlliance = () => {
        if(userAlliance === alliances.length -1) {
        }
        else {
            setUserAlliance(userAlliance + 1)
        }
    }


  return (
    <>
    <div id='game-div'>
        <div>
            <h3>Choose your character alliance!</h3>
        </div>
        <div>
            <button id='class-btn' onClick={prevAlliance}>Previous Alliance</button>
            {alliances[userAlliance]}
            <button id='class-btn' onClick={nextAlliance}>Previous Alliance</button>
        </div>
    </div>
    <br/>
    </>
  )
}
