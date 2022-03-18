import {StyleSheet, View, Text} from 'react-native'

const Item = () => {
    return(
        <View style = {styles.item}>
            <Text>1</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        textAlign:'center',
        height: 40,
        width: 40,
        borderWidth: 5,
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderBottomColor: '#333',
        borderRightColor: '#333'
    }
});

export default Item;