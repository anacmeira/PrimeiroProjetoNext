"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Recipe } from "@/lib/data";
import api from "@/lib/api";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function RecipeDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        setLoading(true);
        const response = await api.get(`/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        console.error("Erro ao buscar detalhes da receita:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      fetchRecipe();
    }
  }, [id]);

  if (loading) {
    return (
      <main className="flex-grow bg-amber-50/30 py-12 px-4 flex justify-center items-center">
        <p className="text-amber-950 font-semibold text-sm">Carregando receita...</p>
      </main>
    );
  }

  if (error || !recipe) {
    return (
      <main className="flex-grow bg-amber-50/30 py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-amber-950 mb-4">Receita não encontrada</h1>
        <Link 
          href="/receitas" 
          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Voltar para receitas
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-amber-50/30 py-6 md:py-10 px-4 sm:px-6 md:px-8 w-full">
      <div className="container mx-auto max-w-4xl">
        
        <Link 
          href="/receitas" 
          className="inline-flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950 transition-colors mb-5"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Voltar para receitas
        </Link>

        {recipe.image && (
          <div className="w-full h-48 sm:h-64 md:h-[350px] rounded-xl overflow-hidden mb-6 shadow-sm border border-amber-200/40 bg-amber-100">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Informações básicas */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-950 mb-3 tracking-tight leading-tight">
            {recipe.title}
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/80 mb-6 leading-relaxed">
            {recipe.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
            <div className="bg-amber-100/40 border border-amber-200/50 rounded-lg p-3 text-left">
              <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-amber-900/50 mb-0.5">Preparo</span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-950">{recipe.prepTime}</span>
            </div>
            <div className="bg-amber-100/40 border border-amber-200/50 rounded-lg p-3 text-left">
              <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-amber-900/50 mb-0.5">Cozimento</span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-950">{recipe.cookTime}</span>
            </div>
            <div className="bg-amber-100/40 border border-amber-200/50 rounded-lg p-3 text-left">
              <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-amber-900/50 mb-0.5">Porções</span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-950">{recipe.servings}</span>
            </div>
            <div className="bg-amber-100/40 border border-amber-200/50 rounded-lg p-3 text-left">
              <span className="block text-[9px] sm:text-[10px] uppercase font-bold text-amber-900/50 mb-0.5">Categoria</span>
              <span className="text-xs sm:text-sm font-extrabold text-amber-950 truncate block">{recipe.category}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 pt-6 border-t border-amber-200/40 w-full">
          
          {/* Ingredientes */}
          <div className="w-full md:w-[40%]">
            <h2 className="text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-700 rounded-full inline-block"></span>
              Ingredientes
            </h2>
            <ul className="space-y-3">
              {recipe.ingredients?.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                  <span className="text-amber-700 font-bold text-sm leading-none mt-0.5">•</span>
                  <span>{typeof item === "string" ? item : item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modo de Preparo */}
          <div className="w-full md:w-[60%]">
            <h2 className="text-lg font-bold text-amber-950 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-700 rounded-full inline-block"></span>
              Modo de Preparo
            </h2>
            <ol className="space-y-4">
              {recipe.instructions?.map((step, index) => (
                <li key={index} className="flex gap-3.5 items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100/80 text-amber-900 text-[10px] font-bold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
                    {typeof step === "string" ? step : step.value}
                  </p>
                </li>
              ))}
            </ol>
          </div>

        </div>

      </div>
    </main>
  );
}