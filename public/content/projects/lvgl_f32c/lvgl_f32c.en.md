# lvgl_f32c

**LVGL adaptation for ULX3S Board Using F32C processor**

[![GitHub Repo](https://img.shields.io/badge/GitHub-lvgl__f32c-blue?logo=github)](https://github.com/matej-jurisic/lvgl_f32c)

---

## Overview

As a result of this work, the "lvgl_f32c.h" API is available, enabling the use of the LVGL library on the ULX3S board through 3 simple steps::

1. Calling the initialization function at the beginning of the program
2. Registering an object that represents a single LVGL display
3. Periodically calling the handler function

By implementing the functionality developed in this work, the user doesn't have to consider the implementation details of the handler functions but can focus on developing their UI application

---

## Features

-   **LVGL Component Display**: LVGL component display has been achieved, which can be easily tested with existing examples and demo applications available in the LVGL library.
-   **Timer Interrupt Routine Usage**: An interrupt routine is used as one of the optimizations to update the internal timer value.
-   **Performance Monitoring**: Display of key application performance data is available, such as average screen refresh rate, memory usage, and time to first draw.
-   **Three Drawing Buffers**: To achieve flicker-free drawing with DMA transfer, two buffers available in F32C libraries are used, along with an additional LVGL-generated buffer.
-   **Image Loading from SD Card**: Display of images stored on an SD card has been achieved.

---

## API Design (lvgl_f32c.h)

```c
// Enable or disable logging
#define LV_F32C_ENABLE_LOGS 1

// Use performance monitor
#define LV_F32C_SHOW_PERFORMANCE_MONITOR 1

// Define which ulx3s buttons are mapped to which LVGL keys
#define LV_F32C_BTN_ROT_A LV_KEY_ENTER
#define LV_F32C_BTN_ROT_B LV_KEY_NEXT
#define LV_F32C_BTN_CENTER LV_KEY_PREV
#define LV_F32C_BTN_UP LV_KEY_UP
#define LV_F32C_BTN_DOWN LV_KEY_DOWN
#define LV_F32C_BTN_LEFT LV_KEY_LEFT
#define LV_F32C_BTN_RIGHT LV_KEY_RIGHT

// Logging functions
#define LV_F32C_LOG_ERR(fmt, ...) fprintf(stderr, "LVGL F32C (Error): " fmt "\n", ##__VA_ARGS__)
#define LV_F32C_LOG_INFO(fmt, ...) fprintf(stderr, "LVGL F32C (Info): " fmt "\n", ##__VA_ARGS__)
#define LV_F32C_LOG_WARNING(fmt, ...) fprintf(stderr, "LVGL F32C (Warning): " fmt "\n", ##__VA_ARGS__)

/**
 * @brief Initializes LVGL for f32c.
 */
void lv_f32c_init(void);

/**
 * @brief Registers a display.
 * @param display Pointer to the LVGL display object.
 * @return 0 on success, -1 on failure.
 */
int lv_f32c_register_display(lv_display_t *display);

/**
 * @brief Handles LVGL timer processing.
 */
void lv_f32c_timer_handler(void);

/**
 * @brief Delays execution for a specified number of milliseconds.
 * @param ms The delay duration in milliseconds.
 */
void lv_f32c_msleep(uint32_t ms);

/**
 * @brief Registers input devices (currently only the keypad) with LVGL.
 * @return Pointer to the LVGL input device object.
 */
lv_indev_t *lv_f32c_register_inputs(void);

/**
 * @brief Initializes SD card functionality for LVGL F32C.
 * @return 0 on success, -1 on failure.
 */
int lv_f32c_init_sd_card();

/**
 * @brief Initializes an LVGL image descriptor with specified dimensions.
 * @param img_dsc Pointer to the (static) image descriptor to initialize.
 * @param width Width of the image.
 * @param height Height of the image.
 */
void lv_f32c_init_image_dsc(lv_image_dsc_t *img_dsc, int width, int height);

/**
 * @brief Frees resources associated with an LVGL image descriptor.
 * @param img_dsc Pointer to the image descriptor to free.
 */
void lv_f32c_free_image_dsc(lv_image_dsc_t *img_dsc);

/**
 * @brief Loads an image from a file onto an LVGL screen.
 * @param screen Pointer to the LVGL screen object.
 * @param image_dsc Pointer to the image descriptor.
 * @param filename Path to the image file.
 * @return Pointer to the created LVGL image object, or NULL on failure.
 */
lv_obj_t *lv_f32c_load_image(lv_obj_t *screen, lv_image_dsc_t *image_dsc, const char *filename);

```

---

## Technologies / Tools Used

-   **Programming Environment**: ULX3S, F32C, LVGL
-   **Programming Tools**: make
-   **Programming Languages**: C

---

## Installation / Running

1. Clone F32C

    ```bash
    git clone https://github.com/f32c/f32c
    ```

2. Synthesize F32C onto the ULX3S board using Lattice Diamond 3.9. Flash the generated .bit file to the board.

    ```bash
    ujprog ulx3s_sdram_dv_imp11.bit
    ```

3. Set up the F32C environment and compile GNU tools

    ```bash
    cd f32c/src/compiler
    ./build.sh
    cd /tmp
    cp -R f32c/* /usr/local
    rm -fr f32c
    rm -fr ~/github/gnu
    ```

4. Compile C libraries and set up make

    ```bash
    echo "export MAKEFILES=~/f32c/src/conf/f32c.mk" >> ~/.bashrc
    source ~/.bashrc
    cd ~/f32c/src/lib/src
    make -j 4
    ```

5. Clone LVGL_F32C

    ```bash
    git clone https://github.com/matej-jurisic/lvgl_f32c.git
    ```

6. For further setup, simply run the script located in the project

    ```bash
    ./setup.sh
    ```

7. Add LVGL_F32C to your code

    ```c
    #include "lvgl_f32c.h"

    int main() {
        lv_f32c_init();

        lv_display_t *display = lv_display_create(fb_hdisp, fb_vdisp);
        lv_f32c_register_display(display);

        // Your LVGL code

        while (1)
        {
            lv_f32c_timer_handler();
            lv_f32c_msleep(5);
        }
    }
    ```

8. Compile the code (reconfigure Makefile if necessary)

    ```bash
    make
    ```

9. Flash the generated .bin file to the board

    ```bash
    ujprog -t -e <ime>.bin
    ```

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Date: 17/06/2025  
License: MIT  
Repository: [github.com/matej-jurisic/lvgl_f32c](https://github.com/matej-jurisic/lvgl_f32c)
