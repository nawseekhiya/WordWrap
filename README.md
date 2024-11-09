# **WordWrap - CMS-based Blogging Platform**

**WordWrap** is an open-source content management system (CMS) designed for various types of content creation such as blogging, storytelling, documentation, and note-taking. It allows users to create, manage, and publish their content in a seamless and efficient environment. This project is still in the early stages of development and will continue to evolve based on user needs and community contributions.

## **Table of Contents**

- [About](#about)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## **About**

WordWrap is a multi-functional platform built to cater to various user needs, such as:

- **Blogging** (Food, Travel, Social, etc.)
- **Storytelling** (Literature, Journal, etc.)
- **Documentation** (Technical, Code, etc.)
- **Routine/Notes Taking** (Similar to Notion, Obsidian, etc.)

Our goal is to provide an open-source platform that fosters creativity and productivity while also allowing for scalability as we grow.

## **Technologies**

The platform is being developed using the following tech stack:

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Firebase
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore
- **State Management**: React Context API
- **Hosting**: Firebase Hosting (for deployment)

## **Installation**

To set up the WordWrap project locally, follow these steps:

### Prerequisites

Before you begin, make sure you have the following installed:
- **Node.js** (v16 or above)
- **Firebase CLI** (for Firebase functions and hosting)
- **Git**

### Setup Instructions

1. **Clone the Repository**:
   Clone the WordWrap project repository from GitHub to your local machine.

    ```bash
    git clone https://github.com/nawseekhiya/WordWrap.git
    ```

2. **Navigate to Project Directory**:
   Change your working directory to the project folder.

    ```bash
    cd WordWrap
    ```

3. **Install Dependencies**:
   The project is divided into two main parts: `client` for the frontend and `server` for the backend Firebase functions. 

   - Install frontend dependencies:
     ```bash
     cd client
     npm install
     ```

   - Install backend dependencies:
     ```bash
     cd ../server
     npm install
     ```

4. **Firebase Configuration**:
   Set up a Firebase project for the backend:

   - Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
   - Enable **Firestore Database** and **Firebase Authentication** (for user management).
   - Copy your Firebase configuration settings (API key, project ID, etc.) and paste them into the configuration file `client/src/config/firebaseConfig.js`.

5. **Environment Variables**:
   - Create a `.env` file in both `client` and `server` directories to store sensitive information like Firebase API keys.
   - In the **client** `.env` file, add your Firebase project configuration details:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```
   - In the **server** `.env` file, add any necessary backend configurations.

6. **Run the Development Servers**:
   Start both the client and server to run the project locally.

   - In the client directory:
     ```bash
     cd client
     npm run dev
     ```
     This command will start the frontend development server on `http://localhost:3000` (or another available port).

   - In the server directory, start Firebase emulators for backend functions:
     ```bash
     cd ../server
     firebase emulators:start
     ```
     This will start the Firebase emulators for functions and Firestore locally, allowing backend testing without needing to deploy.

7. **Open the App**:
   Once both the frontend and backend are running, open your browser and go to:
   ```
   http://localhost:3000
   ```
   You should see the WordWrap platform interface, ready for local development and testing.

### Additional Notes

- If you make changes to Firebase functions, redeploy the functions or restart the Firebase emulator for changes to take effect.
- Customize the `.env` and `firebaseConfig.js` file paths and settings based on your Firebase project and development environment needs.

## **Usage**

WordWrap allows users to:

- Create and manage blog posts and articles.
- Use a rich text editor to format content.
- Save drafts and publish content to a live site.
- Manage media and add them to posts.
- Organize content using categories and tags.

## **Contributing**

We welcome contributions from developers and creators. Please fork the repository, make changes, and submit a pull request. For more details, see our [CONTRIBUTING.md](CONTRIBUTING.md).

## **License**

This project is licensed under the [WordWrap Custom Contribution License](LICENSE.md). All contributions are owned by the team behind the project, and contributors will be acknowledged as such.
