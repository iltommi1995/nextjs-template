// Così è come si fa il dynamic routing
// io devo andare a sito/artisti/adasda
// Qualsiasi cosa metta dopo /artisti mi darà lo stesso risultato in 
// questo caso

import {useRouter} from 'next/router'

export default function ArtistName() {

    const router = useRouter();

    console.log(router.query.artista)

    return <h1>Artista</h1>
}