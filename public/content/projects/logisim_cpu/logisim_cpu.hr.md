# logisim_cpu

**Dizajn 8-bitnog procesora u programu Logisim**

[![GitHub Repo](https://img.shields.io/badge/GitHub-logisim__cpu-blue?logo=github)](https://github.com/matej-jurisic/logisim_cpu)

---

## Uvod

Ovaj projekt sadrži dizajn jednostavnog procesora pomoću osnovnih logičkih komponenti dostupnih u programu Logisim. Procesor podržava 81 različitu instrukciju i može izvoditi programe poput rastavljanja broja na proste faktore i računanja fibonaccijevog niza. Cilj projekta bio je razumjeti osnove rada procesora na najnižoj razini.

---

## Značajke / Funkcionalnosti

-   **Hardvard arhitektura**: različite dužine instrukcija i podataka
-   **8-bitne instrukcije**: 19 memorijskih, 48 aritmetičkih, 16 upravljačkih
-   **24-bitno adresiranje**: 2^24 adresa 32-bitnih RAM registara (64 MB memorije)
-   **32-bitni podatci**: brojevi do 2^32 - 1
-   **Procesorski registri**: R0, R1, R2, R3 i A

---

## Korištene Tehnologije / Alati

-   **Dizajniranje procesora**: Logisim
-   **Programiranje procesora**: Notepad i pisanje koda bit po bit

---

## Instalacija / Pokretanje

Kao dio projekta dostupna je cpu.circ datoteka koju je potrebno otvoriti u programu Logisim. Strojni kod se može učitati iz vanjske datoteke ili ručno unijeti u pogramsku memoriju (ROM).

---

## Izgled Procesora

Slika prikazuje blok dijagram arhitekture procesora. Vidimo povezanost programske memorije (ROM), podatkovne memorije (RAM), programskog brojača (PC), upravljačke jedinice (Control Unit) i skupa registara (R0-R3, ACC).

![](https://i.imgur.com/eRM9FL7.png)

---

Autor: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Datum: 17/06/2025  
Licensa: MIT  
Repozitorij: [github.com/matej-jurisic/logisim_cpu](https://github.com/matej-jurisic/logisim_cpu)
