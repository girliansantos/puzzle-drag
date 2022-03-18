import {StyleSheet, View, Text} from 'react-native'
import { itemHeight, itemWidth } from '../util/params';

const Item = (props) => {
    return(
        <View style = {styles.item}>
            <Text style={styles.texto}>{props.name}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item:{
        textAlign:'center',
        height: itemWidth,
        width: itemHeight,
        maxHeight: itemHeight,
        borderWidth: 5,
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderBottomColor: '#333',
        borderRightColor: '#333'
    },
    texto:{
        paddingLeft: itemWidth/4,
        paddingTop: itemHeight/12,
        fontWeight:'bold',
        fontSize: 32,
    }
});

export default Item;