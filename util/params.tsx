import {Dimensions} from 'react-native'

const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height

// parâmetros para o quadro principal da tela
const quadroWidth = screenWidth * 0.82
const quadroHeight = screenHeight * 0.5685

// parâmetros para os itens do quadro
const itemWidth = quadroWidth / 4
const itemHeight = quadroHeight / 5

export {quadroWidth, quadroHeight, itemWidth, itemHeight}