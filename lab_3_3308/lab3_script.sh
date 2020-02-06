#!/bin/bash
# Authors : Will Huynh and Calista Nguyen
# Date: 2/5/20

# Problem 1: the user will enter a file name and the regular expression
echo "Enter a file name:"
read fileName
echo "Enter a regular expression:"
read RegEx
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
#Problem 2: output the number of phone numbers in the text document
grep $RegEx $fileName
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

#Problem 3: Output the number of phone numbers in file
number=$(grep -c '[0-9]\{3\}\-[0-9]\{3\}\-[0-9]\{4\}' $fileName)
#[0-9] will look for numbers up to 9, {3} specifies how many to look for
echo "The number of phone numbers in this text file is: $number"

echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

#Problem 4: Counting the number of emails in the file, list all phone numbers that have the 303 area code and store them in text files


#Problem 4.1: Count the number of emails in the file
email=$(grep -c '^[a-zA-Z0-9._]*@[a-zA-Z0-9]*.[a-zA-Z0-9]*' $fileName)
#^ means to assert the position at start
#* means quantifier, matches everything as many times as needed
#[a-z],[A-Z],[0-9] characters in these ranges
#._ case sensitive
#@ matches this character
echo "Number of emails: $email"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"



#Problem 4.2: List all the phone numbers that have the area code 303


n=$(grep -o '^303-[0-9]*-[0-9]*' $fileName)
#^303 will match the start of that quantity
echo "Here is a list of the phone numbers in the 303 area code: 
$n"

#Problem 4.3: Store a list of emails from geocitities.com to a file named
# "email_results.txt"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
grep ^[a-zA-Z0-9._]*@geocities.com $fileName >> email_results.txt
echo "This is the end of the problems, final problem is outputed to a text file
called: email_results.txt"
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"





