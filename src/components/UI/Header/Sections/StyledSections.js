import styled from 'styled-components';
import { barSize } from './../../../../settings/global';
import { darkGlass, glassEdge, navFont } from '../../../../settings/mixins';

const StyledSections = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px;

    a {
        ${ navFont }
        line-height: ${ barSize };
        text-align: center;
        width: 100%;
        height: 100%;
        padding: 0 5px;
        box-sizing: content-box;
    }

    a:hover {
        background-color: rgba(255,255,255,0.2);
    }

    a.active{
        border-bottom: 3px solid white;
    }
`;

export default StyledSections;
