// ===== DANH SÁCH TỔNG HỢP TOÀN BỘ SẢN PHẨM TRÊN CÁC TRANG =====
const products = [
    // 1. DANH MỤC: TEDDY (ID từ 1 - 12) -> Đã sửa lại thành img/ và dấu gạch nối teddy-x.jpg
    { id: 1, name: "Tuyết say hi", price: 250000, category: "teddy", image: "img/teddy 1.jpg" },
    { id: 2, name: "Pig thư giãn", price: 270000, category: "teddy", image: "img/teddy 2.jpg" },
    { id: 3, name: "Cà rốt yêu củ cải", price: 300000, category: "teddy", image: "img/teddy 3.jpg" },
    { id: 4, name: "Teddy thất tình", price: 230000, category: "teddy", image: "img/teddy 4.jpg" },
    { id: 5, name: "Teddy Nâu Cổ Điển", price: 250000, category: "teddy", image: "img/teddy 5.jpg" },
    { id: 6, name: "Gấu Hồng Vui Vẻ", price: 270000, category: "teddy", image: "img/teddy 6.jpg" },
    { id: 7, name: "Vịt Say Hi", price: 300000, category: "teddy", image: "img/teddy 7.jpg" },
    { id: 8, name: "Gà Dễ Thương", price: 230000, category: "teddy", image: "img/teddy 8.jpg" },
    { id: 9, name: "Gà Rất vui vẻ", price: 250000, category: "teddy", image: "img/teddy 9.jpg" },
    { id: 10, name: "Teddy Zô Truy", price: 270000, category: "teddy", image: "img/teddy 10.jpg" },
    { id: 11, name: "Teddy Tuộc Happy", price: 300000, category: "teddy", image: "img/teddy 11.jpg" },
    { id: 12, name: "Dog Cute", price: 230000, category: "teddy", image: "img/teddy 12.jpg" },

    // 2. DANH MỤC: GẤU HOẠT HÌNH (ID từ 101 - 112) -> Sửa toàn bộ thành img/ viết thường
    { id: 101, name: "Shin quạu quọ", price: 250000, category: "cartoon", image: "img/hh1.jpg" },
    { id: 102, name: "Chuột Cherry Mặt trời", price: 270000, category: "cartoon", image: "img/hh2.jpg" },
    { id: 103, name: "Gấu Say Hi", price: 300000, category: "cartoon", image: "img/hh3.jpg" },
    { id: 104, name: "Cat vui vẻ", price: 230000, category: "cartoon", image: "img/hh4.jpg" },
    { id: 105, name: "Thỏ Cáo 'Chúng ta chỉ là bạn' M1", price: 250000, category: "cartoon", image: "img/hh5.jpg" },
    { id: 106, name: "Thỏ Cáo 'Chúng ta chỉ là bạn' M2", price: 270000, category: "cartoon", image: "img/hh6.jpg" },
    { id: 107, name: "Shin Hip hop", price: 300000, category: "cartoon", image: "img/hh7.jpg" },
    { id: 108, name: "Doraemon Happy", price: 230000, category: "cartoon", image: "img/hh8.jpg" }, // Đã sửa lỗi Category gõ nhầm đường dẫn ở đây
    { id: 109, name: "Bông Tuyết Hồng", price: 250000, category: "cartoon", image: "img/hh9.jpg" },
    { id: 110, name: "Vịt Trầm Cảm", price: 270000, category: "cartoon", image: "img/hh10.jpg" },
    { id: 111, name: "Gấu Ôm Bình Sữa", price: 300000, category: "cartoon", image: "img/hh11.jpg" },
    { id: 112, name: "Bé Khóc Nhè", price: 230000, category: "cartoon", image: "img/hh12.jpg" },

    // 3. DANH MỤC: HÀNG MỚI VỀ (ID từ 201 - 210) -> Sửa toàn bộ thành img/ viết thường
    { id: 201, name: "Gấu Đô Con Giúp Bảo Vệ Chủ Nhân", price: 250000, category: "new", image: "img/new1.jpg" },
    { id: 202, name: "Bé Gấu Có Mái Tóc Đặc Biệt", price: 270000, category: "new", image: "img/new2.jpg" },
    { id: 203, name: "Tiểu Cường Thơm Tho", price: 300000, category: "new", image: "img/new3.jpg" },
    { id: 204, name: "Khỉ Đột Cô Đơn", price: 230000, category: "new", image: "img/new4.jpg" },
    { id: 205, name: "Súp Lơ Ngon Miệng", price: 250000, category: "new", image: "img/new5.jpg" },
    { id: 206, name: "Bà Cụ Vịt CuTe", price: 270000, category: "new", image: "img/new6.jpg" },
    { id: 207, name: "Heo Tinh Nghịch", price: 300000, category: "new", image: "img/new7.jpg" },
    { id: 208, name: "Gấu Trúc Đắp Mặt Nạ", price: 230000, category: "new", image: "img/new8.jpg" },
    { id: 209, name: "Cá Sấu Điệu Đà", price: 250000, category: "new", image: "img/new9.jpg" },
    { id: 210, name: "Khủng Long Mập Mạp", price: 270000, category: "new", image: "img/new10.jpg" },

    // 4. DANH MỤC: HOA GẤU BÔNG (ID từ 301 - 311) -> Sửa toàn bộ thành img/ viết thường
    { id: 301, name: "Bó hoa Ngựa Pony Hồng Ngọc Ngào", price: 250000, category: "flower", image: "img/hoa1.jpg" },
    { id: 302, name: "Bó hoa Bơ Xanh và Những Người Bạn Mini", price: 270000, category: "flower", image: "img/hoa2.jpg" },
    { id: 303, name: "Bó hoa Thỏ Bông & Đào Tiên May Mắn", price: 300000, category: "flower", image: "img/hoa3.jpg" },
    { id: 304, name: "Bó hoa Gấu Lotso Hương Dâu Hamburg", price: 230000, category: "flower", image: "img/hoa4.jpg" },
    { id: 305, name: "Bó hoa Cừu Bông Pinky Giáng Sinh", price: 250000, category: "flower", image: "img/hoa5.jpg" },
    { id: 306, name: "Bó hoa Voi Con & Khủng Long Tinh Nghịch", price: 270000, category: "flower", image: "img/hoa6.jpg" },
    { id: 307, name: "Bó hoa Thần Tài Nhí Pooh & Sư Tử Vàng", price: 300000, category: "flower", image: "img/hoa7.jpg" },
    { id: 308, name: "Bó hoa Capybara Quý Tộc Trưởng Thành", price: 230000, category: "flower", image: "img/hoa8.jpg" },
    { id: 309, name: "Bó hoa Mèo Hello Kitty Nơ Hồng Quý Phái", price: 250000, category: "flower", image: "img/hoa9.jpg" },
    { id: 310, name: "Bó hoa Chó Corgi Chân Ngắn Đại Công Tước", price: 270000, category: "flower", image: "img/hoa10.jpg" },
    { id: 311, name: "Bó hoa Chuột Mickey Đi Học Ngày Đầu Tiên", price: 300000, category: "flower", image: "img/hoa11.jpg" },

    // 5. DANH MỤC: BLIND BOX / TÚI MÙ (ID từ 401 - 410) -> Sửa toàn bộ thành img/ viết thường
    { id: 401, name: "Blindbox Zịt Sang Chấn: Gấu Mù Ngẫu Nhiên", price: 250000, category: "blindbox", image: "img/mu1.jpg" },
    { id: 402, name: "Blindbox Pokémon M1: Gấu Mù Ngẫu Nhiên", price: 270000, category: "blindbox", image: "img/mu2.jpg" },
    { id: 403, name: "Blindbox Pokémon M2: Gấu Mù Ngẫu Nhiên", price: 300000, category: "blindbox", image: "img/mu3.jpg" },
    { id: 404, name: "Blindbox Chopper: Gấu Mù Ngẫu Nhiên", price: 230000, category: "blindbox", image: "img/mu4.jpg" },
    { id: 405, name: "Blindbox Zoro: Gấu Mù Ngẫu Nhiên", price: 250000, category: "blindbox", image: "img/mu5.jpg" },
    { id: 406, name: "Blindbox Ace: Gấu Mù Ngẫu Nhiên", price: 270000, category: "blindbox", image: "img/mu6.jpg" },
    { id: 407, name: "Blindbox Luffy: Gấu Mù Ngẫu Nhiên", price: 300000, category: "blindbox", image: "img/mu7.jpg" },
    { id: 408, name: "Blindbox Sanji: Gấu Mù Ngẫu Nhiên", price: 230000, category: "blindbox", image: "img/mu8.jpg" },
    { id: 409, name: "Blindbox Nami: Gấu Mù Ngẫu Nhiên", price: 250000, category: "blindbox", image: "img/mu9.jpg" },
    { id: 410, name: "Blindbox Robin: Gấu Mù Ngẫu Nhiên", price: 270000, category: "blindbox", image: "img/mu10.jpg" },

    // 6. DANH MỤC: TÚI ĐEO CHÉO (ID từ 501 - 511) -> Sửa toàn bộ thành img/ viết thường
    { id: 501, name: "Túi Đeo Hình ngựa", price: 250000, category: "bag", image: "img/tui1.jpg" },
    { id: 502, name: "Túi Đeo Hình chó", price: 270000, category: "bag", image: "img/tui2.jpg" },
    { id: 503, name: "Túi Đeo Hình mèo", price: 300000, category: "bag", image: "img/tui3.jpg" },
    { id: 504, name: "Túi Đeo Hình chó hamburge", price: 230000, category: "bag", image: "img/tui4.jpg" },
    { id: 505, name: "Túi Đeo Hình cừu", price: 250000, category: "bag", image: "img/tui5.jpg" },
    { id: 506, name: "Túi Đeo Hình voi", price: 270000, category: "bag", image: "img/tui6.jpg" },
    { id: 507, name: "Túi Đeo Hình chó xám", price: 300000, category: "bag", image: "img/tui7.jpg" },
    { id: 508, name: "Túi Đeo Hình gấu trúc", price: 230000, category: "bag", image: "img/tui8.jpg" },
    { id: 509, name: "Túi Đeo Hình heo", price: 250000, category: "bag", image: "img/tui9.jpg" },
    { id: 510, name: "Túi Đeo Hình thỏ trắng", price: 270000, category: "bag", image: "img/tui10.jpg" },
    { id: 511, name: "Túi Đeo Hình thỏ ngọc", price: 300000, category: "bag", image: "img/tui11.jpg" },

    // 7. DANH MỤC: GẤU SIZE LỚN -> Chuẩn hóa đường dẫn img/ và tên file gạch nối teddy-x.jpg, hh-x.jpg, new-x.jpg
    { id: 701, name: "Gấu Teddy Tuyết Khổng Lồ Đội Mũ Cà Rốt", price: 450000, category: "giant", image: "img/teddy-1.jpg" },
    { id: 702, name: "Gấu Gấu Hồng Lotso Đại Thơm Hương Dâu", price: 490000, category: "giant", image: "img/teddy-2.jpg" },
    { id: 703, name: "Teddy Cà Rốt Ôm Củ Cải Ôm Ngủ Siêu Bự", price: 520000, category: "giant", image: "img/teddy-3.jpg" },
    { id: 704, name: "Shin Cậu Bé Bút Chì Đại Cosplay Khủng Long", price: 420000, category: "giant", image: "img/hh1.jpg" },
    { id: 705, name: "Chuột Cherry Tai To Đáng Yêu Bản Giới Hạn", price: 460000, category: "giant", image: "img/hh2.jpg" },
    { id: 706, name: "Mèo Máy Doraemon Happy Khổng Lồ Tròn Trịat", price: 390000, category: "giant", image: "img/hh8.jpg" },
    { id: 707, name: "Gấu Bông Capybara Ôm Bộ Đồ Trầm Cảm Size Đại", price: 550000, category: "giant", image: "img/new1.jpg" },
    { id: 708, name: "Heo Hồng Pig Thư Giãn Siêu Dài Ôm Ngủ Gối Ôm", price: 380000, category: "giant", image: "img/teddy-2.jpg" },
    { id: 709, name: "Cá Sấu Xanh Híp Mắt Siêu Bự Êm Ái", price: 410000, category: "giant", image: "img/teddy-3.jpg" },
    { id: 710, name: "Gấu Pooh Áo Đỏ Thần Tài Phiên Bản Khổng Lồ", price: 580000, category: "giant", image: "img/teddy-1.jpg" },

    // 8. DANH MỤC: GẤU SIZE NHỎ & MÓC KHÓA -> Chuẩn hóa đường dẫn tương tự
    { id: 801, name: "Móc Khóa Teddy Tuyết Trắng Bông Xù Đáng Yêu", price: 45000, category: "small", image: "img/teddy-1.jpg" },
    { id: 802, name: "Gấu Bông Heo Hồng Nhỏ Ôm Bình Sữa Đi Học", price: 55000, category: "small", image: "img/teddy-2.jpg" },
    { id: 803, name: "Móc Treo Balo Cà Rốt Cute Đeo Nơ Chuông", price: 49000, category: "small", image: "img/teddy-3.jpg" },
    { id: 804, name: "Móc Khóa Shin Cosplay Siêu Quậy Cực Chất", price: 60000, category: "small", image: "img/hh1.jpg" },
    { id: 805, name: "Chuột Cherry Đeo Balô Nhỏ Nhắn Xinh Xinh", price: 52000, category: "small", image: "img/hh2.jpg" },
    { id: 806, name: "Móc Khóa Doraemon Đeo Lắc Chuông Vàng Bằng Bông", price: 45000, category: "small", image: "img/hh8.jpg" },
    { id: 807, name: "Móc Khóa Capybara Chảy Mũi Gảy Rút Siêu Lầy", price: 65000, category: "small", image: "img/new1.jpg" },
    { id: 808, name: "Gấu Bông Trứng Lười Gudetama Đệm Mông Nhỏ", price: 48000, category: "small", image: "img/teddy-2.jpg" },
    { id: 809, name: "Móc Treo Mèo Thần Tài Mang Lại May Mắn", price: 50000, category: "small", image: "img/teddy-3.jpg" },
    { id: 810, name: "Móc Khóa Gấu Dâu Lotso Phấn Hồng Đáng Yêu", price: 58000, category: "small", image: "img/teddy-1.jpg" }
];

   /* ----- TRANG INDEX----- */
    /* ----- MUSIC PLAYER SIMULATION DỰA TRÊN LOCAL STATE ----- */
    const songs = [
      "Sweet Lofi Strawberries 🍓",
      "Bear's Lullaby Sleepy Lofi 🧸",
      "Matcha Green Tea Sweet Melody 🍵"
    ];
    let songIndex = 0;
    let isPlaying = true;
    let progressInterval;

    function togglePlay() {
      const vinyl = document.getElementById('musicVinyl');
      const icon = document.getElementById('playIcon');
      isPlaying = !isPlaying;
      
      if (isPlaying) {
        vinyl.classList.add('spinning');
        icon.className = "bi bi-pause-fill";
        startProgress();
      } else {
        vinyl.classList.remove('spinning');
        icon.className = "bi bi-play-fill";
        clearInterval(progressInterval);
      }
    }

    function startProgress() {
      clearInterval(progressInterval);
      const progressBar = document.getElementById('musicProgress');
      let currentWidth = parseFloat(progressBar.style.width) || 35;
      
      progressInterval = setInterval(() => {
        currentWidth += 0.5;
        if (currentWidth >= 100) {
          currentWidth = 0;
          nextSong();
        }
        progressBar.style.width = currentWidth + '%';
      }, 300);
    }

    function prevSong() {
      songIndex = (songIndex - 1 + songs.length) % songs.length;
      document.getElementById('musicSongTitle').textContent = songs[songIndex];
      document.getElementById('musicProgress').style.width = '0%';
      if (!isPlaying) togglePlay();
    }

    function nextSong() {
      songIndex = (songIndex + 1) % songs.length;
      document.getElementById('musicSongTitle').textContent = songs[songIndex];
      document.getElementById('musicProgress').style.width = '0%';
      if (!isPlaying) togglePlay();
    }

    /* ----- GUESTBOOK WISH NOTE LOGIC ----- */
    let selectedStickerChar = "🧸";
    const wishesPreset = [
      { author: "Hồng Nhung", msg: "Mấy bé gấu bông đáng yêu lắm! Web thiết kế siêu xịn mịn.", sticker: "🧸" },
      { author: "Minh Quân", msg: "Chúc dự án SweetBear đạt điểm tối đa nha hai cô gái!", sticker: "✨" },
      { author: "Khánh Linh", msg: "Bó hoa tulip thỏ con đẹp xỉu, sẽ ủng hộ dài dài dâu tây!", sticker: "🍓" }
    ];

    function loadWishes() {
      const stored = localStorage.getItem('sweet_wishes');
      let data = stored ? JSON.parse(stored) : wishesPreset;
      const container = document.getElementById('corkboardContainer');
      container.innerHTML = '';

      data.forEach((w, index) => {
        const colorClass = `note-color-${(index % 4) + 1}`;
        const col = document.createElement('div');
        col.className = 'col-sm-6 col-md-4';
        col.innerHTML = `
          <div class="wish-note ${colorClass}">
            <div class="wish-text">
              <span>${w.sticker}</span> ${w.msg}
            </div>
            <div class="wish-author">-- Từ ${w.author}</div>
          </div>
        `;
        container.appendChild(col);
      });
    }

    function selectSticker(el) {
      document.querySelectorAll('.sticker-option').forEach(opt => opt.classList.remove('selected'));
      el.classList.add('selected');
      selectedStickerChar = el.textContent;
    }

    function addWish(event) {
      event.preventDefault();
      const authorInput = document.getElementById('wishAuthor');
      const msgInput = document.getElementById('wishMsg');

      const newWish = {
        author: authorInput.value.trim(),
        msg: msgInput.value.trim(),
        sticker: selectedStickerChar
      };

      const stored = localStorage.getItem('sweet_wishes');
      let data = stored ? JSON.parse(stored) : wishesPreset;
      data.unshift(newWish); // Thêm vào đầu bảng ghim

      localStorage.setItem('sweet_wishes', JSON.stringify(data));
      loadWishes();

      // Reset form
      authorInput.value = '';
      msgInput.value = '';
    }

    /* ----- SCROLL TO TOP SCROLLER ----- */
    function handleScrollBtn() {
      const btn = document.getElementById('scrollTopBtn');
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      "use strict";

      // Nạp danh sách lời chúc
      loadWishes();

      // Khởi động trình phát nhạc mini
      startProgress();

      // Theo dõi scroll cho nút Bé gấu lên đầu trang
      window.addEventListener('scroll', handleScrollBtn);

      /* Bật tắt menu trên thiết bị di động */
      const headerToggleBtn = document.querySelector('.header-toggle');
      if (headerToggleBtn) {
        headerToggleBtn.addEventListener('click', function() {
          document.querySelector('body').classList.toggle('mobile-nav-active');
          this.classList.toggle('bi-list');
          this.classList.toggle('bi-x');
        });
      }

      /* Ẩn menu di động khi nhấn vào link */
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.addEventListener('click', () => {
          if (document.querySelector('.mobile-nav-active')) {
            document.querySelector('body').classList.remove('mobile-nav-active');
            headerToggleBtn.classList.toggle('bi-list');
            headerToggleBtn.classList.toggle('bi-x');
          }
        });
      });

      /* Theo dõi vị trí cuộn màn hình để active menu */
      let navmenulinks = document.querySelectorAll('.navmenu a');
      const navmenuScrollspy = () => {
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
        if (isAtBottom) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
          const lastLink = navmenulinks[navmenulinks.length - 2]; // active Ước nguyện hoặc store gần cuối
          if (lastLink) lastLink.classList.add('active');
          return;
        }

        navmenulinks.forEach(navmenulink => {
          if (!navmenulink.hash) return;
          let section = document.querySelector(navmenulink.hash);
          if (!section) return;
          let position = window.scrollY + 200;
          if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
            navmenulink.classList.add('active');
          } else {
            navmenulink.classList.remove('active');
          }
        })
      }
      window.addEventListener('load', navmenuScrollspy);
      document.addEventListener('scroll', navmenuScrollspy);

      /* Khởi tạo AOS */
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        mirror: false
      });

      /* Khởi tạo GLightbox */
      const glightbox = GLightbox({
        selector: '.glightbox'
      });

      /* Xử lý chuyển đổi qua lại hồ sơ chi tiết (Dossier Tabs) mượt mà */
      document.querySelectorAll('.member-card').forEach(card => {
        card.addEventListener('click', () => {
          const nodeId = card.getAttribute('data-node'); // "node_01" hoặc "node_02"
          
          // Đổi trạng thái active của Thẻ Polaroid
          document.querySelectorAll('.member-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');

          // Ẩn tất cả các notebook
          document.querySelectorAll('.dossier-notebook').forEach(notebook => {
            notebook.classList.add('d-none');
          });

          // Hiển thị notebook mục tiêu
          const targetDossier = document.getElementById(`dossier-${nodeId}`);
          if (targetDossier) {
            targetDossier.classList.remove('d-none');
            targetDossier.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Chạy lại hiệu ứng xuất hiện mềm mại
            targetDossier.classList.remove('fade-transition');
            void targetDossier.offsetWidth; // kích hoạt reflow của trình duyệt
            targetDossier.classList.add('fade-transition');
          }
        });
      });

    });



