import { useRouter } from 'next/router';

function ProductDetails({ product }) {
    // if blocking fallback state don't need 
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            <h2>{product.id} - {product.title} - {product.price}</h2>
        </>
    )
}

export default ProductDetails;

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { productId: '1' }
            },
            {
                params: { productId: '2' }
            },
            {
                params: { productId: '3' }
            },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const { params } = context
    console.log('Generating / Regenerating Product Details', params.productId)
    const res = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await res.json()

    if (!data.id) {
        return {
            notFound: true
        }
    }

    return {
        props: { product: data },
        revalidate: 10,
    }
}