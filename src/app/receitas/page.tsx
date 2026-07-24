"use client";

import { useState } from "react";
import { Plus, Search } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import RecipeFormModal from "@/components/RecipeFormModal";
import { recipes as initialRecipes, Recipe } from "@/lib/data";
import DeleteConfirmationModal from "@/components/DeleteConfirmationModal";

export default function ReceitasPage() {
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [isDeleteConfirmationModalOpen, setIsDeleteConfirmationModalOpen] = useState(false);
  const [recipeList, setRecipeList] = useState<Recipe[]>(initialRecipes);
  const [modalMode, setMoldalMode] = useState<"create" | "edit">("create");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | undefined>(undefined);

  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSaveRecipe = (newRecipeData: Omit<Recipe, "id"> | Recipe) => {
    if (modalMode === "create") {
      const newRecipe: Recipe = {
        ...newRecipeData,
        id: "id" in newRecipeData ? newRecipeData.id : String(Date.now()),
      };
      setRecipeList((prev) => [...prev, newRecipe]);
    } else {
      {/*Modo "edit"*/}
      const updatedRecipe = newRecipeData as Recipe;
      setRecipeList((prev) =>
        prev.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      );
    }
    handleCloseModal();
  };

  const handleOpenDeleteConfirmationModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsDeleteConfirmationModalOpen(true);
  };

  const handleDeleteRecipe = () => {
    if (selectedRecipe) {
      setRecipeList((prev) => prev.filter((recipe) => recipe.id !== selectedRecipe.id));
      setIsDeleteConfirmationModalOpen(false);
      setSelectedRecipe(undefined);
    }
  };

  {/*função para filtrar as receitas*/}
  const filteredRecipes = recipeList.filter((recipe) => {
    const term = searchTerm.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(term) ||
      recipe.category.toLowerCase().includes(term)
    );
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

        {/*Barra de pesquisa*/}
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
            <p className="text-sm font-medium">Nenhuma receita encontrada para "{searchTerm}".</p>
          </div>
        )}
        
      </div>

      {/*Modal com as props*/}
      <RecipeFormModal 
        isOpen={isRecipeModalOpen} 
        onClose={handleCloseModal} 
        onSave={handleSaveRecipe}
        mode={modalMode}
        recipe={selectedRecipe}
      />

      {/*Modal para delete*/}
      <DeleteConfirmationModal
        isOpen={isDeleteConfirmationModalOpen}
        onClose={() => setIsDeleteConfirmationModalOpen(false)}
        onConfirm={handleDeleteRecipe}
        recipe={selectedRecipe}
      />
    </main>
  );
}