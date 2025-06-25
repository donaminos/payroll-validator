# Payroll Variable Data Validator - PRD

## 1. BUSINESS CONTEXT & PROBLEM STATEMENT

### Business Context

**Domain**: French Payroll Management - Monthly Variable Processing

**Target Users**: Payroll managers in companies and accounting firms

**Legal Constraints**: French Labor Code compliance, DSN, URSSAF

### Problem to Solve

Payroll managers lose 40-60% of their monthly time on:

- Manually entering payroll variables (overtime, bonuses, absences)
- Verifying data consistency with French legal rules
- Correcting format or calculation errors
- Navigating between multiple tools on different devices

### Specific Pain Points

1. **Tedious manual import**: Excel → Payroll Software = 2-3h/month
2. **Frequent input errors**: 15-20% of lines contain errors
3. **Late validation**: Errors discovered during final calculation
4. **Limited mobility**: Cannot handle urgent tasks from mobile/tablet
5. **Time waste**: Client/firm round-trips for corrections

### Expected Business Value

- **Time savings**: 70% reduction in variable entry time
- **Quality**: 95% reduction in format/calculation errors
- **Flexibility**: 24/7 processing from any device
- **Compliance**: Automatic French legal rules validation

## 2. USER PERSONAS & USE CASES

### Primary Persona: Marie - Payroll Manager at Accounting Firm

**Profile**:

- Manages 800+ payslips/month
- Urgent need: process client variable files quickly
- Uses mobile + desktop depending on context

**UNIQUE Use Case (24h MVP): Express Validation**

**Trigger**: Receiving Excel variables file from client

**Steps**:

1. Upload file (drag&drop or mobile) → **Frontend**
2. Parse CSV in Web Worker → **Non-blocking UI**
3. Business rules validation in Worker → **Optimized performance**
4. Stream results to UI → **Real-time progress**
5. Error correction interface → **Interactive frontend**
6. Export clean data → **Next.js APIOutcome**: 5 min vs 90 min, UI always responsive

### 24h MVP Constraints

- **Single synchronous file** (no Redis/Bull queue)
- **Web Worker** for parsing/validation (performance demo)
- **Streaming results** (advanced UX demo)
- **Hardcoded business rules** (SMIC, hours, formats)
- **Responsive interface** React 19
- **Supabase** for results storage

## 3. FUNCTIONAL REQUIREMENTS

### FR1 - Upload & File Handling

**Description**: Mobile-first CSV/Excel file upload interface

**Acceptance Criteria**:

- Support drag & drop (desktop) + file picker (mobile)
- Accepted formats: .csv, .xlsx, .xls
- Max size: 10MB (≈ 1000 variable lines)
- File format validation before processing
- Preview first 5 lines for confirmation
- Cancel button during upload

**Business Rules**:

- Required columns: Name/Surname, Variable Type, Amount/Hours
- Automatic CSV delimiter detection (, ; |)
- Encoding handling (UTF-8, ISO-8859-1)

### FR2 - Real-time Business Validation

**Description**: Automatic French payroll rules validation via Web Worker

**Acceptance Criteria**:

- Progress bar with steps: "Parsing...", "SMIC validation...", "Hours control..."
- Results streamed line by line (no total wait)
- Classification: ✅ Valid, ⚠️ Warning, ❌ Error
- Ability to cancel processing

**French Payroll Business Rules**:

```tsx
// Hardcoded business rules for demo
const VALIDATION_RULES = {
  SMIC_2024: 1398.69, // Monthly gross SMIC
  MAX_WEEKLY_HOURS: 48, // Legal maximum duration
  MAX_DAILY_HOURS: 10, // Daily maximum duration
  LEGAL_HOURS: 35, // Legal weekly duration
  OVERTIME_RATE_125: 1.25, // Overtime rate
  OVERTIME_RATE_150: 1.5, // Overtime rate
  MIN_PAID_LEAVE: 2.5, // Days per month
  MAX_MONTHLY_ABSENCE: 22, // Max working days
};
```

### FR3 - Error Correction Interface

**Description**: Interactive table to view and correct detected errors

**Acceptance Criteria**:

- Responsive table with error highlighting (red/orange/green)
- Click on error → Correction modal with suggestions
- Bulk correction for similar errors
- Error counter: "15 errors, 3 warnings on 127 lines"
- Auto-save corrections (localStorage for MVP)

**UX Patterns**:

- ❌ Blocking error: "Salary 800€ < SMIC 1398€"
- ⚠️ Warning: "45h/week > 35h legal (check agreement)"
- 💡 Suggestion: "125% overtime detected → Check convention rate"

