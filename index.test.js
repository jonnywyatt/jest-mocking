const { getQuote } = require('./index');
const { fetchData } = require('./fetch-data');

jest.mock('./fetch-data'); // this line sayse: we are going to put mock data from file fetch-data,
// in this example I  used mock data like name:Henry, content: Hello world

describe('getQuote', () => {
  it('returns a quote', async () => {
    fetchData.mockResolvedValue({
      id: 1440194,
      originator: {
        name: 'Henry',
      },
      content: 'Hello friend,',
    });
    const quote = await getQuote();
    expect(quote).toEqual('Hello friend, (Henry)');
  });
});
