# Payroll Variable Data Validator - PRD

## 1. BUSINESS CONTEXT & PROBLEM STATEMENT

### Business Context

**Domain**: French Payroll Management - Employee Record Management

**Target Users**: HR managers and payroll administrators in French companies

**Legal Constraints**: French Labor Code compliance, data protection (RGPD)

### Problem to Solve

HR and payroll managers spend significant time on:

- Manually managing employee records across multiple systems
- Searching and filtering employee data for payroll processing
- Maintaining accurate employee information for compliance
- Handling employee onboarding and record updates
- Accessing employee details quickly for payroll calculations

### Specific Pain Points

1. **Scattered employee data**: Information spread across Excel, HR software, and payroll systems
2. **Time-consuming searches**: Finding specific employee information takes too long
3. **Data inconsistencies**: Employee records not synchronized between systems
4. **Limited mobile access**: Cannot view employee details on mobile devices
5. **Manual record updates**: Adding new employees requires multiple system entries

### Expected Business Value

- **Time savings**: 60% reduction in employee data management time
- **Data accuracy**: Centralized employee records with validation
- **Mobile accessibility**: View and manage employees from any device
- **Compliance**: Automatic validation of French employment requirements

## 2. USER PERSONAS & USE CASES

### Primary Persona: Thomas - HR Manager at Manufacturing Company

**Profile**:
- Manages 150+ employees across multiple departments
- Needs to maintain accurate employee records for payroll processing
- Requires quick access to employee details and ability to add new hires
- Uses both desktop and mobile devices for work

**Use Case: Employee Management**

**Trigger**: Need to view employee list, search for specific employee, or add new employee

**Steps**:
1. Navigate to employees section → **Dashboard**
2. View paginated employee table with search → **DataTable**
3. Search for specific employee by name/email → **Real-time search**
4. Click employee row → **Details Drawer**
5. View complete employee information → **Responsive layout**
6. Add new employee button → **Form Drawer**
7. Fill employee details with validation → **French-specific validation**
8. Save employee → **API Integration**

**Outcome**: Efficient employee record management with real-time validation and mobile access

### Secondary Persona: Marie - Payroll Administrator at Accounting Firm

**Profile**:
- Processes payroll for multiple client companies
- Needs quick access to employee data for payroll calculations
- Requires validation of employee information against French labor laws
- Works with tight deadlines and needs reliable data

**Use Case: Employee Data Validation**

**Trigger**: Need to verify employee information for payroll processing

**Steps**:
1. Access employee management system → **Secure login**
2. Search for specific employee → **Advanced search filters**
3. Review employee details → **Comprehensive information display**
4. Validate against French labor requirements → **Built-in validation**
5. Export employee data for payroll → **Data export functionality**

**Outcome**: Reliable employee data for accurate payroll processing

### 24h MVP Constraints

- **Employee management only**: No file upload or validation features
- **Read and create operations**: View employees and add new ones
- **Mobile-responsive interface**: Works on all device sizes
- **French business rules**: Validation for French employment requirements
- **Mock data**: 1000 realistic French employee records for demonstration

## 3. FUNCTIONAL REQUIREMENTS

### FR1 - Employee List Management

**Description**: Sophisticated employee table with search, pagination, and filtering

**Acceptance Criteria**:

- **Employee Table**: 
  - Paginated display (50 items per page)
  - Real-time search across name, email, employee number
  - Advanced filters (department, status, contract type)
  - Sortable columns (name, department, hire date, status)
  - Status badges with color coding (active/inactive/on_leave)
  - Mobile-responsive with horizontal scroll
  - Row click opens employee details drawer
  - Loading states and empty states

- **Search and Filtering**:
  - Instant search as you type
  - Search across multiple fields (name, email, employee number)
  - Filter by department, status, contract type
  - Clear filters functionality
  - Search result highlighting

### FR2 - Employee Details View

**Description**: Comprehensive employee information display in responsive drawer

**Acceptance Criteria**:

- **Employee Details Drawer**:
  - Right-side drawer (desktop) / bottom sheet (mobile)
  - Complete employee information display
  - Organized sections (personal info, employment details, contact info)
  - Edit button for quick modifications
  - Action buttons (download employee card, view history)
  - Responsive layout with proper spacing
  - Close on overlay click and Escape key

