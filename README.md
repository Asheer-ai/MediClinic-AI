# 🏥 Clinic Management System - Backend

This is the backend for our Clinic Management System project built using **Node.js**, **Express.js**, and **MongoDB** (Mongoose).  
It manages **Patients**, **Doctors**, **Admins**, **Appointments**, **Prescriptions**, and **Medical Tests**.

---

## 📂 Project Structure

```plaintext
Hospital-Management-System/
├── Client/
└── Server/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   ├── adminController.js
    │   ├── appointmentController.js
    │   ├── doctorController.js
    │   ├── medicalTestController.js
    │   ├── patientController.js
    │   └── prescriptionController.js
    ├── middlewares/
    │   ├── adminAuth.js
    │   └── authMiddleware.js
    ├── models/
    │   ├── appointmentModel.js
    │   ├── doctorModel.js
    │   ├── medicalTestModel.js
    │   ├── patientModel.js
    │   └── prescription.js
    ├── routes/
    │   ├── adminRoute.js
    │   ├── DoctorRoute.js
    │   └── patientRoute.js
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package-lock.json
    └── package.json
```

## 📌 Features Implemented

### 🧑‍💼 Admin

- Admin Login (hardcoded credentials).
- View All Patients' Appointments.
- Manage Medical Tests (Add, View, Delete).
- Manage Prescriptions (Add, View All, View by Patient and Doctor).

---

### 🧑‍⚕️ Doctor

- Doctor Registration (Manually by admin).
- Doctor Login (currently hardcoded code `123`).
- View All Doctors.
- View Single Doctor.
- Delete Doctor.

---

### 👤 Patient

- Patient Registration (with encrypted password using `bcryptjs`).
- Patient Login (JWT-based Authentication).
- Patient Logout (simple logout response).
- View Patient Details (by ID).
- Book Appointment with Doctor.

---

### 🗓️ Appointments

- Patients can book appointments with available doctors.
- Doctor and Patient models updated with appointment references when booked.

---

### 📝 Prescriptions

- Doctors can add prescriptions after appointments.
- Patients can view all prescriptions.
- Prescriptions can be fetched by:
  - Patient ID
  - Patient ID and Doctor ID combination

---

### 🧪 Medical Tests

- Admins can add, view, and delete medical tests.

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs (Password hashing)
- jsonwebtoken (JWT Authentication)
- cookie-parser (for handling cookies)

---

## 📚 API Endpoints Overview

### Patient Routes (`/api/patient`)

| Method | Route                   | Description                    |
|:------:|:------------------------:|:-------------------------------:|
| POST   | `/register`              | Register a new patient         |
| POST   | `/login`                 | Patient login                  |
| POST   | `/logout`                | Patient logout                 |
| POST   | `/addapointment`         | Book an appointment            |
| GET    | `/:patientId`            | Get patient details            |

---

### Doctor Routes (`/api/doctor`)

| Method | Route                    | Description                    |
|:------:|:-------------------------:|:-------------------------------:|
| POST   | `/add-doctor`             | Add new doctor (admin side)     |
| GET    | `/all-doctors`            | Get all doctors                 |
| DELETE | `/delete/:id`             | Delete a doctor                 |
| GET    | `/:id`                    | Get a single doctor             |
| POST   | `/login`                  | Doctor login                    |

---

### Admin Routes (`/api/admin`)

| Method | Route                     | Description                    |
|:------:|:--------------------------:|:-------------------------------:|
| POST   | `/login`                   | Admin login                    |
| GET    | `/allpatients`             | View all patient appointments  |
| POST   | `/addtest`                 | Add a medical test             |
| GET    | `/alltest`                 | View all medical tests         |
| DELETE | `/deletetest/:testId`       | Delete a medical test          |
| POST   | `/prescriptions`           | Add prescription               |
| GET    | `/prescriptions`           | Get all prescriptions          |
| GET    | `/prescriptions/:userId/:doctorId` | Get prescriptions by user and doctor |
| GET    | `/prescriptions/:userId`   | Get prescriptions by user      |



## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/clinic-management-backend.git

2. Install dependencies:
 ```bash
   npm install
```

3. Set up your .env file:
 ```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. Start the server:
```bash
npm run dev


# Clinic Management System - Frontend

This is the **frontend** of the Clinic Management System (CMS) built using **React.js**, **Vite**, and **Tailwind CSS**. It serves as the user interface for patients, doctors, and administrators to interact with the system.

---

## 🧑‍⚕️ Features

### 👨‍⚕️ Doctor Module
- View list of assigned patients.
- Create, edit, and view prescriptions.
- AI-generated insights on lab reports using RAG-based system.
- View medical tests and add test recommendations.

### 🧑‍💼 Admin Module
- Manage doctors and patients.
- Filter patients based on conditions.
- View appointments and medical test results.
- Dashboard with charts and analytics.

### 🧑‍💊 Patient Module
- Register and log in securely.
- View and download prescriptions.
- Upload lab reports (PDF).
- Receive AI analysis of test reports.

---

## 🧰 Tech Stack

| Technology        | Purpose                         |
|------------------|----------------------------------|
| React.js         | UI Library                       |
| Vite             | Build Tool                       |
| Tailwind CSS     | Styling Framework                |
| React Router DOM | Routing                          |
| Axios            | HTTP Client                      |
| React Toastify   | Notifications                    |
| Chart.js         | Data Visualization               |
| Lucide-React     | Icons                            |
| Date-Fns         | Date utilities                   |
| ShadCN / Radix UI| UI Components                    |
| Context API      | State Management                 |

---

## 📁 Project Structure


clinic-frontend/
├── public/
├── src/
│ ├── components/
│ ├── contexts/
│ ├── hooks/
│ ├── pages/
│ │ ├── Admin/
│ │ ├── Doctor/
│ │ ├── Patient/
│ ├── routes/
│ ├── services/
│ ├── utils/
│ ├── App.jsx
│ ├── main.jsx
├── tailwind.config.js
├── vite.config.js


---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/clinic-management-frontend.git
cd clinic-management-frontend