let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteButton = document.getElementById("delete-leads-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const welcomeEl = document.getElementById("welcome-el")
const tabButton = document.getElementById("tab-btn")
let name = "Filip Politowski"
let greeting = "Welcome back"
let emoji = "🔥";

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a id = "leads-links"target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
    greetUser(greeting, name, emoji)
}

function greetUser(greeting, name, emoji) {
    welcomeEl.textContent = `${greeting}, ${name} ${emoji}`
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})


deleteButton.addEventListener("dblclick", function deleteAll() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
tabButton.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


// Execute a function when the user presses a key on the keyboard
inputEl.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("input-btn").click();
    }
});

