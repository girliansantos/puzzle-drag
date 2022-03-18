import {View, StyleSheet} from 'react-native'
import { quadroHeight, quadroWidth } from '../util/params';
import Item from './item';

const itens = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

const Quadro = () => {
    return(
        <View style = {styles.quadro}>
            <View style = {styles.row}>
                {itens.map(i => <Item name={i}></Item>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    quadro:{
        alignItems: 'flex-start',
        height: quadroHeight,
        width: quadroWidth,
        maxWidth: quadroWidth,
        maxHeight: quadroHeight,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 2,
        flex:1
    },
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap'
  }
});

export default Quadro;