import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initAccordions, accordions} from './modules/accordion/init-accordion';
import {initPhoneMask} from './utils/phone-mask';

// ---------------------------------
const accordionParent = document.querySelector('.accordion');
const aboutBlock = document.querySelector('.about');
const aboutHiddenText = aboutBlock.querySelectorAll('.is-hidden');
const aboutButton = aboutBlock.querySelector('.about__button');
const mobileWidthOnlyHidden = aboutBlock.querySelector('.mobile-width-hidden');
const accordionButtons = document.querySelectorAll('[data-accordion="button"]');

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const tabletBreakpoint = window.matchMedia('(max-width: 767px)');

  const accordionsBreakpointChecker = () => {
    if (tabletBreakpoint.matches) {
      accordions.closeAllAccordion(accordionParent);
    } else {
      accordions.fullUpdate();
    }
  };

  const showTabletText = () => {
    if (tabletBreakpoint.matches) {
      mobileWidthOnlyHidden.classList.add('mobile-width-hidden');
    } else {
      mobileWidthOnlyHidden.classList.remove('mobile-width-hidden');
    }
  };

  const removeTabIndex = () => {
    accordionButtons.forEach((button) => {
      if (tabletBreakpoint.matches) {
        button.removeAttribute('tabIndex');
      } else {
        button.setAttribute('tabIndex', -1);
      }
    });
  };

  const showText = (btn, content) => {
    btn.addEventListener('click', () => {
      if (content.classList.contains('is-hidden')) {
        content.classList.remove('is-hidden');
        mobileWidthOnlyHidden.classList.remove('mobile-width-hidden');
        btn.textContent = 'Свернуть';
      } else {
        content.classList.add('is-hidden');
        mobileWidthOnlyHidden.classList.add('mobile-width-hidden');
        btn.textContent = 'Подробнее';
      }
    });
  };

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    tabletBreakpoint.addListener(showTabletText);
    tabletBreakpoint.addListener(accordionsBreakpointChecker);
    tabletBreakpoint.addListener(removeTabIndex);
    initPhoneMask();
    aboutHiddenText.forEach((text) => {
      showText(aboutButton, text);
    });
    const form = new Form();
    window.form = form;
    form.init();
    initModals();
    initAccordions();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
