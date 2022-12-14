import { useRouter } from "next/router";
import Head from "next/head";

export default function Car({ car }) {
    const router = useRouter()
    const { id } = router.query // when the user queries on the url, return that query as id.
    
    // render the id value out to the template.
    return (<>
        <Head>
            <title>{car.color} {car.id}</title>
        </Head>
        <h1>{id}</h1> 
        <img src={car.image} />
    </>)
}

export async function getStaticProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}

export async function getStaticPaths() {

    const req = await fetch('http://localhost:3000/cars.json')
    const data = await req.json();

    const paths = data.map( car => {
        return { params: { id: car }}
    })

    return {
        paths,
        fallback: false
    };
}
