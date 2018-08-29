import React, { Component } from 'react';
import nba from '../nba';
import Profile from './Profile';
import DataViewContainer from './DataViewContainer';
import SearchBar from './SearchBar';
import { DEFAULT_PLAYER_INFO } from '../constant';

export default class Main extends Component {
    state = {
        playerInfo: DEFAULT_PLAYER_INFO,
    }
    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.playName);
    }

    loadPlayerInfo = (playerName) =>{
        const playerId = nba.findPlayer(playerName).playerId;
        nba.stats.playerInfo({
            PlayerID: playerId
        }).then((res) => {
            const playerInfo = { ...res.commonPlayerInfo[0], ...res.playerHeadlineStats[0] };
            this.setState(
                {playerInfo: playerInfo}
            );
        });
    }

    render() {
        return (
            <div className='main'>
                <SearchBar loadPlayerInfo={this.loadPlayerInfo}/>
                <div className='player'>
                    <Profile playerInfo={this.state.playerInfo} />
                    <DataViewContainer playerId={this.state.playerInfo.playerId} />
                </div>
            </div>
        )
    }
}