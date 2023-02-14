import { render } from '@testing-library/react';

import App from './app';

const mockedFetch = (data) => {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
};

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockedFetch([])
  })

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Board Game Hoard/gi)).toBeTruthy();
  });
});
