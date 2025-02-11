import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Імітація асинхронного запиту
const fetchCounterValue = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve({ value: 42 });
        }, 1000);
    });
};


export const fetchCounter = createAsyncThunk(
    'counter/fetch',
    async () => {
        const response = await fetchCounterValue();
        return response.value;
    }
);

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0, loading: false, error: null },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCounter.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchCounter.fulfilled, (state, action) => {
            state.value = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchCounter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;