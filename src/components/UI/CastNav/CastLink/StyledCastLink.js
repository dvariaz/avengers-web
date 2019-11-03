import NavLink from './../../NavLink';
import { navFont } from '../../../../settings/mixins';
import styled from 'styled-components';

const StyledCastLink = styled(NavLink)`
    display: flex;
    align-items: flex-end;
    flex: 1;
    padding: 1em 1em 1em 2em;
    width: 100%;
    min-height: 120px;
    border-width: 0;
    transition: border 300ms, font-size 300ms;
    font-size: 0.9em;
    font-weight: 600;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
    ${ navFont }

    border-color: ${ props => props.color };
    border-left-style: solid;
    background-image: url("${ props => props.image }");
`;

export default StyledCastLink;