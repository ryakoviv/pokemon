import Form from "react-bootstrap/Form";
import {FormEvent} from "react";

function PokemonSearch() {
    const onSubmit = (e: FormEvent): void => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Control type="text" placeholder="Search Pokemon" />
        </Form>
    )
}

export default PokemonSearch;