import '../styles/Projects.css';
function Projects() {
  const progetti = [
    {
      titolo: 'Portfolio Personale',
      descrizione: 'Un sito portfolio sviluppato con React per presentare le mie competenze.',
      link: 'https://github.com/mio-profilo/portfolio',
      demo: 'https://portfolio-demo.vercel.app/'
    },
    {
      titolo: 'App ToDo',
      descrizione: 'Applicazione per la gestione delle attività con salvataggio locale.',
      link: 'https://github.com/mio-profilo/todo-app',
      demo: 'https://todo-demo.vercel.app/'
    }
  ];

  return (
    <section className="projects">
      <h2>Progetti realizzati</h2>
      <div className="project-grid">
        {progetti.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.titolo}</h3>
            <p>{proj.descrizione}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Codice</a> |{' '}
            <a href={proj.demo} target="_blank" rel="noopener noreferrer">Demo Live</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
