'use client';

import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Pixel encountered an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-green-900 to-slate-800 flex items-center justify-center p-8">
          <div className="text-center max-w-md">
            <div className="text-6xl mb-6">🌙</div>
            <h1 className="text-2xl font-serif text-amber-300 mb-4">
              The Digital Forest Stirs...
            </h1>
            <p className="text-green-300 font-mono text-sm mb-6 leading-relaxed">
              *The mystical energies have become unstable...*
              <br />
              <br />
              Pixel's connection to the digital realm has been disrupted. 
              Please refresh the page to restore the spiritual link.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-amber-600/20 border border-amber-600/40 rounded text-amber-300 font-mono hover:bg-amber-600/30 transition-colors"
            >
              Reconnect to the Forest
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
