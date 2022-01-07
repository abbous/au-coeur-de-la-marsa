import React, {useState} from 'react';
import { 
    View,  
    Text,
    Image,
    StyleSheet,
    Modal,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


const ProductModal = (props) => {

    return (
        <View style={{flex: 1}}>
         
            <View style={[styles.container]}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={props.closeModal}>
                        <Icon name="keyboard-arrow-left" size={30}   />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={[styles.imgContainer,]}>
                    <Image  source={{uri:`data:image/png;base64,${props.item.image}`}} style={styles.imageDimensions} />
                </View>
                <View style={styles.detailsContainer}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                       
                        <Text style={styles.priceText}>{props.item.price} Points</Text>
                    </View>
                    <Text style={{ fontWeight: 'bold'}} >Description:</Text>

                    <Text style={styles.descriptionText}>{props.item.description}</Text>
                </View>

                {/* Footer */}
                <View style={styles.footerContainer}>
                 
                    <TouchableOpacity style={[styles.btnContainer, {flex: 1}]}>
                        <Text style={styles.btnText}>Acheter</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    header: {
        height: 70,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerTitle: {
        fontWeight: 'bold',
     },
    badgeContainer: {
        top: -4, 
        right: -4,
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', 
     },
    badgeText: {
     },
    imageDimensions:{
        borderRadius:3.5,
        width: 320,
         height: 320,
        resizeMode: 'contain',
     },
    imgContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailsContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#ecf0f1'
     },
    sizesContainer: {
        flexDirection: 'row'
    },
    sizeCircleContainer: {
        width: 30, 
        height: 30,
        marginRight: 10,
        borderRadius: 30,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
   
    },
    priceText: {
        fontWeight: 'bold',
        left:250
     },
    descriptionText: {
        marginTop: 20,
        fontWeight: '900',
   
    },
    footerContainer: {
        padding: 20,
        flexDirection: 'row',
     },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    btnText: {
        fontWeight: 'bold',
     }
});

export default ProductModal;