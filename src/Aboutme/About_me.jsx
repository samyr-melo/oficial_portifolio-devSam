import '../Aboutme/about.css'
import ImageDev from '../assets/IMG_5144 Copy.jpg'

function About() {
  return (
    <div className="about">
      <div className="about__text">
        <h1 className="about__titulo">
          Sobre <span>mim</span>
        </h1>
        <div className="about__paragrafo">
          <p>
            Graduando em Análise e Desenvolvimento de Sistemas, com uma base sólida em desenvolvimento web 
e uma paixão por JavaScript, React e Node.js, estou sempre em busca de novos desafios e 
oportunidades para aprimorar minhas habilidades, atualmente estou me especializando nos Hooks mais utilizados do React, como useState, Router, entre outros. 
Minha experiência no back-end abrange consumo de API's utilizando Express.js, Modelagem de Dados, permitindo-me contribuir em diversas etapas do ciclo de desenvolvimento de software. 
Sou proativo, estou sempre disposto a aprender e me adaptar a novas tecnologias e metodologias. Atualmente estou desenvolvendo habilidades em Banco de Dados, SQL.
Acredito que a colaboração e o trabalho em equipe são fundamentais para o sucesso de qualquer 
projeto, e me dedico a construir relacionamentos profissionais positivos e produtivos.
          </p>
        </div>
      </div>
      <div className="about__foto">
        <img className='foto' src={ImageDev} alt="" />
      </div>
    </div>
  );
}

export default About;
