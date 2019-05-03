import React from 'react';



function WithLoading(Component) {
  return function WithLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (
      <div className="container loading-area">
          <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ml-auto" style={{width: '3rem', height: '3rem'}} role="status" aria-hidden="true" />
          </div>
      </div>
      
    );
  }
}
export default WithLoading;