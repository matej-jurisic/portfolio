# Adaptation of LVGL Graphics Library for ULX3S Board using F32C Processor

This project involves the adaptation of the LVGL graphics library for the ULX3S board, utilizing the F32C processor, with the aim of facilitating the creation of graphical interfaces on the ULX3S board. An API named `lvgl_f32c.h` has been developed, enabling simple integration of the LVGL library into user applications through three straightforward steps: calling an initialization function at the beginning of the program, registering an LVGL display, and periodically calling a management function.

## Key Features and Achieved Functionalities

-   **LVGL Component Display**: The display of LVGL components has been achieved and easily tested with existing examples and demo applications available in the LVGL library.
-   **Timer Interrupt Routine Usage**: An interrupt routine is used as an optimization to update the internal timer value. This avoids wasting processor resources and eliminates the need for busy-waiting.
-   **Performance Monitoring**: Key application performance data is available, such as average screen refresh rate, memory usage, and time to first draw.
-   **Three Drawing Buffers**: To achieve flicker-free rendering with DMA transfer, two buffers available in F32C libraries are used, along with an additional LVGL-generated buffer.
-   **Image Loading from SD Card**: Conversion of images to the appropriate format, loading them from an SD card, and displaying them on the screen has been enabled.

## Used Hardware and Software Environment Components

The project is built on the open-source ULX3S hardware platform and uses the F32C processor core.

-   **ULX3S Board**: The ULX3S is an open-source FPGA board equipped with a Lattice Semiconductor ECP5 series chip. Radiona.org and FER are responsible for the board's development, and today it is one of the best and most sought-after boards on the FPGA market.
-   **F32C Processor**: The F32C is an open-source 32-bit processor core that can execute subsets of RISC-V or MIPS instruction sets.
-   **LVGL Library**: LVGL is a free and open-source graphics library written in C language. It enables the display of a large number of interactive and stylized GUI components and is used for building graphical interfaces on microcontrollers. Version 9.3.0 is used for this project.
-   **GPDI Video Output**: ULX3S provides digital video output via a GPDI connector. GPDI is compatible to some extent with the TMDS standard used for HDMI transmission. The GDPI connector has 4 differential pairs for video data and 1 for pixel clock. For display, a buffer in a specific part of SDRAM memory, which is 32MB in size, is used. The video controller reads data from this buffer and sends it at a speed that depends on the pixel clock frequency. The read pixel data sequence is converted into a TMDS signal, which includes 8b/10b encoding where 8-bit data is encoded into a 10-bit message. Synchronization signals that control resolution and screen refresh are also generated and sent.
-   **DMA Transfer**: DMA transfer begins by writing parameters such as source data address and destination address into a memory-mapped register. The DMA controller takes control of the memory bus and begins data transfer. Specifically in this project, DMA is used to transfer data from the buffer where LVGL draws elements directly to the display buffer, which the video controller reads and transmits. This mode of operation significantly speeds up the data transfer process from the drawing buffer to the video buffer.
-   **Interrupt Routine**: Interrupts are asynchronous events in which a process temporarily hands control to an interrupt routine. This allows the system to react to external events without constant polling by the processor. In the MIPS architecture, coprocessor 0 (CPO), also known as the system management coprocessor, is crucial for managing system-level functions including interrupts. Software communicates with CPO registers using special commands such as `mfco` for reading and `mtco` for writing. In this project, the most important CPO registers are COUNT and COMPARE. An interrupt is generated when the COUNT and COMPARE values are equal.
-   **SD Card**: For communication with the SD card, the SPI protocol is used. It uses 4 different signal lines: SCLK (serial clock), MOSI (master out slave in), MISO (master in slave out), CS (chip select). The F32C is responsible for generating the clock signal and managing the CS line. Communication uses commands defined by 6-byte long structures. The process includes initial SD card initialization and reading images from it.
-   **RGB565 Color Format**: The RGB565 color format is used. This means that every image needs to be converted to the appropriate binary format before display. Due to the lack of reliable online tools for this task, a script for converting `.png` images to the corresponding `.bin` format has been added to the source code of this work.

## Limitations and Future Upgrades

Despite the achieved results, there are certain limitations that can be topics for future upgrades:

-   **Various Input Methods**: Currently, input via the 7 buttons available on the ULX3S board is supported. This leaves room for future expansion to more input methods, such as touchscreens, keyboards, and other input devices.
-   **Image Conversion Script Expansion**: The script could be expanded to support more input formats and include some form of graphical display and allow defining the dimensions of the generated image.
-   **Performance Optimization for Complex Rendering**: More complex renderings containing a large number of animated components resulted in a lower number of renders (7-15 FPS at 720p), which can be a topic for further research and attempts to achieve better performance.

## Installation and Running

The project is available in the GitHub repository at [GitHub](https://github.com/matej-jurisic/lvgl_f32c)1.

To download and set up the project:

1.  Clone the repository: `git clone https://github.com/matej-jurisic/lvgl_f32c.git`.
2.  Run the setup script: `./setup.sh`. The script will download LVGL version 9.3.0, apply a patch that resolves several errors arising from unused variables in the LVGL source code, and then run the command to compile the code, creating an `example.bin` file ready to run on the ULX3S board.
3.  Compile the program: `make`. This command starts the process defined in the `Makefile`.
4.  Transfer the program to the board: `ujprog -t -e example.bin`.

The project includes demo applications `example_arc.c` for displaying simple animated objects and `example_image.c` for loading images from an SD card.
