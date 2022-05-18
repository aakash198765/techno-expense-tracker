import React from "react";
import {View, StyleSheet} from 'react-native';
import {} from 'react-native-paper';

import Content from "./content";
import data from '../Dashboard/expense.json'

const Expense  = (props) => {

    return(
            <Content data={data} />
    )
}

const styles = StyleSheet.create({

})

export default Expense;