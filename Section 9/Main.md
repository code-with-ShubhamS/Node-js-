# What is Network

Network is a connection of two or more devices . Use for sending receving data. Computer Network define how multiple devices are communicating with each other with the help of Network and some Protocols.

### Whay We use Networking

Networking helps for communicate between Frotend and backend

1. Efficient client server Interaction
2. TroubleShooting Network Issue
3. Implementing security
4. Scaling application => making multiple backends

# History of Internet

Earth is made up of two things Energy and matter
Their is a concept call Teleportate in which we can transfer any matter(physical Thing) throgh computer by converting it into energy.

1870 Graham Bell Discover communication through Telephone.

### How we communicating through Telephone.

First we convert our sound to electrical engergy than it is transfer on the other side we are converting electrical energy into Sound Energy.

Intranet => It is the network between Organization

cold war btw USA and RUSSIA

The U.S. Advanced Research Projects Agency Network (ARPANET) was the first public packet-switched computer network. It was first used in 1969 and finally decommissioned in 1989. ARPANET's main use was for academic and research purposes.

ARPANET was created to allow computers to communicate and share information over long distances. ARPANET was the first wide-area packet-switched network and one of the first to use the TCP/IP protocol suite

After this every organization started making their own intranet.

So we need somthing which connect all organization and enable communication btw them .Then TCP/IP procotocol is used .

### How We communicate through Mobile

Mobile communication is not fully wireless because the tower is communicating with each other through wire

Voice => digital signal => Electromagnetic waves => Tower => Destination Tower => Person receive call

### DNS

A Domain Name System (DNS) turns domain names into IP addresses, which allow browsers to get to websites and other internet resources. Every device on the internet has an IP address, which other devices can use to locate the device.

First all the ip address are store in the single file and that file send to every organization computer so if they want to acces something they can access it .

After that we make a system in which all the Ip address are store and if anyone want to access than it will first write that computer ip address and than write the Domain name to access that computer which they want to access.

At last we build dns with the talnet command so user can dirctly access the computer using talnet abc.com (DNS).

### WWW

Tim Berner lee developed browser(www) ,HTml and HTTP(use TCP/IP) for showing the file and hypertext in 1990s

1995 = js
1996 = css

# Important Network Devices

1. Host => Host are those devices which can send or receive data. Ex Laptop,Phone,tab,pc etc

2. Repeter => When the distance is too long than the Signals Become weak. So we use Reapeater to collect all the lose data and than send it to forward.

3. Hub => is a device which allow multiple computers to communicate with each other. Hub send signal to all the computer and the destination computer accept that signal

4. Switch => It is same as hub but it is smarter than hub because all the computer information are stored in the switch so it directly send the data to the destination computer.

5. Router => Router also allows us to connect mutilple devices through wire or wireless(wifi) and if one wifi want to communicate with another wifi than we use bridge.

6. Modem => convert the signals like converting digital signal to analog signal. Bring the internet signal into your home while router disrtribute the signal to your devices

7. Access Pointer => it is like a reapeater which enhance the signal .like in a big hotel their is one wifi than we use access pointer to enhancing the signal .Use wire

## Types of Network

1. Lan => ex schools, homes, offices, hospitals
2. Man => Computer networks that spread over a small city, or town
3. Wan => over a world

# IP Addresses

### Internet Protocol

The Internet Protocol (IP) is a protocol, or set of rules, for routing and addressing packets of data so that they can travel across networks and arrive at the correct destination

### Internet Protocol Address

Internet Protocol Adress provide address to every device which are connected to internet

IPv4 => 32 bits

192.86.1.2 = 11000000 01010110 00000001 00000010
00000000 00000000 00000000 00000000

### Subnet Mast Address

A subnet mask is a four-octet number used to identify the network ID portion and hostname of a 32-bit IP address

255.255.255.0 => 11111111 11111111 11111111 00000000
Here 1 denote the network id and 0 denote hostName

There are 2 pow 32 unique IP address are their
IP address are of two types Private and Public

