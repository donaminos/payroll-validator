# UI Package - Payroll Validator Design System

## Overview

Design system for the Payroll Data Validator application, built for French payroll compliance validation. This package provides reusable components optimized for data-heavy interfaces and complex validation workflows.

## Technology Stack

- **Shadcn/ui** - Accessible component primitives
- **Tailwind CSS 4** - Utility-first styling with custom payroll themes
- **Radix UI** - Headless UI primitives for accessibility
- **Class Variance Authority (CVA)** - Component variant management
- **TypeScript** - Strict typing for component props and business logic

## Architecture Philosophy

This design system follows compound component patterns optimized for:

- **Data validation interfaces** (tables, forms, status indicators)
- **Bulk operations** (multi-select, batch actions)
- **Real-time feedback** (live validation, progress indicators)
- **French payroll context** (salary formatting, legal compliance displays)

## Core Components

### Data Display Components

- `PayrollTable` - Advanced data table with error highlighting and sorting
- `ValidationBadge` - Status indicators for validation results (valid/error/warning)
- `MetricCard` - Dashboard metrics with French number formatting
- `ErrorSummary` - Aggregated validation error display

### Input Components

- `FileUploader` - CSV file upload with validation and preview
- `PayrollForm` - Form wrapper with French payroll field validation
- `BulkSelector` - Multi-row selection for batch operations
- `FilterPanel` - Advanced filtering for payroll data

### Feedback Components

- `ProgressTracker` - File processing progress with detailed steps
- `ValidationToast` - Contextual notifications for validation results
- `LoadingSpinner` - Various loading states for different operations
