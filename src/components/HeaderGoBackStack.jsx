import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const HeaderGoBackStack = () => {

    const navigation = useNavigation(); // Hook to access navigation object

    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.button]}  onPress={() => navigation.goBack()}>
             <FontAwesome name="backward" size={17} style={{color:'white'}} />
           
            </TouchableOpacity>
            <Text style={{ color: 'black', fontSize: wp(6), fontWeight: '600', width: wp(55),  }}>
            </Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:10
    },
    button: {
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 11,
        padding: 7,
        alignItems: 'center',
        width: '10%'
    },
})
export default HeaderGoBackStack