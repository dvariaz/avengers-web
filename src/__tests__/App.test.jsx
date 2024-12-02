import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '@/App';
import useResourcePreloader from '@/modules/common/hooks/useResourcePreloader';

vi.mock('@/modules/common/hooks/useResourcePreloader');

const intersectionObserverMock = vi.fn().mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});

describe('App component test', () => {
  let wrapper;

  beforeEach(() => {
    useResourcePreloader.mockImplementation(() => [true, 100]);

    window.IntersectionObserver = intersectionObserverMock;

    wrapper = render(<App />);
  })

  describe('mount', () => {
    it('should render correctly', () => {
      expect(wrapper).toBeDefined();
    })

    it('should render HomePage by default if all images are preloaded', () => {
      expect(screen.getByTestId('home-sections-container')).toBeDefined();
    })

    it('should render Preloader if all images are not preloaded', () => {
      useResourcePreloader.mockImplementationOnce(() => [false, 0]);

      wrapper = render(<App />);

      expect(screen.getByTestId('preloader')).toBeDefined();
    })
  })
})
