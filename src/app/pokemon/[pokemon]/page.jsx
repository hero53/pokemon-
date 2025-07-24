"use client"; // si tu veux utiliser un hook React côté client

import { useParams } from "next/navigation";
import fallbackImage from "../../../../public/asset/pokemon/regular.png";
import { StatBar } from "./Pokemon";
import Link from "next/link";
import clsx from "clsx";


import React, { useState, useEffect } from "react";
// import "./style.css";

import HomeCard from "@/app/HomeComponents";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]); // Initialize as null for single Pokémon
  const [loading, setLoading] = useState(false); // Add loading state
  const params = useParams();
  // Extract the 'id' parameter from the URL

  const findPokemon = async () => {
    console.log("params", params);

    setLoading(true);
    try {
      const res = await fetch(
        `https://tyradex.vercel.app/api/v1/pokemon/${params.pokemon}`
      );
      const data = await res.json();
      setPokemon(data); // Update state with fetched data
    } catch (error) {
      console.error("Erreur fetch Pokémon:", error);
    } finally {
      setLoading(false); // Ensure loading is set to false after fetch
    }
  };

  // Fetch Pokémon data when component mounts or 'id' changes
  useEffect(() => {
    findPokemon();
  }, []);
  const pokemonTypes = pokemon?.types;
  // return <HomeCard pokemon={pokemon} />
  return (
    <div className="container py-2">
      <div className="p-4 mb-2 bg-body-tertiary rounded-3">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src={pokemon?.sprites?.regular ?? fallbackImage.src}
                className="card-img-top"
                alt="..."
              ></img>
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bold">
                {pokemon?.name?.fr ?? "Nom en charge..."}
              </h1>
              <div className="genre mb-2">
                <span className="h3 text-success">Genre</span>
                <div className="d-flex">
                  {pokemon?.types?.map((type, index) => (
                    <div key={index} className="text-center mx-2">
                      <img
                        src={type.image}
                        width={50}
                        height={50}
                        className="d-block mx-auto mb-1"
                        alt={type.name}
                      />
                      <small className="text-muted fw-bold">{type.name}</small>
                    </div>
                  ))}
                </div>
              </div>
              <div className="Stat mb-2">
                <span className="h3 text-success">Statistique</span>
                <StatBar
                  label="Attaque"
                  value={pokemon?.stats?.atk}
                  color="danger"
                />
                <StatBar
                  label="Speciale Attaque"
                  value={pokemon?.stats?.spe_atk}
                  color="dark"
                />
                <StatBar
                  label="Defense"
                  value={pokemon?.stats?.def}
                  color="succes"
                />
                <StatBar
                  label="Speciale Defense"
                  value={pokemon?.stats?.spe_def}
                  color="info"
                />
                <StatBar
                  label="Vitesse"
                  value={pokemon?.stats?.vit}
                  color="warning"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center w-100">
          <Link
            href={`/pokemon/${parseInt(params.pokemon)  - 1}`}
            className={clsx("btn btn-lg bd-lg btn-primary", parseInt(params.pokemon) == 1 ? "disabled" :"")}
          >
            Précedent
          </Link>

          <Link
            href={`/pokemon/${parseInt(params.pokemon)   + 1}`}
            className="btn btn-lg bd-lg btn-primary"
          >
            Suivant
          </Link>
        </div>
      </div>
    </div>
  );
}
