import React, { useState } from "react";
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Paragraph, Avatar, Menu, Caption, Divider, Title, Appbar, Button, TouchableRipple, List } from 'react-native-paper';

import TechnoCustomCard from "../../techno-ui-components/Card";
import TechnoPieChart from "../../techno-ui-components/Chart/pie-chart"
import TechnoBottomSheet from "../../techno-ui-components/BottomSheet";
import TechnoDatePicker from "../../techno-ui-components/DatePicker";

import ExpenseList from "./expenses-list";
import schema from './schema.json';
import tableData from './expense.json';
import Utils from "../../Utils";

import Detail from "../DetailPage/index";


const Content  = (props) => {
    const { data } = props;
    

    const fetchExpenseForSelectedDate = (date) => {
        if(!date){
            return ''
        }
        console.log(new Date(date).getTime())
        // API CALL TO FETCH THE EXPENSE FOR THE SELECTED DATE AND UPDATE THE UI
    }

    return (
        <View style={{flexDirection: 'column', height: '100%', paddingTop: '2%', paddingHorizontal: '2%'}}>
            {/* Filter */}
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', height: '10%', backgroundColor: '', margin: 0, paddingHorizontal: 5 }} >
                   <TechnoDatePicker style={{justifyContent: 'center', alignItems: 'center', borderRadius: 20}} onSelectingDate={(date) =>fetchExpenseForSelectedDate(date)}  />
            </View>

             {/* pie chart */}
             <View style={{flexDirection: 'column', height: '70%', backgroundColor: ''}} >
                <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: "", marginVertical: 10}}>
                  <Title style={{fontSize: 22, fontFamily: 'montserrat', fontWeight: 'bold'}}>Daily Expenses Track</Title>
                  <Caption style={{fontSize: 16, fontFamily: 'montserrat', marginVertical: 5}}>{'05-05-2022'}</Caption>
                </View>

                <View style={{backgroundColor: ''}}>
                    {/* <TechnoPieChart data={data}  /> */}
                </View>
            </View>

             {/* Daily Expenses */}
             <View style={{flexDirection: 'column', height: '20%', paddingHorizontal: 10, backgroundColor: ''}} >
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'Montserrat', color: '#111111'}}>Expenses</Text>
                    <TechnoBottomSheet primaryText="All Expenses" primaryTextStyle={{ padding: 0, margin: 0, textDecorationLine: 'underline' }} renderContent={<ExpenseList schema={schema} data={tableData}  />} />
                </View>

                <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '100%', marginTop: 10  }}>
                    <ScrollView horizontal={true} style={{ width: '100%', paddingBottom: 20 }}>
                    {
                    data.map(expense => {
                        return Object.keys(expense).map(propertiesGroup => {
                                return  (
                                    <Detail
                                        expense={expense}
                                        renderTouchableComponent = {
                                            <TechnoCustomCard 
                                                cardStyle={{ width: 120, height: '100%', backgroundColor: '#83a7ea', borderRadius: 20, marginHorizontal: 5}} 
                                                cardTitleStyle={{}} cardTitle={''} cardSubtitle={''}  
                                                contentStyle={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'}} 
                                                contentTitleStyle={{alignSelf: 'center', color: '#fff'}} contentTitle={Utils.getCurrency(expense[propertiesGroup].amount)} 
                                                contentBodyStyle={{color: '#fff'}} contentBody={expense[propertiesGroup].title} 
                                        />
                                        }
                                    />
                            )
                        })
                    })
                }
                    </ScrollView>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default Content;