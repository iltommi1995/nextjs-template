import {useRouter} from 'next/router'

export default function ProvaSintolo() {
    const router = useRouter();

    console.log(router.query);

    return <h1>Hello</h1>
}