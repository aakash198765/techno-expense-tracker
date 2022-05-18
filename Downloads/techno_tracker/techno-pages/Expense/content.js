import React, { useState } from "react";
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import { Paragraph, Avatar, Menu, Caption, Divider, Title, Appbar, Button, TouchableRipple, List } from 'react-native-paper';

import TechnoCustomCard from "../../techno-ui-components/Card";
import TechnoPieChart from "../../techno-ui-components/Chart/pie-chart"
import TechnoBottomSheet from "../../techno-ui-components/BottomSheet";

const Content  = (props) => {
    const { data } = props;
    const [showFilter, setShowFilter ] = useState(false);

    const filterIcon = () => {
        return  (
            <View style={{flexDirection: 'column', width: 170, height: 150,  alignItems: 'center', justifyContent: 'center', backgroundColor: '#83a7ea', color: '#fff', zIndex: 999, borderRadius: 10,    }}>
                <Menu.Item icon="" onPress={() => {}} title="Weekly" titleStyle={{color: '#fff', fontFamily: 'montserrat', alignSelf: 'center'}} />
                <Menu.Item icon="" onPress={() => {}} title="Monthly" titleStyle={{color: '#fff', fontFamily: 'montserrat', alignSelf: 'center'}} />
                <Menu.Item icon="" onPress={() => {}} title="All Time" titleStyle={{color: '#fff', fontFamily: 'montserrat', alignSelf: 'center'}}/>
            </View>
        )
    }

    return (
        <View style={{flexDirection: 'column', height: '100%', paddingTop: '2%', paddingHorizontal: '2%'}}>
            {/* Filter */}
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', height: '10%', backgroundColor: '', margin: 0, paddingHorizontal: 10 }} >
                    {showFilter ? filterIcon() : <></> }
                   <Button icon="filter-outline" color="#83a7ea" mode="text" compact={true} onPress={() => setShowFilter(!showFilter)} style={{justifyContent: 'center', alignItems: 'center', borderRadius: 20}} />
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
                    <TechnoBottomSheet primaryText="All Expenses" primaryTextStyle={{ padding: 0, margin: 0, textDecorationLine: 'underline' }} />
                </View>

                <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '100%', marginTop: 10  }}>
                    <ScrollView horizontal={true} style={{ width: '100%', paddingBottom: 20 }}>
                        {
                        data.map(element => {
                        return  (
                                    <TechnoCustomCard 
                                        cardStyle={{ width: 120, height: '100%', backgroundColor: '#83a7ea', borderRadius: 20, marginHorizontal: 5}} 
                                        cardTitleStyle={{}} cardTitle={''} cardSubtitle={''}  
                                        contentStyle={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'}} 
                                        contentTitleStyle={{alignSelf: 'center', color: '#fff'}} contentTitle={element.amount} 
                                        contentBodyStyle={{color: '#fff'}} contentBody={element.title} 
                                    />
                        )
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