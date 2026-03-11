# Attendance to ICS Scraper

Tento skript slouží k automatickému exportu plánované docházky z docházkového systému dětské skupiny do univerzálního formátu `.ics` (iCalendar), který lze snadno importovat do Google Kalendáře, Outlooku nebo Apple Calendar.

## Autorství a spolupráce
Tento nástroj vznikl jako výsledek kolaborativního programování mezi autorem a AI modelem **Gemini (Google)**. 

**Role v projektu:**
- **Uživatel:** Definice byznysové logiky, testování v reálném prostředí docházkového systému a specifikace ICS parametrů.
- **Gemini:** Návrh struktury skriptu, implementace DOM scrapingu, ošetření okrajových stavů a generování dokumentace.

### Použití
1. Přihlasit se do docházkového systému -> přehled docházky.
2. Otevřít vývojářskou konzoli prohlížeče.
3. Vložit celý obsah souboru `export_malickov_attendance.js` a stisknout `Enter`.
4. Soubor `plan_dochadzky_alfi.ics` se automaticky stáhne do počítače.
5. Importovat stažený soubor do kalendáře.

### Funkce
- **Prioritizace plánu:** Skript primárně vyhledává hodnoty v polích pro **plánovaný** příchod/odchod.
- **Formátování dat:** Automaticky převádí lokální formáty dat a časů na standard ISO 8601 (pro ICS).
- **Nastavení události:**
  - Název: "Alfi Malíčkov"
  - Dostupnost: "K dispozici" (Transparentní)
  - Viditelnost: Veřejná

### ⚠️ Omezení
- Skript je závislý na struktuře DOM (názvy inputů jako `datumDne`, `planArrival` atd.). Při změně systému může být nutná aktualizace selektorů.