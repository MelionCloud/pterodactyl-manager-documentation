### 🗿 Addon Structure

Each addon should consists of the following structure:

_YourSuperCoolAddon.zip_
- panelFiles (semi optional)
  - path/in/var/www/pterodactyl/folder/index.blade.php
- wingsFiles (semi optional)
  - path/in/wings/repo/myaddon.go
- pteroaddon.json (addon information file)

````json
{
  "name": "MyAddon",
  "description": "This is my addon",
  "author": "MyAuthor",
  "version": "1.0.0", 
  "buildAgainst": "pterodactyl-v1.9.2", 
  "compatibleWith": [
      "pterodactyl-v1.9.2",
      "pterodactyl-v1.8.2",
      "pterodactyl-v1.7.2",
      "pterodactyl-v1.6.2"
  ],
  "license": "MIT",
  "website": "https://mywebsite.com",
  "github": ""
}
````
---

### 🪧 How it works

1. Receive the addon
2. Extract the addon
3. If there are panel files available:
   1. Check if the addon is compatible with the panel
   2. If it is compatible, copy the files to the panel
   3. If it is not compatible, throw an error
   4. If the addon is compatible, but the files are not copied, throw an error
4. If there are winge files available:
   1. Clone the repository or pull the latest changes
   2. Apply stashes of previously applied addons
   3. Copy the addon to the panel
   4. If the addon is not compatible, throw an error
   5. If the addon is compatible, but the files are not copied, throw an error
   6. Build the addon
5. If there are no files available, throw an error
6. Return information about the addon to the client or throw an error
