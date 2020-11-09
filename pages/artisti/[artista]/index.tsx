// Così è come si fa il dynamic routing
// io devo andare a sito/artisti/adasda
// Qualsiasi cosa metta dopo /artisti mi darà lo stesso risultato in 
// questo caso

import {useRouter} from 'next/router'

export default function ArtistName() {

    const router = useRouter();

    console.log(router.query.artista)
    function takeHome() {
        router.push('/')
    }
    return (
        <div>
            <h1>Prima artista: {router.query.artista}</h1>
            <button onClick={takeHome}>Home</button>
        </div>
    )
}