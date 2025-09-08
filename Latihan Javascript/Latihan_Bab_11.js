console.log("Latihan Bab 11")

const input = document.querySelector('.js-todo-input')
const tombolInput = document.querySelector('.js-add-todo-button')
const isi = document.querySelector('.js-todo-list-container')

const daftarIsi = []; //[IPA, BAHASA, MTK]
console.log("isi dari daftar isi: ", daftarIsi);

function renderTodoList(){
    let isiHtml = ''; //Variabel untuk ditampilkan

    daftarIsi.forEach(function(task) {
        
        //isiHtml = ipa;
        const temp = `<li>${task}`;
        isiHtml = isiHtml + temp;
        console.log(`forEach: ${isiHtml}`);
    })

    isi.innerHTML = `${isiHtml}`;
    console.log(`Muncul di HTML: ${isiHtml}`);
};

tombolInput.addEventListener('click', function tombol(){
    const ketikanTugas = input.value;
    
    daftarIsi.push(ketikanTugas);
    input.value= '';  
    renderTodoList();
    console.log("tombol berhasil");
});