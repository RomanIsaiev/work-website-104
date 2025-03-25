import InfiniteMarquee from 'vanilla-infinite-marquee';

new InfiniteMarquee({
  element: '.marquee-container',
  speed: 100000,
  smoothEdges: false,
  direction: 'right',
  gap: '10px',
  fullContainer: false,
  spaceBetween: '20px',
});
