# Attendance to ICS Scraper

This script is used for the automatic export of planned attendance from a childcare attendance system into the universal `.ics` (iCalendar) format, which can be easily imported into Google Calendar, Outlook, or Apple Calendar.

## Authorship and Collaboration
This tool was created as a result of collaborative programming between the author and the AI model **Gemini (Google)**.

**Project Roles:**
- **User:** Definition of business logic, static code review (ESLint), testing in a live attendance system environment, and specification of ICS parameters.
- **Gemini:** Script structure design, DOM scraping implementation, edge case handling, and documentation generation.

### Usage
1. Log in to the attendance system -> navigate to the attendance overview.
2. Open the browser's developer console (F12 or Right-click -> Inspect -> Console).
3. Paste the entire content of the `export_malickov_attendance.js` file and press `Enter`.
4. The file `plan_dochadzky_alfi.ics` will be automatically downloaded to your computer.
5. Import the downloaded file into your calendar.

### Features
- **Plan Prioritization:** The script primarily searches for values in the fields for **planned** arrival/departure.
- **Data Formatting:** Automatically converts local date and time formats to the ISO 8601 standard (required for ICS).
- **Event Settings:**
  - Name: "Alfi Malíčkov"
  - Availability: "Available" (Transparent)
  - Visibility: Public

### ⚠️ Limitations
- The script depends on the DOM structure (input names like `datumDne`, `planArrival`, etc.). If the system's UI changes, the selectors may need to be updated.