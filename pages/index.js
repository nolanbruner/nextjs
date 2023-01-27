import { useState } from 'react';
import Box from '@mui/material/Box';
import styles from '../styles/Home.module.css';
import { Input } from '@mui/material';
import TaskBar from "../components/TaskBar"
import Animation from '../components/animation';
export default function Home() {
  const [animalInput, setAnimalInput] = useState('');
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ animal: animalInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResult(data.result);
      setAnimalInput('');
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <>
      {/* <TaskBar /> */}
      <div>Hello</div>
      {/* <main className="container">
        <div>
          <h3 className={styles.className}>Ask Me Anything</h3>
          <form onSubmit={onSubmit}>
            <Input
              sx={{ width: '40vw', color: "white" }}
              type="text"
              name="animal"
              placeholder="Enter an Question"
              value={animalInput}
              onChange={e => setAnimalInput(e.target.value)}
            />
            <Input type="submit" value="Generate Answer" sx={{ color: "white" }} />
          </form>
          <Box pt="30px"><h2>{result}</h2></Box>
        </div>
      </main> */}
    </>
  );
}
