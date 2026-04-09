// Portfolio Analytics - Non-Critical JavaScript
// Menu functionality is inline in HTML for guaranteed execution

document.addEventListener('DOMContentLoaded', function() {
    initScrollSpy();
    initCopyButtons();
    console.log('Portfolio Analytics: Non-critical JS loaded');
});

/**
 * SCROLL SPY - Active nav highlighting
 */
function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
    
    if (sections.length === 0) return;
    
    window.addEventListener('scroll', function() {
        var current = '';
        var scrollPos = window.scrollY + 100;
        
        sections.forEach(function(section) {
            var sectionTop = section.offsetTop;
            var sectionHeight = section.clientHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(function(item) {
            item.classList.remove('active');
            var href = item.getAttribute('href');
            if (href === '#' + current) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * COPY CODE BUTTONS
 */
function initCopyButtons() {
    window.copyCode = function(btn) {
        var codeBlock = btn.closest('.code-block');
        if (!codeBlock) return;
        
        var code = codeBlock.querySelector('code');
        if (!code) return;
        
        var text = code.innerText;
        
        navigator.clipboard.writeText(text).then(function() {
            var original = btn.innerText;
            btn.innerText = 'Copied!';
            btn.style.background = '#28a745';
            
            setTimeout(function() {
                btn.innerText = original;
                btn.style.background = '';
            }, 2000);
        }).catch(function(err) {
            console.error('Copy failed:', err);
        });
    };
}