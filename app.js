let authorList = [];

let firstName = document.querySelector("#firstname");
let midName = document.querySelector("#midname");
let lastName = document.querySelector("#lastname");
let addAuthor = document.querySelector("#addname");

let fN = firstName.value;
let mN = midName.value;
let lN = lastName.value;

addAuthor.addEventListener("click", () => {
    if(!firstName.value || !lastName.value) {
        alert("Missing Credentials.");
    }
    else if(!midName.value) {
        authorList.push(` ${lastName.value}, ${firstName.value[0]}.`);
        fN = firstName.value;
        lN = lastName.value;
        lastName.value = "";
        firstName.value = "";
        alert(`Name added. Names: ${authorList.length}`);
    }
    else {
        authorList.push(`${lastName.value}, ${firstName.value[0]}. ${midName.value[0]}.`)
        fN = firstName.value;
        mN = midName.value;
        lN = lastName.value;
        lastName.value = "";
        midName.value = "";
        firstName.value = "";
        alert(`Name added. Names: ${authorList.length}`);
    }
})

let year = document.querySelector("#issueyear");
let articleTitle = document.querySelector("#article-title");
let journalTitle = document.querySelector("#journal-title");
let volume = document.querySelector("#vol");
let issueNumber = document.querySelector("#issue-number");
let startPage = document.querySelector("#start-page");
let endPage = document.querySelector("#end-page");

let generateApa = document.querySelector("#generate-apa");
let citationContainer = document.querySelector("#citation");

generateApa.addEventListener("click", () => {
    let newCitation = document.createElement("span");
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
        newCitation.innerHTML = `${authorString} (${year.value}). ${articleTitle.value}. ` + "<i>" + `${journalTitle.value}, ${volume.value}` + "</i>" + `(${issueNumber.value}), ${startPage.value}`
        if (endPage) {
            newCitation.innerHTML += `-${endPage.value}`;
        }
        citationContainer.appendChild(newCitation);
    }
})