import React, { useRef } from "react";
import { View, Button, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { IconButton } from "react-native-paper"; 

const TechnoBottomSheet = (props) => {
  const refRBSheet = useRef();

  return (
    <View>
      {props.primaryIcon ? <IconButton icon={props.primaryIcon} style={props.primaryIconStyle} color="#111" size={22} onPress={() => refRBSheet.current.open()} /> : <></> }
      {props.primaryText ? <Text icon={props.primaryIcon} style={props.primaryTextStyle} color="#111" size={22} onPress={() => refRBSheet.current.open()}> {props.primaryText} </Text>: <></> }
      <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          animat ionType="none"
          closeDuration={10}
          customStyles={{
            wrapper: {
              backgroundColor: "gray",
            },
            draggableIcon: {
              backgroundColor: "#83a7ea"
            },
            container: {
              backgroundColor: '#f7f7f7',
              height: '60%',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }
          }}
        >
          {/* <YourOwnComponent /> */}
          <View>
            {props.renderContent?props.renderContent: <></>}
          </View>
        </RBSheet>
    </View>
  );
}

export default TechnoBottomSheet;