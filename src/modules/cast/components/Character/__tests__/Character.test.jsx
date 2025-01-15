import { render } from '@testing-library/react';
import Character from '@/modules/cast/components/Character';

const props = {
  name: 'Thanos',
  description: 'Thanos',
  background: 'red',
  photo: '/image.url',
  position: 'right',
  color: 'red'
}

describe('Character', () => {
  let wrapper;

  describe('mount', () => {
    it('should render correctly with right position', () => {
      wrapper = render(<Character {...props} />);

      expect(wrapper).toBeDefined();
    })

    it('should render correctly with left position', () => {
      wrapper = render(<Character {...props} position="left" />);

      expect(wrapper).toBeDefined();
    })
  })
})
