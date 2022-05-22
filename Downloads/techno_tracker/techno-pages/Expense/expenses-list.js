import React, { useState, useRef } from 'react';
import { View , ScrollView, Button, Text } from 'react-native';
import { TextInput, Paragraph, Caption, Headline, Subheading, DataTable } from 'react-native-paper';
import Utils from '../../Utils/index';

import Detail from '../DetailPage/index';

const tableStyle = {
    headerStyle: {

    },
    headerCellStyle: {

    },
    rowStyle: {

    },
    cellStyle: {
        numericCellStyle : {
            paddingRight: 10,
        },
        dateCellStyle: {

        },
        textCellStyle: {

        }
    }
}

const ExpenseList = (props) => {
    const { schema, data } = props;

    const renderSchema = (schema, data) => {
        let columns = getHeaders(schema);
        let tableData = getData(schema, data);
        return renderTable(columns, tableData)
    }

    const getHeaders = (schema) => {
        let columns = [];
        for(let propertiesGroup in schema){
            let properties = schema[propertiesGroup] && schema[propertiesGroup].properties ? schema[propertiesGroup].properties : {};
            let order = schema[propertiesGroup] && schema[propertiesGroup].order ? schema[propertiesGroup].order : [];
            for(let propIndex in order) {
                if(properties[order[propIndex]].format){
                    if(properties[order[propIndex]].format.includes('Date')){
                        columns.push(
                            <DataTable.Title>{properties[order[propIndex]].title}</DataTable.Title>
                        )
                    } else if(properties[order[propIndex]].format.includes('Number')) {
                        columns.push(
                            <DataTable.Title>{properties[order[propIndex]].title}</DataTable.Title>
                        )
                    }

                } else {
                    columns.push(
                        <DataTable.Title>{properties[order[propIndex]].title}</DataTable.Title>
                    )
                }
            }
        }
        return (
            <DataTable.Header> 
                {columns}
            </DataTable.Header>
        )
    }

    const getData = ( schema, data) => {
        let tableData = [];
        for(let rowIndex in data){
            let row = []
            for(let propertiesGroup in schema){
                let properties = schema[propertiesGroup] && schema[propertiesGroup].properties ? schema[propertiesGroup].properties : {};
                let order = schema[propertiesGroup] && schema[propertiesGroup].order ? schema[propertiesGroup].order : [];
                for(let propIndex in order) {
                    let cellValue = data[rowIndex] && data[rowIndex][propertiesGroup] && data[rowIndex][propertiesGroup][order[propIndex]] ? data[rowIndex][propertiesGroup][order[propIndex]] : " - ";
                    if(properties[order[propIndex]].format) {
                        if(properties[order[propIndex]].format.includes('Date')){
                            row.push(
                                <DataTable.Cell style={tableStyle.cellStyle.dateCellStyle}>{Utils.getTime(cellValue)}</DataTable.Cell>
                            )
                        } else if(properties[order[propIndex]].format.includes('Number')){
                            row.push(
                                <DataTable.Cell numeric style={tableStyle.cellStyle.numericCellStyle}>{Utils.getCurrency(cellValue)}</DataTable.Cell>
                            )
                        }
                    }  else {
                        row.push(
                            <DataTable.Cell style={tableStyle.cellStyle.textCellStyle}>{cellValue}</DataTable.Cell>
                        )
                    }
                }
            }
            tableData.push(
                <Detail 
                    expense = {data[rowIndex]}
                    renderTouchableComponent = {
                        <DataTable.Row>
                        {row}
                    </DataTable.Row>
                    }
                />
            )
        }

        return tableData;
    }


    const renderTable = (columns, tableData) => {

        return (
            <DataTable>
                {columns}
                {tableData}
            </DataTable>
        )
    }

    return (
        <View style={{height: '100%' ,paddingVertical: 0, paddingHorizontal: 5,  }}>
            <View style={{height: '10%',}}>
                <Headline style={{ fontFamily: 'montserrat', fontWeight: 'bold', marginHorizontal: 3, fontSize: 18 }}>Expenses</Headline>
            </View>
            <View style={{height: '60%'}}>
                <ScrollView>
                    {renderSchema(schema, data)}
                </ScrollView>
            </View>
        </View>
    )
}

export default ExpenseList;