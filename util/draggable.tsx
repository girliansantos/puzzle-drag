import React, { useRef, useState } from "react";
import { Animated, PanResponder, Pressable, StyleSheet, TouchableWithoutFeedbackBase, View } from "react-native";

const DraggableItem = new Animated.ValueXY()

const onPressingSpring = () => {
    Animated.spring(DraggableItem, {
    toValue: {x: 200, y: 200}, speed: 10, bounciness: 20,
    useNativeDriver: true
}).start()
}

const Draggable = () => {
    return(
        <Pressable onPress={onPressingSpring}>
            <Animated.View style = {styles.item}/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'yellow',
        height: 50,
        width: 50,
        marginBottom: 20
    }
})

export default Draggable