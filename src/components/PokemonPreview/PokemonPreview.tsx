import {useAppSelector} from "../../store/hooks";
import {selectIsLoading, selectData} from "../../store/selectors/pokemonSelectors";
import Loader from "../Loader";
import {Col, Row, Container, Image, Badge} from "react-bootstrap";
import './PokemonPreview.scss';

function PokemonPreview() {
    const isLoading = useAppSelector(selectIsLoading);
    const data = useAppSelector(selectData);

    const getType = (type: string) => (<Badge key={type} variant='primary'>{type}</Badge>);

    const getPokemon = () => {
        if (!data) {
            return <></>
        }

        return (
            <>
                <Container>
                    <Row>
                        <Col md={1}>
                            <Image src={data.image} />
                        </Col>
                        <Col md={3}>
                            <h6>{data.species.toUpperCase()}</h6>
                            <div>weight: {data.weight}</div>
                            <div>height: {data.height}</div>
                            <div>{data.types.map(t => getType(t))}</div>
                        </Col>
                    </Row>
                </Container>
            </>
    )};

    return (
        <div>
            {isLoading ? <Loader/> : getPokemon() }
        </div>
    );
}

export default PokemonPreview;