import "./styles.css";

import React, { Suspense } from 'react';

export default function App() {

  const Sc = React.lazy(() => {
      return import('./Ca');
  })

  return (
    <div className="App">
        <Suspense fallback={<div>Loading</div>}>
            <Sc />
        </Suspense>
    </div>
  );
}
