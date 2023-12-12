import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const GraphComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://sawangibiller.hetadatain.com/api/hourly_graph/2023-12-08/Durga/1');
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Graph Component</Text>
      {data.length > 0 ? (
        <LineChart
          data={{
            labels: data.map((item) => item.HOUR),
            datasets: [
              {
                data: data.map((item) => item.value0),
              },
            ],
          }}
          width={300}
          height={200}
          yAxisLabel="Value"
          xAxisLabel="Time"
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => 'rgba(0, 0, 0, ${opacity})',
            labelColor: (opacity = 1) => 'rgba(0, 0, 0, ${opacity})',
          }}
          bezier
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default GraphComponent;