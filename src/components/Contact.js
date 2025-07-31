import '../styles/Contact.css';


function Contact() {
  return (
    <section className="contact-section">
      <h2>Contattami</h2>
      <p>Hai un progetto o una domanda? Scrivimi usando il modulo qui sotto.</p>
      <form className="contact-form" action="https://formspree.io/f/tuo-id" method="POST">
        <div className="form-group">
          <input type="text" name="name" placeholder="Il tuo nome" required />
          <input type="email" name="email" placeholder="La tua email" required />
        </div>
        <textarea name="message" placeholder="Scrivi il tuo messaggio" required></textarea>
        <button type="submit">Invia</button>
      </form>
    </section>
  );
}

export default Contact;
