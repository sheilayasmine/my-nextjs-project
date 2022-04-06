import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'forgot',
  reducers: {
    toggleLoading(state, action) {
      Object.assign(state, {
        ...state,
        loading: action.payload,
      });
    },
  },
});
const { toggleLoading } = slices.actions;
export const useForgotDispatcher = () => {
  const { forgot } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doForgot = async (values) => {
    dispatch(toggleLoading(true));
    const response = await callAPI({
      url: '/auth/local',
      method: 'POST',
      data: values,
    });
    const { data } = response;
    localStorage.setItem('jwt', data.jwt);
    localStorage.setItem('user', JSON.stringify(data.user));
    dispatch(toggleLoading(false));
  };
  return {
    forgot,
    doForgot,
  };
};
export default slices.reducer;
