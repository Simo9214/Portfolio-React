function Projects() {

const progetti = [
    {
        titolo: 'ToDo App React',
        descrizione: 'Gestione attività con salvataggio su lacalStorage.',
        immagine: '/todo_preview.png',
        demo: 'https://tuo-link.vercel.app',
        codice: 'https://github.com/tuo-utente/todo-app'
    },
    {
        titolo: 'Portfolio HTML/CSS',
        descrizione: 'Portfolio responsive base con HTML, CSS ed animazioni leggere',
        immagine: '/portfolio-preview.png',
        demo: 'https://tuo-link.vercel.app',
        codice: 'https://github.com/tuo-utente/portfolio'
    },
    {
        titolo: 'Quiz Interattivo React',
        descrizione: 'App quiz a scelta multipla con punteggio e feedback visivo',
        immagine: '/quiz-preview.png',
        demo: 'https://tuo-link.vercel.app',
        codice: 'https://github.com/tuo-utente/react-quiz'
    },
];


    return (
        <section className="projects" id="projects">
        <h2>Progetti in Evidenza</h2>
        
        <div className="project-grid">
        {progetti.map((proj, index) => (
            <div className="project-card" key={index}>
            <img src={proj.immagine} alt={proj.titolo} />
            
            <h3>{proj.titolo}</h3>
            <p>{proj.descrizione} </p>

            <div className="project-links">
            
            <a href={proj.codice} target="_blank" rel="noreferrer">Codice GitHub</a>
            <a href={proj.demo} target="_blank" rel="noreferrer">Demo live</a>
        
            </div>
            </div>
        ))}
        </div>
        </section>
    );
}


export default Projects;