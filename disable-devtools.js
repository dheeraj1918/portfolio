document.addEventListener('keydown', function(e) {
    // Check if Ctrl+Shift+I is pressed
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        e.stopPropagation();
        alert('This key combination is disabled.');
    }
    if (e.ctrlKey && e.shiftKey && (e.key === 'C')) {
        e.preventDefault();
        e.stopPropagation();
        alert('This key combination is disabled.');
    }
    // Check if F12 is pressed
    if (e.key === 'F12') {
        e.preventDefault();
        e.stopPropagation();
    }
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        e.stopPropagation();
    }
    
});
