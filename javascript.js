function addtext()
{
    let text = document.querySelector('#text').value;
    let allert = document.querySelector('#emptyAlert');
    allert.style.visibility = 'hidden';
    if (text === '')
    {
        allert.style.visibility = 'visible';
    }
    else
    {
        document.querySelector('#yourtext').innerHTML = "You wrote: " + text
    }
    
}
function hiddenAllert()
{
    document.querySelector('#emptyAlert').style.visibility = 'hidden';
}
