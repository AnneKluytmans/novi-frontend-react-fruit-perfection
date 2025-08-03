import citroenen from "../assets/fruit/citroenen.jpeg";

function Product(props) {
    return (
        <article className="product">
            <img src={props.image} alt={props.title}/>
            <h2 className="product-name">{props.title}</h2>
            <p className="product-description">{props.description}</p>
        </article>
    );
}

export default Product;