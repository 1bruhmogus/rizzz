import { Game, Category } from './types';

export const GAMES: Game[] = [
  {
    id: '1',
    title: 'Slope',
    description: 'A fast-paced 3D running game where you control a ball rolling down a slope. Avoid obstacles and keep the ball on the track!',
    url: 'https://kbhgames.com/game/slope-2',
    thumbnail: 'https://picsum.photos/seed/slope/640/360',
    category: Category.Arcade,
    popular: true
  },
  {
    id: '2',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile! A classic puzzle game that is easy to learn but hard to master.',
    url: 'https://play2048.co/',
    thumbnail: 'https://picsum.photos/seed/2048/640/360',
    category: Category.Puzzle,
    popular: true
  },
  {
    id: '3',
    title: 'Cookie Clicker',
    description: 'The original idle game where you bake cookies to rule the universe.',
    url: 'https://orteil.dashnet.org/cookieclicker/',
    thumbnail: 'https://picsum.photos/seed/cookie/640/360',
    category: Category.Strategy,
    popular: false
  },
  {
    id: '4',
    title: 'Tetris',
    description: 'The classic block-stacking puzzle game. Arrange the falling blocks to clear lines.',
    url: 'https://tetris.com/play-tetris',
    thumbnail: 'https://picsum.photos/seed/tetris/640/360',
    category: Category.Classic,
    popular: true
  },
  {
    id: '5',
    title: 'Paper.io 2',
    description: 'Conquer territory by enclosing it with your trail. Watch out for other players trying to cut your line!',
    url: 'https://paper-io.com/',
    thumbnail: 'https://picsum.photos/seed/paperio/640/360',
    category: Category.Action,
    popular: false
  }
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