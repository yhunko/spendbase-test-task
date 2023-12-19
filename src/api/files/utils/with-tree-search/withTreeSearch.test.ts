import { test, expect } from 'vitest';

import type { FileDto } from '../../files-dtos.ts';
import { withTreeSearch } from './withTreeSearch.ts';

const TEST_CASE: FileDto[] = [
  {
    _id: '1',
    name: 'a',
    children: [
      {
        _id: '2',
        name: 'b',
      },
    ],
  },
  {
    _id: '3',
    name: 'a',
    children: [
      {
        _id: '4',
        name: 'c.js',
      },
    ],
  },
];

test('deep tree search', () => {
  expect(withTreeSearch(TEST_CASE, 'c')).toEqual([
    {
      _id: '3',
      name: 'a',
      children: [
        {
          _id: '4',
          name: 'c.js',
        },
      ],
    },
  ]);
});
