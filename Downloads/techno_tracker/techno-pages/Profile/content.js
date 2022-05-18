import React, { useState, useRef, useEffect} from 'react';
import { View, StyleSheet, Text,  } from 'react-native';
import { Paragraph, Avatar, Caption, Divider, Title, Appbar, Button } from 'react-native-paper';
import TechnoForm from '../../techno-ui-components/Form';
import data from './data.json';
import schema from './schema.json'

const Content = (props) => {
    const [edit, setEdit] = useState(true);
    const [cancel, setCancel] = useState(false);
    const [save, setSave] = useState(false);
    let name = data && data.profile &&  data.profile.name ? data.profile.name.split(' ') : [];
    let firstName = name && name[0] ? name[0] : '';
    let lastName = name  && name[1] ? name.slice(1,) : '';

    return (
        <View style={{flexDirection: 'column', height: '100%', paddingTop: '2%', paddingHorizontal: '2%'}}>
            {/* Action -- Edit, Cancel, Save */}
            <View style={{flexDirection: 'row', justifyContent: 'flex-end' }} >
               {!edit? <></> :  <Button color="#83a7ea"  onPress={()=> {setEdit(false);setCancel(true);setSave(true);}} > Edit Profile </Button>}
                {!cancel? <></> : <Button color="#83a7ea"  onPress={()=>{setEdit(true);setCancel(false);setSave(false);}} > Cancel </Button>}
                {!save? <></> : <Button color="#83a7ea"  onPress={()=>{setEdit(true);setCancel(false);setSave(false);}} > Save </Button>}
            </View>
            {/* Profile Image and Joined Date */}
            <View style={{flexDirection: 'row', paddingTop: 30}}>
                {/* profile Image */}
                <View style={{width: '65%', paddingHorizontal: '3%', paddingVertical: '3%'}}>
                    <Avatar.Image size={120} style={{backgroundColor: '#83a7ea'}} source={require('../../techno-assets/images/profile.png')} />
                </View>
                {/* Divider */}
                <View style={{width: '.7%', height: '50%', marginVertical: '10%',  backgroundColor: 'grey', }}>
                </View>
                {/* Joined Date */}
                <View style={{width: '34.3%', flexDirection: 'column',  justifyContent: 'center', paddingHorizontal: '3%'}}>
                    <Caption>Joined</Caption>
                    <Paragraph>05-05-2020</Paragraph>
                </View>
            </View>
            {/* Profile Name */}
            <View style={{paddingTop: '5%', paddingHorizontal: '5%'}}>
                <Title style={{fontSize: 26,  fontFamily: 'montserrat', fontWeight: 'bold', paddingTop: 10}}>{data && data.profile &&  data.profile.name}</Title>
            </View>
            {/* Profile Details */}
            <TechnoForm schema={schema} data={data} edit={edit} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default Content;