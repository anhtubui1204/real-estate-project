import React from 'react';

function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
      <div className="container loading-area">
          <div className="d-flex align-items-center justify-content-center">
            {/* <strong>Loading...</strong> */}
            <div className="spinner-border" style={{width: '10rem', height: '10rem'}} role="status" aria-hidden="true" />
          </div>
      </div>
    );
  }
}
export default WithLoading;