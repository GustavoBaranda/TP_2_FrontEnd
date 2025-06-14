import ImageGallery from '../ImageGallery/ImageGallery';
import './TeamMember.css';
import img1 from '../../assets/chetifabene.png';
import img2 from '../../assets/DescubriendoJardiMaternal.png';  
import img3 from '../../assets/lasverde.png'; 

const gustavo = [img1, img2, img3];
const TeamMember = ({ member }) => {
  // Get project images for the gallery
  const projectImages = {
    gustavo: gustavo,
  };

  return (
    <div className='team-member'>
      <div className='profile-header'>
        <div className='profile-image'>
          <img src={member.image} alt={member.name} />
        </div>
        <h2>{member.name}</h2>
      </div>

      <div className='profile-section'>
        <h3>Habilidades</h3>
        <ul className='skills-list'>
          {member.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className='profile-section'>
        <h3>Proyectos</h3>
        <ImageGallery images={projectImages.gustavo} />
      </div>

      <div className='profile-section'>
        <h3>Tecnologías</h3>
        <div className='tech-icons'>
          {member.technologies.map((tech) => (
            <div key={tech.name} className='tech-icon'>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
