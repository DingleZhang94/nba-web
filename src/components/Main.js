import React, { Component } from 'react';
import nba from 'nba';
import Profile from './Profile';
import DataViewContainer from './DataViewContainer';

export default class Main extends Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {},
    }
    componentDidMount(){
        console.log(this.state.playerId);
        nba.stats.playerInfo({
            PlayerID: this.state.playerId
        }).then((res)=>{
            const playerInfo = {...res.commonPlayerInfo[0],...res.playerHeadlineStats[0]};
            console.log(playerInfo);
            this.setState({
                playerInfo
            });
        });
    }

    render() {
        return (
            <div className='main'>
                <Profile playerInfo ={this.state.playerInfo}/>
                <DataViewContainer playerId={this.state.playerId}/>
            </div>
        )
    }
}