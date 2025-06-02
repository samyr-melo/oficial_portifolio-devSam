import React from 'react';
import '../Footer/footer.css';
import {FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logodevsam from '../../assets/log2devsam.png';
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-section">
          <h2 className="footer__logo"><img className='logosamdev' src={Logodevsam} alt="" /></h2>
          <p className="footer__description">Soluções inovadoras para o seu negócio</p>
          <div className="footer__social">
            <a href="https://github.com/samyr-melo" aria-label="Github"><FaGithub /></a>
            <a href="https://www.instagram.com/med_sam7/?next=%2F&hl=pt-br" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/devsamyrmelo/" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h3 className="footer__title">Links Úteis</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre Nós</a></li>
              <li><a href="#">Serviços</a></li>
              <li><a href="#">Portfólio</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Serviços</h3>
            <ul>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Desenvolvimento</a></li>
              <li><a href="#">Marketing Digital</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__title">Contato</h3>
            <ul>
              <li>devsamyrmelo@gmail.com</li>
              <li>+55 (92) 99527-9430</li>
              <li>Planalto, Manaus - AM</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Empresa. Todos os direitos reservados.</p>
        <div className="footer__legal">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Serviço</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;