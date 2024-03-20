// Lấy phần tử thanh menu
var menu = document.getElementById("menu");

// Lấy vị trí ban đầu của thanh menu
var menuPosition = menu.offsetTop;

// Thêm sự kiện cho sự kiện cuộn trang
window.onscroll = function() { 
    // Kiểm tra vị trí cuộn trang
    if (window.pageYOffset >= menuPosition) {
        // Nếu vị trí cuộn lớn hơn hoặc bằng vị trí ban đầu của thanh menu
        // Thêm lớp 'fixed' vào thanh menu để giữ nó ở vị trí cố định
        menu.classList.add("fixed");
    } else {
        // Nếu không, loại bỏ lớp 'fixed'
        menu.classList.remove("fixed");
    }
};
/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) =>{
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem!== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) =>{
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }else{
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}
