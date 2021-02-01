import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colours from "../../colours";

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Image
                style={headerStyles.icon}
                source={require("../../../assets/icon.png")}
            />
            <Text style={headerStyles.headerTitle}>Feli URL Shortener</Text>
        </View>
    );
};

const headerStyles = StyleSheet.create({
    icon: {
        height: 48,
        width: 48,
    },
    header: {
        minHeight: 128,
        borderBottomWidth: 2,
        borderBottomColor: colours.feli.DEFAULT,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Header;
