# ⚽ Football Players React App

A React application that displays football player cards using React Bootstrap. This project demonstrates component composition, props destructuring, array mapping, and inline styling.

## 📋 Features

- **Player Cards**: Beautiful Bootstrap cards displaying player information
- **Responsive Design**: Cards automatically adjust to different screen sizes
- **Component-Based Architecture**: Modular and reusable components
- **Default Props**: Fallback values for missing data
- **Inline Styling**: Custom CSS-in-JS styling for enhanced visuals

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Create the React application:**
   ```bash
   npx create-react-app football-players
   cd football-players
   ```

2. **Install React Bootstrap:**
   ```bash
   npm install react-bootstrap bootstrap
   ```

3. **Create the project files:**
   
   Create the following files in the `src` directory:
   - `players.js`
   - `Player.js`
   - `PlayersList.js`
   
   And replace the existing `App.js`

4. **Copy the code:**
   
   Copy the code from each component file provided in the project to their respective files.

5. **Start the development server:**
   ```bash
   npm start
   ```

6. **View the application:**
   
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
football-players/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js              # Root component
│   ├── Player.js           # Player card component
│   ├── PlayersList.js      # List component that maps players
│   ├── players.js          # Player data array
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
├── README.md
└── ...
```

## 🧩 Components Overview

### `players.js`
Contains an array of player objects with the following attributes:
- `name` - Player's full name
- `team` - Current team
- `nationality` - Player's nationality
- `jerseyNumber` - Jersey number
- `age` - Player's age
- `imageUrl` - URL to player's image

### `Player.js`
A functional component that:
- Receives player data via **destructured props**
- Renders a React Bootstrap Card with player information
- Implements **inline styling** for visual enhancement
- Defines **default props** for all attributes

### `PlayersList.js`
A functional component that:
- Imports player data and Player component
- Uses the **`.map()`** method to iterate through players
- Uses the **spread operator** to pass props to Player component
- Provides container styling for layout

### `App.js`
The root component that:
- Imports and renders the PlayersList component
- Imports Bootstrap CSS

## 🎨 Customization

### Adding New Players

Edit `src/players.js` and add new player objects to the array:

```javascript
{
  name: "New Player",
  team: "Team Name",
  nationality: "Country",
  jerseyNumber: 10,
  age: 25,
  imageUrl: "https://example.com/image.jpg"
}
```

### Modifying Styles

Edit the inline style objects in:
- `Player.js` - for individual card styling
- `PlayersList.js` - for layout and container styling

### Changing Default Props

Modify the `Player.defaultProps` object in `Player.js` to change fallback values.

## 🛠️ Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Bootstrap** - Bootstrap components built with React
- **Bootstrap 5** - CSS framework for responsive design
- **JavaScript ES6+** - Modern JavaScript features

## 📚 Learning Objectives

This project demonstrates:
- ✅ Creating React components
- ✅ Destructuring props
- ✅ Using array `.map()` method for rendering lists
- ✅ Implementing the spread operator
- ✅ Setting default props
- ✅ Applying inline styling
- ✅ Using React Bootstrap components
- ✅ Component composition and data flow

## 🤝 Contributing

Feel free to fork this project and add your own enhancements:
- Add search/filter functionality
- Implement player sorting
- Add more player statistics
- Create player detail pages
- Add animations and transitions

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

Created as a learning project for React component development.

## 🙏 Acknowledgments

- Player data is fictional and for demonstration purposes
- Images sourced from Unsplash (placeholder URLs)
- Built with Create React App
- Styled with React Bootstrap

---

**Happy Coding! 🚀⚽**
