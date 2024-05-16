import { LogoFoodExplorer } from "../Logo"
import { Container } from "./styles"

export const Footer = () => {
    const actualYear = new Date()

  return (
    <Container>
        <div>
            <LogoFoodExplorer/>
        </div>
            <p>© {actualYear.getUTCFullYear()} - Todos os direitos reservados.</p>
    </Container>
  )
}
