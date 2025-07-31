import '../styles/Certificazioni.css';

function Certificazioni() {
  const certificati = [
    'ECDL Full Standard - AICA',
    'React Developer Certificate - Riverloop',
    'Google Training - Google EMEA'
  ];

  return (
    <section className="certificazioni" id="certificazioni">
      <h2>Certificazioni</h2>
      <div className="cert-grid">
        {certificati.map((item, index) => (
          <div key={index} className="cert-item">{item}</div>
        ))}
      </div>
    </section>
  );
}

export default Certificazioni;