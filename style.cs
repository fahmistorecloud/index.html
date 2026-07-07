{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Rajdhani', sans-serif;
}


body {
background-color: #0a0a0c;
color: #fff;
min-height: 100vh;
display: flex;
justify-content: center;
align-items: center;
overflow-x: hidden;
}

.box {
background: #141419;
border: 2px solid #bc34fa;
padding: 30px;
border-radius: 12px;
text-align: center;
max-width: 400px;
width: 90%;
box-shadow: 0 0 20px rgba(188, 52, 250, 0.3);
}

h2 {
font-family: 'Orbitron', sans-serif;
color: #00f0ff;
margin-bottom: 20px;
text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
}

input {
width: 100%;
padding: 12px;
margin: 10px 0;
background: #000;
border: 1px solid #333;
color: #fff;
border-radius: 6px;
font-size: 16px;
}

input:focus {
outline: none;
border-color: #00f0ff;
}

button {
width: 100%;
padding: 12px;
background: transparent;
border: 2px solid #bc34fa;
color: #fff;
font-size: 16px;
font-weight: bold;
cursor: pointer;
border-radius: 6px;
margin-top: 10px;
transition: 0.3s;
}

button:hover {
background: #bc34fa;
box-shadow: 0 0 15px rgba(188, 52, 250, 0.6);
}

.error {
color: #ff3b30;
font-size: 14px;
margin-top: 10px;
display: none;
}

.dash {
display: none;
width: 100%;
max-width: 1200px;
padding: 20px;
}

.grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
gap: 20px;
margin-top: 20px;
}

.card {
background: #141419;
border: 1px solid #333;
padding: 20px;
border-radius: 8px;
text-align: center;
transition: 0.3s;
position: relative;
}

.card:hover {
transform: translateY(-5px);
border-color: #00f0ff;
box-shadow: 0 5px 15px rgba(0, 240, 255, 0.3);
}

.card .favorite-btn {
position: absolute;
top: 10px;
right: 10px;
background: none;
border: none;
color: #ffd700;
font-size: 20px;
cursor: pointer;
width: auto;
margin: 0;
padding: 5px;
}

.card .favorite-btn:hover {
transform: scale(1.2);
box-shadow: none;
}

.btn-play {
display: block;
width: 100%;
padding: 8px;
background: #000;
border: 1px solid #bc34fa;
color: #fff;
text-decoration: none;
border-radius: 4px;
margin-top: 10px;
font-weight: bold;
cursor: pointer;
}

.btn-play:hover {
background: #bc34fa;
}

