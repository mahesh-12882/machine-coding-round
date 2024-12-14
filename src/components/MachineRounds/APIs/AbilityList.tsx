import React, { useEffect, useState } from "react";
import './Styles/abilityStyles.css';

type AbilitiesType = {
    name: string,
    url: string,
    id?: string
}



// interface IHandleChnage {
//     handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;

// }
export const AbilityList = () => {
    let [abilities, setAbilities] = useState<AbilitiesType[]>([]);
    let [slots, setSlots] = useState([]);
    let [inputFieldValue, setInputFieldValue] = useState<string>("");

    async function getAbilities() {
        let response = await fetch("https://pokeapi.co/api/v2/ability/");
        let results = await response.json();
        setAbilities(results.results);
        //  console.log(results.results);
    }

    useEffect(() => {
        getAbilities();
    }, [])

    const handleChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
        var apiurl: string = event.currentTarget.value;
        // var id:string = event.target;
        // console.log(safeSearchTypeValue);
        let response = await fetch(`${apiurl}`);
        let allSlot = await response.json();
        console.log(allSlot.pokemon)
        setSlots(allSlot.pokemon);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setInputFieldValue(event.target.value);
    }

    const handleButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.type, event.type)
    }

    return (
        <div className="dropdown-container">
            <select onChange={handleChange}  >
                <option value="">Select ability</option>
                {
                    abilities.map((ability) => {
                        return (<option value={`${ability.url}`} id={ability.name}>{ability.name}</option>)
                    })

                }
            </select>
            <ul>
                {
                    slots.slice(0, 3).map((availableSlot: any) => (
                        <li>{availableSlot.pokemon.name} {availableSlot.slot}</li>
                    ))
                }
            </ul>
            <input type="text" onChange={handleInputChange} value={inputFieldValue} />
            <button type="button" onClick={handleButton}>Button</button>

        </div>
    )
}