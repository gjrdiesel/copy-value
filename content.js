var content = document.querySelector('#mainContainer_hideOnMobile > table > tbody > tr > td > div > table > tbody > tr > td > div > table > tbody > tr:nth-child(4) > td > table > tbody > tr > td:nth-child(3) > div > table > tbody > tr:nth-child(2) > td > div > table > tbody > tr > td:nth-child(2) > div');

var d = document.createElement('textarea');

document.body.appendChild(d);

d.value = content.innerHTML;
d.select(); 

document.execCommand('copy')