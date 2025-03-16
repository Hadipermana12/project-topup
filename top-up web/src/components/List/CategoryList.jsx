import React from 'react';
import CategoryCard from './CategoryCard';
import Button from '../Button';
import { Link } from 'react-router-dom';

const categories = [
  
  {
    id: 1,
    image: './image/logomlbb.webp', // Ganti dengan URL gambar asli
    title: 'Mobile Legends',
    description: 'Top up Diamond Mobile Legends',
    link:'/DiamondMl',
  },


  {
    id: 2,
    image: './image/ff.jpg', // Ganti dengan URL gambar asli
    title: 'Free Fire',
    description: 'Top up Diamond Free Fire',
  },
  {
    id: 3,
    image: './image/pubg.webp', // Ganti dengan URL gambar asli
    title: 'PUBG Mobile',
    description: 'Top up UC PUBG Mobile',
  },
  {
    id: 4,
    image: './image/hok.jpg', // Ganti dengan URL gambar asli
    title: 'Honor of Kings',
    description: 'Top up Honor of Kings',
  },
  // {
  //   id: 5,
  //   image: 'https://example.com/valorant.jpg', // Ganti dengan URL gambar asli
  //   title: 'Valorant',
  //   description: 'Top up Valorant Points',
  // },
];

const CategoryList = () => {
  return (

    
    <div className="container-fluid mx-auto my-8 px-4">
        <div className="flex flex-1 gap-10 pb-6">
     <Button variant="bg-blue-600">Top Up Games</Button>
     <Button variant="bg-blue-600">Pulsa</Button>
     <Button variant="bg-blue-600">Kuota</Button>
      </div>

    
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard 
            key={category.id}
            image={category.image}
            title={category.title}
            description={category.description}
            link={category.link}
          />
        ))}
      </div>
      </div>
    
  );
};

export default CategoryList;
