import { notFound } from "next/navigation"

export default function ReviewId({ params }: { params: { productid: string, reviewid: string } })


//Adding the not found function

{
    if (parseInt(params.reviewid) > 1000) {
        notFound();
    }

    
    return (
        <>
            <h1>
                Review {params.reviewid} for product {params.productid}
            </h1>
        </>
    )
}