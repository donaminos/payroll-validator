# E2E Test Analysis and Generation Prompt

## Context
You are an expert QA engineer specializing in B2B SaaS testing with Playwright. Your mission is to automatically discover, analyze, and create comprehensive E2E tests for a Next.js payroll management application.

## Application Details
- **Base URL**: http://localhost:3000
- **Framework**: Next.js 15 + React 19 + TypeScript
- **Design System**: Shadcn/ui (Radix UI based)
- **Target**: B2B SaaS quality standards
- **Pages to analyze**:
  - `/` - Dashboard with metrics and widgets
  - `/employees` - Employee management with pagination and search

## Phase 1: Automated Discovery & Analysis

### Step 1: Navigate and Inspect Pages
For each page (`/` and `/employees`):

1. **Navigate to the page** and wait for full load
2. **Take screenshots** (desktop + mobile viewport)
3. **Analyze DOM structure** and identify:
   - Interactive elements (buttons, inputs, links, menus)
   - Data containers (tables, lists, cards, grids)
   - Navigation components (pagination, breadcrumbs, tabs)
   - Loading states and async content
   - Error boundaries and fallback UI
   - Form elements and validation
   - Modal/dialog triggers
   - Responsive breakpoints and mobile-specific UI

4. **Detect data-testid attributes** and existing test identifiers
5. **Map user workflows** and interaction patterns
6. **Identify API endpoints** from network requests
7. **Document performance metrics** (LCP, FID, CLS)

### Step 2: Business Logic Analysis
For each page, identify:
- **Primary user goals** (what users want to accomplish)
- **Critical paths** (essential workflows that must work)
- **Data dependencies** (what data is required/displayed)
- **Edge cases** (empty states, error conditions, loading states)
- **Security considerations** (auth requirements, data sensitivity)
- **Performance expectations** (acceptable load times, smooth interactions)

## Phase 2: Test Scenario Generation

### Coverage Requirements (B2B SaaS Standards)

#### 1. Functional Testing (70% of coverage)
- **Happy path workflows** - Primary user journeys work correctly
- **Form validation** - All inputs properly validated
- **CRUD operations** - Create, Read, Update, Delete functionality
- **Search and filtering** - Data discovery mechanisms
- **Pagination** - Large dataset navigation
- **Sorting** - Data organization capabilities
- **State management** - UI state persistence and updates

#### 2. UI/UX Testing (15% of coverage)  
- **Responsive design** - Mobile, tablet, desktop layouts
- **Loading states** - Skeleton screens, spinners, progressive loading
- **Empty states** - No data scenarios with proper messaging
- **Error states** - User-friendly error handling and recovery
- **Accessibility** - Keyboard navigation, screen reader support
- **Visual consistency** - Design system adherence

#### 3. Performance Testing (10% of coverage)
- **Page load times** - Under 3s for initial load
- **Interaction responsiveness** - Under 100ms for user feedback
- **Data loading** - Efficient pagination and lazy loading
- **Memory usage** - No significant memory leaks
- **Bundle size impact** - Reasonable JavaScript payload

#### 4. Error Handling & Edge Cases (5% of coverage)
- **Network failures** - Offline scenarios, API timeouts
- **Invalid data** - Malformed responses, missing fields
- **Authentication** - Session expiry, unauthorized access
- **Browser compatibility** - Cross-browser functionality
- **Race conditions** - Concurrent user actions

## Phase 3: Implementation Requirements

### Test Structure
Generate tests using this structure:
```typescript
test.describe('Page Name - Functional Area', () => {
  test.beforeEach(async ({ page }) => {
    // Setup: navigation, auth, mocks
  });

  test('should [specific behavior] when [specific condition]', async ({ page }) => {
    // Arrange: Set up test data and state
    // Act: Perform user actions
    // Assert: Verify expected outcomes
  });
});
```

### Test Categories to Generate

#### Dashboard Page Tests
1. **Core Functionality**
   - Page loads with all widgets visible
   - Metrics display correct data and formatting
   - Navigation links work correctly
   - Quick actions are functional

2. **Responsive Design**
   - Mobile layout adapts correctly
   - Widgets stack appropriately
   - Navigation becomes mobile-friendly

3. **Performance**
   - Dashboard loads under 2 seconds
   - Widget data loads progressively
   - No layout shift during loading

#### Employee Page Tests
1. **Data Display**
   - Employee list loads correctly
   - Pagination works with different page sizes
   - Search filters results accurately
   - Sorting works on all columns

2. **Interactions**
   - Employee details are accessible
   - Bulk actions work correctly
   - Export functionality works
   - Add/Edit employee workflows

3. **Edge Cases**
   - Empty search results handled gracefully
   - Large datasets don't break UI
   - Invalid data displays appropriate errors

### Mock Data Strategy
Create realistic mock data that covers:
- **Typical datasets** (10-50 employees)
- **Large datasets** (500+ employees for pagination testing)
- **Edge cases** (empty lists, single items)
- **Error scenarios** (API failures, malformed data)

## Phase 4: Code Generation

### Output Requirements
1. **Complete playwright.config.ts** with optimized settings
2. **Test files** organized by feature/page
3. **Utility functions** for common operations
4. **Mock data fixtures** in JSON format
5. **Helper classes** for page interactions
6. **CI-ready configuration** with proper reporting

### Quality Standards
- Tests must be **deterministic** (no flaky tests)
- **Fast execution** (complete suite under 5 minutes)
- **Clear assertions** with descriptive error messages
- **Maintainable code** with good abstractions
- **Comprehensive coverage** of critical user paths

## Execution Instructions

1. **Start the Next.js app** on localhost:3000
2. **Analyze both pages** according to Phase 1
3. **Generate test scenarios** based on your analysis
4. **Create all necessary files** in the packages/e2e directory
5. **Ensure tests can run** with `pnpm test`
6. **Provide summary report** of coverage and test strategy

## Success Criteria
- All critical user workflows have test coverage
- Tests run reliably in both desktop and mobile viewports
- Performance benchmarks are established and verified
- Error scenarios are properly tested
- Code is production-ready for a B2B SaaS application

Execute this analysis now and provide comprehensive E2E test implementation.