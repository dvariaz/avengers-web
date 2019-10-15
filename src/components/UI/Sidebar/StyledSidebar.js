import styled from 'styled-components';
import { barSize } from './../../../settings/global';
import { darkGlass, glassEdge } from '../../../settings/mixins';

const StyledSidebar = styled.aside`
    ${ darkGlass }
    position: fixed;
    z-index: 95;
    top: ${ barSize };
    width: ${ barSize };
    height: calc(100vh - ${ barSize });
    ${ glassEdge }
    border-width: 0;
    
    &.left {
        left: 0;
        border-right-width: 2px;
    }
    
    &.right {
        right: 0;
        border-left-width: 2px;
    }

    .social{
        display: flex;
        flex-direction: column;
        
        a {
            width: 100%;
            padding: 1em 1.3em;
            img {
                width: 100%;
                height: auto;
            }

            &:hover {
                background-color: rgba(255,255,255,0.2);
            }
        }
    }

    .CastSections {
        display: flex;
        flex-direction: column;
        height: calc(100% - ${ barSize });

        a {
            display: flex;
            flex: 1;
            padding: 1em 0;
            color: white;
            text-transform: uppercase;
            display: flex;
            justify-content: center;
            align-items: center;
            writing-mode: vertical-lr;
        }
    }

    .nav-language{
        position: absolute;
        text-align: center;
        bottom: 0;
        width: 100%;
        height: ${ barSize };
        line-height: ${ barSize };
    }
`;

export default StyledSidebar;