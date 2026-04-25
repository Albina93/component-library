import React from "react";
import type { ProductDisplayProps } from "../../types";

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  return (
    <div className="productDisplay">
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} />}

      <h2 className="productTitle">{product.name}</h2>
      <p className="productPrice">${product.price}</p>
      {showDescription && <p className="productDesc">{product.description}</p>}
      {showStockStatus && (
        <p className="productStock">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
      )}
      {onAddToCart && (
        <button
          onClick={() => onAddToCart(product.id)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded"
        >
          Add to Cart
        </button>
      )}
      {children}
    </div>
  );
};
