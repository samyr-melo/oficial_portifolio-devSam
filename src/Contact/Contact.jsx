import "../Contact/contact.css";

function Contact() {
  return (
    <div className="contact__container">
      <h1><span>Entre em contato</span></h1>
      <form className="contact__form">
        <div className="form__group">
          <label htmlFor="nome">Seu nome</label>
          <input
            type="text"
            className="form__input"
            id="nome"
            placeholder="Digite seu nome"
          />
        </div>

        <div className="form__group">
          <label htmlFor="email">Seu email</label>
          <input
            type="email"
            className="form__input"
            id="email"
            placeholder="Digite seu email"
          />
        </div>

        <div className="form__group">
          <label htmlFor="mensagem">Sua mensagem</label>
          <textarea
            className="form__textarea"
            id="mensagem"
            rows="5"
            placeholder="Digite sua mensagem"
          ></textarea>
        </div>

        <button type="submit" className="form__button">
          Enviar mensagem
        </button>
      </form>
    </div>
  );
}

export default Contact;
