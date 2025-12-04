# 🏋️ Gym Tracking System

A comprehensive gym management system that enables gym owners, trainers, and members to efficiently manage memberships, workouts, attendance, diet plans, and equipment maintenance.

---

## 📋 Problem Statement

Modern gyms face several operational challenges:
- **Manual Attendance Tracking**: Traditional paper-based or basic systems are inefficient
- **Membership Management**: Difficulty tracking active memberships, renewals, and plan details
- **Workout Monitoring**: No centralized system for members to log and track their fitness progress
- **Trainer-Client Communication**: Limited tools for trainers to assign diet plans and monitor client progress
- **Equipment Maintenance**: Poor tracking of equipment status and maintenance schedules
- **Administrative Overhead**: Time-consuming manual processes for gym administrators

This system provides a **digital solution** that streamlines gym operations, enhances member experience, and provides data-driven insights for better decision-making.

---

## 🚀 Tech Stack

### **Frontend**
- **React 19** - Modern UI library with hooks
- **React Router DOM v7** - Client-side routing
- **Vite** - Fast build tool and dev server
- **TailwindCSS v4** - Utility-first CSS framework
- **Recharts** - Data visualization library
- **Lucide React** - Beautiful icon library
- **react-qr-code** - QR code generation for attendance

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js v5** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

---

## 📁 Folder Structure

```
gym_tracking_system/
│
├── backend/                      # Backend server application
│   ├── controllers/              # Request handlers
│   │   ├── adminController.js    # Admin operations (stats, members, equipment)
│   │   ├── authController.js     # Authentication (register, login)
│   │   ├── memberController.js   # Member operations (plans, attendance, workouts)
│   │   └── trainerController.js  # Trainer operations (clients, diet, progress)
│   │
│   ├── middleware/               # Custom middleware
│   │   └── authMiddleware.js     # JWT authentication middleware
│   │
│   ├── models/                   # Mongoose schemas
│   │   ├── Attendance.js         # Attendance tracking
│   │   ├── Diet.js               # Diet plan model
│   │   ├── Equipment.js          # Equipment management
│   │   ├── Plan.js               # Membership plans
│   │   ├── User.js               # User authentication & profiles
│   │   └── Workout.js            # Workout logs
│   │
│   ├── routes/                   # API route definitions
│   │   ├── adminRoutes.js        # /api/admin/*
│   │   ├── authRoutes.js         # /api/auth/*
│   │   ├── memberRoutes.js       # /api/member/*
│   │   └── trainerRoutes.js      # /api/trainer/*
│   │
│   ├── package.json              # Backend dependencies
│   ├── server.js                 # Express server entry point
│   ├── seed.js                   # Database seeding script
│   └── test_api.js               # API testing utilities
│
├── frontend/                     # React frontend application
│   ├── public/                   # Static assets
│   │
│   ├── src/
│   │   ├── assets/               # Images, fonts, etc.
│   │   │
│   │   ├── components/           # Reusable components
│   │   │   └── Gamification.jsx  # Gamification features
│   │   │
│   │   ├── context/              # React Context API
│   │   │   └── AuthContext.jsx   # Authentication state management
│   │   │
│   │   ├── pages/                # Page components
│   │   │   ├── AdminDashboard.jsx    # Admin panel
│   │   │   ├── Dashboard.jsx         # Member dashboard
│   │   │   ├── Login.jsx             # Login page
│   │   │   ├── Plans.jsx             # Membership plans
│   │   │   ├── QRCode.jsx            # QR code for attendance
│   │   │   ├── Register.jsx          # User registration
│   │   │   ├── TrainerDashboard.jsx  # Trainer panel
│   │   │   └── WorkoutLog.jsx        # Workout logging
│   │   │
│   │   ├── App.jsx               # Main app component
│   │   ├── App.css               # App-specific styles
│   │   ├── index.css             # Global styles
│   │   └── main.jsx              # React entry point
│   │
│   ├── eslint.config.js          # ESLint configuration
│   ├── index.html                # HTML template
│   ├── package.json              # Frontend dependencies
│   ├── vite.config.js            # Vite configuration
│   └── README.md                 # Frontend-specific docs
│
├── package.json                  # Root package.json
├── .env.example                  # Environment variables template
└── README.md                     # This file
```

---

## 🛠️ Project Setup Steps

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** (for version control)

### **1. Clone the Repository**
```bash
git clone https://github.com/kr8865/gym_tracking_system.git
cd gym_tracking_system
```

### **2. Backend Setup**

#### Install Dependencies
```bash
cd backend
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `backend` directory:
```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gym_tracking_system
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
NODE_ENV=development
```

#### Seed the Database (Optional)
To populate the database with sample data:
```bash
node seed.js
```

#### Start the Backend Server
```bash
node server.js
```
The backend will run on `http://localhost:5000`

