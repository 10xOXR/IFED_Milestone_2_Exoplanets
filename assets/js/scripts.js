// ------------------------------------- NAVBAR -------------------------------------

$(document).ready(function () {

    // On load, hide all sections aside from 'Home'.
    $(function () {
        $(".statistics, .exoplanets, .terminology, .methodology, .resources").hide();

        // When each nav li is clicked, hide all sections.
        $("#navHome, #navStats, #navExo, #navTerms, #navMethod, #navResc, #cta").on("click", function () {
            $(".home, .statistics, .exoplanets, .terminology, .methodology, .resources").hide();

            // Remove the 'selected' class from all li elements.
            $("#navHome,#navStats,#navExo,#navTerms,#navMethod,#navResc").removeClass('selected');

            // If/else statements to check which li was clicked,
            // apply 'selected' class only to that li, and fadeIn the corresponding section.
            if ($(this).attr("id") == "navHome") {
                $("#navHome").addClass('selected');
                $(".home").fadeIn(500);
            } else if ($(this).attr("id") == "navStats") {
                $("#navStats").addClass('selected');
                $(".statistics").fadeIn(500);
            } else if ($(this).attr("id") == "navExo") {
                $("#navExo").addClass('selected');
                $(".exoplanets").fadeIn(500);
            } else if ($(this).attr("id") == "navTerms") {
                $("#navTerms").addClass('selected');
                $(".terminology").fadeIn(500);
            } else if ($(this).attr("id") == "navMethod") {
                $("#navMethod").addClass('selected');
                $(".methodology").fadeIn(500);
            } else if ($(this).attr("id") == "navResc") {
                $("#navResc").addClass('selected');
                $(".resources").fadeIn(500);
            } else if ($(this).attr("id") == "cta") {
                $("#navStats").addClass('selected');
                $(".statistics").fadeIn(500);
            }
        });
    });

    // Toggle the displayNone class to show/hide the navbar only when
    // the screen/window size is below 820px.
    $("#menu-toggle, #navHome, #navStats, #navExo, #navTerms, #navMethod, #navResc").on("click", function () {
        if ($(window).width() < 820) {
            $("#nav>ul").slideToggle('normal', function () {
                $(this).css('display', '').toggleClass('displayNone');
            });
        };
    });
});

// ------------------------------------- HOME SECTION -------------------------------------

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

// Create an SVG and attach it to the #planets section.
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

// Append a radialGradient element to the defs and give it a unique id.
var radialGradient = defs.append("radialGradient")
    .attr("id", "radial-gradient")
    .attr("cx", "50%")
    .attr("cy", "50%")
    .attr("r", "50%");

// Add colors to make the gradient appear like the Sun.
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

// Create a radial gradient for each of the planets.
var planetGradients = svg.append("defs").selectAll("radialGradient")
    .data(planets)
    .enter()
    .append("radialGradient")

    // Create a unique id per planet.
    .attr("id", function (d) {
        return "gradient-" + d.planetName;
    })

    // Offset the gradients to appear as though each planet.
    // is being lit by the Sun,
    .attr("cx", "35%")
    .attr("cy", "50%")
    .attr("r", "60%");

// Add colors to the gradient.
planetGradients.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", function (d) {
        return d3.rgb(d.color).brighter(1);
    });

planetGradients.append("stop")
    .attr("offset", "50%")
    .attr("stop-color", function (d) {
        return d.color;
    });

planetGradients.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", function (d) {
        return d3.rgb(d.color).darker(1.75);
    });

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
                return "url(#gradient-" + d.planetName + ")";
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

// ------------------------------------- STATISTICS SECTION -------------------------------------

queue()
    .defer(d3.csv, "assets/data/planets.csv")
    .await(makeGraphs);

function makeGraphs(error, exoPlanetData) {
    var ndx = crossfilter(exoPlanetData);

    exoPlanetData.forEach(function (d) {
        d.pl_disc = parseInt(d.pl_disc);
        d.loc_rowid = parseInt(d.loc_rowid);
        d.plnum = parseInt(d.plnum);
        d.pl_orbper = parseFloat(d.pl_orbper);
    });

    exo_discovery_year(ndx);
    planets_in_system(ndx);
    planets_orbital_period(ndx);
    observatory_location(ndx, "Ground", "#ground-based");
    observatory_location(ndx, "Space", "#space-based");
    observatory_location(ndx, "Multiple Locales", "#multiple");

    dc.renderAll();
};

function observatory_location(ndx, location, element) {
    var percentageByLocation = ndx.groupAll().reduce(
        function (p, v) {
            if (typeof v.loc_rowid == 'number') {
                p.count++;
                if (v.pl_locale === location) {
                    p.locale++;
                }
            }
            return p;
        },
        function (p, v) {
            if (typeof v.loc_rowid == 'number') {
                p.count--;
                if (v.pl_locale === location) {
                    p.locale--;
                }
            }
            return p;
        },
        function () {
            return {
                count: 0,
                locale: 0
            };
        }
    );
    dc.numberDisplay(element)
        .formatNumber(d3.format(".2%"))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.locale / d.count);
            }
        })
        .group(percentageByLocation)
        .transitionDuration(500);
};

