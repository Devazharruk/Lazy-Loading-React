"use client";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import Image from "next/image";
import img from "../public/next.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
export default function Home() {
  const url = "https://jsonplaceholder.typicode.com/photos";
  console.log(url);
  const [images, setimages] = useState([]);
  const getimages = () => {
    Axios.get(url).then((res) => {
      setimages(res.data);
    });
  };
  useEffect(() => {
    getimages();
  }, []);
  if (!images) {
    <h1>loading....</h1>;
  }
  return (
    <div className="gallery flex items-center justify-center w-[100%] flex-row gap-10 p-6 flex-wrap">
      {images.map((image) => {
        return (
          <LazyLoadImage
            effect="blur"
            key={image.id}
            src={image.url}
            alt={image.title}
            width="400px"
            height="500px"
            placeholderSrc={process.env.PUBLIC_URL + "../public/next.svg"}
          />
        );
      })}
    </div>
  );
}
