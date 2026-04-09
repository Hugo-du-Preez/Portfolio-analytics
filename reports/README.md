# ProjectManagementDashboard.pbix

## Report Overview
Interactive project management dashboard created for DBR361 assessment.

## Data Model
- **Fact Table:** Tasks
- **Dimensions:** Priority, Date (role-playing)
- **Relationships:** Active (DueDate), Inactive (CreatedDate, CompletedDate)

## Key Measures
1. `Date` - Custom calendar table
2. `Late` - Overdue task detection
3. Progress tracking by project/assignee

## Visuals
- Pie chart: Task progress distribution
- Donut chart: Overdue status (Red #FF0000)
- Stacked bar: Resource allocation
- Slicer panel: Priority, Progress, Overdue filters

## File Details
- Size: ~2.4 MB
- Created: April 2025
- Power BI Version: Latest