import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles.js";


export function ButtonBack() {
    const navigate = useNavigate()

    function handleBack(){
        navigate(-1)
    }

    return (
        <Container 
        to="/"
        onClick={ handleBack }>
            <MdKeyboardArrowLeft/>
            <p>voltar</p>
        </Container>
    )
}