// 1. DANH SÁCH DỮ LIỆU ĐẦY ĐỦ 18 CẶP TỪ + IPA
const dictionaryData = [
  {
    word: "埋怨 / 抱怨",
    pinyin: "Mányuàn / Bàoyuàn",
    ipa: "man³⁵ yɛn⁵¹ / paʊ⁵¹ yɛn⁵¹",
    hanViet: "Mai oán / Bão oán",
    explanation: "【抱怨】：對人或事物心懷不滿。(Phàn nàn). <br> 【埋怨】：因事情不如意而怪罪對象。(Trách móc).",
    den: "Lời nói thể hiện sự bất mãn.",
    bong: "Sự oán hận tích tụ trong lòng.",
    examples: [{ tc: "他總是抱怨工作太累。", py: "Tā zǒngshì bàoyuàn gōngzuò tài lèi.", vn: "Anh ấy luôn phàn nàn công việc quá mệt." }],
    idiom: "任勞任怨 (Chịu thương chịu khó)",
    level: "TOCFL B"
  },
  {
    word: "靠",
    pinyin: "Kào",
    ipa: "kʰaʊ⁵¹",
    hanViet: "Khảo / Khấu",
    explanation: "【靠】：依附、憑藉， hoặc thân thể sát gần vật thể.",
    den: "Tựa lưng vào ghế.",
    bong: "Nhờ cậy sự giúp đỡ.",
    examples: [{ tc: "他全靠自己的努力才有今天。", py: "Tā quán kào zìjǐ de nǔlì cái yǒu jīntiān.", vn: "Anh ấy hoàn toàn dựa vào nỗ lực bản thân." }],
    idiom: "在家靠父母，出外靠朋友",
    level: "TOCFL A"
  },
  {
    word: "描述 / 描寫",
    pinyin: "Miáoshù / Miáoxiě",
    ipa: "mjaʊ³⁵ ʂu⁵¹ / mjaʊ³⁵ ɕjɛ²¹⁴",
    hanViet: "Miêu thuật / Miêu tả",
    explanation: "【描述】：敘述事物情狀。(Thuật lại). <br> 【描寫】：表現事物形象。(Khắc họa).",
    den: "Nói về đặc điểm bên ngoài.",
    bong: "Khắc họa bản chất vấn đề.",
    examples: [{ tc: "請向警察描述歹徒的外貌。", py: "Qǐng xiàng jǐngchá miáoshù dǎitú de wàimào.", vn: "Hãy mô tả diện mạo tên cướp." }],
    idiom: "繪聲繪色 (Sinh động như thật)",
    level: "TOCFL B"
  },
  {
    word: "催",
    pinyin: "Cuī",
    ipa: "tsʰweɪ⁵⁵",
    hanViet: "Thôi",
    explanation: "【催】：使進度加快。(Thúc giục).",
    den: "Giục làm nhanh lên.",
    bong: "Sự hối thúc của thời gian.",
    examples: [{ tc: "媽媽催我快點起床。", py: "Māmā cuī wǒ kuàidiǎn qǐchuáng.", vn: "Mẹ giục tôi mau dậy đi." }],
    idiom: "催人奮進 (Thúc đẩy tiến lên)",
    level: "TOCFL B"
  },
  {
    word: "裝修 / 裝潢",
    pinyin: "Zhuāngxiū / Zhuānghuáng",
    ipa: "tʂwaŋ⁵⁵ ɕjoʊ⁵⁵ / tʂwaŋ⁵⁵ hwaŋ³⁵",
    hanViet: "Trang tu / Trang hoàng",
    explanation: "【裝修】：基礎修繕。(Sửa sang). <br> 【裝潢】：室內美化。(Trang trí nội thất).",
    den: "Cải tạo nhà cửa.",
    bong: "Che đậy vẻ bề ngoài.",
    examples: [{ tc: "這間房子正在裝修。", py: "Zhè jiān fángzi zhèngzài zhuāngxiū.", vn: "Ngôi nhà này đang sửa chữa." }],
    idiom: "富麗堂皇 (Lộng lẫy)",
    level: "TOCFL B"
  },
  {
    word: "立刻 / 馬上",
    pinyin: "Lìkè / Mǎshàng",
    ipa: "li⁵¹ kʰɤ⁵¹ / ma²¹⁴ ʂaŋ⁵¹",
    hanViet: "Lập khắc / Mã thượng",
    explanation: "【立刻】：極短時間。(Lập tức). <br> 【馬上】：很快發生。(Ngay lập tức).",
    den: "Hành động tức thì.",
    bong: "Sự khẩn trương.",
    examples: [{ tc: "同學們立刻進教室。", py: "Tóngxuémen lìkè jìn jiàoshì.", vn: "Học sinh lập tức vào lớp." }],
    idiom: "立竿見影 (Có kết quả ngay)",
    level: "TOCFL A"
  },
  {
    word: "傍晚 / 黃昏",
    pinyin: "Bàngwǎn / Huánghūn",
    ipa: "paŋ⁵¹ wan²¹⁴ / xwaŋ³⁵ xwən⁵⁵",
    hanViet: "Bàng vãn / Hoàng hôn",
    explanation: "【傍晚】：臨近晚上。(Lúc gần tối). <br> 【黃昏】：日落到天黑前。(Hoàng hôn).",
    den: "Thời điểm trời tối.",
    bong: "Giai đoạn cuối cùng.",
    examples: [{ tc: "傍晚時分，公園裡很多人。", py: "Bàngwǎn shífēn, gōngyuán lǐ hěnduō rén.", vn: "Lúc chạng vạng công viên rất đông." }],
    idiom: "夕陽無限好，只是近黃昏",
    level: "TOCFL B"
  },
  {
    word: "舒適 / 舒服",
    pinyin: "Shūshì / Shūfú",
    ipa: "ʂu⁵⁵ ʂɨ⁵¹ / ʂu⁵⁵ fu",
    hanViet: "Thư thích / Thư phục",
    explanation: "【舒適】：環境愉快。(Dễ chịu). <br> 【舒服】：輕鬆。(Khoan khoái).",
    den: "Cảm giác thoải mái.",
    bong: "Vùng an toàn.",
    examples: [{ tc: "這間房間非常舒適。", py: "Zhè jiān fángjiān fēicháng shūshì.", vn: "Căn phòng rất thoải mái." }],
    idiom: "舒適圈 (Vùng an toàn)",
    level: "TOCFL A"
  },
  {
    word: "包括 / 包含",
    pinyin: "Bāokuò / Bāohán",
    ipa: "paʊ⁵⁵ kʰwɔ⁵¹ / paʊ⁵⁵ xan³⁵",
    hanViet: "Bao quát / Bao hàm",
    explanation: "【包括】：指具體項目。(Gồm có). <br> 【包含】：內在精神。(Chứa đựng).",
    den: "Liệt kê hạng mục.",
    bong: "Ý nghĩa ẩn sâu.",
    examples: [{ tc: "房租包括水電費。", py: "Fángzū bāokuò shuǐdiànfèi.", vn: "Tiền thuê gồm điện nước." }],
    idiom: "無所不包 (Không gì không có)",
    level: "TOCFL B"
  },
  {
    word: "勤奮 / 勤勞",
    pinyin: "Qínfèn / Qínláo",
    ipa: "tɕʰin³⁵ fən⁵¹ / tɕʰin³⁵ laʊ³⁵",
    hanViet: "Cần phấn / Cần lao",
    explanation: "【勤奮】：側重學習。(Cần mẫn). <br> 【勤勞】：努力勞動。(Chăm chỉ).",
    den: "Làm lụng vất vả.",
    bong: "Sự bền bỉ ý chí.",
    examples: [{ tc: "他學習非常勤奮。", py: "Tā xuéxí fēicháng qínfèn.", vn: "Anh ấy học hành rất cần mẫn." }],
    idiom: "天道酬勤 (Trời đền công người chăm)",
    level: "TOCFL B"
  },
  {
    word: "意思 / 意義",
    pinyin: "Yìsi / Yìyì",
    ipa: "i⁵¹ sɨ / i⁵¹ i⁵¹",
    hanViet: "Ý tứ / Ý nghĩa",
    explanation: "【意思】：含義。(Ý nghĩa). <br> 【意義】：價值。(Giá trị).",
    den: "Nghĩa của từ.",
    bong: "Giá trị nhân văn.",
    examples: [{ tc: "我不懂這個詞的意思。", py: "Wǒ bù dǒng zhè ge cí de yìsi.", vn: "Tôi không hiểu nghĩa từ này." }],
    idiom: "小意思 (Chuyện nhỏ)",
    level: "TOCFL A"
  },
  {
    word: "只有 / 只要",
    pinyin: "Zhǐyǒu / Zhǐyào",
    ipa: "tʂɨ²¹⁴ joʊ²¹⁴ / tʂɨ²¹⁴ jaʊ⁵¹",
    hanViet: "Chỉ hữu / Chỉ yếu",
    explanation: "【只有】：唯一條件。(Chỉ có). <br> 【只要】：充足條件。(Chỉ cần).",
    den: "Liên từ điều kiện.",
    bong: "Lòng quyết tâm.",
    examples: [{ tc: "只有努力，才能成功。", py: "Zhǐyǒu nǔlì, cáinéng chénggōng.", vn: "Chỉ có nỗ lực mới thành công." }],
    idiom: "獨一無二 (Duy nhất)",
    level: "TOCFL A"
  },
  {
    word: "突然 / 忽然",
    pinyin: "Túrán / Hūrán",
    ipa: "tʰu³⁵ ʐan³⁵ / xu⁵⁵ ʐan³⁵",
    hanViet: "Đột nhiên / Hốt nhiên",
    explanation: "【突然】：急促。(Đột ngột). <br> 【忽然】：很快。(Bỗng nhiên).",
    den: "Sự việc bất ngờ.",
    bong: "Biến cố không báo trước.",
    examples: [{ tc: "突然下起了大雨。", py: "Túrán xià qǐ le dàyǔ.", vn: "Đột nhiên đổ mưa lớn." }],
    idiom: "忽然之間 (Trong chớp mắt)",
    level: "TOCFL A"
  },
  {
    word: "了解 / 理解",
    pinyin: "Liǎojiě / Lǐjiě",
    ipa: "ljaʊ²¹⁴ tɕjɛ²¹⁴ / li²¹⁴ tɕjɛ²¹⁴",
    hanViet: "Liễu giải / Lý giải",
    explanation: "【了解】：知道得很清楚。(Hiểu rõ). <br> 【理解】：明白道理。(Thấu hiểu).",
    den: "Biết thông tin.",
    bong: "Sự thấu cảm tâm hồn.",
    examples: [{ tc: "我很了解這間公司的情況。", py: "Wǒ hěn liǎojiě zhè jiān gōngsī de qíngkuàng.", vn: "Tôi rõ tình hình công ty này." }],
    idiom: "通情達理 (Thấu tình đạt lý)",
    level: "TOCFL A"
  },
  {
    word: "願意 / 希望",
    pinyin: "Yuànyì / Xīwàng",
    ipa: "ɥɛn⁵¹ i⁵¹ / ɕi⁵⁵ waŋ⁵¹",
    hanViet: "Nguyện ý / Hy vọng",
    explanation: "【願意】：自願。(Bằng lòng). <br> 【希望】：盼望。(Hy vọng).",
    den: "Mong muốn chủ quan.",
    bong: "Niềm tin tương lai.",
    examples: [{ tc: "你願意嫁給他嗎？", py: "Nǐ yuànyì jià gěi tā ma?", vn: "Em có bằng lòng lấy anh không?" }],
    idiom: "心甘情願 (Cam tâm tình nguyện)",
    level: "TOCFL A"
  },
  {
    word: "決定 / 打算",
    pinyin: "Juédìng / Dǎsuàn",
    ipa: "tɕɥɛ³⁵ tiŋ⁵¹ / ta²¹⁴ swan⁵¹",
    hanViet: "Quyết định / Đả toán",
    explanation: "【決定】：最後判斷。(Quyết định). <br> 【打算】：計畫。(Dự định).",
    den: "Kế hoạch hành động.",
    bong: "Sự quyết đoán.",
    examples: [{ tc: "決定去台灣留學。", py: "Juédìng qù Táiwān liúxué.", vn: "Quyết định đi Đài Loan du học." }],
    idiom: "人算不如天算",
    level: "TOCFL A"
  },
  {
    word: "普通 / 一般",
    pinyin: "Pǔtōng / Yībān",
    ipa: "pʰu²¹⁴ tʰʊŋ⁵⁵ / i⁵⁵ pan⁵⁵",
    hanViet: "Phổ thông / Nhất bàn",
    explanation: "【普通】：平常。(Bình thường). <br> 【一般】：中等。(Thông thường).",
    den: "Mức trung bình.",
    bong: "Sự khiêm tốn.",
    examples: [{ tc: "普通的手錶，不貴。", py: "Pǔtōng de shǒubiǎo, bù guì.", vn: "Đồng hồ bình thường thôi." }],
    idiom: "平淡無奇 (Tầm thường)",
    level: "TOCFL A"
  },
  {
    word: "改變 / 變化",
    pinyin: "Gǎibiàn / Biànhuà",
    ipa: "kaɪ²¹⁴ pjɛn⁵¹ / pjɛn⁵¹ xwa⁵¹",
    hanViet: "Cải biến / Biến hóa",
    explanation: "【改變】：使事物更動。(Thay đổi). <br> 【變化】：產生 khác nhau.(Biến hóa).",
    den: "Sự biến đổi vật chất.",
    bong: "Sự vận động không ngừng.",
    examples: [{ tc: "這裡的變化真大。", py: "Zhèlǐ de biànhuà zhēn dà.", vn: "Nơi này thay đổi lớn thật." }],
    idiom: "千變萬化 (Thiên biến vạn hóa)",
    level: "TOCFL A"
  }
];

