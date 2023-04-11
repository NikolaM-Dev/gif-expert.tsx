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
});
