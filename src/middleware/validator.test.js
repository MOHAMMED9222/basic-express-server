const validator = require('./validator');

describe('validator middleware', () => {
  it('should throw an error if name is not provided in query parameters', () => {
    const req = { query: {} };
    const res = {};
    const next = jest.fn();
    expect(() => validator(req, res, next)).toThrow('Name is required!!');
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next if name is provided in query parameters', () => {
    const req = { query: { name: 'John' } };
    const res = {};
    const next = jest.fn();
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
