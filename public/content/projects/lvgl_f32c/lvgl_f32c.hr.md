# Adaptacija LVGL grafičke biblioteke za ULX3S pločicu korištenjem F32C procesora

Ovaj projekt predstavlja adaptaciju LVGL grafičke biblioteke za ULX3S pločicu, koristeći F32C procesor, s ciljem olakšavanja stvaranja grafičkih sučelja na ULX3S pločici. Razvijen je API pod nazivom `lvgl_f32c.h` koji omogućuje jednostavnu integraciju LVGL biblioteke u korisničke aplikacije kroz tri jednostavna koraka: pozivanje inicijalizacijske funkcije na početku programa, registraciju LVGL zaslona i periodično pozivanje upravljačke funkcije.

## Ključne značajke i postignute funkcionalnosti

-   **Prikaz LVGL komponenti**: Omogućen je prikaz LVGL komponenti, testiran korištenjem postojećih primjera i demo aplikacija iz LVGL biblioteke.
-   **Korištenje prekidne rutine za tajmer**: Prekidna rutina se koristi za ažuriranje unutarnjeg tajmera, čime se izbjegava trošenje procesorskih resursa i potreba za radnim čekanjem.
-   **Nadzor performansi**: Dostupan je prikaz ključnih podataka o performansama aplikacije, uključujući prosječan broj osvježavanja zaslona, zauzetost memorije i vrijeme potrebno do prvog crtanja.
-   **Tri spremnika za iscrtavanje**: Koriste se dva spremnika iz F32C biblioteka i dodatni LVGL generirani spremnik za iscrtavanje bez treperenja uz DMA prijenos.
-   **Učitavanje slika sa SD kartice**: Omogućena je konverzija slika u odgovarajući format, učitavanje sa SD kartice i njihov prikaz na zaslonu.

## Korištene komponente hardverske i softverske okoline

Projekt je izgrađen na open-source hardverskoj platformi ULX3S i koristi procesorsku jezgru F32C.

-   **ULX3S pločica**: Open-source FPGA pločica opremljena Lattice Semiconductor ECP5 serijom čipova.
-   **F32C procesor**: Open-source 32-bitna procesorska jezgra koja može izvoditi pod-skupove RISC-V ili MIPS setova instrukcija.
-   **LVGL biblioteka**: Besplatna i open-source grafička biblioteka napisana u C jeziku, koja omogućuje prikaz interaktivnih GUI komponenti na mikrokontrolerima. Koristi se verzija 9.3.0.
-   **GPDI video izlaz**: ULX3S podržava digitalni video izlaz putem GPDI konektora, kompatibilnog s TMDS standardom za HDMI prijenos. Video kontroler čita podatke iz SDRAM memorije (32MB) i šalje ih kao TMDS signal.
-   **DMA prijenos**: Koristi se za brzi prijenos podataka iz LVGL spremnika za crtanje izravno u spremnik za prikaz, čime se značajno ubrzava proces prikaza.
-   **Prekidna rutina**: Omogućuje sustavu da reagira na vanjske događaje bez konstantnog provjeravanja od strane procesora. U ovom radu koristi se za ažuriranje unutarnjeg tajmera svakih 1 ms, što je ključno za ispravan rad LVGL-a.
-   **SD kartica**: Za komunikaciju sa SD karticom koristi se SPI protokol, a proces uključuje inicijalizaciju kartice i čitanje slika.
-   **RGB565 format boje**: Koristi se za prikaz slika. Projekt uključuje Python skriptu za pretvorbu `.png` slika u odgovarajući `.bin` format.

## Ograničenja i buduće nadogradnje

Iako su postignuti značajni rezultati, postoje i određena ograničenja koja mogu biti tema budućih nadogradnji:

-   **Različite metode unosa**: Trenutno je podržan unos putem 7 tipki na ULX3S pločici, uz mogućnost proširenja na zaslone osjetljive na dodir, tipkovnice i druge ulazne uređaje.
-   **Proširenje skripte za pretvorbu slika**: Skripta za pretvorbu slika mogla bi se proširiti na više ulaznih formata i dodati grafički prikaz te mogućnost definiranja dimenzija generirane slike.
-   **Optimizacija performansi za kompleksna iscrtavanja**: Kompleksna iscrtavanja s velikim brojem animiranih komponenti trenutno rezultiraju nižim brojem iscrtavanja (7-15 FPS na 720p), što je područje za daljnje istraživanje i optimizaciju.

## Instalacija i pokretanje

Projekt je dostupan na GitHub repozitoriju: [GitHub](https://github.com/matej-jurisic/lvgl_f32c).

Za preuzimanje i postavljanje projekta potrebno je:

1.  Klonirati repozitorij: `git clone https://github.com/matej-jurisic/lvgl_f32c.git`.
2.  Pokrenuti `setup.sh` skriptu: `./setup.sh`. Ova skripta preuzima LVGL verziju 9.3.0, primjenjuje potrebne zakrpe i prevodi kod, stvarajući `example.bin` datoteku spremnu za pokretanje na ULX3S pločici.
3.  Prevođenje programa: `make`.
4.  Prijenos programa na pločicu: `ujprog -t -e example.bin`.

Projekt uključuje demo aplikacije `example_arc.c` za prikaz animiranih objekata i `example_image.c` za učitavanje slika sa SD kartice.
