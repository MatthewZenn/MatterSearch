document.getElementById("search").addEventListener("click", () => {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var date = document.getElementById("date").value;
    var modify = document.getElementById("modify").value;

    if (surname == null || surname == "") {
        return false;
    }
    else {
        chrome.tabs.create({"url": "https://www.google.com/search?q="+firstname+" "+surname+" "+place+" "+date+" "+modify})
    }
});

document.getElementById("filter1").addEventListener("click", () => {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var date = document.getElementById("date").value;

    if (surname == null || surname == "") {
        chrome.tabs.create({"url": "https://www.familysearch.org"});
    }
    else {
        chrome.tabs.create({"url": "https://www.familysearch.org/search/discovery/results?givenName="+firstname+"&surname="+surname+"&birthPlace="+place+"&birthDate="+date});
    }
});

document.getElementById("filter2").addEventListener("click", () => {
    var firstname = document.getElementById("firstname").value;
    var surname = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var date = document.getElementById("date").value;
    var modify = document.getElementById("modify").value;

    if  (surname == null || surname == "") {
        chrome.tabs.create({"url": "https://www.ancestory.com"});
    }
    else {
        chrome.tabs.create({"url": "https://www.ancestry.com/search/collections/1030/?name="+firstname+"_"+surname+"&birth="+date+"_"+place+"&keyword="+modify});
    }
});

document.getElementById("filter3").addEventListener("click", () => {
    chrome.tabs.create({"url": "https://www.census.gov"});
});
