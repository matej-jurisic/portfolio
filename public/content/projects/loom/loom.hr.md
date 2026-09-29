# Loom

**Prostor za ciljeve, rokove i motivaciju.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-loom-blue?logo=github)](https://github.com/matej-jurisic/loom)  

---

## Pregled  

Loom je planer izgrađen oko tri koncepta: **ciljevi (Goals)**, **aktivnosti (Activities)** i **pojavljivanja (Occurrences)**. Njegovo temeljno pravilo je da nikad ne traži da bilježite cijeli život. Nema mehanizma za raspoređivanje niti statistike koja dijeli s duljinom dana, pa san, posao i putovanje nikad ne moraju biti uneseni i ništa ne daje pogrešan rezultat kad podaci nedostaju. Kalendar je vizualizacija i brz način dodavanja, a ne planer.

---

## Značajke  

-   **Aktivnosti i pojavljivanja**:  
    Aktivnost je definicija za višekratnu upotrebu s opcionalnim ciljem, kategorijom i predloškom popisa podzadataka. Pojavljivanje je jedna instanca aktivnosti u vremenu: slobodno, planirano, s rokom ili u vremenskom rasponu. Stanje kašnjenja računa se na poslužitelju, a uz aktivnosti podržani su i jednokratni događaji.

-   **Ciljevi**:  
    Ciljevi imaju status (Focus, Active, Bench, Closed) uz korisnički definirano tvrdo ograničenje broja istovremenih focus ciljeva. *Milestone* ciljevi prate ponderirane kontrolne točke s prstenom napretka, dok *ongoing* ciljevi prikazuju heatmapu završenih aktivnosti kroz 280 dana.

-   **Dnevni plan i kalendar**:  
    Dnevni raspored za ono što je danas važno te kalendar s prikazom dana, 3 dana i tjedna za vizualizaciju i brzo dodavanje pojavljivanja.

-   **Kategorije i uvidi**:  
    Kategorije označene bojama grupiraju aktivnosti, a uvidi prikazuju utrošeno vrijeme po aktivnosti i kategoriji, zbrojeno samo nad onim što ste odlučili zabilježiti.

-   **Ispravna semantika dana**:  
    Dani se određuju na poslužitelju prema vremenskoj zoni korisnika i podesivoj granici dana, pa unos u 02:30 može pripadati prethodnom danu.

-   **Sigurna autentifikacija**:  
    JWT access tokeni kratkog vijeka s rotirajućim refresh tokenima spremljenima kao hashevi i isporučenima u httpOnly kolačićima.

-   **Web i Android**:  
    Ista React aplikacija poslužuje se iz API-ja u Dockeru i pakira pomoću Capacitora kao nativna Android aplikacija.

---

## Tehnologije / Korišteni alati  

-   **Backend**: .NET 10, ASP.NET Core minimal API, Entity Framework Core, SQLite  
-   **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, TanStack Query  
-   **Mobilno**: Capacitor (Android)  
-   **Testiranje**: xUnit jedinični i integracijski testovi  
-   **Infrastruktura**: Docker

---

Autor: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Datum: 04/08/2026  
Repozitorij: [github.com/matej-jurisic/loom](https://github.com/matej-jurisic/loom)  
