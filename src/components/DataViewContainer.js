import React, { Component } from 'react';
import _ from 'lodash';
import Shotchart from './Shotchart';
import { Switch, Radio } from 'antd';
import CountSlider from './CountSlider';

export default class DataViewContainer extends Component {
  state = {
    minCount: 2,
    chartType: 'hexbin',
    displayTooltip: true,
  }

  onCountSliderChange = (value) => {
    this.setState({
      minCount: value,
    });
  }

  onChartTypeChange = (e) => {
    this.setState({
      chartType: e.target.value
    });
  }

  onDisplayToolTipChange = (checked) => {
    this.setState({
      displayTooltip: checked
    });
  }

  render() {
    const { minCount, chartType, displayTooltip } = this.state;
    const RadioGroup = Radio.Group;
    return (
      <div className="data-view">
        <Shotchart
          playerId={this.props.playerId}
          minCount={minCount}
          chartType={chartType}
          displayToolTips={displayTooltip}
        />
        <div className="filter">
          {chartType === "scatter" ? null: <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500)} minCount={minCount} />}

          <RadioGroup onChange={this.onChartTypeChange} value={chartType}>
            <Radio value="hexbin">hexbin</Radio>
            <Radio value="scatter">scatter</Radio>
            <Switch defaultChecked onChange={this.onDisplayToolTipChange}
              checkedChildren="ON" uncheckedChildren="OFF" />
          </RadioGroup>
        </div>
      </div>
    )
  }
}
