console.log("Latihan bab 13 | upgrade dari bab 12")

const input = document.querySelector('.js-name-input')
const tombolSave = document.querySelector('.js-save-todo-button')
const tombolLoad = document.querySelector('.js-load-todo-button')
const isi = document.querySelector('.js-todo-list')
const kalender = document.querySelector('.js-due-date-input')

const todoList = []; //[IPA, BAHASA, MTK]

console.log("isi dari daftar isi: ", todoList);
const todoObject = localStorage.getItem('objectList')

const loadTodoList = () => {
    
    let isiHtml = '';
    
    
    todoList.forEach((todoObject, index) => {
        const { task, calendar} = todoObject;
        const temp =  `
            <div>${task}</div>
            <div>${calendar}</div>
            <button onclick="deleteTodo(${index})" class="delete-todo-button">Hapus</button> 
            <br>
        `;
        isiHtml = isiHtml + temp;
    });

    isi.innerHTML = isiHtml;
    console.log(`Muncul di HTML: ${isiHtml}`);
};

function deleteTodo (indexToDelete) {
    todoList.splice(indexToDelete , 1);
    localStorage.removeItem('objekList');
    console.log('Data namaPengguna berhasil dihapus.');
    loadTodoList();
    console.log(`${indexToDelete} berhasil dihapus`)
}

// Langkah 2
tombolLoad.addEventListener('click', () => {
    loadTodoList();
})

// Langkah 1
tombolSave.addEventListener('click', () => {
    const task = input.value;
    const calendar = kalender.value;
    
    if ( task === '' || calendar === ''){
        alert('List atau kalender tidak boleh kosong');
        console.log('alert');
        return;
    }

    todoList.push({
        task, 
        calendar
    });

    const dataTodoList = JSON.stringify(todoList);
    localStorage.setItem('objekList',dataTodoList);
    console.log(`Task: ${dataTodoList} tersimpan!`);
    
    input.value= '';  
    kalender.value= '';  
    console.log(`mengeluarkan`, todoList)
});

loadTodoList();