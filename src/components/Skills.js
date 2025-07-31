import '../styles/Skills.css';

function Skills() {
  const competenze = ['HTML5', 'CSS3 (Flexbox, Grid)', 'JavaScript ES6', 'React', 'Git & GitHub'];

  return (
    <section className="skills" id="skills">
      <h2>Competenze</h2>
      <div className="skill-grid">
        {competenze.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;