import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {FormEvent, useState, ChangeEvent} from "react";
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectIsLoading, selectError} from '../../store/selectors/pokemonSelectors';
import {fetchByName} from '../../store/thunks/pokemonThunk';

function PokemonSearch() {
    const isLoading = useAppSelector(selectIsLoading);
    const error = useAppSelector(selectError);
    const dispatch = useAppDispatch();
    const [pokemonName, setPokemonName] = useState('');

    const onSubmit = (e: FormEvent): void => {
        e.preventDefault();
        dispatch(fetchByName(pokemonName));
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPokemonName(e.target.value);
    }

    return (
        <Form onSubmit={onSubmit}>
            <InputGroup hasValidation>
            <Form.Control
                onChange={onChange}
                disabled={isLoading}
                type="text"
                placeholder="Type the name of pokemon (pikachu, dragonite etc)"
                isInvalid={!!error}
            />
            {error && <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>}
            </InputGroup>
        </Form>
    )
}

export default PokemonSearch;