import { render, screen, fireEvent } from '@testing-library/react';
import { Quotes, Button } from '../index';

describe('#Quotes Component', () => {
  const quote = 'test quote';
  const speaker = 'random speaker';

  test('Should renders a received quote, speaker and a button', () => {
    render(<Quotes quote={quote} speaker={speaker} onUpdate={() => {}} />);

    const quoteElement = screen.getByText(quote);
    const speakerElement = screen.getByText(`- ${speaker}`);
    const buttonElement = screen.getByRole('button');

    expect(quoteElement).toBeInTheDocument();
    expect(speakerElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('Should calls a callback when button is pressed', () => {
    const callback = jest.fn();

    render(<Button onUpdate={callback} />);

    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    expect(callback).toHaveBeenCalled();
  });
});
