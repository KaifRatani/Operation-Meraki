# Operation Meraki – Web Platform

This project was developed as part of the Operation Meraki initiative.  
It provides a platform for veterans and volunteers to register, manage events, and connect with the community.

---
👥 Contributors
Kaif - Project Lead ; Abhinav, Ziyu, Michael – Developer

Supported by Operation Meraki team

---

## 📌 Overview
The platform is designed with the following key features:
- **Veteran & Volunteer Registration**  
- **Admin Dashboard** for managing signups and events  
- **Event Management** – create, update, RSVP to events  
- **Contact & Donation Forms**  
- **Newsletter Subscription**  
- **Zeefy Payment Integration** for donations  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express  
- **Frontend:** HTML, CSS, JavaScript, React  
- **Database:** PostgreSQL (originally Azure-hosted, now configured to run with any PostgreSQL provider)  
- **Payments:** Zeefy  
- **Hosting:** Designed for Azure (can be deployed on Vercel/Render/Heroku if needed)  

---

## 📂 Repository Structure
Meraki-main/
├── api/ # Backend (Express API)
│ ├── db/ # Database connection & config
│ ├── routes/ # Route handlers (auth, events, forms, etc.)
│ ├── server.js # Express server entry
│ └── test-db-connection.js
│
├── ui/ # Frontend (HTML/CSS/JS)
│ ├── components/ # Shared components
│ ├── about-us.html
│ ├── admin.html
│ ├── events.html
│ ├── contact.html
│ ├── volunteer.html
│ ├── veteran.html
│ └── ...
│
├── images/ # Static images
├── README.md # Documentation (this file)
├── package.json
└── package-lock.json

---
## ⚙️ Setup & Installation

### 1. Clone Repository

git clone <repo-link>
cd Meraki-main
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment
Create a .env file in /api directory:

env
Copy
Edit
PORT=5000

# PostgreSQL Connection
DATABASE_URL=postgresql://<username>:<password>@<host>:5432/<dbname>?sslmode=require

# Example Azure DB Connection
DATABASE_URL=postgresql://<user>@operationmeraki-server1.postgres.database.azure.com:5432/postgres?sslmode=require

# Zeefy Payment API Key
ZEEFY_API_KEY=<your_zeefy_key>
4. Run Server
bash
Copy
Edit
cd api
node server.js
The server should now run on http://localhost:5000.

5. Access Frontend
Open /ui folder HTML files in the browser or serve via a static server.

---

🌐 Azure vs Local Setup
Azure Setup:
Originally configured for Azure App Service (backend) + Azure PostgreSQL (database).
To re-enable, update .env with Azure DB credentials and deploy via GitHub Actions or az webapp deploy.

Local/Other Providers:
If Azure is unavailable, the project runs fine with Neon, Render, Vercel, or Heroku PostgreSQL.
Update DATABASE_URL in .env accordingly.

📑 API Routes
Endpoint	Method	Description
/login	POST	User login (email, password)
/signin	POST	User registration
/events	GET/POST	View & create events
/volunteer	POST	Register as volunteer
/veteran	POST	Register as veteran
/contact	POST	Contact form submission
/equipment-donation	POST	Submit donation form
/mailsub	POST	Newsletter subscription

---
🧪 Testing
API Testing – via Postman or curl (verify login, signup, events, forms).

Database Testing – check schema creation and queries in PostgreSQL.

UI Testing – verify forms, navigation, and responsiveness in browser.

Payment Testing – sandbox test via Zeefy keys.

---
🚀 Deployment Guide
Ensure .env variables are configured properly.

Push latest commits to main branch.

Deploy backend to Azure / Vercel / Render.

Serve frontend from static hosting (Netlify, Vercel, Azure Static Web Apps, etc.).

Confirm DB connection and API route functionality.

---
🙏 Acknowledgments
Special thanks to Michael Thomas and Operation Meraki for guidance and collaboration.
---

