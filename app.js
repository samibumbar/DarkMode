const moonPath =
  'M15.5 27.5C15.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15.5 12.3122 15.5 27.5Z';
const sunPath =
  'M49 25.5C49 39.5833 38.031 51 24.5 51C10.969 51 0 39.5833 0 25.5C0 11.4167 10.969 0 24.5 0C38.031 0 49 11.4167 49 25.5Z';

const darkMode = document.querySelector('#darkMode');

let toggle = false;

darkMode.addEventListener('click', () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: 'easeOutExpo',
  });
  timeline
    .add({
      targets: '.sun',
      d: [{ value: toggle ? sunPath : moonPath }],
    })
    .add(
      {
        targets: '#darkMode',
        rotate: 320,
      },
      '-=350'
    )
    .add(
      {
        targets: 'section',
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color: toggle ? 'rgb(22,22,22)' : 'rgb(255,255,255)',
      },
      '-= 700'
    );
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
