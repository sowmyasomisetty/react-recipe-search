Recipe Search App

A powerful React.js application that allows users to search for recipes, view images, ingredients, and step-by-step instructions, with a dark/light mode toggle and real-time search suggestions. 

Features
    ✅ Real-time Search – Instantly find recipes as you type.
    ✅ Debounced API Calls – Optimized search performance with lodash.debounce.
    ✅ Recipe Details – Displays image, ingredients, and step-by-step cooking instructions.
    ✅ Dark Mode Toggle – Easily switch between light and dark themes.
    ✅ Interactive UI – Hover effects, animations, and a clean design.
    ✅ Fully Responsive – Works on desktops, tablets, and mobile devices.

Tech Stack
    🔹 React.js – Functional components & hooks
    🔹 Axios – API requests for fetching recipes
    🔹 Lodash.debounce – Improves search performance
    🔹 CSS (Custom & Responsive) – Styled for a modern look
    🔹 DummyJSON API – Provides sample recipe data

How It Works
    The app manages search input and dark mode toggle using React state.
    As the user types a recipe name, the app fetches matching recipes and displays suggestions.
    Clicking on a recipe displays its image, ingredients, and instructions.
    The dark mode toggle adjusts the background and text colors dynamically.

Installation & Setup
    1️. Clone the Repository
        git clone https://github.com/sowmyasomisetty/react-recipe-search
        cd react-recipe-search
    2. Install Dependencies
        npm install
    3. Start the Application
        npm start
    4. Run the application
        npm run dev

Troubleshooting
    ❌ API Not Fetching Data?
        Check API CORS Policy – Some APIs restrict public access. You may need a backend proxy.
        Verify API Endpoint – Ensure the API URL is correct and not rate-limited.

    ❌ Images Not Displaying?
        Check the File Path – Ensure the image URL is correct and case-sensitive.
        Use Absolute URLs – If images are in the public folder, reference them correctly.

    ❌ Dark Mode Not Persisting?
        Check Local Storage – The theme preference is stored in localStorage.
        Test in Incognito Mode – Some browser extensions may interfere with local storage.