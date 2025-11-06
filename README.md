# Event Management UI

This is a React application for managing events, built with TypeScript, Tailwind CSS, and Material UI. The application provides a user-friendly interface for creating, viewing, and managing events.

## Features

- **Event Creation**: Users can create new events using a form.
- **Event Listing**: A list of events is displayed, allowing users to view all available events.
- **Event Details**: Detailed information about each event can be viewed.
- **Responsive Design**: The application is styled using Tailwind CSS for a responsive and modern look.
- **Material UI Integration**: Material UI components are used for consistent styling and functionality.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd event-management-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Project Structure

- `public/index.html`: Main HTML file for the application.
- `src/main.tsx`: Entry point of the React application.
- `src/App.tsx`: Main App component with routing and layout.
- `src/components/`: Contains reusable components like Header, EventList, EventCard, and EventForm.
- `src/pages/`: Contains page components like Home, EventDetails, and CreateEvent.
- `src/hooks/`: Custom hooks for managing state and API calls.
- `src/contexts/`: Contexts for managing global state.
- `src/themes/`: Material UI theme configuration.
- `src/types/`: TypeScript types and interfaces.
- `src/utils/`: Utility functions for API calls.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static types.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Material UI**: React components that implement Google's Material Design.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.