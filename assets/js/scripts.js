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
            planRadius: 14.2,
            orbitSpeed: 69,
            color: "#E89624"
        },
        {
            planName: "Earth",
            orbitRadius: 115,
            planRadius: 15,
            orbitSpeed: 50,
            color: "#518E87"
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