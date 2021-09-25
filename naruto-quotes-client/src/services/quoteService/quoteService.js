class QuoteService {
  async getQuote() {
    const response = await fetch(`${process.env.REACT_APP_API}/`);

    return await response.json();
  }
}

export { QuoteService };
