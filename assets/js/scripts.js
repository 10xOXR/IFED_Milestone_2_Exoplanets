var w = 800,
    h = 800,
    startTime = Date.now(),
    planets = [{
            planName: "Mercury",
            orbitRadius: 40,
            planRadius: 5.7,
            orbitSpeed: 205,
            color: "#A17F5D"
        },
        {
            planName: "Venus",
            orbitRadius: 80,
            planRadius: 9,
            orbitSpeed: 69,
            color: "#E89624"
        },
        {
            planName: "Earth",
            orbitRadius: 115,
            planRadius: 10,
            orbitSpeed: 50,
            color: "#518E87"
        },
        {
            planName: "Mars",
            orbitRadius: 150,
            planRadius: 6,
            orbitSpeed: 26.5,
            color: "#964120"
        },
        {
            planName: "Jupiter",
            orbitRadius: 200,
            planRadius: 30,
            orbitSpeed: 4.15,
            color: "#BBAC93"
        },
        {
            planName: "Saturn",
            orbitRadius: 265,
            planRadius: 25,
            orbitSpeed: 1.725,
            color: "#A38E5F"
        },
        {
            planName: "Uranus",
            orbitRadius: 315,
            planRadius: 16,
            orbitSpeed: .595,
            color: "#CDF3F6"
        },
        {
            planName: "Neptune",
            orbitRadius: 360,
            planRadius: 15,
            orbitSpeed: .305,
            color: "#4270FD"
        }
    ];

var svg = d3.select("#planets")
    .append("svg")
    .attr("viewBox", "0 0 " + w + " " + h);

svg.append("circle")
    .attr("r", 20)
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .style("fill", "yellow");

var container = svg.append("g")
    .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

container.selectAll("g.planName")
    .data(planets)
    .enter()
    .append("g")
    .attr("class", "planName").each(function (d, i) {
        d3.select(this)
            .append("circle")
            .attr("class", "orbit")
            .attr("r", d.orbitRadius);
        d3.select(this)
            .append("circle")
            .attr("r", d.planRadius)
            .attr("cx", d.orbitRadius)
            .attr("cy", 0)
            .style("fill", function (d) {
                return "" + d.color + "";
            });
    });

d3.timer(function () {
    var delta = (Date.now() - startTime);
    svg.selectAll(".planName")
        .attr("transform", function (d) {
            return "rotate(" + delta * d.orbitSpeed / 200 + ")";
        });
});