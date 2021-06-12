

var actors;

const getActorsData = url => {
// 'https://swapi.dev/api/people'

    fetch(url)
    .then(response => response.json()) 
    .then( (data) => {
            actors = data;
            console.log("actors::", actors);
            renderActors()
            })
    .catch( error => console.log('There was an error: ', error));

}


const renderActors = () => { 
        var liHtml = ""
        actors.results.forEach( (item) => { liHtml += oneActor(item) } )
        document.getElementById('container').innerHTML = liHtml
}

const oneActor = actor => `<li><h2>Name: ${actor.name}</h2>
                            <p>Eye color: ${actor.eye_color}</p>
                            <p>Hair color: ${actor.hair_color}</p>
                            <p>Gender: ${actor.gender}</p>
                            <p>Birth year: ${actor.birth_year}</p>
                           </li>`


const nextBtn = (e) => {
       if (actors.next) getActorsData(actors.next)
}

const previousBtn = (e) => {
    if (actors.previous) getActorsData(actors.previous)
}

const addButtonListener = () => {
    document.getElementById("nextBtn").addEventListener("click", nextBtn, false) 
    document.getElementById("previousBtn").addEventListener("click", previousBtn, false)     
}

addButtonListener()
getActorsData('https://swapi.dev/api/people')


