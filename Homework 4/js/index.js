//Will Huynh


//helper function
function numStates(states) // this function will return the number of states from state_info
{
    return Object.keys(states).length;
}

//helper function
function getFarenheitTemp(temp) // function from lab 9 that converts to F
{
    var temp = Math.round((9*temp/5)+32);
    return temp;
}

$(document).ready(function()
{
    var apiKey = "5bc82451636190abd9d7afe6fe9b20b5" // Enter the API key
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop
    var NumOfStates = numStates(state_info); // this will grab the number of states
    var state_obj = state_info['CO']
    state_name = Object.keys(state_info);
    
    
    //start of the loop
    for(var i = 0; i < NumOfStates;i++) // loops through all the states
    {
        state_obj = state_info[state_name[i]];
        var url =`https://api.weatherstack.com/forecast?access_key=${apiKey}&query=${state_obj.lat},${state_obj.lng}`;
        $.ajax({
            url:url, 
            dataType:"jsonp",
            saveIndex: i
        }).then(function(data)
        {
            i = this.saveIndex; // this will save the index of I when the ajax function is ran
            var States = "#" + state_name[i]; // this will help when doing the color setting
            console.log(data)
            //This is where the states will be colored accordingly
            var temperature = getFarenheitTemp(data.current.temperature); // this converts temp into F
            console.log(temperature)
            if(temperature <= 10){$(States).css('fill', "#6495ED");}
            else if(temperature >= 11 && temperature <= 20){$(States).css('fill', "#7FFFD4");}
            else if(temperature >= 21 && temperature <= 30){$(States).css('fill', "#0000FF");}
            else if(temperature >= 31 && temperature <= 40){$(States).css('fill', "#008B8B");}
            else if(temperature >= 41 && temperature <= 50){$(States).css('fill', "#00BFFF");}
            else if(temperature >= 51 && temperature <= 60){$(States).css('fill', "#F08080");}
            else if(temperature >= 61 && temperature <= 70){$(States).css('fill', "#CD5C5C");}
            else if(temperature >= 71 && temperature <= 80){$(States).css('fill', "#8B0000");}
            else if(temperature >= 81 && temperature <= 90){$(States).css('fill', "#B22222");}
            else if(temperature >= 91){$(States).css('fill', "#FF0000");}
            else{$(States).css('fill', "grey");}
        });
    }
});
