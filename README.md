# PawTrack - Smart Neckband System

PawTrack is a premium, high-fidelity web application built for the modern pet owner. It features a comprehensive ecosystem for smart dog neckbands, including a product catalog, dynamic service subscriptions, and a real-time health monitoring interface.

## ✨ Features

- **Dynamic Hardware Catalog**: Browse various neckband models (Lite, Plus, Pro, Mini) with detailed specs.
- **Service Subscriptions**: Compare and activate flexible service plans (Basic, Standard, Premium).
- **Responsive Cart System**: 
  - **Desktop**: Sleek top-centered dropdown.
  - **Mobile**: Intuitive bottom-sheet interface with exit animations.
- **High-Fidelity Product Pages**: Split-screen detail pages with technical specs and color/size selectors.
- **Premium Design**: Built with React and Material UI, featuring glassmorphism, smooth animations, and localized INR pricing.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh127-pixel/neckband.git
   ```

2. Navigate to the project directory:
   ```bash
   cd neckband
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`.

## 🛠️ Technology Stack

- **Frontend**: React.js
- **Styling**: Material UI (MUI), Emotion, Vanilla CSS
- **Routing**: React Router DOM
- **Icons**: MUI Icons Material
- **State Management**: React Context API (CartContext)

## 📦 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, CartItem, etc.)
├── context/        # State management (CartContext)
├── pages/          # Full page components (Landing, Neckbands, Subscriptions)
├── App.js          # Root component & Routing
└── index.js        # Entry point
```

## 📄 License

This project is licensed under the MIT License.
