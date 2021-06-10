import Form from "react-bootstrap/Form";
import {FormEvent} from "react";
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {selectIsLoading} from '../../store/selectors/pokemonSelectors';
import {fetchByName} from '../../store/thunks/pokemonThunk';

function PokemonSearch() {
    const isLoading = useAppSelector(selectIsLoading);
    const dispatch = useAppDispatch();

    const onSubmit = (e: FormEvent): void => {
        e.preventDefault();
        dispatch(fetchByName('test'));
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Control disabled={isLoading} type="text" placeholder="Search Pokemon" />
        </Form>
    )
}

export default PokemonSearch;