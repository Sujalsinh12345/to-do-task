import React, { useEffect } from 'react';

const OfflineMode = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful:', registration);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed:', error);
        });
    }
  }, []);

  return null;
};

export default OfflineMode;
