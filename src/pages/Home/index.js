import React from "react";
import './styles.css';
import poligono from '../../assets/polygon.svg';
import imgMenu from '../../assets/img_inicio.png';
import retangulo from '../../assets/retangulo.png';
import ti from '../../assets/ti.svg';
import otimizacao from '../../assets/otimizacao.svg';
import manutencao from '../../assets/manutencao.svg';

export default function Home() {
    return (
        <div id="home">
            <img src={retangulo} alt="fundo2" className="fundo2"></img>
            <img src={imgMenu} alt="fundo" className="fundo"></img>
            <section className="text-menu">
                <p>SOMOS ESPECIALISTAS EM TE AJUDAR COM A MELHOR SOLUÇÃO E SUPORTE PARA VOCÊ E PARA O SEU COMPUTADOR</p>
                <p>FALE CONOSCO AGORA MESMO E CONHEÇA TODOS OS SERVIÇOS E CONSULTORIA DISPONÍVEIS PARA VOCE</p>
            </section>
            <section className="menu menu-content">
                <nav className="logo">
                    <img src={poligono} alt="poligono" className="poligono"></img>
                    <h2 className="logo-name"><a href="#home" className="home">ALT TAB</a></h2>
                </nav>
                <nav className="menu-services">
                    <ul>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="">Contato</a></li>
                        <li><button>Abrir um chamado</button></li>
                    </ul>
                </nav>
            </section>
            
            <section id="services" className="services-container">
                    <div className="flex-item">
                    <container className="rectangle-icon"><img src={ti} alt='ti' className="icon"></img></container>                    
                    <h3>Suporte T.I</h3>
                    <p>Reparos, assistência técnica, prestação de serviços corretivos e preventivos
                        em computadores e notebooks e auxílio à instalação de softwares</p>
                </div>
                <div className="flex-item">
                    <container className="rectangle-icon"><img src={otimizacao} alt='otim' className="icon"></img></container> 
                    <h3>Otimização</h3>
                    <p>Melhoramento de desemprenho do computador que está lento ou travando</p>
                    
                </div>
                <div className="flex-item">
                    <container className="rectangle-icon"><img src={manutencao} alt='manu' className="icon"></img></container>
                    <h3>Manutenção Preventiva e Corretiva</h3>
                    <p>Assistência técnica para seu computador</p>
                </div>
                </section>
                <h3 className="como-funciona">Como Funciona ?</h3>
                <section className="services-container-2">
                <div className="flex-item-2">
                    <container className="back-text">
                        <h3>Abra um chamado</h3>
                        <img alt='whats'></img>
                        </container>                   
                </div>
                <div className="flex-item-2">
                    <container className="back-text"><h3>Realize o pagamentro</h3></container>
                </div>
                <div className="flex-item-2">
                    <container className="back-text"><h3>Acompanhe seu serviço</h3></container>
                </div>
                </section>
        </div>

    );
}