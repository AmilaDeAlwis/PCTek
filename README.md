<h1 align="center"><img src="https://github.com/AmilaDeAlwis/PCTek/assets/77795476/b17b17d5-d69f-490b-be3e-a07d8bfb97e3" alt="project logo" width="50" height="50">&nbsp PCTek E-Commerce Order Management System</h1>

1.	Description
-	PCTek is an e-commerce order management system that allows users to sign up and log in to the website using an email and password.
-	Users can add items to the cart they wish to buy and also remove items from the cart. There is a proceed to checkout functionality to buy items using their debit or credit card.
-	Administrators can add, list, and remove items using the admin panel. They can also view orders and update the status of those orders.
<hr>

2.	Prerequisites
-	Download and install below software applications before working on the project. Use relavant user installation guidance on each application’s website.
- Node.js (https://nodejs.org/en)
- npm or yarn
- Git (https://git-scm.com/downloads)
- Code Editor (VS Code - https://code.visualstudio.com/download)
<hr>

3. Database initialization
- Go to MongoDB atlas (https://www.mongodb.com/products/platform/atlas-database) Sign up / Sign in Create a mongoDB atlas account.
- Create a new project with a suitable name.
- Create a cluster.
- Set up a user name with a password
- Set up a network address
- In the database tab, connect the database and copy the connection string
- Reference: https://www.mongodb.com/docs/atlas/getting-started/
<hr>

4.	Project Installation
-	Clone the repository: git clone https://github.com/AmilaDeAlwis/PCTek.git
-	Open the VS Code (or any optimal code editor) and open 3 terminals
-	Navigate to each directory in separate terminals: cd admin <- for the admin view development, cd frontend <- for the user view development, cd backend <- for the server development
-	Install dependencies in each directory: npm install
<hr>

5. Setting up the project
-	Connect MongoDB connection string to the server in the backend/config/db.js file
-	Replace USERNAME, PASSWORD, and PROJECT_NAME with your database credentials.
-	Change the JWT_SECRET and STRIPE_SECRET_KEY in the backend/.env file with suitable information
-	Change ports if necessary. In the vite.config.js file you can identify the PORT numbers for admin view and frontend view
<hr>

6.	Running the Application
-	In the backend server terminal-> Start the server: npm run server
-	In the admin view terminal-> Start the admin panel: npm run dev
-	In the frontend view terminal-> Start the frontend: npm run dev
<hr>

7.	Open your browser and navigate to:
-	Run the backend server-> http://localhost:4000
-	View the admin Interface-> http://localhost:5173
-	View the frontend user Interface-> http://localhost:5174
