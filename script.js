// ==========================================
// ĐOẠN CODE BỔ SUNG: CẤU HÌNH GIAO DIỆN MÀN HÌNH RỘNG & PHÔNG CHỮ TO
// (AI tự động nhúng vào HTML, bạn không cần sửa file CSS)
// ==========================================
const upscaleStyle = document.createElement('style');
upscaleStyle.innerHTML = `
  /* Mở rộng khung chứa chính lên 1200px cho máy tính */
  body > div, .container, #app, main {
    max-width: 1200px !important;
    width: 95% !important;
    margin: 0 auto !important;
  }
  header, .header {
    max-width: 1200px !important;
    width: 100% !important;
  }
  .word-card {
    width: 100% !important;
    box-sizing: border-box !important;
    position: relative; /* Để badge TOCFL nằm góc */
  }

  /* NÂNG CẤP KÍCH THƯỚC PHÔNG CHỮ (BIG FONT UPDATE) */
  body {
    font-size: 20px !important; /* Phông nền cơ bản to hơn */
    line-height: 1.7 !important;
    color: #2c3e50;
  }
  
  /* Từ chính to đại */
  .word-head {
    font-size: 64px !important; 
    margin: 0 0 15px 0 !important;
    font-weight: 700 !important;
  }
  .audio-btn { font-size: 32px !important; }

  /* Pinyin và IPA rõ ràng */
  .pinyin-text { font-size: 1.5em !important; color: #2980b9 !important; }
  .ipa-text { font-size: 1.2em !important; color: #7f8c8d !important; }

  /* Các đề mục */
  .label { font-size: 1.1em !important; font-weight: 700 !important; }
  p, .content-section { font-size: 1.1em !important; }
  
  /* Từ ghép */
  .compound-box span { font-size: 1.2em !important; } /* Chữ Hán từ ghép */
  
  /* Ví dụ */
  .example-zh { font-size: 1.3em !important; font-weight: 500 !important; }
  .ex-phonetic { font-size: 1.1em !important; }
  
  /* Badge TOCFL */
  .badge {
    font-size: 14px !important;
    padding: 6px 15px !important;
  }

  /* CẤU TRÚC GIAO DIỆN HÌNH ẢNH MINH HỌA */
  .card-header-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    margin-bottom: 20px;
  }
  .word-info-group {
    flex: 1;
  }
  .word-image-container {
    width: 250px; /* Kích thước ảnh minh họa */
    height: 250px;
    flex-shrink: 0;
    border-radius: 20px;
    overflow: hidden;
    border: 5px solid #fff;
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
    background-color: #f9f9f9;
  }
  .word-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ảnh tự co giãn đẹp */
  }

  /* Reponsive cho điện thoại (co về 1 cột nếu màn hình nhỏ) */
  @media (max-width: 768px) {
    .card-header-flex { flex-direction: column-reverse; align-items: center; }
    .word-image-container { width: 100%; max-width: 300px; height: 300px; margin-bottom: 20px; }
    .word-head { font-size: 48px !important; text-align: center; }
    .phonetic-row { text-align: center; }
  }
`;
document.head.appendChild(upscaleStyle);


// ==========================================
// 1. DANH SÁCH DỮ LIỆU TỪ VỰNG (FULL BÀI 1 + BÀI 2 + CÓ HỖ TRỢ ẢNH)
// ==========================================
// HƯỚNG DẪN THÊM ẢNH: Hãy thêm dòng `image: "đường_link_ảnh.jpg",` vào mỗi từ.
// Mình đã thêm ảnh mẫu cho từ "茶" (Trà) và "咖啡" (Cà phê) để bạn xem thử.

// ==========================================
// 2. HÀM ÂM THANH (ĐỌC CHẬM 0.75, GIỌNG ĐÀI LOAN)
// ==========================================
window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };

