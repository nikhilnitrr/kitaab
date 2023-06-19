const ProductCard = ({book}) => {
    const {title, author, price, categoryName} = book;
    return <div style={{border: "1px solid black"}}>
        <div>Title: {title}</div>
        <div>Author: {author}</div>
        <div>Price: {price}</div>
        <div>Category: {categoryName}</div>
    </div>
}
export {ProductCard}