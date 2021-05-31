import React from 'react';
import './Layout.css';
import { Main } from './main/Main';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="layout">
                <Header></Header>
                <Main></Main>
                <Footer></Footer>
            </div>
        );
    }
}