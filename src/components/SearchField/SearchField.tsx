import { Component } from 'react';

import './SearchField.css';

interface Props {
  onChange: (value: string) => void;
}

export class SearchField extends Component<Props> {
  render() {
    return (
      <input
        onChange={(e) => this.props.onChange(e.target.value)}
        type='text'
      />
    );
  }
}
