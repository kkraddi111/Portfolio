export function initMouseEffect(): () => void {
  let frameId: number | null = null;
  let mouseX = 0;
  let mouseY = 0;

  const handleMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  const updateElements = () => {
    const cards = document.querySelectorAll('.section-hover, .hero-gradient');
    cards.forEach((card) => {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = ((mouseX - rect.left) / rect.width) * 100;
      const y = ((mouseY - rect.top) / rect.height) * 100;
      
      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        (card as HTMLElement).style.setProperty('--x', `${x}%`);
        (card as HTMLElement).style.setProperty('--y', `${y}%`);
      }
    });
    frameId = requestAnimationFrame(updateElements);
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove);
    frameId = requestAnimationFrame(updateElements);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }
  
  return () => {};
}
