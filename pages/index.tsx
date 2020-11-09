// index.js viene sempre riconosciuta come la home

// Posso importare i nome.module.css per definire gli stili dei 
// singoli moduli

import { useState } from 'react';
import styles from '../styles/index.module.css';

import Link from 'next/link'

import jwt from 'jsonwebtoken'

// Qui si vede un esempio di JSX-style che è a livello component
export default function Home() {

  // JSX style utile perchè si possono usare le variabili
  const variabile = "red";

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const[message, setMessage] = useState<string>('You are not logged in')

  async function submitForm() {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({ username, password})
      }).then((t) => t.json())

      const token = res.token;

      if(token) {
        const json = jwt.decode(token) as {[key: string]: string};

        console.log(json)
        setMessage(`Welcome ${json.username} and you are ${json.admin ? 'an admin!' : 'not an admin'}`)
      } else {
        setMessage('Something went wrong');
      }
  }

  return (
    <div>
      <h1 className={styles.titolo_verde}>Hello world</h1>  
      <h2>{message}</h2>
      <form>
        <input type="text" name="username" value={username} onChange= {e => setUsername(e.target.value)} />
        <br/>
        <input type="password" name="password" value={password} onChange= {e => setPassword(e.target.value)} />
        <br />
        <input type="button" value="Login" onClick={submitForm}/>
      </form>
      <br/>
      <br/>
      <h2>
        <Link href="/pagina2">
          <a>Vai alla seconda pagina</a>
        </Link>
      </h2>
      <style jsx> 
      {`
          .title {
            color: ${variabile};
          }
      `}
      </style>
    </div>
  )
}
