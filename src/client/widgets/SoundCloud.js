// /* eslint-disable no-console */
// import React, { Component } from 'react';
// import $ from 'jquery';
// // import SC from 'node-soundcloud'; // or include the thing in the index.html

// class SoundCloud extends Component {
//   constructor(props) {
//     super(props);
//     // this.CLIENT_ID = '8e6b3901da7e06717e113fa73481eecf'; // hide this
//     // this.CLIENT_SECRET = 'bb59357ed7b702b3ebecdedfc797b6ad'; // hide this too
//     this.client_id = `?client_id=${this.CLIENT_ID}`;

//     this.state = {
//       playlist: {},
//     };
//   }

//   componentDidMount() {
//   }

//   // playTrack(track) {
//   //   $.get(`http://api.soundcloud.com/tracks/${track.id}.json${this.client_id}`, () => {
//   //     const src = `http://api.soundcloud.com/tracks/${track.id}/stream?client_id=${this.CLIENT_ID}`;

//   //     $('#audio-player').attr('src', src);
//   //     $('#song-information').text(track.title);
//   //     $('#sc-link').attr('href', track.permalink_url);
//   //   });
//   // }

//   // findUsersFavorites(username) {
//   //   $.ajax({
//   //     url: '/api/userfavorites',
//   //     type: 'POST',
//   //     success: ,
//   //     error: ,
//   //   });
//   // }

//   // findUsersPlaylist(username) {
//   //   $.ajax({
//   //     url: '/api/userplaylist',
//   //     type: 'POST',
//   //     success: ,
//   //     error: ,
//   //   });
//   // }

//   searchQuery() {
//     $.ajax({
//       url: '/api/searchquery',
//       type: 'POST',
//       success: (result) => {
//         console.log('result is:', result);
//       },
//       error: (err) => {
//         console.log('i have failed youuu', err);
//       },
//     });
//   }

//   // searchGenre(genre) {
//   //   $.ajax({
//   //     url: '/api/searchgenre',
//   //     type: 'POST',
//   //     success: ,
//   //     error: ,
//   //   });
//   // }


//   render() {
//     return (
//       <div className="container">
//         <audio id="audio-player" controls ></audio>
//         <a id="sc-link" target="_blank"><p id="song-information"></p></a>
//       </div>
//     );
//   }
// }

// export default SoundCloud;
