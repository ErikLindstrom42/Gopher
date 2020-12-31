import React, { useState, createContext, useContext } from "react";


export const FoxContext = createContext();

export function FoxProvider(props) {
    const apiUrl = "/api/fox";


    const [foxes, setFoxes] = useState([]);

    const refreshFoxes = () =>

        fetch(apiUrl, {
            method: "GET",
            headers: {

            }
        }).then(resp => resp.json())
            .then(setFoxes);


    return (
        <FoxContext.Provider value={{ foxes, refreshFoxes }}>
            {props.children}
        </FoxContext.Provider>
    );
}