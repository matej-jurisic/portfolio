# Operum  

**Osobna i kolaborativna aplikacija za praćenje podataka.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-Operum-blue?logo=github)](https://github.com/matej-jurisic/Operum)  

---

## Live Aplikacija  

[operum.app](https://operum.app)

## Pregled  

Operum je osobna i kolaborativna aplikacija za praćenje podataka. Umjesto rada s proračunskim tablicama, definirate točno koje podatke želite pratiti, kako ih pregledavati i kako ih vizualizirati, sve na jednom mjestu.

---

## Značajke  

-   **Prilagodljivi trackeri**:  
    Tracker je kolekcija podataka koji su vam važni: popis za čitanje, dnevnik treninga, baza grešaka, bilo što. Definirajte strukturu dodavanjem do 25 polja (string, number, bool, date, datetime, timespan ili referenca na drugi tracker), svako s vlastitom oznakom, opisom i opcijama. Trackere je moguće kreirati korak po korak, klonirati iz predloška ili kopirati zajedno s poljima, konstantama i pogledima.

-   **Pametna polja**:  
    Polja mogu biti **izračunata** iz formule poput `{End} - {Start}`, imati **zadane vrijednosti** (fiksne, relativne poput "početak mjeseca" ili vođene konstantama) te **uvjetnu vidljivost** u obrascu za unos. **Konstante** su imenovane vrijednosti za višekratnu upotrebu s do 6 uvjetnih varijanti po prioritetu. **Referentna polja** povezuju unose među trackerima, a skup polja moguće je izdvojiti u novi tracker radi normalizacije ponavljajućih podataka.

-   **Unosi**:  
    Kreirajte, uredite, duplicirajte i brišite unose ili masovno obrišite i preračunajte odabrane. Dijalog za brzi unos bilježi unos u nekoliko tipki. Uvezite podatke iz CSV-a ili ih izvezite u bilo kojem trenutku, po želji filtrirane po pogledu.

-   **Pogledi (Views)**:  
    Pogled je spremljena perspektiva nad podacima trackera, sastavljena od filter i sort upita za višekratnu upotrebu. Dinamički filteri datuma (`now`, `today`, `end of year` s pomacima) održavaju poglede aktualnima kroz vrijeme.

-   **Nadzorne ploče (Dashboards)**:  
    Gradite nadzorne ploče iz mreže widgeta koje možete povlačiti: grafovi, tablice unosa, gumbi za brzi unos, filteri, bilješke te spremnici i kartice koji grupiraju druge widgete. Desktop i mobilni raspored spremaju se zasebno, a filter widgeti sužavaju sve widgete koji ih prate.

-   **Analitika i Explore**:  
    Grafovi se računaju pri upitu iz jednog ili više trackera: jedna vrijednost, napredak prema cilju, linijski, stupčasti, scatter, donut i kalendar. Explore je prostor za jednokratne izračune čija se cijela konfiguracija nalazi u URL-u, a svaki rezultat moguće je ubaciti na nadzornu ploču.

-   **Integracije**:  
    Uvezite podatke iz intervals.icu (periodično dohvaćanje) i Firefly III (webhook) i preslikajte ih na polja trackera. Uvoz radi upsert po stabilnom ID-u pa ponovna sinkronizacija nikad ne stvara duplikate, a vjerodajnice su šifrirane u mirovanju.

-   **Obavijesti**:  
    Pravila upozorenja po trackeru, zakazana ili aktivirana kad uvjet počne vrijediti, dostavljaju se kao push obavijesti preglednika i u inboxu unutar aplikacije, s prilagodljivim predlošcima poruka.

-   **Suradnja**:  
    Dijelite trackere po korisničkom imenu s odvojenim dozvolama za uređivanje podataka i uređivanje sheme.

-   **Korisnici i administracija**:  
    Registracija e-mailom i lozinkom s potvrdom ili prijava putem Googlea, uz zaključavanje računa nakon neuspjelih pokušaja. Administratori upravljaju korisnicima i trackerima te objavljuju javne predloške. Paleta naredbi `Ctrl`+`K` vodi bilo kamo u aplikaciji.

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
