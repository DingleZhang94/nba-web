import React, { Component } from 'react';
import Shotchart from './Shotchart';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class DataViewContainer extends Component {
  state = {
    minCount: 2,
    chartType: 'hexbin',
    displayTooltip: true,
  }

  onChange = (value) => {
    this.setState({
      minCount: value,
    });
  }

  render() {
    const { minCount } = this.state;
    return (
      <div className="data-view">
        <Shotchart 
          playerId={this.props.playerId} 
          minCount={this.state.minCount}
          chartType={this.state.chartType}
          displayToolTips={this.state.displayTooltip}
        />
        <Row>
          <Col offset={4} span={12}>
            <Slider min={2} max={20} onChange={this.onChange} value={minCount} />
          </Col>
          <Col span={4}>
            <InputNumber
              min={2}
              max={20}
              style={{ marginLeft: 16 }}
              value={minCount}
              onChange={this.onChange}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
