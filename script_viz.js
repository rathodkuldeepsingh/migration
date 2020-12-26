var  pi = Math.PI;

var diameter = $(window).width()*0.43,
    radius = diameter / 2,
    innerRadius = radius - 80;

var cluster = d3.cluster()
    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2 ) })
    .size([360, innerRadius]);

var line = d3.radialLine()
    .curve(d3.curveBundle.beta(0.95))
    .radius(function(d) { return d.y; })
    .angle(function(d) { return d.x / 180 * Math.PI; });

var svg = d3.select(".edge_viz").append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
  .append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");

    svg.append("svg:path")
    .attr("class", "arc")
    .attr("d", d3.arc().outerRadius(radius - 250).innerRadius(0).startAngle(-pi/2).endAngle(pi/2))
    .on("mousedown", function(){});

d3.json("flare.json", function(error, classes) {
  if (error) throw error;

  var root = packageHierarchy(classes)
      .sum(function(d) { return d.size; });

     // console.log(root);
      cluster(root);
    var nodes=cluster(root);
    //console.log(nodes.children);

  link = link
    .data(packageImports(root.leaves()))
    .enter().append("path")
      .each(function(d) { d.source = d[0], d.target = d[d.length - 1];})
      .attr("class", "link")
      .classed("link--typeA",function(l) { if (l[0].data.type == "A") return true; })
      .classed("link--typeB",function(l) { if (l[0].data.type == "B") return true; })
      .classed("link--typeC",function(l) { if (l[0].data.type == "C") return true; })
      .classed("link--typeD",function(l) { if (l[0].data.type == "D") return true; })
      .attr("d", line);

  node = node
    .data(root.leaves())
    .enter().append("text")
      .attr("class", "node")
      .attr("dy", "0.31em")
      .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + (d.y + 8) + ",0)" + (d.x < 180 ? "" : "rotate(180)"); })
      .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
      .text(function(d) { /*return d.data.key;*/ })
      .on("mouseover", mouseovered)
      .on("mouseout", mouseouted);

   //  console.log(root.descendants().slice(1));




/*


  var groupData = svg.selectAll("g.group")
    .data(root.descendants().slice(1).filter(function(d) {  return (d.key=='State1' || d.key == 'State2' || d.key == 'State3') && d.children; }))
  .enter().append("group")
    .attr("class", "group");

      console.log(groupData[0]);
*/
  var groupArc = d3.arc()
    .innerRadius(radius - 20)
    .outerRadius(radius - 80)
    .startAngle(function(d) { console.log(d.children[0].children);return (findStartAngle(d.children[0].children)) * pi / 180;})
    .endAngle(function(d) { return (findEndAngle(d.children[0].children)) * pi / 180});

    svg.selectAll("g.arc")
  .data(nodes.children)
.enter().append("svg:path")
  .attr("d", groupArc)
  .attr("class", "groupArc")
  .style("fill", "#1f77b4")
  .style("fill-opacity", 0.5);
  
 


});
  

function mouseovered(d) {
  node
      .each(function(n) { n.target = n.source = false; });

  link
      .classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
      .classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
    .filter(function(l) { return l.target === d || l.source === d; })
      .raise();

  node
      .classed("node--target", function(n) { return n.target; })
      .classed("node--source", function(n) { return n.source; });
}

function mouseouted(d) {
  link
      .classed("link--target", false)
      .classed("link--source", false);

  node
      .classed("node--target", false)
      .classed("node--source", false);
}

// Lazily construct the package hierarchy from class names.
function packageHierarchy(classes) {
  var map = {};

  function find(name, data) {
    var node = map[name], i;
    if (!node) {
      node = map[name] = data || {name: name, children: []};
      if (name.length) {
        node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
        node.parent.children.push(node);
        node.key = name.substring(i + 1);
      }
    }

    return node;
  }

  classes.forEach(function(d) {
    find(d.name, d);

  });
  return d3.hierarchy(map[""]);
}

// Return a list of imports for the given array of nodes.
function packageImports(nodes) {
  var map = {},
      imports = [];

  // Compute a map from name to node.
  nodes.forEach(function(d) {
    map[d.data.name] = d;
  });

  // For each import, construct a link from the source to target node.
  nodes.forEach(function(d) {
    if (d.data.imports) d.data.imports.forEach(function(i) {
      imports.push(map[d.data.name].path(map[i]));
    });
  });

  return imports;
}


$(".option").hover(function(){
  
  if($(this).hasClass('A'))
  { $(this).css('stroke-width','2');
    $('.link--typeB').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeC').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeD').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeE').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
  }
  else if($(this).hasClass('B'))
  { $(this).css('stroke-width','2');
    $('.link--typeA').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeC').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeD').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeE').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});

  }
  else if($(this).hasClass('C'))
  { $(this).css('stroke-width','2');
    $('.link--typeB').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeA').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeD').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeE').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
  }
  else if($(this).hasClass('D'))
  { $(this).css('stroke-width','2');
    $('.link--typeB').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeC').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeA').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeE').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
  }
   else if($(this).hasClass('E'))
  { $(this).css('stroke-width','2');
    $('.link--typeB').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeC').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeA').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    $('.link--typeD').css({'stroke-opacity':'0','stroke':'#ffffff','stroke-width':'0.5'});
    
  }

}, function(){
    $('.link--typeB').css({'stroke-opacity':'1','stroke':'rgb(6, 121, 159)','stroke-width':'1'});
    $('.link--typeC').css({'stroke-opacity':'1','stroke':'rgb(255, 131, 0)','stroke-width':'1'});
    $('.link--typeA').css({'stroke-opacity':'1','stroke':'rgb(0, 187, 63)','stroke-width':'1'});
    $('.link--typeD').css({'stroke-opacity':'1','stroke':'rgb(255, 40, 0)','stroke-width':'1'});
    $('.link--typeE').css({'stroke-opacity':'1','stroke':'rgb(184, 15, 152)','stroke-width':'1'});
});


function findStartAngle(children) {
    var min = children[0].x;
    children.forEach(function(d) {
       if (d.x < min)
           min = d.x;
    });
    return min;
}

function findEndAngle(children) {
    var max = children[0].x;
    children.forEach(function(d) {
       if (d.x > max)
           max = d.x;
    });
    return max;
}