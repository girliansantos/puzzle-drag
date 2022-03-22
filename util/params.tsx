import {Dimensions} from 'react-native'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

// parâmetros para o quadro principal da tela
const quadroWidth = screenWidth * 0.856
const quadroHeight = screenHeight * 0.587

// parâmetros para os itens do quadro
const itemWidth = screenWidth / 5
const itemHeight = screenHeight / 9

export {quadroWidth, quadroHeight, itemWidth, itemHeight}