<title>Firmware Development for UW Orbital CubeSat | Portfolio of Artyom Gabtraupov</title>

# Project Overview

As part of the **Firmware Design Team** for UW Orbital, I contributed to the development of embedded software for a 3U CubeSat participating in the **Canadian Satellite Design Challenge (CSDC)**. The CubeSat’s mission includes a "Selfie-Sat" payload and an innovative laser beacon for post-quantum computing key distribution. My role focused on developing low-level firmware to ensure the satellite's subsystems operate smoothly and communicate effectively with ground stations.

This project helped me deepen my understanding of **embedded systems**, **real-time operating systems (RTOS)**, and **low-level microcontroller programming** while directly contributing to CubeSat technology that could be launched into orbit in the near future.

# Technologies Used

**C Programming**: For writing low-level firmware.  
**FreeRTOS**: A real-time operating system used to manage multiple tasks on the CubeSat’s RM46 microcontroller.  
**I2C Protocol**: Used for interfacing with various sensors, such as the LM75BD temperature sensor.  
**Git & GitHub**: Version control and collaboration tools to manage the project codebase.

<div>
  <picture src='https://i.cbc.ca/1.6386921.1647460083!/fileImage/httpImage/image.JPG_gen/derivatives/original_620/uw-orbital-team.JPG' alt='UW Orbital CubeSat' width='1200' height='800'></picture>
</div>

# Key Features

- **Temperature Sensor Driver**: Developed a driver to interface with the LM75BD temperature sensor using the I2C protocol, enabling the satellite to monitor onboard temperature conditions.
- **Thermal Management System**: Implemented a thermal management task in **FreeRTOS** that periodically measures satellite temperature and sends telemetry data back to the ground station.
- **OS Interrupt Handling**: Designed an overtemperature shutdown (OS) interrupt handler to manage the satellite’s response when critical temperature thresholds are exceeded.
- **Ground Station Communication**: Worked on firmware that facilitates seamless communication between the satellite and the ground station, ensuring the transmission of telemetry data.

# My Contribution

**Peripheral Driver Development**: Created a temperature sensor driver to interact with the LM75BD sensor using I2C communication, allowing the CubeSat to collect and report real-time temperature data.  
**Thermal Management Task**: Implemented a FreeRTOS task to handle temperature monitoring and trigger overtemperature events based on predefined thresholds.  
**Overtemperature Interrupt Handling**: Developed interrupt routines to manage critical thermal events and ensure the satellite’s safe operation.  
**Ground Station Firmware**: Contributed to the development of the CubeSat’s communication firmware to exchange data between the satellite and ground station.

# Outcome

By contributing to UW Orbital's CubeSat mission, I gained hands-on experience with real-time embedded systems and space technology. This experience will play a critical role in the CubeSat’s mission to pass launch readiness evaluations, potentially leading to its successful deployment into orbit.
