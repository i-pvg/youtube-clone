import React from 'react'
import {Grid} from '@material-ui/core'; 
import youtube from './api/youtube';
import {SearchBar, VideoDetail, VideoList} from './components/';

class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null,
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search',{
            params: {
                part: 'snippet', //returns the videos
                maxResults: 5,
                key: 'API_KEY',
                q: searchTerm,

            }
        });

        this.setState({videos: response.data.items,
                        selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }



    render(){

        const {selectedVideo, videos} = this.state;
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit= { this.handleSubmit}/> 
                            //this is a handleSubmit for the App.js
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo} />
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}  />
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}
export default App;