// Width and height variables for the SVG viewBox coordinate system.
var w = 800,
    h = 800,

// Variable establishing a start time from moment page loaded,
// defined as seconds since 01/01/1970 00:00:00.
    startTime = Date.now(),

// Variable containing array objects for each planet.
    planets = [{
            planetName: "Mercury",
            orbitRadius: 40,
            planetRadius: 5.7,
            orbitSpeed: 205,
            color: "#A17F5D"
        },
        {
            planetName: "Venus",
            orbitRadius: 80,
            planetRadius: 9,
            orbitSpeed: 69,
            color: "#E89624"
        },
        {
            planetName: "Earth",
            orbitRadius: 115,
            planetRadius: 10,
            orbitSpeed: 50,
            color: "#518E87"
        },
        {
            planetName: "Mars",
            orbitRadius: 150,
            planetRadius: 6,
            orbitSpeed: 26.5,
            color: "#964120"
        },
        {
            planetName: "Jupiter",
            orbitRadius: 200,
            planetRadius: 30,
            orbitSpeed: 4.15,
            color: "#BBAC93"
        },
        {
            planetName: "Saturn",
            orbitRadius: 265,
            planetRadius: 25,
            orbitSpeed: 1.725,
            color: "#A38E5F"
        },
        {
            planetName: "Uranus",
            orbitRadius: 315,
            planetRadius: 16,
            orbitSpeed: .595,
            color: "#CDF3F6"
        },
        {
            planetName: "Neptune",
            orbitRadius: 360,
            planetRadius: 15,
            orbitSpeed: .305,
            color: "#4270FD"
        }
    ];

// Create an SVG and attach it to the #planets div.
// Use SVG viewBox to control the scaling of the SVG.
var svg = d3.select("#planets")
    .append("svg")
    .attr("viewBox", "0 0 " + w + " " + h);

// Append a circle to the SVG to represent the Sun.
svg.append("circle")
    .attr("r", 20)
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .style("fill", "url(#radial-gradient");

//Append defs to store graphical objects.
var defs = svg.append("defs");

//Append a radialGradient element to the defs and give it a unique id.
var radialGradient = defs.append("radialGradient")
    .attr("id", "radial-gradient")
    .attr("cx", "50%")    //The x-center of the gradient
    .attr("cy", "50%")    //The y-center of the gradient
    .attr("r", "50%");   //The radius of the gradient

    //Add colors to make the gradient appear like the Sun.
    radialGradient.append("stop")
        .attr("offset", "0%")
        .attr("stop-color", "#FFF76B");
    radialGradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#FFF845");
    radialGradient.append("stop")
        .attr("offset", "90%")
        .attr("stop-color", "#FFDA4E");
    radialGradient.append("stop")
        .attr("offset", "100%")
        .attr("stop-color", "#FB8933");

// Create an SVG group and append each planet in the 'planets'
// variable to the SVG.
var container = svg.append("g")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

container.selectAll("g.planetName")
    .data(planets)
    .enter()
    .append("g")
    .attr("class", "planetName").each(function (d, i) {
        d3.select(this)
            .append("circle")
            .attr("class", "orbit")
            .attr("r", d.orbitRadius);
        d3.select(this)
            .append("circle")
            .attr("r", d.planetRadius)
            .attr("cx", d.orbitRadius)
            .attr("cy", 0)
            .style("fill", function (d) {
                return "" + d.color + "";
            });
    });

// Timer function to animate the SVG group elements according
// to the speed defined in the 'planets' variable array.
d3.timer(function () {
    var delta = (Date.now() - startTime);
    svg.selectAll(".planetName")
        .attr("transform", function (d) {
            return "rotate(" + delta * d.orbitSpeed / 200 + ")";
        });
});