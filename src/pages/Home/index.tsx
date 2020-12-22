import ButtonPattern from 'core/components/ButtonPattern';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';


const Home = () => (
    <div className="home-content">
        <div className="titulo-home">
            Desafio do Capítulo 3, Bootcamp DevSuperior
        </div>
        <div className="text-home">
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /><br />
            Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br /><br />
            Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: 
            <a className="link-mailto" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=antforfigma@gmail.com" target="blank"> antforfigma@gmail.com</a>
        </div>

        <Link to="/search">
        <ButtonPattern text="Começar"/>
        </Link>
    </div>

);

export default Home;