import { Container } from './style.js';

export function TextArea({ value, ...rest}) {
    return(
        <Container {...rest}>
            { value }
        </Container>
    )
}