- **Information Display**:
  - Personal information (name, email, phone)
  - Employment details (position, department, contract type)
  - Salary and hours information
  - Address and emergency contact
  - Hire date and status
  - Employee number and social security number (masked)

### FR3 - Add Employee Form

**Description**: Comprehensive form for adding new employees with French validation

**Acceptance Criteria**:

- **Add Employee Form**:
  - Top-right "Add Employee" button
  - Form opens in drawer with validation
  - Required fields: name, email, department, contract type
  - French-specific validation (phone format, postal code)
  - Auto-generation of employee number and slug
  - Success/error feedback with toast notifications
  - Form validation with clear error messages

- **Validation Rules**:
  - Email format validation
  - French phone number format (10 digits)
  - French postal code format (5 digits)
  - Required field validation
  - Salary minimum validation (SMIC compliance)
  - Hours validation (legal limits)

### FR4 - Mobile-First Responsive Design

**Description**: Interface optimized for mobile and tablet usage

**Acceptance Criteria**:

- **Mobile Optimization**:
  - Touch-friendly interface with 44px minimum touch targets
  - Horizontal scrollable table with sticky columns
  - Bottom sheet for employee details on mobile
  - Responsive form layout
  - Optimized for 320px minimum width
  - Fast loading and smooth animations

- **Tablet Optimization**:
  - Adaptive layout for medium screens
  - Efficient use of screen real estate
  - Touch and mouse interaction support

### FR5 - Data Management and Performance

**Description**: Efficient data handling and performance optimization

**Acceptance Criteria**:

- **Performance**:
  - Load 1000+ employees in under 3 seconds
  - Search results appear within 200ms
  - Smooth pagination without page reloads
  - Efficient memory usage
  - Caching for frequently accessed data

- **Data Handling**:
  - Proper error handling for API failures
  - Loading states for all async operations
  - Optimistic updates for better UX
  - Data validation before submission

**Employee Data Structure**:
```tsx
interface Employee {
  id: string;
  slug: string; // UUID for secure referencing
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  hireDate: string;
  contractType: 'CDI' | 'CDD' | 'Interim' | 'Stage';
  salary: number;
  weeklyHours: number;
  status: 'active' | 'inactive' | 'on_leave';
  employeeNumber: string;
  socialSecurityNumber: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  lastUpdated: string;
}
```

### Non-Functional Requirements (24h scope)

- **Performance**: Load 1000 employees in <3 seconds
- **Compatibility**: Chrome/Safari/Firefox latest versions
- **Accessibility**: WCAG 2.1 AA compliance
- **Security**: No permanent storage of sensitive data (mock data only)

## 4. TECHNICAL ARCHITECTURE

### Monorepo Structure with Turborepo (Feature-Based)

```
payroll-validator/
├── apps/
│   └── web/                     # Next.js 15 Main App
│       ├── app/                 # App Router
│       │   ├── (dashboard)/
│       │   │   ├── employees/   # Employee management pages
│       │   │   │   ├── page.tsx # Main employees list
│       │   │   │   └── [slug]/  # Individual employee pages
│       │   │   └── layout.tsx   # Dashboard layout
│       │   └── api/             # API Routes
│       │       ├── employees/   # Employee CRUD operations
│       │       │   ├── route.ts # GET/POST employees
│       │       │   ├── data.ts  # Mock employee data
│       │       │   └── [slug]/  # Individual employee operations
│       │       └── health/      # Health check endpoint
│       └── src/
│           ├── domains/        # Feature-based organization
│           │   └── employees/   # Employee management feature
│           │       ├── components/
│           │       │   ├── employee-table.tsx
│           │       │   ├── employee-details-drawer.tsx
│           │       │   ├── add-employee-form.tsx
│           │       │   └── employee-filters.tsx
│           │       ├── hooks/
│           │       │   ├── use-employees.ts
│           │       │   ├── use-employee-details.ts
│           │       │   └── use-employee-form.ts
│           │       └── utils/
│           │           ├── employee-validation.ts
│           │           └── employee-formatters.ts
│           └── views/           # Page-level components
│               ├── employees/
│                   └── employees-view.tsx
├── packages/
│   ├── ui/                      # Design System Package
│   │   ├── src/
│   │   │   ├── components/ui/   # Base UI components (Shadcn/ui)
│   │   │   │   ├── table/       # DataTable with search/pagination
│   │   │   │   ├── sheet/       # Drawer component
│   │   │   │   ├── form/        # Form components
│   │   │   │   ├── button/      # Button variants
│   │   │   │   └── badge/       # Status badges
│   │   │   ├── hooks/           # Shared hooks
│   │   │   └── lib/             # Utilities
│   │   └── stories/             # Storybook stories
│   ├── tailwind-config/         # Shared tailwind config
│   └── typescript-config/       # Shared TypeScript config
└── turbo.json                   # Turborepo config
```

