import React from 'react';

import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

import Navbar from '../layout/Navbar/Navbar'
import Card from '../layout/Cards/ServiceCard'
import Input from '../layout/form/input'
import Slider from '../layout/Slider/Slider'
import Footer from '../layout/Footer/Footer'
import About from '../layout/About/About'

import styles from './Home.module.css'

import logo from '../../img/logo.png'
import registro from '../../img/regularizar-imovel.webp'
import usucapiao from '../../img/usocapião.webp'
import contratos from '../../img/contratos.webp'
import distratos from '../../img/distrato.webp'
import lightLogo from '../../img/SÍMBOLO CLARO.webp'

import { FaSquareWhatsapp } from "react-icons/fa6";

export default function Home (){
    return (
        <>
        {/* whatsapp Icon */}
        <a className={styles.whatsapp} aria-label="Send message via whatsapp" href='/'> <FaSquareWhatsapp/></a>
        {/* Header e navbar */}
        <header className={styles.header}>
            < Navbar/>
        </header>
        {/* Main content of the page */}
        <div  id='home' className={styles.main}>
        {/* Slider carousel */}
            <Slider/>
            {/* About us section */}
            <div id='aboutUs'>
            <About  />
            </div>
                {/* Services Section */}
            <div id='services' className={styles.services}>
                <h2>Serviços Movai Advocacia</h2>
                {/* cards components */}
                <Fade direction='up' triggerOnce>
                <Card 
                link='/regularizacao'
                title='Registro e regularização de imóveis'
                img={registro} 
                />
                <Card 
                link='/usucapiao'
                title='Usucapião judicial e extrajudicial'
                description='Propriedade do imóvel oficial.'
                img={usucapiao} 
                />
                <Card 
                link='/contratos'
                title='Elaboração de contratos de vendas'
                description='Elaboração de contratos de vendas'
                img={contratos} 
                />
                <Card 
                link='/Distratos'
                title='Distratos imobiliários'
                description='Rescisão de contratos'
                img={distratos} 
                />
                </Fade >
            </div>
            {/* info section */}
            <div className={styles.info}>
                <Slide triggerOnce>
                <img src={lightLogo} alt="Logo movai"/>
                </Slide>
                <div>
                <h3>O QUE A REGULARIZAÇÃO DE IMÓVEIS SIGNIFICA NA VIDA DE UMA PESSOA</h3>
                <ul>
                    <li>Propriedade;</li>
                    <li>Possibilidade de financiamento;</li>
                    <li>Valorização do imóvel;</li>
                    <li>Possibilidade de adquirir linha de crédito;</li>
                    <li>Possibilidade de transmissão.</li>
                </ul>
                <h4>QUEM NÃO TEM REGISTRO NA MATRÍCULA DO IMÓVEL NÃO É PROPRIETÁRIO</h4>
                </div>
            </div>
            {/* contact section */}
            <div id='contact' className={styles.contact}>
                <h3 className={styles.title}>Entre em contato</h3>
                <form action="email sent">
                    <div className={styles.form_top}>
                    <div>
                    <label>Nome *</label>
                    <input type='text' name='name' placeholder='Insira seu nome' required/>
                    <label>Email *</label>
                    <input type='email' name='email' placeholder='Insira seu email' required/>
                    </div>
                    <div>
                    <Input 
                        Label='Telefone'
                        type='tel' 
                        name='phone' 
                        placeholder='Insira seu telefone'
                    />
                    <Input 
                        Label='Endereco'
                        type='text' 
                        name='endereco' 
                        placeholder='Insira seu endereço'
                    />
                    </div>
                    </div>
                    <div className={styles.subject}>
                    <Input 
                        Label='Assunto'
                        type='text' 
                        name='subject' 
                        placeholder='Insira o assunto'
                     />
                     <label>Mensagem</label>
                    <input className={styles.message} type='text' name='name' placeholder='Insira seu nome' required/>
                    <input className={styles.btn} type="submit" value='Enviar' />
                    </div>
                </form>
                <div className={styles.email_logo}>
                <h3>Entre em contato</h3>
                <p>Belém/PA</p>
                <p>movai.advocacia@gmail.com</p>
                <p>(91) 3060-8877 |  (91) 9 9993-9074 </p>
                <img src={logo} alt="movai advocacia"/>
                </div>
            </div>
        </div>
        {/* Footer */}
        <div className='footer'>
            < Footer/>
        </div>
        </>

    )
}