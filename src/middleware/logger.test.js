const logger = require('./logger');

describe('logger middleware', () => {
  it('should throw an error if name is not provided in query parameters', () => {
    const req = { query: {} };
    const res = {};
    const next = jest.fn();
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith(expect.any(Error));
    expect(next.mock.calls[0][0].statusCode).toBe(400);
  });

  it('should call next if name is provided in query parameters', () => {
    const req = { query: { name: 'John' } };
    const res = {};
    const next = jest.fn();
    logger(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
