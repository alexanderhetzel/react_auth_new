import Searchbar from "./Searchbar";

/*const people = [
    { name: 'David'},
    { name: 'Hans'},
    { name: 'Peter'},
    { name: 'Marvin'},
    { name: 'Oliver'},
    { name: 'Olive'},
    { name: 'Beate'}
];



const list =

function setList(group){

    clearList();

    for (const person of group){
        const item= document.createElement('li');


        /*const a= document.createElement('a');

        a.target="_blank";
        a.href = "userProperties.html";
        a.rel="noopener noreferrer";
        */

/*
        item.classList.add('list-group-item');
        const text= document.createTextNode(person.name);

        item.appendChild(text);
        list.appendChild(item);

        /*a.appendChild(text);
        item.appendChild(a);
        list.appendChild(item);

         */

//console.log(person.name);
/*}

list.onkeyup
if (group.length === 0){
    setNoResults();
}

}

function clearList(){

while (list.firstChild){
    list.removeChild(list.firstChild);
}
}

function setNoResults(){
const item= document.createElement('li');
item.classList.add('list-group-item');
const text= document.createTextNode('No results found');
item.appendChild(text);
list.appendChild(item);

}

 */


function getRelevancy(value, searchTerm) {

    if (value === searchTerm) {
        return 2;
    } else if (value.startsWith(searchTerm)) {
        return 1;
    } else return 0;
}

/*
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const searchInput=

searchInput.addEventListener('input', (event) => {
    let value= event.target.value;

    if (value && value.trim().length > 0){
        value = value.trim();
        value=capitalizeFirstLetter(value);

        /*window.onkeyup = ($keyboardEvent) => {
            console.log($keyboardEvent.target.value);
        }

         */
/*
        setList(people.filter(person => {
            return person.name.includes(value);
        }).sort((personA, personB) =>{
            return getRelevancy(personB.name,value) - getRelevancy(personA.name,value);
        }));
    }
    else {
        clearList();
    }
});


 */
const searchEngine = {getRelevancy};

export default search