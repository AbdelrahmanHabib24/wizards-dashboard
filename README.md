# Wizards Dashboard

## Overview

A responsive frontend dashboard for managing wizard registry records and associated elixirs. The application integrates with the public Wizard World API to display real wizard data and elixir information.

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Recharts**
- **TanStack Query**
- **Wizard World API**

## Features

- **Real Wizard World API Integration**  
  Fetches live wizard records and elixir associations directly from the public API without mock or fabricated table data.

- **Debounced Wizard Search**  
  Search input uses an exact 400ms debounce to prevent redundant API requests while typing.

- **First-Name and Last-Name Search**  
  Supports searching by wizard first name and last name using the API-supported parameters.

- **Client-Side Pagination**  
  Displays 4 rows per page. Pagination resets to page 1 when the search query changes.

- **Wizard Details Modal**  
  Native HTML `<dialog>` modal displaying wizard information, including registry ID, names, and associated elixirs.

- **Elixir Information**  
  Displays elixir counts and names in the registry table, and full elixir details in the wizard dossier modal.

- **Loading, Empty & Error States**  
  Provides clear visual feedback for loading, empty search results, empty API responses, and API errors with retry support.

- **Responsive Layout**  
  Adapts seamlessly across desktop, tablet, and mobile viewports while preserving data hierarchy and table accessibility.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation & Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

The application runs locally at `http://localhost:5173/`.

## Project Structure

```
wizards-dashboard/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx            # Top navigation header & quick search
│   │   │   └── Sidebar.tsx           # Side navigation bar & mobile drawer
│   │   └── ui/
│   │       ├── StatsCards.tsx        # KPI summary bento cards
│   │       ├── Charts.tsx            # Registry Activity & Specialty Recharts
│   │       ├── WizardsTable.tsx      # Master registry table with search & pagination
│   │       └── WizardDetailModal.tsx # Member dossier dialog modal
│   ├── hooks/
│   │   ├── useDebounce.ts            # 400ms search debouncing hook
│   │   └── useWizards.ts             # TanStack Query data fetching hook
│   ├── lib/
│   │   └── api.ts                    # Wizard World API client
│   ├── data/
│   │   └── dashboard.ts              # Static KPI and chart datasets
│   ├── types/
│   │   └── wizard.ts                 # TypeScript interfaces for API models
│   ├── App.tsx                       # Main application layout
│   ├── main.tsx                      # React DOM entry point & QueryClient provider
│   └── index.css                     # Global styling & Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## API

Wizard registry data is fetched from the public Wizard World API:
- **Endpoint**: `https://wizard-world-api.herokuapp.com/Wizards`
- **Supported Parameters**: `FirstName`, `LastName`

The application uses the API's FirstName and LastName query parameters, with pagination handled on the client side.

## Implementation Notes

- **400ms Debounce**: Implemented via a custom `useDebounce` hook with an exact 400ms delay to keep input responsive while minimizing network traffic.
- **Client-Side Pagination**: Implemented with 4 rows per page (`ITEMS_PER_PAGE = 4`), active page navigation, and automatic reset to page 1 on search change.
- **Graceful Null Handling**: Missing firstName or lastName values are rendered using clear fallback values so the UI never displays `null null`.
- **Native `<dialog>` Modal**: Utilizes the browser's native `<dialog>` element with `showModal()` and `close()` for built-in focus trapping, backdrop handling, and keyboard dismiss (`Escape`).
- **Static vs Dynamic Content**: Dashboard KPI and chart values are static, while wizard registry and dossier data are populated from the live API.

## Improvements With More Time

1. **Automated Tests**: Add end-to-end and component tests for search, pagination, and modal flows.
2. **Offline Support**: Integrate service worker caching for offline registry browsing.
3. **Advanced Filtering**: Add filter controls for elixir count or difficulty if supported by additional API endpoints.
