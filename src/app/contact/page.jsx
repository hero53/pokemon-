"use client";

import { useState } from "react";
import { showSuccess, showError } from "../../lib/alert";
import { sendContactMessage } from "../../actions/contact"; // adapte le chemin selon ton projet

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await sendContactMessage({ name, email, message });

    if (result.success) {
      showSuccess("Votre message a bien été envoyé !");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      showError(result.message || "Erreur inconnue");
    }
  };
  return (
    <main className="container py-5">
      <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Contactez-nous</h1>
          <p className="col-md-8 fs-4">
            Vous avez une question, une remarque ou une demande particulière ?
            Remplissez le formulaire ou utilisez les informations de contact
            ci-dessous.
          </p>
        </div>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-primary rounded-3">
            <h2>Formulaire de contact</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Jean Dupont"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Adresse email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="vous@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Écrivez votre message ici..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-light mt-2">
                Envoyer
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Nos coordonnées</h2>
            <p>
              <strong>Email :</strong> contact@exemple.com <br />
              <strong>Téléphone :</strong> +225 07 00 00 00 00 <br />
              <strong>Adresse :</strong> Abidjan, Côte d’Ivoire
            </p>
            <p>
              Nous sommes disponibles du lundi au vendredi, de 9h à 17h.
              N’hésitez pas à nous rendre visite ou à nous envoyer un message.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
