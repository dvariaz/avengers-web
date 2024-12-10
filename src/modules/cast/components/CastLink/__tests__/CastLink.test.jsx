import { it, describe, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { useRouteMatch } from 'react-router-dom';
import CastLink from '@/modules/cast/components/CastLink';

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useRouteMatch: vi.fn().mockReturnValue({ params: {} })
}))

const props = {
  id: 'thanos',
  name: 'Thanos',
  image: '/image.url',
  color: 'red',
  onClick: vi.fn()
}

describe('CastLink', () => {
  let wrapper;

  describe('mount', () => {
    it('should render correctly', () => {
      wrapper = render(<CastLink {...props} />);

      expect(wrapper).toBeDefined();
    })

    it('should render active state if character is the same as route', () => {
      useRouteMatch.mockReturnValue({
        params: {
          character: 'thanos'
        }
      })

      wrapper = render(<CastLink {...props} />);

      expect(screen.getByTestId('cast-link-thanos')).toBeInTheDocument();
    })

    it('should render inactive state if character is not the same as route', () => {
      useRouteMatch.mockReturnValue({
        params: {
          character: 'not-thanos'
        }
      })

      wrapper = render(<CastLink {...props} />);

      expect(screen.getByTestId('cast-link-thanos')).toBeInTheDocument();
    })
  })

  describe('UI events', () => {
    it('should call onClick if button is pressed', () => {
      wrapper = render(<CastLink {...props} />);

      const button = screen.getByTestId('cast-link-thanos');

      act(() => {
        button.click();
      })

      expect(props.onClick).toHaveBeenCalledTimes(1);
    })
  })
})
