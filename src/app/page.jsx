'use client';

import React, { useState, useEffect } from "react";
import HomeCard from "./HomeComponents";


export default function Home() {
   const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 30;
  const maxTotal = 1025;

  const fetchPokemons = async () => {
    if (pokemons.length >= maxTotal) return;

    setLoading(true);
    try {
      const res = await fetch(
        `https://tyradex.vercel.app/api/v1/pokemon?limit=${limit}&offset=${offset}`
      );
      const data = await res.json();
      const dataWithoutFirst = data.slice(1); // utile si tu veux éviter le doublon au début

      setPokemons((prev) => [...prev, ...dataWithoutFirst]);
    } catch (error) {
      console.error("Erreur fetch Pokémon:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemons();
  }, [offset]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;

      const hasMore = pokemons.length < maxTotal;

      if (nearBottom && !loading && hasMore) {
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
            {pokemons.map((pokemon,index) => (
              <div key={`${pokemon.pokedex_id} - ${index}`} className="col-md-3 mb-4">
                <HomeCard pokemon={pokemon} />
              </div>
            ))}
          </div>
          {loading && <p>Chargement...</p>}
        </div>
      </div>
    </main>
  );
}
