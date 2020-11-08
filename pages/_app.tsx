// Questo documento è responsabile del render di tutte le pagine
// ha due parametri: component e pageProps. 
// pageProps sono le proprietà passate al componente 
// In sostanza quetso è l'endpoint per aggiornare le pagine
// Questa funzione è eseguita sia sul server che sul client
// In document.tsx invece il codice è eseguito solo sul server

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
