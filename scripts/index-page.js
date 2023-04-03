const theList = document.querySelector (".comments-feedbacks__container")


const apiKey1 = "57536e20-6798-4537-be67-026393033c7e"


let userComments = [];

function getComments() {
    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey1}`)
     .then((response) => {
        userComments = response.data;
        userComments.sort((a, b) => b.timestamp - a.timestamp);
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
    
        if(nameClick && commentClick !==""){
            const newFeedback = {
                name: nameClick,
                comment: commentClick,
            };

            axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey1}`, newFeedback)
                    .then(() => {
                        getComments();
                    });
                }
    
        clearInput()
    })
    
    function clearInput(){
        userName.value = ''
        userComment.value = ''
    }
