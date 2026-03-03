# 🌦️ Weather Dashboard Application

A modern and responsive Weather Dashboard built using **Vanilla JavaScript (ES6 Modules)** and the **OpenWeatherMap REST API**.

This application allows users to search for any city worldwide and view real-time weather data with persistent user preferences using Local Storage.

---

## 🚀 Live Demo


---

## 📌 Project Overview

The goal of this project is to demonstrate:

* Asynchronous JavaScript using `async/await`
* REST API integration
* JSON data handling
* Modular JavaScript architecture
* Local Storage persistence
* Error handling and loading states
* Responsive UI design

This project simulates a real-world frontend application that interacts with third-party APIs.

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6+)
* REST API
* OpenWeatherMap API
* Local Storage

---

## 📂 Project Structure

```
weather-dashboard/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── api.js
│   └── storage.js
└── README.md
```

### 📌 File Responsibilities

**index.html**

* Main UI layout
* Script module loading

**api.js**

* Handles API calls
* Uses async/await
* Error handling for failed responses

**storage.js**

* Saves and retrieves user preferences
* Uses JSON.stringify and JSON.parse

**app.js**

* UI rendering
* Event listeners
* Loader & error state management

---

## 🌍 API Integration

This project uses the OpenWeatherMap API.

### Current Weather Endpoint:

```
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Implementation Approach:

1. Fetch data using async/await
2. Validate HTTP response status
3. Convert response to JSON
4. Extract required fields
5. Render UI dynamically

### Error Handling:

* Checks `response.ok`
* Displays user-friendly error messages
* Handles invalid city names

---

## 🔄 Asynchronous JavaScript Usage

The project uses:

* `async/await` for cleaner asynchronous flow
* `try...catch` blocks for error management
* Proper loading state handling

Example:

```javascript
async function getWeather(city) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
}
```

---

## 💾 Local Storage Implementation

Used to:

* Save last searched city
* Auto-load weather on refresh

Example:

```javascript
localStorage.setItem("lastCity", city);
const city = localStorage.getItem("lastCity");
```

---

## ✨ Features

* 🔍 City Search Functionality
* 🌡️ Real-Time Temperature Display
* 💧 Humidity Information
* 🌬️ Wind Speed Data
* 💾 Persistent Last Search
* ⏳ Loading State Indicator
* ❌ User-Friendly Error Messages
* 📱 Responsive Layout

---

## ⚙️ Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/your-username/weather-dashboard.git
   ```

2. Navigate into project folder

3. Get your API key from OpenWeatherMap

4. Add API key inside `api.js`:

   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```

5. Open `index.html` in your browser

---

## 🧠 Concepts Demonstrated

* REST Architecture
* HTTP Status Codes
* Modular JavaScript
* DOM Manipulation
* Event Handling
* JSON Parsing
* Browser Storage APIs

---

## 🧪 Testing Scenarios

* Valid city search
* Invalid city search
* Empty input handling
* Page refresh persistence
* Network failure simulation

---

## 🚀 Future Improvements

* 5-day weather forecast
* Dark/Light theme toggle
* Geolocation support
* Search history
* Debounced input search
* Convert to React version
* Deploy on Netlify

---

## 📸 Screenshots

(Add screenshots inside /screenshots folder)

* Home Page
* Weather Result
* Error State
* Mobile View

---

## 👨‍💻 Author

Akash
Computer Science & AI Student
Aspiring Web Developer

---

## 📄 License

This project is built for educational and portfolio purposes.
