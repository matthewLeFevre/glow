import React from 'react';

function PageSection({children, className}) {
  return(
    <section className={`ln-section ${className}`}>
      {children}
    </section>
  );
}

export default PageSection;