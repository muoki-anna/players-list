import Player from './Player';
import players from './Players'; 

const PlayerList = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    minHeight: '100vh'
  };

  const titleStyle = {
    width: '100%',
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>⚽ Football Players ⚽</h1>

      
      {players.map((player, index) => (
        <Player 
          key={index}
          {...player}  
        />
      ))}
    </div>
  );
};

export default PlayerList;
