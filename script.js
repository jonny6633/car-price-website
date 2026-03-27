// Car database with brands, models, and versions
const carsDatabase = {
    Toyota: [
        {
            id: 1,
            name: "Corolla",
            latestPrice: 24000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 24000, specs: "Latest model with hybrid option" },
                { year: 2023, price: 22500, specs: "Refreshed design" },
                { year: 2022, price: 21000, specs: "Previous generation" }
            ]
        },
        {
            id: 2,
            name: "Camry",
            latestPrice: 32000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 32000, specs: "New V6 engine option" },
                { year: 2023, price: 30000, specs: "Luxury trim available" },
                { year: 2022, price: 28000, specs: "Classic sedan" }
            ]
        },
        {
            id: 3,
            name: "RAV4",
            latestPrice: 28500,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 28500, specs: "All-wheel drive standard" },
                { year: 2023, price: 26500, specs: "Hybrid available" },
                { year: 2022, price: 25000, specs: "Popular SUV" }
            ]
        },
        {
            id: 4,
            name: "Highlander",
            latestPrice: 38000,
            latestYear: 2024,
            image: "🚐",
            versions: [
                { year: 2024, price: 38000, specs: "3-row seating" },
                { year: 2023, price: 36000, specs: "8-seater" },
                { year: 2022, price: 34000, specs: "Family SUV" }
            ]
        },
        {
            id: 5,
            name: "Prius",
            latestPrice: 27000,
            latestYear: 2024,
            image: "🌱",
            versions: [
                { year: 2024, price: 27000, specs: "New hybrid technology" },
                { year: 2023, price: 25500, specs: "Eco-friendly" },
                { year: 2022, price: 24000, specs: "Fuel efficient" }
            ]
        },
        {
            id: 6,
            name: "4Runner",
            latestPrice: 42000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 42000, specs: "Off-road capable" },
                { year: 2023, price: 40000, specs: "Rugged SUV" },
                { year: 2022, price: 38000, specs: "Built tough" }
            ]
        },
        {
            id: 7,
            name: "Tacoma",
            latestPrice: 35000,
            latestYear: 2024,
            image: "🚚",
            versions: [
                { year: 2024, price: 35000, specs: "New engine" },
                { year: 2023, price: 33000, specs: "Mid-size truck" },
                { year: 2022, price: 31000, specs: "Reliable pickup" }
            ]
        },
        {
            id: 8,
            name: "Yaris",
            latestPrice: 16000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 16000, specs: "Budget-friendly" },
                { year: 2023, price: 15000, specs: "Compact car" },
                { year: 2022, price: 14000, specs: "City car" }
            ]
        },
        {
            id: 9,
            name: "Venza",
            latestPrice: 36000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 36000, specs: "Crossover SUV" },
                { year: 2023, price: 34000, specs: "Modern design" },
                { year: 2022, price: 32000, specs: "Stylish" }
            ]
        },
        {
            id: 10,
            name: "Tundra",
            latestPrice: 45000,
            latestYear: 2024,
            image: "🚛",
            versions: [
                { year: 2024, price: 45000, specs: "Full-size truck" },
                { year: 2023, price: 43000, specs: "Powerful" },
                { year: 2022, price: 41000, specs: "Heavy duty" }
            ]
        }
    ],
    Honda: [
        {
            id: 11,
            name: "Civic",
            latestPrice: 23500,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 23500, specs: "Sport trim available" },
                { year: 2023, price: 22000, specs: "Reliable sedan" },
                { year: 2022, price: 20500, specs: "Fuel efficient" }
            ]
        },
        {
            id: 12,
            name: "Accord",
            latestPrice: 31000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 31000, specs: "Premium interior" },
                { year: 2023, price: 29500, specs: "Luxury features" },
                { year: 2022, price: 28000, specs: "Midsize sedan" }
            ]
        },
        {
            id: 13,
            name: "CR-V",
            latestPrice: 30500,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 30500, specs: "All-terrain" },
                { year: 2023, price: 28500, specs: "Popular SUV" },
                { year: 2022, price: 27000, specs: "Compact crossover" }
            ]
        },
        {
            id: 14,
            name: "Pilot",
            latestPrice: 39000,
            latestYear: 2024,
            image: "🚐",
            versions: [
                { year: 2024, price: 39000, specs: "3-row SUV" },
                { year: 2023, price: 37000, specs: "Family oriented" },
                { year: 2022, price: 35000, specs: "Spacious" }
            ]
        },
        {
            id: 15,
            name: "Fit",
            latestPrice: 18000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 18000, specs: "Compact hatchback" },
                { year: 2023, price: 17000, specs: "Fun to drive" },
                { year: 2022, price: 16000, specs: "Versatile" }
            ]
        },
        {
            id: 16,
            name: "Ridgeline",
            latestPrice: 42000,
            latestYear: 2024,
            image: "🚚",
            versions: [
                { year: 2024, price: 42000, specs: "Midsize truck" },
                { year: 2023, price: 40000, specs: "Premium truck" },
                { year: 2022, price: 38000, specs: "Capable" }
            ]
        },
        {
            id: 17,
            name: "Odyssey",
            latestPrice: 36000,
            latestYear: 2024,
            image: "🚐",
            versions: [
                { year: 2024, price: 36000, specs: "Family minivan" },
                { year: 2023, price: 34000, specs: "Spacious interior" },
                { year: 2022, price: 32000, specs: "Practical" }
            ]
        },
        {
            id: 18,
            name: "HR-V",
            latestPrice: 26500,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 26500, specs: "Subcompact SUV" },
                { year: 2023, price: 25000, specs: "Budget SUV" },
                { year: 2022, price: 23500, specs: "Affordable" }
            ]
        },
        {
            id: 19,
            name: "Clarity",
            latestPrice: 33000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 33000, specs: "Plug-in hybrid" },
                { year: 2023, price: 31500, specs: "Eco-friendly" },
                { year: 2022, price: 30000, specs: "Alternative fuel" }
            ]
        },
        {
            id: 20,
            name: "Passport",
            latestPrice: 41000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 41000, specs: "Adventure SUV" },
                { year: 2023, price: 39000, specs: "Off-road" },
                { year: 2022, price: 37000, specs: "Rugged" }
            ]
        }
    ],
    BMW: [
        {
            id: 21,
            name: "3 Series",
            latestPrice: 43000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 43000, specs: "Luxury sedan" },
                { year: 2023, price: 41000, specs: "Performance" },
                { year: 2022, price: 39000, specs: "Premium" }
            ]
        },
        {
            id: 22,
            name: "5 Series",
            latestPrice: 54000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 54000, specs: "Executive sedan" },
                { year: 2023, price: 52000, specs: "Elegant" },
                { year: 2022, price: 50000, specs: "Sophisticated" }
            ]
        },
        {
            id: 23,
            name: "X3",
            latestPrice: 46000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 46000, specs: "Luxury SUV" },
                { year: 2023, price: 44000, specs: "Premium crossover" },
                { year: 2022, price: 42000, specs: "Stylish" }
            ]
        },
        {
            id: 24,
            name: "X5",
            latestPrice: 62000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 62000, specs: "Full-size SUV" },
                { year: 2023, price: 60000, specs: "Premium 7-seater" },
                { year: 2022, price: 58000, specs: "Powerful" }
            ]
        },
        {
            id: 25,
            name: "i4",
            latestPrice: 55000,
            latestYear: 2024,
            image: "⚡",
            versions: [
                { year: 2024, price: 55000, specs: "Electric vehicle" },
                { year: 2023, price: 53000, specs: "Modern EV" },
                { year: 2022, price: 51000, specs: "Eco-friendly" }
            ]
        },
        {
            id: 26,
            name: "M440i",
            latestPrice: 70000,
            latestYear: 2024,
            image: "🏁",
            versions: [
                { year: 2024, price: 70000, specs: "Performance sedan" },
                { year: 2023, price: 68000, specs: "M Sport package" },
                { year: 2022, price: 66000, specs: "High performance" }
            ]
        },
        {
            id: 27,
            name: "Z4",
            latestPrice: 51000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 51000, specs: "Sports roadster" },
                { year: 2023, price: 49000, specs: "Convertible" },
                { year: 2022, price: 47000, specs: "Thrilling" }
            ]
        },
        {
            id: 28,
            name: "X1",
            latestPrice: 38000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 38000, specs: "Compact SUV" },
                { year: 2023, price: 36000, specs: "Entry-level luxury" },
                { year: 2022, price: 34000, specs: "Urban SUV" }
            ]
        },
        {
            id: 29,
            name: "X7",
            latestPrice: 85000,
            latestYear: 2024,
            image: "🚐",
            versions: [
                { year: 2024, price: 85000, specs: "Three-row luxury SUV" },
                { year: 2023, price: 83000, specs: "Premium flagship" },
                { year: 2022, price: 81000, specs: "Luxury 7-seater" }
            ]
        },
        {
            id: 30,
            name: "M440i xDrive",
            latestPrice: 75000,
            latestYear: 2024,
            image: "🏁",
            versions: [
                { year: 2024, price: 75000, specs: "M Performance" },
                { year: 2023, price: 73000, specs: "AWD sport" },
                { year: 2022, price: 71000, specs: "Extreme performance" }
            ]
        }
    ],
    Mercedes: [
        {
            id: 31,
            name: "C-Class",
            latestPrice: 45000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 45000, specs: "Compact luxury sedan" },
                { year: 2023, price: 43000, specs: "Elegant design" },
                { year: 2022, price: 41000, specs: "Premium" }
            ]
        },
        {
            id: 32,
            name: "E-Class",
            latestPrice: 58000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 58000, specs: "Executive sedan" },
                { year: 2023, price: 56000, specs: "Luxury" },
                { year: 2022, price: 54000, specs: "Sophisticated" }
            ]
        },
        {
            id: 33,
            name: "GLC",
            latestPrice: 48000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 48000, specs: "Compact luxury SUV" },
                { year: 2023, price: 46000, specs: "Premium crossover" },
                { year: 2022, price: 44000, specs: "Stylish" }
            ]
        },
        {
            id: 34,
            name: "GLE",
            latestPrice: 65000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 65000, specs: "Midsize luxury SUV" },
                { year: 2023, price: 63000, specs: "Premium 7-seater" },
                { year: 2022, price: 61000, specs: "Powerful" }
            ]
        },
        {
            id: 35,
            name: "A-Class",
            latestPrice: 36000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 36000, specs: "Compact hatchback" },
                { year: 2023, price: 34000, specs: "Entry-level luxury" },
                { year: 2022, price: 32000, specs: "Urban car" }
            ]
        },
        {
            id: 36,
            name: "S-Class",
            latestPrice: 110000,
            latestYear: 2024,
            image: "👑",
            versions: [
                { year: 2024, price: 110000, specs: "Full-size luxury sedan" },
                { year: 2023, price: 108000, specs: "Flagship" },
                { year: 2022, price: 106000, specs: "Ultimate luxury" }
            ]
        },
        {
            id: 37,
            name: "GLA",
            latestPrice: 42000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 42000, specs: "Subcompact SUV" },
                { year: 2023, price: 40000, specs: "Budget luxury" },
                { year: 2022, price: 38000, specs: "Affordable" }
            ]
        },
        {
            id: 38,
            name: "AMG C63",
            latestPrice: 68000,
            latestYear: 2024,
            image: "🏁",
            versions: [
                { year: 2024, price: 68000, specs: "High performance" },
                { year: 2023, price: 66000, specs: "AMG power" },
                { year: 2022, price: 64000, specs: "Speed machine" }
            ]
        },
        {
            id: 39,
            name: "GLA 250",
            latestPrice: 38000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 38000, specs: "Compact crossover" },
                { year: 2023, price: 36000, specs: "Fun SUV" },
                { year: 2022, price: 34000, specs: "Trendy" }
            ]
        },
        {
            id: 40,
            name: "G-Class",
            latestPrice: 105000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 105000, specs: "Iconic SUV" },
                { year: 2023, price: 103000, specs: "Legendary" },
                { year: 2022, price: 101000, specs: "Premium off-road" }
            ]
        }
    ],
    Ford: [
        {
            id: 41,
            name: "Mustang",
            latestPrice: 43000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 43000, specs: "American muscle car" },
                { year: 2023, price: 41000, specs: "Iconic" },
                { year: 2022, price: 39000, specs: "Performance" }
            ]
        },
        {
            id: 42,
            name: "F-150",
            latestPrice: 37000,
            latestYear: 2024,
            image: "🚚",
            versions: [
                { year: 2024, price: 37000, specs: "Best-selling truck" },
                { year: 2023, price: 35500, specs: "Workhorse" },
                { year: 2022, price: 34000, specs: "Reliable" }
            ]
        },
        {
            id: 43,
            name: "Escape",
            latestPrice: 29000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 29000, specs: "Compact SUV" },
                { year: 2023, price: 27500, specs: "Family SUV" },
                { year: 2022, price: 26000, specs: "Practical" }
            ]
        },
        {
            id: 44,
            name: "Explorer",
            latestPrice: 37000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 37000, specs: "Midsize SUV" },
                { year: 2023, price: 35500, specs: "3-row" },
                { year: 2022, price: 34000, specs: "Spacious" }
            ]
        },
        {
            id: 45,
            name: "Fusion",
            latestPrice: 26000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 26000, specs: "Midsize sedan" },
                { year: 2023, price: 24500, specs: "Fuel efficient" },
                { year: 2022, price: 23000, specs: "Reliable" }
            ]
        },
        {
            id: 46,
            name: "Ranger",
            latestPrice: 33000,
            latestYear: 2024,
            image: "🚚",
            versions: [
                { year: 2024, price: 33000, specs: "Midsize truck" },
                { year: 2023, price: 31500, specs: "Capable" },
                { year: 2022, price: 30000, specs: "Versatile" }
            ]
        },
        {
            id: 47,
            name: "Edge",
            latestPrice: 39000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 39000, specs: "Midsize crossover" },
                { year: 2023, price: 37000, specs: "Luxury SUV" },
                { year: 2022, price: 35000, specs: "Premium" }
            ]
        },
        {
            id: 48,
            name: "Bronco",
            latestPrice: 36000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 36000, specs: "Off-road SUV" },
                { year: 2023, price: 34500, specs: "Adventure" },
                { year: 2022, price: 33000, specs: "Rugged" }
            ]
        },
        {
            id: 49,
            name: "Focus",
            latestPrice: 22000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 22000, specs: "Compact car" },
                { year: 2023, price: 20500, specs: "Budget-friendly" },
                { year: 2022, price: 19000, specs: "Economy" }
            ]
        },
        {
            id: 50,
            name: "Expedition",
            latestPrice: 52000,
            latestYear: 2024,
            image: "🚐",
            versions: [
                { year: 2024, price: 52000, specs: "Full-size SUV" },
                { year: 2023, price: 50000, specs: "3-row seating" },
                { year: 2022, price: 48000, specs: "Powerful" }
            ]
        }
    ],
    Audi: [
        {
            id: 51,
            name: "A4",
            latestPrice: 46000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 46000, specs: "Compact luxury sedan" },
                { year: 2023, price: 44000, specs: "Premium design" },
                { year: 2022, price: 42000, specs: "Elegant" }
            ]
        },
        {
            id: 52,
            name: "A6",
            latestPrice: 59000,
            latestYear: 2024,
            image: "🏎",
            versions: [
                { year: 2024, price: 59000, specs: "Midsize luxury sedan" },
                { year: 2023, price: 57000, specs: "Executive" },
                { year: 2022, price: 55000, specs: "Sophisticated" }
            ]
        },
        {
            id: 53,
            name: "Q3",
            latestPrice: 41000,
            latestYear: 2024,
            image: "🚘",
            versions: [
                { year: 2024, price: 41000, specs: "Compact luxury SUV" },
                { year: 2023, price: 39000, specs: "Premium crossover" },
                { year: 2022, price: 37000, specs: "Stylish" }
            ]
        },
        {
            id: 54,
            name: "Q5",
            latestPrice: 53000,
            latestYear: 2024,
            image: "🚙",
            versions: [
                { year: 2024, price: 53000, specs: "Midsize luxury SUV" },
                { year: 2023, price: 51000, specs: "Premium features" },
                { year: 2022, price: 49000, specs: "Powerful" }
            ]
        },
        {
            id: 55,
            name: "A3",
            latestPrice: 35000,
            latestYear: 2024,
            image: "🚗",
            versions: [
                { year: 2024, price: 35000, specs: "Subcompact sedan" },
                { year: 2023, price: 33000, specs: "Entry-level luxury" },
                { year: 2022, price: 31000, specs: "Budget luxury" }
            ]
        },
        {
            id: 56,
            name: "RS6",
            latestPrice: 112000,
            latestYear: 2024,
            image: "🏁",
            versions: [
                { year: 2024, price: 112000, specs: "High-performance sedan" },
                { year: 2023, price: 110000, specs: "RS power" },
                { year: 2022, price: 108000, specs: "Ultimate performance" }
            ]
        },
        {
            id: 57,
            name: "Q7",
            latestPrice: 63000,
            latestYear: 2024,
            image: "🚐",
            versions: [
                { year: 2024, price: 63000, specs: "Full-size luxury SUV" },
                { year: 2023, price: 61000, specs: "Premium 7-seater" },
                { year: 2022, price: 59000, specs: "Spacious" }
            ]
        },
        {
            id: 58,
            name: "A8",
            latestPrice: 85000,
            latestYear: 2024,
            image: "👑",
            versions: [
                { year: 2024, price: 85000, specs: "Full-size luxury sedan" },
                { year: 2023, price: 83000, specs: "Flagship" },
                { year: 2022, price: 81000, specs: "Ultimate luxury" }
            ]
        },
        {
            id: 59,
            name: "e-tron GT",
            latestPrice: 99000,
            latestYear: 2024,
            image: "⚡",
            versions: [
                { year: 2024, price: 99000, specs: "Electric performance" },
                { year: 2023, price: 97000, specs: "Modern EV" },
                { year: 2022, price: 95000, specs: "Futuristic" }
            ]
        },
        {
            id: 60,
            name: "Q4 e-tron",
            latestPrice: 52000,
            latestYear: 2024,
            image: "⚡",
            versions: [
                { year: 2024, price: 52000, specs: "Electric SUV" },
                { year: 2023, price: 50000, specs: "Eco-friendly crossover" },
                { year: 2022, price: 48000, specs: "Green SUV" }
            ]
        }
    ]
};

