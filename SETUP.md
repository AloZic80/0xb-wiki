# 0xB://WIKI — Setup Guide
## wiki.0xbeta.dev

**Cost:** $0 (domain renewal only)
**Time:** ~20 minutes

---

## STEP 1: Create a GitHub Account
1. Go to **github.com** > Sign up
2. Use any email. Username won't be visible on your wiki.

---

## STEP 2: Create a Personal Access Token (PAT)
1. GitHub > Profile picture > **Settings**
2. Scroll down left sidebar > **Developer settings**
3. **Personal access tokens** > **Tokens (classic)**
4. **Generate new token (classic)**
5. Note: `0xB Wiki` | Expiration: `No expiration` | Scope: **gist only**
6. **Generate token** > COPY IT NOW (starts with `ghp_`)
7. Save it in a password manager

---

## STEP 3: Create the Private Gist
1. Download & extract **0xB-Wiki-Deploy.zip** (anywhere — Desktop is fine)
2. Open the extracted folder > open `seed-data.json` with Notepad or VS Code
3. Select all (Ctrl+A), copy
4. Go to **gist.github.com**
5. Filename field: type `wiki-data.json`
6. Paste the JSON into the main text area
7. Click the dropdown (top-right) > **Create secret gist**
8. Copy the Gist ID from the URL: `https://gist.github.com/yourname/**THIS_PART_HERE**`
   - This is a long string like `abc123def456xyz789...`
   - You'll need this ID + your PAT in the next step

---

## STEP 4: Create the Repository
1. GitHub > Repositories > **New**
2. Name: `0xb-wiki` | **Public** | Check "Add a README"
3. Create repository

---

## STEP 5: Upload Files
1. In repo > **Add file** > **Upload files**
2. Upload: `index.html`, `sw.js`, `manifest.json`, `CNAME`
3. Commit: `Initial deploy`

---

## STEP 6: Enable GitHub Pages
1. Repo > **Settings** > **Pages** (left sidebar)
2. Source: **Deploy from a branch** | Branch: **main** / **/ (root)**
3. Save. Wait ~2 minutes.

---

## STEP 7: DNS Configuration

At your domain registrar, add:

| Type  | Name  | Value                     | TTL  |
|-------|-------|---------------------------|------|
| CNAME | wiki  | yourusername.github.io    | 3600 |

Or if A records required:
185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

Then in GitHub repo Settings > Pages:
- Custom domain: `wiki.0xbeta.dev`
- Check **Enforce HTTPS**

---

## STEP 8: First Launch
1. Go to **wiki.0xbeta.dev**
2. Enter PAT + Gist ID
3. Click CONNECT
4. 80 entries load across 13 categories

---

## USB MODE
Copy `index.html` to a USB drive. Double-click to open in any browser.
- Online: syncs to Gist
- Offline: uses cached data
- Script path bar points to USB drive letter

---

## WHAT'S INSIDE

### 80 Pre-loaded Entries
- **Scripts (4):** Your custom tools (tagged "mine")
- **Elevation (5):** Self-elevate, PsExec SYSTEM, RunAs, execution policy
- **Intune (7):** Detection scripts, Wipe/Delete/Retire, Win32 packaging, enrollment troubleshooting
- **Deployment (3):** IntuneWinAppUtil, KMS, BeyondTrust
- **Sysadmin (15):** Services, network, registry, SFC/DISM, disk, users, tasks, drives, firewall, printers, BitLocker, event logs, env vars, Windows features
- **Remote Admin (3):** PS Remoting, GP refresh, RDP
- **Silent Installs (12):** Chrome, Firefox, Adobe, 7-Zip, VLC, Zoom, Notepad++, VS Code, Java, .NET, Python, MSI patterns
- **Cheat Sheets (11):** Ports, Run shortcuts, registry hives, GPO order, DNS records, HTTP codes, PS operators, env vars, WMIC, regex, BSOD codes
- **Troubleshooting (6):** Won't boot, slow PC, no network, printer, Windows Update stuck, profile corruption
- **PowerShell (5):** Error handling, file ops, CSV/JSON, transcripts, credentials
- **Sysinternals (3):** ProcMon, Autoruns, BGInfo
- **Security (3):** ACLs/permissions, certutil, USB history
- **Active Directory (3):** User lookup, computer objects, group membership

### 4 Built-in Tools
- **BAT Builder:** Generate .bat wrappers for .ps1 scripts
- **IntuneWin Generator:** Build IntuneWinAppUtil commands
- **Detection Script Generator:** Create registry/file/service detection scripts
- **Deployment Scaffold:** Generate full deployment packages — install.ps1, uninstall.ps1, detect.ps1, Run-Install.bat, folder structure — with shortcuts, pre-removal, version detection

### Features
- Search across titles, descriptions, tags, and code
- Category filters with color coding
- Pin favorites to top
- Copy-to-clipboard everything
- Script path bar (USB, OneDrive, network, custom)
- Package URL field for .intunewin download links
- Delete confirmation modal
- Version history (original preserved on every edit)
- GitHub Gist sync with offline fallback
- PWA installable (Add to Home Screen)
- Tag system: mine, classic, cheatsheet, flow, tool

---

## FILE STRUCTURE
```
0xb-wiki/
├── index.html       <- The entire app
├── sw.js            <- Service worker (offline)
├── manifest.json    <- PWA manifest
├── CNAME            <- GitHub Pages domain
├── seed-data.json   <- Initial data for Gist (80 entries)
└── SETUP.md         <- This file
```