function playAudio(text, lang) {
  if (!text) return;
  window.speechSynthesis.cancel();
  
  const cleanText = text.replace(/[【】()（）:<br>]/g, " ").trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  
  utterance.lang = lang;
  utterance.rate = 0.75; 
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const bestVoice = voices.find(v => v.lang === 'zh-TW' && (v.name.includes('Google') || v.name.includes('Yating'))) 
                 || voices.find(v => v.lang === 'zh-TW') 
                 || voices.find(v => v.lang.includes('zh'));
  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 3. TÍNH NĂNG TẠO FILE PDF LUYỆN VIẾT TRỰC TIẾP
// ==========================================
function downloadPDF(char, pinyin, hanViet) {
  const printWindow = window.open('', '_blank');
  let gridHtml = '';
  for(let i = 0; i < 7; i++) {
    gridHtml += `<div style="display:flex; width:100%;">`;
    for(let j = 0; j < 8; j++) {
      let opacity = j === 0 ? 1 : (j < 4 ? 0.2 : 0.05); 
      gridHtml += `
        <div style="flex:1; aspect-ratio:1/1; border: 1px solid #7cb5ec; position:relative; display:flex; align-items:center; justify-content:center; box-sizing:border-box;">
          <div style="position:absolute; width:100%; height:1px; border-top:1px dashed #b3d4f4; top:50%;"></div>
          <div style="position:absolute; width:1px; height:100%; border-left:1px dashed #b3d4f4; left:50%;"></div>
          <svg style="position:absolute; width:100%; height:100%; left:0; top:0;" viewBox="0 0 100 100" preserveAspectRatio="none">
             <line x1="0" y1="0" x2="100" y2="100" stroke="#b3d4f4" stroke-width="1" stroke-dasharray="4,4" />
             <line x1="100" y1="0" x2="0" y2="100" stroke="#b3d4f4" stroke-width="1" stroke-dasharray="4,4" />
          </svg>
          <div style="font-size: 55px; font-family: 'Kaiti TC', 'STKaiti', 'KaiTi', serif; opacity: ${opacity}; color: black; z-index:1;">${char}</div>
        </div>
      `;
    }
    gridHtml += `</div>`;
  }

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${char} - Writing Practice PDF</title>
      <style>
        @media print {
          @page { size: A4 portrait; margin: 15mm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 0; padding: 20px; }
        .header { text-align: center; color: #2980b9; margin-bottom: 20px; }
        .btn { padding: 12px 25px; background: #e74c3c; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight:bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); transition: 0.2s;}
        .btn:hover { background: #c0392b; }
      </style>
    </head>
    <body>
      <div class="no-print" style="text-align:center; margin-bottom: 20px;">
        <p style="color:#e74c3c; font-style:italic;">Hệ thống đã tạo xong mẫu viết. Hãy bấm nút dưới đây để lưu thành file PDF!</p>
        <button class="btn" onclick="window.print()">🖨️ Lưu thành file PDF / In ngay</button>
      </div>
      <div class="header">
        <h1 style="margin:0; font-size: 36px; font-family: 'Segoe UI', sans-serif;">${char} Writing Practice</h1>
        <p style="color:#555; font-size:20px; margin-top:5px;">Pinyin: <span style="color:#e74c3c; font-weight:bold;">${pinyin}</span> &nbsp;|&nbsp; Hán Việt: <strong>${hanViet}</strong></p>
      </div>
      <div style="border: 2px solid #7cb5ec; width: 100%; max-width: 800px; margin: 0 auto; display:flex; flex-direction:column; background:white;">
        ${gridHtml}
      </div>
    </body>
    </html>
  `;
  printWindow.document.write(html);
  printWindow.document.close();
  
  setTimeout(() => { printWindow.print(); }, 500);
}

// ==========================================
// --- HỆ THỐNG BIẾN TOÀN CỤC CHO PHÂN TRANG ---
// ==========================================
let currentPage = 1;         // Trang hiện tại
const itemsPerPage = 10;     // Số từ vựng mỗi trang (bạn có thể đổi thành 20, 30 tùy ý)
let currentDisplayData = []; // Mảng chứa dữ liệu đang được hiển thị (để chia trang)

// Hàm gộp toàn bộ dữ liệu từ vựng (A1 + A2)
function getAllDictData() {
    let allData = [];
    if (typeof dictionaryData !== 'undefined') allData = allData.concat(dictionaryData);
    if (typeof dataA2 !== 'undefined') allData = allData.concat(dataA2);
    return allData;
}

// ==========================================
// --- HÀM RENDER TỪ VỰNG CHÍNH (ĐÃ TÍCH HỢP PHÂN TRANG) ---
// ==========================================
function displayWords(data, page = 1) {
    const container = document.getElementById('dictionary-container');
    if (!container) return;

    // Lưu lại data hiện tại và tính toán trang
    currentDisplayData = data;
    currentPage = page;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = currentDisplayData.slice(startIndex, endIndex);

    // Xóa trắng và In dữ liệu của trang hiện tại
    container.innerHTML = paginatedItems.map((item, index) => {
        // --- GIỮ NGUYÊN HOÀN TOÀN CODE HTML CŨ CỦA BẠN DƯỚI NÀY ---
        const wordsArray = item.word.split('/');
        const wordHeaderHtml = wordsArray.map(w => {
            const trimmedWord = w.trim();
            return `${trimmedWord} <button onclick="playAudio('${trimmedWord}', 'zh-TW')" class="audio-btn" style="border:none; background:none; cursor:pointer; font-size:24px; vertical-align:middle;">🔊</button>`;
        }).join(' <span class="divider" style="color:#ccc;">/</span> ');

        const rawIdiom = item.idiom || "";
        const idiomSplit = rawIdiom.split('-');
        const idiomZhandPy = idiomSplit[0] ? idiomSplit[0].trim() : ""; 
        const idiomVn = idiomSplit[1] ? idiomSplit[1].trim() : ''; 
        const idiomOnlyZh = idiomZhandPy.split('(')[0] ? idiomZhandPy.split('(')[0].trim() : ""; 

        return `
        <div class="word-card" style="border:1px solid #ddd; padding:25px; margin:20px 0; border-radius:15px; background:#fff; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
          
          <div class="card-header-flex">
            
            <div class="word-info-group">
              <span class="badge" style="background:#f39c12; color:white; padding:5px 12px; border-radius:20px; font-size:12px; font-weight:bold;">${item.level || "TOCFL"}</span>
              <h1 class="word-head" style="color:#2c3e50;">${wordHeaderHtml}</h1>
              <div class="phonetic-row">
                <span class="pinyin-text">${item.pinyin}</span>
                ${item.ipa ? `<span class="ipa-text" style="color:#7f8c8d; font-style:italic; margin-left:12px;">/ ${item.ipa} /</span>` : ''}
              </div>
              <p style="margin-top:10px;"><strong>Hán Việt:</strong> ${item.hanViet}</p>
            </div>

            ${item.image ? `
              <div class="word-image-container">
                <img src="${item.image}" class="word-image" alt="Minh họa cho từ ${item.word}">
              </div>
            ` : ''}
          </div>

          <div class="content-section" style="background: #e8f6f3; padding: 12px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #1abc9c;">
            <span class="label" style="color: #16a085;">BỘ THỦ & CẤU TẠO (部首):</span>
            <p style="margin: 0; color: #2c3e50;">${item.radical}</p>
          </div>

          <div class="stroke-section" style="margin: 15px 0; display: flex; gap: 15px; flex-wrap: wrap;" id="stroke-container-${startIndex + index}"></div>
          
          <div class="content-section" style="background: #fff8f8; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #e74c3c;">
            <span class="label" style="color: #c0392b;">TỪ GHÉP (合成詞):</span>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-top: 8px;">
              ${item.compounds && item.compounds.length > 0 ? item.compounds.map(c => `
                <div class="compound-box" style="background: white; border: 1px solid #ffcccc; padding: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                  <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:bold; color:#d35400; cursor:pointer;" onclick="playAudio('${c.tc}', 'zh-TW')">${c.tc}</span>
                    <button onclick="playAudio('${c.tc}', 'zh-TW')" style="border:none; background:none; cursor:pointer; font-size:18px;">🔊</button>
                  </div>
                  <div style="font-size:0.9em; color:#2980b9; margin: 2px 0;">${c.py}</div>
                  <div style="font-size:0.95em; color:#666;">${c.vn}</div>
                </div>
              `).join('') : '<span style="color:#999; font-style:italic;">Đang cập nhật...</span>'}
            </div>
          </div>

          <div class="content-section" style="border-left: 5px solid #b22222; background: #f9f9f9; padding: 10px; margin-top: 15px;">
            <span class="label">GIẢI THÍCH:</span>
            <p style="margin-top: 5px;">${item.explanation}</p>
          </div>

          <div class="content-section" style="background: #f0f7ff; padding: 10px; border-radius: 8px; margin-top: 15px;">
            <span class="label" style="color: #2980b9;">VÍ DỤ (例子):</span>
            ${item.examples && item.examples.length > 0 ? item.examples.map(ex => `
              <div class="ex-item" style="margin-top: 10px; border-bottom: 1px dashed #ccc; padding-bottom: 10px;">
                <div class="example-zh">
                  ${ex.tc} <button onclick="playAudio('${ex.tc}', 'zh-TW')" class="audio-btn-sm" style="border:none; background:none; cursor:pointer; font-size:18px;">🔊</button>
                </div>
                <div class="ex-phonetic" style="color: #2980b9; margin: 4px 0; font-weight:500;">
                  ${ex.py}
                </div>
                <div class="example-vi" style="color: #555;">${ex.vn}</div>
              </div>
            `).join('') : '<span style="color:#999; font-style:italic;">Đang cập nhật...</span>'}
          </div>

          ${idiomZhandPy ? `
          <div class="content-section" style="border: none; background: #fffbe6; padding: 12px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #f39c12;">
            <strong>💡 Thành ngữ / Cụm từ hay:</strong> 
            <span style="color: #d35400; font-weight: bold; margin-left:5px;">${idiomZhandPy}</span>
            <button onclick="playAudio('${idiomOnlyZh}', 'zh-TW')" class="audio-btn-sm" style="border:none; background:none; cursor:pointer; margin-left:5px;">🔊</button>
            <div style="font-size: 0.9em; color: #555; margin-top: 5px;">
              Nghĩa: ${idiomVn}
            </div>
          </div>` : ''}
        </div>
        `;
    }).join('');

    // KHỞI TẠO VẼ NÉT CHỮ
    if (typeof HanziWriter !== 'undefined') {
        paginatedItems.forEach((item, index) => {
            const actualIndex = startIndex + index;
            const targetDiv = document.getElementById(`stroke-container-${actualIndex}`);
            if (!targetDiv) return;
            
            const mainWord = item.word.split('/')[0].replace(/[a-zA-Z0-9\s，。？！、]/g, '').trim();
            mainWord.split('').forEach(char => {
                const wrapDiv = document.createElement('div');
                wrapDiv.style.display = 'flex'; wrapDiv.style.flexDirection = 'column'; wrapDiv.style.alignItems = 'center'; wrapDiv.style.gap = '8px';

                const charDiv = document.createElement('div');
                charDiv.style.width = '70px'; charDiv.style.height = '70px'; charDiv.style.border = '1px dashed #bdc3c7';
                charDiv.style.borderRadius = '8px'; charDiv.style.background = '#fff'; charDiv.style.cursor = 'pointer';

                const pdfBtn = document.createElement('button');
                pdfBtn.innerHTML = '📥 Tải PDF Luyện Viết';
                pdfBtn.style.fontSize = '12px'; pdfBtn.style.color = '#e74c3c'; pdfBtn.style.border = '1px solid #e74c3c';
                pdfBtn.style.padding = '5px 12px'; pdfBtn.style.borderRadius = '15px'; pdfBtn.style.backgroundColor = '#fff';
                pdfBtn.style.cursor = 'pointer'; pdfBtn.style.transition = 'all 0.3s';
                pdfBtn.onmouseover = () => { pdfBtn.style.backgroundColor = '#e74c3c'; pdfBtn.style.color = '#fff'; };
                pdfBtn.onmouseout = () => { pdfBtn.style.backgroundColor = '#fff'; pdfBtn.style.color = '#e74c3c'; };
                
                if (typeof downloadPDF === 'function') {
                    pdfBtn.onclick = () => downloadPDF(char, item.pinyin, item.hanViet);
                }

                wrapDiv.appendChild(charDiv); wrapDiv.appendChild(pdfBtn); targetDiv.appendChild(wrapDiv);

                const writer = HanziWriter.create(charDiv, char, {
                    width: 70, height: 70, padding: 5, showOutline: true, 
                    strokeAnimationSpeed: 1.5, delayBetweenStrokes: 50, radicals: { color: '#e74c3c' } 
                });
                
                charDiv.addEventListener('click', () => { writer.animateCharacter(); });
                setTimeout(() => { writer.animateCharacter(); }, 1000);
            });
        });
    }

    // GỌI HÀM VẼ NÚT PHÂN TRANG LÊN MÀN HÌNH
    renderPagination();
}

// ==========================================
// --- HÀM VẼ CÁC NÚT PHÂN TRANG ---
// ==========================================
function renderPagination() {
    let pageContainer = document.getElementById('pagination-controls');
    
    // Nếu trong HTML chưa có thẻ div id="pagination-controls", JS sẽ tự động tạo
    if (!pageContainer) {
        pageContainer = document.createElement('div');
        pageContainer.id = 'pagination-controls';
        pageContainer.style.textAlign = 'center';
        pageContainer.style.margin = '30px 0';
        // Chèn vào ngay dưới container từ vựng
        const dictContainer = document.getElementById('dictionary-container');
        if (dictContainer && dictContainer.parentNode) {
            dictContainer.parentNode.insertBefore(pageContainer, dictContainer.nextSibling);
        }
    }

    const totalPages = Math.ceil(currentDisplayData.length / itemsPerPage);
    pageContainer.innerHTML = ''; // Xóa nút cũ

    if (totalPages <= 1) return; // Nếu chỉ có 1 trang thì không hiện nút

    // CSS ảo cho các nút phân trang (Chèn trực tiếp bằng JS)
    const btnStyle = "padding: 8px 15px; margin: 0 5px; border: 1px solid #d84b6b; background: white; color: #d84b6b; border-radius: 5px; cursor: pointer; font-weight: bold;";
    const activeStyle = "padding: 8px 15px; margin: 0 5px; border: 1px solid #d84b6b; background: #d84b6b; color: white; border-radius: 5px; cursor: pointer; font-weight: bold;";

    // Nút TRƯỚC
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '« Trước';
    prevBtn.style.cssText = btnStyle;
    prevBtn.disabled = currentPage === 1;
    if (prevBtn.disabled) prevBtn.style.opacity = '0.5';
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            displayWords(currentDisplayData, currentPage - 1);
            window.scrollTo(0, 0); // Cuộn lên đầu trang
        }
    };
    pageContainer.appendChild(prevBtn);

    // Các nút SỐ (1, 2, 3...)
    for (let i = 1; i <= totalPages; i++) {
        // Chỉ hiện 2 trang đầu, 2 trang cuối và các trang xung quanh trang hiện tại để khỏi dài dòng
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const pageBtn = document.createElement('button');
            pageBtn.innerHTML = i;
            pageBtn.style.cssText = (i === currentPage) ? activeStyle : btnStyle;
            pageBtn.onclick = () => {
                displayWords(currentDisplayData, i);
                window.scrollTo(0, 0);
            };
            pageContainer.appendChild(pageBtn);
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            const dots = document.createElement('span');
            dots.innerHTML = '...';
            dots.style.margin = '0 5px';
            pageContainer.appendChild(dots);
        }
    }

    // Nút SAU
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = 'Sau »';
    nextBtn.style.cssText = btnStyle;
    nextBtn.disabled = currentPage === totalPages;
    if (nextBtn.disabled) nextBtn.style.opacity = '0.5';
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            displayWords(currentDisplayData, currentPage + 1);
            window.scrollTo(0, 0); // Cuộn lên đầu trang
        }
    };
    pageContainer.appendChild(nextBtn);
}


// ==========================================
// --- XỬ LÝ TÌM KIẾM (ENTER & DROPDOWN) BẰNG JS TỰ ĐỘNG ---
// ==========================================
const searchInput = document.getElementById('searchInput');

// Hàm hỗ trợ: Lọc bỏ toàn bộ dấu và ký tự đặc biệt của Pinyin
function removeTones(str) {
    if (!str) return "";
    return str.normalize('NFD')                 // Tách dấu ra khỏi chữ
              .replace(/[\u0300-\u036f]/g, '')  // Xóa các dấu thanh
              .replace(/[ǚǜǘǖ]/g, 'u')         // Đưa chữ u có hai chấm về u thường
              .replace(/ü/g, 'u')               // Đưa ü về u
              .replace(/\s+/g, '');             // Xóa khoảng trắng (để gõ dính liền vẫn tìm được)
}

if (searchInput) {
    // 1. Cắt sự kiện onkeyup cũ trong thẻ HTML
    searchInput.onkeyup = null; 

    // 2. Chèn CSS cho Dropdown trực tiếp bằng JS
    const style = document.createElement('style');
    style.innerHTML = `
      .modern-search-box { position: relative !important; }
      .auto-suggestion-box {
        position: absolute; top: 100%; left: 0; width: 100%; background: white;
        border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1); list-style: none; padding: 0; margin: 0;
        z-index: 1000; display: none; text-align: left; max-height: 300px; overflow-y: auto;
      }
      .auto-suggestion-box li { padding: 10px 15px; cursor: pointer; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; }
      .auto-suggestion-box li:hover { background-color: #f9f9f9; color: #d84b6b; }
    `;
    document.head.appendChild(style);

    // 3. Tạo thẻ ul gợi ý
    const dictSuggest = document.createElement('ul');
    dictSuggest.className = 'auto-suggestion-box';
    searchInput.parentNode.appendChild(dictSuggest);

    // 4. Lắng nghe khi GÕ CHỮ (Xổ dropdown)
    searchInput.addEventListener('input', function() {
        const keyword = this.value.trim().toLowerCase();
        dictSuggest.innerHTML = '';
        if (keyword === '') { dictSuggest.style.display = 'none'; return; }

        const cleanInput = removeTones(keyword);
        const allData = getAllDictData();
        
        // Lọc lấy 5 kết quả
        const suggestions = allData.filter(item => {
            if (item.word && item.word.toLowerCase().includes(keyword)) return true;
            if (item.hanViet && item.hanViet.toLowerCase().includes(keyword)) return true;
            if (item.pinyin && removeTones(item.pinyin.toLowerCase()).includes(cleanInput)) return true;
            if (item.explanation && item.explanation.toLowerCase().includes(keyword)) return true;
            return false;
        }).slice(0, 5);

        if (suggestions.length > 0) {
            suggestions.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<span><strong>${item.word}</strong> (${item.pinyin})</span> <span style="color:#666; font-size:14px;">${item.hanViet}</span>`;
                li.onclick = function() {
                    searchInput.value = item.word;
                    dictSuggest.style.display = 'none';
                    displayWords([item], 1); // In ra màn hình từ đã chọn
                };
                dictSuggest.appendChild(li);
            });
            dictSuggest.style.display = 'block';
        } else {
            dictSuggest.style.display = 'none';
        }
    });

    // 5. Lắng nghe khi BẤM ENTER (Tìm & In kết quả)
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            dictSuggest.style.display = 'none';
            const keyword = this.value.trim().toLowerCase();
            const allData = getAllDictData();
            
            if (keyword === '') {
                displayWords(allData, 1); // Hiện tất cả (có chia trang)
                return;
            }

            // Ghi nhận tìm kiếm nếu có hàm trackUserAction
            if(typeof trackUserAction === 'function') trackUserAction("Search", "Tra từ (Enter): " + keyword);

            const cleanInput = removeTones(keyword);
            const finalResults = allData.filter(item => {
                if (item.word && item.word.toLowerCase().includes(keyword)) return true;
                if (item.hanViet && item.hanViet.toLowerCase().includes(keyword)) return true;
                if (item.pinyin && removeTones(item.pinyin.toLowerCase()).includes(cleanInput)) return true;
                if (item.explanation && item.explanation.toLowerCase().includes(keyword)) return true;
                return false;
            });

            displayWords(finalResults, 1); // Bắt đầu in ra từ trang 1
        }
    });

    // Tắt dropdown khi click ngoài
    document.addEventListener('click', function(e) {
        if (e.target !== searchInput) dictSuggest.style.display = 'none';
    });
}

