YEAR CALENDAR (web app) - version 1.2
=====================================

A year-at-a-glance calendar in the Windows 11 style. It runs inside Microsoft Edge,
so Smart App Control isn't involved and nothing needs installing or signing.

LINKS
App:         https://valfa85.github.io/year-calendar/
Files:       https://github.com/valfa85/year-calendar
Settings:    https://github.com/valfa85/year-calendar/settings/pages

INSTALL ON ANOTHER PC
Open https://valfa85.github.io/year-calendar/ in Microsoft Edge, then
... menu > Apps > Install this site as an app. Pin it to the taskbar.

NEW IN 1.2
- The first and last week of each month show the neighbouring months' days, faded.
- Weekday headings are single letters: M T W T F S S.
- This month's Saturdays and Sundays are in bold.

NEW IN 1.1
- Today button sits between the arrows, with its calendar icon:  <  Today  >
- Weekend days are shaded, and Sa / Su are bold.
- Bank holidays have a green circle (hover for the name).
- ... menu (top right):
    Show UK bank holidays / Show week numbers
    Theme: Follow Windows / Light / Dark
    Version number (Year Calendar 1.1)
  Your choices are remembered on each PC.
  (Bank holiday dates are the England & Wales ones.)

FILES
index.html (the app), manifest.webmanifest (app name/icon), sw.js (offline support)
and the icon files (icon*.png, icon.svg, favicon-32.png).

UPDATING THE INSTALLED APP
On https://github.com/valfa85/year-calendar : Add file > Upload files, drag in index.html,
sw.js and README.txt, Commit changes. Wait a minute, then close and reopen the app
(twice if it still shows the old version). Check "..." > the version line says 1.2.
Still old? Open https://valfa85.github.io/year-calendar/ in an Edge tab, press Ctrl+F5,
then reopen the app.

TO ADD A FUTURE ONE-OFF BANK HOLIDAY
Edit index.html and add a line to ONE_OFFS, e.g.
    [2030, 5, 3, "Example bank holiday"],      (months count from 0, so 5 = June)
and change VERSION near the top of the script (e.g. "1.2.1").

KEYBOARD
Left / Up / Page Up        previous year
Right / Down / Page Down   next year
T or Home                  back to this year
