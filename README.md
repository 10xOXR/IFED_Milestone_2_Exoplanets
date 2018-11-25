# Exoplanets and How to Find Them
### _Milestone Project 2: Interactive Frontend Development (JavaScript / jQuery / D3.js / DC.js)_

This project centres around an interactive data dashboard detailing various aspects of Exoplanet discoveries. Rather than a simple one-page (and dull) dashboard, I thought it would be more engaging to build the dashboard in the wider context of a site providing information on exoplanets and the methods used to find them. 

The dashboard has been build using the latest versions D3.js, DC.js, and Crossfilter.js libraries, and styled using only CSS-Grid.
 
## UX
 
I designed the site to provide a good understanding of what exoplanets are, the methods used to detect them, important astronomical terms, and an interactive dashboard to allow users to drill-down on the available data. It primarily services the following user types:

- Users that have no previous knowledge of exoplanets or their detection methods.
- Users with some general knowledge of exoplanets, and are looking for more information on how they are detected.
- Users familiar with both exoplanets and their detection, looking to get more in-depth data.

Adobe XD was used to create [wireframes](https://github.com/10xOXR/IFED_Milestone_2_Exoplanets/tree/master/docs) for each section of the site.

## Features

The following is a summary of the features already in place and those that could perhaps be implemented in the future.

### Existing Features

- The entire site is a single HTML page, with elements hidden and shown, using jQuery, according to the Navbar selection.
	- This approach is more streamlined than having six separate pages and provides more visually appealing transitions.

- Fully responsive D3.js animations, DC.js dashboard charts, and interactive charts using Crossfilter2.
	- The latest versions of each library have been used to provide fully-interactive dashboard charts, and the use of viewBox scaling has allowed the charts and animations to be fully responsive, with no overflow.

- Animations it the 'Methodology' section are embedded MP4 videos, which auto-play and loop continuously.
	- Embedding MP4 videos that auto-play and loop allows for far smaller file sizes in comparison to their being implemented in GIF format.

- ‘Further Resources’ page contains externals links to twelve other related sites.
	- This allows users to access more information on exoplanets and obtain their own datasets.

- Back-to-Top button that appears only once users have scrolled beyond 300 pixels, and only when the screen width is below 820 pixels.
	- A simple navigational function, implemented in JavaScript, which allows users to return quickly to the top of any page without the need to scroll manually.

### Features Left to Implement

- Expanded 'Observatory Location' section using the Google Maps / Leaflet API.
	- It had been my intention to create a separate section to allow the users to see the location of each observatory on a map, and have the dashboard data filtered based on the chosen location. Time constraints have prevented my doing so in this implementation, but I may return to it in the future. 

## Testing

### Browser Compatibility

I tested the site to be sure that it rendered consistently and as expected in all major web browsers, both desktop and mobile versions. This included:

- Ensuring all elements are responsive and that all content is legible.
- Testing that the Navbar changed as expected in line with media queries, collapsing to a hamburger menu below 820 px.
- Site was test-rendered using desktop and mobile equivalents of:
	- Chrome (Versions 67 – 70)
	- Firefox (Version 60 - 63)
	- Opera (Version 56)
	- MS Edge (Version 42.17134.1.0)
	- Safari (Version 12)

### Testing Matrix

A test matrix created in MS Excel can be found [here](https://github.com/10xOXR/IFED_Milestone_2_Exoplanets/blob/master/docs/page_tests.xlsx). It details all of the tests made to ensure the site renders consistently across different devices and browsers, and that all functionality performed as expected.

### Noted Issues

Owing to the use of CSS-Grid for the section layouts, the site is incompatible with all versions of Microsoft Internet Explorer. This shouldn't pose much of an issue, as usage of IE has fallen to less than 7% globally (Aug'18) and all other browsers in use support CSS-Grid natively.

## Technologies Used

- [HTML5]( https://www.w3.org/TR/2017/REC-html52-20171214/)
	- Used to construct the basic site structure.

- [CSS3]( https://www.w3.org/standards/techs/css#w3c_all)
	- Provides styling for the page and all content.

- [D3.js](https://d3js.org/)
	- Visualisation framework for rendering all animations and the backbone of the Dashboard charts.

- [Dimensional Charting (DC.js)](https://dc-js.github.io/dc.js/)
	- Library using D3.js to create charts that allow highly efficient exploration on large, multi-dimensional datasets.

- [Crossfilter2](https://www.npmjs.com/package/crossfilter2)
	- A JavaScript library which, when used in conjunction with DC, allows the creation of linked, responsive charts across large datasets.

- [JavaScript](https://www.javascript.com/)
	- Enables the vast majority of site interactivity, including the Dashboard charts.

- [jQuery]( https://jquery.com/)
	- Extensively used to enable most of the site functionality.

- [Font Awesome 5]( https://fontawesome.com/icons?d=gallery)
	- Icon elements used for hamburger menu and back-to-top button.


## Deployment

The site has been deployed using GitHub Pages and is available to review [here](https://10xoxr.github.io/IFED_Milestone_2_Exoplanets/).

Local deployment is not required.

## Content

Both the planetary CVS data and text content on all pages was copied and/or amended from the following sites:

- [NASA Exoplanet Archive](https://exoplanetarchive.ipac.caltech.edu/)

- [Caltech Exoplanet Science Institute](https://exoplanetarchive.ipac.caltech.edu/cgi-bin/TblView/nph-tblView?app=ExoTbls&config=planets)

- [Wikipedia](https://en.wikipedia.org/wiki/Methods_of_detecting_exoplanets)

## Media

Complete sources for all media can be found in the [References](https://github.com/10xOXR/IFED_Milestone_2_Exoplanets/blob/master/docs/references.txt)
document.

## Acknowledgements

I was inspired to create this site after viewing the beautiful, interactive exoplanet demo created by [Nadieh Bremer](https://github.com/nbremer), and the other visualisations on her site, [Visual Cinnamon](https://www.visualcinnamon.com/).

Thanks to my Mentor [Mark Railton](https://github.com/railto) for his suggestions and support.

My never-ending thanks to [Tim Nelson]( https://github.com/TravelTimN) for his suggestions, guidance, and pushing me to think beyond the most obvious way of going about a task.