// === THUẬT TOÁN SẮP XẾP ƯU TIÊN (HỆ CHẤM ĐIỂM) ===
    filteredData.sort((a, b) => {
        const getScore = (item) => {
            // Đưa về chữ thường để so sánh an toàn tuyệt đối
            const word = item.word.toLowerCase();
            const input = rawInput.toLowerCase();
            
            if (word === input) return 3; // Ưu tiên 1: Giống hệt 100%
            if (word.startsWith(input)) return 2; // Ưu tiên 2: Bắt đầu bằng từ khóa
            return 1; // Ưu tiên 3: Các trường hợp còn lại
        };

        const scoreA = getScore(a);
        const scoreB = getScore(b);

        // Xếp theo điểm: Điểm cao (3) đẩy lên đầu, điểm thấp (1) đẩy xuống cuối
        if (scoreA !== scoreB) {
            return scoreB - scoreA;
        }
        
        // Nếu bằng điểm nhau (ví dụ cùng được 2 điểm), từ nào ngắn hơn xếp trước
        return a.word.length - b.word.length;
    });
    // ==================================================

    displayWords(filteredData);
}

// KHỞI CHẠY LẦN ĐẦU
displayWords(dictionaryData);


// ==========================================
// 6. KHU VỰC XỬ LÝ HỘI THOẠI (TÌM KIẾM, HIỂN THỊ, ÂM THANH, TRẮC NGHIỆM)
// ==========================================

