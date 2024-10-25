import { notFound } from "next/navigation";



export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {

    if(parseInt(params.productId) > 1000){
        notFound()
    }
  return (
    <h1>
      Review {params.reviewId} of product {params.productId}
    </h1>
  );
}
