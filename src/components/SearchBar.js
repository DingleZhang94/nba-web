import React, { Component } from 'react';
import { AutoComplete,Input, Icon } from 'antd';
import nba from '../nba';

export default class SearchBar extends Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({fullName}) => fullName),
        });
    }

    onSelect = () => {

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
            />
        );
    }
}
