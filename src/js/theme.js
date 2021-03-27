const bodyRef = document.querySelector('body');
const checkBoxRef = document.querySelector('#theme-switch-toggle');


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

bodyRef.classList.add(Theme.LIGHT);

checkBoxRef.addEventListener('input', e => {
    e.target.checked ? localStorage.setItem("theme", "dark-theme") : localStorage.setItem("theme", "light-theme");
    onChoice();
});

const onChoice = function () { 
if (localStorage.getItem("theme") === "light-theme" ){
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT  );

};

if (localStorage.getItem("theme") === "dark-theme") { 
    bodyRef.classList.remove(Theme.LIGHT);
    bodyRef.classList.add(Theme.DARK  );
    checkBoxRef.checked = true;
};
}

onChoice();

