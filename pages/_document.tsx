// In questo documento viene definito il template di base che viene usato
// da Next.js. Sono cose visualizzabili in ogni pagina
// è un root file che controlla tutta l'applicazione, quindi da usare
// con attenzione per non rompere tutto
// Come si vede estende la classe Document, quindi sovrascrive i settaggi
// già presenti
// Il codice di document è eseguito solo sul server

import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property="custom" content="yolo"></meta>
                </Head>

                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}