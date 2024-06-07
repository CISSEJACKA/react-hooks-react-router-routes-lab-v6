test('renders movie\'s title in an h1', async () => {
  render(<MoviePage />);
  const movieTitle = await screen.findByText(/Doctor Strange/);
  expect(movieTitle).toBeInTheDocument();
  expect(movieTitle.tagName).toBe('H1');
});

test('renders movie\'s time within a p tag', async () => {
  render(<MoviePage />);
  const movieTime = await screen.findByText(/115/);
  expect(movieTime).toBeInTheDocument();
  expect(movieTime.tagName).toBe('P');
});

test('renders the <NavBar /> component', async () => {
  render(
    <RouterProvider router={router}>
      <NavBar />
    </RouterProvider>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

test('renders the genre in a span for each genre', async () => {
  render(<MoviePage />);
  const genres = ["Action", "Adventure", "Fantasy"];
  for (const genre of genres) {
    const genreElement = await screen.findByText(genre);
    expect(genreElement).toBeInTheDocument();
    expect(genreElement.tagName).toBe('SPAN');
  }
});

