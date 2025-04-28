# 🏥 Clinic Management System - Backend

This is the backend for our Clinic Management System project built using **Node.js**, **Express.js**, and **MongoDB** (Mongoose).  
It manages **Patients**, **Doctors**, **Admins**, **Appointments**, **Prescriptions**, and **Medical Tests**.

---

## 📂 Project Structure


---

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

---

## 🛑 Known Issues / Future Improvements

- Doctor Login should use dynamic credentials.
- Add proper authentication middleware for protected routes.
- Add error handling middleware.
- Improve environment security using `.env` for secrets like `JWT_SECRET`.
- Implement email validation for case insensitivity.
- Fix typos: e.g., `findone` → `findOne`.

---

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/clinic-management-backend.git
