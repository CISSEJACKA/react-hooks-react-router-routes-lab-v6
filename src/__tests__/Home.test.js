test('renders the <NavBar /> component', async () => {
  render(
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});

test('wraps content in a div with "navbar" class', () => {
  render(
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  );
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});


