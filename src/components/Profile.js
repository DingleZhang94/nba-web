import React, { Component } from 'react';
import { TEAM_PIC_URL_PREFIX } from '../constant';
import { PROFILE_PIC_URL_PREFIX } from '../constant';

export default class Profile extends Component {
    render() {
        function check(props){
            return props === undefined ? "N/A": props;
        }
        const {
            teamAbbreviation,
            teamCity,
            teamName,
            playerName,
            height,
            weight,
            playerId,
            pts, reb, ast, pie,
        } = this.props.playerInfo;
        const formatHeight = height ? height.split('-'): height;
        return (
            <div id='profile'>
                <div className='profile-entry player-name'>{`${check(playerName)}`}</div>
                <img
                    className="profile-pic"
                    src={`${PROFILE_PIC_URL_PREFIX}/${check(playerId)}.png`}
                    alt="Profile"
                />
                <img
                    className="team-logo"
                    src={`${TEAM_PIC_URL_PREFIX}/${check(teamAbbreviation)}_logo.svg`}
                    alt="Team"
                />
                <div className='profile-entry'>
                    <div className='profile-entry-left'>Team</div>
                    <div className='profile-entry-right'>{`${check(teamCity)}, ${check(teamName)}`}</div>
                </div>  
                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{formatHeight ? `${formatHeight[0]}' ${formatHeight[1]}"`: formatHeight}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Weight</div>
                    <div className="profile-entry-right">{`${check(weight)} lbs`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PTS</div>
                    <div className="profile-entry-right">{`${check(pts)}`  }</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">REB</div>
                    <div className="profile-entry-right">{`${check(reb)}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">AST</div>
                    <div className="profile-entry-right">{`${check(ast)}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{`${check(pie)}`}</div>
                </div>
            </div>
        )
    }
}
