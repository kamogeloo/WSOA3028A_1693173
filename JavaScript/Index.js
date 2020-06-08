

const menuItems =[
    {title: 'Home', link: '/Index.html'},
    {title: 'About', link: '/About.html'},
    {title: 'Character Portfolio', link: '/'},
    {title: 'Wireframes', link: '/Wireframe.html'},
    {title: 'Website Style Guide', link: '/Styleguide.html'},
    {title: 'Contact', link: '/Contact.html'},
    {title: 'Blogs', link: '/Blogposts.html'},
    
];

/*const createmenuItems = (item) =>{
    const li = document.createElement ('li');
    const a = document.createElement ( 'a');
    a.innerText = item.title;
    a.href = item.link;

    li.append(a);
    /*

    if (item && item.length) {
        let ul = document.createElement('ul');

       /* for(let childItem of item.children) {
            let childmenuItems = createmenuItems(childItem);
            ul.appendChild(childmenuItems);
        }
        li.appendChild('ul');
    }
  
    return li;*/
   


//code from Mike Geyser lecture
const Menucreation = () => {
    const nav = document.querySelector ('nav');
 const ul = document.createElement ('ul');

 for(let item of menuItems) {
     const li = document.createElement('li');
     const a = document.createElement('a');
     a.innerText = item.title;
     a.href = item.link;
     
     ul.appendChild(li);
     li.appendChild(a);
 
 }

nav.appendChild(ul);
};
console.log('loading')






document.addEventListener('DOMContentLoaded', () => Menucreation());
console.log('DOM is loaded');


 //code from W3school on responsive menu
function Responsivemenu(){
    let menu =document.getElementById("menu");

    if(menu.className ==="navi")  {

        menu.className += " responsive";
    }else {
        menu.className = "navi";
    } 

    }