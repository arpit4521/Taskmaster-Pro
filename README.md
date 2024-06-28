# Live Project - https://taskmaster-pro-mxrh.onrender.com
# Taskmaster-Pro Web App

Taskmaster-Pro is a robust and comprehensive task management web application meticulously designed to enhance productivity and streamline project management processes. This application incorporates advanced role-based access control, segmenting users into three distinct roles: Owner, Admin, and Employee. Each of these roles is equipped with specific permissions tailored to their responsibilities, ensuring a seamless and efficient delegation of tasks and precise tracking of progress. Owners have the most extensive access, enabling them to create and manage projects, add and assign members, and oversee all tasks. Admins are empowered to assign tasks to members, update task details, and monitor team performance, ensuring alignment with project goals. Employees, on the other hand, focus on executing assigned tasks, updating their status, and attaching relevant documents, providing real-time progress updates. With its structured role-based system, Taskmaster-Pro ensures that every team member operates within their defined scope, fostering a collaborative environment that drives productivity and keeps projects on track.

## Application Areas

### College Clubs and Societies
Taskmaster-Pro is an ideal solution for managing college clubs and societies. Club leaders (Owners) can create and manage various events and initiatives, assign tasks to committee members (Admins), and oversee their execution. Committee members can further delegate responsibilities to volunteers (Employees), ensuring that every event is well-organized and executed efficiently. With real-time status updates and notifications, everyone stays informed and on track.

### Project Management
In the realm of project management, Taskmaster-Pro provides a comprehensive toolset for managing multiple projects simultaneously. Project managers (Owners) can set up project timelines, allocate resources, and assign tasks to team leads (Admins). Team leads can then distribute specific tasks to team members (Employees) and monitor their progress, ensuring that project milestones are met and deadlines are adhered to. The application’s attachment and notification features enhance communication and document sharing within the team.

### Local Businesses
For local businesses, Taskmaster-Pro streamlines daily operations by enabling business owners (Owners) to oversee all aspects of their operations. Managers (Admins) can assign tasks to employees, track the progress of ongoing work, and update task statuses as needed. Employees can keep track of their duties, update their progress, and attach necessary files or reports, ensuring smooth day-to-day operations and improving overall efficiency.

### Non-Profit Organizations
Non-profit organizations can leverage Taskmaster-Pro to manage their various projects and initiatives. Executive directors (Owners) can organize campaigns, assign responsibilities to project coordinators (Admins), and monitor the overall progress. Project coordinators can delegate specific tasks to volunteers (Employees), ensuring that every aspect of the campaign is covered. The real-time notification system helps keep all members informed about upcoming events and critical deadlines.

### Event Planning
Event planners can use Taskmaster-Pro to organize and manage events of any scale. Lead planners (Owners) can outline the event plan, assign roles to assistant planners (Admins), and track the execution of various tasks. Assistant planners can then delegate specific responsibilities to their teams (Employees) and ensure everything is on schedule. The ability to attach files and send real-time notifications ensures that everyone involved in the event planning process is updated and coordinated.

### Educational Institutions
Educational institutions can benefit from Taskmaster-Pro by managing administrative tasks and academic projects. School administrators (Owners) can manage various administrative tasks and assign them to department heads (Admins). Department heads can then delegate tasks to faculty members (Employees) and track their progress, ensuring that all academic and administrative tasks are completed efficiently.

### Technology Startups
Technology startups can utilize Taskmaster-Pro to manage product development and other projects. Founders (Owners) can outline product development roadmaps, assign tasks to project managers (Admins), and oversee the entire development process. Project managers can delegate specific development tasks to engineers (Employees) and monitor their progress, ensuring that the product is developed on time and meets quality standards.

Taskmaster-Pro's versatility and robust feature set make it an indispensable tool for a wide range of applications, from educational institutions and non-profit organizations to local businesses and technology startups. By providing a structured and collaborative environment, Taskmaster-Pro helps teams stay organized, communicate effectively, and achieve their goals efficiently.

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