// --- HÀM LỌC TÌM KIẾM HỘI THOẠI ---
function searchDialogue() {
if (event.key === 'Enter') {
        let keyword = document.getElementById("dialogueSearchInput").value;
        if (keyword.trim() !== "") {
            trackUserAction("Search", "Tra hội thoại: " + keyword);
        }
    }
    const input = document.getElementById('dialogueSearchInput');
    if(!input) return;
    const searchTerm = input.value.trim().toLowerCase();
    displayDialogues(searchTerm); 
}

// ========================================================
// 1. HÀM PHỤ: XỬ LÝ GIAO DIỆN BÀI TẬP ĐỤC LỖ (AN TOÀN)
// ========================================================
function renderClozesHtml(group, dIdx) {
    if (!group.clozes || group.clozes.length === 0) return "";

    let html = `
        <div class="cloze-section" style="background: #fffaf0; padding: 25px; border-radius: 20px; border: 2px solid #f39c12; margin-top: 30px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #d35400; font-size: 24px; display: flex; align-items: center; gap: 10px;">📝 Bài tập điền từ luyện vựng</h3>
    `;

    group.clozes.forEach((c, cIdx) => {
        // Nhận diện dữ liệu an toàn để không bao giờ báo lỗi undefined
        let zhText = (c.sentence && c.sentence.zh) ? c.sentence.zh : (c.sentence || "");
        let pyText = (c.sentence && c.sentence.py) ? c.sentence.py : "";
        let vnText = (c.sentence && c.sentence.vn) ? c.sentence.vn : "";

        html += `
            <div style="margin-top: 25px; padding-bottom: 15px; border-bottom: 1px dashed #f39c12;">
                <div style="font-size: 22px; font-weight: bold; color: #2c3e50;">CÂU ${cIdx + 1}: ${zhText}</div>
                <div style="font-size: 18px; color: #2980b9; margin: 5px 0;">${pyText}</div>
                <div style="font-size: 16px; color: #7f8c8d; font-style: italic;">${vnText}</div>
                <div id="cloze-options-${dIdx}-${cIdx}" style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 15px;">
        `;

        c.options.forEach((opt, optIdx) => {
            let optZh = (opt && opt.zh) ? opt.zh : (opt || "");
            let optVn = (opt && opt.vn) ? opt.vn : "";

            html += `
                <button onclick="checkCloze(${dIdx}, ${cIdx}, ${optIdx})" 
                    style="padding: 10px 20px; border: 2px solid #bdc3c7; border-radius: 12px; background: white; cursor: pointer; transition: 0.2s; display: flex; align-items: center; gap: 10px; font-family: inherit;">
                    <strong style="font-size: 19px; color: #2c3e50;">${optZh}</strong>
                    ${optVn ? `<span style="color: #bdc3c7;">➔</span><span style="font-size: 16px; color: #27ae60; font-weight: 500;">${optVn}</span>` : ""}
                </button>
            `;
        });

        html += `
                </div>
                <p id="cloze-result-${dIdx}-${cIdx}" style="margin-top: 12px; font-size: 18px; font-weight: bold; display: none;"></p>
            </div>
        `;
    });

    html += `</div>`;
    return html;
}

