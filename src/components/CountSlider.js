import React, { Component } from 'react';
import _ from 'lodash';
import {Slider,InputNumber, Row, Col} from 'antd';
export default class CountSlider extends Component {
    state = {
        minCount: this.props.minCount
    }

    onChange = (value) => {
        const cleanValue = Number(value) ? value: this.state.minCount;
        this.setState({
          minCount: cleanValue,
        });
        this.props.onCountSliderChange(cleanValue);
    }


    render() {
        const minCount = this.state.minCount;
        return (
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
        )
    }
}
