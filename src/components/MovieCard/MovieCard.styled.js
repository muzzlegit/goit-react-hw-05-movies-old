import styled from '@emotion/styled'

export const MovieBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 30px;
    border-radius: 4px;
    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;
`;
export const MovieImg = styled.img`
    margin-right: 60px;
    width: 400px;

    border: 2px solid #f5c1f0;
    border-radius: 4px;
    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;   
`;
export const MovieTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 40px;
    padding: 10px;
    text-align: center;
    font-size: 30px;
    border-radius: 2px;
    font-weight: 700;
    color: #e953da;
    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;
`;
export const MovieItem = styled.p`
    margin-top: 0;
    margin-bottom: 40px;
    padding: 10px;
    font-size: 20px;
    border-radius: 2px;
    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;
`;
export const MovieText = styled.span`
    color: #f5c1f0;

`;