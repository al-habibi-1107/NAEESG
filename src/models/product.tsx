import React from "react";
import { useState } from "react";

class Product {
  id: number;
  name: string;
  category: Category;
  price: number;
  description?: string;
  imgUrl?: string;

  constructor(id: number, name: string, category: Category, price: number, description?: string,imgUrl?:string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
    this.imgUrl = imgUrl;
  }

  displayProductDetails(): string {
    return `${this.name} - ${this.category} - $${this.price.toFixed(2)}`;
  }
}

const ProductComponent: React.FC = () => {
  const [products] = useState<Product[]>([
    new Product(1, "Miniature Circuit Breaker", Category.MCB, 20.99, "MCB 6000A 1P 240/415 V AC","/1PMCCB.png"),
    new Product(2, "Miniature Circuit Breaker", Category.MCB, 20.99, "MCB 6000A 2P 415 V AC","/2PMCCB.png"),
    new Product(3, "Miniature Circuit Breaker", Category.MCB, 20.99, "MCB 6000A 3P 415 V AC","/3PMCCB.png"),
    new Product(4, "Residual Current Circuit Breaker", Category.RCCB, 45.5, "RCCB 30mA 25A 2P","/2PRCCB.png"),
    new Product(5, "Residual Current Circuit Breaker", Category.RCCB, 45.5, "RCCB 30mA 40A 2P","/2PRCCB.png"),
    new Product(6, "Residual Current Circuit Breaker", Category.RCCB, 45.5, "RCCB 30mA 40A 4P","/4PRCCB.png"),
    new Product(6, "Automatic Changeover and Current Limiter", Category.ACCL, 45.5, "ACCL 2A 4MW 5TR44650RC02","/ACCL.png"),
  ]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.displayProductDetails()}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductComponent;


enum Category {
    MCB = 1,
    RCCB = 2,
    ACCL = 3,
    ISOLATOR = 4,
    DB = 5,
    WIRES = 6
  }