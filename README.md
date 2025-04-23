# Garage Hero Frontend Test

## Overview

This project is a frontend application for Garage Hero, The application uses modern React libraries and follows best practices for UI/UX design.

---

## Features and Functionality

### Authentication Flow

- **Login**: Users can log in using their credentials.
- **OTP Verification**: Users can verify their login using a one-time password (OTP).

### Dashboard

- **Summary Metrics**: Displays key financial metrics such as revenue, expenses, and outstanding invoices.
- **Invoices Table**: Lists invoices with pagination and filtering options.
- **Profit/Expenses Chart**: Visualizes financial data using a chart.

### UI/UX

- Built with **Flowbite React** components for a clean and user-friendly interface.
- Adheres to the provided Figma Design.

---

## Packages Used

- **React**: Core library for building the user interface.
- **Next.js**: Framework for server-side rendering and routing.
- **Flowbite React**: UI components for tables, modals, and buttons.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Chart.js**: Library for rendering charts.
- **Axios**: HTTP client for API calls.
- **Redux Toolkit**: For managing state and caching API responses.

---

## Setup and Run Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Set Up the Project

1. Clone the repository:

   ```bash
   git clone [<repository-url>](https://github.com/markosbahgat/Garage-Hero)
   cd garage-hero
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a .env.local file in the root directory and add the following environment variables:

   ```bash
   NEXT_PUBLIC_BACKEND_URL=''
   NEXT_PUBLIC_BACKEND_API_V1_KEY=''
   NEXT_PUBLIC_SECRET_ENCRYPTION_KEY=''
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Testing Instructions

### Login Functionality

1. Navigate to the login page.
2. Enter the test credentials provided in the .env.local file.
3. Submit the form and verify that the login is successful.

### OTP Verification

1. After logging in, you will be prompted to enter an OTP.
2. Use the OTP sent by the backend API to complete the verification process.

### Dashboard Functionality

1. Once logged in, navigate to the dashboard.
2. Verify the following:

- Summary metrics are displayed correctly.
- The invoices table is populated with data and supports pagination and filtering.
- The profit/expenses chart renders accurately.

## Additional Notes

- For API integration, ensure the api_key is included in the request headers
