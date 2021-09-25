import { memo, useCallback, useEffect, useState, useMemo, useRef } from 'react';
import NarutoImage from '../../assets/images/naruto.png';
import { Quotes } from '../../components';
import { QuoteService } from '../../services';
import { Container, NarutoImg } from './styles';

const Home = () => {
  const isMounted = useRef(true);
  const quoteService = useMemo(() => new QuoteService(), []);

  const [quoteState, setQuoteState] = useState({
    quote: 'loading quote...',
    speaker: 'loading speaker',
  });

  const onUpdate = useCallback(async () => {
    const quote = await quoteService.getQuote();

    if (isMounted.current) {
      setQuoteState(quote);
    }
  }, [quoteService]);

  useEffect(() => {
    onUpdate();

    return () => {
      isMounted.current = false;
    };
  }, [onUpdate]);

  return (
    <Container>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={NarutoImage} alt="Naruto with a kunai" />
    </Container>
  );
};

export default memo(Home);
