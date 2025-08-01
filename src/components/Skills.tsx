import './Skills.css'; // we'll create this for animation

function Skills() {
  const skills = [
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" },
    { name: "Your Skill", icon: "skill.png" }
  ];

  return (
    <section className="py-3 mb-5 text-center animate__animated animate__fadeInUp gray-bg">
      <h2 className="text-dark mb-4">Skills</h2>
      <div className="skills-ticker-wrapper">
        <div className="skills-ticker">
          {[...skills, ...skills].map((skill, i) => (
            <div className="skill-item" key={i}>
              <img src={`/skills/${skill.icon}`} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
