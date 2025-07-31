import '../styles/CV.css';
function CV() {
  const cvFile = '/cv/cv-frontend.pdf';

  return (
    <section className="cv-section" id="cv">
      <h2>Il mio Curriculum Vitae</h2>
      <p>Scarica il mio CV in formato PDF:</p>
      <a href={cvFile} className="btn" download>Scarica il CV</a>
    </section>
  );
}

export default CV;