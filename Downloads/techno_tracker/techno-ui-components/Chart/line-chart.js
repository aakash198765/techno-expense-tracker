import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

const TechnoLineChart = (props) => {
    const {labels, datasets, style} = props;
    return (
        <View>
        <LineChart
          data={{
            labels: labels,
            datasets: [
              {
                data: datasets
              }
            ]
          }}
          width={Dimensions.get("window").width}
          height={style.height}
          yAxisLabel="₹"
          yAxisSuffix=""
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#83a7ea",
            backgroundGradientFrom: "#83a7ea",
            backgroundGradientTo: "#83a7ea",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 20,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
          bezier
          style={{
            borderRadius: 20,
            marginRight: 35,
            paddingTop: 10,
          }}
        />
      </View>
    )
}

export default TechnoLineChart;


