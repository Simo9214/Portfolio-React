
function Testimonianze() {
    const testimonianze = [
        {
            testo: "Il corso di Frontend è stato davvero utile, rendendo React accessibile anche a chi partiva da zero!",
            autore: "Luigia, studentessa"
        },
        {
            testo: "Grazie agli esempi pratici ho imparato davvero",
            autore: "Michele, studente"
        },
        {
            testo: "Una esperienza formativa e stimolante. Il portfolio che ho creato è ora online!",
            autore: "Nadia, studentessa"
        }
    ];

    return (
        <section className="testimonianze" id="testimonianze">
            <h2>Cosa dicono di me</h2>
            {testimonianze.map((item, index) => (
                <blockquote key={index} className="testimonial">
                    <p>"{item.testo}"</p>
                    <footer>- {item.autore}</footer>
                </blockquote>
            ))}
        </section>
    );
}

export default Testimonianze;