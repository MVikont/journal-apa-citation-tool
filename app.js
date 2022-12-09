let authorList = [];
let citationList = [];
let authorsOnPage = document.querySelector("#author-list");

let firstName = document.querySelector("#firstname");
let midName = document.querySelector("#midname");
let lastName = document.querySelector("#lastname");
let addAuthor = document.querySelector("#addname");

addAuthor.addEventListener("click", () => {
    if(!firstName.value || !lastName.value) {
        alert("Missing Credentials.");
        return false
    }
    else if(!midName.value) {
        authorList.push(` ${lastName.value}, ${firstName.value[0]}.`);
        let newAuthorItem = document.createElement("li");
        newAuthorItem.classList.add("author");
        newAuthorItem.innerText = ` ${lastName.value}, ${firstName.value[0]}.`;
        authorsOnPage.appendChild(newAuthorItem);
        // lastName.value = "";
        // firstName.value = "";
        // alert(`Author added. No. of Authors: ${authorList.length}`);
    }
    else {
        authorList.push(`${lastName.value}, ${firstName.value[0]}. ${midName.value[0]}.`)
        let newAuthorItem = document.createElement("li");
        newAuthorItem.classList.add("author");
        newAuthorItem.innerText = `${lastName.value}, ${firstName.value[0]}. ${midName.value[0]}.`
        authorsOnPage.appendChild(newAuthorItem);
    }
    lastName.value = "";
    midName.value = "";
    firstName.value = "";
    alert(`Author added. No. of Authors: ${authorList.length}`);
})

let year = document.querySelector("#issueyear");
let articleTitle = document.querySelector("#article-title");
let journalTitle = document.querySelector("#journal-title");
let volume = document.querySelector("#vol");
let issueNumber = document.querySelector("#issue-number");
let startPage = document.querySelector("#start-page");
let endPage = document.querySelector("#end-page");

let credentialsList = [year, articleTitle, journalTitle, volume, issueNumber,
startPage, endPage];

let generateApa = document.querySelector("#generate-apa");
let citationContainer = document.querySelector("#citation");

generateApa.addEventListener("click", () => {
    let newCitation = document.createElement("li");
    newCitation.classList.add("new-apa");
    if(!year.value || !articleTitle.value || !journalTitle.value || !volume.value
    || !issueNumber.value || !startPage.value) {
        alert("Cannot generate APA. Missing credentials.");
    }
    // else if (authorList.length > 5) {
    //     newCitation.innerHTML = `${authorList[0]} et al. (${year.value}). ${articleTitle.value}. ` + "<i>" + `${journalTitle.value}, ${volume.value}` + "</i>" + `(${issueNumber.value}), ${startPage.value}`
    //     if (endPage) {
    //         newCitation.innerHTML += `-${endPage.value}`;
    //     }
    //     citationContainer.appendChild(newCitation);
    else if (authorList.length === 1) {
        newCitation.classList.add("new-apa");
        newCitation.innerHTML = `${authorList[0]} (${year.value}). ${articleTitle.value}. ` + "<i>" + `${journalTitle.value}, ${volume.value}` + "</i>" + `(${issueNumber.value}), ${startPage.value}`
        if (endPage) {
            newCitation.innerHTML += `-${endPage.value}`;
        }
        citationContainer.appendChild(newCitation);
    } else {
        let authorString = ``;
        for (let i = 0; i < authorList.length - 1; i++) {
            authorString += `${authorList[i]}`
            authorString += ", "
        }
        authorString += `& ${authorList[authorList.length - 1]}`
        newCitation.classList.add("new-apa");
        newCitation.innerHTML = `${authorString} (${year.value}). ${articleTitle.value}. ` + "<i>" + `${journalTitle.value}, ${volume.value}` + "</i>" + `(${issueNumber.value}), ${startPage.value}`
        if (endPage) {
            newCitation.innerHTML += `-${endPage.value}`;
        }
        citationContainer.appendChild(newCitation);
    }
    for (let cred of credentialsList) {
        cred.value = "";
    }
    citationList.push(newCitation);
})

let clearAuthors = document.querySelector("#clear-authors");

clearAuthors.addEventListener("click", () => {
    let authorLIs = document.querySelectorAll(".author");
    if (authorLIs.length > 0) {
        for (let li of authorLIs) {
            document.querySelector("#author-list").removeChild(li);
        }
        authorList = [];
    }
    else {
        alert("Author list empty. Nothing to clear.");
    }
})

let clearAPAs = document.querySelector("#remove-apa");

clearAPAs.addEventListener("click", () => {
    let apaLIs = document.querySelectorAll(".new-apa");
    if (citationList.length > 0) {
        for (let apa of apaLIs) {
            document.querySelector("#citation").removeChild(apa);
        }
        citationList = [];
    }
    else {
        alert("No citations found. Nothing to clear.");
    }

})