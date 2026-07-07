// ========================================
// VARIABEL GLOBAL
// ========================================
let modeDaftar = false;
let userAktifSesi = "";
let favoriteGames = [];
let playedGames = [];
let userCoins = 0;
let userXP = 0;
let userLevel = 1;
let currentFilter = 'all';

// ========================================
// DATA GAME
// ========================================
const gameDataBase = [
{ id: 1, name: "Cyber Strike", genre: "action", desc: "FPS Futuristik", coinReward: 10, xpReward: 5 },
{ id: 2, name: "Dragon Quest", genre: "adventure", desc: "RPG Epic", coinReward: 15, xpReward: 8 },
{ id: 3, name: "Speed Racer", genre: "sport", desc: "Balapan Liar", coinReward: 8, xpReward: 4 },
{ id: 4, name: "Kingdom Wars", genre: "strategy", desc: "Strategi Perang", coinReward: 12, xpReward: 6 },
{ id: 5, name: "Neon Blast", genre: "action", desc: "Shooter Arcade", coinReward: 10, xpReward: 5 },
{ id: 6, name: "Mystic Forest", genre: "adventure", desc: "Petualangan Magis", coinReward: 15, xpReward: 8 },
{ id: 7, name: "Football Stars", genre: "sport", desc: "Sepak Bola Online", coinReward: 8, xpReward: 4 },
{ id: 8, name: "Chess Master", genre: "strategy", desc: "Catur Pro", coinReward: 12, xpReward: 6 },
{ id: 9, name: "Galaxy Invaders", genre: "action", desc: "Space Shooter", coinReward: 10, xpReward: 5 },
{ id: 10, name: "Pirate Treasure", genre: "adventure", desc: "Bajak Laut", coinReward: 15, xpReward: 8 },
{ id: 11, name: "Tennis Pro", genre: "sport", desc: "Tenis Virtual", coinReward: 8, xpReward: 4 },
{ id: 12, name: "Tower Defense", genre: "strategy", desc: "Pertahanan Menara", coinReward: 12, xpReward: 6 },
{ id: 13, name: "Shadow Blade", genre: "action", desc: "Ninja Action", coinReward: 10, xpReward: 5 },
{ id: 14, name: "Magic Kingdom", genre: "adventure", desc: "Kerajaan Sihir", coinReward: 15, xpReward: 8 },
{ id: 15, name: "Bike Stunt", genre: "sport", desc: "Sepeda Ekstrim", coinReward: 8, xpReward: 4 },
{ id: 16, name: "Robot Wars", genre: "strategy", desc: "Pertarungan Robot", coinReward: 12, xpReward: 6 }
];

// ========================================
// INISIALISASI AKUN DEMO
// ========================================
if (!localStorage.getItem('admin')) {
localStorage.setItem('admin', 'game123');
}

// ========================================
// FUNGSI LOGIN & REGISTER
// ========================================
function pindahMenu() {
modeDaftar = !modeDaftar;
document.getElementById('errMsg').style.display = 'none';
if (modeDaftar) {
document.getElementById('title').innerText = "BUAT AKUN";
document.getElementById('mainBtn').innerText = "DAFTAR SEKARANG";
document.getElementById('toggleBtn').innerText = "Sudah punya akun? Login";
} else {
document.getElementById('title').innerText = "PLAYER LOGIN";
document.getElementById('mainBtn').innerText = "MASUK";
document.getElementById('toggleBtn').innerText = "Belum punya akun? Daftar";
}
}

function aksiUtama() {
const u = document.getElementById('user').value.trim();
const p = document.getElementById('pass').value;
const err = document.getElementById('errMsg');

if (!u || !p) {
err.innerText = "Isi semua kotak!";
err.style.display = 'block';
return;
}

if (modeDaftar) {
if (localStorage.getItem(u)) {
err.innerText = "Username sudah terdaftar!";
err.style.display = 'block';
} else {
localStorage.setItem(u, p);
localStorage.setItem('coins_' + u, '0');
localStorage.setItem('favorites_' + u, '[]');
localStorage.setItem('played_' + u, '[]');
localStorage.setItem('inventory_' + u, '[]');
localStorage.setItem('xp_' + u, '0');
localStorage.setItem('level_' + u, '1');
showNotification("✅ Akun berhasil dibuat! Silakan login.", "#00f0ff");
pindahMenu();
}
} else {
if (localStorage.getItem(u) === p) {
userAktifSesi = u;
document.getElementById('authBox').style.display = 'none';
document.getElementById('dashBox').style.display = 'block';
loadUserData();
showNotification("👋 Selamat datang, " + u + "!", "#00f0ff");
} else {
err.innerText = "Username atau Password salah!";
err.style.display = 'block';
}
}

}

