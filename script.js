var cityData = null;
var cityHtml = null;
var length;
i = 0;

$(document).ready(function(){
    console.log(cityData, cityHtml);

    $("#get-info-btn").on('click', function (){
        if(cityHtml === null){
            $.get('location.html', function(data){
                cityHtml = data;
                console.log("it worked!");
                $(".infoGoesHere").append(data);
            });

        } else {
            console.log("You already got the HTML");
        }

        if(cityData === null){
            $.get('data.json', function (data){
                cityData = data;
                length = cityData.locations.length;
                displayInfo();
            });

        } else {
            displayInfo();
            console.log("you already got the city data");
        }

    });

    $(".infoGoesHere").on('click', 'button', function(){
        $(this).parent().remove();
        cityHtml = null;
    });

    function displayInfo() {
        if (i > (length-1)){
            i = 0;
        }
        $(".location").append("<p>Location Name: " + cityData.locations[i].location + "</p>");
        $(".location").append("<p>Location Area: " + cityData.locations[i].area + "</p>");
        $(".location").append("<p>Location Population: " + cityData.locations[i].population + "</p>");
        i++;
        };

});