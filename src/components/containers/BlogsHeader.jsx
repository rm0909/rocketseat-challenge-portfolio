function BlogsHeader({showPosts}) {
  return (
    <header className="blog-header cards">
      <h1 >Posts Recentes</h1>
      <p onClick={showPosts}>mostrar todos</p>
    </header>
  );
}
export { BlogsHeader };
