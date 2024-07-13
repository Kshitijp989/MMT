![mmt-removebg-preview](https://github.com/user-attachments/assets/35c9f5d7-a8a9-4dc5-80e8-53f980515fcd)

# Clone of Make My Trip

## Technology Used

### Backend
- Node.js
- Express
- MongoDB

### Frontend
- React
- Material UI
- Styled-components
- Bootstrap

### APIs

#### Authentication
- **Register a new user**: `POST /api/auth/register`
- **Login a user**: `POST /api/auth/login`

#### Flights
- **Create a Flight (Admin)**: `POST /api/admin/flights`
- **Get all Flights (Admin)**: `GET /api/admin/flights`
- **Get a Flight by ID**: `GET /api/admin/flights/:id`
- **Update a Flight (Admin)**: `PUT /api/admin/flights/:id`
- **Delete a Flight (Admin)**: `DELETE /api/admin/flights/:id`

#### Hotels
- **Create a Hotel (Admin)**: `POST /api/admin/hotels`
- **Get all Hotels (Admin)**: `GET /api/admin/hotels`
- **Get a Hotel by ID**: `GET /api/admin/hotels/:id`
- **Update a Hotel (Admin)**: `PUT /api/admin/hotels/:id`
- **Delete a Hotel (Admin)**: `DELETE /api/admin/hotels/:id`

#### Hotel Booking
- **Book a Hotel**: `POST /api/bookHotel`

#### Flight Search
- **Search Flights**: `GET /api/searchFlight`
- **Search Flights by Price**: `POST /api/searchFlight/searchFlightsByPrice`

#### Hotel Search
- **Search Hotels by City**: `GET /api/searchHotel`
- **Search Hotels by Amenities**: `GET /api/searchHotel/searchHotelsByAmenities`

#### Country
- **Get all Countries**: `GET /api/getallcountry/countries`
- **Get Cities of a Country**: `GET /api/getallcountry/countries/:countryName/cities`
- **Get Cities with Airports**: `GET /api/getallcountry/countries/cities`

#### Booking
- **Create a Booking (User)**: `POST /api/book`
- **Get Booking by ID**: `GET /api/booking/:id`
- **Cancel a Booking**: `PUT /api/cancel/:id`

## Run Locally



## Color Reference
| Color                  | Hex     |
|------------------------|---------|
| Primary Color          | #eb2226 |
| Background Color       | #ffffff |
| Icons and Button Color | #48a6fd |


### Clone the Project
```bash
git clone https://github.com/Kshitijp989/MMT.git
```
### Go to the project directory

### Backend
```bash
cd .\BACKEND\
```

### Frontend
```bash
cd .\FRONTEND\makemytrip_front\
```
### Install Dependences
```bash
npm install
```
### Start the server for frontend
```bash
npm start
```

### Start the server for backend(if nodemon is installed)
```bash
nodemon 
```
## Start the server for backend(if nodemon is not installed)
```bash
node index.js
```


# Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### Backend
- mongo - database
- port - running port
- JWT key-secret key

# Features
- Login and Sign up
- Search engine to search Flights
- Sorting of flights by price

### Author
- Shetej Patil
-Booking Flights and Hotels

### Home Page
![screencapture-localhost-3000-2024-07-14-01_02_21](https://github.com/user-attachments/assets/8b698411-7525-4901-9728-0db406b661bd)


### Login Page
![image](https://github.com/user-attachments/assets/a950f52b-1332-480f-84d6-9380c9041753)


### Flight Search Page
![screencapture-localhost-3000-Flights-2024-07-14-01_06_48](https://github.com/user-attachments/assets/e0b83298-7010-468c-abd6-aaea44485e36)


### Flight Booking  Page
![screencapture-localhost-3000-FlightBooking-668941b9985dde1d69cfd0dc-2024-07-14-01_10_19](https://github.com/user-attachments/assets/3691e48d-e1e2-4de0-914e-ca7e68739899)

### Hotel Search Page
![screencapture-localhost-3000-Hotels-2024-07-14-01_11_53](https://github.com/user-attachments/assets/cf8fd237-1923-404e-9596-0b1649928981)

### Hotel Booking  Page
![screencapture-localhost-3000-HotelBooking-668ab7fe0f5fdb31c25c09f8-2024-07-14-01_12_29](https://github.com/user-attachments/assets/2edbfd5e-cac9-4ea4-b583-0215516086c2)

### GITHUB - https://github.com/Kshitijp989/MMT.git


