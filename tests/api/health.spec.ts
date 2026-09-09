import { expect, test } from '@playwright/test';

test.describe('Public API validation', () => {
  test('returns the expected resource contract', async ({ request }) => {
    test.info().annotations.push({
      type: 'risk',
      description: 'Consumers depend on stable status, identifiers and payload shape.',
    });

    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        userId: expect.any(Number),
        id: 1,
        title: expect.any(String),
        body: expect.any(String),
      }),
    );
  });
});
