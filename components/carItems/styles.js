import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height:'100%',
    
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center'
      },
      model:{
        fontSize:50,
        fontWeight:'600'
      },
      price:{
        fontSize:15,
        color:'#5c5e62'
      },
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      }
});

export default styles;