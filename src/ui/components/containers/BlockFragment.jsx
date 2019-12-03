import React from 'react';

function BlockFragment({children, className = ""}) {
  return(
    <section className={`ln-block--fragment ${className}`}>
      {children}
    </section>
  );
}

export default BlockFragment;