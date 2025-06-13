import TeamCard from '../TeamCard/TeamCard';
import './Presentation.css';

const teamMembers = [
  {
    name: 'Catriel Escobar',
    image: 'https://avatars.githubusercontent.com/u/125727012?v=4',
  },
  {
    name: 'Gustavo Baranda',
    image: 'https://avatars.githubusercontent.com/u/99224470?v=4&size=64',
  },
  {
    name: 'Marcelo Galimberti',
    image: 'https://mgalim.github.io/front-PFO2/img/avatar.webp',
  },
  {
    name: 'María Eugenia Bava',
    image: 'https://st2.depositphotos.com/1013522/49971/v/450/depositphotos_499715224-stock-illustration-beautiful-woman-face-profile-picture.jpg',
  },
];

const Presentation = () => {
  return (
    <div className='presentation'>
      <h1>Nuestro Equipo</h1>
      <div className='team-grid'>
        {teamMembers.map((member) => (
          <TeamCard key={member.name} name={member.name} image={member.image} />
        ))}
      </div>
    </div>
  );
};

export default Presentation;