Their is one mistake which is create by scientist .The scientest reserved to much ip address btw 127.0.0.0 to 127.255.255.255 for the local Host which doesn't required.

```
Wasted nearly 256×256×256 = 16,777,216 ip address.
```

### Mackaddress cannot be change .The Mac Adress Define when we create the Device

- Dynamic Ip address => which is assign by the network automatically
- Static Ip Address => We can assign ip address of our own to our device so whenever they connect with that network than that ip address is used

We know that every device has a unique ip address to connect through internet .But In a wifi a moderm has a unique public ip address and all the devices which are connnected through wifi mostly have private ip address in every house.

Public and private address increasae security and also reduce the use of ip address

Dont show public ip address
But we can show private ip address

Public ip address accessible over a network. we can make our server which is accessible over a network

We can make our own server with the help of public ip address or we can make our system a server.

When you want to search any website than the firstly request is send to the router and than router search for that website finding website ip address and than send to us.

Public IP addresses are typically assigned by your Internet Service Provider (ISP) from your modem.


# MAC ADDRESSES
To communicate or transfer data from one computer to another, we need an address. In computer networks, various types of addresses are introduced; each works at a different layer. A MAC address, which stands for Media Access Control Address, is a physical address that works at the Data Link Layer.

- MAC Addresses are unique 48-bit hardware numbers of a computer that are embedded into a network card (known as a Network Interface Card) during manufacturing.

- NOT DYNAMIC 

like wifi,bluetooth, ethernet the static address is already define at manufacturing time.


In firewall we can handle the incoming and outgoing request .We can block any request

## Device Identification:

Every device connected to a network has a unique MAC address, which allows devices to be identified on a local network.
Local Communication:

MAC addresses are used for communication within the same network segment or LAN (Local Area Network).
Devices on a local network communicate using MAC addresses, even if higher-level protocols (like IP) are in use.
Packet Delivery:

In a LAN, switches use MAC addresses to forward data packets to the correct destination device.
Network Security:

MAC addresses can be used in Access Control Lists (ACLs) or MAC filtering to permit or deny network access to specific devices.
Address Resolution:

The Address Resolution Protocol (ARP) maps IP addresses to MAC addresses, enabling devices to send data on a network using IP at Layer 3 and MAC addresses at Layer 2.

## Private IP Address Ranges (with Class and Usage)

| Range                         | Number of Addresses | Class   | Usage                                                       | Purpose                     |
| ----------------------------- | ------------------- | ------- | ----------------------------------------------------------- | --------------------------- |
| 10.0.0.0 - 10.255.255.255     | 16777216            | Class A | Large organizations and enterprises                         | Private networks (RFC 1918) |
| 172.16.0.0 - 172.31.255.255   | 1048576             | Class B | Medium-sized networks, such as ISPs and smaller enterprises | Private networks (RFC 1918) |
| 192.168.0.0 - 192.168.255.255 | 65536               | Class C | Home networks and small businesses                          | Private networks (RFC 1918) |

## Reserved IP Address Ranges (Min-Max Format)

| Range                             | Purpose                                   | Number of Addresses |
| --------------------------------- | ----------------------------------------- | ------------------- |
| 0.0.0.0 - 0.255.255.255           | Software, current network                 | 16777216            |
| 10.0.0.0 - 10.255.255.255         | Private networks (RFC 1918)               | 16777216            |
| 100.64.0.0 - 100.127.255.255      | Carrier-grade NAT (RFC 6598)              | 4194304             |
| 127.0.0.0 - 127.255.255.255       | Loopback                                  | 16777216            |
| 169.254.0.0 - 169.254.255.255     | Link-local                                | 65536               |
| 172.16.0.0 - 172.31.255.255       | Private networks (RFC 1918)               | 1048576             |
| 192.0.0.0 - 192.0.0.255           | IETF Protocol Assignments                 | 256                 |
| 192.0.2.0 - 192.0.2.255           | TEST-NET-1 for documentation and examples | 256                 |
| 192.88.99.0 - 192.88.99.255       | IPv6 to IPv4 relay (deprecated)           | 256                 |
| 192.168.0.0 - 192.168.255.255     | Private networks (RFC 1918)               | 65536               |
| 198.18.0.0 - 198.19.255.255       | Network benchmark testing                 | 131072              |
| 198.51.100.0 - 198.51.100.255     | TEST-NET-2 for documentation and examples | 256                 |
| 203.0.113.0 - 203.0.113.255       | TEST-NET-3 for documentation and examples | 256                 |
| 224.0.0.0 - 239.255.255.255       | Multicast                                 | 268435456           |
| 240.0.0.0 - 255.255.255.255       | Reserved for future use                   | 268435456           |
| 255.255.255.255 - 255.255.255.255 | Broadcast                                 | 1                   |

