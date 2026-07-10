"use client";

import React, { useState } from "react";

const videos = [
  { id: "ejFcsKg8eE4", title: "Vídeo 1" },
  { id: "LH9atrU2ku4", title: "Vídeo 2" },
  { id: "mcD7289iXyY", title: "Vídeo 3" },
  { id: "qkiPdvJY0SI", title: "Vídeo 4" },
];

export default function Catalogo() {
  const [form, setForm] = useState({ user: "", pass: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.user === "aquablast" && form.pass === "aquablast!2025@") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-[#1B285E]">
            🔐 Acesso Restrito
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Usuário"
              value={form.user}
              onChange={(e) => setForm({ ...form, user: e.target.value })}
              className="w-full border rounded p-3"
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={form.pass}
              onChange={(e) => setForm({ ...form, pass: e.target.value })}
              className="w-full border rounded p-3"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#1B285E] hover:bg-[#141D46] text-white py-3 rounded-lg shadow-lg"
            >
              Entrar
            </button>
          </form>
          {error && <p className="text-red-600 text-center mt-4">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-40 pb-40">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-[#1B285E]">
          Catálogo de Vídeos
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
            >
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-64 md:h-80"
              ></iframe>
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-gray-800">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
