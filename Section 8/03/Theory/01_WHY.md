# Why Streams are so fast 
1. When we write data using writeFile,writeFileSync,append method than these method first open the file and write data and closed file agian it work as a loop that why these are slow .
2. These Method directly write data in disk 

1. Where Streams open file at once and write all the data and than closed the file when all data is written sucessfully
2. Stream use buffer(Ram) to write the data that why it is very fast 