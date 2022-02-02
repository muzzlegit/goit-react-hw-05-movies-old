import { useNavigate, useLocation } from "react-router-dom";

import { ButtonBox } from './Button.styled';


export default function Button({ cast }) {
    const location = useLocation();
    const navigate = useNavigate();

    const onGoBack = () => {
        navigate(location?.state?.from ?? '/')
    }
    return (
        <>
            <ButtonBox type="button" onClick={ onGoBack }>Back</ButtonBox>
        </>

    )
}
