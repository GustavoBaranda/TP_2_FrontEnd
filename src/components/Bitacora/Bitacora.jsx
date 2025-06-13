import "./Bitacora.css";

const Bitacora = () => {
  const teamMembers = [
    {
      name: "Gustavo Baranda",
      role: "Frontend Developer",
      responsibilities:
        "Desarrollo de componentes UI, implementación de diseño responsive",
    },
    {
      name: "Catriel Escobar",
      role: "Backend Developer",
      responsibilities:
        "Integración de APIs, base de datos, estructuración del proyecto",
    },
    {
      name: "Marcelo Galimberti",
      role: "UI/UX Designer",
      responsibilities: "Diseño de interfaz, experiencia de usuario",
    },
    {
      name: "Eugenia Bava",
      role: "Project Manager",
      responsibilities: "Coordinación del equipo, seguimiento de tareas, diseño de presentación",
    },
  ];

  const methodology = {
    meetings: [
      "Anotaciones importantes y link`s de interes.",
      "Revisión de avances y obstáculos",
      "Planificación de próximas tareas",
    ],
    tools: [
      "GitHub para control de versiones",
      "Draw para bosquejos",
      "Discord para comunicación del equipo",
    ],
    practices: [
      "Manejo de ramas y versiones",
      "Code Review entre pares",
      "Documentación continua",
    ],
  };

  return (
    <div className="bitacora-container">
      <h1>Bitácora del Proyecto</h1>

      <section className="team-section">
        <h2>Roles del Equipo</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member-card">
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="responsibilities">{member.responsibilities}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="methodology-section">
        <h2>Metodología de Trabajo</h2>

        <div className="methodology-grid">
          <div className="methodology-card">
            <h3>Reuniones</h3>
            <ul>
              {methodology.meetings.map((meeting, index) => (
                <li key={index}>{meeting}</li>
              ))}
            </ul>
          </div>

          <div className="methodology-card">
            <h3>Herramientas</h3>
            <ul>
              {methodology.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="methodology-card">
            <h3>Prácticas</h3>
            <ul>
              {methodology.practices.map((practice, index) => (
                <li key={index}>{practice}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="organization-section">
        <h2>🚀 Organización del Trabajo</h2>
        <p>
          Para garantizar un desarrollo fluido y eficiente, adoptamos una
          metodología <strong>ágil</strong>, basada en la comunicación constante
          y la adaptabilidad. Las <strong>reuniones diarias</strong> fueron
          clave para mantener al equipo sincronizado y enfocado.
        </p>

        <div className="organization-benefits">
          <h3>¿Qué logramos con esta dinámica?</h3>
          <ul>
            <li>🛠️ Identificar y resolver obstáculos rápidamente</li>
            <li>🎯 Mantener al equipo alineado con los objetivos</li>
            <li>🤝 Fomentar la colaboración y el apoyo mutuo</li>
            <li>🔄 Ajustar prioridades según las necesidades del proyecto</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Bitacora;
