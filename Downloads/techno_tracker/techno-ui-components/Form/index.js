import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Paragraph, TextInput } from 'react-native-paper';

const TechnoForm = (props) => {
    const { schema, data, edit } = props;

    const renderForm = (schema, data) => {
        let form = [];
        for(let propertyName in schema){
            let properties = schema[propertyName];
            for(let property in properties){
                if(properties[property].index < 100)
                    continue;
                form.push(
                    <View>
                    <TextInput
                        mode="outlined"
                        label={`${properties[property].title}`}
                        placeholder={`Enter ${properties[property].title}`}
                        //right={<TextInput.Affix text="/100" />} 
                        defaultValue={data[propertyName][property]} 
                        disabled={edit? true : false}
                    />
                    </View>
                )
            }
        }
        return form;
    } 
    
    return (
        <View style={{paddingVertical: '5%', paddingHorizontal: '2%'}}>
            <ScrollView>
            {
                renderForm(schema, data)
            }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default TechnoForm;