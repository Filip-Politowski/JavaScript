let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteButton = document.getElementById("delete-leads-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a id = "leads-links"target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

deleteButton.addEventListener("click", function deleteAll() {
    localStorage.clear()
    myLeads = []
    ulEl.textContent = ""
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

