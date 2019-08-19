import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
  it('should default to open and unlocked', () =>{
    const {getByText} = render(<Dashboard />)
    expect(getByText('Unlocked'))
    expect(getByText('Open'))
    expect(getByText('Lock Gate'))
    expect(getByText('Close Gate'))
  })
})