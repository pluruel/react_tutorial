import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// const CounterContainer = () => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()));
  const onDecrease = useCallback(() => dispatch(decrease()));
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number,
});

const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  state => ({
    number: state.counter.number,
  }),
  { increase, decrease },
)(CounterContainer);
