import React from 'react';
import {render, fireEvent} from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import Controls from './Controls'

describe('<Controls />', () =>{
  it('open and locked work as expected', () => {
    const closeFake = jest.fn();
    const {queryByText} = render(<Controls locked={false} closed={false} toggleClosed={closeFake} />);
    const lockButton = queryByText('Lock Gate')
    const closeButton = queryByText('Close Gate')
    expect(lockButton)
    expect(closeButton)
    expect(lockButton.disabled).toBe(true);
    expect(closeButton.disabled).toBe(false);
    fireEvent.click(closeButton)
    expect(closeFake).toBeCalled();
  })
  it('closed and unlocked work as expected', () => {
    
  })
})