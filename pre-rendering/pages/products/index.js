import Link from 'next/link';

function ProductList({ products }) {
    return (
        <>
            <h3>Product List</h3>
            {products.map((product) => (
                <div key={product.id}>
                    <Link href={`/products/${product.id}`} passHref>
                        <p>{product.id} - {product.title} - {product.price}</p>
                    </Link>
                    <hr />
                </div>
            ))
            }
        </>
    )
}

export default ProductList;

export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList')
    const res = await fetch("http://localhost:4000/products")
    const data = await res.json()

    return {
        props: { products: data },
        revalidate: 10,
    }
}     