// Questa struttura permette di far sì che la pagina sia sempre accessibile
// a nomesito/pagina1, solo che con un'organizzazione a cartelle
// che permette di ordinare meglio i file.
// index.tsx sarà il file che verrà richiamato col percorso nomesito/pagina1

import styles from './styles.module.scss';

export default function Page1() {

    return(
        <h1 className={styles.red}>Pagina 1</h1>
    )
}