// ========================================================
// 2. HÀM PHỤ: XỬ LÝ QUIZ TRẮC NGHIỆM (AN TOÀN)
// ========================================================
function renderQuizzesHtml(group, dIdx) {
    if (!group.quizzes || group.quizzes.length === 0) return "";

    let html = `
        <div style="background: #f0f7ff; padding: 25px; border-radius: 20px; border: 2px dashed #3498db; margin-top: 20px;">
            <h3 style="margin-top: 0; color: #2980b9; font-size: 24px;">🎮 Trắc nghiệm nội dung bài học</h3>
    `;

    group.quizzes.forEach((q, qIdx) => {
        let questionText = (typeof q.question === 'object' && q.question !== null) ? (q.question.zh || "") : (q.question || "");

        html += `
            <div style="margin-top: 20px; padding-bottom: 15px; border-bottom: 1px solid #d6eaf8;">
                <div style="font-size: 22px; font-weight: bold; color:#2c3e50;">${questionText}</div>
                <div id="quiz-options-${dIdx}-${qIdx}" style="display: grid; gap: 8px; margin-top: 10px;">
        `;

        q.options.forEach((opt, oIdx) => {
            let optText = (typeof opt === 'object' && opt !== null) ? `${opt.zh || ""} (${opt.vn || ""})` : (opt || "");

            html += `
                <button onclick="checkQuiz(${dIdx}, ${qIdx}, ${oIdx})" style="text-align: left; padding: 12px 15px; border: 1px solid #ccc; border-radius: 10px; background: white; cursor: pointer; font-size: 18px; font-weight: 500; transition: 0.2s;">
                    ${optText}
                </button>
            `;
        });

        html += `
                </div>
                <p id="quiz-result-${dIdx}-${qIdx}" style="margin-top: 10px; font-weight: bold; display: none; font-size: 18px;"></p>
            </div>
        `;
    });

    html += `</div>`;
    return html;
}

