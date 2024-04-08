import { useState,useContext,useEffect } from "react";
import { Text, View } from "react-native";
import { Switch } from 'react-native';
import PreferenceContext from "../context/PreferenceContext";
function Tags(props) {
    const [ifpressed,setIfPressed]=useState(true);
    const [prefs,setPrefs]=useContext(PreferenceContext);

    useEffect(() => {
        const newPrefs = { ...prefs };
        newPrefs[props.tag]=ifpressed;
        setPrefs(newPrefs);
    }, [ifpressed]);

    console.log(prefs);
    return <View style={{alignItems: "center"}}>
        <Text>{ifpressed? `Currently showing ${props.tag} Articles.` : `Currently not showing ${props.tag} Articles.`}</Text>
        <Switch value={ifpressed} onValueChange={() => setIfPressed(pre => !pre)}/>
    </View>
}

export default Tags;