.ev-box {
background: linear-gradient(135deg, #4a0e4e, #1a052e);
border: 2px solid #bc34fa;
padding: 20px;
border-radius: 10px;
margin-bottom: 20px;
text-align: left;
}

.nav {
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 20px;
border-bottom: 2px solid #1a1a24;
margin-bottom: 20px;
}

.nav-left {
display: flex;
align-items: center;
gap: 15px;
}

.dot-menu {
display: flex;
flex-direction: column;
gap: 4px;
background: none;
border: none;
cursor: pointer;
padding: 8px;
margin: 0;
width: auto;
transition: 0.3s;
}

.dot-menu span {
display: block;
width: 5px;
height: 5px;
background-color: #00f0ff;
border-radius: 50%;
box-shadow: 0 0 8px rgba(0, 240, 255, 0.8);
transition: 0.3s;
}

.dot-menu:hover span {
background-color: #bc34fa;
box-shadow: 0 0 12px rgba(188, 52, 250, 1);
}

.sidebar {
position: fixed;
top: 0;
left: -280px;
width: 280px;
height: 100vh;
background: #141419;
border-right: 2px solid #bc34fa;
z-index: 1000;
padding: 30px 20px;
transition: 0.4s cubic-bezier(0.1, 0.9, 0.2, 1);
box-shadow: 5px 0 25px rgba(188, 52, 250, 0.2);
}

.sidebar.active {
left: 0;
}

.sidebar-header {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 30px;
padding-bottom: 15px;
border-bottom: 1px solid #333;
}

.sidebar-close {
background: none;
border: none;
color: #ff3b30;
font-size: 24px;
cursor: pointer;
width: auto;
margin: 0;
padding: 0;
font-weight: bold;
}

.sidebar-close:hover {
text-shadow: 0 0 10px #ff3b30;
}

.menu-list {
list-style: none;
display: flex;
flex-direction: column;
gap: 15px;
}

.menu-item a {
display: block;
padding: 12px 15px;
color: #fff;
text-decoration: none;
font-size: 18px;
font-weight: bold;
border-radius: 6px;
border: 1px solid transparent;
transition: 0.3s;
}

.menu-item a:hover {
color: #00f0ff;
background: #000;
border-color: #00f0ff;
box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
padding-left: 20px;
}

.overlay {
display: none;
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: rgba(0, 0, 0, 0.6);
z-index: 999;
backdrop-filter: blur(3px);
}

.overlay.active {
display: block;
}

.notification {
position: fixed;
top: 20px;
right: 20px;
padding: 15px 25px;
background: #141419;
border: 2px solid #00f0ff;
border-radius: 8px;
color: #fff;
z-index: 2000;
animation: slideIn 0.5s ease;
display: none;
max-width: 350px;
white-space: pre-line;
}

@keyframes slideIn {
from {
transform: translateX(100%);
opacity: 0;
}
to {
transform: translateX(0);
opacity: 1;
}
}

.search-bar {
width: 100%;
max-width: 400px;
margin: 20px auto;
position: relative;
}

.search-bar input {
padding-left: 40px;
}

.search-bar .search-icon {
position: absolute;
left: 15px;
top: 50%;
transform: translateY(-50%);
color: #8e8e93;
}

.stats {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
gap: 15px;
margin: 20px 0;
}

.stat-card {
background: #141419;
border: 1px solid #333;
padding: 15px;
border-radius: 8px;
text-align: center;
}

.stat-card .number {
font-size: 28px;
font-weight: bold;
color: #00f0ff;
font-family: 'Orbitron', sans-serif;
}

.stat-card .coin-icon {
color: #ffd700;
}

.filter-tags {
display: flex;
gap: 10px;
flex-wrap: wrap;
margin: 15px 0;
}

.filter-tag {
padding: 5px 15px;
border: 1px solid #333;
border-radius: 20px;
cursor: pointer;
transition: 0.3s;
background: transparent;
color: #fff;
font-size: 14px;
width: auto;
margin: 0;
}

.filter-tag:hover,
.filter-tag.active {
background: #bc34fa;
border-color: #bc34fa;
}

.coin-float {
position: fixed;
font-size: 30px;
animation: floatUp 1.5s ease-out forwards;
pointer-events: none;
z-index: 3000;
}

@keyframes floatUp {
0% {
opacity: 1;
transform: translateY(0) scale(1);
}
100% {
opacity: 0;
transform: translateY(-150px) scale(1.5);
}
}

.shop-section {
background: #141419;
border: 1px solid #333;
padding: 20px;
border-radius: 8px;
margin: 20px 0;
}

.shop-items {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
gap: 15px;
margin-top: 15px;
}

.shop-item {
background: #000;
padding: 15px;
border-radius: 8px;
text-align: center;
border: 1px solid #333;
transition: 0.3s;
}

.shop-item:hover {
border-color: #ffd700;
}

.shop-item .price {
color: #ffd700;
font-weight: bold;
margin: 5px 0;
}

.btn-buy {
width: 100%;
padding: 8px;
background: transparent;
border: 1px solid #ffd700;
color: #fff;
border-radius: 4px;
cursor: pointer;
transition: 0.3s;
margin-top: 5px;
}

.btn-buy:hover {
background: #ffd700;
color: #000;
}

.btn-buy:disabled {
opacity: 0.5;
cursor: not-allowed;
}

.level-progress {
margin: 15px 0;
padding: 15px;
background: #141419;
border-radius: 8px;
border: 1px solid #333;
}

.progress-bar {
width: 100%;
height: 20px;
background: #000;
border-radius: 10px;
overflow: hidden;
margin-top: 5px;
}

.progress-bar .fill {
height: 100%;
background: linear-gradient(90deg, #bc34fa, #00f0ff);
transition: width 0.5s ease;
border-radius: 10px;
}

@media (max-width: 768px) {
.nav h2 {
font-size: 16px !important;
}
.stats {
grid-template-columns: repeat(2, 1fr);
}
}