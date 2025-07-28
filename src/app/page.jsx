"use client";

import React, { useState, useEffect } from "react";
import HomeCard from "./HomeComponents";
import allPokemons from "../data/pokemon"; // import local

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 12;
  const maxTotal = allPokemons.length;

  const fetchPokemons = () => {
    if (pokemons.length >= maxTotal) return;

    setLoading(true);
    // Simuler le délai réseau pour une UX fluide
    setTimeout(() => {
      const nextBatch = allPokemons.slice(offset, offset + limit);
      setPokemons((prev) => [...prev, ...nextBatch]);
      setLoading(false);
    }, 500); // délai simulé
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (nearBottom && !loading && pokemons.length < maxTotal) {
        setOffset((prev) => prev + limit);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, pokemons.length]);

  return (
    <main>
      <div className="album py-5 bg-success-subtle">
        <div className="container">
          <div className="row">
            {pokemons.map((pokemon, index) => (
              <div key={`${pokemon.pokedex_id}-${index}`} className="col-md-3 mb-4">
                <HomeCard pokemon={pokemon} />
              </div>
            ))}
          </div>

          {loading && (
            <div className="row">
              {Array.from({ length: 8 }).map((_, i) => (
                <div className="col-md-3 mb-4" key={i}>
                  <div className="card" aria-hidden="true">
                    <div className="card-img-top placeholder-glow">
                      <span
                        className="placeholder col-12"
                        style={{ height: "180px", display: "block" }}
                      ></span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                      </h5>
                      <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                      </p>
                      <a
                        href="#"
                        className="btn btn-primary disabled placeholder col-6"
                      ></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
