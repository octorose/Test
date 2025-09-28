# Booking Management System

A modern React application built with TypeScript and Tailwind CSS, implementing a clean component architecture following atomic design principles.

## Overview

This application provides a comprehensive booking management interface with two main views:
- **Dashboard**: Overview with information cards
- **Modification Requests**: Detailed booking management with interactive cards

## Architecture

### Atomic Design Pattern

The project follows atomic design methodology, organizing components into a clear hierarchy:

```
src/components/
├── atoms/           # Basic building blocks
│   ├── Badge.tsx
│   ├── Button.tsx
│   ├── Label.tsx
│   └── Stat.tsx
├── molecules/       # Simple component groups
│   ├── BookingMeta.tsx
│   └── RouteRow.tsx
├── organisms/       # Complex UI components
│   ├── BookingCard.tsx
│   ├── Card.tsx
│   └── InfoCard.tsx
└── index.ts         # Centralized exports
```

### Component Hierarchy

**Atoms** - Fundamental UI elements with single responsibility
- `Badge`: Status indicators with customizable styling
- `Button`: Interactive elements with consistent theming
- `Label`: Text display with title-value pairs
- `Stat`: Numerical data presentation

**Molecules** - Composed of atoms, handling specific functionality
- `BookingMeta`: Booking information display
- `RouteRow`: Route information with status indicators

**Organisms** - Complex components combining molecules and atoms
- `BookingCard`: Complete booking display with actions
- `InfoCard`: Dashboard information display
- `Card`: Unified component supporting multiple types

## Technical Implementation

### Type Safety

Comprehensive TypeScript implementation with centralized type definitions:

```typescript
// Centralized types in src/types/index.ts
export interface BookingData {
  id: string;
  incoterm: string;
  from: string;
  to: string;
  // ... additional properties
}
```

### Path Mapping

Clean import structure using `@` alias for improved maintainability:

```typescript
// Before
import { Button } from "../../components/atoms/Button";

// After
import { Button } from "@/components";
```

### Responsive Design

Mobile-first approach with consistent breakpoints:

- **Mobile**: `block md:hidden` - Vertical stacking
- **Desktop**: `hidden md:flex` - Horizontal layouts

### State Management

Props-based data flow with optional event handlers:

```typescript
interface BookingCardProps {
  data: BookingData;
  onManage?: (id: string) => void;
}
```

## Project Structure

```
src/
├── components/          # Component library
│   ├── atoms/          # Basic UI elements
│   ├── molecules/      # Component groups
│   ├── organisms/      # Complex components
│   └── index.ts        # Barrel exports
├── pages/              # Route components
│   └── ModificationRequestsPage.tsx
├── data/               # Static data
│   └── bookings.ts
├── types/              # TypeScript definitions
│   └── index.ts
├── assets/             # Static assets
├── App.tsx             # Main application
└── main.tsx            # Application entry point
```

## Key Features

### Component Reusability

The `Card` component demonstrates polymorphic design:

```typescript
// Supports multiple card types
<Card type="info" />
<Card type="booking" data={bookingData} onManage={handleManage} />
```

### Consistent Styling

Tailwind CSS with custom configuration:

```typescript
// tailwind.config.ts
colors: {
  primary: { 
    DEFAULT: "#149AD7", 
    600: "#0f7bb8" 
  }
}
```

### Clean Data Flow

Centralized data management with immutable structures:

```typescript
export const SAMPLE_BOOKINGS: readonly BookingData[] = [
  // ... booking data
] as const;
```

## Development Standards

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality enforcement
- **Consistent Naming**: PascalCase for components, camelCase for functions
- **Single Responsibility**: Each component has one clear purpose

### Performance

- **Tree Shaking**: Barrel exports for optimal bundle size
- **Memoization**: React.memo for expensive components
- **Lazy Loading**: Route-based code splitting

### Accessibility

- **Semantic HTML**: Proper element usage
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - Code linting
- `npm run preview` - Preview production build

## Design Principles

### Atomic Design Benefits

1. **Scalability**: Easy to add new components following established patterns
2. **Consistency**: Reusable atoms ensure uniform UI
3. **Maintainability**: Clear separation of concerns
4. **Testing**: Isolated components are easier to test

### Component Design

- **Composition over Inheritance**: Components are composed of smaller parts
- **Props Interface**: Clear, typed interfaces for all components
- **Default Values**: Sensible defaults with customization options
- **Event Handling**: Optional callbacks for user interactions

## Future Enhancements

- State management integration (Redux/Zustand)
- Unit and integration testing
- Storybook documentation
- Performance monitoring
- Internationalization support

## License

This project is proprietary software. All rights reserved.