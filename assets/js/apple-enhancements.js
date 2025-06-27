/**
 * Apple Style Enhancements
 * 苹果风格交互增强
 */

'use strict';

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {

  // 苹果风格的平滑滚动
  function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // 视差滚动效果
  function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    parallaxElements.forEach(element => {
      const speed = element.dataset.parallax || 0.5;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  // 苹果风格的淡入动画
  function observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // 观察所有卡片元素
    document.querySelectorAll('.card, .service-item, .blog-post-item').forEach(el => {
      observer.observe(el);
    });
  }

  // 优化卡片悬停效果
  function enhanceCardInteractions() {
    const cards = document.querySelectorAll('.card, .service-item, .testimonials-item');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        this.style.transform = 'translateY(-8px) scale(1.02)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // 优化导航栏交互
  function enhanceNavigation() {
    const navLinks = document.querySelectorAll('.navbar-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // 添加点击动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });
  }

  // 智能主题检测和切换
  function initThemeSupport() {
    // 检测系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    function updateTheme(e) {
      const html = document.documentElement;
      if (e.matches) {
        html.classList.add('dark-theme');
      } else {
        html.classList.remove('dark-theme');
      }
    }
    
    // 初始设置
    updateTheme(prefersDark);
    
    // 监听主题变化
    prefersDark.addEventListener('change', updateTheme);
  }

  // 优化滚动性能
  let ticking = false;
  function optimizedScrollHandler() {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleParallax();
        ticking = false;
      });
      ticking = true;
    }
  }

  // 触觉反馈模拟（适用于支持的设备）
  function addHapticFeedback() {
    const interactiveElements = document.querySelectorAll('.btn, .navbar-link, .card');
    
    interactiveElements.forEach(element => {
      element.addEventListener('click', function() {
        // 如果设备支持震动API
        if (navigator.vibrate) {
          navigator.vibrate(10); // 轻微震动
        }
      });
    });
  }

  // 苹果风格的加载动画
  function initLoadingAnimation() {
    const body = document.body;
    body.classList.add('loading');
    
    // 页面加载完成后移除加载状态
    window.addEventListener('load', () => {
      setTimeout(() => {
        body.classList.remove('loading');
        body.classList.add('loaded');
      }, 300);
    });
  }

  // 优化图片加载
  function optimizeImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('loading' in HTMLImageElement.prototype) {
      // 浏览器支持原生懒加载
      return;
    } else {
      // 使用Intersection Observer实现懒加载
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      images.forEach(img => imageObserver.observe(img));
    }
  }

  // 响应式字体大小调整
  function adjustFontSize() {
    const root = document.documentElement;
    const viewportWidth = window.innerWidth;
    
    if (viewportWidth < 768) {
      root.style.fontSize = '14px';
    } else if (viewportWidth < 1024) {
      root.style.fontSize = '15px';
    } else {
      root.style.fontSize = '16px';
    }
  }

  // 键盘导航支持
  function initKeyboardNavigation() {
    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    focusableElements.forEach(element => {
      element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-blue)';
        this.style.outlineOffset = '2px';
      });
      
      element.addEventListener('blur', function() {
        this.style.outline = 'none';
      });
    });
  }

  // 性能监控
  function initPerformanceMonitoring() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          
          // 如果加载时间超过3秒，可以考虑优化
          if (loadTime > 3000) {
            console.warn('页面加载时间较长，建议优化');
          }
        }, 0);
      });
    }
  }

  // 初始化所有增强功能
  function init() {
    initLoadingAnimation();
    observeElements();
    enhanceCardInteractions();
    enhanceNavigation();
    initThemeSupport();
    addHapticFeedback();
    optimizeImageLoading();
    adjustFontSize();
    initKeyboardNavigation();
    initPerformanceMonitoring();
    
    // 滚动事件监听（节流）
    window.addEventListener('scroll', optimizedScrollHandler, { passive: true });
    
    // 窗口大小变化监听
    window.addEventListener('resize', adjustFontSize);
    
    // 页面可见性变化监听
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible') {
        // 页面重新可见时，可以恢复动画
        document.body.classList.remove('paused');
      } else {
        // 页面不可见时，可以暂停动画以节省性能
        document.body.classList.add('paused');
      }
    });
  }

  // 启动增强功能
  init();
});

  // Premium Loading Overlay
  function showPremiumLoading() {
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(overlay);
    
    // Hide after content loads
    window.addEventListener('load', () => {
      setTimeout(() => {
        overlay.classList.add('hidden');
        setTimeout(() => overlay.remove(), 500);
      }, 800);
    });
  }

  // Enhanced Premium Components
  function initializePremiumComponents() {
    // Create and animate skill bars
    createSkillBars();
    
    // Enhanced hover effects
    enhanceProjectCards();
    enhanceBlogCards();
    
    // Initialize magnetic effects
    initializeMagneticEffects();
    
    // Initialize color animations
    initializeColorAnimations();
  }

  // Create skill bars
  function createSkillBars() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection && !aboutSection.querySelector('.skills-list')) {
      const skillsHtml = `
        <h3 class="h3 service-title" style="margin-top: 40px; margin-bottom: 20px;">专业技能</h3>
        <div class="skills-list">
          <div class="skill-item">
            <div class="skill-title-wrapper">
              <h4 class="skill-title">UX 设计</h4>
              <span class="skill-data">95%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-fill" data-percentage="95"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-title-wrapper">
              <h4 class="skill-title">UI 设计</h4>
              <span class="skill-data">90%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-fill" data-percentage="90"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-title-wrapper">
              <h4 class="skill-title">原型设计</h4>
              <span class="skill-data">85%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-fill" data-percentage="85"></div>
            </div>
          </div>
          <div class="skill-item">
            <div class="skill-title-wrapper">
              <h4 class="skill-title">设计系统</h4>
              <span class="skill-data">92%</span>
            </div>
            <div class="skill-progress">
              <div class="skill-progress-fill" data-percentage="92"></div>
            </div>
          </div>
        </div>
      `;
      aboutSection.insertAdjacentHTML('beforeend', skillsHtml);
      
      // Animate skill bars
      setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-progress-fill');
        skillBars.forEach((bar, index) => {
          setTimeout(() => {
            const percentage = bar.getAttribute('data-percentage');
            bar.style.width = percentage + '%';
          }, index * 200);
        });
      }, 1000);
    }
  }

  // Enhanced Project Cards
  function enhanceProjectCards() {
    const projectCards = document.querySelectorAll('.service-item, .content-card');
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        e.target.style.filter = 'drop-shadow(0 0 20px rgba(0, 122, 255, 0.3))';
        
        // 3D tilt effect
        e.target.addEventListener('mousemove', handleCardTilt);
      });
      
      card.addEventListener('mouseleave', (e) => {
        e.target.style.filter = '';
        e.target.style.transform = '';
        e.target.removeEventListener('mousemove', handleCardTilt);
      });
    });
  }

  // Enhanced Blog Cards
  function enhanceBlogCards() {
    const blogCards = document.querySelectorAll('.testimonials-item, .clients-item');
    blogCards.forEach(card => {
      card.addEventListener('mouseenter', (e) => {
        e.target.style.filter = 'drop-shadow(0 0 15px rgba(52, 199, 89, 0.3))';
      });
      
      card.addEventListener('mouseleave', (e) => {
        e.target.style.filter = '';
      });
    });
  }

  // 3D Card Tilt Effect
  function handleCardTilt(e) {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    
    const rotateY = deltaX * 3; // Max 3 degrees
    const rotateX = -deltaY * 3; // Max 3 degrees
    
    e.target.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  }

  // Magnetic Effects
  function initializeMagneticEffects() {
    const magneticElements = document.querySelectorAll('.navbar-link, .contact-item, .service-item');
    
    magneticElements.forEach(element => {
      element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 30;
        
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const moveX = x * force * 0.15;
          const moveY = y * force * 0.15;
          
          element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      });
      
      element.addEventListener('mouseleave', () => {
        element.style.transform = '';
      });
    });
  }

  // Dynamic Color Animations
  function initializeColorAnimations() {
    let colorHue = 0;
    
    setInterval(() => {
      colorHue = (colorHue + 1) % 360;
      
      // Update avatar glow
      const avatar = document.querySelector('.avatar-box');
      if (avatar) {
        avatar.style.filter = `hue-rotate(${colorHue * 0.5}deg)`;
      }
      
      // Update active navbar link
      const activeLink = document.querySelector('.navbar-link.active');
      if (activeLink) {
        activeLink.style.filter = `hue-rotate(${colorHue * 0.3}deg)`;
      }
    }, 100); // Update every 100ms for smooth animation
  }

  // Enhanced cursor for desktop
  function initializeEnhancedCursor() {
    if (window.innerWidth > 1024) {
      const cursor = document.createElement('div');
      cursor.className = 'enhanced-cursor';
      document.body.appendChild(cursor);
      
      const cursorStyles = `
        .enhanced-cursor {
          position: fixed;
          width: 12px;
          height: 12px;
          background: radial-gradient(circle, rgba(0, 122, 255, 0.6), transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
          mix-blend-mode: difference;
        }
        
        .enhanced-cursor.cursor-hover {
          transform: scale(3);
          background: radial-gradient(circle, rgba(175, 82, 222, 0.8), transparent);
        }
      `;
      
      const styleSheet = document.createElement('style');
      styleSheet.textContent = cursorStyles;
      document.head.appendChild(styleSheet);
      
      let mouseX = 0, mouseY = 0;
      
      document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
      });
      
      // Cursor interactions
      const interactiveElements = document.querySelectorAll('a, button, .navbar-link, .service-item, .contact-item');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
          cursor.classList.add('cursor-hover');
        });
        
        element.addEventListener('mouseleave', () => {
          cursor.classList.remove('cursor-hover');
        });
      });
    }
  }

  // Initialize premium features
  function initPremiumFeatures() {
    showPremiumLoading();
    
    setTimeout(() => {
      initializePremiumComponents();
      initializeEnhancedCursor();
    }, 500);
  }

  // ===== 联系页面增强功能 =====
  
  // 初始化联系页面所有功能
  function initContactEnhancements() {
    initFAQAccordion();
    initFormEnhancements();
    initCharacterCounter();
    initSocialMediaHover();
    initMapInteractions();
    initContactCardAnimations();
  }

  // FAQ手风琴效果
  function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');
      
      if (question && answer) {
        question.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          
          // 关闭所有其他FAQ项
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('active');
            }
          });
          
          // 切换当前项状态
          item.classList.toggle('active', !isActive);
          
          // 触觉反馈
          if (navigator.vibrate) {
            navigator.vibrate(50);
          }
        });
      }
    });
  }

  // 表单增强功能
  function initFormEnhancements() {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.querySelector('.form-submit-btn');
    const inputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
    
    if (!form || !submitBtn) return;

    // 表单验证和提交
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 显示加载状态
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;
      
      // 模拟提交过程
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
        
        // 显示成功消息
        showSuccessMessage();
        
        // 重置表单
        form.reset();
        updateFormValidation();
      }, 2000);
    });

    // 实时表单验证
    inputs.forEach(input => {
      input.addEventListener('input', updateFormValidation);
      input.addEventListener('blur', updateFormValidation);
      
      // 输入框焦点效果
      input.addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focused');
      });
      
      input.addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focused');
      });
    });

    // 预算选项交互
    const budgetOptions = document.querySelectorAll('input[name="budget"]');
    budgetOptions.forEach(option => {
      option.addEventListener('change', () => {
        updateFormValidation();
        
        // 触觉反馈
        if (navigator.vibrate) {
          navigator.vibrate(30);
        }
      });
    });

    function updateFormValidation() {
      const nameField = document.querySelector('input[name="fullname"]');
      const emailField = document.querySelector('input[name="email"]');
      const messageField = document.querySelector('textarea[name="message"]');
      
      const isValid = nameField?.value.trim() && 
                     emailField?.value.trim() && 
                     isValidEmail(emailField.value) && 
                     messageField?.value.trim();
      
      submitBtn.disabled = !isValid;
    }

    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    function showSuccessMessage() {
      const successMessage = document.createElement('div');
      successMessage.className = 'success-message';
      successMessage.innerHTML = `
        <div class="success-content">
          <ion-icon name="checkmark-circle"></ion-icon>
          <h3>消息发送成功！</h3>
          <p>感谢您的留言，我会在24小时内回复您。</p>
        </div>
      `;
      
      // 添加成功消息样式
      const successStyles = `
        .success-message {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeIn 0.3s ease;
        }
        
        .success-content {
          background: var(--gradient-card-1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: var(--radius-xlarge);
          padding: var(--spacing-8);
          text-align: center;
          max-width: 400px;
          animation: scaleIn 0.3s ease;
        }
        
        .success-content ion-icon {
          font-size: 4rem;
          color: var(--secondary-green);
          margin-bottom: var(--spacing-4);
        }
        
        .success-content h3 {
          color: var(--label-primary);
          margin-bottom: var(--spacing-2);
        }
        
        .success-content p {
          color: var(--label-secondary);
          margin: 0;
        }
      `;
      
      const styleSheet = document.createElement('style');
      styleSheet.textContent = successStyles;
      document.head.appendChild(styleSheet);
      
      document.body.appendChild(successMessage);
      
      // 3秒后自动关闭
      setTimeout(() => {
        successMessage.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
          document.body.removeChild(successMessage);
          document.head.removeChild(styleSheet);
        }, 300);
      }, 3000);
      
      // 点击关闭
      successMessage.addEventListener('click', (e) => {
        if (e.target === successMessage) {
          successMessage.style.animation = 'fadeOut 0.3s ease forwards';
          setTimeout(() => {
            document.body.removeChild(successMessage);
            document.head.removeChild(styleSheet);
          }, 300);
        }
      });
    }
  }

  // 字符计数器
  function initCharacterCounter() {
    const textarea = document.querySelector('.form-textarea');
    const currentCount = document.querySelector('.current-count');
    
    if (textarea && currentCount) {
      textarea.addEventListener('input', () => {
        const count = textarea.value.length;
        currentCount.textContent = count;
        
        // 接近限制时改变颜色
        if (count > 450) {
          currentCount.style.color = 'var(--secondary-orange)';
        } else if (count > 500) {
          currentCount.style.color = 'var(--secondary-red)';
        } else {
          currentCount.style.color = 'var(--primary-blue)';
        }
      });
    }
  }

  // 社交媒体悬停效果
  function initSocialMediaHover() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
      const platform = link.getAttribute('data-social');
      
      link.addEventListener('mouseenter', () => {
        // 根据平台设置不同的颜色
        const colors = {
          github: '#333',
          linkedin: '#0077B5',
          dribbble: '#EA4C89',
          behance: '#1769FF',
          medium: '#00AB6C',
          twitter: '#1DA1F2'
        };
        
        if (colors[platform]) {
          link.style.background = `linear-gradient(135deg, ${colors[platform]}20, ${colors[platform]}10)`;
          link.style.borderColor = `${colors[platform]}40`;
        }
      });
      
      link.addEventListener('mouseleave', () => {
        link.style.background = '';
        link.style.borderColor = '';
      });
    });
  }

  // 地图交互增强
  function initMapInteractions() {
    const mapContainer = document.querySelector('.map-container');
    const mapOverlay = document.querySelector('.map-overlay');
    
    if (mapContainer && mapOverlay) {
      mapContainer.addEventListener('mouseenter', () => {
        mapOverlay.style.transform = 'translateY(-10px)';
        mapOverlay.style.boxShadow = 'var(--shadow-floating)';
      });
      
      mapContainer.addEventListener('mouseleave', () => {
        mapOverlay.style.transform = '';
        mapOverlay.style.boxShadow = '';
      });
    }
  }

  // 联系卡片动画
  function initContactCardAnimations() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach((card, index) => {
      // 入场动画
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.6s var(--timing-ease)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, index * 100);
      
      // 悬停时的高级动画
      card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.contact-icon');
        if (icon) {
          icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.contact-icon');
        if (icon) {
          icon.style.transform = '';
        }
      });
    });

    // 统计卡片数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(number => {
      const finalValue = number.textContent;
      const isNumber = !isNaN(parseInt(finalValue));
      
      if (isNumber) {
        animateNumber(number, parseInt(finalValue));
      }
    });
  }

  // 数字动画函数
  function animateNumber(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      if (target.toString().includes('+')) {
        element.textContent = Math.floor(current) + '+';
      } else if (target.toString().includes('%')) {
        element.textContent = Math.floor(current) + '%';
      } else if (target.toString().includes('小时')) {
        element.textContent = Math.floor(current) + '小时';
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }

  // Start premium features
  initPremiumFeatures();
  
  // 如果当前在联系页面，立即初始化联系功能
  if (document.querySelector('.contact')) {
    initContactEnhancements();
  }
  
  // 监听页面切换，当切换到联系页面时初始化功能
  const navLinks = document.querySelectorAll('.navbar-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      setTimeout(() => {
        if (document.querySelector('.contact.active')) {
          initContactEnhancements();
        }
      }, 100);
    });
  });

});

// 导出函数以供其他模块使用
window.AppleEnhancements = {
  smoothScrollTo: function(target) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}; 