// Function to fetch and display prayer times
async function fetchPrayerTimes(year, month) {
    const latitude = 51.508515; // Example latitude
    const longitude = -0.1254872; // Example longitude
    const method = 2; // Method number 2

    try {
        const response = await fetch(`http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`);
        const data = await response.json();
        const timings = data.data[0].timings;

        // Display prayer times
        const prayerTimesElement = document.getElementById('prayerTimes');
        for (const [key, value] of Object.entries(timings)) {
            const prayerTime = document.createElement('p');
            prayerTime.textContent = `${key}: ${value}`;
            prayerTimesElement.appendChild(prayerTime);
        }
    } catch (error) {
        console.error('Error fetching prayer times:', error);
    }
}

// Call the function to fetch and display prayer times for April 2017
fetchPrayerTimes(2017, 4);