// ===== KHỞI TẠO GIỎ HÀNG =====
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== KHI TRANG TẢI XONG =====
document.addEventListener("DOMContentLoaded", function () {
    // Tải Bootstrap Bundle JS động nếu chưa có
    if (typeof bootstrap === 'undefined') {
        const bsScript = document.createElement('script');
        bsScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
        bsScript.async = true;
        document.head.appendChild(bsScript);
    }

    injectAlertModal();
    updateCartCount();
    renderCart();
});

// ===== HÀM CHUYỂN ĐẾN TRANG GIỎ HÀNG =====
function goToCart() {
    window.location.href = "GIOHANG.html";
}

// ===== HIỂN THỊ CHUYỂN ĐỔI PAGE =====
function showPage(page) {
    const sections = document.querySelectorAll(".page-section");
    sections.forEach(p => p.classList.add("d-none"));

    const target = document.getElementById(page);
    if (target) target.classList.remove("d-none");

    if (page === "products") renderProducts(products);
    if (page === "cart") renderCart();
}

// ===== RENDER DANH SÁCH SẢN PHẨM TRÊN ĐỐI TƯỢNG GRID =====
function renderProducts(list) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;

    grid.innerHTML = list.map(p => `
        <div class="col-md-4 mb-4">
            <div class="card shadow-sm h-100">
                <img src="${p.image}" class="product-img w-100" style="height: 200px; object-fit: cover;">
                <div class="card-body text-center d-flex flex-column justify-content-between">
                    <h5>${p.name}</h5>
                    <p class="text-danger fw-bold">
                        ${p.price.toLocaleString()} đ
                    </p>
                    <button class="btn btn-pink-sweet rounded-pill btn-sm" onclick="addToCart(${p.id})">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// ===== HÀM THÊM VÀO GIỎ =====
function addToCart(id) {
    const product = products.find(p => p.id === id);
    if (!product) {
        console.error("Không tìm thấy sản phẩm có ID: " + id);
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    
    showSweetAlert(
        "Đã Thêm Vào Giỏ! 🧸", 
        `Bé gấu bông "${product.name}" đã nằm gọn trong giỏ hàng rồi nè!`
    );
}

// ===== CẬP NHẬT BADGE SỐ LƯỢNG TRÊN CÁC ICON GIỎ HÀNG =====
function updateCartCount() {
    const cartCountElements = document.querySelectorAll("#cartCount");
    if (cartCountElements.length > 0) {
        cartCountElements.forEach(el => {
            el.textContent = cart.length;
        });
    }
}

// ===== HIỂN THỊ CHI TIẾT GIỎ HÀNG CÓ NÚT XÓA VÀ HÌNH ẢNH =====
function renderCart() {
    const cartDiv = document.getElementById("cartItems");
    const totalDiv = document.getElementById("cartTotal");

    if (!cartDiv || !totalDiv) return;

    if (cart.length === 0) {
        cartDiv.innerHTML = `
            <div class="text-center py-5">
                <p class="text-muted fs-5 mb-0">Giỏ hàng của bạn đang trống rỗng... 🧸</p>
            </div>`;
        totalDiv.textContent = "0";
        return;
    }

    let total = 0;

    cartDiv.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item d-flex align-items-center justify-content-between border-bottom py-3">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" width="60" class="rounded me-3" style="height:60px; object-fit:cover; border: 1px solid #ffd1e8;">
                    <div>
                        <h6 class="mb-1 fw-bold text-dark">${item.name}</h6>
                        <span class="text-pink fw-bold">${item.price.toLocaleString()} đ</span>
                    </div>
                </div>
                <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="removeFromCart(${index})">
                    ❌ Xóa
                </button>
            </div>
        `;
    }).join("");

    totalDiv.textContent = total.toLocaleString();
}

