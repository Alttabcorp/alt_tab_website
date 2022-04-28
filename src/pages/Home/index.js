import React from "react";
import './styles.css';
import poligono from '../../assets/polygon.svg';
import imgMenu from '../../assets/img_inicio.png';
import retangulo from '../../assets/retangulo.png'

export default function Home() {
    return (
            <div>
                <img src={retangulo} alt="fundo2" className="fundo2"></img>
                <img src={imgMenu} alt="fundo" className="fundo"></img>
                <section className="menu menu-content">
                <nav className="logo">
                    <img src={poligono} alt="poligono"></img>
                    <h2 className="logo-name">ALT TAB</h2>
                </nav>
                <nav className="menu-services">
                    <ul>                    
                        <li><a href="#">Serviços</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><button>Abrir um chamado</button></li>
                    </ul>
                </nav>
            </section>
            </div>
    );
}