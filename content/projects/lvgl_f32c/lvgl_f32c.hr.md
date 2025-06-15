# LVGL adaptacija za ULX3S (F32C)

## Uvod

Rad sadrži adaptaciju LVGL grafičke biblioteke za ULX3S pločicu koristeći F32C procesor. Cilj je olakšati stvaranje grafičkih sučelja pomoću definiranja hardver-specifičnih LVGL upravljačkih funkcija. Rezultat rada je `lvgl_f32c.h` API koji omogućuje korištenje LVGL biblioteke u 3 jednostavna koraka.

## Postignute funkcionalnosti

-   Prikaz LVGL komponenti
-   Korištenje prekidne rutine za tajmer
-   Nadzor performansi (fps, memorija, vrijeme crtanja)
-   Tri spremnika za iscrtavanje uz DMA
-   Učitavanje slika sa SD kartice

## Ograničenja

-   Trenutno je podržano samo 7 tipki na ULX3S
-   Potrebna konverzija slika u RGB565 `.bin` format uz skriptu

## Korištene komponente

-   **GPDI video izlaz**: HDMI-kompatibilan prikaz uz SDRAM spremnik
-   **DMA prijenos**: Efikasni prijenos slike bez treperenja
-   **Prekidna rutina**: Precizni 1ms prekidi za LVGL tick
-   **SD kartica**: SPI komunikacija i čitanje `.bin` slika

## LVGL_F32C API

```c
#include "lvgl_f32c.h"

void lv_f32c_init(void);
int lv_f32c_register_display(lv_display_t *display);
void lv_f32c_timer_handler(void);
lv_indev_t* lv_f32c_register_inputs(void);
int lv_f32c_init_sd_card(void);
lv_obj_t* lv_f32c_load_image(lv_obj_t *screen, lv_image_dsc_t *image_dsc, const char *filename);
void lv_f32c_free_image_dsc(lv_image_dsc_t *img_dsc);
```

## Performanse

Korištenjem `lv_demo_benchmark()` postignuto je:

-   36 fps (prosjek)
-   98% iskorištenosti procesora na 720p rezoluciji

## Instalacija

```bash
git clone https://github.com/matej-jurisic/lvgl_f32c.git
cd lvgl_f32c
./setup.sh
```

## Demo

### Primjer animacije

```c
lv_f32c_init();
lv_display_t *display = lv_display_create(fb_hdisp, fb_vdisp);
lv_f32c_register_display(display);
lv_example_arc2();
while (1) {
    lv_f32c_timer_handler();
    lv_f32c_msleep(5);
}
```

### Primjer slike sa SD kartice

```c
lv_f32c_init();
lv_f32c_init_sd_card();
lv_display_t *display = lv_display_create(fb_hdisp, fb_vdisp);
lv_f32c_register_display(display);
lv_f32c_init_image_dsc(&image_dsc, 407, 246);
lv_obj_t *image = lv_f32c_load_image(lv_screen_active(), &image_dsc, "image.bin");
lv_obj_center(image);
```

## Zaključak

LVGL je uspješno adaptiran za ULX3S pomoću F32C procesora. Projekt omogućuje razvoj grafičkih sučelja bez potrebe za razumijevanjem hardverskih detalja. Postignute su ključne funkcionalnosti i pripremljena je baza za daljnje nadogradnje.

📁 GitHub: [github.com/matej-jurisic/lvgl_f32c](https://github.com/matej-jurisic/lvgl_f32c)
