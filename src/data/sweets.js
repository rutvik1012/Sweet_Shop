export const sweetsData = [
  { id: 1, name: 'Kaju Katli', price: 800, category: 'Mithai', image: 'https://placehold.co/300x200/FFC0CB/000000?text=Kaju+Katli' },
  { id: 2, name: 'Jalebi', price: 250, category: 'Mithai', image: 'https://placehold.co/300x200/FFA500/000000?text=Jalebi' },
  { id: 3, name: 'Gulab Jamun', price: 300, category: 'Mithai', image: 'https://placehold.co/300x200/8B4513/FFFFFF?text=Gulab+Jamun' },
  { id: 4, name: 'Samosa', price: 20, category: 'Namkeen', image: 'https://placehold.co/300x200/F5DEB3/000000?text=Samosa' },
  { id: 5, name: 'Kachori', price: 25, category: 'Namkeen', image: 'https://placehold.co/300x200/DEB887/000000?text=Kachori' },
  { id: 6, name: 'Dairy Milk Silk', price: 80, category: 'Chocolate', image: 'https://placehold.co/300x200/4B0082/FFFFFF?text=Silk' },
  { id: 7, name: 'Ferrero Rocher', price: 600, category: 'Chocolate', image: 'https://placehold.co/300x200/DAA520/000000?text=Rocher' },
  { id: 8, name: 'Ladoo', price: 350, category: 'Mithai', image: 'https://placehold.co/300x200/FFD700/000000?text=Ladoo' },
  { id: 9, name: 'Dhokla', price: 150, category: 'Namkeen', image: 'https://placehold.co/300x200/FFFF00/000000?text=Dhokla' },
];
export const categories = ['All', ...new Set(sweetsData.map(sweet => sweet.category))];
