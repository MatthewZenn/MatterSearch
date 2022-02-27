document.getElementById("search").addEventListener("click", Search);

function Search() {
    var name = document.getElementById("name").value
    var place = document.getElementById("place").value;
    var date = document.getElementById("date").value;
    var modify = document.getElementById("modify").value;
    if (name == null || name == "") {
        return false
    }
    else {
        chrome.tabs.create({"url": "https://www.google.com/search?q="+name+" "+place+" "+date+" "+modify})
    }
}

document.getElementById("filter1").addEventListener("click", () => {
    var name = document.getElementById("name").value
    var place = document.getElementById("place").value;
    var date = document.getElementById("date").value;
    chrome.tabs.create({"url": "https://www.familysearch.org/search/discovery/results?surname="+name+"&birthPlace="+place+"&birthDate="+date})
});

document.getElementById("filter2").addEventListener("click", () => {
    chrome.tabs.create({"url": "https://www.ancestory.com"})
});

document.getElementById("filter3").addEventListener("click", () => {
    chrome.tabs.create({"url": "https://www.census.gov"})
});
