import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {

  const [players, setPlayer] = React.useState([])
  const [jogador, setJogador] = React.useState('')
  const [playersSort, setplayersSort] = React.useState([])
  

  function sortPlayerIndex() {
    return Math.floor(Math.random() * players.length);
  }

  const sortearJogadores = () => {
    while (players.length > 0) {
      let index = sortPlayerIndex();

      let old_players = players;
      let old_playSort = playersSort;

      old_playSort.push(players[index]);
      old_players.splice(index, 1);

      setPlayer(old_players);
      setplayersSort([...old_playSort]);
    }
  }

  return (
    <div className="App">
      <div>
        <TextField
          value={jogador}
          onChange={(e) => setJogador(e.target.value)}
          id="outlined-basic"
          label="Jogador"
          variant="outlined"
          size='small' />

        <Button variant="contained" onClick={() => {let oldArr = players; oldArr.push(jogador); setPlayer(oldArr); setJogador('');}}> Adicionar </Button>
      </div>

      <div>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
        <Button variant="contained" onClick={sortearJogadores} > Sortear </Button>

        <ul>
          {playersSort.map((player, index) => {

            if ((index+1) % 7 === 0) {
              return (
                <>
                  <li key={index}>{player}</li>
                  <li>----------------</li>
                </>
              )
            }else{
              return (
                <li key={index}>{player}</li>
              )
            }
          }
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
