
export enum Category {
  Action = 'Action',
  Puzzle = 'Puzzle',
  Strategy = 'Strategy',
  Classic = 'Classic',
  Arcade = 'Arcade'
}

export interface Game {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  category: Category;
  popular: boolean;
}

// ChatMessage interface for the AI assistant history
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
