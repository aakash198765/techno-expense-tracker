import React from "react";
import { View,  StyleSheet,  Text, Dimensions, ScrollView} from 'react-native';
import { IconButton, Headline } from 'react-native-paper';

import TechnoCustomCard from "../../techno-ui-components/Card";
import TechnoLineChart from "../../techno-ui-components/Chart/line-chart";
import TechnoBottomSheet from "../../techno-ui-components/BottomSheet";

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
    let paragraph = 'Expenses for today';
    if(data){
        data.map(element => {
                totalexpense = totalexpense + element.amount;
        })
    }
    return (
        <View style={styles.totalexpense.container[device.size]}>
            <TechnoCustomCard 
                cardStyle={{width: '100%', height: '90%', backgroundColor: '#83a7ea', borderRadius: 20}} 
                cardTitleStyle={{}} cardTitle={''} cardSubtitle={''}  
                contentStyle={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignSelf: 'center'}} 
                contentTitleStyle={{alignSelf: 'center', color: '#fff'}} contentTitle={totalexpense} 
                contentBodyStyle={{color: '#fff'}} contentBody={paragraph} 
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
                <TechnoBottomSheet primaryIcon="plus" primaryIconStyle={styles.dailyexpense.container[device.size].header.icon} />
            </View>

            <View style={{flex: 1, flexDirection: 'row', width: '100%', height: '100%',  }}>
                <ScrollView horizontal={true} style={{width: '100%', paddingBottom: 20 }}>
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
    ) 
}

// https://www.npmjs.com/package/react-native-chart-kit
const DailyActivity = (props) => {
    const { device, data } = props;
    let labels = [];
    let datasets = [];
    if(data){
        data.map(element => {
            labels.push(element.title);
            datasets.push(element.amount);
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