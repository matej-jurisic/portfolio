# SDN Zero Trust Network with IMUNES

**Implementation of a Zero Trust Network architecture inside the IMUNES network emulator using SDN principles and a Ryu controller.**

[![GitHub Repo](https://img.shields.io/badge/GitHub--blue?logo=github)](https://github.com/matej-jurisic/sdn-ztn-imunes)

---

## Introduction

This project implements a **Zero Trust Network (ZTN)** architecture within the **IMUNES** network emulator using **SDN (Software-Defined Networking)** principles. The system is based on dynamic network policy management and user authorization through a Ryu SDN controller and a Policy dashboard that communicates with the network infrastructure in real time.

---

## Features / Functionality

-   **Zero Trust policies**: Resource access is controlled per user and device — every access request must be explicitly authorized.
-   **SDN traffic management**: Open vSwitch nodes are managed by a central Ryu controller that dynamically installs flow rules based on active policies.
-   **802.1X authentication**: External clients access the network through a hostapd access point and a RADIUS server.
-   **Policy Manager interface**: Web UI for managing users, devices, resources, and access rules in real time.
-   **Dynamic rule updates**: Changing a policy in the Policy Manager automatically notifies the SDN controller, which propagates the change to all relevant switches.

---

## Technologies / Tools Used

-   **Network emulation**: IMUNES
-   **SDN**: Open vSwitch, Ryu controller (Python), OpenFlow 1.3
-   **Authentication**: hostapd, FreeRADIUS, 802.1X
-   **Backend (Policy API)**: .NET / ASP.NET Core
-   **Frontend (Policy Manager)**: Vite (port 5173)
-   **Infrastructure**: Docker, DHCP

---

## Group Project

This project was built as a group project at FER together with Danijel Živković, Ivona Tomašić, Jan Komerički, Karlo Baljak and Lovro Kekez. 

### My Responsibilities

- Policy API and Policy Manager design and implementation
- Ryu controller - pathfinding and flow installation on initial requests
- DHCP
- hostapd <-> policy-api communication
- dhcp <-> policy-api communication
- Connecting all the parts of the system to work together

---

## Network Topology

![Network topology overview](topology.png)

| Group | Nodes | Role |
| --- | --- | --- |
| **Internal PCs** | pc1, pc2, pc3, pc6, pc7 | Internal clients with static addresses |
| **External PCs** | pc8, pc9 | External clients with 802.1X auth and DHCP addresses |
| **Bridge** | pc10 | Connects the hostapd access point with external clients |
| **SDN switches** | sdn_sw1, sdn_sw2, sdn_sw3 | Open vSwitch, managed by the SDN controller |
| **SDN controller** | sdn_controller | Central flow rule management |
| **Traditional LAN switch** | switch1 | Layer 2 communication in the LAN segment |
| **DHCP server** | dhcp | IP address assignment |
| **RADIUS server** | radius | 802.1X user authentication |
| **Policy / API server** | policy_api | Network policy management |
| **Router / Hostapd AP** | hostapd_r | Access point and DHCP relay |
| **External / NAT gateway** | ext1 | Access to the Policy API from the host system |

---

## Installation / Setup

### Prerequisites

Build Docker images in the project root directory:

```bash
sudo docker build -f Dockerfile.controller -t imunes/sdn:controller .
sudo docker build -f Dockerfile.hostapd -t imunes/sdn:hostapd .
sudo docker build -f Dockerfile.openvs -t imunes/sdn:openvs .
sudo docker build -f Dockerfile.device -t imunes/sdn:device .
sudo docker build -f Dockerfile.radius -t imunes/sdn:radius .
sudo docker build -f Dockerfile.policy -t imunes/sdn:policy .
```

Verify the `openvswitch` kernel module is loaded:

```bash
lsmod | grep openvswitch
```

If the output is empty, load the module:

```bash
sudo modprobe openvswitch
echo openvswitch | sudo tee /etc/modules-load.d/openvswitch.conf
```

Start the simulation:

```bash
sudo imunes simple_sdn.imn
```

### Running

**1. Start the SDN controller** on the `sdn_controller` node:

```bash
source ryu-env/bin/activate
ryu-manager main.py
```

**2. Authenticate external clients** on nodes `pc8` and `pc9`:

```bash
# pc8
/authenticate.sh testuser testing123

# pc9
/authenticate.sh newuser newuser123
```

The script sequentially performs: hostapd authentication, DHCP address assignment, and registration with the Policy API.

### Policy Manager

The web UI available on port **5173** can be accessed from the host system if the `policy` node's IP (eth1) is routable. The interface allows you to:

- View and manage users, devices, resources, and policies
- Add new entities
- Modify existing policies (allow/deny) with immediate effect on network traffic

![Policy API web interface](policies.png)

Typical workflow for granting new access:
1. **Users** — add a user
2. **Devices** — add a device and assign the user to it
3. **Resources** — add a resource
4. **Devices** → "Assign to Resource" — assign the resource to the device hosting it
5. **Policies** — create a policy between the user and the resource

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)

Date: 17/06/2025  
License: MIT  
Repository: [github.com/matej-jurisic/](https://github.com/matej-jurisic/)
