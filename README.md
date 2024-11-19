# Movie Search App

A React-based movie search application that allows users to search for movies, view detailed information, and manage their favorite movies.

---

## Features

- **Search Movies**: Users can search for movies by title using the OMDB API.
- **Home Page**: Displays a grid of popular or trending movies by default.
- **Movie Details Page**: Shows detailed information like title, year, genre, ratings, and plot.
- **Favorites**: Allows users to add or view their favorite movies.
- **Dark Theme**: Features a modern, dark-themed design.
- **Pagination**: Handles large sets of movies with navigation buttons.
- **Navbar and Footer**: Includes a logo and footer for branding.

---

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **API**: OMDB API (http://www.omdbapi.com/)

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo-url/movie-search-app.git

2. **cd movie-search-app

3. npm install

4. npm run dev

## 
Here’s the README.md file content formatted for direct use in VS Code:

markdown
Copy code
# Movie Search App

A React-based movie search application that allows users to search for movies, view detailed information, and manage their favorite movies.

---

## Features

- **Search Movies**: Users can search for movies by title using the OMDB API.
- **Home Page**: Displays a grid of popular or trending movies by default.
- **Movie Details Page**: Shows detailed information like title, year, genre, ratings, and plot.
- **Favorites**: Allows users to add or view their favorite movies.
- **Dark Theme**: Features a modern, dark-themed design.
- **Pagination**: Handles large sets of movies with navigation buttons.
- **Navbar and Footer**: Includes a logo and footer for branding.

---

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **API**: OMDB API (http://www.omdbapi.com/)

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo-url/movie-search-app.git
Navigate to the project directory:

bash
Copy code
cd movie-search-app
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Access the application: Open http://localhost:5173 in your browser.

API Integration
This project uses the OMDB API for fetching movie data. Make sure to add your API key in the .env file:

Create a .env file in the project root.
Add your API key:
env
Copy code
VITE_OMDB_API_KEY=your_api_key


## project structure

movie-search-app/
├── public/
├── src/
│   ├── assets/         # Static assets like images
│   ├── components/     # Reusable components
│   ├── pages/          # Pages (Home, MovieDetails)
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   ├── styles.css      # Tailwind CSS imports
│   └── api/            # API service functions
├── .env                # Environment variables
├── package.json        # Project dependencies
└── README.md           # Project documentation


## Scripts

- Start Development Server: npm run dev

- Build for Production: npm run build

- Preview Production Build: npm run preview


## Acknowledgments

- OMDB API

- Vite

- Tailwind CSS


