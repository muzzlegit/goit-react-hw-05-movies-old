import styled from '@emotion/styled'

export const NavigationList = styled.ul`
display: flex;
justify-content: space-around;

font-weight: 700;

`;
export const NavigationItem = styled.li`

color:#f5c1f0;
    font-size: 30px;
    text-align: center;
    width: 40%;
    border-radius: 4px;
`;
export const NavigationText = styled.span`
    color: #4c44cf;
    padding: 5px 40px;
    &:hover {
        color:#e953da;   
    }
`;