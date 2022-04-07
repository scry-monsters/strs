import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { StoryState } from "../../types/stories";
import $api from "../../utils/axios";
import { RootState } from "../store";

const initialState : StoryState = {
    loading: false,
    error: null
}

const storiesAdapter = createEntityAdapter<Story>();
export const storiesSelector = storiesAdapter.getSelectors(
    (state: RootState) => state.stories
)

export const fetchStories = createAsyncThunk("fetchStories", async () => {
    const {data} = await $api.get("/stories");
    return data;
}
)

export const storiesSlice = createSlice({
    name: "storiesSlice",
    initialState: storiesAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchStories.fulfilled, (state, action) => {
            storiesAdapter.setAll(state, action.payload)
            state.error = null;
            state.loading = false;
        })
        builder.addCase(fetchStories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        builder.addCase(fetchStories.pending, (state) => {
            state.error = null;
            state.loading = true;
        })
    }
})

export const storiesReducer = storiesSlice.reducer;