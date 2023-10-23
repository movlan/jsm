interface HeaderProps {
  query: string;
  category: string;
}

const Header = (props: HeaderProps) => {
  const { query, category } = props;

  const styles = 'heading3 self-start text-white-800';

  if (query || category) {
    return (
      <h1 className={styles}>
        Search results{query && ` for "${query}"`}
        {category && (
          <>
            {' '}
            in <span className="capitalize">{category}</span>
          </>
        )}
      </h1>
    );
  }

  return <h1 className={styles}>No results</h1>;
};

export default Header;
