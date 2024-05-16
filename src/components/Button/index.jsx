import { Container } from "./styles";

export function Button({ title, icon: Icon, loading = false, ...rest}) {
    return (
        <Container 
            type="button" 
            disabled={loading}
            {...rest}
            >
                {Icon && <Icon size={32} />}
                { loading ? 'Carregando...' : title }
        </Container>
    )
}