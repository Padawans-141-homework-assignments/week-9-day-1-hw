import { useState } from 'react'

import React from 'react'

export default function GameClassPicker() {

    let classes = ['Monk', 'Rogue', 'Mage', 'Archer', 'Ranger', 'Berserker', 'Sorcerer',
    'Cleric', 'Bard', 'Thief', 'Assassin', 'Alchemist', 'Fighter', 'Wizard', 'Ninja']

    const[userIdx, setUserIdx] = useState(0);

    const prevClass = () => {
        if(userIdx === 0){
        }
        else {
            setUserIdx(userIdx - 1)
        }
    }

    const nextClass = () => {
        if(userIdx === classes.length -1) {
        }
        else {
            setUserIdx(userIdx + 1)
        }
    }


  return (
    <>
    <div id='game-div'>
        <div>
            <h3>Choose your character class!</h3>
        </div>
        <div>
            <button id='class-btn' onClick={prevClass}>Previous Class</button>
            {classes[userIdx]}
            <button id='class-btn' onClick={nextClass}>Previous Class</button>
        </div>
    </div>
    <br/>
    </>
  )
}
