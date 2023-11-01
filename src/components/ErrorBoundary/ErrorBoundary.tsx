import { Component } from 'react';

interface ErrorProps {
  children: React.ReactNode;
}
interface ErrorState {
  error: boolean;
}

export class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { error: false };
  }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}
