# Operum  

**Osobna i kolaborativna aplikacija za praćenje podataka.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-Operum-blue?logo=github)](https://github.com/matej-jurisic/Operum)  

---

## Live Aplikacija  

[operum.app](https://operum.app)

## Pregled  

Operum je osobna i kolaborativna aplikacija za praćenje podataka. Umjesto rada s proračunskim tablicama, definirate točno koje podatke želite pratiti, kako ih pregledavati i kako ih vizualizirati — sve na jednom mjestu.

---

## Značajke  

-   **Prilagodljivi trackeri**:  
    Tracker je kolekcija podataka koji su vam važni — popis za čitanje, dnevnik treninga, baza grešaka, bilo što. Definirajte strukturu dodavanjem do 25 polja s tipovima koji odgovaraju vašim podacima, svako s vlastitom oznakom, opisom, redoslijedom i vidljivošću.

    ![Entries](/content/projects/operum/entries.png)

-   **Unosi**:  
    Nakon postavljanja trackera, dodajte unose ispunjavanjem definiranih polja. Kreirajte, uredite i brišite pojedinačne unose ili masovno obrišite odabrane. Uvezite podatke iz CSV datoteke ili ih izvezite u CSV u bilo kojem trenutku.

-   **Pogledi (Views)**:  
    Pogled je spremljena perspektiva nad podacima trackera. Filtrirajte po vrijednostima polja, postavite redoslijed sortiranja i odaberite koje su kolone vidljive. Svaki tracker može imati zadani pogled koji se automatski otvara.

    ![Views](/content/projects/operum/views.png)

-   **Analitika**:  
    Dodajte do 10 grafova trackeru kako biste pretvorili sirove unose u vizualne sažetke, prikazane u masonry rasporedu s mogućnošću premještanja. Dostupno pet vrsta grafova:

    - **Pojedinačna vrijednost** — jedna izračunata metrika istaknuta u prvom planu: count, sum, min, max, average, standardna devijacija ili postotci za boolean polja
    - **Linijski graf** — unosi prikazani duž X/Y osi; podržava sirove linije, agregirane sume grupirane po X ili kumulativne ukupne vrijednosti
    - **Točkasti graf** — numerički X/Y oblak točaka za otkrivanje korelacija između dva numerička polja
    - **Kružni graf (Donut)** — grupira unose po kategorijskom polju i sumira numeričko polje po grupi
    - **Kalendar** — mapira unose na polje datuma i označava svaku točku vrijednošću drugog polja

    Svaki graf mapira polja trackera na uloge koje su mu potrebne. Sučelje prikazuje samo polja čiji je tip kompatibilan s pojedinom ulogom. Analitike se opcionalno mogu ograničiti na određeni pogled.

    ![Analytics](/content/projects/operum/analytics.png)

-   **Suradnja**:  
    Dijelite trackere s drugim korisnicima. Dodajte suradnike ili prijatelje u tracker kako bi mogli pregledavati i dodavati unose.

-   **Predlošci**:  
    Administratori mogu objaviti javne predloške trackera. Pregledajte dostupne predloške i nadogradite ih umjesto početka od nule.

-   **Korisnici i pristup**:  
    Registrirajte se s e-mailom i lozinkom ili se prijavite putem Googlea. Uključuje potvrdu e-maila pri registraciji, zaključavanje računa nakon višestrukih neuspjelih pokušaja prijave te dvije uloge: **Korisnik** (kreiranje i upravljanje trackerima, suradnja) i **Administrator** (sve, uz upravljanje korisnicima i konfiguraciju platforme).

---

## Tehnologije / Korišteni alati  

-   **Backend**: .NET 9, ASP.NET Core, Entity Framework Core, PostgreSQL  
-   **Frontend**: React 19, TypeScript, Vite, Mantine, MobX  
-   **Infrastruktura**: Docker, Nginx, Prometheus, Grafana

---

Autor: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Datum: 15/09/2025  
Licenca: MIT  
Repozitorij: [github.com/matej-jurisic/Operum](https://github.com/matej-jurisic/Operum)  
