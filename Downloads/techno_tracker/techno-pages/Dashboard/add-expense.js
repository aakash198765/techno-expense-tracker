import React, { useState, useRef } from 'react';
import { View , ScrollView, Button, Text } from 'react-native';
import { TextInput, Paragraph, Caption, Headline, Subheading } from 'react-native-paper';

const AddTask = (props) => {
    const { schema } = props;
    const [form, setForm] = useState({})

    const renderSchema = (schema) => {
        if(!schema){
            return <></>
        }
        if(!Object.keys(schema).length){
            return <></>
        }
        let formUI = [];
        for(let propertiesGroup in schema){
            let properties = schema[propertiesGroup] && schema[propertiesGroup].properties;
            if(!properties){
                return <></>
            }
            for(let property in properties){
                formUI.push(
                    <TextInput
                        label={properties[property].title}
                        type={properties[property].type}
                        defaultValue={form && form[propertiesGroup] && form[propertiesGroup][property]? form[propertiesGroup][property]: ""}
                        onChangeText={(value) => {
                            let formValue = form;
                            if(formValue && formValue[propertiesGroup]) {
                                formValue[propertiesGroup][property] = value
                                setForm(formValue)
                            } else {
                                formValue[propertiesGroup] = {};
                                formValue[propertiesGroup][property] = value
                                setForm(formValue)
                            }
                        }}
                        style={{marginVertical: 3, backgroundColor: '#F7F5F2' }}
                        activeUnderlineColor="#83a7ea"
                    />
                )
            }
        }

        return formUI;
    }

    const add = (form) => {
        console.log('onpress')
        if(!form){
            return ;
        }
        // make api call to add expense
    }


    return (
        <View style={{height: '100%' ,paddingVertical: 0, paddingHorizontal: 5,  }}>
            <View style={{height: '10%',}}>
                <Headline style={{ fontFamily: 'montserrat', fontWeight: 'bold', marginHorizontal: 3, fontSize: 18 }}>Add Expense</Headline>
            </View>
            <View style={{height: '60%'}}>
                <ScrollView>
                    {renderSchema(schema)}
                </ScrollView>
            </View>
            <View style={{height: '20%',justifyContent: 'flex-end', }}>
                <View onStartShouldSetResponder={()=> add(form)}  style={{height: 50, justifyContent: 'center',  alignItems: 'center' ,borderRadius: 50, backgroundColor: '#83a7ea'}}>
                    <Text style={{color: '#fff', fontFamily: 'montserrat', fontWeight: 'bold'}} > ADD Expense </Text>
                </View>
            </View>
        </View>
    )
}

export default AddTask;