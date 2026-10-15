import { mockRecipes, mockChatAnswers, mockGraph } from '../data/mockData';
import { Recipe } from '../types';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchRecipes = async (): Promise<Recipe[]> => {
  await delay(300);
  return mockRecipes;
};

export const fetchRecipeById = async (id: string): Promise<Recipe | undefined> => {
  await delay(200);
  return mockRecipes.find((r) => r.id === id);
};

export const askQuestion = async (query: string): Promise<string> => {
  await delay(800); // имитация работы LLM
  const idx = Math.floor(Math.random() * mockChatAnswers.length);
  return mockChatAnswers[idx];
};

export const fetchGraph = async () => {
  await delay(300);
  return mockGraph;
};