## Reserved IP Address Ranges

| Range              | Purpose                                   | Number of Addresses |
| ------------------ | ----------------------------------------- | ------------------- |
| 0.0.0.0/8          | Software, current network                 | 16777216            |
| 10.0.0.0/8         | Private networks (RFC 1918)               | 16777216            |
| 100.64.0.0/10      | Carrier-grade NAT (RFC 6598)              | 4194304             |
| 127.0.0.0/8        | Loopback                                  | 16777216            |
| 169.254.0.0/16     | Link-local                                | 65536               |
| 172.16.0.0/12      | Private networks (RFC 1918)               | 1048576             |
| 192.0.0.0/24       | IETF Protocol Assignments                 | 256                 |
| 192.0.2.0/24       | TEST-NET-1 for documentation and examples | 256                 |
| 192.88.99.0/24     | IPv6 to IPv4 relay (deprecated)           | 256                 |
| 192.168.0.0/16     | Private networks (RFC 1918)               | 65536               |
| 198.18.0.0/15      | Network benchmark testing                 | 131072              |
| 198.51.100.0/24    | TEST-NET-2 for documentation and examples | 256                 |
| 203.0.113.0/24     | TEST-NET-3 for documentation and examples | 256                 |
| 224.0.0.0/4        | Multicast                                 | 268435456           |
| 240.0.0.0/4        | Reserved for future use                   | 268435456           |
| 255.255.255.255/32 | Broadcast                                 | 1                   |

DNS => Domain Name System help us to find the ip address of the website easily

www.google.com.
This DNS is divided into four part

1. www => Sub-Domain
2. google => Second Level Domain
3. com => Top Level Domain
4. . => root level (This dot is end of com)

## DNS LOOKUP

google.com => DNS Resolver Server(it cache the address of server if not than) =>(Root Server) go to rootServer and search for .com .org .net address and return that address => (TLD Server) again go to another server and search for google.com and this server return server where we actualy have the google.com ip address => (Authority Name Server) where actually ip is stored

## DNS Hijacking at low level(means only in our computer)

using Host file which is in system32 => drive => etc => host

All IPv6 addresses are 128 bits long, written as 8 sections of 16 bits each in hexadecimal format

All Ipv6 adress are global(public) and unique but other person cannot access in their computer because router block the incoming req so if you want to access it you can simply off the router firewall

[2401:4900:1c61:5570:590b:c402:b1d7:ef2f]: 3000
[::1]: 3000

```
By Default server start on IPv6 but we can forcefully start our server on IPv4
```
## Network Interfaces define that in how many ways we can connect our device to the Internet 


We can run net in 4 ways
1. Wifi
2. Bluethoth
3. Ethernet 
4. USB
many more...

# Port 
Whenever client send the req on ip addreess and there are multiple project is running on that ip address than the port is used to identify the exact website a client want

HTTP default port is 80 behind the scene 80 port is used for http and https used port 443

 It allows the operating system to distinguish between different applications and services that use the same network connection.

 ### Why Ports Important
 1. Multiple Services on One IP Address
 2. Routing Data: When data arrives at a device, the port number in the packet tells the operating system which application or service should handle it.



