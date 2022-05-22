import React, { useState } from 'react'
import { View } from 'react-native'
import {Button} from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

export default TechnoDatePicker = (props) => {
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button 
          icon={{ source: "calendar-range", direction: 'rtl' }} 
          color="#83a7ea"
          mode="text"
          compact={true}
          style={props.style ? props.style : {}}
          onPress={() => setOpen(true)} 
       />
      <DatePicker
          modal
          mode='date'
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
            props.onSelectingDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
      />
    </>
  )
}