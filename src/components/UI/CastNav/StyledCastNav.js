import styled from 'styled-components';
import { barSize, sidebarSize } from '../../../settings/global';

const StyledCastNav = styled.div`
    position: absolute;
    top: ${ barSize };
    left: ${ barSize };
    z-index: 90;
    display: flex;
    flex-direction: column;
    height: calc(100vh - ${ barSize });
    width: ${ sidebarSize };
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default StyledCastNav;