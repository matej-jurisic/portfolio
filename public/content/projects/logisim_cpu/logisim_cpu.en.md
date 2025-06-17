# logisim_cpu

**8-bit CPU design in Logisim**

[![GitHub Repo](https://img.shields.io/badge/GitHub-logisim__cpu-blue?logo=github)](https://github.com/matej-jurisic/logisim_cpu)

---

## Overview

This project contains the design of a simple processor using basic logic components available in Logisim. The processor supports 81 different intstructions and can execute programs such as prime factorization and Fibonacci sequence calculation. The goal of the project was to understand the fundamentals of processor operation at the lowest level.

---

## Features

-   **Harvard architecture**: different instruction and data lengths
-   **8-bit instructions**: 19 memory, 48 arithmetic, 16 control
-   **24-bit addressing**: 2^24 addresses of 32-bit RAM registers (64 MB memory)
-   **32-bit data**: numbers up to 2^32 - 1
-   **Processor registers**: R0, R1, R2, R3, and A

---

## Technologies / Tools Used

-   **Processor Design**: Logisim
-   **Processor Programming**: Notepad and bit-by-bit code writing

---

## Instalacija / Pokretanje

As part of the project, a cpu.circ file is available and needs to be opened in Logisim. Machine code can be loaded from an external file or manually entered into the program memory (ROM).

---

## Processor Layout

The image shows a block diagram of the processor architecture. We can see the connectivity of program memory (ROM), data memory (RAM), program counter (PC), control unit, and the set of registers (R0-R3, ACC).

![](https://i.imgur.com/eRM9FL7.png)

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Date: 17/06/2025  
License: MIT  
Repository: [github.com/matej-jurisic/logisim_cpu](https://github.com/matej-jurisic/logisim_cpu)
