// src/components/ErrorBoundary.tsx
import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };


  static getDerivedStateFromError(error: Error): State {
    // The error is intentionally not used.
    void error;
    return { hasError: true };
  }
  

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-100 text-red-600">
          Something went wrong. Please try again later.
        </div>
      );
    }
    return this.props.children;
  }
}
