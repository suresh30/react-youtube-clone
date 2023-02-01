import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { YOUTUBE_API_URL } from '@/utils/constants';
import { RootState } from '../index';
import { parseData } from '@/utils';
import { HomePageVideos } from '@/Types';
const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getSearchPageVideos = createAsyncThunk("youtubeApp/searchPageVideos",
    async (isNext: boolean, { getState }) => {
        const {
            youtubeApp: { nextPageToken: nextPageTokenFromState, videos, searchTerm }
        } = getState() as RootState;
        const { data: { items, nextPageToken } } = await axios.get(`${YOUTUBE_API_URL}/search?q=${searchTerm}&key=${API_KEY}&part=snippet&type=video&${isNext ? `pageToken=${nextPageTokenFromState}` : ""}`);
        // console.log(items);
        const parsedData: HomePageVideos[] = await parseData(items);
        // console.log(parsedData);
        return { parsedData: [...videos, ...parsedData], nextPageToken }
    }
)