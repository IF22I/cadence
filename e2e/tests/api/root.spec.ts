import { test, expect } from '@playwright/test';

test('root endpoint says the API is running', async ({ request }) => {
  const response = await request.get('/');

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.message).toContain('is running');
}); 