import styled from '@emotion/styled'

export const CastContainer = styled.ul`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    padding: 30px;

    border-radius: 4px;

    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;
`;

export const CastItem = styled.li`
    width: 160px;
    padding: 2px 10px;
    color:#f5c1f0;
    font-size: 20px;
    font-weight: 700;
    border: 1px solid #f5c1f0;
    background-color: #142f48;
    transition: transform 400ms cubic-bezier(0.4, 0, 0.2, 1);
    &:not(:last-child) {
        margin-bottom: 20px;
    }
    &:hover {
        transform: scale(1.2);
        border-radius: 4px;
        box-shadow: rgba(233, 83, 218, 0.9) 0px 1px 16px;
    }
`;
export const CastImg = styled.img`
    margin-right: 60px;
    width: 100%;
    height: auto;
    background: #142f48;

    border-radius: 4px;
    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;   
`;
export const CastTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 6px;
    padding: 6px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #e953da;
`;
export const CastSubTitle = styled.p`
margin-top: 0;
    margin-bottom: 6px;
    padding: 6px;
    font-size: 14px;
    border-radius: 2px;
`;
export const CastText = styled.span`
margin-left: 6px;
    color: #f5c1f0;

`;