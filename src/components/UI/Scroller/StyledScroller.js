import styled from 'styled-components';
import { navFont } from '../../../settings/mixins';

const StyledScroller = styled.div`
    width: 100%;
    height: 200px;

    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    span{
        ${ navFont }
        
        display: flex;
        align-items: center;
        writing-mode: vertical-lr;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        overflow: hidden;

        background: ${ props => props.color };

        img{
            width: 100%;
            padding: 1.4em;
        }

        &:last-child{
            img {
                transform: rotateZ(180deg);
            }
        }
    }
`;

export default StyledScroller;