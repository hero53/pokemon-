"use client"; // si tu veux utiliser un hook React côté client

import Link from "next/link";
import clsx from "clsx";
import fallbackImage from "../../../../public/asset/pokemon/regular.png";


import React, { useState, useEffect } from "react";
// import "./style.css";

export default function CreatePokemon() {
  return (
    <div className="container py-2">
      <div className="p-4 mb-2 bg-body-tertiary rounded-3">
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src={fallbackImage.src}
                className="card-img-top"
                alt="..."
              ></img>
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bold">
                "nom"
              </h1>
              <div className="genre mb-2">
                <span className="h3 text-success">Genre</span>
                <div className="d-flex">
                  {/* {pokemon?.types?.map((type, index) => (
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
                  ))} */}
                </div>
              </div>
              <div className="Stat mb-2">
                <span className="h3 text-success">Statistique</span>
                
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-between align-items-center w-100">
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
        </div> */}
      </div>
    </div>);
}
