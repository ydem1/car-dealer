# Vehicle Information Application

## Overview

This application allows users to select a vehicle's make and year from dropdown lists and view detailed information about available car models for the selected make and year. The application fetches the data from an external API and presents it in a user-friendly format. It features dropdown menus for selecting the make and year, with a "Next" button to display the results, and a "Reset" button to clear the selections.

### Features:
- **Make and Year Selection:** Dropdown lists to select the vehicle make and model year.
- **Next Button:** Navigates to the results page showing details of cars based on the selected make and year.
- **Reset Button:** Clears the selected options.
- **Dynamic Table:** Displays car details such as Make Name, Model ID, and Model Name for each vehicle.

## Architecture

The application is built using **Next.js**, a React-based framework, and uses API calls to fetch data for vehicle makes and models. It is structured as follows:

1. **Home Page:**
   - Displays two dropdown selectors: one for selecting a car make, and another for selecting the car's model year.
   - After making selections, users can click "Next" to view the available cars for the selected make and year on the results page.
   - The "Reset" button clears both the make and year selections.
  ![alt text](image-1.png)

2. **Result Page:**
   - After the "Next" button is clicked, users are redirected to a page that displays a table of cars.
   - The table shows details such as the Make Name, Model ID, and Model Name for each car model for the selected make and year.
![alt text](image-2.png)

## How to Run and Build the Application

### Prerequisites

Before running the application, ensure you have the following installed:
- **Node.js** (LTS version recommended)
- **npm** or **yarn** (a package manager)

### Steps to Run the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ydem1/car-dealer.git
   cd car-dealer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   or
   yarn install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   or
   yarn dev
   ```

### Steps to Build the Application

1. **Build the application for production:**

   ```bash
   npm run build
   or
   yarn build
   ```

2. **Build the application for production:**

   ```bash
   npm run dev
   or
   yarn dev
   ```
