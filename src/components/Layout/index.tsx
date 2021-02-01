import Footer from "../Footer";
import Header from "../Header";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <View style={styles.root}>
            <StatusBar style="auto" />
            <Header />
            {children}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        marginTop: 24,
    },
});

export default Layout;
