const { getQuote } = require('./index');

describe('getQuote', () => {
  it('returns a quote', async () => {
    const quote = await getQuote();
    expect(typeof quote).toEqual('string');
  });
});