// ========================================
// FUNGSI LOAD DATA USER
// ========================================
function loadUserData() {
favoriteGames = JSON.parse(localStorage.getItem('favorites_' + userAktifSesi) || '[]');
playedGames = JSON.parse(localStorage.getItem('played_' + userAktifSesi) || '[]');
userCoins = parseInt(localStorage.getItem('coins_' + userAktifSesi)) || 0;
userXP = parseInt(localStorage.getItem('xp_' + userAktifSesi)) || 0;
userLevel = parseInt(localStorage.getItem('level_' + userAktifSesi)) || 1;

updateCoinDisplay();
updateLevelDisplay();
document.getElementById('favoriteCount').textContent = favoriteGames.length;
document.getElementById('playedGames').textContent = playedGames.length;
renderGames();

}

// ========================================
// FUNGSI UPDATE KOIN & LEVEL
// ========================================
function updateCoinDisplay() {
document.getElementById('coinDisplay').textContent = userCoins;
document.getElementById('coinStat').textContent = userCoins;
}

function updateLevelDisplay() {
const xpNeeded = userLevel * 50;
const xpProgress = Math.min((userXP / xpNeeded) * 100, 100);

const levelNames = ['Beginner', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'Grandmaster', 'Legend'];
const levelIndex = Math.min(Math.floor(userLevel / 3), levelNames.length - 1);
const levelName = levelNames[levelIndex] || 'Legend';

document.getElementById('levelDisplay').textContent = levelName + ' (Lv.' + userLevel + ')';
document.getElementById('xpDisplay').textContent = userXP + ' / ' + xpNeeded + ' XP';
document.getElementById('xpProgress').style.width = xpProgress + '%';

}

function addXP(amount) {
userXP += amount;
const xpNeeded = userLevel * 50;

while (userXP >= xpNeeded) {
userXP -= xpNeeded;
userLevel++;
showNotification('🎉 LEVEL UP! Sekarang Level ' + userLevel + '!', '#ffd700');
}

localStorage.setItem('xp_' + userAktifSesi, userXP);
localStorage.setItem('level_' + userAktifSesi, userLevel);
updateLevelDisplay();

}

// ========================================
// FUNGSI RENDER GAME
// ========================================
function renderGames() {
const grid = document.getElementById('gameGrid');
const searchTerm = document.getElementById('searchGame').value.toLowerCase();

let filtered = [...gameDataBase];

if (currentFilter !== 'all') {
filtered = filtered.filter(g => g.genre === currentFilter);
}

if (searchTerm) {
filtered = filtered.filter(g => g.name.toLowerCase().includes(searchTerm) || g.desc.toLowerCase().includes(searchTerm));
}

grid.innerHTML = '';
filtered.forEach(game => {
const isFavorite = favoriteGames.includes(game.id);
const isPlayed = playedGames.includes(game.id);
grid.innerHTML +=     <div class="card">     <button class="favorite-btn" onclick="toggleFavorite(${game.id})">     ${isFavorite ? '⭐' : '☆'}     </button>     <h4 style="font-family:'Orbitron'; font-size:14px;">${game.name}</h4>     <p style="color:#8e8e93; font-size:14px; margin-top:5px;">${game.desc}</p>     <p style="color:#bc34fa; font-size:12px; margin-top:3px;">🎯 ${game.genre.toUpperCase()}</p>     <p style="color:#ffd700; font-size:12px;">🪙 +${game.coinReward} Koin | ⚡ +${game.xpReward} XP</p>     ${isPlayed ? '<span style="color:#00f0ff; font-size:12px;">✅ Dimainkan</span>' : ''}     <button class="btn-play" onclick="playGame(${game.id})">PLAY NOW</button>     </div>    ;
});

document.getElementById('totalGames').textContent = filtered.length;

}

// ========================================
// FUNGSI GAME
// ========================================
function toggleFavorite(gameId) {
const index = favoriteGames.indexOf(gameId);
if (index > -1) {
favoriteGames.splice(index, 1);
showNotification("⭐ Dihapus dari favorit", "#ff6b6b");
} else {
favoriteGames.push(gameId);
showNotification("⭐ Ditambahkan ke favorit!", "#ffd700");
}
localStorage.setItem('favorites_' + userAktifSesi, JSON.stringify(favoriteGames));
document.getElementById('favoriteCount').textContent = favoriteGames.length;
renderGames();
}

function playGame(gameId) {
const game = gameDataBase.find(g => g.id === gameId);
if (!game) return;

const bonus = Math.floor(Math.random() * 5) + 1;
const totalCoins = game.coinReward + bonus;
const totalXP = game.xpReward + Math.floor(Math.random() * 3);

userCoins += totalCoins;
localStorage.setItem('coins_' + userAktifSesi, userCoins.toString());
updateCoinDisplay();

addXP(totalXP);

if (!playedGames.includes(gameId)) {
playedGames.push(gameId);
localStorage.setItem('played_' + userAktifSesi, JSON.stringify(playedGames));
document.getElementById('playedGames').textContent = playedGames.length;
}

showCoinAnimation(totalCoins);
showNotification(🎮 Memainkan ${game.name}\n🪙 +${totalCoins} Koin (${game.coinReward} + ${bonus} bonus)\n⚡ +${totalXP} XP, "#ffd700");

renderGames();
window.open('https://poki.com', '_blank');

}

