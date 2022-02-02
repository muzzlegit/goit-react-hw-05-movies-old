import styled from '@emotion/styled'

export const ButtonBox = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    z-index: 10;
    border-radius: 50%;
    border: 1px solid #f5c1f0;
    cursor: pointer;
    font-weight: 700;
    color: #e953da;
    background: #142f48;

    &:hover {
        border-color: #142f48;
        color: #142f48;
        background: #e953da;
        box-shadow: rgba(233, 83, 218, 0.9) 0px 1px 16px;
    }
`;
