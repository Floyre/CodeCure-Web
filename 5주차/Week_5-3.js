const year = parseInt(prompt("Enter Year : "));
if (year % 4 == 0){
    if ((year % 100 != 0) || (year % 400 == 0)){
        document.write(year+' is leap year.');
        console.log(year+' is leap year.');
    }
    else
    {
        document.write(year+' is not leap year.');
        console.log(year+' is not leap year.');
    }
}
else
{
    document.write(year+' is not leap year.');
    console.log(year+' is not leap year.');
}