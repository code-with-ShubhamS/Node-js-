Both come in 4th layer (Transport Layer)

1. TCP (Transmission Control Protocol)
Connection-Oriented: Requires a connection to be established between sender and receiver before data transmission begins.

Reliable Data Transfer: Ensures data is delivered in order and without errors by using acknowledgments, retransmissions, and sequence numbers. 3 way handsake

Error Checking and Correction: Automatically handles errors and resends lost or corrupted packets.

Slower but Reliable: Due to error checking, acknowledgment, and retransmissions, TCP is slower but ensures reliability.

Use Cases:
Web browsing (HTTP/HTTPS)
Email (SMTP, IMAP, POP3)
File transfer (FTP)
Port 2pow 16

2. UDP (User Datagram Protocol)
Connectionless: Does not establish a connection before sending data; packets are sent independently.

Unreliable: Does not guarantee delivery, order, or error correction. If a packet is lost or arrives out of order, it is not corrected.

Faster but Less Reliable: UDP has low latency since it avoids the overhead of connection setup and error handling.

Use Cases:
Streaming media (audio/video)
Online gaming
VoIP (Voice over IP)
DNS queries

Port 2pow 16

# TCP and UDP protocol is based on Internet Protocol
# Choose TCP when data integrity and reliability are crucial.
# Choose UDP when speed and low latency are more important than reliability.