# Taskmaster-Pro Web App

Taskmaster-Pro is a robust and comprehensive task management web application meticulously designed to enhance productivity and streamline project management processes. This application incorporates advanced role-based access control, segmenting users into three distinct roles: Owner, Admin, and Employee. Each of these roles is equipped with specific permissions tailored to their responsibilities, ensuring a seamless and efficient delegation of tasks and precise tracking of progress. Owners have the most extensive access, enabling them to create and manage projects, add and assign members, and oversee all tasks. Admins are empowered to assign tasks to members, update task details, and monitor team performance, ensuring alignment with project goals. Employees, on the other hand, focus on executing assigned tasks, updating their status, and attaching relevant documents, providing real-time progress updates. With its structured role-based system, Taskmaster-Pro ensures that every team member operates within their defined scope, fostering a collaborative environment that drives productivity and keeps projects on track.

## Features

- **User Roles**
  - **Owner**
    - Add Projects
    - Add Members
    - Assign Tasks to Members
    - Update Tasks
    - Have all Admin powers
  - **Admin**
    - Assign Tasks to Members
    - Update Tasks
    - Have all Employee powers
  - **Employee**
    - Update Task Status (In Progress, Completed, Closed)

- **Task Management**
  - Assign tasks to team members
  - Update task status
  - Attach relevant images to tasks for better understanding
  - View task details and history

- **Project Management**
  - Create and manage projects
  - Add and manage team members

- **Notifications**
  - Real-time pop-up notifications for task updates and assignments

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/taskmaster-pro.git
    cd taskmaster-pro
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following variables:
    ```env
    MONGO_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    CLOUDINARY_API_KEY=your_cloud_api
    CLOUDINARY_CLOUD_NAME=your_cloud_name
    CLOUDINARY_API_SECRET=your_cloud_secret
    ```

4. Start the application:
    ```bash
    npm start
    ```

### Sample Login

You can use the following sample login credentials to access the application:

- **Email:** arpit123@gmail.com
- **Password:** arpit123

### Usage

1. **Login:**
   Use the sample credentials or create a new account to login.

2. **Dashboard:**
   After logging in, you will be redirected to the dashboard, where you can see an overview of your tasks,role and projects.

3. **Task Management:**
   - **Employees** can update task statuses by clicking on a task and selecting the In progress / completed/ closed status.
   - **Admins** can assign tasks to members and update task details.
   - **Owners** have full control over tasks, including assigning and updating tasks.

4. **Project Management:**
   - **Owners** can create new projects and add members to them.

5. **Notifications:**
   - Receive real-time notifications for task updates and assignments.

## Contributing

We welcome contributions from the community. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or support, please contact us at arpitgupta0761@gmail.com.

---

Thank you for using Taskmaster-Pro! We hope it enhances your productivity and helps you manage your tasks efficiently.

---
