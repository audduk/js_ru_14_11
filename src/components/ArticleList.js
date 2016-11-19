import React  from 'react'
import CommentedArticle from './CommentedArticle'

function ArticleList(props) {
    const { articles } = props

    const articleItems = articles.map(article => <li key = {article.id}><CommentedArticle article = {article} /></li>)

    return (
        <ul>
            {articleItems}
        </ul>
    )
}

export default ArticleList