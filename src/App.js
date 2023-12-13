// // App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import SearchResults from './components/SearchResults';
// import PostDetail from './components/PostDetail';
// import "./App.css"

// const App = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);

//   const onBack = () => {
//     setSelectedPost(null);
//   }
//   const handleSearch = async (query) => {
//     try {
//       const response = await axios.get(
//         `http://hn.algolia.com/api/v1/search?query=${query}`
//       );
//       setSearchResults(response.data.hits);
//       setSelectedPost(null); // Reset selected post when a new search is performed
//     } catch (error) {
//       console.error('Error fetching search results', error);
//     }
//   };

//   const handleResultClick = async (result) => {
//     try {
//       const [postResponse, authorResponse] = await Promise.all([
//         axios.get(`http://hn.algolia.com/api/v1/items/${result.objectID}`),
//         axios.get(`http://hn.algolia.com/api/v1/users/${result.author}`),
//       ]);

//       const postDetails = postResponse.data;
//       const authorDetails = authorResponse.data;

//       setSelectedPost({ ...postDetails, authorDetails });
//     } catch (error) {
//       console.error('Error fetching post details', error);
//     }
//   };

//   return (
//     <div className='parent'>
//       {selectedPost ? (
//         <div className='main-2'>
//           {/* <button onClick={() => setSelectedPost(null)}>Back</button> */}
//           <PostDetail post={selectedPost} onBack={onBack}/>
//         </div>
//       ) : (
//         <div className='main'>
//           <div className='main-top'>
//             <h1 className='heading'>Hacker News Search</h1>
//             <SearchBar onSearch={handleSearch} />
//           </div>
//           {searchResults.length === 0 ? <div className='noresult'>Search For Results</div> :
//             <div className='main-bottom'>
//               <SearchResults
//                 results={searchResults}
//                 onResultClick={handleResultClick}
//                 />
//             </div>
//             }
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// // #fbfaf8 - white
// // 0A122A - blue
// // 698F3F - green
// // E7DECD - bone
// // 804E49 - chocolate


// // App.js
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import SearchResults from './components/SearchResults';
// import PostDetail from './components/PostDetail';
// import './App.css';

// const App = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedPost, setSelectedPost] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onBack = () => {
//     setSelectedPost(null);
//   };

//   const handleSearch = async (query) => {
//     try {
//       setLoading(true); // Set loading to true when starting the search
//       const response = await axios.get(
//         `http://hn.algolia.com/api/v1/search?query=${query}`
//       );
//       setSearchResults(response.data.hits);
//       setSelectedPost(null); // Reset selected post when a new search is performed
//     } catch (error) {
//       console.error('Error fetching search results', error);
//     } finally {
//       setLoading(false); // Set loading to false when the search is complete
//     }
//   };

//   const handleResultClick = async (result) => {
//     try {
//       setLoading(true); // Set loading to true when fetching post details
//       const [postResponse, authorResponse] = await Promise.all([
//         axios.get(`http://hn.algolia.com/api/v1/items/${result.objectID}`),
//         axios.get(`http://hn.algolia.com/api/v1/users/${result.author}`),
//       ]);

//       const postDetails = postResponse.data;
//       const authorDetails = authorResponse.data;

//       setSelectedPost({ ...postDetails, authorDetails });
//     } catch (error) {
//       console.error('Error fetching post details', error);
//     } finally {
//       setLoading(false); // Set loading to false when post details are fetched
//     }
//   };

//   useEffect(() => {
//     // Use useEffect to simulate a loading delay (optional)
//     const delay = setTimeout(() => {
//       setLoading(false);
//     }, 1000);

//     return () => clearTimeout(delay); // Clear timeout on component unmount
//   }, []);

//   return (
//     <div className="parent">
//       {loading ? (
//         <div className="loading">Loading...</div>
//       ) : selectedPost ? (
//         <div className="main-2">
//           <PostDetail post={selectedPost} onBack={onBack} />
//         </div>
//       ) : (
//         <div className="main">
//           <div className="main-top">
//             <h1 className="heading">Hacker News Search</h1>
//             <SearchBar onSearch={handleSearch} />
//           </div>
//           {searchResults.length === 0 ? (
//             <div className="noresult">Search For Results</div>
//           ) : (
//             <div className="main-bottom">
//               <SearchResults
//                 results={searchResults}
//                 onResultClick={handleResultClick}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;


// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PostDetail from './components/PostDetail';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loadingResults, setLoadingResults] = useState(false);

  const onBack = () => {
    setSelectedPost(null);
  };

  const handleSearch = async (query) => {
    try {
      setLoadingResults(true); // Set loading to true when starting the search
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${query}`
      );
      setSearchResults(response.data.hits);
      setSelectedPost(null); // Reset selected post when a new search is performed
    } catch (error) {
      console.error('Error fetching search results', error);
    } finally {
      setLoadingResults(false); // Set loading to false when the search is complete
    }
  };

  const handleResultClick = async (result) => {
    try {
      setLoadingResults(true); 
      const [postResponse, authorResponse] = await Promise.all([
        axios.get(`http://hn.algolia.com/api/v1/items/${result.objectID}`),
        axios.get(`http://hn.algolia.com/api/v1/users/${result.author}`),
      ]);

      const postDetails = postResponse.data;
      const authorDetails = authorResponse.data;

      setSelectedPost({ ...postDetails, authorDetails });
    } catch (error) {
      console.error('Error fetching post details', error);
    } finally {
      setLoadingResults(false); // Set loading to false when the search is complete
    }
  };

  useEffect(() => {
    // Use useEffect to simulate a loading delay (optional)
    const delay = setTimeout(() => {
      setLoadingResults(false);
    }, 1000);

    return () => clearTimeout(delay); // Clear timeout on component unmount
  }, []);

  return (
    <div className="parent">
      {selectedPost ? (
        <div className="main-2">
          {loadingResults ? <div className="loading"><img width="108" height="108" src="/loader.gif" alt="" /></div> : 
          <PostDetail post={selectedPost} onBack={onBack} />}
        </div>
      ) : (
        <div className="main">
          <div className="main-top">
            <div className="heading">Hacker News Search</div>
            <SearchBar onSearch={handleSearch} />
          </div>
          {loadingResults ? (
            <div className="loading"><img width="108" height="108" src="/loader.gif" alt="" /></div>
          ) : (
            <div className="main-bottom">
              {searchResults.length === 0 ? (
                <div className="noresult">Search For Results</div>
              ) : (
                <SearchResults
                  results={searchResults}
                  onResultClick={handleResultClick}
                />
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
