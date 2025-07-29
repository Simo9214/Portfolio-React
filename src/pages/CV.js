function CVPage() {
    return (
        <main className="page cv-page">
        <h2> Il mio Curriculum Vitae</h2>
        <p>Puoi scaricare il mio CV in formato PDF cliccando qui sotto:</p>

        <a href="/cv-frontend.pdf" download className="btn">
        Scarica il CV
        </a>

       <div className="cv-preview">
       <iframe 
       src="/cv-frontend.pdf"
       title="Anteprima CV"
       width="100%"
       height="600px">
       </iframe>
       </div>
        </main>
        
    );
}

export default CVPage;