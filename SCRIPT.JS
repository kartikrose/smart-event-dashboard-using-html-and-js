const eventsList = document.getElementById("eventsList");
    const noEvents = document.getElementById("noEvents");

    function addEvent() {
        const title = document.getElementById("title").value;
        const date = document.getElementById("date").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;

        if (title === "" || date === "") {
            alert("Please fill all required fields!");
            return;
        }

        const eventDiv = document.createElement("div");
        eventDiv.classList.add("event-item");
        eventDiv.innerHTML = `
            <h4>${title}</h4>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p>${description}</p>
        `;

        eventsList.appendChild(eventDiv);

        if (noEvents) {
            noEvents.style.display = "none";
        }

        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("description").value = "";
    }

    function clearEvents() {
        eventsList.innerHTML = '<p id="noEvents">No events yet. Add your first event!</p>';
    }

    function addSampleEvents() {
        const sampleData = [
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

        sampleData.forEach(event => {
            const eventDiv = document.createElement("div");
            eventDiv.classList.add("event-item");
            eventDiv.innerHTML = `
                <h4>${event.title}</h4>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Category:</strong> ${event.category}</p>
                <p>${event.description}</p>
            `;
            eventsList.appendChild(eventDiv);
        });

        if (noEvents) {
            noEvents.style.display = "none";
        }
    }

    // DOM Key Detection
    document.addEventListener("keydown", function(event) {
        document.getElementById("keyDisplay").textContent = event.key;
    });
