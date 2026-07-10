"use client";

import { useState } from "react";
import { MessageCircle, Phone, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Contato() {
    const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setSuccess("Mensagem enviada com sucesso! 🚀");
                setForm({ nome: "", email: "", mensagem: "" });
            } else {
                setSuccess("Erro ao enviar. Tente novamente.");
            }
        } catch (error) {
            console.error(error);
            setSuccess("Erro inesperado.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-16">
            <section className="py-20 bg-gradient-to-r from-[#1B285E]/90 to-[#2B3D94]/90 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center">
                        Contato
                    </h2>
                    <p className="text-lg opacity-90 mb-12 text-center">
                        Entre em contato com a equipe <strong>Aquablast®</strong> de forma rápida e direta.
                    </p>

                    {/* Grid duas colunas */}
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Coluna esquerda: formulário */}
                        <form
                            onSubmit={handleSubmit}
                            className="bg-white text-black shadow-xl rounded-lg p-6 space-y-4"
                        >
                            <input
                                type="text"
                                name="nome"
                                value={form.nome}
                                onChange={handleChange}
                                placeholder="Nome"
                                className="w-full border p-3 rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="E-mail"
                                className="w-full border p-3 rounded"
                                required
                            />
                            <textarea
                                name="mensagem"
                                value={form.mensagem}
                                onChange={handleChange}
                                placeholder="Mensagem / Solicitação de Orçamento"
                                className="w-full border p-3 rounded h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#1B285E] hover:bg-[#141D46] text-white py-3 rounded shadow-lg disabled:opacity-60"
                            >
                                {loading ? "Enviando..." : "Enviar"}
                            </button>
                            {success && (
                                <p className="text-sm text-center mt-2 text-[#1B285E] font-medium">{success}</p>
                            )}
                        </form>

                        {/* Coluna direita: contatos */}
                        <div className="space-y-8 text-center md:text-left">
                            <div className="flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                                {[
                                    { href: "https://wa.me/5521991239221", label: "(21) 99123-9221", color: "#25D366", icon: MessageCircle },
                                    { href: "https://wa.me/5521970355775", label: "(21) 97035-5775", color: "#25D366", icon: MessageCircle },
                                    { href: "tel:+5521988887777", label: "(21) 98888-7777", color: "#0A66C2", icon: Phone },
                                    { href: "https://instagram.com/aquablastbrasil", label: "@aquablastbrasil", color: "#E1306C", icon: Instagram },
                                ].map(({ href, label, color, icon: Icon }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-3 text-white/90 hover:opacity-90"
                                    >
                                        <Icon size={24} style={{ color }} />
                                        <span className="text-sm md:text-base">{label}</span>
                                    </motion.a>
                                ))}
                            </div>

                            <p className="text-white/90 mt-6">
                                📂 Catálogo e vídeos explicativos:{" "}
                                <a
                                    href="/catalogo"
                                    className="underline font-semibold hover:text-red-400"
                                >
                                    Clique aqui
                                </a>
                            </p>

                        </div>
                    </div>

                </div>
            </section>
            <div>
                {/* CTA Section */}
                <section className="py-20 hero-gradient">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-3xl mx-auto text-white slide-up">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Pronto para Revolucionar seu Processo?
                            </h2>
                            <p className="text-xl mb-8 opacity-90">
                                Entre em contato conosco e descubra como a tecnologia AQUABLAST®
                                pode transformar seus resultados.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {/* 🔵 Botão Azul */}
                                <Button
                                    size="lg"
                                    className="text-lg px-8 py-4 bg-[#1B285E] hover:bg-[#141D46] text-white"
                                >
                                    <a
                                        href="https://wa.me/5521991239221"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3"
                                    >
                                        <MessageCircle className="h-6 w-6" />
                                        <span>WhatsApp: (21) 99123-9221</span>
                                    </a>
                                </Button>

                                {/* 🔴 Botão Vermelho */}
                                <Button
                                    size="lg"
                                    className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white"
                                >
                                    <a href="/contato" className="flex items-center space-x-3">
                                        <span>Solicitar Orçamento</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
