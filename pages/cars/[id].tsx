import { useRouter } from "next/router";

export default function Car() {
    const router = useRouter()
    const { id } = router.query // when the user queries on the url, return that query as id.

    return <h1>{id}</h1> // render the id value out to the template.
}
