import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '@/components/Spinner';
import { HomePageVideos } from '@/Types';
import { getSearchPageVideos } from '@/store/reducers/getSearchPageVideos';
import { useNavigate } from 'react-router-dom';
import { clearVideos } from '@/store';
import SearchCard from '@/components/SearchCard';

type Props = {};

const Search = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  useEffect(() => {
    // dispatch(getSearchPageVideos(false));
    // console.log(videos);
    dispatch(clearVideos());
    if (searchTerm === '') navigate('/');
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, navigate, searchTerm]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '6vh' }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: '94vh' }}>
        <Sidebar />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={900}
            >
              <div className="my-5">
                {videos.map((item: HomePageVideos) => {
                  return <SearchCard key={item.videoId} data={item} />;
                })}
              </div>
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
