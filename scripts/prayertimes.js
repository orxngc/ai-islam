  // Function to fetch and display prayer times
  async function fetchPrayerTimes(year, month, latitude, longitude) {
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

  // Get user's current location
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
        fetchPrayerTimes(year, month, latitude, longitude);
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  // Call the function to get user's location and fetch prayer times
  getLocation();