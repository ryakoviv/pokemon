import React, {ReactNode} from 'react';
import './Layout.scss';
import Header from '../Header';

export interface Props {
    children?: ReactNode;
}

function Layout(props: Props) {
    return (
        <div className="App">
            <Header/>
            {props.children}
        </div>
    );
}

export default Layout;