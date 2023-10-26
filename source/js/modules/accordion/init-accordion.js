import {Accordions} from './accordions';

const accordionParent = document.querySelector('.accordion');
let accordions;

const breakpoint = window.matchMedia('(max-width: 770px)');

const breakpointChecker = () => {
  if (breakpoint.matches) {
    accordions.closeAllAccordion(accordionParent);
  } else {
    accordions.fullUpdate();
  }
};

breakpoint.addListener(breakpointChecker);

const initAccordions = () => {
  accordions = new Accordions();
  // Используйте в разработке экспортируемую переменную accordions, window сделан для бэкэнда
  window.accordions = accordions;
};

export {initAccordions, accordions};
