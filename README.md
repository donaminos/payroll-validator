# Payroll Validator

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15-blue.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A modern, feature-rich payroll validation system designed for French HR professionals. Built with Next.js 15, React 19, and a comprehensive design system, this application provides efficient employee management and payroll data validation capabilities.

## 🚀 Features

- **Employee Management**: Complete CRUD operations for employee records
- **Dashboard Analytics**: Real-time compliance monitoring and key metrics
- **Responsive Design**: Interface optimized for desktop and tablet usage
- **French Labor Law Compliance**: Built-in validation for French employment requirements
- **Advanced Search & Filtering**: Powerful data discovery capabilities
- **Type-Safe Architecture**: Full TypeScript implementation with strict typing

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

## 🎯 Main Pages

### Dashboard (`/`)

The dashboard provides a comprehensive overview of your payroll system:

- **Key Metrics**: Employee headcount, compliance levels, pending validations
- **Compliance Monitoring**: SMIC compliance tracking and legal reminders
- **Recent Activity**: Latest employee updates and system activities
- **Quick Actions**: Common tasks and shortcuts
- **Upcoming Events**: Onboarding and offboarding schedules

### Employees (`/employees`)

A sophisticated employee management interface featuring:

- **Data Table**: Paginated employee list with advanced filtering
- **Search Functionality**: Real-time search across multiple fields
- **Employee Details**: Comprehensive employee information display
- **Add Employee**: Form for creating new employee records
- **Responsive Interface**: Optimized for desktop and tablet usage

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
- **Workspace**: Monorepo package management

## 🔒 Security & Compliance

- **French Labor Law Compliance**: Built-in validation for employment requirements
- **Data Privacy**: RGPD-compliant data handling
- **Type Safety**: Comprehensive TypeScript implementation
- **Input Validation**: Zod schema validation throughout

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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript strict mode
- Use function components with hooks
- Implement proper error boundaries
- Add JSDoc for public APIs
- Follow the established naming conventions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:

- 📧 Email: support@payroll-validator.com
- 📖 Documentation: [docs/](docs/)
- 🐛 Issues: [GitHub Issues](https://github.com/your-org/payroll-validator/issues)

## 🙏 Acknowledgments

- Built with [Next.js 15](https://nextjs.org/)
- UI components from [Shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Monorepo powered by [Turborepo](https://turborepo.com/)

---

**Made with ❤️ for Payroll*