### **3. Frontend Setup**

#### Install Dependencies
```bash
cd ../frontend
npm install
```

#### Configure Environment (if needed)
Create a `.env` file in the `frontend` directory if you need custom API endpoints:
```env
VITE_API_URL=http://localhost:5000
```

#### Start the Development Server
```bash
npm run dev
```
The frontend will run on `http://localhost:5173`

### **4. Access the Application**
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 🔐 Default Login Credentials

After seeding the database, you can use these credentials:

### Admin Account
- **Email**: `admin@gym.com`
- **Password**: `admin123`

### Trainer Account
- **Email**: `trainer@gym.com`
- **Password**: `trainer123`

### Member Account
- **Email**: `member@gym.com`
- **Password**: `member123`

---

## 📸 Screenshots

### 1. Login Page
![Login Page](./screenshots/login.png)
*User authentication with role-based access*

### 2. Member Dashboard
![Member Dashboard](./screenshots/member-dashboard.png)
*Member view with workout stats and attendance tracking*

### 3. Admin Dashboard
![Admin Dashboard](./screenshots/admin-dashboard.png)
*Admin panel with gym statistics, member management, and equipment tracking*

### 4. Trainer Dashboard
![Trainer Dashboard](./screenshots/trainer-dashboard.png)
*Trainer interface for managing clients and assigning diet plans*

### 5. QR Code Attendance
![QR Code](./screenshots/qr-code.png)
*QR code generation for quick check-in*

### 6. Workout Log
![Workout Log](./screenshots/workout-log.png)
*Detailed workout tracking with exercises, sets, and reps*

### 7. Membership Plans
![Plans](./screenshots/plans.png)
*Available membership plans and subscription management*

---

## 📡 API Documentation

### **Base URL**
```
http://localhost:5000/api
```

---

### **Authentication Endpoints**

#### 1. Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "role": "member"  // Options: "member", "trainer", "admin"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "member"
  }
}
```

#### 2. Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "member"
  }
}
```

---

### **Member Endpoints**

#### 3. Get All Plans
```http
GET /api/member/plans
```

**Response:**
```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "name": "Basic Plan",
    "price": 1999,
    "durationMonths": 1,
    "features": ["Gym Access", "Locker Facility"]
  }
]
```

#### 4. Purchase Plan
```http
POST /api/member/purchase
Authorization: Bearer <token>
Content-Type: application/json

{
  "planId": "64f5a1b2c3d4e5f6g7h8i9j0"
}
```

#### 5. Mark Attendance (Check-in)
```http
POST /api/member/check-in
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "64f5a1b2c3d4e5f6g7h8i9j0"
}
```

#### 6. Log Workout
```http
POST /api/member/workout
Authorization: Bearer <token>
Content-Type: application/json

{
  "exercises": [
    {
      "name": "Bench Press",
      "sets": 3,
      "reps": 12,
      "weight": 60
    },
    {
      "name": "Squats",
      "sets": 4,
      "reps": 10,
      "weight": 80
    }
  ],
  "durationMinutes": 45,
  "notes": "Good session, felt strong"
}
```

#### 7. Get User Workouts
```http
GET /api/member/workouts
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "date": "2025-12-04T10:30:00.000Z",
    "exercises": [
      {
        "name": "Bench Press",
        "sets": 3,
        "reps": 12,
        "weight": 60
      }
    ],
    "durationMinutes": 45,
    "notes": "Good session"
  }
]
```

---

### **Admin Endpoints**

#### 8. Get Gym Statistics
```http
GET /api/admin/stats
Authorization: Bearer <token>
```

**Response:**
```json
{
  "totalMembers": 150,
  "activeMembers": 120,
  "totalRevenue": 180000,
  "equipmentStatus": {
    "operational": 45,
    "maintenance": 3,
    "broken": 2
  }
}
```

#### 9. Get All Members
```http
GET /api/admin/members
Authorization: Bearer <token>
```

#### 10. Update Member Status
```http
PUT /api/admin/member/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "membership": {
    "isActive": true
  }
}
```

#### 11. Get Equipment List
```http
GET /api/admin/equipment
Authorization: Bearer <token>
```

#### 12. Add New Equipment
```http
POST /api/admin/equipment
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Treadmill Pro 3000",
  "status": "Operational",
  "nextMaintenanceDue": "2025-03-01"
}
```

#### 13. Update Equipment Status
```http
PUT /api/admin/equipment/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "Maintenance",
  "lastMaintained": "2025-12-04"
}
```

---

### **Trainer Endpoints**

#### 14. Get Assigned Clients
```http
GET /api/trainer/clients
Authorization: Bearer <token>
```

