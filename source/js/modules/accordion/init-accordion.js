import {Accordions} from './accordions';

const accordionParent = document.querySelector('.accordion');
let accordions;

const breakpoint = window.matchMedia('(max-width: 769px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    accordions.closeAllAccordion(accordionParent);
  } else {
    accordions.fullUpdate();
  }
};

const initAccordions = () => {
  accordions = new Accordions();
  breakpoint.addListener(breakpointChecker);
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
