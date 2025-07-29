function Skills() {
    const competenze =['HTML5', 'CSS3 (Flexbox, Grid)', 'JavaScript ES6', 'React', 'Git & GitHub'];

    return (
        <section className="skills" id="skills">
        <h2>Competenze</h2>
        <ul>
            {competenze.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
        </section>
    );
}

export default Skills;