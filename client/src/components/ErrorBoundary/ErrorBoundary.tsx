import React, { Component, ComponentType, ReactNode } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import DefaultErrorBoundary from './components/DefaultErrorFallback/DefaultErrorFallback';

interface Props<FallbackProps> {
  children: ReactNode;
  FallbackComponent?: ComponentType<{ error: Error } & FallbackProps>;
  fallbackProps?: FallbackProps;
}

type State = {
  error: Error | null;
};

class ErrorBoundary<FallbackProps = {}> extends Component<Props<FallbackProps> & RouteComponentProps, State> {
  state: State = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidUpdate(prevProps: RouteComponentProps) {
    // reset error if path changes
    if (this.state.error && this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ error: null });
    }
  }

  render() {
    const { children, FallbackComponent = DefaultErrorBoundary, fallbackProps = {} as FallbackProps } = this.props;
    const { error } = this.state;

    return error ? <FallbackComponent error={error} {...fallbackProps} /> : children;
  }
}

export default withRouter(ErrorBoundary);
