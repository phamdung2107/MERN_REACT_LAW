import { Link } from "react-router-dom";


function ProductCard({ post }) {

  return (
    <>
      <Link className="ProductCard" style={{width: "30vmax"}} to={`/post/${post._id}`}>
        <img
          src={post.images[0].url}
          alt={post.name}
          style={{width: "30vmax"}}
          className="ProductImg"
        />
        <p className="productName">{post.name}</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="offerPriceBox">
            <span className="p__Price">{`${post.trichdan}`}</span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
