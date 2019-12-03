import React from 'react';

function BannerSection({children, className = ""}) {
  return(
    <section className={`ln-section--banner ${className}`}>
      {children}
    </section>
  );
}

export default BannerSection;