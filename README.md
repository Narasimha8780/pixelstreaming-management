# Pixel Streaming Management Dashboard

A comprehensive dashboard for managing GPU server resources and monitoring pixel streaming operations.

## Features

- **GPU Server Resource Overview**: Monitor server status, resource usage, and manage render nodes
- **Usage Statistics**: View detailed analytics with charts and graphs
- **Server Management**: Control server operations (freeze, restart, remote access)
- **Real-time Monitoring**: Live updates of server metrics and status

## Technology Stack

- **Frontend**: Vue.js 3 with Composition API
- **Backend**: Node.js with Express
- **UI Framework**: Tailwind CSS
- **Charts**: Chart.js for data visualization
- **Icons**: Clean, minimalist design without external icon libraries

## Project Structure

```
pixelstreaming-management/
├── frontend/          # Vue.js application
│   ├── src/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   └── assets/
├── backend/           # Node.js API server
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── models/
└── README.md
```

## Getting Started

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
npm start
```

## API Endpoints

- `GET /api/servers` - Get all server information
- `GET /api/servers/:id` - Get specific server details
- `POST /api/servers/:id/action` - Perform server actions (freeze, restart, etc.)
- `GET /api/statistics` - Get usage statistics
- `GET /api/statistics/country` - Get country-wise statistics

## Dashboard Pages

1. **Monitor** - GPU Server Resource Overview
2. **Usage Statistics** - Analytics and charts
3. **Applications** - Application management
4. **System Settings** - Configuration options

## Development

This project follows modern development practices with:
- Clean, responsive design
- Component-based architecture
- RESTful API design
- Real-time data updates
