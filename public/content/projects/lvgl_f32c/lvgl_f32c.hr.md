# lvgl_f32c

**Adaptacija LVGL bilioteke za ULX3S pločicu koristeći F32C procesor**

[![GitHub Repo](https://img.shields.io/badge/GitHub-lvgl__f32c-blue?logo=github)](https://github.com/matej-jurisic/lvgl_f32c)

---

## Uvod

Kao rezultat rada dostupan je „lvgl_f32c.h“ API koji omogućuje korištenje LVGL biblioteke na ULX3S pločici pomoću 3 jednostavna koraka:

1. Poziv inicijalizacijske funkcija na početku programa
2. Registracija objekta koji predstavlja jedan LVGL zaslon
3. Periodični poziv upravljačke funkcije

Implementirajući funkcionalnost razvijenu u radu, korisnik ne mora razmišljati o implementacijskim detaljima upravljačkih funkcija, nego se može fokusirati na razvoj svoje UI aplikacije

---

## Značajke / Funkcionalnosti

-   **Prikaz LVGL komponenti**: Ostvaren je prikaz LVGL komponenti koji se lako može testirati postojećim primjerima i demo aplikacijama dostupnim u LVGL biblioteci.
-   **Korištenje prekidne rutine za tajmer**: Kao jednu od optimizacija koristi se prekidna rutina koja ažurira vrijednost unutarnjeg tajmera.
-   **Nadzor performansi**: Dostupan je prikaz ključnih podataka o performansama aplikacije poput prosječnog broja osvježavanja zaslona, zauzetosti memorije, i vremena potrebnog do prvog crtanja.
-   **Tri spremnika za iscrtavanje**: Kako bi se postiglo iscrtavanje bez treperenja uz DMA prijenos, koriste se dva spremnika dostupna u F32C bibliotekama, uz dodatni LVGL generirani spremnik.
-   **Učitavanje slika sa SD kartice**: Ostvaren je prikaz slika spremljenih na SD kartici.

---

## API Dizajn (lvgl_f32c.h)

```c
// Uključi ili isključi informativne poruke
#define LV_F32C_ENABLE_LOGS 1

// Koristi nadzor performansi
#define LV_F32C_SHOW_PERFORMANCE_MONITOR 1

// Definiraj mapiranje ULX3S tipki na LVGL akcije
#define LV_F32C_BTN_ROT_A LV_KEY_ENTER
#define LV_F32C_BTN_ROT_B LV_KEY_NEXT
#define LV_F32C_BTN_CENTER LV_KEY_PREV
#define LV_F32C_BTN_UP LV_KEY_UP
#define LV_F32C_BTN_DOWN LV_KEY_DOWN
#define LV_F32C_BTN_LEFT LV_KEY_LEFT
#define LV_F32C_BTN_RIGHT LV_KEY_RIGHT

// Log funkcije
#define LV_F32C_LOG_ERR(fmt, ...) fprintf(stderr, "LVGL F32C (Error): " fmt "\n", ##__VA_ARGS__)
#define LV_F32C_LOG_INFO(fmt, ...) fprintf(stderr, "LVGL F32C (Info): " fmt "\n", ##__VA_ARGS__)
#define LV_F32C_LOG_WARNING(fmt, ...) fprintf(stderr, "LVGL F32C (Warning): " fmt "\n", ##__VA_ARGS__)

/**
 * @brief Postavi LVGL za F32C.
 */
void lv_f32c_init(void);

/**
 * @brief Registrira display.
 * @param display Pokazivač na LVGL display objekt.
 * @return 0 ako uspješno, -1 ako greška.
 */
int lv_f32c_register_display(lv_display_t *display);

/**
 * @brief Procesira LVGL timer handler.
 */
void lv_f32c_timer_handler(void);

/**
 * @brief Odgađa rad programa za određen broj milisekundi.
 * @param ms Trajanje odgađanja u milisekundama.
 */
void lv_f32c_msleep(uint32_t ms);

/**
 * @brief Registrira ulazne uređaje.
 * @return Pokazivač na LVGL input device objekt.
 */
lv_indev_t *lv_f32c_register_inputs(void);

/**
 * @brief Inicijalizira vezu sa SD karticom.
 * @return 0 ako uspješno, -1 ako greška.
 */
int lv_f32c_init_sd_card();

/**
 * @brief Inicijalizira opisnik slike.
 * @param img_dsc Pokazivač na (static) opisnik slike.
 * @param width Širina slike.
 * @param height Visina slike.
 */
void lv_f32c_init_image_dsc(lv_image_dsc_t *img_dsc, int width, int height);

/**
 * @brief Oslobađa resurse koje opisnik slike zauzme.
 * @param img_dsc Pokazivač na opisnik slike.
 */
void lv_f32c_free_image_dsc(lv_image_dsc_t *img_dsc);

/**
 * @brief Učitava sliku iz datoteke na zaslon.
 * @param screen Pokazivač na LVGL zaslon objekt.
 * @param image_dsc Pokazivač na opisnik slike.
 * @param filename Putanja do slike na SD kartici.
 * @return Pokazivač na stvoreni LVGL objekt, NULL ako greška.
 */
lv_obj_t *lv_f32c_load_image(lv_obj_t *screen, lv_image_dsc_t *image_dsc, const char *filename);

```

---

## Korištene Tehnologije / Alati

-   **Programsko okruženje**: ULX3S, F32C, LVGL
-   **Programski alati**: make
-   **Programski jezici**: C

---

## Instalacija / Pokretanje

1. Dohvatiti F32C

    ```bash
    git clone https://github.com/f32c/f32c
    ```

2. Sintetizirati F32C na ULX3S pločicu pomoću Lattice Diamond 3.9. Generiranu .bit datoteku prenijeti na pločicu

    ```bash
    ujprog ulx3s_sdram_dv_imp11.bit
    ```

3. Postaviti F32C okolinu i prevesti GNU alate

    ```bash
    cd f32c/src/compiler
    ./build.sh
    cd /tmp
    cp -R f32c/* /usr/local
    rm -fr f32c
    rm -fr ~/github/gnu
    ```

4. Prevesti C biblioteke i postaviti alat make

    ```bash
    echo "export MAKEFILES=~/f32c/src/conf/f32c.mk" >> ~/.bashrc
    source ~/.bashrc
    cd ~/f32c/src/lib/src
    make -j 4
    ```

5. Dohvatiti LVGL_F32C

    ```bash
    git clone https://github.com/matej-jurisic/lvgl_f32c.git
    ```

6. Za daljnje postavljanje dovoljno je pokrenuti skriptu koja se nalazi u projektu

    ```bash
    ./setup.sh
    ```

7. Dodati LVGL_F32C u vašu kod

    ```c
    #include "lvgl_f32c.h"

    int main() {
        lv_f32c_init();

        lv_display_t *display = lv_display_create(fb_hdisp, fb_vdisp);
        lv_f32c_register_display(display);

        // Vaš LVGL kod

        while (1)
        {
            lv_f32c_timer_handler();
            lv_f32c_msleep(5);
        }
    }
    ```

8. Kompajlirati kod (preurediti Makefile ako je potrebno)

    ```bash
    make
    ```

9. Prenijeti generiranu .bin datoteku na pločicu

    ```bash
    ujprog -t -e <ime>.bin
    ```

---

Autor: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Datum: 17/06/2025  
Licensa: MIT  
Repozitorij: [github.com/matej-jurisic/lvgl_f32c](https://github.com/matej-jurisic/lvgl_f32c)
