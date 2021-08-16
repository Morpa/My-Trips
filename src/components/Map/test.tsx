import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render the heading', () => {
    const { container } = render(<Map />)

    expect(screen.getByRole('heading', { name: /Map/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
