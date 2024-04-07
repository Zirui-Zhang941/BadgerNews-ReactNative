import React from "react";
import { Text, View, Image,StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


const BadgerNewsItemCard = (props) => {

    const navigation = useNavigation();
    function handlePress() {
        navigation.push('DetailedNews', props);
    }
    const fullArticleId=props.fullArticleId;
    return (
    <Pressable onPress={handlePress}>
        <View style={styles.card}>
        <Image
            style={{
                width:300,
                height:300
            }}
            source={{
            
                uri: `https://raw.githubusercontent.com/CS571-S24/hw8-api-static-content/main/${props.image}`
            }}
        />
        <Text>{props.title}</Text>
    </View>
    </Pressable>
    
    );
};

const styles = StyleSheet.create({
    card: {
      padding: 20,
      borderRadius: 12,
      backgroundColor: "#f5f5f5",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
});
export default BadgerNewsItemCard;