// ===== HÀM XÓA SẢN PHẨM KHỎI GIỎ =====
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

// ===== HÀM XỬ LÝ FORM THANH TOÁN ĐẶT HÀNG =====
function handleCheckout(event) {
    event.preventDefault();

    if (cart.length === 0) {
        showSweetAlert("Ối!! 🧸", "Giỏ hàng đang trống, cậu chọn vài bé gấu trước khi thanh toán nha!");
        return;
    }

    const nameEl = document.getElementById("orderName");
    const phoneEl = document.getElementById("orderPhone");
    const addressEl = document.getElementById("orderAddress");

    const name = nameEl ? nameEl.value : "Khách hàng";
    const phone = phoneEl ? phoneEl.value : "";
    const address = addressEl ? addressEl.value : "";

    showSweetAlert(
        "Đặt Hàng Thành Công! 🎉", 
        `Cảm ơn ${name} đã ủng hộ shop nha! Đơn hàng sẽ sớm được gửi tới địa chỉ: ${address} ${phone ? '(SĐT: ' + phone + ')' : ''}.`
    );

    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    
    const form = document.getElementById("checkoutForm");
    if (form) form.reset();
    
    updateCartCount();
    renderCart();
}

// ===== HÀM BẬT THÔNG BÁO CUTE CHÍNH GIỮA MÀN HÌNH =====
function showSweetAlert(title, message) {
    const modal = document.getElementById("sweetAlertModal");
    if (modal) {
        const titleEl = document.getElementById("sweetAlertTitle");
        const msgEl = document.getElementById("sweetAlertMsg");
        if (titleEl) titleEl.innerText = title;
        if (msgEl) msgEl.innerText = message;
        modal.classList.remove("d-none");
    } else {
        alert(title + "\n" + message);
    }
}

