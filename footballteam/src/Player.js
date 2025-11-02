import { Card } from 'react-bootstrap';

// Destructuring props in the function parameters
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Inline styling object
  const cardStyle = {
    width: '18rem',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer'
  };

  const imageStyle = {
    height: '250px',
    objectFit: 'cover'
  };

  const jerseyStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '5px 15px',
    borderRadius: '20px',
    display: 'inline-block',
    fontWeight: 'bold'
  };

  return (
    <Card style={cardStyle} className="player-card">
      <Card.Img 
        variant="top" 
        src={imageUrl} 
        alt={name}
        style={imageStyle}
      />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>
          {name}
        </Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team}
          <br />
          <strong>Nationality:</strong> {nationality}
          <br />
          <strong>Age:</strong> {age}
          <br />
          <div style={{ marginTop: '10px' }}>
            <span style={jerseyStyle}>#{jerseyNumber}</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Free Agent",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/400x500?text=No+Image"
};

export default Player;