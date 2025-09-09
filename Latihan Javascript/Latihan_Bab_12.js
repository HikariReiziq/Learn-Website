console.log("Latihan bab 12 | upgrade dari bab 11")

const input = document.querySelector('.js-todo-input')
const tombolInput = document.querySelector('.js-add-todo-button')
const isi = document.querySelector('.js-todo-list-container')
const kalender = document.querySelector('.js-due-date-input')

const daftarIsi = []; //[IPA, BAHASA, MTK]

console.log("isi dari daftar isi: ", todoList);

const renderTodoList = () => {
    let isiHtml = ''; //Variabel untuk ditampilkan

    todoList.forEach((task) => {
        const { ketikanTugas, ketikanKalender} = task ;
        const temp =  `<li><div>${ketikanTugas} - ${ketikanKalender}<div>`;
        isiHtml = isiHtml + temp;
    });
    isi.innerHTML = isiHtml;
    console.log(`Muncul di HTML: ${isiHtml}`);
};

tombolInput.addEventListener('click', () => {
    const ketikanTugas = input.value;
    const ketikanKalender = kalender.value;
    
    todoList.push({
        ketikanTugas, 
        ketikanKalender
    });
    
    input.value= '';  
    kalender.value= '';  
    console.log(`mengeluarkan`, todoList)
    renderTodoList();
    // console.log(`tombol berhasil, mengeluarkan ${daftarIsi}`);
});