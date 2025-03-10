#  Personal Portfolio & Blog Website

This is a **Personal Portfolio & Blog Website** built with **Next.js, TypeScript, Tailwind CSS, and MongoDB**. It includes a portfolio showcase, blog management, and a fully functional dashboard for managing content.

### ✅ Live Links
- **Frontend:**  [Live](https://blog-portfolio-black.vercel.app/)  
- **Backend:**  [Live](https://blog-portfolio-backend.vercel.app/)

---
### ✅ Repo Link 
- **Frontend and Backend:**  [Repo Link](https://github.com/mdrakibmia99/blog-portfolio)  

---

## 🌟 Features

### 🔹 Public Pages
✅ **Home Page (/**)  
- Portfolio introduction with name, bio, and profile picture.  
- Skill showcase.  
- Featured projects section.  
- Resume download button.  

✅ **Projects Page (/projects)**  
- Displays a list of projects with images, descriptions, and links.  
- Clicking on a project opens a detailed page (`/projects/[id]`).  

✅ **Blog Page (/blog)**  
- Lists blog posts fetched from an API or JSON file.  
- Clicking on a blog post opens the details page (`/blog/[id]`).  

✅ **Contact Page (/contact)**  
- Simple contact form (name, email, message).  
- Messages stored in a database or local storage.  

### 🔹 Dashboard (Authenticated Users Only)
✅ **Login (/dashboard)**  
- Social authentication using NextAuth.  
- Only authenticated users can access the dashboard.  

✅ **Blog Management (/dashboard/blogs)**  
- Create, read, edit, and delete blog posts.  
- Form includes title, content, image, and category.  

✅ **Project Management (/dashboard/projects)**  
- CRUD operations (Create, Read, Update, Delete) for projects.  
- Upload project image, title, live link, descriptions, etc.  

✅ **Message Management (/dashboard/messages)**  
- View messages submitted from the contact form.  

---

## 🛠️ Tech Stack

### ✅ Frontend
- **Next.js** with **TypeScript**
 - **React js**
- **Tailwind CSS** for styling  
- **Dynamic Routing** for `/projects/[id]` and `/blog/[id]`  

### ✅ Backend
- **Node.js** with **Express.js**  
- **RESTful API** to manage projects, blogs, and messages  

### ✅ Database
- **MongoDB** for storing blogs, projects, and messages  

### ✅ Authentication
- **NextAuth.js** with Google/GitHub login  


## Installation & Setup

### **Backend Setup**

1. Clone the repository:
   ```sh
   git clone https://github.com/mdrakibmia99/blog-portfolio.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd server
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```env
   PORT=5000
   DATABASE_URL=YOUR_MONGODB_CONNECTION_STRING
   NODE_ENV=development
   ```
5. Start the backend server:
   ```sh
   npm run start:dev
   ```

### **Frontend Setup**

1. Navigate to the frontend directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env` file:

   ```env
   GITHUB_ID=github_client_id
   GITHUB_SECRET=github_client_secret
   GOOGLE_ID=google_client_id
   GOOGLE_SECRET=google_client_id
   NEXTAUTH_SECRET=GOOGLE_SECRET
   NEXT_PUBLIC_BASE_URL=Base_url
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```