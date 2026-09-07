# Wizards Dashboard

## Overview

A responsive frontend dashboard implementing the **Wizarding Registry** interface based on the provided Figma design.

The application integrates with the public Wizard World API to display real wizard records and their associated elixirs, while the dashboard metrics and charts follow the provided design specification.

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
  Fetches real wizard records and elixir associations from the live API. No mock or fabricated wizard table data is used.

- **Debounced Wizard Search**  
  Search input uses an exact **400ms debounce** to avoid unnecessary API requests while typing.

- **First-Name and Last-Name Search**  
  Supports searching by wizard first name and last name using the API-supported parameters.

- **Client-Side Pagination**  
  Displays 4 rows per page to match the visible table area in the Figma design. Pagination resets to page 1 when the search query changes.

- **Wizard Details Modal**  
  Native HTML `<dialog>` modal displaying real wizard information, including registry ID, names, and associated elixirs.

- **Elixir Information**  
  Displays elixir information in the registry table and full elixir details inside the wizard dossier modal.

- **Loading, Empty & Error States**  
  Provides clear UI states for loading, empty search results, empty API responses, and API errors with retry support.

- **Responsive Layout**  
  Supports desktop, tablet, and mobile layouts while preserving the original design hierarchy and preventing page-level horizontal overflow.

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

# Run lint
npm run lint

# Build for production
npm run build

```

The application runs locally at `http://localhost:5173/`.

## Project Structure

```
wizards-dashboard/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Top navigation header & quick search
│   │   │   └── Sidebar.tsx       # Side navigation bar & mobile drawer
│   │   └── ui/
│   │       ├── StatsCards.tsx    # KPI summary bento cards
│   │       ├── Charts.tsx        # Registry Activity & Specialty Recharts
│   │       ├── WizardsTable.tsx  # Master registry table with search & pagination
│   │       └── WizardDetailModal.tsx # Member dossier dialog modal
│   ├── hooks/
│   │   ├── useDebounce.ts        # 400ms search debouncing hook
│   │   └── useWizards.ts         # TanStack Query data fetching hook
│   ├── lib/
│   │   └── api.ts                # Wizard World API client
│   ├── data/
│   │   └── dashboard.ts          # Static KPI & chart datasets from Figma
│   ├── types/
│   │   └── wizard.ts             # TypeScript interfaces for API models
│   ├── App.tsx                   # Main application layout
│   ├── main.tsx                  # React DOM entry point & QueryClient provider
│   └── index.css                 # Global styling & Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## API
Wizard registry data is fetched from the public **Wizard World API**:
- **Endpoint**: `https://wizard-world-api.herokuapp.com/Wizards`
- **Supported Parameters**: `FirstName`, `LastName`
- **Contract Characteristics**: The API accepts string prefix queries, is case-sensitive, and does not provide server-side pagination or generic search fields. All pagination is handled client-side over the API response.

## Implementation Notes
- **400ms Search Debounce**: Implemented via custom `useDebounce` hook to ensure user input is responsive without flooding the API with intermediate keystrokes.
- **Client-Side Pagination**: Configured to 4 rows per page (`ITEMS_PER_PAGE = 4`) matching the Figma visible viewport. Next/Previous button boundaries and active page indicators are fully handled.
- **Graceful Null Handling**: Missing `firstName` values in API records (such as Mrs Skower or Dr Ubbly) render cleanly as `(None)`. Missing last names render as `Unknown`. The UI never outputs `"null null"`.
- **Native `<dialog>` Element**: The wizard dossier modal utilizes the browser's top-layer dialog API (`showModal()`, `close()`), ensuring native focus management, backdrop rendering, and keyboard accessibility.
- **Static vs Dynamic Content**: As specified in the Figma task, the top KPI counters and chart statistics are static design assets, while the Master Wizard Registry table and Member Dossier are dynamic, populated exclusively with live API data.

## Improvements With More Time
1. **Automated End-to-End Tests**: Add Playwright or Vitest component tests for search, pagination, and modal flows.
2. **Offline Support**: Integrate service worker caching for offline registry browsing.
3. **Advanced Filtering**: Add filter controls for elixir difficulty and inventory counts if supported by additional API endpoints.
