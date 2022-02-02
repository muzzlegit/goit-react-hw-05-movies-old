import styled from '@emotion/styled'

export const FilmsList = styled.ul`
    margin-top: 20px;
`;
export const FilmsItem = styled.li`
    padding: 2px 10px;
    color:#f5c1f0;
    font-size: 20px;
    font-weight: 700;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    &:hover {
        transform: scale(1.02);
        border-radius: 4px;
        box-shadow: rgba(233, 83, 218, 0.9) 0px 1px 16px;
    }
`;
export const FilmsTitle = styled.span`
    color: #4c44cf;
    &:hover {
        color:#e953da;
    }
`;