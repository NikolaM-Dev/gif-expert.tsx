import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components';

describe('Tests on <AddCategory />', () => {
  const category = 'Saitama';

  it('should to match with snapshot', () => {
    const { container } = render(<AddCategory handleAddCategory={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should to change the value of text input', () => {
    render(<AddCategory handleAddCategory={() => {}} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;

    fireEvent.input(input, { target: { value: category } });

    expect(input.value).toBe(category);
  });

  it('should to call handleAddCategory if input have any value', () => {
    const handleAddCategory = jest.fn();
    render(<AddCategory handleAddCategory={handleAddCategory} />);

    const input = screen.getByRole('textbox') as HTMLInputElement;
    const form = screen.getByRole('form') as HTMLFormElement;

    fireEvent.input(input, { target: { value: category } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(handleAddCategory).toHaveBeenCalledTimes(1);
    expect(handleAddCategory).toHaveBeenCalledWith(category);
  });
});
