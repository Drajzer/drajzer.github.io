/ Smooth animations and interface enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add animation to post items on page load
  const postItems = document.querySelectorAll('.post-item');
  
  // Animate posts into view with staggered delay
  postItems.forEach((post, index) => {
    setTimeout(() => {
      post.classList.add('visible');
    }, 100 * index);
  });
  
  // Smooth scrolling for category links
  const categoryLinks = document.querySelectorAll('.category-link, .category-badge');
  
  categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // The category filtering is handled separately
      if (this.classList.contains('category-link')) {
        return; // Let the other handler deal with it
      }
      
      const href = this.getAttribute('href');
      
      // Only apply smooth scroll for local links
      if (href.startsWith('/') || href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.includes('#') ? href.split('#')[1] : '';
        const targetElement = targetId ? document.getElementById(targetId) : document.body;
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 20,
            behavior: 'smooth'
          });
          
          // Update URL without page reload
          history.pushState(null, null, href);
        } else {
          // If no target element, just navigate normally
          window.location.href = href;
        }
      }
    });
  });
  
  // Highlight code blocks with syntax highlighting (optional)
  const codeBlocks = document.querySelectorAll('pre code');
  if (typeof hljs !== 'undefined') {
    codeBlocks.forEach(block => {
      hljs.highlightBlock(block);
    });
  }
});
