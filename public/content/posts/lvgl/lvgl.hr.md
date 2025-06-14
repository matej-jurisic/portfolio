# Uvod u LVGL: Moćna GUI knjižnica za ugrađene sustave

![LVGL Logo](https://docs.lvgl.io/master/_static/images/logo-light.svg)

**Objavljeno 14. lipnja 2025.**  
_Autor: Matej Jurišić_

## Uvod

U svijetu razvoja ugrađenih sustava, izrada grafičkog korisničkog sučelja (GUI) može biti jedan od najzahtjevnijih i najresursno intenzivnijih zadataka. Tu nastupa **LVGL** – _Light and Versatile Graphics Library_ – open-source knjižnica posebno dizajnirana za uređaje s ograničenim resursima.

Bilo da radite na STM32 mikrokontroleru, ESP32 modulu ili čak soft-core procesoru na FPGA-u poput ULX3S, LVGL nudi snažno i fleksibilno rješenje za stvaranje profesionalnih sučelja.

---

## Što je LVGL?

**LVGL** je grafička knjižnica pisana u C jeziku, optimizirana za performanse i prenosivost. Podržava:

-   Zaslone osjetljive na dodir
-   Glatke animacije
-   Prilagođene widgete
-   GPU akceleraciju (na podržanom hardveru)
-   TrueType fontove i prikaz slika
-   Višejezičnost (UTF-8)

Dobro surađuje s **FreeRTOS**, **Zephyrom** i bare-metal sustavima, a kompatibilna je s upravljačkim programima za popularne ekrane poput ILI9341, ST7789 i druge.

---

## Ključne značajke

### ✅ Lagan i modularan

Zahvaljujući modularnoj arhitekturi, uključujete samo one komponente koje vam trebaju, čime se smanjuje ukupna potrošnja memorije.

### 🎨 Prilagodljivi widgeti

Sadrži gotove widgete poput gumba, klizača, grafikona i tekstualnih polja – svi se mogu stilizirati pomoću tema ili vlastitih stilova.

### ⚡ Fokus na performanse

LVGL može raditi na mikrokontrolerima s već od 64KB RAM-a i 256KB Flash memorije. Podržava djelomično iscrtavanje i dvostruko međuspremanje za glatko osvježavanje zaslona.

### 🧩 Integracija s datotečnim sustavima

Podržava datotečne sustave poput **FatFs**, što omogućuje učitavanje slika i fontova direktno s SD kartice ili flash memorije – idealno za dinamične GUI sustave.

---

## Primjene u stvarnom svijetu

-   **Pametni kućni uređaji** – Termostati, upravljačke ploče
-   **Industrijski strojevi** – Nadzorni zasloni, kontrolni paneli
-   **Potrošačka elektronika** – Pametni satovi, MP3 playeri, ručni uređaji
-   **Prilagođeni FPGA sustavi** – GUI na RISC-V ili MIPS soft-core procesorima s pristupom frame bufferu

---

## Primjer: Prikaz slike s SD kartice

Kada se LVGL poveže s datotečnim sustavom poput **FatFs**, slike se mogu učitati i prikazati u svega nekoliko linija koda:

```c
lv_img_set_src(img_obj, "S:/images/background.bin");
```

LVGL podržava **RGB565 sirove formate slika**, a korištenje DMA-a ili cache-aligned međuspremnika može značajno ubrzati iscrtavanje.

---

## Kako početi

1. **Klonirajte repozitorij**:

```bash
git clone https://github.com/lvgl/lvgl.git
```

2. **Postavite upravljačke programe za ekran i unos**:
   Iskoristite [lv_drivers](https://github.com/lvgl/lv_drivers) repozitorij ili napišite vlastite drivere.

3. **Konfigurirajte LVGL** putem datoteke `lv_conf.h`.

4. **Počnite crtati!**
   Kreirajte ekrane, widgete, animacije i povežite događaje s dodirnim zaslonom.

---

## Zajednica i ekosustav

LVGL ima snažnu i aktivnu zajednicu uz:

-   [Službenu dokumentaciju](https://docs.lvgl.io/)
-   [Forum](https://forum.lvgl.io/)
-   [Simulator](https://sim.lvgl.io/) za prototipiranje sučelja u pregledniku
-   Aktivni razvoj na GitHubu i brojne integracije trećih strana

---

## Završne misli

LVGL omogućuje razvojnim inženjerima da izgrade lijepa i responzivna sučelja bez potrebe za moćnim procesorima ili grafičkim čipovima. Zbog svoje fleksibilnosti, učinkovitosti i podrške zajednice, LVGL je danas jedan od najboljih alata za razvoj GUI-ja na ugrađenim sustavima.

Bez obzira izrađujete li komercijalni proizvod ili radite na hobističkom projektu, LVGL je vrijedan vaše pažnje.

---

_Imaš pitanja ili želiš podijeliti svoj LVGL projekt? Ostavite komentar ili se priključi [LVGL forumu](https://forum.lvgl.io/)!_

---

**Oznake**: `#UgrađeniSustavi` `#LVGL` `#GUI` `#CProgramiranje` `#Mikrokontroleri` `#OpenSource`
