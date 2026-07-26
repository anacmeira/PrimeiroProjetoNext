"use client";

import { useEffect } from "react";
import { useFieldArray, useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogHeader, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Recipe } from "@/lib/data";
import { recipeSchema, RecipeFormData } from "../../lib/formValidationSchemas/recipeSchema";

interface RecipeFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (recipe: Omit<Recipe, "id"> | Recipe) => void;
  mode: "create" | "edit";
  recipe?: Recipe;
}

const DEFAULT_VALUES: RecipeFormData = {
  title: "",
  category: "",
  description: "",
  imageURL: "",
  prepTime: "",
  cookTime: "",
  servings: 1,
  ingredients: [{ value: "" }],
  instructions: [{ value: "" }],
};

export default function RecipeFormModal({
  isOpen,
  onClose,
  onSave,
  mode,
  recipe,
}: RecipeFormModalProps) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<RecipeFormData>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
    defaultValues: DEFAULT_VALUES,
  });

  const {
    fields: ingredientFields,
    append: appendIngredients,
    remove: removeIngredients,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: appendInstructions,
    remove: removeInstructions,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  // Função para fechar o modal
  const handleSafeClose = () => {
    if (typeof onClose === "function") {
      onClose();
    } else {
      console.warn("RecipeFormModal: A prop 'onClose' não foi fornecida.");
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (mode === "edit" && recipe) {
        reset({
          ...recipe,
          imageURL: recipe.image || "",
          ingredients: recipe.ingredients.map((ing) => ({ value: ing.value })),
          instructions: recipe.instructions.map((inst) => ({ value: inst.value })),
        });
      } else {
        reset(DEFAULT_VALUES);
      }
    }
  }, [mode, isOpen, recipe, reset]);

  const onSubmit: SubmitHandler<RecipeFormData> = (data) => {
    const { imageURL, ...restData } = data;

    const formattedRecipe = {
      ...restData,
      image: imageURL,
    };

    // Chamada segura do onSave
    if (typeof onSave === "function") {
      onSave(
        mode === "edit" && recipe
          ? { ...formattedRecipe, id: recipe.id }
          : formattedRecipe
      );
    } else {
      console.error("RecipeFormModal: A prop 'onSave' não é uma função válida.");
    }

    reset(DEFAULT_VALUES);
    handleSafeClose();
  };

  const inputStyle =
    "w-full h-[42px] px-3.5 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500 leading-normal box-border";

  const btnSecondaryStyle =
    "px-4 py-2.5 bg-white border border-amber-200 text-amber-950 rounded-lg hover:bg-amber-100 transition-colors text-sm font-medium leading-normal cursor-pointer whitespace-nowrap shrink-0";

  return (
    <Dialog open={isOpen} onOpenChange={handleSafeClose}>
      <DialogContent className="bg-amber-50/95 border-amber-200 text-amber-950 w-[95vw] max-w-6xl rounded-2xl p-8 shadow-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold text-amber-950 tracking-tight">
            {mode === "create" ? "Nova receita" : "Editar receita"}
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 mt-3 text-left"
          noValidate
        >
          {/* Título e Categoria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex flex-col">
              <label htmlFor="title" className="text-xs font-semibold text-amber-950 mb-1.5">
                Título
              </label>
              <input
                id="title"
                type="text"
                className={inputStyle}
                {...register("title")}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="category" className="text-xs font-semibold text-amber-950 mb-1.5">
                Categoria
              </label>
              <input
                id="category"
                type="text"
                className={inputStyle}
                {...register("category")}
              />
              {errors.category && (
                <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>
              )}
            </div>
          </div>

          {/* Descrição */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-xs font-semibold text-amber-950 mb-1.5">
              Descrição
            </label>
            <textarea
              id="description"
              rows={3}
              className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500 leading-normal resize-y"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          {/* URL da imagem */}
          <div className="flex flex-col">
            <label htmlFor="image" className="text-xs font-semibold text-amber-950 mb-1.5">
              URL da imagem
            </label>
            <input
              id="image"
              type="text"
              placeholder="/placeholder.svg"
              className={inputStyle}
              {...register("imageURL")}
            />
            {errors.imageURL && (
              <p className="text-red-500 text-xs mt-1">{errors.imageURL.message}</p>
            )}
          </div>

          {/* Tempos e Porções */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <div className="flex flex-col justify-end">
              <label htmlFor="prepTime" className="text-xs font-semibold text-amber-950 mb-1.5">
                Tempo de preparo
              </label>
              <input
                id="prepTime"
                type="text"
                placeholder="15 minutos"
                className={inputStyle}
                {...register("prepTime")}
              />
              {errors.prepTime && (
                <p className="text-red-500 text-xs mt-1">{errors.prepTime.message}</p>
              )}
            </div>

            <div className="flex flex-col justify-end">
              <label htmlFor="cookTime" className="text-xs font-semibold text-amber-950 mb-1.5">
                Tempo de cozimento
              </label>
              <input
                id="cookTime"
                type="text"
                placeholder="30 minutos"
                className={inputStyle}
                {...register("cookTime")}
              />
              {errors.cookTime && (
                <p className="text-red-500 text-xs mt-1">{errors.cookTime.message}</p>
              )}
            </div>

            <div className="flex flex-col justify-end">
              <label htmlFor="servings" className="text-xs font-semibold text-amber-950 mb-1.5">
                Porções
              </label>
              <input
                id="servings"
                type="number"
                placeholder="1"
                className={inputStyle}
                {...register("servings", { valueAsNumber: true })}
              />
              {errors.servings && (
                <p className="text-red-500 text-xs mt-1">{errors.servings.message}</p>
              )}
            </div>
          </div>

          {/* Lista de Ingredientes */}
          <div className="flex flex-col gap-2 pt-2">
            <label className="text-xs font-semibold text-amber-950">
              Ingredientes
            </label>
            <div className="flex flex-col gap-3">
              {ingredientFields.map((field, index) => (
                <div key={field.id} className="flex items-start gap-3 w-full">
                  <div className="flex-1">
                    <input
                      type="text"
                      className={inputStyle}
                      placeholder={`Ingrediente ${index + 1}`}
                      {...register(`ingredients.${index}.value`)}
                    />
                    {errors.ingredients?.[index]?.value && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.ingredients[index]?.value?.message}
                      </p>
                    )}
                  </div>
                  {ingredientFields.length > 1 && (
                    <button
                      type="button"
                      className={`${btnSecondaryStyle} hover:border-red-300 hover:bg-red-50 hover:text-red-700`}
                      onClick={() => removeIngredients(index)}
                    >
                      Remover
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                className={`${btnSecondaryStyle} self-start mt-1`}
                onClick={() => appendIngredients({ value: "" })}
              >
                + Adicionar ingrediente
              </button>
            </div>
          </div>

          {/* Lista de Instruções */}
          <div className="flex flex-col gap-2 pt-2">
            <label className="text-xs font-semibold text-amber-950">
              Instruções
            </label>
            <div className="flex flex-col gap-3">
              {instructionFields.map((field, index) => (
                <div key={field.id} className="flex items-start gap-3 w-full">
                  <div className="flex-1">
                    <textarea
                      rows={2}
                      className="w-full px-3.5 py-2.5 bg-white border border-amber-200 rounded-lg text-amber-950 text-sm placeholder-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-500 leading-normal resize-y"
                      placeholder={`Passo ${index + 1}`}
                      {...register(`instructions.${index}.value`)}
                    />
                    {errors.instructions?.[index]?.value && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.instructions[index]?.value?.message}
                      </p>
                    )}
                  </div>

                  {instructionFields.length > 1 && (
                    <button
                      type="button"
                      className={`${btnSecondaryStyle} hover:border-red-300 hover:bg-red-50 hover:text-red-700`}
                      onClick={() => removeInstructions(index)}
                    >
                      Remover
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                className={`${btnSecondaryStyle} self-start mt-1`}
                onClick={() => appendInstructions({ value: "" })}
              >
                + Adicionar instrução
              </button>
            </div>
          </div>

          {/* Botões do Rodapé */}
          <div className="flex items-center justify-end gap-3 pt-5 mt-6 border-t border-amber-200/60">
            <button
              type="button"
              onClick={handleSafeClose}
              className={btnSecondaryStyle}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-amber-950 text-amber-50 hover:bg-amber-900 font-semibold text-sm shadow-md transition-colors cursor-pointer shrink-0"
            >
              {mode === "create" ? "Criar receita" : "Salvar alterações"}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}