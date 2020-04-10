$(document).ready(function() {
    var apiKey = "" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var state_obj = state_info['CO']
    var url =`https://api.weatherstack.com/forecast?access_key=<apiKey>&query=<latitude>,<longitude>`;

    $.ajax({url:url, dataType:"jsonp"}).then(function(data) {

                console.log(data)
                var temperature = null
                // TODO
                // Fill in the RHS of the below line and uncomment it. Remember how we accessed the temperature in Lab 9. Remember to convert it into farenheit.
                // var temperature =

                console.log(temperature)

                //TODO
                // Default color gray
                // Create a series of if else blocks to set the color for the state based on the temperature
                // Less than equal to 10F	#6495ED
                // Between 11F and 20F	#7FFFD4
                // Between 21F and 30F	#0000FF
                // Between 31F and 40F	#008B8B
                // Between 41F and 50F	#00BFFF
                // Between 51F and 60F	#F08080
                // Between 61F and 70F	#CD5C5C
                // Between 71F and equal to 80F	#8B0000
                // Between 81F and equal to 90F	#B22222
                // Greater than 90F	#FF0000

                $('#CO').css('fill', "#F08080");   // Example on how to fill colors for your state.
    });
});
