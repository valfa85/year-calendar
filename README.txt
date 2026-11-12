YEAR CALENDAR (web app)
=======================

A year-at-a-glance calendar in the Windows 11 style. It runs inside Microsoft Edge,
so Smart App Control isn't involved and nothing needs installing or signing.

Files: index.html (the app), manifest.webmanifest (app name/icon), sw.js (offline support),
and the icon files (icon*.png, icon.svg, favicon-32.png).


TRY IT NOW
----------
Double-click index.html. It opens in your browser and works fully.
(Installing it as an app with its own window needs a web address - see below.)


PUT IT ONLINE (free, GitHub Pages)
----------------------------------
1. Create a free account at https://github.com
2. Click "+" (top right) > New repository
   - Name: year-calendar
   - Public
   - Create repository
3. On the next page click "uploading an existing file".
   Drag in ALL the files from this folder (there are no subfolders). Click "Commit changes".
4. Settings > Pages > "Deploy from a branch" > Branch: main, folder: / (root) > Save.
5. After a minute or two the app is live at:
       https://YOUR-USERNAME.github.io/year-calendar/


INSTALL IT AS AN APP (Edge)
---------------------------
1. Open the address above in Microsoft Edge.
2. Click the "App available - Install" icon in the address bar,
   or ... menu > Apps > Install this site as an app.
3. It now has its own window, Start menu entry and icon, and works offline.
4. Pin it: right-click its taskbar icon > Pin to taskbar.
Do the same on any other Windows PC.


CHANGING IT
-----------
Edit a file on GitHub (open the file > pencil icon > Commit changes).
The installed app picks up the change the next time it opens while online.

To add a future one-off bank holiday, edit index.html and add a line to ONE_OFFS, e.g.
    [2030, 5, 3, "Example bank holiday"],      (months count from 0, so 5 = June)


KEYBOARD
--------
Up / Left / Page Up        previous year
Down / Right / Page Down   next year
T or Home                  back to this year
Hover a green date         bank holiday name
