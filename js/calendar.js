var date = new Date(); 
document.getElementById('dia-calendar').innerText = date.getDate();
document.getElementById('mes-calendar').innerText = date.toLocaleString('ca-ES', { month: 'long' });
document.getElementById('any-calendar').innerText = date.getFullYear();