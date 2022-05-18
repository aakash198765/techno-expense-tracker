import React from "react";
import {
    View, 
    StyleSheet, 
    Text
} from 'react-native';

import Content from "./content";
import data from './expense.json'

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Content data={data} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        
    }
})

export default Dashboard;