import { useEffect, useState } from "react";
import { Text, View, Image,StyleSheet, ScrollView } from "react-native";
import React, { } from "react";
import BadgerNewsItemCard from "./BadgerNewsItemCard";
function BadgerNewsScreen(props) {

    const [fullArticle,setFullArticle]=useState([]);

    useEffect(()=>{
        fetch("https://cs571.org/api/s24/hw8/articles",{
            headers:{
                "X-CS571-ID": 'bid_f797898160368bd8134003297afb0e1e9caa655bdd7e50fd71dda9b6872f0f4a'
            }
        }).then(res=>res.json()).then(json=>{
            setFullArticle(json);
        })

    },[])

    return <View>
        <Text></Text>
        <ScrollView>
            {fullArticle.map((article) => (
                <BadgerNewsItemCard
                    key={article.fullArticleId}
                    image={article.img}
                    title={article.title}
                    fullArticleId={article.fullArticleId}
                />
            ))}
        </ScrollView>
    </View>
}

export default BadgerNewsScreen;