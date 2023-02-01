export interface InitialState {
    videos: HomePageVideos[];
    currentPlaying: CurrentPlaying | null;
    searchTerm: string;
    searchResults: any[];
    nextPageToken: string | null;
    recommendedVideos: RecommendedVideos[];
}

export interface HomePageVideos {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
    }
}

export interface CurrentPlaying {
    videoId: string | any;
    videoTitle: string | any;
    videoDescription: string | any;
    videoViews: string | any;
    videoLikes: string | any;
    videoAge: string | any;
    channelInfo: {
        id: string | any;
        image: string | any;
        name: string | any;
        subscribers: string | any;
    }
}

export interface RecommendedVideos {
    videoId: string | any;
    videoTitle: string | any;
    videoThumbnail: string | any;
    videoDuration: string | any;
    videoViews: string | any;
    videoAge: string | any;
    channelInfo: {
        id: string | any;
        name: string | any;
    }
}

export interface Item {
    snippet: {
        title: string | any;
        thumbnails: { medium: { url: string | any } };
        publishedAt: Date | any;
        channelTitle: string | any;
        channelId: string | any;
    };
    contentDetails: { upload: { videoId: string | any } }
}