import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error loading 3D model:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-white bg-black p-4 rounded-lg text-sm w-full h-full flex items-center justify-center">
          ⚠️ 3D view not supported on this device. Please view on desktop.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
