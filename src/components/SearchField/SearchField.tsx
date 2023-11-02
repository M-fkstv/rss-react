import { Component } from 'react';

import './SearchField.css';

interface Props {
  onChange: (value: string) => void;
  initValue: string;
}

export class SearchField extends Component<Props> {
  render() {
    return (
      <input
        value={this.props.initValue}
        placeholder='Enter Planet Name'
        onChange={(e) => this.props.onChange(e.target.value)}
        type='text'
      />
    );
  }
}
