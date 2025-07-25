# API Integration Status

## API-Integrated Features
- **Home Page (Car Listings):**
  - ✅ Fetches real car listings from backend (`GET /Car`).
- **Car Details Page:**
  - ✅ Fetches car details from backend (`GET /Car/:id`).

## Mocked (Not Yet API-Integrated) Features
- **Login/Signup:**
  - ❌ Uses mock logic (no real authentication or API calls).
- **My Listings:**
  - ❌ Displays hardcoded/mock data (not fetching user’s listings from backend).
- **Create/Edit Listing:**
  - ❌ Form is present, but does not send data to backend.
- **Order History:**
  - ❌ Displays mock orders (not fetching from backend).
- **Order Details:**
  - ❌ Displays mock order details.
- **Notification Center:**
  - ❌ Uses mock notifications (not fetching from backend).
- **Profile:**
  - ❌ Uses mock user info (not fetching or updating via backend).

## Next Steps
- Implement API calls for login/signup, user listings, create/edit/delete car, orders, notifications, and profile.
- Handle authentication (token storage, user context).
- Replace all mock data with real API requests and responses. 