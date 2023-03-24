const users = [
    {
        name: "Connor Walton",
        timestamp: "02/17/2021",
        img: "",
        commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverece. Let us appreciate this for what it is and what it contains.",
    },
    {
        name: "Emilie Beach",
        timestamp: "01/09/2021",
        img: "",
        commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        timestamp: "12/20/2020",
        img: "",
        commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

const submitBtn = document.querySelector('.comments__btn')
const userName = document.querySelector('#name')
const comment = document.querySelector('#text')

submitBtn.addEventListener('click', displayComment)

function displayComment(e){
    e.preventDefault()
    const nameClick = userName.value 
    const commentClick = comment.value 
    console.log(nameClick, commentClick)

    if(nameClick && commentClick !==""){
        const newFeedback = {
            name: nameClick,
            timestamp: logComment(),
            img: "",
            commentText: commentClick,
        }
        // to push new object into the array
        users.unshift(newFeedback);
        // to do display comments on the page, may need some loop
        addNewCommentsToPage()
        
        console.log(users);
    } 

    clearInput()
}

function clearInput(){
    userName.value = ''
    comment.value = ''
}

function logComment() {
    const currentDate = new Date();
    const options = {month: "2-digit", day: "2-digit", year: "numeric"};
    const timesLog = currentDate.toLocaleDateString(undefined, options);

    return (timesLog);
}

function addNewCommentsToPage() {
    theList.innerHTML = "";

    for (let i=0; i< users.length; i++) {
        const newCommentEl = document.createElement("div");
        newCommentEl.className = "comments-feedbacks__items";

        // img
        const newImgEl = document.createElement("div");
        newImgEl.classList.add("comments-feedbacks__items--pic");
        newCommentEl.append(newImgEl);

        // content flex container
        const newFlexContainer = document.createElement("div");
        newFlexContainer.className = "comments-feedbacks__items--info";
        newCommentEl.append(newFlexContainer);

        // creating flexbox inside the flex container
        const newSmallDiv = document.createElement("div");
        newSmallDiv.className = "comments-feedbacks__items--smalldiv";
        newFlexContainer.append(newSmallDiv);

        // creating contents
        const newNameEl = document.createElement("h4");
        newNameEl.innerText = users[i].name;
        newSmallDiv.append(newNameEl);

        // creating body contents
        const newCommentText = document.createElement("p");
        newCommentText.innerText = users[i].commentText;
        newFlexContainer.append(newCommentText);

        // creating timeStamp
        const newTimeEl = document.createElement("span");
        newTimeEl.innerText = users[i].timestamp;
        newSmallDiv.append(newTimeEl);

        theList.append(newCommentEl);
    }
}

const theList = document.querySelector (".comments-feedbacks__container")
// I thought this is already the loop I need
for (let i = 0; i < users.length; i++) {
    const person = users[i];

    const userItems = document.createElement ("div");
    userItems.classList.add ("comments-feedbacks__items");

    // img
    const imgEl = document.createElement("div");
    imgEl.classList.add("comments-feedbacks__items--pic");
    userItems.append(imgEl);

    // content flex container
    const flexContainer = document.createElement("div");
    flexContainer.className = "comments-feedbacks__items--info";
    userItems.append(flexContainer);

    // creating flexbox inside the flex container
    const smallDiv = document.createElement("div");
    smallDiv.className = "comments-feedbacks__items--smalldiv";
    flexContainer.append(smallDiv);

    // creating contents
    const nameEl = document.createElement("h4");
    nameEl.innerText = person.name;
    smallDiv.append(nameEl);

    // creating body contents
    const commentEl = document.createElement("p");
    commentEl.innerText = person.commentText;
    flexContainer.append(commentEl);

    // creating timeStamp
    const timeEl = document.createElement("span");
    timeEl.innerText = person.timestamp;
    smallDiv.append(timeEl);

    theList.append(userItems);
}
