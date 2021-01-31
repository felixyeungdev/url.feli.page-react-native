import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
    return (
        <View style={styles.root}>
            <StatusBar style="auto" />
            <Header />
            <Main></Main>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginTop: 24,
    },
});

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
                <Button title="Convert" onPress={() => {}} color="orange" />
                <Button title="Copy" onPress={() => {}} color="orange" />
            </View>
        </View>
    );
};

const mainStyles = StyleSheet.create({
    root: {
        padding: 16,
    },
    input: {
        backgroundColor: "#fff2cc",
        minHeight: 48,
        padding: 8,
        margin: 4,
        borderRadius: 4,
        borderBottomColor: "orange",
        borderBottomWidth: 1.5,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#fff2cc",
    },
});

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Image
                style={headerStyles.icon}
                source={require("./assets/icon.png")}
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
        borderBottomColor: "orange",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

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
        borderTopColor: "orange",
    },
    link: {
        fontWeight: "bold",
        color: "orange",
    },
});

export default App;
