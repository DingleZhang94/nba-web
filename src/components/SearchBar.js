import React, { Component } from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from '../nba';   
import {PROFILE_PIC_URL_PREFIX} from '../constant.js';


const Option = AutoComplete.Option;
export default class SearchBar extends Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(
                ({ fullName, playerId }) =>
             <Option key={playerId} value={fullName}>
               <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}
               alt='pic'/>
               <span className="player-option-label" >{fullName}</span>
             </Option>
        ),
        });
}

onSelect = (value) => {
    this.props.loadPlayerInfo(value);
}

render() {
    const { dataSource } = this.state;
    return (
        <AutoComplete
            className="search-bar"
            dataSource={dataSource}
            size='large'
            onSelect={this.onSelect}
            onSearch={this.handleSearch}
            placeholder="Search NBA player"
            optionLabelProp="value"
        >
            <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
    );
}
}
