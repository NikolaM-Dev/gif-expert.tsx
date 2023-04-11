import { fireEvent, render, screen } from '@testing-library/react';

import { AddCategory } from '../../src/components';

describe('Tests on <AddCategory />', () => {
  const category = 'Saitama';

  it('should to match with snapshot', () => {
    const { container } = render(<AddCategory handleAddCategory={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
