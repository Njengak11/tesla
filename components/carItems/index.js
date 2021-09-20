import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../styledButton'
import styles from './styles';

const CarItem = (props) =>{

const { name, tagLine,tagLineCTA, image} = props.car;

    return(
        <View style={styles.carContainer}>
        <ImageBackground source={image}
        style={styles.image}
        >
          </ImageBackground>
     <View style={styles.titles}>
       <Text style={styles.model}> {name} </Text>
       <Text style={styles.subtitle}> {tagLine}
       {' '}  
       <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
       </Text>
       
     </View>
     <View style= {styles.buttonContainer}>
     <StyledButton type='primary' 
     content={'Custom Order'} 
     onPress={() => {
       console.warn( 'custom order was pressed');
     }}/>

<StyledButton type='secondary' 
     content={'existing Order'} 
     onPress={() => {
       console.warn( 'pressed');
     }}/>
     </View>
     
     </View>
    );
};

export default CarItem;