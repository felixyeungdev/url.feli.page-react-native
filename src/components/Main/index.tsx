import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import colours from "../../colours";

const Main = () => {
    return (
        <View style={mainStyles.root}>
            <View>
                <Text>Original</Text>
                <TextInput style={mainStyles.input} />
            </View>
            <View>
                <Text>Shortened</Text>
                <TextInput style={mainStyles.input} />
            </View>
            <View style={mainStyles.buttons}>
                <Button
                    title="Convert"
                    onPress={() => {}}
                    color={colours.feli.DEFAULT}
                />
                <Button
                    title="Copy"
                    onPress={() => {}}
                    color={colours.feli.DEFAULT}
                />
            </View>
        </View>
    );
};

const mainStyles = StyleSheet.create({
    root: {
        padding: 16,
    },
    input: {
        backgroundColor: colours.feli.lighter,
        minHeight: 48,
        padding: 8,
        margin: 4,
        borderRadius: 4,
        borderBottomColor: colours.feli.DEFAULT,
        borderBottomWidth: 1.5,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
});

export default Main;
