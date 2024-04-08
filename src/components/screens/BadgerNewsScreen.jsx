import { useContext, useEffect, useState } from "react";
import { Text, View, Image,StyleSheet, ScrollView } from "react-native";
import React, { } from "react";
import BadgerNewsItemCard from "./BadgerNewsItemCard";
import PreferenceContext from "../context/PreferenceContext";

function BadgerNewsScreen(props) {
    const [fullArticle,setFullArticle]=useState([]);
    const [prefs, setPrefs] = useContext(PreferenceContext);
    const [filteredArticles,setFilteredArticles]=useState(fullArticle);
    useEffect(() => {
        fetch("https://cs571.org/api/s24/hw8/articles", {
            headers: {
                "X-CS571-ID": 'bid_f797898160368bd8134003297afb0e1e9caa655bdd7e50fd71dda9b6872f0f4a'
            }
        })
        .then(res => res.json())
        .then(json => {
            setFullArticle(json);
            
            const newPrefs = { ...prefs };
            json.forEach(element => {
                element.tags.forEach(tag => {
                    newPrefs[tag]=true;
                });
            });
            setPrefs(newPrefs);
        });
    }, []);
    //console.log(prefs);
    useEffect(() => {
        const newFilteredArticles = fullArticle.filter(article => {
            return article.tags.every(tag => prefs[tag]);
        });
        setFilteredArticles(newFilteredArticles);
    }, [fullArticle, prefs]);

    return <View>
        <Text></Text>
        <ScrollView>
                {filteredArticles.length==0?(
                    <Text>No articles to be displayed</Text>
                ):(
                    filteredArticles.map((article) => (
                        <BadgerNewsItemCard
                            key={article.fullArticleId}
                            image={article.img}
                            title={article.title}
                            fullArticleId={article.fullArticleId}
                        />
                    ))
                )}
        </ScrollView>

    </View>
    
}

export default BadgerNewsScreen;