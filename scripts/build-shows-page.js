// const array =  [
//     {
//         date: "Mon Sept 06 2021",
//         venue: "Ronald Lane",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Tue Sept 21 2021",
//         venue: "Pier 3 East",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Fri Oct 15 2021",
//         venue: "View Lounge",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Sat Nov 06 2021",
//         venue: "Hyatt Agency",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Fri Nov 26 2021",
//         venue: "Moscow Center",
//         location: "San Francisco, CA",
//     },
//     {
//         date: "Wed Dec 15 2021",
//         venue: "Press Club",
//         location: "San Francisco, CA",
//     }
// ]

    const timeTable = document.querySelector (".concerts-lists")

    const sectionContainer = document.createElement ("div");
    sectionContainer.classList.add ("concerts-lists__container");

    const sectionHeader = document.createElement ("h2");
    sectionHeader.className = "concerts-lists__header";
    sectionHeader.innerText = "Shows"
    sectionContainer.append(sectionHeader);

    const sectionDiv = document.createElement ("div");
    sectionDiv.className = "concerts-lists__subflex";
    sectionContainer.append(sectionDiv);

    const sectionItems = document.createElement ("div");
    sectionItems.className = "concerts-lists__items";
    sectionDiv.append(sectionItems);

    const listHeaderDate = document.createElement ("span")
    listHeaderDate.className = "concerts-lists__items--span"
    listHeaderDate.innerText = "Date"
    sectionItems.append(listHeaderDate)

    const listHeaderVenue = document.createElement ("span")
    listHeaderVenue.className = "concerts-lists__items--span"
    listHeaderVenue.innerText = "Venue"
    sectionItems.append(listHeaderVenue)

    const listHeaderLocation = document.createElement ("span")
    listHeaderLocation.className = "concerts-lists__items--span"
    listHeaderLocation.innerText = "Location"
    sectionItems.append(listHeaderLocation)

    const listspan = document.createElement ("span")
    listspan.className = ""
    listspan.innerText = ""
    sectionItems.append(listspan)

    const sectionList = document.createElement ("div");
    sectionList.className = "concerts-lists__list";
    sectionDiv.append(sectionList);

    timeTable.append(sectionContainer);


const apiKey1 = "57536e20-6798-4537-be67-026393033c7e"

let showDates = [];

function getShowdates() {
    axios.get(`https://project-1-api.herokuapp.com/showdates/?api_key=${apiKey1}`)
         .then((response) => {
            showDates = response.data;
            // console.log(response.data);
            // userComments.sort((a, b) => b.timestamp - a.timestamp);
            // console.log(showDates);
            displayShowdates();
        })
}

getShowdates()


function displayShowdates () {
    for (let i =0; i < showDates.length; i++) {
        const item = showDates[i];

        const timeConvert = item.date;
        const newDate = new Date(timeConvert);
        const option = {weekday: 'short', month: 'short', day: 'numeric', year: 'numeric'}
        const displayDate = newDate.toLocaleDateString(undefined, option);

        const listItems = document.createElement ("div");
        listItems.className = "concerts-lists__tickets"
        sectionList.append(listItems)

        const listParaEl = document.createElement ('p');
        listParaEl.innerHTML = "Date"
        listItems.append(listParaEl)

        const listDate = document.createElement ("h4")
        listDate.className = "concerts-lists__tickets--date"
        listDate.innerText = displayDate
        listItems.append(listDate)

        const listParaEl2 = document.createElement ('p');
        listParaEl2.innerHTML = "Venue"
        listItems.append(listParaEl2)

        const listVenue = document.createElement ("span")
        listVenue.className = "concerts-lists__tickets--text"
        listVenue.innerText = item.place
        listItems.append(listVenue)

        const listParaEl3 = document.createElement ('p');
        listParaEl3.innerHTML = "Location"
        listItems.append(listParaEl3)

        const listLocation = document.createElement ("span")
        listLocation.className = "concerts-lists__tickets--text"
        listLocation.innerText = item.location
        listItems.append(listLocation)

        const listButton = document.createElement ("button")
        listButton.className = "concerts-lists__tickets--button"
        listButton.innerText = "buy tickets"
        listItems.append(listButton)


        listItems.addEventListener('click', function(e){
            e.preventDefault();
            
            const allListItems = document.querySelectorAll (".concerts-lists__tickets")
            
            console.log (allListItems);
     
            allListItems.forEach(row => {
             row.classList.remove('concerts-lists__tickets--colorChange')
             })
     
            listItems.classList.add ('concerts-lists__tickets--colorChange')
            })

    }

}



// const sectionClick = document.querySelector (".concerts-lists__list")

// const individualClick = document.querySelectorAll (".concerts-lists__tickets")

// for (let i = 0; i < individualClick.length; i++) {
//     individualClick[i].addEventListener('click', function(e){
//        e.preventDefault();
       
//        console.log ('test');

//        individualClick.forEach(row => {
//         row.classList.remove('concerts-lists__tickets--colorChange')
//         })

//        individualClick[i].classList.add ('concerts-lists__tickets--colorChange')      
//     })
// }


// individualClick.forEach(row => {
//     individualClick.addEventLisenter('click', function(e) {
//         e.preventDefault();
//         row.classList.remove('concerts-lists__tickets--colorChange')
//         row.classList.add('concerts-lists__tickets--colorChange')
//     })
// })
