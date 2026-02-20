// Select elements
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const category = document.getElementById("category");
const description = document.getElementById("description");
const eventsList = document.getElementById("eventsList");

// Add Event Function
function addEvent() {

    // Get values
    const titleValue = eventTitle.value.trim();
    const dateValue = eventDate.value;
    const categoryValue = category.value;
    const descriptionValue = description.value.trim();

    // Validation
    if (!titleValue || !dateValue || !categoryValue || !descriptionValue) {
        alert("Please fill all fields!");
        return;
    }

    // Remove "No events" message if exists
    const noEventsMsg = document.querySelector(".no-events");
    if (noEventsMsg) {
        noEventsMsg.remove();
    }

    // Create event card
    const eventCard = document.createElement("div");
    eventCard.style.border = "1px solid #ccc";
    eventCard.style.margin = "5px";
    eventCard.style.padding = "5px";
    eventCard.style.borderRadius = "5px";
    eventCard.style.backgroundColor = "#f9f9f9";

    eventCard.innerHTML = `
        <strong>${titleValue}</strong><br>
        📅 ${dateValue} <br>
        🏷️ ${categoryValue} <br>
        📝 ${descriptionValue}
        <br><br>
        <button onclick="this.parentElement.remove()">❌ Delete</button>
    `;

    // Append to list
    eventsList.appendChild(eventCard);

    // Clear input fields
    eventTitle.value = "";
    eventDate.value = "";
    category.value = "";
    description.value = "";
}


// Clear All Events
function clearAllEvents() {
    eventsList.innerHTML = `
        <div class="no-events">
            No events yet. Add your first event! 🎉
        </div>
    `;
}


// Add Sample Events
function addSampleEvents() {

    const sampleEvents = [
        {
            title: "Tech Conference 2026",
            date: "2026-03-15",
            category: "Conference",
            description: "Annual technology conference."
        },
        {
            title: "Web Dev Workshop",
            date: "2026-04-10",
            category: "Workshop",
            description: "Hands-on JavaScript workshop."
        }
    ];

    sampleEvents.forEach(event => {
        eventTitle.value = event.title;
        eventDate.value = event.date;
        category.value = event.category;
        description.value = event.description;

        addEvent();
    });
}


// DOM Manipulation Demo
const domInput = document.querySelector(".DOM-contanier input");

domInput.addEventListener("input", function () {
    document.querySelector("h3").textContent = 
        "DOM Manipulation Demo: " + domInput.value;
});