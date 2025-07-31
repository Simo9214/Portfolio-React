import '../styles/Testimonianze.css';
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
    <section className="testimonials">
      <h2>Feedback degli studenti</h2>
      <div className="testimonial-grid">
        {testimonianze.map((item, idx) => (
          <div key={idx} className="testimonial-card">
            <p>"{item.testo}"</p>
            <span>- {item.autore}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonianze;
