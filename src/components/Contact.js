
function Contact() {
    return (
        <form action="https://formspree.io/f/tuo-id" method="POST">
        <input type="text" name="name" placeholder="Il tuo nome" required  />
        <input type="email" name="email" placeholder="La tua email" required  />
        <textarea name="message" placeholder="Scrivi il tuo messaggio" required></textarea>
        <button type="submit">Invia</button>
        </form>     
    );   
}


export default Contact;