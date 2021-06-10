import React, {ReactNode} from 'react';
import './Layout.scss';
import Header from '../Header';
import Container from 'react-bootstrap/Container'

export interface Props {
    children?: ReactNode;
}

function Layout(props: Props) {
    return (
        <>
            <Header/>
            <Container>
                {props.children}
            </Container>
        </>
    );
}

export default Layout;