// ========================================================
// 3. HÀM CHÍNH: GỘP TẤT CẢ LÊN GIAO DIỆN (ĐÃ KHÔI PHỤC ÂM THANH & TOCFL)
// ========================================================
function displayDialogues(searchTerm = "") {
    const container = document.getElementById('dialogue-container');
    if (!container) return;

    let htmlContent = "";
    let hasResults = false;

    dialogueData.forEach((group, dIdx) => {
        let isMatch = false;
        if (searchTerm === "") isMatch = true;
        else {
            if (group.title.toLowerCase().includes(searchTerm) || group.lesson.toLowerCase().includes(searchTerm)) isMatch = true;
            group.content.forEach(line => {
                if (line.zh.includes(searchTerm) || line.py.toLowerCase().includes(searchTerm) || line.vn.toLowerCase().includes(searchTerm)) isMatch = true;
            });
        }

        if (isMatch) {
            hasResults = true;
            
            // Gọi 2 hàm phụ ở trên để ghép giao diện bài tập vào
            const clozesHtml = renderClozesHtml(group, dIdx);
            const quizzesHtml = renderQuizzesHtml(group, dIdx);

            htmlContent += `
                <div class="dialogue-card" style="padding: 30px; border-radius: 20px; background: white; margin-bottom: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.05); text-align: left;">
                    
                    <div style="text-align: right; margin-bottom: 10px;">
                        ${group.level ? `<span style="background: #e74c3c; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: bold; margin-right: 8px;">${group.level}</span>` : ''}
                        <span style="background: #2980b9; color: white; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: bold;">${group.lesson}</span>
                    </div>
                    
                    <h2 style="color:#b22222; margin-top: 0; font-size: 28px; border-bottom: 2px solid #eee; padding-bottom: 10px;">${group.title}</h2>
                    
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 12px; margin-bottom: 25px; display: flex; align-items: center; gap: 15px; flex-wrap: wrap; border: 1px solid #e0e0e0;">
                        <button id="play-btn-${dIdx}" onclick="toggleFullDialogue(${dIdx})" style="background: #27ae60; color: white; border: none; padding: 8px 20px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; display: flex; align-items: center; gap: 8px; transition: 0.2s;">
                            ▶ Đọc toàn bài
                        </button>
                        
                        <div style="display: flex; align-items: center; gap: 8px; border-left: 2px solid #ddd; padding-left: 15px;">
                            <span style="font-size: 15px; color: #555; font-weight: bold;">Tốc độ:</span>
                            <button onclick="setSpeed(0.5)" style="border: 1px solid #bdc3c7; background: white; padding: 5px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; transition: 0.2s;">🐢 Chậm</button>
                            <button onclick="setSpeed(0.75)" style="border: 1px solid #bdc3c7; background: white; padding: 5px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; transition: 0.2s;">🚶 Vừa</button>
                            <button onclick="setSpeed(1.5)" style="border: 1px solid #bdc3c7; background: white; padding: 5px 12px; border-radius: 6px; cursor: pointer; font-size: 14px; transition: 0.2s;">🐇 Nhanh</button>
                        </div>
                    </div>

                    <div style="margin-bottom: 30px;">
                        ${group.content.map(line => `
                            <div class="chat-line" style="margin-bottom: 20px; display: flex; gap: 15px;">
                                <div class="speaker-avatar" style="width: 40px; height: 40px; background: ${line.gender === 'male' ? '#3498db' : '#e74c3c'}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-weight: bold;">${line.sp.charAt(0)}</div>
                                <div class="chat-content" style="background: #f8f9fa; padding: 12px 20px; border-radius: 15px; flex-grow: 1; border-left: 4px solid ${line.gender === 'male' ? '#3498db' : '#e74c3c'};">
                                    <div style="font-size: 22px; font-weight: bold;">${line.sp}: ${line.zh} <button onclick="playDialogueAudio('${line.zh}', '${line.gender}', ${dIdx})" style="border:none; background:none; cursor:pointer; font-size:22px; vertical-align: middle;">🔊</button></div>
                                    <div style="color: #2980b9; font-size: 17px; margin: 4px 0;">${line.py}</div>
                                    <div style="color: #7f8c8d; font-size: 16px; font-style: italic;">${line.vn}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    ${clozesHtml}
                    ${quizzesHtml}
                </div>
            `;
        }
    });
    container.innerHTML = htmlContent || "<p style='text-align:center; color:gray;'>Không tìm thấy đoạn hội thoại nào phù hợp.</p>";
}

// --- HÀM KIỂM TRA ĐÁP ÁN ĐỤC LỖ (KHÔNG CẦN ÂM THANH) ---
function checkCloze(dIdx, cIdx, selected) {
    const cloze = dialogueData[dIdx].clozes[cIdx];
    const resultText = document.getElementById(`cloze-result-${dIdx}-${cIdx}`);
    const optionsContainer = document.getElementById(`cloze-options-${dIdx}-${cIdx}`);
    const buttons = optionsContainer.getElementsByTagName('button');

    if (!resultText || !buttons.length) return;

    resultText.style.display = "block";
    if (selected === cloze.correct) {
        resultText.style.color = "#27ae60";
        resultText.innerHTML = "✅ Chính xác! Bạn đã chọn đúng từ vựng.";
        buttons[selected].style.background = "#d5f5e3";
        buttons[selected].style.borderColor = "#27ae60";
    } else {
        resultText.style.color = "#e74c3c";
        resultText.innerHTML = "❌ Chưa đúng rồi, hãy thử lại phương án khác nhé!";
        buttons[selected].style.background = "#fadbd8";
        buttons[selected].style.borderColor = "#e74c3c";
    }
}

// --- HÀM TẢI TRƯỚC GIỌNG ĐỌC (Bắt buộc để trình duyệt nhận diện được nhiều giọng) ---
window.speechSynthesis.onvoiceschanged = () => { 
    window.speechSynthesis.getVoices(); 
};

// --- BỘ XỬ LÝ GIỌNG NAM/NỮ CỐ ĐỊNH (TÌM THEO TÊN ƯU TIÊN) ---
function applySmartVoice(utterance, gender) {
    const voices = window.speechSynthesis.getVoices();
    // Lọc ra tất cả các giọng tiếng Trung có trong máy
    const zhVoices = voices.filter(v => v.lang.includes('zh-TW') || v.lang.includes('zh-CN') || v.lang.includes('zh'));

    if (zhVoices.length === 0) return; // Máy không có tiếng Trung thì bỏ qua

    // 1. DANH SÁCH TÊN GIỌNG CHUẨN CỐ ĐỊNH (Windows, Mac, iOS, Android)
    const femaleVIP = ['Yating', 'Hanhan', 'Ting-Ting', 'Mei-Jia', 'Xiaoxiao', 'Google 國語（臺灣）', 'female'];
    const maleVIP = ['Zhiwei', 'Kangkang', 'Yunxi', 'male']; 

    let selectedVoice = null;

    if (gender === 'male') {
        // Cố gắng tìm đích danh giọng Nam chuẩn
        selectedVoice = zhVoices.find(v => maleVIP.some(name => v.name.includes(name)) || v.name.toLowerCase().includes('male'));
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            utterance.pitch = 1.0; // Tìm được giọng chuẩn thì giữ nguyên cao độ tự nhiên
        } else {
            // Tình huống xấu nhất: Máy học sinh không cài giọng Nam -> Lấy tạm giọng mặc định bẻ trầm xuống
            utterance.voice = zhVoices[0];
            utterance.pitch = 0.5; 
        }
    } else {
        // Cố gắng tìm đích danh giọng Nữ chuẩn
        selectedVoice = zhVoices.find(v => femaleVIP.some(name => v.name.includes(name)) || v.name.toLowerCase().includes('female') || v.name.includes('Google'));
                     
        if (selectedVoice) {
            utterance.voice = selectedVoice;
            utterance.pitch = 1.0; 
        } else {
            // Tình huống xấu nhất: Không có giọng nữ xịn -> Lấy tạm giọng mặc định
            utterance.voice = zhVoices[0];
            utterance.pitch = 1.2; 
        }
    }
}

// --- HÀM KIỂM TRA ĐÁP ÁN TRẮC NGHIỆM ---
function checkQuiz(dIdx, qIdx, selected) {
    const quiz = dialogueData[dIdx].quizzes[qIdx];
    const resultText = document.getElementById(`quiz-result-${dIdx}-${qIdx}`);
    const optionsContainer = document.getElementById(`quiz-options-${dIdx}-${qIdx}`);
    const buttons = optionsContainer.getElementsByTagName('button');

    resultText.style.display = "block";
    if (selected === quiz.correct) {
        resultText.style.color = "#27ae60";
        resultText.innerHTML = "✅ Chính xác! (答對 rồi!)";
        buttons[selected].style.background = "#d5f5e3";
        buttons[selected].style.borderColor = "#27ae60";
    } else {
        resultText.style.color = "#e74c3c";
        resultText.innerHTML = "❌ Sai rồi, hãy thử lại nhé! (再試一次)";
        buttons[selected].style.background = "#fadbd8";
        buttons[selected].style.borderColor = "#e74c3c";
    }
}

// --- HÀM ĐIỀU KHIỂN CHUYỂN TAB VÀ ĐẨY ẨN/HIỆN THANH TÌM KIẾM ĐỘC LẬP ---
function switchTab(tab) {
if (tab === 'dict') {
        trackUserAction("SwitchTab", "Chuyển sang tab Từ Điển");
    } else if (tab === 'speak') {
        trackUserAction("SwitchTab", "Chuyển sang tab Hội Thoại");
    }
    const dictArea = document.getElementById('dictionary-container');
    const diagArea = document.getElementById('dialogue-container');
    const searchDictArea = document.getElementById('search-section-dict');
    const searchSpeakArea = document.getElementById('search-section-speak');
    
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));

    if (tab === 'dict') {
        if(dictArea) dictArea.style.display = 'block';
        if(diagArea) diagArea.style.display = 'none';
        if(searchDictArea) searchDictArea.style.display = 'flex';   
        if(searchSpeakArea) searchSpeakArea.style.display = 'none'; 
        document.getElementById('tab-dict').classList.add('active');
    } else {
        if(dictArea) dictArea.style.display = 'none';
        if(diagArea) diagArea.style.display = 'block';
        if(searchDictArea) searchDictArea.style.display = 'none';  
        if(searchSpeakArea) searchSpeakArea.style.display = 'flex'; 
        document.getElementById('tab-speak').classList.add('active');
        
        // Luôn hiển thị lại toàn bộ hội thoại khi chuyển tab để tránh bị kẹt kết quả tìm kiếm cũ
        if (document.getElementById('dialogueSearchInput')) {
            document.getElementById('dialogueSearchInput').value = "";
        }
        displayDialogues(); 
    }
}

// --- HÀM CHUYỂN TRANG TỪ VỰNG -> HỘI THOẠI ---
function jumpToDialogue(lessonName) {
    switchTab('speak');
    
    // Đợi DOM chuyển trang xong mới cuộn xuống và đổi màu
    setTimeout(() => {
        const dialogueCards = document.querySelectorAll('.dialogue-card');
        for (let card of dialogueCards) {
            // Tìm đúng tên bài
            if (card.innerHTML.includes(lessonName)) {
                card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                card.style.transition = "0.5s";
                card.style.boxShadow = "0 0 25px #2ecc71";
                setTimeout(() => { card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)"; }, 1500);
                break;
            }
        }
    }, 150);
}

// ========================================================
// BỘ ĐIỀU KHIỂN ÂM THANH VÀ TỐC ĐỘ CHUẨN (SHADOWING)
// ========================================================
let currentSpeed = 1.0; 
let isPlayingDialogue = false;
let currentDialogueQueue = [];

// 1. Hàm thay đổi tốc độ
function setSpeed(speed) {
    currentSpeed = speed;
    let speedText = speed === 0.75 ? "Vừa" : (speed > 1.0 ? "Nhanh" : "Chậm");
    alert("Đã đổi tốc độ đọc thành: " + speedText + ". Hãy bấm nghe thử nhé!");
}

// 2. Hàm phát âm thanh từng câu (Nút loa lẻ)
function playDialogueAudio(text, gender, dIdx) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        isPlayingDialogue = false; 

        // Xóa các ký tự thừa trước khi đọc
        const cleanText = text.replace(/[【】()（）:<br>]/g, " ").trim();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        
        utterance.lang = 'zh-TW';
        utterance.rate = currentSpeed; // Sử dụng tốc độ đã chọn
        
        // Gọi hàm applySmartVoice đã có trong file của bạn
        if (typeof applySmartVoice === 'function') {
            applySmartVoice(utterance, gender);
        } else {
            utterance.pitch = gender === 'male' ? 0.8 : 1.2;
        }
        
        window.speechSynthesis.speak(utterance);
    }
}

// 3. Hàm Đọc toàn bài (Play / Pause)
function toggleFullDialogue(dIdx) {
    const btn = document.getElementById(`play-btn-${dIdx}`);
    
    // Nếu đang đọc -> Dừng
    if (isPlayingDialogue) {
        window.speechSynthesis.cancel();
        isPlayingDialogue = false;
        if (btn) btn.innerHTML = "▶ Đọc toàn bài";
        return;
    }

    // Bắt đầu đọc
    isPlayingDialogue = true;
    if (btn) btn.innerHTML = "⏹ Dừng đọc";
    
    // Lấy nội dung hội thoại
    const group = dialogueData[dIdx];
    currentDialogueQueue = [...group.content]; 
    playNextInQueue(dIdx);
}

// 4. Hàm đọc nối tiếp từng câu cho chế độ "Đọc toàn bài"
function playNextInQueue(dIdx) {
    const btn = document.getElementById(`play-btn-${dIdx}`);

    // Dừng hoặc hết bài
    if (!isPlayingDialogue || currentDialogueQueue.length === 0) {
        isPlayingDialogue = false;
        if (btn) btn.innerHTML = "▶ Đọc toàn bài";
        return;
    }

    const line = currentDialogueQueue.shift();
    const cleanText = line.zh.replace(/[【】()（）:<br>]/g, " ").trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    utterance.lang = 'zh-TW';
    utterance.rate = currentSpeed; // Sử dụng tốc độ đã chọn
    
    if (typeof applySmartVoice === 'function') {
        applySmartVoice(utterance, line.gender);
    } else {
        utterance.pitch = line.gender === 'male' ? 0.8 : 1.2;
    }
    
    // Khi đọc xong câu này, chờ 0.3s rồi đọc câu tiếp theo
    utterance.onend = () => {
        if (isPlayingDialogue) setTimeout(() => playNextInQueue(dIdx), 300);
    };
    
    utterance.onerror = () => {
        if (isPlayingDialogue) playNextInQueue(dIdx);
    };

    window.speechSynthesis.speak(utterance);
}

// ==========================================
// HỆ THỐNG THEO DÕI NGƯỜI DÙNG CHO LUẬN VĂN
// ==========================================

// 1. Cấu hình Firebase (Mã thật đã lấy từ dự án)
const firebaseConfig = {
  apiKey: "AIzaSyCKBIXF7L1_Yb4cboTTw4FixhdWAQ7Ave8",
  authDomain: "maomi-cidian-tocfl.firebaseapp.com",
  projectId: "maomi-cidian-tocfl",
  storageBucket: "maomi-cidian-tocfl.firebasestorage.app",
  messagingSenderId: "528249034731",
  appId: "1:528249034731:web:6842b0b323cf45c2c9abae",
  measurementId: "G-WP708V4CN8"
};

// 2. Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Biến lưu trữ thông tin học sinh đang học
let currentStudent = null;

// 3. Lắng nghe trạng thái đăng nhập
auth.onAuthStateChanged((user) => {
    if (user) {
        // Đã đăng nhập
        currentStudent = user.email;
        document.getElementById("login-section").style.display = "none";
        document.getElementById("main-dictionary-app").style.display = "block";
        
        // Ghi nhận hành vi: "Vừa mới truy cập trang web"
        trackUserAction("Login", "Học sinh vừa truy cập vào hệ thống");
    } else {
        // Chưa đăng nhập
        currentStudent = null;
        document.getElementById("login-section").style.display = "block";
        document.getElementById("main-dictionary-app").style.display = "none";
    }
});

// 4. Hàm xử lý nút Đăng nhập
function loginStudent() {
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    
    auth.signInWithEmailAndPassword(email, password)
        .catch((error) => {
            document.getElementById("login-error").innerText = "Tài khoản hoặc mật khẩu không đúng!";
            console.error("Lỗi đăng nhập:", error);
        });
}

// 5. Hàm xử lý nút Đăng xuất
function logoutStudent() {
    // Bắt buộc ghi nhận thời gian Đăng xuất vào Firestore trước khi thoát
    trackUserAction("Logout", "Học sinh chủ động bấm nút đăng xuất");
    
    // Đợi 0.5 giây để dữ liệu kịp đẩy lên máy chủ rồi mới thoát tài khoản
    setTimeout(() => {
        auth.signOut();
    }, 500);
}

// 6. BẮT SỰ KIỆN: Tự động ghi nhận khi học sinh tắt trình duyệt (Bấm dấu X)
window.addEventListener("beforeunload", function() {
    if (currentStudent) {
        // Ghi lại mốc thời gian học sinh đóng tab làm thời gian kết thúc phiên học
        trackUserAction("CloseTab", "Học sinh tắt tab hoặc đóng trình duyệt");
    }
});

// ==========================================
// TÍNH NĂNG GHI NHẬN HÀNH VI (TRACKING)
// ==========================================

// Hàm cốt lõi để đẩy dữ liệu lên cơ sở dữ liệu Firebase
function trackUserAction(actionType, actionDetails) {
    if (!currentStudent) return; // Không lưu nếu chưa đăng nhập
    
    db.collection("StudentActivity_TOCFL").add({
        studentId: currentStudent,        // Biết là học sinh nào
        actionType: actionType,           // Loại hành vi (Đăng nhập, Tra từ, Làm bài Quiz...)
        details: actionDetails,           // Chi tiết hành vi
        timestamp: firebase.firestore.FieldValue.serverTimestamp() // Thời gian chính xác đến từng giây
    })
    .then(() => {
        console.log("Đã ghi nhận dữ liệu luận văn thành công!");
    })
    .catch((error) => {
        console.error("Lỗi khi ghi nhận dữ liệu: ", error);
    });
}
