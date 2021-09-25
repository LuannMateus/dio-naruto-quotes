import { fireEvent, render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from './index';

describe('#Home Page', () => {
  const responseSpy = { speaker: 'test speaker', quote: 'test quote' };

  const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(responseSpy));
    }),
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('Should renders the home page with a quote, a image and a button', () => {
    render(<Home />);

    const buttonElement = screen.getByRole('button');
    const imageElement = screen.getByRole('img');
    const textElement = screen.getByText(/loading speaker/);

    expect(buttonElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test('Should calls api on button click and update its text', async () => {
    render(<Home />);

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    const quoteElement = await screen.findByText(responseSpy.quote);

    expect(quoteElement).toBeInTheDocument();
  });
});
