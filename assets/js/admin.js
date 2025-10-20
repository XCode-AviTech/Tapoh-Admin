// Live Analysis Simulation
setInterval(() => {
    document.getElementById('activeVisitors').textContent = Math.floor(Math.random() * 50) + 1;
    document.getElementById('pagesViewed').textContent = Math.floor(Math.random() * 100) + 10;
}, 2000);