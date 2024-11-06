touch => command is used to make files 
mkdir => used to make directory 
cp => copy the file 
cp file_Path_Which_We_Are_Copy filepath_Where_we_putFile  

mv => move the file(cut and paste) 
rm => used to remove the file not directory
rmdir => remove only empty directory permanent

rm -r DirectoryName => used to delete all the files recursively which is inside the folder 



for i in {1..100}
do
  # Create a file with the name file1.txt, file2.txt, ..., file100.txt
  touch "file$i.txt"
done