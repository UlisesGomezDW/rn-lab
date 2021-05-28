import React from "react"
import { SafeAreaView, StatusBar, Text, View } from "react-native"

function Screen(props) {
    const { style, children } = props
    return <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF", ...style }}>{children}</SafeAreaView>
}

Screen.defaultProps = {
    style: {},
    children: null,
}

export default Screen
