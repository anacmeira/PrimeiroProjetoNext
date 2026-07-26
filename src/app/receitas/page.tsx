"use client";

import { useEffect, useState } from "react";
import { Plus, Search } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import type { Recipe } from "@/lib/data";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";
import api from "@/lib/api";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [modalMode, setMoldalMode] = useState<"create" | "edit">("create");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await api.get("/api/recipes");
        
        const data = Array.isArray(response.data) ? response.data : response.data?.recipes || [];
        setRecipeList(data);
      } catch (error) {
        console.error("Erro ao requisitar as receitas:", error);
        setRecipeList([]); 
      }
    };
    fetchRecipes();
  }, []);

  const handleOpenCreateModal = () => {
    setMoldalMode("create");
    setSelectedRecipe(undefined);
    setIsRecipeModalOpen(true);
  };

  const handleOpenEditModal = (recipe: Recipe) => {
    setMoldalMode("edit");
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsRecipeModalOpen(false);
  };

  const handleSaveRecipe = async (recipeData: Omit<Recipe, "id"> | Recipe) => {
    try {
      if (modalMode === "create") {
        const response = await api.post("/api/recipes", recipeData);
        const newRecipe = response.data;
        setRecipeList((prev) => [...prev, newRecipe]);
      } else {
        // Modo "edit"
        const updatedRecipe = recipeData as Recipe;

        await api.put(`/api/recipes/${updatedRecipe.id}`, updatedRecipe);
        setRecipeList((prev) =>
          prev.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
          )
        );
      }

      handleCloseModal();
    } catch (error) {
      console.error('Erro ao ${modalMode === "create" ? "criar" : "editar"} a receita', error);
    }
  };

  const handleOpenDeleteConfirmationModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsDeleteConfirmationModalOpen(true);
  };

  const handleDeleteRecipe = async () => {
    try {
      if (selectedRecipe) {
        await api.delete(`/recipes/${selectedRecipe.id}`);

        setRecipeList((prev) =>
          prev.filter((recipe) => recipe.id !== selectedRecipe.id)
        );

        setIsDeleteConfirmationModalOpen(false);
        setSelectedRecipe(undefined);
      }
    } catch (error) {
      console.error("Erro ao deletar receita", error);
    }
  };

  const safeRecipeList = Array.isArray(recipeList) ? recipeList : [];
  
  const filteredRecipes = safeRecipeList.filter((recipe) => {
    const term = searchTerm.toLowerCase();
    const title = recipe?.title?.toLowerCase() || "";
    const category = recipe?.category?.toLowerCase() || "";
    
    return title.includes(term) || category.includes(term);
  });

  return (
    <main className="flex-grow bg-amber-50/40 py-12 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        
        {/* Cabeçalho responsivo */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-4 mb-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-amber-950 tracking-tight text-center sm:text-left">
            Todas as Nossas Receitas
          </h1>

          <button 
            type="button"
            onClick={handleOpenCreateModal} 
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-800 hover:bg-amber-900 active:scale-95 transition-all text-white font-semibold rounded-lg shadow-sm text-xs w-full sm:w-auto cursor-pointer"
          >
            <Plus size={18} className="text-white" />
            <span>Nova receita</span>
          </button>
        </div>
        
        <p className="text-sm text-amber-900/80 font-medium mb-6 max-w-xl mx-auto text-center sm:text-left">
          Explore o caderno completo de delícias mineiras, do salgado ao doce tradicional.
        </p>

        {/* Barra de pesquisa */}
        <div className="relative max-w-md mx-auto sm:mx-0 mb-8">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-700/60">
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome ou categoria..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-amber-200/80 rounded-xl text-xs text-amber-950 placeholder-amber-900/40 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-400 transition-all shadow-sm"
          />
        </div>

        {/* Grid com as receitas filtradas */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
            {filteredRecipes.map((recipe) => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onEdit={() => handleOpenEditModal(recipe)}
                onDelete={() => handleOpenDeleteConfirmationModal(recipe)} 
              />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-amber-900/60">
            <p className="text-sm font-medium">
              {searchTerm ? `Nenhuma receita encontrada para "${searchTerm}".` : "Nenhuma receita cadastrada."}
            </p>
          </div>
        )}
        
      </div>

      {/* Modal com as props */}
      <RecipeFormModal 
        isOpen={isRecipeModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleSaveRecipe}
        mode={modalMode}
        recipe={selectedRecipe}
      />

      {/* Modal para delete */}
      <DeleteConfirmationModal
        isOpen={isDeleteConfirmationModalOpen}
        onClose={() => setIsDeleteConfirmationModalOpen(false)}
        onConfirm={handleDeleteRecipe}
        recipe={selectedRecipe}
      />
    </main>
  );
}