## How Ports Work?
Example: A Web Browser Connecting to a Website
### Client Side:
1. A web browser (client) initiates a connection to a server using a specific port, typically port 80 (HTTP) or port 443 (HTTPS).
2. The operating system assigns a temporary source port (dynamic port) to the outgoing connection.
### Server Side:
1. The server listens on the specified port (e.g., 80 or 443) for incoming requests.
2. Upon receiving the request, it sends a response back to the client’s assigned source port.


# Ranges of Port

| **Range**           | **Category**           | **Description**                                                                 |
|----------------------|------------------------|---------------------------------------------------------------------------------|
| **0–1023**          | **Well-Known Ports**   | Reserved for system-level or well-known services. Requires elevated privileges. |
| **1024–49151**       | **Registered Ports**   | Registered for specific applications or services. Can be used without privileges. |
| **49152–65535**      | **Dynamic/Private Ports** | Used for ephemeral (temporary) connections, typically by client applications.   |

# Well Known Ports

| **Port Number** | **Protocol/Service**           | **Description**                                  |
|------------------|--------------------------------|--------------------------------------------------|
| **20, 21**       | FTP (File Transfer Protocol)  | Transfers files between systems.                |
| **22**           | SSH (Secure Shell)            | Secure remote login and command execution.      |
| **25**           | SMTP (Simple Mail Transfer Protocol) | Sending emails.                         |
| **53**           | DNS (Domain Name System)      | Resolves domain names to IP addresses.          |
| **80**           | HTTP                          | Serves web pages over an unencrypted connection.|
| **110**          | POP3                          | Retrieves emails from a mail server.            |
| **123**          | NTP (Network Time Protocol)   | Synchronizes clocks over a network.             |
| **143**          | IMAP                          | Accesses emails on a mail server.               |
| **443**          | HTTPS                         | Serves web pages over an encrypted connection.  |
| **445**          | SMB (Server Message Block)    | File sharing and network services.              |
| **67, 68**       | DHCP                          | Assigns IP addresses dynamically.               |
| **3306**         | MySQL                         | Database connections.                           |
| **5432**         | PostgreSQL                    | Database connections.                           |
| **3389**         | RDP (Remote Desktop Protocol) | Remote desktop access to a Windows machine.     |
| **8080**         | HTTP (Alternative)            | Commonly used for development or proxy services.|




# OSI MODEL
open systems interconnection (OSI) model is a conceptual model created by the International Organization for Standardization which enables diverse communication systems to communicate using standard protocols. In plain English, the OSI provides a standard for different computer systems to be able to communicate with each other.

Sender: Data flows from the application layer to the physical layer, with each layer adding its own header (encapsulation).

Receiver: Data flows from the physical layer to the application layer, with each layer removing its header (decapsulation).

### Practically we used TCP/IP Model 

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



# OSI vs TCP/IP Model Comparison

TCP model is same as osi model but the difference is TCP is more practical.

| **OSI Model Layer**       | **TCP/IP Model Layer**   | **Data Name (PDU)**    | **Description**                                                                 |
|---------------------------|--------------------------|-------------------------|---------------------------------------------------------------------------------|
| **Application (Layer 7)** | **Application**          | **Data**               | Provides services for end-user applications like HTTP, FTP, DNS, SMTP.         |
| **Presentation (Layer 6)**| **Application**          | **Data**               | Handles data format translation, encryption, and compression.                  |
| **Session (Layer 5)**     | **Application**          | **Data**               | Manages sessions (establishment, maintenance, and termination).                |
| **Transport (Layer 4)**   | **Transport**            | **Segment (TCP)** / **Datagram (UDP)** | Ensures reliable or fast delivery with protocols like TCP or UDP.              |
| **Network (Layer 3)**     | **Internet**             | **Packet**             | Handles logical addressing (IP addresses) and routes data between networks.    |
| **Data Link (Layer 2)**   | **Network Access**       | **Frame**              | Structures packets into frames, adds MAC addresses, and manages error checking.|
| **Physical (Layer 1)**    | **Network Access**       | **Bits**               | Transmits raw binary data as electrical, optical, or radio signals.            |




