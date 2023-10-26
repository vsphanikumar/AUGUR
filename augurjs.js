// Sample distributor data (you can replace this with real data from your backend)
const distributors = [
    {
        name: "Distributor 1",
        shippedLastMonth: 1000,
        forecastedShipment: 1200,
        ytdAverage: 950,
    },
    {
        name: "Distributor 2",
        shippedLastMonth: 800,
        forecastedShipment: 900,
        ytdAverage: 850,
    },
    // Add more distributor data as needed
];

// Function to generate distributor cards
function createDistributorCard(distributor) {
    const card = document.createElement("div");
    card.classList.add("distributor-card");

    card.innerHTML = `
        <h2>${distributor.name}</h2>
        <p>Last Month Shipment: ${distributor.shippedLastMonth}</p>
        <p>Forecasted Shipment: ${distributor.forecastedShipment}</p>
        <p>YTD Average Shipment: ${distributor.ytdAverage}</p>
    `;

    return card;
}

// Function to render distributor cards on the dashboard
function renderDashboard() {
    const dashboard = document.getElementById("dashboard");

    distributors.forEach((distributor) => {
        const card = createDistributorCard(distributor);
        dashboard.appendChild(card);
    });
}

// Initialize the dashboard
renderDashboard();
