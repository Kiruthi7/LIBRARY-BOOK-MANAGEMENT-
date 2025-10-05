<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Library Virtual UI Workflow</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  background: url('https://uploads.onecompiler.io/43ymnw6qs/3x2zp2yd7/1000058219.gif') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
}

.blur-overlay {
  background: rgba(20,20,20,0.45);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,0.12);
  padding: 30px 35px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.35), 0 0 30px 5px rgba(255,255,255,0.1) inset;
  transition: all 0.3s ease-in-out;
  text-align: center;
}

h2 {
  font-weight: 700;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #ffffff, #444444 80%);
  color: transparent;
  -webkit-background-clip: text;
  margin-bottom: 20px;
  font-size: 2rem;
}

input {
  padding: 12px;
  border-radius: 10px;
  border: none;
  outline: none;
  background: rgba(255,255,255,0.12);
  color: #f5f5f5;
  font-size: 1rem;
  margin: 8px 0;
  border-bottom: 1px solid #fff;
  width: 90%;
  transition: all 0.3s ease;
}
input:focus { background: rgba(255,255,255,0.2); border-bottom: 2px solid #ddd; }

button {
  padding: 12px 18px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin: 8px 4px;
  transition: all 0.3s ease;
}

.menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 20px;
}
.menu-grid button {
  width: 100%;
}

/* Borrow button (blue + white) */
.borrow-btn {
  background: linear-gradient(90deg, #2196f3, #ffffff);
  color: #000;
}
.borrow-btn:hover {
  background: linear-gradient(90deg, #ffffff, #2196f3);
  color: #fff;
  transform: scale(1.05);
}

/* Return button (black + red) */
.return-btn {
  background: linear-gradient(90deg, #000000, #ff0000);
  color: #fff;
}
.return-btn:hover {
  background: linear-gradient(90deg, #ff0000, #000000);
  color: #fff;
  transform: scale(1.05);
}

.book-card {
  background: rgba(0,0,0,0.3);
  border-radius: 15px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  text-align: left;
}

.available { color: #c6ffc6; font-weight: bold; }
.borrowed { color: #ffb3b3; font-weight: bold; }

.hidden { display: none; }

</style>
</head>
<body>

<!-- Login Page -->
<div id="loginPage" class="blur-overlay">
  <h2>Login</h2>
  <input type="text" id="username" placeholder="Username" /><br>
  <input type="password" id="password" placeholder="Password" /><br>
  <button onclick="login()">Login</button>
  <div id="loginMsg" style="color:#ff8888; margin-top:10px;"></div>
</div>

<!-- Menu Page -->
<div id="menuPage" class="blur-overlay hidden">
  <h2>Library Menu</h2>
  <div class="menu-grid">
    <button onclick="showPage('addBookPage')">Add Book</button>
    <button onclick="showPage('searchBookPage')">Search Book</button>
    <button onclick="showPage('viewBooksPage')">View All Books</button>
    <button onclick="logout()">Logout</button>
  </div>
</div>

<!-- Add Book Page -->
<div id="addBookPage" class="blur-overlay hidden">
  <h2>Add Book</h2>
  <input type="text" id="bookId" placeholder="Book ID" /><br>
  <input type="text" id="bookTitle" placeholder="Title" /><br>
  <input type="text" id="bookAuthor" placeholder="Author" /><br>
  <button onclick="addBook()">Add Book</button>
  <button onclick="showPage('menuPage')">Back to Menu</button>
</div>

<!-- Search Book Page -->
<div id="searchBookPage" class="blur-overlay hidden">
  <h2>Search Book</h2>
  <input type="text" id="searchKeyword" placeholder="Title/Author" oninput="searchBook()" /><br>
  <div id="searchResults"></div>
  <button onclick="showPage('menuPage')">Back to Menu</button>
</div>

<!-- View All Books Page -->
<div id="viewBooksPage" class="blur-overlay hidden">
  <h2>All Books</h2>
  <div id="allBooks"></div>
  <button onclick="showPage('menuPage')">Back to Menu</button>
</div>

<script>
const users = [{username:"admin",password:"admin"},{username:"user",password:"user"}];
let loggedInUser = null;
let books = [];

function login() {
  const uname=document.getElementById('username').value;
  const pass=document.getElementById('password').value;
  const found=users.find(u=>u.username===uname&&u.password===pass);
  if(found){
    loggedInUser = uname;
    showPage('menuPage');
    document.getElementById('loginMsg').innerText='';
  } else {
    document.getElementById('loginMsg').innerText='Invalid login!';
  }
}

function logout() {
  loggedInUser=null;
  document.getElementById('username').value='';
  document.getElementById('password').value='';
  showPage('loginPage');
}

function showPage(pageId){
  ['loginPage','menuPage','addBookPage','searchBookPage','viewBooksPage'].forEach(p=>{
    document.getElementById(p).classList.add('hidden');
  });
  document.getElementById(pageId).classList.remove('hidden');
  if(pageId==='viewBooksPage') renderAllBooks();
  if(pageId==='searchBookPage') document.getElementById('searchResults').innerHTML='';
}

function addBook() {
  const id=document.getElementById('bookId').value;
  const title=document.getElementById('bookTitle').value;
  const author=document.getElementById('bookAuthor').value;
  if(!id||!title||!author){ alert('Fill all fields'); return; }
  if(books.find(b=>b.id===id)){ alert('ID exists'); return; }
  books.push({id,title,author,available:true});
  alert('Book added!');
  document.getElementById('bookId').value='';
  document.getElementById('bookTitle').value='';
  document.getElementById('bookAuthor').value='';
}

function renderAllBooks(){
  const container=document.getElementById('allBooks');
  container.innerHTML='';
  books.forEach(b=>{
    const div=document.createElement('div');
    div.className='book-card';
    div.innerHTML=`<b>ID:</b> ${b.id}<br><b>Title:</b> ${b.title}<br><b>Author:</b> ${b.author}<br>
      <span class="${b.available?'available':'borrowed'}">${b.available?'Available':'Borrowed'}</span>
      <br><button class="${b.available?'borrow-btn':'return-btn'}" onclick="${b.available?`borrowBook('${b.id}')`:`returnBook('${b.id}')`}">${b.available?'Borrow':'Return'}</button>`;
    container.appendChild(div);
  });
}

function searchBook() {
  const keyword = document.getElementById('searchKeyword').value.toLowerCase();
  const container = document.getElementById('searchResults');
  container.innerHTML='';
  books.filter(b=>b.title.toLowerCase().includes(keyword)||b.author.toLowerCase().includes(keyword))
       .forEach(b=>{
        const div=document.createElement('div');
        div.className='book-card';
        div.innerHTML=`<b>ID:</b> ${b.id}<br><b>Title:</b> ${b.title}<br><b>Author:</b> ${b.author}<br>
          <span class="${b.available?'available':'borrowed'}">${b.available?'Available':'Borrowed'}</span>
          <br><button class="${b.available?'borrow-btn':'return-btn'}" onclick="${b.available?`borrowBook('${b.id}')`:`returnBook('${b.id}')`}">${b.available?'Borrow':'Return'}</button>`;
        container.appendChild(div);
       });
}

function borrowBook(id){ const b=books.find(x=>x.id===id); if(b){ b.available=false; renderAllBooks(); searchBook(); } }
function returnBook(id){ const b=books.find(x=>x.id===id); if(b){ b.available=true; renderAllBooks(); searchBook(); } }

</script>
</body>
</html>
