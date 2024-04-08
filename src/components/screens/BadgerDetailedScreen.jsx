import React, { useState, useEffect } from "react";
import { Text, View, Animated,Pressable,Linking,ScrollView } from "react-native";

const ArticleDetailsScreen = (props) => {
  const [articleDetails, setArticleDetails] = useState(null);
  const [ifloading, setIfLoading]=useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));

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

const openArticleLink = () => {
  Linking.openURL(articleDetails.url);
};

    return (
    <View>
      {ifloading?(
        <Text>Loading...</Text>
      ):(
        <Animated.View style={{opacity: fadeAnim}}>
          <ScrollView>
            <Text>test</Text>
            <Text>{articleDetails.author}</Text>
            <Text>{articleDetails.posted}</Text>
            <Text>{articleDetails.body}</Text>
            {articleDetails.url && (
            <Pressable onPress={openArticleLink}>
              <Text style={{ color: 'blue'}}>Read full article here</Text>
            </Pressable>
            )}
          </ScrollView>
        </Animated.View>
      )}
    </View>
    );
};

export default ArticleDetailsScreen;