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