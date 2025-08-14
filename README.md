# Car Web Client

React + TypeScript web app for the Car Marketplace. Provides pages for browsing car listings, viewing details, managing listings, orders, notifications, and profile (some pages currently use mock data).

## Tech Stack
- React 19 + TypeScript
- Create React App (react-scripts)
- Testing Library + Jest

## Local Development
```bash
npm install
npm start
```
Open `http://localhost:3000`.

Backend services (optional, for real API data):
- Car Listing Service: `http://localhost:5033`
- Order Service: `http://localhost:5068`
- Notification Service: `http://localhost:5031`

If these are not running, pages will fall back to existing mock flows where applicable.

## Available Scripts
- `npm start`: Run dev server
- `npm test`: Run tests in watch mode
- `npm run build`: Build production bundle to `build/`
- `npm run eject`: Eject CRA config (irreversible)

## Features
See `FEATURES.md` for a feature overview.

## API Integration Status
See `API_INTEGRATION_STATUS.md` for details on which pages call real APIs vs. mock data.

## Project Structure
```
src/
  pages/             # Route-level pages (Home, CarDetails, Orders, etc.)
  App.tsx            # App routing
  index.tsx          # App entry
```

## System Architecture & API Flow

### Sequence Diagram: Web Client ↔ Backend Services

```mermaid
sequenceDiagram
    participant User
    participant WebClient as Car Web Client<br/>(React App)
    participant ListingService as Car Listing Service<br/>(Port 5033)
    participant OrderService as Order Service<br/>(Port 5068)
    participant NotificationService as Notification Service<br/>(Port 5031)

    Note over User,NotificationService: User Authentication Flow
    User->>WebClient: Login
    WebClient->>ListingService: POST /auth/login
    ListingService-->>WebClient: JWT Token
    WebClient->>WebClient: Store token in localStorage

    Note over User,NotificationService: Browse Car Listings
    User->>WebClient: View Home Page
    WebClient->>ListingService: GET /api/cars
    ListingService-->>WebClient: List of cars
    WebClient-->>User: Display car listings

    Note over User,NotificationService: View Car Details
    User->>WebClient: Click on car listing
    WebClient->>ListingService: GET /api/cars/{id}
    ListingService-->>WebClient: Car details + images
    WebClient-->>User: Display car details page

    Note over User,NotificationService: Create/Edit Listing
    User->>WebClient: Submit car listing form
    WebClient->>ListingService: POST/PUT /api/cars
    ListingService-->>WebClient: Success response
    WebClient-->>User: Show success message

    Note over User,NotificationService: Place Order
    User->>WebClient: Click "Buy Now" or "Rent"
    WebClient->>OrderService: POST /api/orders
    OrderService-->>WebClient: Order confirmation
    WebClient->>NotificationService: POST /api/notifications
    NotificationService-->>WebClient: Notification sent
    WebClient-->>User: Order confirmation page

    Note over User,NotificationService: View Orders
    User->>WebClient: Navigate to Orders page
    WebClient->>OrderService: GET /api/orders
    OrderService-->>WebClient: User's orders
    WebClient-->>User: Display orders list

    Note over User,NotificationService: View Notifications
    User->>WebClient: Navigate to Notifications
    WebClient->>NotificationService: GET /api/notifications
    NotificationService-->>WebClient: User's notifications
    WebClient-->>User: Display notifications

    Note over User,NotificationService: Profile Management
    User->>WebClient: Update profile
    WebClient->>ListingService: PUT /api/users/profile
    ListingService-->>WebClient: Updated profile
    WebClient-->>User: Profile updated message
```

### Service Responsibilities

- **Car Listing Service (Port 5033)**: Manages car listings, user authentication, and user profiles
- **Order Service (Port 5068)**: Handles order creation, management, and order history
- **Notification Service (Port 5031)**: Sends and manages user notifications for orders and system updates

### Data Flow Pattern

1. **Authentication First**: All API calls require valid JWT token from Listing Service
2. **Service-Specific APIs**: Each service handles its domain-specific operations
3. **Cross-Service Communication**: Web client orchestrates calls between services as needed
4. **Fallback to Mock Data**: When services are unavailable, app uses existing mock data flows

## Environment Variables
No `.env` is required. If needed later, follow CRA conventions: variables must be prefixed with `REACT_APP_`.

## Testing
```bash
npm test
```

## Troubleshooting
- App won’t load data: ensure backend services are running on the ports above
- Type errors after dependency changes: `rm -rf node_modules && npm install`
- Port conflict on 3000: set `PORT=3001 npm start`
