import { useContext, useState } from "react";
import { Text, View } from "react-native";
import PreferenceContext from "../context/PreferenceContext";
import Tags from "./Tags";
function BadgerPreferencesScreen(props) {
    const [prefs,setPrefs]=useContext(PreferenceContext);
    
    //console.log(prefs);
    return (
        <>
        {
            prefs ? (
                Object.keys(prefs).map((tags) => (
                    <Tags
                        key={tags}
                        tag={tags}
                    />
                ))
            ) : (
                <text>Loading</text>
            )
        }
        </>
    )
}

export default BadgerPreferencesScreen;