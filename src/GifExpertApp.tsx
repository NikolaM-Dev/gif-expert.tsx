import { useState } from 'react';

import { AddCategory, GifGrid } from './components';

interface IProps {}

export const GifExpertApp = ({}: IProps): JSX.Element => {
  const [categories, setCategories] = useState<string[]>(['One Punch']);

  const handleAddCategory = (newCategory: string) => {
    const category = newCategory.trim();

    if (categories.includes(category)) return;
    if (category.length < 2) return;

    setCategories([category, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory handleAddCategory={handleAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
