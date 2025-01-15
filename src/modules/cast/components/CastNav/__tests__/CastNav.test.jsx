import { render } from '@testing-library/react';
import CastNav from '@/modules/cast/components/CastNav';

const props = {
  links: [
    {
      id: 'thanos',
      name: {
        text: 'Thanos'
      },
      profile: '/image.url',
      color: 'torchRed'
    }
  ],
  onChange: vi.fn()
}

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useRouteMatch: vi.fn().mockReturnValue({ params: {} })
}))

describe('CastNav', () => {
  let wrapper;

  describe('mount', () => {
    it('should render correctly', () => {
      wrapper = render(<CastNav {...props} />);

      expect(wrapper).toBeDefined();
    })
  })

  describe('UI events', () => {
    it('should call onChange function when a link is clicked', () => {
      wrapper = render(<CastNav {...props} />);

      const link = wrapper.getByTestId('cast-link-thanos');
      link.click();

      expect(props.onChange).toHaveBeenCalled();
    })
  })
})
