import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

let initialState = {
  jobs: null,
  loading: false,
  error: null,
};

export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async (_, {rejectWithValue}) => {
    try {
      const result = await axios.get(
        'https://www.themuse.com/api/public/jobs?page=1',
      );
      return result.data;
    } catch (e) {
      throw rejectWithValue({
        status: e.response.status,
        error: e.response.data.error,
      });
    }
  },
);

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchJobs.pending, state => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.jobs = action.payload.results;
        state.loading = false;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});

export default jobsSlice.reducer;
