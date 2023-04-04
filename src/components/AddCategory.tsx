import { FormEvent, SyntheticEvent, useState } from 'react';

interface IProps {
  handleAddCategory: (category: string) => void;
}

export const AddCategory = ({ handleAddCategory }: IProps) => {
  const [newCategory, setNewCategory] = useState<string>('');

  const handleChange = ({ currentTarget }: FormEvent<HTMLInputElement>) =>
    setNewCategory(currentTarget.value);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    handleAddCategory(newCategory);
    setNewCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        placeholder="Search Gifs"
        type="text"
        value={newCategory}
      />
    </form>
  );
};