function exo_discovery_year(ndx) {

    function rankByMethod(dimension, discMethod) {
        return dimension.group().reduce(
            function (p, v) {
                p.total++;
                if (v.discmethod == discMethod) {
                    p.match++;
                }
                return p;
            },
            function (p, v) {
                p.total--;
                if (v.discmethod == discMethod) {
                    p.match--;
                }
                return p;
            },
            function () {
                return {
                    total: 0,
                    match: 0
                };
            }
        );
    };

    var w = 1150;
    var h = 450
    var dim = ndx.dimension(dc.pluck("pl_disc"));
    var astroByMethod = rankByMethod(dim, "Astrometry");
    var eclipseTimeVarByMethod = rankByMethod(dim, "Eclipse Timing Variations");
    var imageByMethod = rankByMethod(dim, "Imaging");
    var microlensByMethod = rankByMethod(dim, "Microlensing");
    var orbitBrightModByMethod = rankByMethod(dim, "Orbital Brightness Modulation");
    var pulsarTimeByMethod = rankByMethod(dim, "Pulsar Timing");
    var pulsarTimeVarByMethod = rankByMethod(dim, "Pulsation Timing Variations");
    var radialVelByMethod = rankByMethod(dim, "Radial Velocity");
    var transitByMethod = rankByMethod(dim, "Transit");
    var transitTimeByMethod = rankByMethod(dim, "Transit Timing Variations");

    dc.barChart("#disc-year")
        .width(950)
        .height(250)
        .gap(10)
        .useViewBoxResizing(true)
        .dimension(dim)
        .group(radialVelByMethod, "Radial Velocity")
        //.stack(radialVelByMethod, "Radial Velocity")
        .stack(imageByMethod, "Imaging")
        .stack(astroByMethod, "Astrometry")
        .stack(eclipseTimeVarByMethod, "Eclipse Timing Variations")
        .stack(microlensByMethod, "Microlensing")
        .stack(pulsarTimeByMethod, "Pulsar Timing")
        .stack(pulsarTimeVarByMethod, "Pulsar Timing Variations")
        .stack(orbitBrightModByMethod, "Orbital Brightness Modulation")
        .stack(transitTimeByMethod, "Transit Timing Variations")
        .valueAccessor(function (d) {
            if (d.value.total > 0) {
                return d.value.match;
            } else {
                return 0;
            }
        })
        .transitionDuration(500)
        .transitionDelay(500)
        .useViewBoxResizing(true)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .legend(dc.legend().x(60).y(5).itemHeight(10).gap(5))
        .margins({
            top: 10,
            right: 100,
            bottom: 30,
            left: 30
        })
        .xAxisLabel("Discovery Year")
        .yAxisLabel("No. of Planets");
};

function planets_in_system(ndx) {

    var pieChart = dc.pieChart("#planets-in-system");
    var dim = ndx.dimension(dc.pluck("plnumText"));
    var noOfPlanets = dim.group().reduceSum(dc.pluck("plnum"));

    pieChart
        .width(550)
        .height(300)        
        .useViewBoxResizing(true)
        .innerRadius(50)
        .externalLabels(30)
        .externalRadiusPadding(50)
        .drawPaths(true)
        .dimension(dim)
        .group(noOfPlanets)
        .legend(dc.legend());

    pieChart.on('pretransition', function (chart) {
        chart.selectAll('.dc-legend-item text')
            .text('')
            .append('tspan')
            .text(function (d) {
                return d.name;
            })
            .append('tspan')
            .attr('x', 100)
            .attr('text-anchor', 'end')
            .text(function (d) {
                return d.data;
            });
    });
};

function planets_orbital_period(ndx) {

    var pieChart = dc.pieChart("#planets-orbital-period");
    var dim = ndx.dimension(dc.pluck("orbcatText"));
    var noOfPlanets = dim.group().reduceSum(dc.pluck("orbcat"));

    pieChart
        .width(550)
        .height(300)        
        .useViewBoxResizing(true)
        .innerRadius(50)
        .externalLabels(30)
        .externalRadiusPadding(50)
        .drawPaths(true)
        .dimension(dim)
        .group(noOfPlanets)
        .legend(dc.legend());

    pieChart.on('pretransition', function (chart) {
        chart.selectAll('.dc-legend-item text')
            .text('')
            .append('tspan')
            .text(function (d) {
                return d.name;
            })
            .append('tspan')
            .attr('x', 500)
            .attr('text-anchor', 'end')
            .text(function (d) {
                return d.data;
            });
    });
};