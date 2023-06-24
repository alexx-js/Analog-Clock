function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
  
    const hourHand = document.getElementById("hourHand");
    const minuteHand = document.getElementById("minuteHand");
    const secondHand = document.getElementById("secondHand");
  
    const hourRotation = 30 * hour + minute / 2;
    const minuteRotation = 6 * minute + second / 10;
    const secondRotation = 6 * second;
  
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);
  
  // Inicializar el reloj cuando se carga la página
  window.addEventListener("load", updateClock);
  