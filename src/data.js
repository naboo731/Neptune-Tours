import { FaLocationArrow, FaHiking, FaRegBuilding, FaPlane, FaGlassCheers, FaUmbrellaBeach, FaVest, FaWineGlassAlt, FaLuggageCart } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'find an agent',
    links: [
      { label: 'Agents by Postal Code', icon: <FaLocationArrow />, url: '/products' },
      { label: 'Destination Specialists', icon: <FaWineGlassAlt />, url: '/products' },
      { label: 'Interest Experts', icon: <FaHiking />, url: '/products' },
    ],
  },
  {
    page: 'destinations',
    links: [
      { label: 'Sandals and Beach Resorts', icon: <FaUmbrellaBeach />, url: '/products' },
      { label: 'All-Inclusive Vacation Packages', icon: <FaPlane />, url: '/products' },
      { label: 'Destination Weddings and Honeymoons', icon: <FaGlassCheers />, url: '/products' },
      { label: 'European Get-Aways', icon: <FaLuggageCart/>, url: '/products' }
    ],
  },
  {
    page: 'specials',
    links: [
      { label: 'Vacation Specials', icon: <FaLuggageCart />, url: '/products' },
      { label: 'Hotel Specials', icon: <FaRegBuilding />, url: '/products' },
      { label: 'Cruise Specials', icon: <FaVest />, url: '/products' }
    ],
  },
];

export default sublinks;
