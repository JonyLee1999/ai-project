'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // 移除所有页面和导航的active类
    pages.forEach(page => page.classList.remove("active"));
    navigationLinks.forEach(link => link.classList.remove("active"));
    
    // 找到对应的页面并激活
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        this.classList.add("active");
        
        // 平滑滚动到顶部
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        break;
      }
    }
  });
}

// 确保初始页面显示
document.addEventListener('DOMContentLoaded', () => {
  // 默认显示第一个页面
  if (pages.length > 0) {
    pages[0].classList.add("active");
    if (navigationLinks.length > 0) {
      navigationLinks[0].classList.add("active");
    }
  }
});

// 页面切换逻辑
document.addEventListener('DOMContentLoaded', () => {
  // 获取所有导航链接和内容区域
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('.section');

  // 初始化显示第一个部分
  sections[0].style.display = 'block';
  setTimeout(() => {
    sections[0].classList.add('animate-fade-in');
  }, 100);

  // 添加导航点击事件
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      // 更新导航状态
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // 切换显示内容
      sections.forEach(section => {
        section.style.display = 'none';
        section.classList.remove('animate-fade-in');
      });

      // 显示选中的部分
      sections[index].style.display = 'block';
      // 触发重排以确保动画生效
      void sections[index].offsetWidth;
      sections[index].classList.add('animate-fade-in');

      // 平滑滚动到顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });

  // 添加滚动动画
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        // 如果是卡片，添加额外的动画延迟
        if (entry.target.classList.contains('card')) {
          entry.target.style.transitionDelay = '0.1s';
        }
      }
    });
  }, observerOptions);

  // 观察所有卡片和部分
  document.querySelectorAll('.card, .section').forEach(element => {
    observer.observe(element);
  });

  // 导航栏滚动效果
  let lastScrollTop = 0;
  let isScrolling = false;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 60) {
          // 向下滚动
          navbar.style.transform = 'translateY(-100%)';
        } else {
          // 向上滚动
          navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // 表单提交处理
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 获取表单数据
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      
      // 模拟提交效果
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = '发送中...';
      
      // 模拟API调用
      setTimeout(() => {
        submitButton.textContent = '发送成功！';
        contactForm.reset();
        
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }, 2000);
      }, 1000);
    });
  }

  // 初始化页面动画
  document.body.classList.add('loaded');

  // 暗黑模式切换
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  function updateTheme(e) {
    if (e.matches) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  
  prefersDarkScheme.addListener(updateTheme);
  updateTheme(prefersDarkScheme);
});