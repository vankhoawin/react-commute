import React, { Component } from 'react';
import { PieChart } from 'react-d3';

export default class LanePieChart extends Component {
  constructor(props) {
    super(props);
    this.processLaneData = this.processLaneData.bind(this);
  }

  processLaneData(lanes) {
    let lanesArr = [];
    let totalTaken = 0;

    Object.keys(lanes).forEach(laneNum => {
      totalTaken += lanes[laneNum];

      lanesArr.push({
        label: laneNum, 
        value: lanes[laneNum]
      });
    })

    // stringify to whole percentages
    lanesArr.map(lane => {
      lane.value = Math.round((lane.value / totalTaken) * 100);
    });

    return lanesArr;
  }

  render() {
    const { lanes } = this.props;
    const topLanes = this.processLaneData(lanes);

    return (
      <PieChart
        data={topLanes}
        width={400}
        height={400}
        radius={100}
        innerRadius={10}
        sectorBorderColor="white"
        title="Most Frequently Taken Lanes"
      />
    );
  }
}