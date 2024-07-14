document.addEventListener('DOMContentLoaded',() =>
{
    const modeSelect = document.getElementById('mode-select');
    const body = document.body;


    //check for saved user preference
    const savedMode = localStorage.getItem('color-mode') || 'default';
    body.classList.add(`${savedMode}-mode`);
    modeSelect.value = savedMode;

    modeSelect.addEventListener('change',()=>{

        const selectedMode = modeSelect.value;

        body.classList.remove('default-mode','dark-mode','blue-mode','green-mode');

        body.classList.add(`${selectedMode}-mode`);

        localStorage.setItem('color-mode',selectedMode);

    });

});