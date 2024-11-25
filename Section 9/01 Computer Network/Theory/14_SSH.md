SSH (Secure Shell) is a cryptographic network protocol.It is primarily used to log into remote(other) machines and execute commands, but it also supports other services such as file transfers and port forwarding.

SSH used TCP to communicate with other machine

We can communicate with other machines using a loacl IP address in LAN or using Public ip address over a WAN.

Protocols like SCP (Secure Copy Protocol) and SFTP (SSH File Transfer Protocol) run over SSH for secure file transfer.

1. SSH server is required when you want to run server
2. SSH client is required when you want to access ssh server

# Common Use Cases of SSH:
1. Remote Administration:
Admins can securely log into servers to manage and maintain systems.

2. File Transfer:
Use SCP or SFTP for secure file exchanges.

3. Tunneling and Port Forwarding:
SSH can create encrypted tunnels for applications like databases or web servers.

4. Automation:
SSH is often used in scripts for automating server tasks.


using SCP we can transfer the whole file

# command to connect 
# In windows
setting -> system -> optional feature -> view feautures -> openssh-server

go to service -> openssh ssh server -> start (so we allowing firewall to access .so that ubuntu can send any data)

for exit logout command
# Ubuntu
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


# Generating a public and private key(use in AWS)
When we are connecting to server every time it is asking for password . So what we can do is we can simpliy generate a key and store our public key to another system in .ssh/authorization . <br/>
Next time if you connect to that server it will not ask for password.

# Steps to genrate a private and public key 
ssh-keygen <br/>
connect to server with password <br/>
inside server go to Desktop/.ssh/authorization open it <br/>
write the public key inside it (using nano command)<br/>
all done <br/>

# How this work
1. client generate two key one is public and other is private (C:\Users\DESKTOP\.ssh)

2. Than we connect to that system or server.
3. In that server inside .ssh/authorization file we can simply write our public key in it.
 # So
 After that whenever we try to connect to that server the server public key generate a simple text and encript it and send to clent . Than the client private key encript it and send that text to server. If the server get correct text than clent have server access.
