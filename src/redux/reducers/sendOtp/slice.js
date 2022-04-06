import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { callAPI } from '../../../helpers/network';
const initialState = {
  loading: false,
};
const slices = createSlice({
  initialState,
  name: 'sendOtp',
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
export const useSendOtpDispatcher = () => {
  const { sendOtp } = useSelector((state) => state);
  const dispatch = useDispatch();
  const doSendOtp = async (values) => {
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
    sendOtp,
    doSendOtp,
  };
};
export default slices.reducer;
