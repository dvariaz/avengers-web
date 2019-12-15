import styled from 'styled-components';
import { barSize, sidebarSize } from '../../../settings/global';
import { darkGlass, glassEdge, navFont } from '../../../settings/mixins';

const StyledSynopsisNav = styled.div`
    ${ darkGlass }
    position: fixed;
    z-index: 90;
    bottom: 0;
    width: 100vw;
    padding: 0 ${ barSize };
    height: ${ barSize };
    display: flex;
    flex-direction: row;

    ${ glassEdge }
    border-width: 2px 0 0;

    .SynopsisNav-Controller{
        width: 40px;
        height: auto;
        display: flex;
        align-items: center;

        img {
            width: 100%;
            padding: 0.75em;
            transform: rotateZ(270deg);
        }

        &:last-child{
            img {
                transform: rotateZ(90deg);
            }
        }
    }

    .items {
        display: flex;
        width: calc(100vw - ${ barSize } - ${ barSize });

        overflow-x: auto;     

        a {
            display: flex;
            justify-content: center;
            padding: 0 3em;
            ${ navFont }
            text-align: center;
            min-width: 150px;
            max-width: 300px;
            line-height: ${ barSize };
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export default StyledSynopsisNav;