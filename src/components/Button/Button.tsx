import { Component } from 'react';
import './Button.css';

interface buttonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export class Button extends Component<buttonProps> {
  constructor(props: buttonProps) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onClick} className='button'>
        Search
      </button>
    );
  }
}