let currentBrand = 'all';

// Function to display cars
function displayCars(brand) {
    const container = document.getElementById('carsContainer');
    container.innerHTML = '';

    let carsToDisplay = [];

    if (brand === 'all') {
        Object.values(carsDatabase).forEach(brandCars => {
            carsToDisplay = carsToDisplay.concat(brandCars);
        });
    } else {
        carsToDisplay = carsDatabase[brand] || [];
    }

    carsToDisplay.forEach(car => {
        const carCard = document.createElement('div');
        carCard.className = 'car-card';
        carCard.innerHTML = `
            <div class="car-image">${car.image}</div>
            <div class="car-info">
                <div class="car-brand">${car.name}</div>
                <h3>${car.name} (${car.latestYear})</h3>
                <div class="car-price">$${car.latestPrice.toLocaleString()}</div>
                <div class="car-year">Latest Model</div>
                <button class="view-versions-btn" onclick="viewVersions('${car.name}', ${car.id})">View Versions</button>
            </div>
        `;
        container.appendChild(carCard);
    });
}

// Function to filter by brand
function filterByBrand(brand) {
    currentBrand = brand;

    // Update active button
    document.querySelectorAll('.brand-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    displayCars(brand);
}

// Function to view all versions of a car
function viewVersions(carName, carId) {
    // Find the car in database
    let selectedCar = null;
    Object.values(carsDatabase).forEach(brandCars => {
        const found = brandCars.find(car => car.id === carId);
        if (found) selectedCar = found;
    });

    if (!selectedCar) return;

    // Display modal
    document.getElementById('modalTitle').textContent = `${carName} - All Versions`;
    const versionsContainer = document.getElementById('versionsContainer');
    versionsContainer.innerHTML = '';

    const versionsList = document.createElement('div');
    versionsList.className = 'versions-list';

    selectedCar.versions.forEach(version => {
        const versionItem = document.createElement('div');
        versionItem.className = 'version-item';
        versionItem.innerHTML = `
            <h4>📅 ${version.year} Model</h4>
            <div class="version-details">
                <p><strong>Specs:</strong> ${version.specs}</p>
                <p class="version-price">💰 Price: $${version.price.toLocaleString()}</p>
            </div>
        `;
        versionsList.appendChild(versionItem);
    });

    versionsContainer.appendChild(versionsList);
    document.getElementById('carModal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('carModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize - display all cars on page load
displayCars('all');