### FR4 - Clean Data Export

**Description**: Export corrected file ready for payroll software import

**Acceptance Criteria**:

- CSV export with same structure as original
- Added columns: "Validation_Status", "Applied_Corrections"
- Filename: "ORIGINAL_NAME_validated_TIMESTAMP.csv"
- Automatic download + preview before export
- Export statistics: "127 lines, 112 valid, 15 corrected"

### FR5 - Mobile-First Responsive

**Description**: Interface optimized for field payroll managers mobile usage

**Acceptance Criteria**:

- File upload via camera/gallery/email on mobile
- Horizontal scrollable table with sticky columns (Name + Status)
- Touch-adapted correction modals (large buttons)
- Progress visible even in background (notification)
- Works offline for corrections (future sync)

### Non-Functional Requirements (24h scope)

- **Performance**: Validate 500 lines in <30 seconds
- **Compatibility**: Chrome/Safari/Firefox latest versions
- **Accessibility**: ARIA labels, keyboard navigation
- **Security**: No permanent storage of sensitive data (temporary localStorage)

## 4. TECHNICAL ARCHITECTURE

### Monorepo Structure with Turborepo (Feature-Based)

```
payroll-validator/
├── apps/
│   └── web/                     # Next.js 15 Main App
│       ├── app/                 # App Router
│       │   ├── (dashboard)/
│       │   │   ├── upload/
│       │   │   ├── validate/
│       │   │   └── export/
│       │   └── api/             # API Routes
│       └── features/            # Colocated Features
│           ├── file-upload/
│           │   ├── components/  # Upload-specific components
│           │   ├── hooks/       # useFileUpload, useProgress
│           │   ├── types/       # Upload types
│           │   ├── utils/       # Upload helpers
│           │   └── api/         # Upload API logic
│           ├── validation/
│           │   ├── components/  # ValidationTable, ErrorModal
│           │   ├── hooks/       # useValidation, useWorker
│           │   ├── types/       # Validation types
│           │   ├── utils/       # Business rules, workers
│           │   └── api/         # Validation API
│           └── export/
│               ├── components/  # ExportSummary, DownloadButton
│               ├── hooks/       # useExport
│               ├── types/       # Export types
│               ├── utils/       # Export formatters
│               └── api/         # Export API
├── packages/
│   ├── ui/                      # Design System Package
│   │   ├── src/
│   │   │   ├── primitives/      # Base UI components (Shadcn/ui)
│   │   │   ├── composition/     # Composed components
│   │   │   ├── layout/          # Layout components
│   │   │   ├── tokens/          # Design tokens
│   │   │   └── styles/          # Tailwind config
│   │   ├── stories/             # Storybook stories
│   │   └── package.json
│   ├── tailwind-config/           # Shared tailwind-config
│   │   └── package.json
│   └── e2e/                     # E2E Tests by feature
└── turbo.json                   # Turborepo config

```

## 5. UI/UX SPECIFICATIONS

### Design System Foundation

**Base**: Shadcn/ui + Tailwind 4 + Radix UI primitives

**Theme**: Consistent token system with dark/light mode

**Responsive**: Mobile-first with adaptive breakpoints

**Accessibility**: WCAG 2.1 AA compliance

### Essential MVP Components:

1. **FileUploader**: Responsive drag&drop
2. **ValidationTable**: TanStack Table with status colors
3. **ErrorDrawer**: Error correction (mobile = bottom, desktop = sidebar)
4. **ExportButton**: Download clean file

### Simple Design Tokens:

- Colors: success/warning/error/neutral
- Spacing: mobile-friendly touch targets
- Typography: Shadcn/ui defaults

### Responsive: Mobile-first with Tailwind breakpoints

## 6. FRENCH PAYROLL BUSINESS CONTEXT

### Legal Framework

- **SMIC 2024**: €1,398.69 monthly gross minimum wage
- **Working Hours**: 35h legal, 48h maximum weekly
- **Overtime Rates**: 125% first 8h, 150% beyond
- **Leave Rights**: 2.5 days per month minimum

### Common Validation Scenarios

- Salary below SMIC detection
- Excessive weekly hours alerts
- Incorrect overtime calculations
- Invalid absence periods
- Format consistency checks

### Data Sources Integration

- URSSAF rate tables
- Labor Code references
- DSN validation requirements
- Collective agreement overrides

This PRD serves as the foundation for Cursor configuration and development guidance.
