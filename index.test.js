const trailers = require('./trailers');

const good = `
Just a test

Second paragraph

Co-authored-by: santa
Title: Space: the final frontier
multi-line: field with
   multiple lines
`;

test('parse', () => {
    const attrs = trailers.parse(good);
    expect(attrs['title']).toEqual('Space: the final frontier');
    expect(attrs['co-authored-by']).toEqual('santa');
    expect(attrs['multi-line']).toBe('field with multiple lines');
});
