import React from "react"
import Product from "./Product"
import { ProductObject } from "@/types/type"

type Products = {
    products: ProductObject[]
}

export default function ProductFeed({ products }: Products) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 -mt- mx-auto">
            {products.map(
                ({
                    id,
                    title,
                    price,
                    description,
                    category,
                    image,
                    rating,
                }) => (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                        rating={rating}
                    />
                ),
            )}
        </div>
    )
}
