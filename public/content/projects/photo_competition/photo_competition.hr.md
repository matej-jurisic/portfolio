# Photo Competition

**Samostalno hostirana platforma za organizaciju foto natječaja i ocjenjivanje.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-photo__competition-blue?logo=github)](https://github.com/matej-jurisic/photo_competition)  

---

## Pregled  

Photo Competition omogućuje organizaciju natječaja, prikupljanje fotografija od fotografa te ocjenjivanje i nagrađivanje od strane sudaca, sve u jednoj samostalno hostiranoj aplikaciji. Korisnici se registriraju računom te mogu stvarati i upravljati vlastitim natječajima ili zatražiti pridruživanje javnima kao fotografi ili suci. Pozvani sudionici mogu učitavati i ocjenjivati i putem privatnih poveznica.

---

## Značajke  

-   **Natječaji i teme**:  
    Natječaj ima naziv, jednu ili više tema, rok za učitavanje i rok za ocjenjivanje. Fotografi šalju jednu fotografiju po temi, a suci pregledavaju fotografije grupirane po temama. Natječaji mogu biti privatni, a nagrade se prikazuju na stranici s rezultatima.

-   **Računi i zahtjevi za pridruživanje**:  
    Korisnici se registriraju i prijavljuju (JWT autentifikacija, BCrypt hashirane lozinke, ograničenje broja zahtjeva na auth endpointima) te imaju osobnu nadzornu ploču s natječajima koje posjeduju i onima u kojima sudjeluju. Javni natječaji primaju zahtjeve za pridruživanje kao fotograf ili sudac, koje pregledava vlasnik natječaja, dok su privatni natječaji samo uz pozivnicu.

-   **Fotografi**:  
    Svaki fotograf dobiva jedinstvenu privatnu poveznicu ili, kao registrirani korisnik, osobnu sesiju za učitavanje (JPG, PNG ili WebP do 20 MB) i može zamijeniti ili obrisati svoje fotografije dok je učitavanje otvoreno.

-   **Ocjenjivanje**:  
    Suci ocjenjuju svaku fotografiju ocjenom 1 do 10 uz opcionalni komentar, nasumičnim redoslijedom radi izbjegavanja pristranosti, te dodjeljuju ograničen broj prilagođenih značaka poput *Majstorstvo boja*, *Originalna ideja*, *Savršen trenutak*, *Nasmijalo me* i *Skriveni dragulj*. Lightbox sa zumiranjem olakšava pregled fotografija.

-   **Rezultati**:  
    Ocjene se zbrajaju po fotografu i temi radi određivanja ukupnog pobjednika, uz prikaz izjednačenih. Fotografije sa značkama prikazuju se zasebno, a rezultati postaju javni tek kad je natječaj označen završenim.

-   **Admin panel**:  
    Zaštićeni admin panel upravlja natječajima, temama, sudionicima i fotografijama, kopira poveznice sudionika, učitava fotografije u ime sudionika te može ranije zatvoriti učitavanje.

---

## Tehnologije / Korišteni alati  

-   **Backend**: .NET 9, ASP.NET Core, Entity Framework Core, PostgreSQL, JWT  
-   **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, TanStack Query  
-   **Infrastruktura**: Docker, Nginx

---

Autor: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Datum: 25/04/2026  
Repozitorij: [github.com/matej-jurisic/photo_competition](https://github.com/matej-jurisic/photo_competition)  
