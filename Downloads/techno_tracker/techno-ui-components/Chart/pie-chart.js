import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

import { data } from './data';

const TechnoPieChart = (props) => {
    
    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
    };

    return (
            <PieChart
                data={data}
                width={Dimensions.get('window').width - 15}
                height={400}
                chartConfig={chartConfig}
                accessor={"population"}
                backgroundColor={"transparent"}
                marginHorizontal={30}
                center={[90, 20]}
                absolute
                style={{
                    //backgroundColor: '#111'
                }}
            />
    )
}

export default TechnoPieChart;