// 2. HÀM ÂM THANH (SỬ DỤNG WEB SPEECH API CỰC KỲ ỔN ĐỊNH)
function playAudio(text, lang) {
  if (!text) return;
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/[【】()（）:<br>]/g, " ").trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = lang;
  utterance.rate = 0.7;
  window.speechSynthesis.speak(utterance);
}

// 3. HÀM HIỂN THỊ CHI TIẾT (ĐÃ CÓ IPA)
function displayWords(data) {
  const container = document.getElementById('dictionary-container');
  if (!container) return;
  
  container.innerHTML = data.map(item => {
    // Tách các từ nếu có dấu gạch chéo (ví dụ: "埋怨 / 抱怨")
    const wordsArray = item.word.split('/');
    
    // Tạo HTML cho tiêu đề: mỗi từ đi kèm với 1 nút loa riêng
    const wordHeaderHtml = wordsArray.map(w => {
      const trimmedWord = w.trim();
      return `${trimmedWord} <button onclick="playAudio('${trimmedWord}', 'zh-TW')" style="cursor:pointer; border:none; background:none; font-size:24px; vertical-align: middle;">🔊</button>`;
    }).join(' <span style="color:#ccc; margin: 0 10px;">/</span> ');

    return `
    <div class="word-card">
      <span class="badge">${item.level}</span>
      
      <h1 class="word-head" style="color:#e74c3c; margin:0 0 10px 0;">
        ${wordHeaderHtml}
      </h1>
      
      <div style="margin-bottom: 10px;">
        <span style="color:#2980b9; font-weight:bold; font-size:1.1em;">${item.pinyin}</span>
        <span style="color:#7f8c8d; font-style:italic; margin-left:12px; font-size:0.9em;">/ ${item.ipa} /</span>
      </div>

      <p><strong>Hán Việt:</strong> ${item.hanViet}</p>
      
      <div class="content-section" style="border-left: 5px solid #b22222;">
        <span class="label">GIẢI THÍCH:</span>
        <p>${item.explanation}</p>
      </div>

      <div style="display: flex; gap: 10px; margin: 10px 0;">
        <div class="content-section" style="flex:1;"><strong>Nghĩa đen:</strong> ${item.den}</div>
        <div class="content-section" style="flex:1;"><strong>Nghĩa bóng:</strong> ${item.bong}</div>
      </div>

      <div class="content-section" style="background: #f0f7ff;">
        <span class="label">VÍ DỤ:</span>
        ${item.examples.map(ex => `
          <div style="margin-bottom: 10px;">
            <div class="example-zh">
              ${ex.tc} 
              <button onclick="playAudio('${ex.tc}', 'zh-TW')" style="cursor:pointer; border:none; background:none; font-size:18px;">🔊</button>
            </div>
            <div style="font-size: 0.9em; color: #666;">${ex.py}</div>
            <div class="example-vi">${ex.vn}</div>
          </div>
        `).join('')}
      </div>

      <div class="content-section" style="border: none;">
        <strong>💡 Thành ngữ:</strong> ${item.idiom}
      </div>
    </div>
    `;
  }).join('');
}

// 4. HÀM TÌM KIẾM
function searchDict() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredData = dictionaryData.filter(item => 
        item.word.toLowerCase().includes(input) || 
        item.hanViet.toLowerCase().includes(input) ||
        item.pinyin.toLowerCase().includes(input)
    );
    displayWords(filteredData);
}

// KHỞI CHẠY LẦN ĐẦU
displayWords(dictionaryData);
