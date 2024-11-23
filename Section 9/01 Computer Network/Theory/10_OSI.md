# OSI MODEL
open systems interconnection (OSI) model is a conceptual model created by the International Organization for Standardization which enables diverse communication systems to communicate using standard protocols. In plain English, the OSI provides a standard for different computer systems to be able to communicate with each other.

Sender: Data flows from the application layer to the physical layer, with each layer adding its own header (encapsulation).

Receiver: Data flows from the physical layer to the application layer, with each layer removing its header (decapsulation).

# Practically we used TCP/IP Model 

7. Application Layer
Purpose: Provides the interface between the network and user applications.
Human Readable data.
Functions:
Enables applications to access network services (e.g., email, file transfer, web browsing).
Defines protocols for specific services like HTTP, FTP, SMTP, DNS.
Facilitates user authentication and authorization.

6. Presentation Layer
Purpose: Ensures data is in a usable format for applications and provides encryption and compression.
Functions:
Converts data formats (e.g., EBCDIC to ASCII).
Encrypts data for security.
Compresses data to reduce size.
Handles serialization and data representation.

5. Session Layer
Purpose: Manages and controls connections (sessions) between devices.
Functions:
Establishes, maintains, and terminates communication sessions.
Synchronizes data streams.
Manages authentication and session restoration in case of interruptions.

4. Transport Layer
Purpose: Ensures reliable and error-free data transmission between devices.Inside  segment we define port address
Functions:
Provides end-to-end communication using protocols like TCP (reliable) and UDP (unreliable).
Handles segmentation and reassembly of data.
Implements flow control to prevent overwhelming the receiver.
Ensures error detection and retransmission in case of failure.

3. Network Layer
Purpose: Handles data routing, addressing, and packet forwarding across networks.
Functions:
Assigns logical addresses (e.g., IP addresses).
Determines the best path for data to travel between devices.
Splits data into packets.
Manages congestion control and error handling for routing.
Devices: Routers.

2. Data Link Layer
Purpose: Provides error detection and correction, framing, and reliable data transfer between nodes on the same network.
Functions:
Organizes raw bits from the physical layer into frames (data packets).
Manages Medium Access Control (MAC) and Logical Link Control (LLC).
Handles physical addressing (e.g., MAC addresses) assigning mac address both source and destination.
Detects and corrects errors in frames.
Devices: Switches, bridges.

1. Physical Layer
Purpose: Deals with the physical transmission of raw binary data (bits) over a physical medium.
Functions:
Specifies hardware components (e.g., cables, switches, connectors).
Defines data transmission methods (e.g., electrical signals, light pulses, or radio waves).
Handles bit synchronization, data rate, and transmission mode (simplex, half-duplex, full-duplex).












