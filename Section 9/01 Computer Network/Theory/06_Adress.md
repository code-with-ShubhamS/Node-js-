DNS => Domain Name System help us to find the ip address of the website easily

www.google.com.
This DNS is divided into four part 

1. www => Sub-Domain
2. google => Second Level Domain
3. com => Top Level Domain
4. . => root level (This dot is end of com)



# DNS LOOKUP
google.com => DNS Resolver Server(it cache the address of server if not than) =>(Root Server) go to rootServer and search for .com .org .net address and return that address => (TLD Server) again go to another server and search for google.com and this server return server where we actualy have the google.com ip address => (Authority Name Server) where actually ip is stored


# DNS Hijacking at low level(means only in our computer)
using Host file which is in system32 => drive => etc => host