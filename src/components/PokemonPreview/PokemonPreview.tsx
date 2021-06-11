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
                        <Col md={2} xs={2} lg={2}>
                            <h6>{data.species.toUpperCase()}</h6>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2} xs={2} lg={1}>
                            <Image src={data.image} />
                        </Col>
                        <Col md={4} xs={8}>
                            <div>weight: {data.weight}</div>
                            <div>height: {data.height}</div>
                            <div>{data.types.map(t => getType(t))}</div>
                            <div>
                                <span>❤{data.baseStats.hp} </span>
                                <span>⚔{data.baseStats.attack} </span>
                                <span>🛡️{data.baseStats.defense} </span>
                                <span>⚡{data.baseStats.speed} </span>
                                <span>🔰{data.baseStats.specialdefense} </span>
                                <span>🗡️{data.baseStats.specialattack} </span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <a href={data.link} target='_blank' rel="noreferrer">Read more</a>
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