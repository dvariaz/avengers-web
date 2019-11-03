import React, { Component } from 'react';
// import StyledCastLink from './StyledCastLink';
import { Link, Location } from '@reach/router';
import { navFont } from '../../../../settings/mixins';
import { transparentize } from 'polished';
import styled from 'styled-components';
import posed from 'react-pose';

const poses = {
    active: {
        fontSize: '1.1em',
        borderLeftWidth: '7px',
        backgroundSize: '100%, 100%'
    },
    inactive: {
        fontSize: '1em',
        borderLeftWidth: '0px',
        backgroundSize: '0%, 100%'
    }
};

const PosedCastLink = posed(styled(Link)`
    display: flex;
    align-items: flex-end;
    flex: 1;
    padding: 1em 1em 1em 2em;
    width: 100%;
    min-height: 120px;
    border-width: 0;
    font-size: 0.9em;
    font-weight: 600;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    ${ navFont }

    border-color: ${ props => props.color };
    border-left-style: solid;
    background-image: linear-gradient(90deg, ${ props => transparentize(0.5, props.color) }, transparent), url("${ props => props.image }");
    background-position: left 0, center;
    `)(poses);

class CastLink extends Component {
    isCurrent = (location) => {
        return (this.props.to === location.pathname);
    }

    render(){
        let { to, image, color } = this.props;
        
        return(
            <>
                <Location>
                    {
                        ({ location }) => (
                            <PosedCastLink pose={ this.isCurrent(location) ? 'active' : 'inactive' } to={ to } image={ `${process.env.PUBLIC_URL}/assets/Characters/${image}/Profile.jpg` } color={ color }>
                                { this.props.children }
                            </PosedCastLink>
                        )
                    }
                </Location>
            </>
        );
    }
}
export default CastLink;