// Import necessary functions
import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router5';
import NavBar from '../components/NavBar'; // Assuming this is the component you want to test
import { createRouter } from '../router'; // Assuming you have a function to create a router

// Write your test
test('renders the <NavBar /> component', async () => {
  // Create a router instance
  const router = createRouter();

  // Render the NavBar component wrapped in a RouterProvider with the router
  render(
    <RouterProvider router={router}>
      <NavBar />
    </RouterProvider>
  );

  // Add your assertions here
});




