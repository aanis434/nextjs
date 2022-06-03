function ArticleListByCategory({ articles, category }) {
    return (
        <>
            <h1>Showing news for category <i>{category}</i> </h1>
            {
                articles.map(article => (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title}
                        </h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                ))
            }
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {
    console.log("Pre-render NewsArticleList by category")
    const { params, req, res, query } = context
    console.log('query: ', query)
    console.log('request from cookie: ', req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Vishwas'])
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)

    const data = await response.json()

    return {
        props: {
            articles: data,
            category,
        }
    }
}