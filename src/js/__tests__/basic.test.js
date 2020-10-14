import health from '../basic';

test('should healthy 1', () => {
  const result = health({ health: 100 });

  expect(result).toBe('healthy');
});

test('should healthy 2', () => {
  const result = health({ health: 51 });

  expect(result).toBe('healthy');
});

test('should wounded 1', () => {
  const result = health({ health: 50 });

  expect(result).toBe('wounded');
});

test('should wounded 2', () => {
  const result = health({ health: 49 });

  expect(result).toBe('wounded');
});

test('should wounded 3', () => {
  const result = health({ health: 16 });

  expect(result).toBe('wounded');
});

test('should wounded 4', () => {
  const result = health({ health: 15 });

  expect(result).toBe('wounded');
});

test('should critical 1', () => {
  const result = health({ health: 14 });

  expect(result).toBe('critical');
});

test('should critical 2', () => {
  const result = health({ health: 0 });

  expect(result).toBe('critical');
});
