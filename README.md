Gyms struggle to manage memberships, renewals, class bookings, trainer-client communication, and progress tracking.
This project provides:

Membership purchase
Renewal handling
Expiry alerts
Workout tracking
Analytics dashboard
Admin management (members, trainers, equipment, alerts)

⚙️ Tech Stack

Frontend
React 18
Vite
Chart.js + react-chartjs-2
Tailwind CSS
Axios
Backend
Node.js
Express.js
MongoDB

Project Setup Steps
1. Clone the repository
git clone https://github.com/kr8865/team-30-Gym_tracking_system

2. Install backend dependencies
cd backend
npm install

3. Install frontend dependencies
cd ../client
npm install

4. Start backend
npm run start

5. Start frontend
npm run dev

📁 Folder Structure (Updated for Your Project)
gym/
│
├── backend/
│   ├── models/
│   │   ├── Membership.js
│   │   ├── User.js
│   │   └── Workout.js
│   ├── routes/
│   │   ├── membershipRoutes.js
│   │   ├── workoutRoutes.js
│   │   └── userRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── MembershipPurchasePage.jsx
│   │   │   ├── MembershipStatusPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   └── LoginPage.jsx
│   │   ├── components/
│   │   │   ├── MembershipCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ChartComponents/
│   │   │       ├── FitnessLineChart.jsx
│   │   │       ├── WorkoutBarChart.jsx
│   │   │       └── ContributionPieChart.jsx
│   │   ├── index.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── README.md
└── .env.example

📌 API Documentation
POST /api/membership/create

Creates a new membership plan.

GET /api/membership/status/:memberId

Returns membership status: Active, Expired, No Membership.

POST /api/membership/renew

Renews an existing membership.

GET /api/memberships/expiring-soon

Lists memberships expiring in the next 7 days.

