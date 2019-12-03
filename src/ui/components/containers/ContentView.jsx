import React from 'react';

function ContentView({children}) {
  return (
    <main className="ln-view--content">
      {children}
    </main>
  );
}

export default ContentView;