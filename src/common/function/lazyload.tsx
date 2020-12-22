import React, { Suspense } from 'react'
export const AsyncLoad = (Component: any) => {
  return (props: any) => (
    <Suspense fallback={null}>
      <Component {...props} />
    </Suspense>
  );
};