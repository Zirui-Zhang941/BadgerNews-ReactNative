import React, { useState, useEffect } from "react";
import { Text, View, Animated } from "react-native";

const ArticleDetailsScreen = (props) => {
  const [articleDetails, setArticleDetails] = useState(null);
  const [ifloading, setIfLoading]=useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));
  console.log(props.route);
  useEffect(() => {
    fetch(`https://cs571.org/api/s24/hw8/article?id=${props.route.params.fullArticleId}`,{
        headers:{
            "X-CS571-ID": 'bid_f797898160368bd8134003297afb0e1e9caa655bdd7e50fd71dda9b6872f0f4a'
        }
    }).then((response) => response.json())
      .then((data) => {
        setArticleDetails(data);
        setIfLoading(false);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      })
      .catch((error) => console.error("Error fetching article details:", error));
}, []);
    console.log(articleDetails);
    return (
    <View>
      {ifloading?(
        <Text>Loading...</Text>
      ):(
        <Animated.View style={{opacity: fadeAnim}}>
            <Text>test</Text>
            <Text>{articleDetails.author}</Text>
            <Text>{articleDetails.posted}</Text>
            <Text>{articleDetails.body}</Text>
        </Animated.View>
      )}
    </View>
    );
};

export default ArticleDetailsScreen;