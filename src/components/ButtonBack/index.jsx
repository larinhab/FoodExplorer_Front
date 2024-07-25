import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
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
            <FiArrowLeft></FiArrowLeft>
            <p>Voltar</p>
        </Container>
    )
}