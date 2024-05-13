  // Function to fetch and display prayer times
  async function fetchPrayerTimes(year, month) {
    const latitude = 51.508515; // Example latitude
    const longitude = -0.1254872; // Example longitude
    const method = 2; // Method number 2

    try {
      const response = await fetch(`http://api.aladhan.com/v1/calendar/${year}/${month}?latitude=${latitude}&longitude=${longitude}&method=${method}`);
      const data = await response.json();
      const timings = data.data[0].timings;

      // Display specific prayer times
      const prayerTimesElement = document.getElementById('prayerTimes');
      const keys = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']; // Keys you want to display
      for (const key of keys) {
        const prayerTime = document.createElement('li');
        prayerTime.textContent = `${key}: ${timings[key]}`;
        prayerTimesElement.appendChild(prayerTime);
      }
    } catch (error) {
      console.error('Error fetching prayer times:', error);
    }
  }

  // Call the function to fetch and display specific prayer times
  fetchPrayerTimes(2017, 4);