# LVGL Adaptation for ULX3S (F32C)

## Introduction

This project presents an adaptation of the LVGL graphics library for the ULX3S board using the F32C processor. The goal is to simplify the creation of graphical interfaces by defining hardware-specific LVGL driver functions. The result is the `lvgl_f32c.h` API, which enables the use of the LVGL library in 3 simple steps.

## Achieved Functionality

-   Display of LVGL components
-   Timer interrupt routine usage
-   Performance monitoring (fps, memory, draw time)
-   Triple buffering with DMA
-   Image loading from SD card

## Limitations

-   Only 7 physical buttons on the ULX3S are currently supported
-   Images must be converted to RGB565 `.bin` format using a script

## Used Components

-   **GPDI video output**: HDMI-compatible output using SDRAM buffer
-   **DMA transfer**: Efficient flicker-free framebuffer transfer
-   **Interrupt routine**: Accurate 1ms tick required by LVGL
-   **SD card**: SPI communication and `.bin` image reading

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

## Performance

Using `lv_demo_benchmark()`, the following results were achieved:

-   36 fps (average)
-   98% CPU utilization at 720p resolution

## Installation

```bash
git clone https://github.com/matej-jurisic/lvgl_f32c.git
cd lvgl_f32c
./setup.sh
```

## Demo

### Animation Example

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

### Image Loading from SD Card

```c
lv_f32c_init();
lv_f32c_init_sd_card();
lv_display_t *display = lv_display_create(fb_hdisp, fb_vdisp);
lv_f32c_register_display(display);
lv_f32c_init_image_dsc(&image_dsc, 407, 246);
lv_obj_t *image = lv_f32c_load_image(lv_screen_active(), &image_dsc, "image.bin");
lv_obj_center(image);
```

## Conclusion

LVGL was successfully adapted for the ULX3S using the F32C processor. The project enables the development of graphical interfaces without requiring deep knowledge of low-level hardware implementation. Core functionality has been achieved, and the groundwork has been laid for future improvements.

📁 GitHub: [github.com/matej-jurisic/lvgl_f32c](https://github.com/matej-jurisic/lvgl_f32c)
