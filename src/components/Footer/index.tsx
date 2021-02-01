import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colours from "../../colours";

const Footer = () => {
    return (
        <View style={footerStyles.root}>
            <Text>
                Developed by <Text style={footerStyles.link}>Felix</Text>
            </Text>
            <Text>
                Source code on <Text style={footerStyles.link}>GitHub</Text>
            </Text>
        </View>
    );
};

const footerStyles = StyleSheet.create({
    root: {
        padding: 16,
        borderTopWidth: 2,
        borderTopColor: colours.feli.DEFAULT,
    },
    link: {
        fontWeight: "bold",
        color: colours.feli.DEFAULT,
    },
});

export default Footer;
