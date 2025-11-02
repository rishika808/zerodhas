 document.querySelectorAll('.tabs div').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelector('.tabs .active').classList.remove('active');
        tab.classList.add('active');
      });
    });

    // Footer active toggle
    document.querySelectorAll('footer div').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('footer .active').classList.remove('active');
        btn.classList.add('active');
      });
    });