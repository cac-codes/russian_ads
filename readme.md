Electronic Espionage 

click to access: url ***


  <img src="/img/finishedproject.png" width="350" title="hover text">


Contents 




1. Background

The Mueller report in the USA outlined attempts by the Russian federation to interfere in the presidential elections of 2016. This took various forms, one arm of which was leveraging the power of social media, to wit facebook. The report traces and publishes various advertisements placed on facebook throught the election season by the mildly-named 'Internet Research Agency' operating from Moscow, over 3500 in total. Data about this was scraped by colleagues, converted into JSON format and placed into an APS to which we made requests. 

2. How to use the site.

A visitor would be greeted by information on the advertisements targeted to the USA in general including: Total Ads Deployed, Total Rubles Paid to Facebook, and Total Impressions.

Subsequently users can interact with the map via hover and click functions which would import state-specific data. 

An array of ads are displayed on the right-hand side of the page with options above for sorting by impressions from highest to lowest and cost of the ads in that category from highest to lowest

Users can click on each individual ad, making the "card" flip to reveal specific information about the clicked ad. 

3. Developement

We utilised HTML, Javascript, CSS and libraries including D3 for data visualsation Planning was done on whimsical *** Workflow was organised on trello ***

  <img src="/img/project3WireFrame.png" width="350" alt="accessibility text">

Development began with a powerpoint that was created to discuss the theme and direction of the project. A wireframe was then created using whimsical to visualize the layout and flow of the website. The result would be an interactive map of the USA divided by state. Trello was used to list out all required features, with members dividing into two separate teams to tackle front-end and back-end respectively. 

  <img src="/img/project3Trello.png" width="350" alt="accessibility text">


Throughout the development process, both teams would regularly collaborate in order to ensure front-end features could succesfully utilize back-end data. 


4. Problems
    - A cross origin request error was encountered and remedied by creating using our own server to make a request to the original API and saving the data to our own server in order to decrease loading time.  

5. Challenges 
    - figuring out how we wanted to organize data from the Original API that contained over 3000 ads
    - filtering out information we wanted from the original API and saving them to a .js file we can access
    - CSS
    - calculating the sum total of Rubles spent for all ads in the US and all ads per state
    - calculating the sum total of impressions and sum total of all posts in the US and per state. 
    - Integrating backend code with front end
    - accounting for missing information from the original database. For example, when organizing by state, we found out that not every ad had a state listed. Some of the values within the original API had null values. 

6. Lessons 
    - how to solve 4. and 5. (see above)