import React from "react";
import { View,  StyleSheet,  Text, Dimensions, ScrollView} from 'react-native';
import { IconButton, Headline } from 'react-native-paper';

import TechnoCustomCard from "../../techno-ui-components/Card";
import TechnoLineChart from "../../techno-ui-components/Chart/line-chart";
import TechnoBottomSheet from "../../techno-ui-components/BottomSheet";
import Detail from "../DetailPage/index";

import AddTask from "./add-expense";
import Schema from './schema.json';
import Utils from "../../Utils";

const DeviceInfo = () => {
    let info = {
        size: 'md',
        height: 0,
        width: 0
    }
    const height = Dimensions.get('window').height;
    const width = Dimensions.get('window').width;
    switch(height){
        case height>1200: info.size = 'xl';
                        break;
        case height>800 && height<1200: info.size = 'lg';
                         break;
        case height>600 && height<800: info.size = 'md';
                         break;
        case height>400 && height<600: info.size = 'sm';
                         break;                 
        case height<400: info.size = 'xs';
                         break;
    }
    info.height = height;
    info.width = width;
    return info;
}

const Welcome = (props) => {
    const { device } = props;
    return (
        <View style={styles.welcome.container[device.size]}>
            <View style={styles.welcome.container[device.size].view1}>
                <Text style={styles.welcome.container[device.size].view1Text}>Hello Aakash</Text>
                <IconButton icon="bell-outline" color={'black'} size={20} onPress={() => console.log('Pressed')} />
            </View>
            <View>
                <Headline style={styles.welcome.container[device.size].view2Text}>Welcome Back</Headline>
            </View>
        </View>
    )
}

const TotalExpense = (props) => {
    const { device , data } = props;
    let totalexpense = 0;
    let quote = 'Expenses for the day'
    let date = `${Utils.getDate(new Date().getTime())}`;
    
    if(data){
        for(let expenseIndex in data){
            let expense = data[expenseIndex];
            if(expense){
                for(let propertiesGroup in expense){
                    let properties = expense[propertiesGroup];
                    if(properties && properties.amount){
                        totalexpense = totalexpense + properties.amount;
                    }
                }
            }
        }
    }

    return (
        <View style={styles.totalexpense.container[device.size]}>
            <TechnoCustomCard 
                cardStyle={{width: '100%', height: '90%', backgroundColor: '#83a7ea', borderRadius: 20}} 
                cardTitleStyle={{}} cardTitle={''} cardSubtitle={''}  
                contentStyle={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'}} 
                contentTitleStyle={{alignSelf: 'center', color: '#fff'}} contentTitle={Utils.getCurrency(totalexpense)}
                contentSubtitle={''} 
                contentBodyStyle={{color: '#fff'}} contentBody={quote} 
            />
        </View>
    )
}

const DailyExpense = (props) => {
    const { device, data } = props;

    return (
        <View style={styles.dailyexpense.container[device.size]}>
            <View style={styles.dailyexpense.container[device.size].header.style}>
                <Text style={styles.dailyexpense.container[device.size].header.text}>Daily Expenses</Text>
                <TechnoBottomSheet primaryIcon="plus" primaryIconStyle={styles.dailyexpense.container[device.size].header.icon} renderContent={<AddTask schema={Schema} />} />
            </View>

            <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '100%',  }}>
                <ScrollView horizontal={true} style={{width: '100%', paddingBottom: 20 }}>
                    {
                    data.map(expense => {
                        return Object.keys(expense).map(propertiesGroup => {
                                return  (
                                        <Detail 
                                           expense={expense}
                                           renderTouchableComponent={
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
    ) 
}

// https://www.npmjs.com/package/react-native-chart-kit
const DailyActivity = (props) => {
    const { device, data } = props;
    let labels = [];
    let datasets = [];
    if(data){
        data.map(expense => {
            Object.keys(expense).map(propertiesGroup => {
                labels.push(expense[propertiesGroup].title)
                datasets.push(expense[propertiesGroup].amount)
            })
        })
    }
    return (
        <View style={styles.dailyactivity.container[device.size]}>
            <Text style={styles.dailyactivity.container[device.size].header.text}> Daily Activity </Text> 
            <TechnoLineChart labels={labels} datasets={datasets} style={styles.dailyactivity.container[device.size].chartStyle} />
        </View>
    )
}

const Content = (props) => {
    const {data} = props;
    let device = DeviceInfo();
    return (
        <>
            <Welcome device={device} data={data}  />
            <TotalExpense device={device} data={data}  />
            <DailyExpense device={device} data={data} />
            <DailyActivity device={device} data={data} /> 
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    welcome: {
        container: {
            xl: {},
            lg: {
                height: 80,
            },
            md: {
                height: 80,
                view1: {
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                },
                view1Text: {
                    alignSelf: 'center',
                    fontFamily: 'montserrat',
                    fontSize: 14,
                },
                view2Text: {
                    fontFamily: 'montserrat',
                    fontSize: 24,
                    fontWeight: 'bold',
                }
            },
            sm: {},
            xs:{},
        },
    },
    totalexpense: {
        container: {
            xl: {},
            lg: {
                backgroundColor: '',
                height: 172,
            },
            md: {
                backgroundColor: '',
                height: 172,
                marginTop: 5,
                marginBottom: 2
            },
            sm: {},
            xs:{},
        }
    },
    dailyexpense: {
        container: {
            xl: {},
            lg: {
                backgroundColor: '',
                height: 180,
            },
            md: {
                backgroundColor: '',
                height: 180,
                header: {
                    style: {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: ''
                    },
                    text: {
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                        color: '#111111'
                    },
                    icon: {
                        padding: 0,
                        margin: 0,
                    }
                },
            },
            sm: {},
            xs:{},
        }
    },
    dailyactivity: {
        container: {
            xl: {},
            lg: {
                backgroundColor: '',
                height: 330,
            },
            md: {
                backgroundColor: '',
                height: 330,
                header: {
                    text: {
                        fontSize: 16,
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                        color: '#111111'
                    }
                },
                chartStyle: {
                    height: 300,
                    
                }
            },
            sm: {},
            xs:{}
        }
    },
})

export default Content;