export interface Recipe {
  id: string;
  name: string;
  cuisine: string;
  timeMinutes: number;
  difficulty: 'лёгкая' | 'средняя' | 'сложная';
  ingredients: string[];
  diet: string[];
  steps: string[];
  body: string; // Markdown-текст
  tags?: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface GraphNode {
  data: {
    id: string;
    label: string;
    type: 'dish' | 'ingredient' | 'cuisine' | 'diet';
  };
}

export interface GraphEdge {
  data: {
    source: string;
    target: string;
    relation: string;
  };
}
