import styled from 'styled-components';
import { barSize } from './../../../settings/global';
import { darkGlass, glassEdge, navFont } from '../../../settings/mixins';

const StyledHeader = styled.header`
    ${ darkGlass }
    position: fixed;
    top: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    height: ${ barSize };
    ${ glassEdge }
    border-width: 0 0 2px 0;

    .Logo {
        display: flex;
        justify-content: center;
        width: ${ barSize };
        height: ${ barSize };
        padding: 10px;
        
        ${ glassEdge }
        border-width: 0 2px 0 0;
        
        img {
            height: 100%;
        }
    }

    .SidebarButton {
        display: flex;
        justify-content: center;
        width: ${ barSize };
        height: ${ barSize };
        padding: 10px;

        ${ glassEdge }
        border-width: 0 0 0 2px;
    }
`;

export default StyledHeader;