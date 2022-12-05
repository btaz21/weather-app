import React from 'react';

function Page({ children }: { children: React.ReactNode }): JSX.Element {
  return <div className="container">{children}</div>;
}

export default Page;