// ===== HÀM ĐÓNG THÔNG BÁO =====
function closeSweetAlert() {
    const modal = document.getElementById("sweetAlertModal");
    if (modal) {
        modal.classList.add("d-none");
    }
}

// ===== INJECT ALERT MODAL =====
function injectAlertModal() {
    // Tự động chèn Alert Modal nếu chưa có
    if (!document.getElementById('sweetAlertModal')) {
        const alertHTML = `
        <div id="sweetAlertModal" class="sweet-alert-overlay d-none" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999; display: flex; align-items: center; justify-content: center;">
            <div class="sweet-alert-box text-center p-4 bg-white shadow-lg" style="border-radius: 20px; max-width: 400px; width: 90%; margin: auto; border: 3px solid #ffccd5; animation: zoomIn 0.3s;">
                <h3 class="fw-bold text-pink mb-2" id="sweetAlertTitle" style="color: #ff85a2;">Thông báo</h3>
                <p class="text-secondary mb-3" id="sweetAlertMsg"></p>
                <button class="btn px-4 py-2" onclick="closeSweetAlert()" style="background-color: #ff85a2; color: white; border-radius: 20px; border: none; font-weight: bold;">Thén kìu ❤️</button>
            </div>
        </div>`;
        const divA = document.createElement('div');
        divA.innerHTML = alertHTML;
        document.body.appendChild(divA.firstElementChild);
    }
}



