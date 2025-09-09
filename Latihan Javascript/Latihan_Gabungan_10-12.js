// const html = `
//     <div>${name}</div>
//     <div>${dueDate}</div>
//     <button onclick="deleteTodo(${index})" class="delete-todo-button">Hapus</button>
// `;

//===============================================

console.log("Latihan bab 12 | upgrade dari bab 11")

const input = document.querySelector('.js-name-input')
const tombolInput = document.querySelector('.js-add-todo-button')
const isi = document.querySelector('.js-todo-list')
const kalender = document.querySelector('.js-due-date-input')

const todoList = []; //[IPA, BAHASA, MTK]

console.log("isi dari daftar isi: ", todoList);

const renderTodoList = () => {
    let isiHtml = '';
    
    // Perubahan ada di dalam forEach ini
    todoList.forEach((todoObject, index) => {
        const { task, calendar} = todoObject;

        // --- SOLUSI ---
        // Buat setiap bagian (nama, tanggal, tombol) sebagai elemennya sendiri.
        // Jangan bungkus mereka semua dalam satu div/li.
        const temp =  `
            <div>${task}</div>
            <div>${calendar}</div>
            <button onclick="deleteTodo(${index})" class="delete-todo-button">Hapus</button>
        `;
        isiHtml += temp;
    });

    isi.innerHTML = isiHtml;
    console.log(`Muncul di HTML: ${isiHtml}`);
};

function deleteTodo (indexToDelete) {
    todoList.splice(indexToDelete , 1);
    renderTodoList();
    console.log(`${indexToDelete} berhasil dihapus`)
}

tombolInput.addEventListener('click', () => {
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
    
    input.value= '';  
    kalender.value= '';  
    console.log(`mengeluarkan`, todoList)
    renderTodoList();
});
