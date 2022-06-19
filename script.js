let bundesländer = [
    {
        "name": "Wien",
        "population": 2.0,
        "url": "https://wien.at/",
        "comments": ['Wien ist die Hauptstadt von Österreich']
    },
    {
        "name": "Niederösterreich",
        "population": 1.7,
        "url": "https://wien.at/",
        "comments": ['St.Pölten ist die Hauptstadt von NÖ']
    },
    {
        "name": "Burgenland",
        "population": 1.0,
        "url": "https://wien.at/",
        "comments": ['Eisenstadt ist die Hauptstadt von BL']
    },
    {
        "name": "Öberösterreich",
        "population": 1.2,
        "url": "https://wien.at/",
        "comments": ['Linz ist die Hautpstadt von OÖ']
    },
    {
        "name": "Steiermark",
        "population": 0.8,
        "url": "https://wien.at/",
        "comments": ['Graz ist die Hauptstadt von St']
    },
    {
        "name": "Kärnten",
        "population": 0.5,
        "url": "https://wien.at/",
        "comments": ['Klagenfurt ist die Hautpstadt von K']
    },
    {
        "name": "Salzburg",
        "population": 1.0,
        "url": "https://wien.at/",
        "comments": ['Salzburg ist die Hauptstadt von Salzburg']
    },
    {
        "name": "Tirol",
        "population": 0.5,
        "url": "https://wien.at/",
        "comments": ['Innsbruck ist die Hauptstadt von Tirol']
    },
    {
        "name": "Vorarlberg",
        "population": 0.4,
        "url": "https://wien.at/",
        "comments": ['Bregenz ist die Hauptstadt von Vorarlberg', 'LOOOL']
    },
]



function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    

    for (let i = 0; i <  bundesländer.length; i++)   
        { let land = bundesländer[i];   

            content.innerHTML +=    `<div class="card">
                                        <h2>${land['name']}</h2> 
                                        <div id="landcomments${i}"></div>
                                        <input id="landinput${i}"><button onclick="addComment(${i})">OK</button>
                                    </div>`;

            let comments = document.getElementById(`landcomments${i}`);

            

    for (let j = 0; j < land['comments'].length; j++)
        {

            comments.innerHTML += `<div>${land['comments'][j]}</div>`

    
        }}
}

function addComment(i) {
    let comments = document.getElementById(`landinput${i}`).value;
    
    bundesländer[i]['comments'].push(comments);
    comments = '';
    render();
}