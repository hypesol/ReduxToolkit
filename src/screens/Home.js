import * as React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, incrementByAmount} from '../redux/counterSlice';

const Home = () => {
  console.log();
  const count = useSelector(state => state.counter.counteValue);
  console.log(count);
  // const count = useSelector((state) => state.slice.counteValue)
  const username = useSelector(state => state.counter.username);

  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{fontSize: 24}}>
        HOME - {count} - {username}
      </Text>
      <Pressable onPress={() => dispatch(increment())}>
        <Text>PLUS</Text>
      </Pressable>

      <Pressable onPress={() => dispatch(decrement())}>
        <Text>MINUS</Text>
      </Pressable>
    </View>
  );
};

export default Home;