### Current Implementation Status

**✅ Completed**:
- API infrastructure for employees (GET, POST, PUT, DELETE)
- 1000 realistic French employee records
- DataTable component with search and pagination
- Sheet component for drawers
- Complete design system with Shadcn/ui
- Mobile-responsive layout components
- TypeScript interfaces and validation

**🔄 In Progress**:
- Employee management frontend integration
- Employee details drawer implementation
- Add employee form with validation

**⏳ Future Enhancements** (Post-MVP):
- File upload and validation features
- Export functionality
- Real-time validation with Web Workers
- Advanced reporting and analytics

## 5. UI/UX SPECIFICATIONS

### Design System Foundation

**Base**: Shadcn/ui + Tailwind 4 + Radix UI primitives

**Theme**: Consistent token system with dark/light mode

**Responsive**: Mobile-first with adaptive breakpoints

**Accessibility**: WCAG 2.1 AA compliance

### Essential MVP Components:

1. **DataTable**: Advanced table with search, pagination, sorting
2. **EmployeeDetailsDrawer**: Right-side drawer for employee information
3. **AddEmployeeForm**: Form in drawer for new employee creation
4. **EmployeeFilters**: Advanced filtering and search controls
5. **StatusBadge**: Color-coded status indicators

### Employee Management UI Patterns:

**Table Design**:
- Sticky header with search and filters
- Row hover states with click feedback
- Status badges with color coding (green=active, gray=inactive, orange=on_leave)
- Responsive columns with horizontal scroll on mobile
- Loading states and empty states
- Sortable columns with visual indicators

**Drawer Patterns**:
- Desktop: Right-side drawer (400px width)
- Mobile: Bottom sheet (full width, 80% height)
- Smooth animations and focus management
- Close on overlay click and Escape key
- Proper ARIA labels for accessibility

**Form Design**:
- Progressive disclosure for complex forms
- Real-time validation with error messages
- Auto-save draft functionality
- Success/error feedback with toast notifications
- French-specific input formatting

### Simple Design Tokens:

- Colors: success/warning/error/neutral
- Spacing: mobile-friendly touch targets (44px minimum)
- Typography: Shadcn/ui defaults
- Breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

### Responsive: Mobile-first with Tailwind breakpoints

## 6. FRENCH PAYROLL BUSINESS CONTEXT

### Legal Framework

- **SMIC 2024**: €1,398.69 monthly gross minimum wage
- **Working Hours**: 35h legal, 48h maximum weekly
- **Overtime Rates**: 125% first 8h, 150% beyond
- **Leave Rights**: 2.5 days per month minimum

### Employee Management Context

**French Employment Types**:
- **CDI**: Permanent contract (most common)
- **CDD**: Fixed-term contract
- **Interim**: Temporary work
- **Stage**: Internship

**Required Employee Information**:
- Social security number (format validation)
- French address with postal code
- Emergency contact information
- Contract details and salary information

**Validation Requirements**:
- Salary must meet SMIC minimum
- Working hours within legal limits
- Valid French phone number format
- Valid French postal code format
- Required fields for compliance

### Data Protection (RGPD)

- Employee data privacy compliance
- Secure handling of personal information
- Right to data access and deletion
- Audit trail for data changes

This PRD serves as the foundation for the 24-hour MVP focused on employee management functionality.
