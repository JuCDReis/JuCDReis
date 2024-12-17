const background = document.querySelector('.background');

function createSpheres() {
  const totalSpheres = 50; // Quantidade de esferas
  for (let i = 0; i < totalSpheres; i++) {
    const sphere = document.createElement('div');
    sphere.classList.add('sphere');
    
    // Tamanhos e posições aleatórias
    sphere.style.width = `${Math.random() * 8 + 4}px`;
    sphere.style.height = sphere.style.width; // Esferas proporcionais
    sphere.style.top = `${Math.random() * 100}%`;
    sphere.style.left = `${Math.random() * 100}%`;

    // Direção e intensidade do movimento
    sphere.style.setProperty('--dx', `${Math.random() * 100 - 50}`); // Movimento horizontal
    sphere.style.setProperty('--dy', `${Math.random() * 100 - 50}`); // Movimento vertical

    background.appendChild(sphere);
  }
}

createSpheres();
