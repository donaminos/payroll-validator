# Payroll Validator

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-blue.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A proof-of-concept (POC) demonstrating modern frontend architecture for scalable SaaS applications. This monorepo showcases best practices for building maintainable, type-safe, and performant React applications using Next.js 15, React 19, and a comprehensive design system.

## 🎯 Project Goals

This POC demonstrates:
- **Scalable Monorepo Architecture**: Feature-based organization with shared packages
- **Modern Frontend Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS 4
- **Design System Integration**: Shadcn/ui components with Storybook 9 documentation
- **Server-Side Performance**: Server pagination, search, and data fetching patterns
- **Type Safety**: Comprehensive TypeScript implementation with Zod validation

## 🚀 Main Feature

### Employees Page (`/employees`)

The primary demonstration feature showcasing modern data table patterns:

- **Server Pagination**: Efficient data loading with configurable page sizes
- **Real-time Search**: Instant search across employee records with debounced API calls
- **Responsive Data Table**: Advanced table with sorting, filtering, and mobile optimization
- **Type-Safe API Integration**: Full TypeScript coverage for API contracts
- **Loading States**: Comprehensive loading and error state management

## 📋 Prerequisites

- **Node.js** 22 or higher
- **pnpm** 9.0.0 or higher (recommended package manager)
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/payroll-validator.git
   cd payroll-validator
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   - **Web Application**: Navigate to [http://localhost:3000](http://localhost:3000)
   - **Storybook**: Navigate to [http://localhost:6006](http://localhost:6006)

The `pnpm dev` command starts both the main web application and Storybook simultaneously, allowing you to develop components and view the full application in parallel.

## 🏗️ Project Structure

This project follows a feature-based monorepo architecture using Turborepo:

```
payroll-validator/
├── apps/
│   └── web/                    # Main Next.js application
│       ├── app/               # Next.js 15 app router
│       │   ├── (auth)/        # Authentication routes
│       │   ├── (dashboard)/   # Protected dashboard routes
│       │   └── api/           # API routes
│       └── src/
│           ├── domains/       # Feature-based modules
│           ├── shared/        # Shared components and utilities
│           └── views/         # Page-level components
├── packages/
│   ├── ui/                    # Design system components
│   ├── types/                 # Shared TypeScript types
│   ├── schemas/               # Zod validation schemas
│   ├── eslint-config/         # ESLint configurations
│   ├── typescript-config/     # TypeScript configurations
│   └── tailwind-config/       # Tailwind CSS configuration
└── docs/                      # Project documentation
```

### Key Directories

- **`apps/web/src/domains/`**: Feature-based modules (employees, compliance, onboarding)
- **`apps/web/src/shared/`**: Reusable components, utilities, and constants
- **`packages/ui/`**: Design system with Storybook documentation
- **`packages/types/`**: Shared TypeScript type definitions

## 🎯 Pages

### Dashboard (`/`)

A demonstration dashboard showing:
- **Key Metrics**: Sample data visualization components
- **Compliance Monitoring**: Example monitoring widgets
- **Recent Activity**: Activity feed components
- **Quick Actions**: Action button patterns

### Employees (`/employees`)

The main demonstration page featuring:

- **Server Pagination**: Efficient data loading with configurable page sizes
- **Search Functionality**: Real-time search across multiple fields
- **Employee Pagination**: Comprehensive employee information display

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build all applications and packages |
| `pnpm lint` | Run ESLint across all packages |
| `pnpm check-types` | Type-check all TypeScript files |
| `pnpm format` | Format code with Prettier |

### Development Commands

```bash
# Start development server (web app + Storybook)
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Type checking
pnpm check-types

# Clean all node_modules
pnpm clean:all
```

## 🎨 Design System

The project includes a comprehensive design system built with:

- **Shadcn/ui**: High-quality React components
- **Tailwind CSS 4**: Utility-first CSS framework
- **Storybook 9**: Component documentation and testing
- **Lucide React**: Beautiful icon library

### Component Library

The design system includes:
- Form components (Input, Textarea, Search)
- Data display (Table, Badge, Status indicators)
- Navigation (Sidebar, Breadcrumb)
- Feedback (Toast, Tooltip, Skeleton)
- Layout (Card, Sheet, Collapsible)

### Storybook Development

Storybook runs on **http://localhost:6006** and provides:
- Interactive component documentation
- Component testing and development
- Design system showcase
- Component variations and states

## 🔧 Technology Stack

### Frontend
- **Next.js 15**: React framework with app router
- **React 19**: Latest React with concurrent features
- **TypeScript 5.8**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling

### Development Tools
- **Turborepo**: Monorepo build system
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Storybook 9**: Component documentation

### Package Management
- **pnpm**: Fast, disk space efficient package manager


## 🧪 Development

### Adding New Features

1. Create feature directory in `apps/web/src/domains/`
2. Add components, hooks, and types
3. Update navigation in `shared/components/sidebar/constants.ts`
4. Add API routes in `app/api/` if needed

### Component Development

```bash
# Start Storybook for component development
cd packages/ui
pnpm storybook
```

**Note**: Storybook is also automatically started when running `pnpm dev` from the root directory.

### Type Safety

The project uses strict TypeScript configuration with:
- Branded types for business domains
- Comprehensive type exports
- Zod schema validation
- Strict null checks

### Code Style

- Follow TypeScript strict mode
- Use function components with hooks
- Implement proper error boundaries
- Follow the established naming conventions

## 🙏 Acknowledgments

- Built with [Next.js 15](https://nextjs.org/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Monorepo powered by [Turborepo](https://turborepo.com/)

---

**Made with ❤️ for Payroll**
