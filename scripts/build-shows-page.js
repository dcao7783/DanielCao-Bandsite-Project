const array =  [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA",
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA",
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA",
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA",
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA",
    }
]

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

for (let i =0; i < array.length; i++) {
    const item = array[i];

    const listItems = document.createElement ("div");
    listItems.className = "concerts-lists__tickets"
    sectionList.append(listItems)

    const listDate = document.createElement ("h4")
    listDate.className = "concerts-lists__tickets--date"
    listDate.innerText = item.date
    listItems.append(listDate)

    const listVenue = document.createElement ("span")
    listVenue.className = "concerts-lists__tickets--text"
    listVenue.innerText = item.venue
    listItems.append(listVenue)

    const listLocation = document.createElement ("span")
    listLocation.className = "concerts-lists__tickets--text"
    listLocation.innerText = item.location
    listItems.append(listLocation)

    const listButton = document.createElement ("button")
    listButton.className = "concerts-lists__tickets--button"
    listButton.innerText = "BUT TICKETS"
    listItems.append(listButton)

}

sectionClick = document.querySelectorAll (".concerts-lists__tickets")

// sectionClick.foreach() {

sectionClick.addEventListener('click', changeColor)

function changeColor (e){
     e.preventDefault();
    console.log ('test');

    sectionClick.style.background = "gray"
}
// }

