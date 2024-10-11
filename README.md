# PulsePay

PulsePay is a modern, responsive website for a digital money transfer agency. It provides seamless solutions for services such as money transfer, foreign exchange, air ticketing, hotel reservations, and more.

## Table of Contents

- [About PulsePay](#about-pulsepay)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About PulsePay

PulsePay is a user-friendly website designed for agencies offering digital financial services. The website ensures secure and fast transactions for users who wish to transfer money, exchange currency, or book travel services like air and railway tickets, hotel reservations, and car rentals.

## Features

- **Money Transfer**: Send money quickly and securely.
- **Foreign Exchange**: Exchange foreign currency at the best rates.
- **Air Ticketing**: Book flights effortlessly.
- **Railway Ticketing**: Purchase railway tickets with ease.
- **Hotel Reservation**: Find and reserve accommodations.
- **Car Hire for Outstation**: Book car rentals for your travels.

## Technologies Used

The PulsePay website is built using modern web technologies:

- **Frontend**:
  - [React (TypeScript)](https://reactjs.org/): For building the user interface.
  - [Tailwind CSS](https://tailwindcss.com/): For responsive and scalable CSS styling.

- **Backend** (Optional, depending on the setup):
  - [Node.js](https://nodejs.org/): For backend server logic.
  - [Express.js](https://expressjs.com/): A fast, unopinionated, minimalist web framework.
  - [MySQL](https://www.mysql.com/): Database to persist user information and transactions.

## Installation

To run the PulsePay website locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/pulsepay.git
   cd pulsepay


2. **Install dependencies:**  
For the backend:  

```
cd Backend
npm install
```  

For the frontend:

```
cd ../frontend
npm install
```  

3. **Set up environment variables:** You'll need to configure environment variables for both the frontend and backend.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

**Backend (in the root of the Backend directory, create a .env file):**

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
EMAIL_USER=<your-sender-email>
SENDGRID_API_KEY=<your-sendgrid-api-key>
FRONTEND_URL=http://localhost:5173
JWT_RESET_SECRET=<your-jwt-reset-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GOOGLE_CALLBACK_URL=<your-google-callback-url>
PORT=7999
```  

**Frontend (in the root of the frontend directory, create a .env file):**

```
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
REACT_APP_API_BASE_URL=http://localhost:7999/api
```

## Usage

1. **Run the backend:** Make sure you're in the backend folder and run:

```
npm run dev  
```

2. **Run the frontend:** Open a new terminal, navigate to the frontend folder, and run:

```
npm start
```
Or  
```
npm run dev  
```  

3. **Access the app:** Open your browser and go to http://localhost:5173 to start using the app considering the server port is running on 5173.

## Future Improvements
- **Notifications:** Implement email or in-app notifications for event updates.
- **Mobile Responsiveness:** Improve the mobile design and ensure a seamless experience on smaller devices.

## Contributing
Contributions are welcome! If you would like to improve or add new features to the app, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request for review.

## License
This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for details.

## Contact
For any inquiries or support, please contact:

1. Jedidia Nkunzumwami
didiernkunzumwami@gmail.com

2. Fatai Victor
igomigofatai@gmail.com

## Contributors
1. Jedidia Nkunzumwami
didiernkunzumwami@gmail.com

2. Fatai Victor
igomigofatai@gmail.com