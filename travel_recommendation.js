var xhr = new XMLHttpRequest();

var url = "./travel_recommendation_api.json";

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.send();
var countries
xhr.onload = function()
{
    countries = xhr.response.countries;
    temples = xhr.response.temples;
    beaches = xhr.response.beaches;
}

function suggestions() {
    clearResults();
    let name = document.getElementById('cityInput').value.split(',');
    console.log(name[0])
    countries.forEach(function(country) { 
        country.cities.forEach(function(city)
        {
            console.log(city.name);
            for(let i = 0; i < name.length; i++)
            {
                if(name[i] !== '' && (city.name.toLowerCase().includes(name[i]) || city.description.toLowerCase().includes(name[i])))
                {
                    let mainDiv = document.getElementById("cityPopUp"); 
                    let cityDiv = document.createElement('div');
                    cityDiv.classList.add("cityBox");

                    cityDiv.innerHTML = `<h4> Location: ${city.name} </h4><img src="${city.imageUrl}" id="cityImage"/> <p>${city.description}</p>`;
                    
                    mainDiv.appendChild(cityDiv);
                }
            }
        })
    })
    temples.forEach(function(temple)
    {
        console.log(temple.name);
        for(let i = 0; i < name.length; i++)
        {
            if(name[i] !== '' && (temple.name.toLowerCase().includes(name[i]) || temple.description.toLowerCase().includes(name[i])))
            {
                let mainDiv = document.getElementById("cityPopUp"); 
                let cityDiv = document.createElement('div');
                cityDiv.classList.add("cityBox");

                cityDiv.innerHTML = `<h4> Location: ${temple.name} </h4><img src="${temple.imageUrl}" id="cityImage"/> <p>${temple.description}</p>`;
                
                mainDiv.appendChild(cityDiv);
            }
        }
    })
    beaches.forEach(function(beach)
    {
        console.log(beaches.name);
        for(let i = 0; i < name.length; i++)
        {
            if(name[i] !== '' && (beach.name.toLowerCase().includes(name[i]) || beach.description.toLowerCase().includes(name[i])))
            {
                let mainDiv = document.getElementById("cityPopUp"); 
                let cityDiv = document.createElement('div');
                cityDiv.classList.add("cityBox");

                cityDiv.innerHTML = `<h4> Location: ${beach.name} </h4><img src="${beach.imageUrl}" id="cityImage"/> <p>${beach.description}</p>`;
                
                mainDiv.appendChild(cityDiv);
            }
        }
    })
}

function clearResults(){
    let mainDiv = document.getElementById("cityPopUp"); 
    mainDiv.innerHTML = '';
}