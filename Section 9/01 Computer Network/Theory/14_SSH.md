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


