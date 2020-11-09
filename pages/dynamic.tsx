import { GetStaticProps } from "next";
import path from 'path'
// Questa funzione è eseguita nel server
export const getStaticProps : GetStaticProps = async context => {

    const fs = require('fs');
    const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf8')
    return {
        // con revalidate si dice che ogni tot second nextjs deve provare
        // a ricreare questo file con dati aggiornati, ovvero esegue
        // la funzione getStaticProps sul server, questo si può fare in 
        // production, non in sviluppo
        revalidate: 10,
        props: {
            prova: txt
        }
    }
}


// Questa funzione è eseguita sul server e sul client

export default function Dynamic(props) {
    return <h1>Dynamic {props.prova}</h1>
}