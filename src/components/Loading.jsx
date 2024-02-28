  import React from 'react';
  import './loader.css'
    function Loading() {
      return (
        <div className="loader-container">
          <div className="flex">
            <div className="loader">
            </div>
          </div>
          <div className="load-text">
            Loading...
          </div>
        </div>
      );
    }
    
    export default Loading;