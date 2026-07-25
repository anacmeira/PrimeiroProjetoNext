"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Recipe } from "@/lib/data"; 
import RecipeCard from "@/components/RecipeCard"; 
import api from "@/lib/api";

export default function Home() {
  const [recipesList, setRecipesList] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await api.get("/api/recipes");
        
        const data = Array.isArray(response.data) ? response.data : response.data?.recipes || [];
        setRecipesList(data);
      } catch (error) {
        console.error("Erro ao carregar receitas na Home:", error);
        setRecipesList([]); 
      }
    }

    fetchRecipes();
  }, []);

  const safeRecipes = Array.isArray(recipesList) ? recipesList : [];
  const featuredRecipes = safeRecipes.slice(0, 3);

  return (
    <main className="flex-grow bg-amber-50/40">
      {/* Seção Hero */}
      <section className="bg-amber-100/50 py-4 md:py-6 border-b border-amber-200/60 px-4">
        <div className="flex flex-col gap-3 items-center container mx-auto text-center max-w-5xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-amber-950 tracking-tight">
            Receitas Mineiras
          </h1>
          <p className="text-xs sm:text-sm text-amber-900/90 font-medium max-w-xl leading-relaxed">
            Descubra receitas simples, afetivas e saborosas com aquele gostinho único de comida de vó.
          </p>
          <Link 
            className="bg-amber-800 hover:bg-amber-900 active:scale-95 transition-all text-white font-semibold rounded-lg px-4 py-1.5 shadow-sm text-xs" 
            href="/receitas"
          >
            Ver todas as receitas
          </Link>
        </div>
      </section>

      {/* Seção receitas em destaque */}
      <section className="py-8 px-4">
        <div className="flex flex-col items-center container mx-auto text-center max-w-5xl">
          <h2 className="text-xl font-bold text-amber-950 mb-1">
            Receitas em destaque
          </h2>
          
          <Link 
            className="flex items-center gap-1 text-amber-700 hover:text-amber-900 text-sm font-medium transition-colors mb-6" 
            href="/receitas"
          >
            Ver todas as receitas <ChevronRight className="w-4 h-4" />
          </Link>

          {/* Grid Dinâmico */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
            {featuredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
              />
            ))}
          </div>

         
        </div>
      </section>
    </main>
  );
}