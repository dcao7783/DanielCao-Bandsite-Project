// const submitBtn = document.querySelector('.comments__btn')
// const userName = document.querySelector('#name')
// const comment = document.querySelector('#text')

// submitBtn.addEventListener('click', displayComment)

// function displayComment(e){
//     e.preventDefault()
//     const nameClick = userName.value 
//     const commentClick = comment.value 
//     console.log(nameClick, commentClick)

//     if(nameClick && commentClick !==""){
//         const newFeedback = {
//             name: nameClick,
//             timestamp: logComment(),
//             img: "",
//             commentText: commentClick,
//         }
//         // to push new object into the array
//         users.unshift(newFeedback);
//         // to do display comments on the page, may need some loop
//         addNewCommentsToPage()
        
//         console.log(users);
//     }

//     clearInput()
// }

// function clearInput(){
//     userName.value = ''
//     comment.value = ''
// }

// function logComment() {
//     const currentDate = new Date();
//     const options = {month: "2-digit", day: "2-digit", year: "numeric"};
//     const timesLog = currentDate.toLocaleDateString(undefined, options);

//     return (timesLog);
// }

// function addNewCommentsToPage() {
//     theList.innerHTML = "";

//     for (let i=0; i< users.length; i++) {
//         const newCommentEl = document.createElement("div");
//         newCommentEl.className = "comments-feedbacks__items";

//         // img
//         const newImgEl = document.createElement("div");
//         newImgEl.classList.add("comments-feedbacks__items--pic");
//         newCommentEl.append(newImgEl);

//         // content flex container
//         const newFlexContainer = document.createElement("div");
//         newFlexContainer.className = "comments-feedbacks__items--info";
//         newCommentEl.append(newFlexContainer);

//         // creating flexbox inside the flex container
//         const newSmallDiv = document.createElement("div");
//         newSmallDiv.className = "comments-feedbacks__items--smalldiv";
//         newFlexContainer.append(newSmallDiv);

//         // creating contents
//         const newNameEl = document.createElement("h4");
//         newNameEl.innerText = users[i].name;
//         newSmallDiv.append(newNameEl);

//         // creating body contents
//         const newCommentText = document.createElement("p");
//         newCommentText.innerText = users[i].commentText;
//         newFlexContainer.append(newCommentText);

//         // creating timeStamp
//         const newTimeEl = document.createElement("span");
//         newTimeEl.innerText = users[i].timestamp;
//         newSmallDiv.append(newTimeEl);

//         theList.append(newCommentEl);
//     }
// }

const theList = document.querySelector (".comments-feedbacks__container")


axios.get("https://project-1-api.herokuapp.com/register")
    .then((response) => {
        console.log(response);
        const apiKey = response.data.api_key;
        console.log(apiKey);
    })
    .catch(error => {
        console.log(error);
    })


let userComments = [];

function getComments() {
    axios.get("https://project-1-api.herokuapp.com/comments?api_key=apiKey")
     .then((response) => {
        userComments = response.data;
        displayComments();
     })
}

getComments()

function displayComments () {
    theList.innerHTML = "";

    userComments.forEach((userComment) =>{
        const timeConvert = userComment.timestamp;
        const newDate = new Date(timeConvert);
        const option = {month: "2-digit", day: "2-digit", year: "numeric"}
        const displayDate = newDate.toLocaleDateString(undefined, option);

        const userItems = document.createElement ("div");
        userItems.classList.add ("comments-feedbacks__items");
    
        
        const imgEl = document.createElement("div");
        imgEl.classList.add("comments-feedbacks__items--pic");
        userItems.append(imgEl);
    
        
        const flexContainer = document.createElement("div");
        flexContainer.className = "comments-feedbacks__items--info";
        userItems.append(flexContainer);
    
        
        const smallDiv = document.createElement("div");
        smallDiv.className = "comments-feedbacks__items--smalldiv";
        flexContainer.append(smallDiv);
    
        
        const nameEl = document.createElement("h4");
        nameEl.innerText = userComment.name;
        smallDiv.append(nameEl);
    
        
        const commentEl = document.createElement("p");
        commentEl.innerText = userComment.comment;
        flexContainer.append(commentEl);
    
    
        const timeEl = document.createElement("span");
        timeEl.innerText = displayDate;
        smallDiv.append(timeEl);
    
        theList.append(userItems);
    })
}

const submitBtn = document.querySelector('.comments__btn')
const userName = document.querySelector('#name')
const userComment = document.querySelector('#text')

submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const nameClick = userName.value; 
        const commentClick = userComment.value;
        console.log(nameClick, commentClick);
    
        if(nameClick && commentClick !==""){
            const newFeedback = {
                name: nameClick,
                comment: commentClick,
            };

            axios.post("https://project-1-api.herokuapp.com/comments?api_key=apiKey", newFeedback)
                    .then(() => {
                        getComments();
                    });
                console.log("Comment submitted")
                console.log(userComments)
                }
    
        clearInput()
    })
    
    function clearInput(){
        userName.value = ''
        userComment.value = ''
    }