// ===== TỰ ĐỘNG HIỆN ẢNH QUẢNG CÁO KHI MỞ WEB =====
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        const adsModalElement = document.getElementById('imageAdsModal');
        if (adsModalElement) {
            const myAdsModal = new bootstrap.Modal(adsModalElement);
            myAdsModal.show();
        }
    }, 2500); // 2500 miligiây = 2.5 giây sau khi load trang
});



// ===== LOGIC ĐÓNG MỞ BẢNG CHAT GÓC PHẢI =====
document.addEventListener("DOMContentLoaded", function () {
    const toggleChatBtn = document.getElementById('toggleChatBtn');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const sweetChatWindow = document.getElementById('sweetChatWindow');

    // Nhấp vào nút tròn -> Mở hoặc Đóng khung chat
    if (toggleChatBtn && sweetChatWindow) {
        toggleChatBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            sweetChatWindow.classList.toggle('d-none');
        });
    }

    // Nhấp vào nút dấu X ở đầu khung chat -> Ẩn khung chat đi
    if (closeChatBtn && sweetChatWindow) {
        closeChatBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            sweetChatWindow.classList.add('d-none');
        });
    }

    // Nhấp chuột ra ngoài vùng chat -> Tự động khép bảng chat lại cho gọn
    document.addEventListener('click', function (e) {
        if (sweetChatWindow && !sweetChatWindow.contains(e.target) && e.target !== toggleChatBtn) {
            sweetChatWindow.classList.add('d-none');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    
    // --- KHẮC PHỤC LỖI ĐEN MÀN HÌNH: CHỈ KHỞI TẠO ADS MODAL ĐÚNG 1 LẦN DUY NHẤT ---
    const adsModalElement = document.getElementById('imageAdsModal');
    if (adsModalElement) {
        // Đảm bảo dọn sạch các lớp phông đen mờ dư thừa nếu modal bị ẩn
        adsModalElement.addEventListener('hidden.bs.modal', function () {
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(backdrop => backdrop.remove());
            document.body.style.overflow = 'auto';
            document.body.style.paddingRight = '0px';
        });

        // Bật quảng cáo lên sau 2 giây một lần duy nhất
        setTimeout(function () {
            const myAdsModal = new bootstrap.Modal(adsModalElement);
            myAdsModal.show();
        }, 2000);
    }

    // --- LOGIC BẬT LÊN / HẠ XUỐNG CỦA PHẦN CHAT HỖ TRỢ ---
    const toggleChatBtn = document.getElementById('toggleChatBtn');
    const closeChatBtn = document.getElementById('closeChatBtn');
    const minimizeChatArea = document.getElementById('minimizeChatArea');
    const sweetChatWindow = document.getElementById('sweetChatWindow');

    // Nhấn vào nút đám mây tròn -> Hiện khung chat, ẩn nút tròn đi
    if (toggleChatBtn && sweetChatWindow) {
        toggleChatBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            sweetChatWindow.classList.remove('d-none');
            toggleChatBtn.classList.add('d-none'); // Ẩn nút tròn khi mở khung chat
        });
    }

    // Nhấn vào dấu X -> Ẩn khung chat, hiện lại nút tròn
    if (closeChatBtn && sweetChatWindow && toggleChatBtn) {
        closeChatBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            sweetChatWindow.classList.add('d-none');
            toggleChatBtn.classList.remove('d-none'); // Hiện lại nút tròn để người dùng bật lại
        });
    }

    // Nhấn vào thanh tiêu đề màu hồng của khung chat -> Thu nhỏ / hạ xuống
    if (minimizeChatArea && sweetChatWindow && toggleChatBtn) {
        minimizeChatArea.addEventListener('click', function (e) {
            // Không hạ xuống nếu nhấn trúng nút close X ở góc
            if (e.target !== closeChatBtn) {
                sweetChatWindow.classList.add('d-none');
                toggleChatBtn.classList.remove('d-none');
            }
        });
    }
});

