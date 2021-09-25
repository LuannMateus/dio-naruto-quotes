import { expect, beforeAll, afterEach, afterAll } from '@jest/globals';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { QuoteService } from './quoteService';

describe('#Quote Service', () => {
  const responseSpy = { speaker: 'test speaker', quote: 'test quote' };

  const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(responseSpy));
    }),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Should transform json response into object', async () => {
    const quoteService = new QuoteService();

    const quote = await quoteService.getQuote();

    expect(quote).toStrictEqual(responseSpy);
  });
});
