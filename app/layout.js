"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { useState, useEffect } from "react";
import requests from "@/Requests";
import axios from "../axios";
import MovieContext from "@/contexts/MovieContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Xmulty Ghana",
  description: "Stream All African Movies & TV Shows online",
};

export default function RootLayout({ children }) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <html lang="en">
      <MovieContext.Provider value={{ movie }}>
        <body className={montserrat.className}>
          <Navbar />
          {children}
        </body>
      </MovieContext.Provider>
    </html>
  );
}
