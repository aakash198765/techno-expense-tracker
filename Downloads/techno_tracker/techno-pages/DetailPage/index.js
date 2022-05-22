import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Caption, Paragraph, Headline, Subheading, Avatar , IconButton} from "react-native-paper";

import Utils from "../../Utils";

const Detail = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(props.expense)
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { 
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row' , justifyContent: 'flex-end', backgroundColor: ''}}>
                <Pressable
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <IconButton icon="close" color={'black'} size={20}/>
                </Pressable>
            </View>
            <View style={{backgroundColor: ''}}>
                <Avatar.Image size={100} source={require('../../techno-assets/images/expense2.jpg')} style={{alignSelf: 'center', marginBottom: 10, backgroundColor: '#fff'}} />
                <Caption style={{alignSelf: 'center', fontSize: 16}}>{'Total Expense'}</Caption>
                <Headline style={{alignSelf: 'center', fontWeight: 'bold'}}>{Utils.getCurrency(props.expense['Expense'].amount)}</Headline>
            </View>

            <View style={{marginVertical: 30, paddingHorizontal: 30}} >
                <ScrollView>
                    <View style={{height:1, backgroundColor: '#DDDDDD', marginHorizontal: 0, marginBottom: 5}}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} ><Subheading>Title</Subheading><Caption>{props.expense['Expense'].title}</Caption></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} ><Subheading>Note</Subheading><Caption>{props.expense['Expense'].notes}</Caption></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} ><Subheading>Time</Subheading><Caption>{Utils.getTime(props.expense['Expense'].date)}</Caption></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} ><Subheading>Date</Subheading><Caption>{Utils.getDate(props.expense['Expense'].date)}</Caption></View>
                </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable
        style={styles.openModal}
        onPress={() => setModalVisible(true)}
      >
        {props.renderTouchableComponent}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    flex: 1,
    width: '100%',
    marginTop: '70%',
    marginHorizontal: '20%',
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  openModal: {
      backgroundColor: ''
  }
  
});

export default Detail;