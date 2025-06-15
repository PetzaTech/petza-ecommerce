"use client"

import Image from "next/image"
import React, { useState } from "react"
import { StarIcon } from "@heroicons/react/24/solid"
import Currency from "react-currency-formatter"

type Props = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}

function Product({
    title,
    price,
    description,
    category,
    image,
    rating,
}: Props) {
    const [isExclusive] = useState(Math.random() < 0.3)

    return (
        <div className="relative flex flex-col m-5 bg-gray-100 z-30 p-10 rounded-xl shadow-xl">
            <p className="absolute top-2 right-2 text-xs text-gray-800 line-clamp-1 mx-4 ml-10">
                {category}
            </p>

            <Image
                src={image}
                height={300}
                width={300}
                alt="Product Image"
                objectFit="contain"
                className="mx-auto"
            />

            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating.rate)
                    .fill(null)
                    .map((_, i) => (
                        <StarIcon key={i} className="h-5 text-amber-500" />
                    ))}
            </div>

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5 ">
                <Currency quantity={price} currency="INR" />
            </div>

            {isExclusive && (
                <div className="flex items-center space-x-2 -mt-3">
                    <span className="bg-blue-600 text-white font-bold p-1 rounded-full text-xs">
                        🌟Exclusive🌟
                    </span>
                </div>
            )}

            <button className="mt-2 button">Add to Basket</button>
        </div>
    )
}

export default Product