# TOPOLOGY 
Define how multiple node are connected together

1. Bus
2. Ring Topology
3. Star Topology
4. Mesh Topology
5. Hybrid Topology


## TCP vs UDP
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
### Choose TCP when data integrity and reliability are crucial.
### Choose UDP when speed and low latency are more important than reliability.

# SSH
SSH (Secure Shell) is a cryptographic network protocol.It is primarily used to log into remote(other) machines and execute commands, but it also supports other services such as file transfers and port forwarding.

SSH used TCP to communicate with other machine

We can communicate with other machines using a loacl IP address in LAN or using Public ip address over a WAN.

Protocols like SCP (Secure Copy Protocol) and SFTP (SSH File Transfer Protocol) run over SSH for secure file transfer.

1. SSH server is required when you want to run server
2. SSH client is required when you want to access ssh server

### Common Use Cases of SSH:
1. Remote Administration:
Admins can securely log into servers to manage and maintain systems.

2. File Transfer:
Use SCP or SFTP for secure file exchanges.

3. Tunneling and Port Forwarding:
SSH can create encrypted tunnels for applications like databases or web servers.

4. Automation:
SSH is often used in scripts for automating server tasks.


using SCP we can transfer the whole file

### command to connect 
### In windows
setting -> system -> optional feature -> view feautures -> openssh-server

go to service -> openssh ssh server -> start (so we allowing firewall to access .so that ubuntu can send any data)

for exit logout command
### Ubuntu
//Check if SSH is installed or not
ssh -V 
dpkg -l | grep openssh-client
dpkg -l | grep openssh-server

//SSH installation
sudo apt update
sudo apt install openssh-server

//Check SSH server status
sudo systemctl status ssh

//Start SSH server
sudo systemctl start ssh
sudo systemctl enable ssh

//Allow Firewall to connect SSH
sudo ufw allow ssh


### Generating a public and private key(use in AWS)
When we are connecting to server every time it is asking for password . So what we can do is we can simpliy generate a key and store our public key to another system in .ssh/authorization . <br/>
Next time if you connect to that server it will not ask for password.

### Steps to genrate a private and public key 
ssh-keygen <br/>
connect to server with password <br/>
inside server go to Desktop/.ssh/authorization open it <br/>
write the public key inside it (using nano command)<br/>
all done <br/>

### How this work
1. client generate two key one is public and other is private (C:\Users\DESKTOP\.ssh)

2. Than we connect to that system or server.
3. In that server inside .ssh/authorization file we can simply write our public key in it.
 ## So
 After that whenever we try to connect to that server the server public key generate a simple text and encript it and send to clent . Than the client private key encript it and send that text to server. If the server get correct text than clent have server access.


# Networking Topics and Commands

## Topics
- **Tunneling:** A method of encapsulating data packets to securely transmit them across networks.
- **VPN (Virtual Private Network):** A secure private network over the internet that encrypts data and hides user identity.
- **NSP (Network Service Provider) or ISP (Internet Service Provider):** Entities that provide internet connectivity to individuals or organizations.
- **PDU (Protocol Data Unit):** The smallest unit of data exchanged between entities in a specific network layer.
- **Dark Web:** A part of the internet that is not indexed by standard search engines and requires specialized software to access.
- **ICMP (Internet Control Message Protocol):** A protocol used for network diagnostics and error reporting.
- **Networking Terms:**
  - **Bandwidth:** The maximum capacity of a network to transfer data.
  - **Throughput:** The amount of data transmitted over a network in a specific period.
  - **Latency:** The time it takes for a data packet to travel from the source to the destination.
  - **WLAN (Wireless Local Area Network):** A wireless network used to connect devices within a limited area.

## Commands
- **Ping:** A command used to test connectivity between two devices by sending ICMP echo requests.
- **Traceroute:** A command that shows the path packets take to reach a destination across networks.
- **Curl:** A tool used to transfer data from or to a server using various network protocols.
- **Wget:** A command-line utility used to download files from the web using HTTP, HTTPS, and FTP.
