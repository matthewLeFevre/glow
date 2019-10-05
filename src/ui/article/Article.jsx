import React from 'react';

function Article ({children}) {
  return (
    <article className="ln-article">
      {children}
    </article>
  );
}

export default Article;

export function ArticleHeader ({title}) {
  return <header className="ln-article__header">{title}</header>;
}

export function ArticleBody ({children}) {
  return (
    <section className="ln-article__body">
      {children}
    </section>
  );
}

export function ArticleFooter ({children}) {
  return (
    <footer className="ln-article__footer">
      {children}
    </footer>
  );
}