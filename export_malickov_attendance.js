const rows = document.querySelectorAll("table.daysTable tr");
let events = "";

const formatICSDate = (dateStr, timeStr) => {
    if (!dateStr || !timeStr) return null;
    const cleanDate = dateStr.replace(/[-.]/g, ""); 
    const cleanTime = timeStr.replace(/:/g, "").padEnd(4, "0").substring(0, 4) + "00"; 
    return `${cleanDate}T${cleanTime}`;
};

rows.forEach(row => {
    const date = row.querySelector("input[name='datumDne']")?.value;
    
    // ZMENAORITY: Najprv hľadáme plánované časy, ak nie sú, skúsime reálne
    const planArrival = row.querySelector("input[name='planArrival']")?.value;
    const planLeaving = row.querySelector("input[name='planLeaving']")?.value;
    const arrival = row.querySelector("input[name='arrival']")?.value;
    const leaving = row.querySelector("input[name='leaving']")?.value;

    const startStr = planArrival || arrival;
    const endStr = planLeaving || leaving;

    if (date && startStr && endStr) {
        const dtStart = formatICSDate(date, startStr);
        const dtEnd = formatICSDate(date, endStr);

        if (dtStart && dtEnd) {
            events += `BEGIN:VEVENT
SUMMARY:Alfi Malíčkov
DTSTART:${dtStart}
DTEND:${dtEnd}
TRANSP:TRANSPARENT
CLASS:PUBLIC
END:VEVENT\n`;
        }
    }
});

const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Dochadzka//Alfi//SK
CALSCALE:GREGORIAN
METHOD:PUBLISH
${events}END:VCALENDAR`;

const downloadICS = (content, fileName) => {
    const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

if (events.length > 0) {
    downloadICS(icsContent, "plan_dochadzky_alfi.ics");
    console.log("Súbor s PLÁNOVANOU dochádzkou bol stiahnutý.");
} else {
    console.error("Nepodarilo sa nájsť žiadne plánované časy!");
}