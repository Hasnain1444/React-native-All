

import { StyleSheet , View , Text, useWindowDimensions}  from "react-native";
export default function App(){
const windowheight = useWindowDimensions().height;
const windowwidth = useWindowDimensions().width;
 
  return(
    <View style={styles.container}>
       <View style={[styles.box, 
       {
        width : windowwidth > 500? "100%" : "90%",
        height : windowheight >600 ? "60%" : "90%"
       } ]}>
        <Text style={{fontSize : windowwidth > 500 ? 50 : 24}}>
      Hey buddy!
        </Text>
       </View>
    </View>
  )

}
const styles = StyleSheet.create(
  {
    container :{
      flex :1 , 
      backgroundColor : "plum",
      alignItems : "center",
      justifyContent : "center"
    }
    , 
    box :{
      justifyContent : "center",
      alignItems : "center",
      backgroundColor :"orange"
    }
  }
)