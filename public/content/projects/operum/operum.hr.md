# Operum  

**Fleksibilan sustav za praćenje podataka s analitikom i naprednim filtriranjem.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-Operum-blue?logo=github)](https://github.com/matej-jurisic/Operum)  

---

## Live Aplikacija  

[operum.app](https://operum.app)

## Pregled  

Operum je aplikacija za fleksibilno praćenje podataka putem prilagodljivih trackera. Omogućuje korisnicima definiranje vlastitih polja (različitih tipova podataka) i unos zapisa, a uz to pruža i naprednu analitiku te prilagodljive poglede radi jednostavnijeg upravljanja i analize podataka.  

---

## Značajke  

-   **Trackeri s prilagodljivim poljima**:  
    Kreiraj više trackera i definiraj polja različitih tipova (`timespan`, `datetime`, `date`, `bool`, `number`, `string`) uz mogućnost označavanja polja kao obaveznih ili opcionalnih. Nakon definiranja polja, korisnici mogu unositi zapise u tracker. Dostupni su i predlošci za brzi početak korištenja.  

    ![Entries](/content/projects/operum/entries.png)

-   **Analitika podataka**:  
    Pregledaj ključne analitičke metrike na poljima poput `sum`, `count`, `average`, `min`, `max`, `stddev`, uz plan proširenja na višepoljnu i konfigurabilnu analitičku nadzornu ploču.  

    ![Analyitcs](/content/projects/operum/analytics.png)

-   **Pogledi (Views)**:  
    Definiraj prilagođene poglede nad podacima uz pravila sortiranja (polje + `asc/desc`) i filtre (polje, operator, vrijednost). Dostupni operatori: `equals`, `not equals`, `greater`, `less`, `greater equal`, `less equal`, `contains`, `does not contain`, `starts with`. Spremljeni pogledi mogu se naknadno primijeniti radi jednostavnijeg pregledavanja podataka i analitike. 

    ![Views](/content/projects/operum/views.png) 

---

## Tehnologije / Korišteni alati  

-   **Backend**: ASP.NET Core, Entity Framework Core, PostgreSQL, xUnit  
-   **Frontend**: React, TypeScript  
-   **Deployment**: Linux, Docker, GitHub Actions  
-   **Ostalo**: JWT autentikacija  

---

Autor: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Licenca: MIT  
Repozitorij: [github.com/matej-jurisic/Operum](https://github.com/matej-jurisic/Operum)  
