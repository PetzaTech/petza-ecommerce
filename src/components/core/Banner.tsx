/* eslint-disable @next/next/no-img-element */
"use client"

import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const slides = [
    "/slide1.webp",
    "/slide2.webp",
    "/slide3.webp",
    "/slide4.webp",
    "/slide5.webp",
    "/slide6.webp",
    "/slide8.webp",
    "/slide9.jpg",
]

function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
                showArrows
            >
                {slides.map((src, index) => (
                    <div key={index} className="h-full">
                        <img
                            src={src}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Banner
