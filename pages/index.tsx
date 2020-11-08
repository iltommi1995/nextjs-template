// index.js viene sempre riconosciuta come la home

// Posso importare i nome.module.css per definire gli stili dei 
// singoli moduli

import styles from '../styles/index.module.css';

// Qui si vede un esempio di JSX-style che è a livello component
export default function Home() {

  // JSX style utile perchè si possono usare le variabili
  const variabile = "red";

  return (
    <div>
      <h1 className={styles.titolo_verde}>Hello world</h1>  
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