**Response:**
```json
[
  {
    "_id": "64f5a1b2c3d4e5f6g7h8i9j0",
    "name": "John Doe",
    "email": "john@example.com",
    "membership": {
      "isActive": true,
      "plan": "Premium Plan"
    }
  }
]
```

#### 15. Assign Diet Plan
```http
POST /api/trainer/diet
Authorization: Bearer <token>
Content-Type: application/json

{
  "userId": "64f5a1b2c3d4e5f6g7h8i9j0",
  "name": "Muscle Gain Plan",
  "meals": [
    {
      "time": "Breakfast",
      "description": "Oatmeal with fruits and nuts",
      "calories": 450,
      "protein": 15,
      "carbs": 60,
      "fats": 15
    },
    {
      "time": "Lunch",
      "description": "Grilled chicken with brown rice",
      "calories": 600,
      "protein": 45,
      "carbs": 50,
      "fats": 20
    }
  ]
}
```

#### 16. Get Client Progress
```http
GET /api/trainer/client/:id/progress
Authorization: Bearer <token>
```

**Response:**
```json
{
  "workouts": 24,
  "attendance": 28,
  "currentWeight": 75,
  "targetWeight": 70,
  "recentWorkouts": [...]
}
```

---

## 🗄️ Database Schema

### **User Schema**
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['member', 'admin', 'trainer']),
  membership: {
    plan: ObjectId (ref: 'Plan'),
    startDate: Date,
    endDate: Date,
    isActive: Boolean
  },
  createdAt: Date (default: Date.now)
}
```

### **Plan Schema**
```javascript
{
  name: String (required),
  price: Number (required),
  durationMonths: Number (required),
  features: [String],
  createdAt: Date (default: Date.now)
}
```

### **Attendance Schema**
```javascript
{
  user: ObjectId (ref: 'User', required),
  date: Date (default: Date.now),
  checkInTime: Date (default: Date.now),
  status: String (enum: ['present', 'absent'])
}
```

### **Workout Schema**
```javascript
{
  user: ObjectId (ref: 'User', required),
  date: Date (default: Date.now),
  exercises: [{
    name: String (required),
    sets: Number (required),
    reps: Number (required),
    weight: Number (required)
  }],
  durationMinutes: Number,
  notes: String
}
```

### **Diet Schema**
```javascript
{
  user: ObjectId (ref: 'User', required),
  assignedBy: ObjectId (ref: 'User'),
  name: String (default: 'Weekly Plan'),
  meals: [{
    time: String,
    description: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number
  }],
  createdAt: Date (default: Date.now)
}
```

### **Equipment Schema**
```javascript
{
  name: String (required),
  status: String (enum: ['Operational', 'Maintenance', 'Broken']),
  lastMaintained: Date (default: Date.now),
  nextMaintenanceDue: Date
}
```

---

## 🎯 Features

### **For Members**
- ✅ User registration and authentication
- ✅ Browse and purchase membership plans
- ✅ QR code-based attendance check-in
- ✅ Log daily workouts with exercises, sets, reps, and weights
- ✅ View workout history and progress
- ✅ Access assigned diet plans
- ✅ Gamification and achievement system

### **For Trainers**
- ✅ View assigned clients
- ✅ Create and assign personalized diet plans
- ✅ Monitor client progress and workout history
- ✅ Track client attendance

### **For Admins**
- ✅ Dashboard with gym statistics and analytics
- ✅ Manage members (view, activate/deactivate)
- ✅ Equipment management and maintenance tracking
- ✅ Revenue and membership insights
- ✅ View all attendance records

---

## 🔒 Authentication & Authorization

- **JWT-based authentication** with bearer token
- **Role-based access control** (RBAC)
  - Members: Access to personal data and workouts
  - Trainers: Access to assigned clients and diet management
  - Admins: Full access to all system features
- **Password hashing** using bcryptjs
- **Protected routes** with middleware verification

---

## 🚀 Deployment

### **Backend Deployment (e.g., Heroku, Railway, Render)**
1. Set environment variables on the platform
2. Deploy the `backend` directory
3. Ensure MongoDB connection string is configured

### **Frontend Deployment (e.g., Vercel, Netlify)**
1. Build the production version:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder
3. Configure API URL environment variable

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add some feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a pull request

---

## 📝 License

This project is licensed under the ISC License.

---

## 👨‍💻 Authors

- **kr8865** - [GitHub Profile](https://github.com/kr8865)
- **GopalVarshney** - Current Branch Contributor

---

## 📧 Support

For issues or questions, please open an issue on the [GitHub repository](https://github.com/kr8865/gym_tracking_system/issues).

---

## 🎉 Acknowledgments

- React Team for the amazing framework
- MongoDB Team for the database
- Express.js community
- TailwindCSS for the utility-first CSS framework

---

**Made with ❤️ for fitness enthusiasts and gym owners**
