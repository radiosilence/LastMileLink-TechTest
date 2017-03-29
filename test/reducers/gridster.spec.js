import { expect } from 'chai';
import I from 'immutable';

import {
  updateSeq,
} from '../../src/reducers/gridster';

it('updateSeq', () => {
  it('should update a sequence at an index', () => {
    const seq = I.fromJS([{ a: 1 }, { a: 2 }]);
    const expected = I.fromJS([{ a: 1 }, { a: 3 }]);
    const result = updateSeq(seq, 1, item => item.set('a', 3));
    expect(result.getIn([1, 'a'])).to.equal(expected.getIn([1, 'a']));
  });
});


/* More tests would be here but I have to go to the shops now */