// Giữ lại các hàm chuyển trang nội bộ của bạn
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('d-none');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.remove('d-none'); // Đảm bảo hiển thị
        targetPage.classList.remove('d-none');
        targetPage.scrollIntoView({ behavior: 'smooth' });
    }
}




// =================================================================
// HÀM VẠN NĂNG: TỰ ĐỘNG RENDERS SẢN PHẨM CHO TẤT CẢ CÁC TRANG CON
// =================================================================
function filterAndRenderAllProducts() {
    const grid = document.getElementById('productsGrid');
    const countElem = document.getElementById('productCount');
    if (!grid) return; // Nếu trang không có lưới sản phẩm thì không chạy

    // 1. TỰ ĐỘNG ĐỌC DANH MỤC TỪ HTML (Lấy giá trị từ thuộc tính data-category)
    const currentCategory = grid.getAttribute('data-category');
    if (!currentCategory) return;

    // 2. Lọc sản phẩm theo danh mục vừa đọc được
    let filteredList = products.filter(p => p.category === currentCategory);

    // 3. Cập nhật số lượng hiển thị lên màn hình
    if (countElem) {
        countElem.innerText = filteredList.length;
    }

    // 4. Xử lý bộ sắp xếp giá tiền tự động
    const sortValue = document.getElementById('sortSelect')?.value;
    if (sortValue === 'asc') {
        filteredList.sort((a, b) => a.price - b.price); // Thấp đến cao
    } else if (sortValue === 'desc') {
        filteredList.sort((a, b) => b.price - a.price); // Cao xuống thấp
    } else {
        filteredList.sort((a, b) => a.id - b.id); // Mặc định theo ID
    }

    // 5. Render giao diện chuẩn cấu trúc Lam Thao Style
    grid.innerHTML = filteredList.map(product => `
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 lamthao-style-card text-center shadow-sm h-100" style="border-radius: 20px; overflow: hidden; background: #fff; margin-bottom: 5px;">
                <div class="card-img-holder position-relative" style="height: 220px; overflow: hidden; background: #fdf6f9;">
                    <img src="${product.image}" class="card-img-top w-100 h-100" alt="${product.name}" style="object-fit: cover;">
                </div>
                <div class="card-body-lamthao p-3 d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="fw-bold text-dark text-truncate mb-1">${product.name}</h6>
                        <p class="price-text-pink fw-bold mb-2" style="color: #ff4fa3;">${product.price.toLocaleString('vi-VN')} đ</p>
                    </div>
                    <div>
                        <button class="btn btn-lamthao-pink w-100 rounded-pill fw-bold btn-sm" onclick="addToCart(${product.id})">
                            THÊM GIỎ HÀNG 🛒
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Tự động kích hoạt khi trang web vừa tải xong
document.addEventListener('DOMContentLoaded', function() {
    filterAndRenderAllProducts();
});



// ================= PHẦN QUẢN LÝ ẨN / HIỆN TRANG CHỦ VÀ GIỎ HÀNG =================
function showPage(pageId) {
    const homeSection = document.getElementById('home');
    const cartSection = document.getElementById('cart');

    if (pageId === 'cart') {
        // Ẩn trang chủ, hiện giỏ hàng
        if (homeSection) homeSection.classList.add('d-none');
        if (cartSection) {
            cartSection.classList.remove('d-none');
            renderCartItems(); // Cập nhật danh sách hàng hóa ngay khi mở trang giỏ hàng
        }
    } else if (pageId === 'home') {
        // Hiện trang chủ, ẩn giỏ hàng
        if (cartSection) cartSection.classList.add('d-none');
        if (homeSection) homeSection.classList.remove('d-none');
    }
}

// Hàm render danh sách mặt hàng có trong giỏ hàng ra HTML
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="text-center text-muted py-4">Giỏ hàng đang trống trơn hà... 🧸 Hãy chọn một bé gấu nhé!</p>`;
        if (cartTotalContainer) cartTotalContainer.innerText = '0';
        return;
    }

    let totalHTML = '';
    let totalMoney = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalMoney += itemTotal;

        totalHTML += `
            <div class="d-flex align-items-center justify-content-between border-bottom py-3 flex-wrap gap-2">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" width="60" height="60" class="rounded me-3" style="object-fit: cover;">
                    <div>
                        <h6 class="fw-bold text-dark mb-1">${item.name}</h6>
                        <small class="text-muted">${item.price.toLocaleString('vi-VN')} đ</small>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button class="btn btn-sm btn-outline-secondary px-2" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="fw-bold px-1">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-secondary px-2" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    <button class="btn btn-sm btn-link text-danger ms-2" onclick="removeFromCart(${item.id})"><i class="bi bi-trash-fill"></i> Xóa</button>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = totalHTML;
    if (cartTotalContainer) cartTotalContainer.innerText = totalMoney.toLocaleString('vi-VN');
}

// Hàm xử lý khi người dùng ấn nút đặt hàng gửi Form
function handleCheckout(event) {
    event.preventDefault(); // Chặn tải lại trang

    if (cart.length === 0) {
        alert("Giỏ hàng của cậu đang trống, không thể đặt hàng nha!");
        return;
    }

    const name = document.getElementById('orderName').value;
    const phone = document.getElementById('orderPhone').value;
    const address = document.getElementById('orderAddress').value;
    const payment = document.getElementById('paymentMethod').value;

    alert(`🎉 Chúc mừng ${name} đã đặt hàng thành công!\nSweetBear sẽ liên hệ qua SĐT ${phone} để giao hàng tới cậu sớm nhất nhé! ❤️`);
    
    // Xóa sạch đơn hàng sau khi đặt thành công
    cart = [];
    localStorage.setItem('sweetbear_cart', JSON.stringify(cart));
    updateCartBadge();
    showPage('home'); // Quay về trang chủ
}

// Đồng bộ hiển thị lại Badge số lượng giỏ hàng khi load trang
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});