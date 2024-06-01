export default function Productid({ params }: { params: { productid: string } }) {
    return (
        <>
            <h1>Details Of Products {params.productid}</h1>
        </>
    )
}