// ========================================
// ANIMASI KOIN
// ========================================
function showCoinAnimation(amount) {
const emoji = '🪙';
for (let i = 0; i < Math.min(amount, 5); i++) {
setTimeout(() => {
const el = document.createElement('div');
el.className = 'coin-float';
el.textContent = emoji;
el.style.left = (Math.random() * 80 + 10) + '%';
el.style.top = (Math.random() * 50 + 25) + '%';
el.style.fontSize = (25 + Math.random() * 20) + 'px';
document.body.appendChild(el);
setTimeout(() => el.remove(), 1500);
}, i * 200);
}
}

// ========================================
// FUNGSI FILTER & SEARCH
// ========================================
function filterGames(genre, element) {
currentFilter = genre;
document.querySelectorAll('.filter-tag').forEach(tag => {
tag.classList.remove('active');
});
if (element) element.classList.add('active');
renderGames();
}

function searchGames() {
renderGames();
}

// ========================================
// FUNGSI NOTIFIKASI
// ========================================
function showNotification(message, color = "#00f0ff") {
const notif = document.getElementById('notification');
notif.textContent = message;
notif.style.borderColor = color;
notif.style.display = 'block';
clearTimeout(notif.timeout);
notif.timeout = setTimeout(() => {
notif.style.display = 'none';
}, 4000);
}

// ========================================
// MENU SIDEBAR
// ========================================

function aksiMenuTitik() {
    const sidebar = document.getElementById("sidebarMenu");
    const overlay = document.getElementById("menuOverlay");

    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

// ========================================
// PROFIL PLAYER
// ========================================

function bukaProfilPlayer() {

    showNotification(
        "👤 Username: " + userAktifSesi +
        "\n🏆 Level: " + userLevel +
        "\n🪙 Koin: " + userCoins +
        "\n⭐ Favorit: " + favoriteGames.length +
        "\n🎮 Game Dimainkan: " + playedGames.length,
        "#00f0ff"
    );

    aksiMenuTitik();
}

// ========================================
// SETTINGS
// ========================================

function bukaSettings() {

    showNotification(
        "⚙️ Settings\nTema: Neon Gaming\nVersi: 2.0",
        "#bc34fa"
    );

    aksiMenuTitik();
}

// ========================================
// FAVORITE
// ========================================

function bukaFavorite() {

    const jumlah = favoriteGames.length;

    showNotification(
        "⭐ Total Favorite Game: " + jumlah,
        "#ffd700"
    );

    aksiMenuTitik();
}

// ========================================
// SHOP
// ========================================

function bukaShop() {

    document.querySelector(".shop-section")
        .scrollIntoView({
            behavior: "smooth"
        });

    aksiMenuTitik();
}

// ========================================
// INVENTORY
// ========================================

function bukaInventory() {

    const inventory =
        JSON.parse(
            localStorage.getItem(
                "inventory_" + userAktifSesi
            ) || "[]"
        );

    if (inventory.length === 0) {

        showNotification(
            "📦 Inventory kosong",
            "#ff9800"
        );

    } else {

        showNotification(
            "📦 " + inventory.join(", "),
            "#ff9800"
        );
    }

    aksiMenuTitik();
}

// ========================================
// BELI ITEM
// ========================================

function buyItem(itemName, price) {

    if (userCoins < price) {

        showNotification(
            "❌ Koin tidak cukup",
            "#ff3b30"
        );

        return;
    }

    userCoins -= price;

    updateCoinDisplay();

    localStorage.setItem(
        "coins_" + userAktifSesi,
        userCoins
    );

    let inventory =
        JSON.parse(
            localStorage.getItem(
                "inventory_" + userAktifSesi
            ) || "[]"
        );

    inventory.push(itemName);

    localStorage.setItem(
        "inventory_" + userAktifSesi,
        JSON.stringify(inventory)
    );

    showNotification(
        "🛒 Berhasil membeli " + itemName,
        "#ffd700"
    );
}

// ========================================
// KALKULATOR
// ========================================

function hitungJumlah() {

    const a =
        Number(
            document.getElementById("num1").value
        );

    const b =
        Number(
            document.getElementById("num2").value
        );

    document.getElementById(
        "hasilKalkulator"
    ).innerText =
        "Hasil: " + (a + b);
}

// ========================================
// REDEEM CODE
// ========================================

function redeemCode() {

    const kode =
        document.getElementById(
            "redeemInput"
        ).value.toUpperCase();

    if (kode === "FREE100") {

        userCoins += 100;

        updateCoinDisplay();

        localStorage.setItem(
            "coins_" + userAktifSesi,
            userCoins
        );

        showNotification(
            "🎉 Redeem berhasil +100 Koin",
            "#ffd700"
        );

    } else {

        showNotification(
            "❌ Kode salah",
            "#ff3b30"
        );
    }
}

// ========================================
// MISI HARIAN
// ========================================

function claimMission() {

    userCoins += 100;

    updateCoinDisplay();

    localStorage.setItem(
        "coins_" + userAktifSesi,
        userCoins
    );

    showNotification(
        "🎯 Hadiah misi berhasil diambil",
        "#00f0ff"
    );
}