import React from "react"
import Banner from "@/components/core/Banner"
import Header from "@/components/core/Header"
import ProductFeed from "@/components/core/ProductFeed"
import { ProductObject } from "@/types/type"

export default async function Home() {
    const database_url =
        "https://petza-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"

    const res = await fetch(database_url, { next: { revalidate: 60 } })
    const data = await res.json()

    const products: ProductObject[] = Array.isArray(data) ? data : []

    return (
        <div className="bg-white">
            {/*Header*/}
            <Header />

            <main className="max-w-screen-xl mx-auto">
                {/* Banner */}
                <Banner />

                {/* Product Feed */}
                <ProductFeed products={products} />
            </main>
        </div>
    )
}

// GET >>>> "https://petza-ecom-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
