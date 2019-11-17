import React from 'react';

function ConsoleView({children}) {
  return (
    <main className="ln-view--console">
      {children}
    </main>
  );
}

export default ConsoleView;