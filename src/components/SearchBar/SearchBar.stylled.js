import styled from '@emotion/styled'

export const SearchForm = styled.form`
    text-align: center;
    margin-top: 20px;
    padding: 30px;

    border-radius: 4px;

    box-shadow: rgba(233, 83, 218, 1) 1px 1px 22px;
`;
export const SearchInput = styled.input`
    width: 400px;
    height: 30px;
    border-radius: 4px;
    border: 3px solid #f5c1f0;
    font-size: 20px;
    color: #1e8cb0;
`;
export const SearchButton = styled.button`
    margin-left: 60px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 1px solid #f5c1f0;
    cursor: pointer;
    font-weight: 700;
    color: #e953da;
    background: #142f48;
    box-shadow: rgba(233, 83, 218, 0.9) 0px 1px 16px;
    &:hover {
        border-color: #142f48;
        color: #142f48;
        background: #e953da;

    }
`;