# Restaurant App
## Main Goal:
You've been asked to design a menu website for a new restaurant opening at 348 E Main St, Lexington, KY. The owners are busy working on their recipes and haven't picked a name yet, so they've asked you to suggest one and use it in your design.
The owners are still working on their recipes. They've populated an API with many possible choices. You are to use the API to generate a sample menu to add to your website. The API URL is: https://sheltered-refuge-85246.herokuapp.com/api/json

A single-page web app that serves as a restaurant splash page with a menu. 

Wireframe:
![wireframe](/wireframe.jpg)

Pseudocode:
    Total of 15 menu items

    App.js: Contains Home page for Title Restaurant

    For Api Data via Axios use a Data.js file/folder

    Components/routes -

    Bootstrap Tab bar 
            
    Dinner.js: contains Data for Dinner data 

    Lunch.js: contains Data for Lunch data 

    Appetizers.js: contains Data for Appetizers data

    Dessert.js: Contains data for Desserts data 

    
    State is updated via the Title page once each component is selected. Nav should display state for the component that is selected. 
    Data will go across the length of the screen or add via indvidual cards. 

    Hero and Footer are static on the main page instead of via their own component file.

    Each component would require a function to map the API data once their tab has been selected to be displayed