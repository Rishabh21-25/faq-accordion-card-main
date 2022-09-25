

document.querySelectorAll('.accordion_question').forEach(item => {
    item.addEventListener('click',(event) => {
        
        if(!item.classList.contains('open')) {

            item.nextElementSibling.classList = 'accordion_collapse collapsing';

            setTimeout(() => {
                item.nextElementSibling.classList = 'accordion_collapse open';
            },300);
        }

        else 
        {
            item.nextElementSibling.classList = 'accordion_collapse collapsing';

            setTimeout(() => {
                item.nextElementSibling.classList = 'accordion_collapse collapse';
            });
        }

        item.classList.toggle('open');

        item.nextElementSibling.classList.toggle('open');
    });
});

