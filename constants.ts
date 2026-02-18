import { Game, Category } from './types';

export const GAMES: Game[] = [
  {
    id: 'drift-boss',
    title: 'Drift Boss',
    description: 'A challenging drift game where you have to perfectly time your turns to stay on the platform. Collect coins and unlock new vehicles!',
    url: 'https://www.mathplayground.com/drift-boss/index.html',
    thumbnail: 'https://images.crazygames.com/drift-boss/20201130122703/drift-boss-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
    category: Category.Arcade,
    popular: true
  },
  {
    id: 'slope',
    title: 'Slope',
    description: 'Drive a ball down a series of slopes, avoid obstacles, and see how far you can go in this high-speed endless runner.',
    url: 'https://kdata1.com/2020/05/slope/',
    thumbnail: 'https://images.crazygames.com/slope/20170424160416/slope-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
    category: Category.Action,
    popular: true
  },
  {
    id: 'tunnel-rush',
    title: 'Tunnel Rush',
    description: 'Navigate through a colorful tunnel at high speeds, dodging obstacles in this fast-paced reaction game.',
    url: 'https://tunnelrush.org/tunnel-rush',
    thumbnail: 'https://images.crazygames.com/tunnel-rush/20201124110300/tunnel-rush-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
    category: Category.Arcade,
    popular: false
  },
  {
    id: 'moto-x3m',
    title: 'Moto X3M',
    description: 'The ultimate bike racing game with challenging levels and crazy stunts. Grab your bike and start flipping!',
    url: 'https://moto-x3m.org/moto-x3m',
    thumbnail: 'https://images.crazygames.com/moto-x3m-bike-race-game/20240904094050/moto-x3m-bike-race-game-cover?auto=format,compress&q=75&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
    category: Category.Action,
    popular: true
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