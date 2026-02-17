import { Category } from './types.js';

// Using known open-source game URLs or reliable embeds. 
// Note: Some networks might block these specific domains, but this is a frontend template.
export const GAMES = [
  {
    id: '1',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile!',
    url: 'https://play2048.co/index.html', 
    thumbnail: 'https://picsum.photos/id/119/400/300', 
    category: Category.Puzzle,
    popular: true
  },
  {
    id: '2',
    title: 'Hextris',
    description: 'An addictive puzzle game inspired by Tetris.',
    url: 'https://hextris.io/',
    thumbnail: 'https://picsum.photos/id/234/400/300',
    category: Category.Puzzle,
    popular: true
  },
  {
    id: '3',
    title: 'Quick Draw',
    description: 'Can a neural network recognize your drawing?',
    url: 'https://quickdraw.withgoogle.com/',
    thumbnail: 'https://picsum.photos/id/12/400/300',
    category: Category.Arcade,
    popular: true
  },
  {
    id: '4',
    title: 'Crossy Road (Clone)',
    description: 'Why did the chicken cross the road?',
    url: 'https://wanted5games.com/games/html5/crossy-road-new-4049.html', // Placeholder for a clone
    thumbnail: 'https://picsum.photos/id/40/400/300',
    category: Category.Action,
    popular: false
  },
  {
    id: '5',
    title: 'Sudoku',
    description: 'Classic Sudoku puzzles.',
    url: 'https://sudoku.com/embed', // Generic placeholder, likely needs a real specific embed
    thumbnail: 'https://picsum.photos/id/55/400/300',
    category: Category.Classic,
    popular: false
  },
  {
    id: '6',
    title: 'Cookie Clicker',
    description: 'Bake billions of cookies.',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    thumbnail: 'https://picsum.photos/id/96/400/300',
    category: Category.Strategy,
    popular: true
  },
  {
    id: '7',
    title: 'Geometry Dash (Scratch)',
    description: 'Jump and fly your way through danger.',
    url: 'https://scratch.mit.edu/projects/105500895/embed',
    thumbnail: 'https://picsum.photos/id/88/400/300',
    category: Category.Arcade,
    popular: true
  },
  {
    id: '8',
    title: 'Minecraft (Classic)',
    description: 'The classic version of Minecraft available on web.',
    url: 'https://classic.minecraft.net/',
    thumbnail: 'https://picsum.photos/id/60/400/300',
    category: Category.Action,
    popular: true
  },
];

export const EDUCATIONAL_CONTENT = `
  <h1>Mitochondria</h1>
  <p>The mitochondrion is a double-membrane-bound organelle found in most eukaryotic organisms. Some cells in some multicellular organisms may, however, lack mitochondria (for example, mature mammalian red blood cells). A number of unicellular organisms, such as microsporidia, parabasalids, and diplomonads, have also reduced or transformed their mitochondria into other structures.</p>
  <br>
  <h2>Structure</h2>
  <p>A mitochondrion contains outer and inner membranes composed of phospholipid bilayers and proteins. The two membranes have different properties. Because of this double-membraned organization, there are five distinct parts to a mitochondrion:</p>
  <ul>
    <li>The outer mitochondrial membrane</li>
    <li>The intermembrane space (the space between the outer and inner membranes)</li>
    <li>The inner mitochondrial membrane</li>
    <li>The cristae space (formed by infoldings of the inner membrane)</li>
    <li>The matrix (space within the inner membrane)</li>
  </ul>
`;