# Use PopCorn Project

This is an interactive webpage that lets user mark and rate the movies the user watched.

## Requirements

1. The webpage should have `header` with a logo, search box and number of results found.
2. The search box, `SearchBox`, component should do the following
   - Start searching for a movie if user types atleast 3 characters.
   - The number of movies found should be displayed in the header.
   - While the search is in progress a loading indication should be displayed
   - If no movies are found the message should be displayed accordingly.
   - Any errors while fetching the movies should be displayed in the main section.
3. The main section of the page should contain two components on each half of the screen.
   - first component should display the list of movies found when user searches for a movie using the search box
   - second component should display the summary of the movies watched and the list of movies that user marked as watched.
4. Each item in the first component `MovieList` should display the movie poster,title and year of release.
5. on clicking a `Movie` in the `MovieList` the second half of the screen should display the movie details (`MovieDetail` component) which should include
   - Poster
   - Title
   - Release Date
   - Run time
   - Genres
   - IMDB rating
   - A widget allowing to rate the movie out of 10 stars ( `Rating` component)
   - Movie plot
   - Director information
   - A back button to close the `MovieDetail` component
6. The user should be able to add the movie to the list of watched movies once the user rates the movie.
7. The `MovieDetail` should close once the user add the movie to watchedlist and the summary stats should be updated accordingly.
8. The second component `WatchedMovieBox` should contain `WatchedMoviesSummary` which should include
   - Number of movies watched
   - Average IMDB Rating of all the movies watched
   - Average User Rating of all the movies watched
   - Average Runtime of all the movies watched
9. The `WatchedMovieBox` should contain `WatchedMovieList` which should display a list of all the movies that the user added to watched movies. Each item in the `WatchedMovieList` should contain
   - Poster
   - Title
   - IMDB Rating
   - User Rating
   - Runtime in minutes
   - A delete button to remove the movie from the list
10. The title of the page should change depending on the selected movie.
11. If no movie is selected the title should be `usePopcorn`
12. The `MovieDetail` component should close when pressing the `Esc` key if it is open.
13. Once the page is loaded the input element in the `SearchBox` should automatically have the focus.
14. If the input in the `SearchBox` does not currently have the focus and the user presses the `Enter` key, the input in the `SearchBox` should get the focus and the contents of the input should be cleared.
15. All the listeners added should be cleaned up appropriately.
16. A custom hook should be used to make API calls to the OMDB API.
    > Note: Details of using OMDB API can be found [here](https://www.omdbapi.com/).
17. The `MovieList` and the `WatchedMovieBox` should be minimizable and expandable on click of a button.

## Concepts Demonstrated

1. Components
2. Composition
3. Reusability
4. Prop Drilling Issue
5. Solution to prop drilling using composition
6. Building Reusable Star rating Component
7. PropTypes
8. useEffect hook
9. Asynchronous functions
10. Clean up functions in useEffect
11. Using AbortController
12. Custom Hooks
13. Refs
14. Using local storage to persist state.

#### References

[Ultimate React Course by Jonas Schmedtmann](https://github.com/jonasschmedtmann/ultimate-react-course)
