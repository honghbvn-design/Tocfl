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
const dictionaryData = [
  // --- TỪ VỰNG BÀI 1 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  {
    word: "請問", pinyin: "qǐngwèn", ipa: "tɕʰiŋ²¹⁴ wən⁵¹", hanViet: "Thỉnh vấn",
    image: "", // <--- BẠN HÃY DÁN LINK ẢNH VÀO ĐÂY (VÍ DỤ: "image.jpg")
    radical: "Thỉnh 請 (Bộ Ngôn 言), Vấn 問 (Bộ Khẩu 口 nằm trong bộ Môn 門).",
    explanation: "Động từ: Xin hỏi (cách nói lịch sự trước khi hỏi thông tin).",
    compounds: [{ tc: "學問", py: "xuéwèn", vn: "học vấn" }, { tc: "問題", py: "wèntí", vn: "vấn đề" }],
    examples: [{ tc: "請問，你是誰？", py: "Qǐngwèn, nǐ shì shéi?", vn: "Xin hỏi, bạn là ai?" }],
    idiom: "不恥下問 (Bù chǐ xià wèn) - Không ngại học hỏi kẻ dưới.", level: "TOCFL A"
  },
  {
    word: "你", pinyin: "nǐ", ipa: "ni²¹⁴", hanViet: "Nhĩ",
    image: "",
    radical: "Bộ Nhân đứng (亻) - Liên quan đến người. Bên phải là chữ Nhĩ (尔) chỉ âm.",
    explanation: "Đại từ: Bạn, anh, chị (ngôi thứ 2 số ít).",
    compounds: [{ tc: "你們", py: "nǐmen", vn: "các bạn" }, { tc: "你好", py: "nǐ hǎo", vn: "xin chào" }],
    examples: [{ tc: "你好嗎？", py: "Nǐ hǎo ma?", vn: "Bạn khỏe không?" }],
    idiom: "你好我好大家好 (Nǐ hǎo wǒ hǎo dà jiā hǎo) - Mọi người cùng tốt.", level: "TOCFL A"
  },
  {
    word: "先生", pinyin: "xiānshēng", ipa: "ɕjɛn⁵⁵ ʂəŋ⁵⁵", hanViet: "Tiên sinh",
    image: "",
    radical: "Tiên 先 (Bộ Nhân 儿), Sinh 生 (Bộ Sinh 生).",
    explanation: "Danh từ: Ông, ngài, chồng (cách gọi tôn trọng nam giới).",
    compounds: [{ tc: "王先生", py: "Wáng xiānshēng", vn: "Ông Vương" }],
    examples: [{ tc: "先生，請問您貴姓？", py: "Xiānshēng, qǐngwèn nín guìxìng?", vn: "Thưa ông, xin hỏi ông họ gì?" }],
    idiom: "後生可畏 (Hòu shēng kě wèi) - Hậu sinh khả úy (người trẻ giỏi giang).", level: "TOCFL A"
  },
  {
    word: "小姐", pinyin: "xiǎojiě", ipa: "ɕjaʊ²¹⁴ tɕjɛ²¹⁴", hanViet: "Tiểu thư",
    image: "",
    radical: "Chữ Tiểu 小 (Bộ Tiểu), Chữ Thư 姐 (Bộ Nữ 女).",
    explanation: "Danh từ: Cô, chị (cách gọi lịch sự phụ nữ trẻ).",
    compounds: [{ tc: "姐妹", py: "jiěmèi", vn: "chị em" }],
    examples: [{ tc: "李小姐，你好。", py: "Lǐ xiǎojiě, nǐ hǎo.", vn: "Chào cô Lý." }],
    idiom: "大家閨秀 (Dà jiā guī xiù) - Tiểu thư khuê các.", level: "TOCFL A"
  },
  {
    word: "老師", pinyin: "lǎoshī", ipa: "laʊ²¹⁴ ʂɨ⁵⁵", hanViet: "Lão sư",
    image: "",
    radical: "Lão 老 (Bộ Lão), Sư 師 (Bộ Cân 巾 - khăn vải, liên quan đến nghề nghiệp xưa).",
    explanation: "Danh từ: Thầy giáo, cô giáo.",
    compounds: [{ tc: "導師", py: "dǎoshī", vn: "giáo viên chủ nhiệm" }, { tc: "師 sinh", py: "shīshēng", vn: "thầy trò" }],
    examples: [{ tc: "他是我的老師。", py: "Tā shì wǒ de lǎoshī.", vn: "Ông ấy là thầy giáo của tôi." }],
    idiom: "良師益友 (Liáng shī yì yǒu) - Thầy giỏi bạn hiền.", level: "TOCFL A"
  },
  {
    word: "叫", pinyin: "jiào", ipa: "tɕjaʊ⁵¹", hanViet: "Khiếu",
    image: "",
    radical: "Bộ Khẩu (口) - Liên quan đến miệng, âm thanh phát ra.",
    explanation: "Động từ: Gọi là, tên là, kêu.",
    compounds: [{ tc: "叫做", py: "jiàozuò", vn: "gọi là" }, { tc: "大叫", py: "dàjiào", vn: "kêu to" }],
    examples: [{ tc: "我叫王大明。", py: "Wǒ jiào Wáng Dàmíng.", vn: "Tôi tên là Vương Đại Minh." }],
    idiom: "拍手叫好 (Pāi shǒu jiào hǎo) - Vỗ tay khen ngợi.", level: "TOCFL A"
  },
  {
    word: "什麼", pinyin: "shénme", ipa: "ʂən³⁵ mɤ", hanViet: "Thập ma",
    image: "",
    radical: "Chữ Thập 什 (Bộ Nhân 亻), Chữ Ma 麼 (Bộ Ma 麻).",
    explanation: "Đại từ nghi vấn: Cái gì, gì.",
    compounds: [{ tc: "為什麼", py: "wèishénme", vn: "tại sao" }, { tc: "沒什麼", py: "méishénme", vn: "không có gì" }],
    examples: [{ tc: "這是什麼？", py: "Zhè shì shénme?", vn: "Đây là cái gì?" }],
    idiom: "不管什麼 (Bù guǎn shénme) - Bất luận là cái gì.", level: "TOCFL A"
  },
  {
    word: "名字", pinyin: "míngzi", ipa: "miŋ³⁵ tsɨ", hanViet: "Danh tự",
    image: "",
    radical: "名 (Bộ Khẩu 口), 字 (Bộ Miên 宀).",
    explanation: "Danh từ: Tên (thường chỉ tên gọi cá nhân).",
    compounds: [{ tc: "名片", py: "míngpiàn", vn: "danh thiếp" }, { tc: "有名", py: "yǒumíng", vn: "nổi tiếng" }],
    examples: [{ tc: "你叫什麼名字？", py: "Nǐ jiào shénme míngzi?", vn: "Bạn tên là gì?" }],
    idiom: "名副其實 (Míng fù qí shí) - Danh xứng với thực.", level: "TOCFL A"
  },
  {
    word: "姓", pinyin: "xìng", ipa: "ɕiŋ⁵¹", hanViet: "Tính",
    image: "",
    radical: "Bộ Nữ (女) ghép với chữ Sinh (生). Thời xưa họ truyền theo mẹ nên có bộ Nữ.",
    explanation: "Động từ / Danh từ: Họ (trong tên gọi).",
    compounds: [{ tc: "姓名", py: "xìngmíng", vn: " họ tên" }, { tc: "貴姓", py: "guìxìng", vn: "quý danh" }],
    examples: [{ tc: "我姓阮。", py: "Wǒ xìng Ruǎn.", vn: "Tôi họ Nguyễn." }],
    idiom: "隱姓埋名 (Yǐn xìng mái míng) - Ẩn danh đổi họ.", level: "TOCFL A"
  },
  {
    word: "臺灣 / 台灣", pinyin: "Táiwān", ipa: "tʰaɪ³⁵ wan⁵⁵", hanViet: "Đài Loan",
    image: "",
    radical: "Đài 臺 (Bộ Chí 至), Loan 灣 (Bộ Thủy 氵).",
    explanation: "Danh từ riêng: Đài Loan.",
    compounds: [{ tc: "台灣人", py: "Táiwān rén", vn: "người Đài Loan" }],
    examples: [{ tc: "台灣很漂亮。", py: "Táiwān hěn piàoliang.", vn: "Đài Loan rất đẹp." }],
    idiom: "寶島台灣 (Bǎo dǎo Táiwān) - Đảo ngọc Đài Loan.", level: "TOCFL A"
  },
  {
    word: "你", pinyin: "nǐ", ipa: "ni²¹⁴", hanViet: "Nhĩ",
    image: "",
    radical: "Bộ Nhân đứng (亻) - Liên quan đến người. Bên phải là chữ Nhĩ (尔) chỉ âm.",
    explanation: "Đại từ: Bạn, anh, chị (ngôi thứ 2 số ít).",
    compounds: [{ tc: "你們", py: "nǐmen", vn: "các bạn" }, { tc: "你好", py: "nǐ hǎo", vn: "xin chào" }],
    examples: [{ tc: "你好嗎？", py: "Nǐ hǎo ma?", vn: "Bạn khỏe không?" }],
    idiom: "你好我好大家好 (Nǐ hǎo wǒ hǎo dà jiā hǎo) - Mọi người cùng tốt.", level: "TOCFL A"
  },
  {
    word: "來", pinyin: "lái", ipa: "laɪ³⁵", hanViet: "Lai",
    image: "",
    radical: "Bộ Nhân (人) ẩn trong chữ phồn thể, hoặc Bộ Mộc (木).",
    explanation: "Động từ: Đến, tới.",
    compounds: [{ tc: "出來", py: "chūlái", vn: "ra đây" }, { tc: "回來", py: "huílái", vn: "trở về" }],
    examples: [{ tc: "歡迎來台灣。", py: "Huānyíng lái Táiwān.", vn: "Chào mừng đến Đài Loan." }],
    idiom: "禮尚往來 (Lǐ shàng wǎng lái) - Có qua có lại mới toại lòng nhau.", level: "TOCFL A"
  },
  {
    word: "是", pinyin: "shì", ipa: "ʂɨ⁵¹", hanViet: "Thị",
    image: "",
    radical: "Bộ Nhật (日) - Mặt trời. Ở dưới là chữ Chính (正).",
    explanation: "Động từ: Là, vâng, đúng.",
    compounds: [{ tc: "但是", py: "dànshì", vn: "nhưng mà" }, { tc: "還是", py: "háishì", vn: "hay là" }],
    examples: [{ tc: "我是學生。", py: "Wǒ shì xuéshēng.", vn: "Tôi là học sinh." }],
    idiom: "實事求是 (Shí shì qiú shì) - Thực sự cầu thị.", level: "TOCFL A"
  },
  {
    word: "小姐", pinyin: "xiǎojiě", ipa: "ɕjaʊ²¹⁴ tɕjɛ²¹⁴", hanViet: "Tiểu thư",
    image: "",
    radical: "Chữ Tiểu 小 (Bộ Tiểu), Chữ Thư 姐 (Bộ Nữ 女).",
    explanation: "Danh từ: Cô, chị (cách gọi lịch sự phụ nữ trẻ).",
    compounds: [{ tc: "姐妹", py: "jiěmèi", vn: "chị em" }],
    examples: [{ tc: "李小姐，你好。", py: "Lǐ xiǎojiě, nǐ hǎo.", vn: "Chào cô Lý." }],
    idiom: "大家閨秀 (Dà jiā guī xiù) - Tiểu thư khuê các.", level: "TOCFL A"
  },
  {
    word: "嗎", pinyin: "ma", ipa: "ma", hanViet: "Ma",
    image: "",
    radical: "Bộ Khẩu (口) - Liên quan đến lời nói, câu hỏi. Phải là chữ Mã (馬).",
    explanation: "Trợ từ: Không? (Đặt cuối câu hỏi Có/Không).",
    compounds: [{ tc: "好嗎", py: "hǎo ma", vn: "được không" }],
    examples: [{ tc: "你是越南人嗎？", py: "Nǐ shì Yuènán rén ma?", vn: "Bạn là người Việt Nam phải không?" }],
    idiom: "好嗎 (Hǎo ma) - Được không (câu cửa miệng).", level: "TOCFL A"
  },
  {
    word: "接", pinyin: "jiē", ipa: "tɕjɛ⁵⁵", hanViet: "Tiếp",
    image: "",
    radical: "Bộ Thủ (手 / 扌) - Liên quan đến tay, hành động của tay.",
    explanation: "Động từ: Đón, nhận, tiếp.",
    compounds: [{ tc: "接受", py: "jiēshòu", vn: "chấp nhận" }, { tc: "接電話", py: "jiē diànhuà", vn: "nghe điện thoại" }],
    examples: [{ tc: "我去機場接你。", py: "Wǒ qù jīchǎng jiē nǐ.", vn: "Tôi ra sân bay đón bạn." }],
    idiom: "接二連三 (Jiē èr lián sān) - Liên tiếp hết cái này đến cái khác.", level: "TOCFL A"
  },
  {
    word: "我們", pinyin: "wǒmen", ipa: "wɔ²¹⁴ mən", hanViet: "Ngã môn",
    image: "",
    radical: "Chữ Ngã 我 (Bộ Qua 戈), Chữ Môn 們 (Bộ Nhân 亻).",
    explanation: "Đại từ: Chúng tôi, chúng ta.",
    compounds: [{ tc: "他們", py: "tāmen", vn: "bọn họ" }, { tc: "你們", py: "nǐmen", vn: "các bạn" }],
    examples: [{ tc: "我們是好朋友。", py: "Wǒmen shì hǎo péngyǒu.", vn: "Chúng tôi là bạn tốt." }],
    idiom: "有福同享 (Yǒu fú tóng xiǎng) - Có phúc cùng hưởng.", level: "TOCFL A"
  },
  {
    word: "我", pinyin: "wǒ", ipa: "wɔ²¹⁴", hanViet: "Ngã",
    image: "",
    radical: "Bộ Qua (戈) - Cây qua (một loại vũ khí cổ).",
    explanation: "Đại từ: Tôi (ngôi thứ 1 số ít).",
    compounds: [{ tc: "我的", py: "wǒ de", vn: "của tôi" }, { tc: "自我", py: "zìwǒ", vn: "tự bản thân" }],
    examples: [{ tc: "我愛台灣。", py: "Wǒ ài Táiwān.", vn: "Tôi yêu Đài Loan." }],
    idiom: "忘我境界 (Wàng wǒ jìng jiè) - Cảnh giới quên mình.", level: "TOCFL A"
  },
  {
    word: "這", pinyin: "zhè / zhèi", ipa: "tʂɤ⁵¹ / tʂeɪ⁵¹", hanViet: "Giá",
    image: "",
    radical: "Bộ Sước (辵 / 辶) - Liên quan đến bước đi, dời gót.",
    explanation: "Đại từ chỉ thị: Đây, này.",
    compounds: [{ tc: "這裡", py: "zhèlǐ", vn: "ở đây" }, { tc: "這個", py: "zhège", vn: "cái này" }],
    examples: [{ tc: "這是我的老師。", py: "Zhè shì wǒ de lǎoshī.", vn: "Đây là thầy giáo của tôi." }],
    idiom: "這山望著那山高 (Zhè shān wàng zhe nà shān gāo) - Đứng núi này trông núi nọ.", level: "TOCFL A"
  },
  {
    word: "先生", pinyin: "xiānshēng", ipa: "ɕjɛn⁵⁵ ʂəŋ⁵⁵", hanViet: "Tiên sinh",
    image: "",
    radical: "Tiên 先 (Bộ Nhân 儿), Sinh 生 (Bộ Sinh 生).",
    explanation: "Danh từ: Ông, ngài, chồng (cách gọi tôn trọng nam giới).",
    compounds: [{ tc: "王先生", py: "Wáng xiānshēng", vn: "Ông Vương" }],
    examples: [{ tc: "先生，請問您貴姓？", py: "Xiānshēng, qǐngwèn nín guìxìng?", vn: "Thưa ông, xin hỏi ông họ gì?" }],
    idiom: "後生可畏 (Hòu shēng kě wèi) - Hậu sinh khả úy (người trẻ giỏi giang).", level: "TOCFL A"
  },
  {
    word: "好", pinyin: "hǎo", ipa: "xaʊ²¹⁴", hanViet: "Hảo",
    image: "",
    radical: "Bộ Nữ (女) ghép với bộ Tử (子). Ý nghĩa: Có con gái con trai là điều tốt đẹp.",
    explanation: "Tính từ: Tốt, khỏe, hay, ngon.",
    compounds: [{ tc: "很好", py: "hěnhǎo", vn: "rất tốt" }, { tc: "好人", py: "hǎorén", vn: "người tốt" }],
    examples: [{ tc: "你好！", py: "Nǐ hǎo!", vn: "Xin chào!" }],
    idiom: "好人一生平安 (Hǎo rén yī shēng píng'ān) - Người tốt một đời bình an.", level: "TOCFL A"
  },
  {
    word: "姓", pinyin: "xìng", ipa: "ɕiŋ⁵¹", hanViet: "Tính",
    image: "",
    radical: "Bộ Nữ (女) ghép với chữ Sinh (生). Thời xưa họ truyền theo mẹ nên có bộ Nữ.",
    explanation: "Động từ / Danh từ: Họ (trong tên gọi).",
    compounds: [{ tc: "姓名", py: "xìngmíng", vn: " họ tên" }, { tc: "貴姓", py: "guìxìng", vn: "quý danh" }],
    examples: [{ tc: "我姓阮。", py: "Wǒ xìng Ruǎn.", vn: "Tôi họ Nguyễn." }],
    idiom: "隱姓埋名 (Yǐn xìng mái míng) - Ẩn danh đổi họ.", level: "TOCFL A"
  },
  {
    word: "叫", pinyin: "jiào", ipa: "tɕjaʊ⁵¹", hanViet: "Khiếu",
    image: "",
    radical: "Bộ Khẩu (口) - Liên quan đến miệng, âm thanh phát ra.",
    explanation: "Động từ: Gọi là, tên là, kêu.",
    compounds: [{ tc: "叫做", py: "jiàozuò", vn: "gọi là" }, { tc: "大叫", py: "dàjiào", vn: "kêu to" }],
    examples: [{ tc: "我叫王大明。", py: "Wǒ叫 Wáng Dàmíng.", vn: "Tôi tên là Vương Đại Minh." }],
    idiom: "拍手叫好 (Pāi shǒu jiào hǎo) - Vỗ tay khen ngợi.", level: "TOCFL A"
  },
  {
    word: "臺灣 / 台灣", pinyin: "Táiwān", ipa: "tʰaɪ³⁵ wan⁵⁵", hanViet: "Đài Loan",
    image: "",
    radical: "Đài 臺 (Bộ Chí 至), Loan 灣 (Bộ Thủy 氵).",
    explanation: "Danh từ riêng: Đài Loan.",
    compounds: [{ tc: "台灣人", py: "Táiwān rén", vn: "người Đài Loan" }],
    examples: [{ tc: "台灣很漂亮。", py: "Táiwān hěn piàoliang.", vn: "Đài Loan rất đẹp." }],
    idiom: "寶島台灣 (Bǎo dǎo Táiwān) - Đảo ngọc Đài Loan.", level: "TOCFL A"
  },
  {
    word: "歡迎", pinyin: "huānyíng", ipa: "xwan⁵⁵ iŋ³⁵", hanViet: "Hoan nghênh",
    radical: "Hoan 歡 (Bộ Khiếm 欠), Nghênh 迎 (Bộ Sước 辶).",
    explanation: "Động từ: Chào mừng, hoan nghênh.",
    compounds: [{ tc: "受歡迎", py: "shòu huānyíng", vn: "được yêu thích" }],
    examples: [{ tc: "歡迎來台灣！", py: "Huānyíng lái Táiwān!", vn: "Chào mừng đến Đài Loan!" }],
    idiom: "皆大歡喜 (Jiē dà huān xǐ) - Mọi người đều vui vẻ.", level: "TOCFL A"
  },
  {
    word: "請問", pinyin: "qǐngwèn", ipa: "tɕʰiŋ²¹⁴ wən⁵¹", hanViet: "Thỉnh vấn",
    radical: "Thỉnh 請 (Bộ Ngôn 言), Vấn 問 (Bộ Khẩu 口 nằm trong bộ Môn 門).",
    explanation: "Động từ: Xin hỏi (cách nói lịch sự trước khi hỏi thông tin).",
    compounds: [{ tc: "學問", py: "xuéwèn", vn: "học vấn" }, { tc: "問題", py: "wèntí", vn: "vấn đề" }],
    examples: [{ tc: "請問，你是誰？", py: "Qǐngwèn, nǐ shì shéi?", vn: "Xin hỏi, bạn là ai?" }],
    idiom: "不恥下問 (Bù chǐ xià wèn) - Không ngại học hỏi kẻ dưới.", level: "TOCFL A"
  },
  {
    word: "是的", pinyin: "shìde", ipa: "ʂɨ⁵¹ tɤ", hanViet: "Thị đích",
    radical: "Thị 是 (Bộ Nhật 日), Đích 的 (Bộ Bạch 白).",
    explanation: "Cụm từ: Vâng, đúng vậy (dùng để xác nhận).",
    compounds: [{ tc: "真是的", py: "zhēn shì de", vn: "thật là..." }],
    examples: [{ tc: "是的，我是學生。", py: "Shì de, wǒ shì xuéshēng.", vn: "Vâng, tôi là học sinh." }],
    idiom: "的確如此 (Díquè rú cǐ) - Đích thực là như vậy.", level: "TOCFL A"
  },
  {
    word: "謝謝", pinyin: "xièxie", ipa: "ɕjɛ⁵¹ ɕjɛ", hanViet: "Tạ tạ",
    radical: "Bộ Ngôn (言 / 訁) - Liên quan đến lời nói. Ở giữa là Thân (身), phải là Thốn (寸).",
    explanation: "Động từ: Cảm ơn.",
    compounds: [{ tc: "道謝", py: "dàoxiè", vn: "nói lời cảm ơn" }, { tc: "感謝", py: "gǎnxiè", vn: "cảm tạ" }],
    examples: [{ tc: "謝謝你的幫忙。", py: "Xièxie nǐ de bāngmáng.", vn: "Cảm ơn sự giúp đỡ của bạn." }],
    idiom: "千恩萬謝 (Qiān ēn wàn xiè) - Ngàn lời cảm ơn.", level: "TOCFL A"
  },
  {
    word: "不客氣", pinyin: "búkèqì", ipa: "pu³⁵ kʰɤ⁵¹ tɕʰi⁵¹", hanViet: "Bất khách khí",
    radical: "Khách 客 (Bộ Miên 宀), Khí 氣 (Bộ Khí 气).",
    explanation: "Cụm từ: Đừng khách sáo, không có chi (đáp lại lời cảm ơn).",
    compounds: [{ tc: "客氣", py: "kèqì", vn: "khách sáo" }, { tc: "生氣", py: "shēngqì", vn: "tức giận" }],
    examples: [{ tc: "A: 謝謝你。B: 不客氣。", py: "A: Xièxie nǐ. B: Búkèqì.", vn: "A: Cảm ơn bạn. B: Không có chi." }],
    idiom: "反客為主 (Fǎn kè wéi zhǔ) - Khách lấn quyền chủ.", level: "TOCFL A"
  },
  {
    word: "你好", pinyin: "nǐ hǎo", ipa: "ni²¹⁴ xaʊ²¹⁴", hanViet: "Nhĩ hảo",
    radical: "Nhĩ 你 (Bộ Nhân 亻), Hảo 好 (Bộ Nữ 女).",
    explanation: "Cụm từ: Xin chào.",
    compounds: [{ tc: "你們好", py: "nǐmen hǎo", vn: "chào các bạn" }],
    examples: [{ tc: "你好，很高興認識你。", py: "Nǐ hǎo, hěn gāoxìng rènshí nǐ.", vn: "Xin chào, rất vui được quen biết bạn." }],
    idiom: "百年好合 (Bǎi nián hǎo hé) - Trăm năm hạnh phúc.", level: "TOCFL A"
  },
  {
    word: "哪國", pinyin: "nǎ guó / něi guó", ipa: "na²¹⁴ kwɔ³⁵", hanViet: "Nạ quốc",
    radical: "Nạ 哪 (Bộ Khẩu 口), Quốc 國 (Bộ Vi 囗 bao quanh chữ Ngọc 玉).",
    explanation: "Cụm từ: Nước nào (Dùng để hỏi quốc tịch).",
    compounds: [{ tc: "國家", py: "guójiā", vn: "quốc gia" }, { tc: "外國", py: "wàiguó", vn: "nước ngoài" }],
    examples: [{ tc: "你是哪國人？", py: "Nǐ shì nǎ guó rén?", vn: "Bạn là người nước nào?" }],
    idiom: "國泰民安 (Guó tài mín ān) - Quốc thái dân an.", level: "TOCFL A"
  },


  // --- TỪ VỰNG BÀI 2 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  {
    word: "伯母", pinyin: "bómǔ", ipa: "pwɔ³⁵ mu²¹⁴", hanViet: "Bá mẫu",
    image: "",
    radical: "伯 (Bộ Nhân 亻), 母 (Bộ Vô 毋/母).",
    explanation: "Danh từ: Bác gái (cách gọi tôn trọng mẹ của bạn bè, người lớn tuổi).",
    compounds: [{ tc: "伯父", py: "bófù", vn: "bác trai" }, { tc: "父母", py: "fùmǔ", vn: "bố mẹ" }],
    examples: [{ tc: "伯母，您好。", py: "Bómǔ, nín hǎo.", vn: "Cháu chào bác ạ." }],
    idiom: "賢妻良母 (Xián qī liáng mǔ) - Vợ hiền mẹ đảm.", level: "TOCFL A"
  },
  {
    word: "您", pinyin: "nín", ipa: "nin³⁵", hanViet: "Nhẫm",
    image: "",
    radical: "Bộ Tâm (心) nằm dưới chữ Nhĩ (ni) - Thể hiện sự tôn trọng từ tận đáy lòng.",
    explanation: "Đại từ: Ngài, ông, bà, bác (ngôi thứ 2 số ít, kính trọng).",
    compounds: [{ tc: "您好", py: "nín hǎo", vn: "chào ngài/bác" }],
    examples: [{ tc: "請問您貴姓？", py: "Qǐngwèn nín guìxìng?", vn: "Xin hỏi ngài họ gì?" }],
    idiom: "必恭必敬 (Bì gōng bì jìng) - Cung kính, lễ phép.", level: "TOCFL A"
  },
  {
    word: "名字", pinyin: "míngzi", ipa: "miŋ³⁵ tsɨ", hanViet: "Danh tự",
    image: "",
    radical: "名 (Bộ Khẩu 口), 字 (Bộ Miên 宀).",
    explanation: "Danh từ: Tên (thường chỉ tên gọi cá nhân).",
    compounds: [{ tc: "名片", py: "míngpiàn", vn: "danh thiếp" }, { tc: "有名", py: "yǒumíng", vn: "nổi tiếng" }],
    examples: [{ tc: "你叫什麼名字？", py: "Nǐ jiào shénme míngzi?", vn: "Bạn tên là gì?" }],
    idiom: "名副其實 (Míng fù qí shí) - Danh xứng với thực.", level: "TOCFL A"
  },
  {
    word: "書", pinyin: "shū", ipa: "ʂu⁵⁵", hanViet: "Thư",
    image: "",
    radical: "Bộ Viết (曰) hoặc Bộ Cổn (丨) tùy nét. Liên quan đến văn bản, sách vở.",
    explanation: "Danh từ: Sách, quyển sách.",
    compounds: [{ tc: "書局", py: "shūjú", vn: "nhà sách" }, { tc: "看書", py: "kànshū", vn: "đọc sách" }],
    examples: [{ tc: "這是一本好書。", py: "Zhè shì yì běn hǎo shū.", vn: "Đây là một cuốn sách hay." }],
    idiom: "書香門第 (Shū xiāng mén dì) - Gia đình gia giáo, trí thức.", level: "TOCFL A"
  },
  {
    word: "哥哥", pinyin: "gēge", ipa: "kɤ⁵⁵ kɤ", hanViet: "Ca ca",
    image: "",
    radical: "Bộ Khẩu (口) - Chữ Ca (哥) có hai bộ khẩu xếp chồng lên nhau.",
    explanation: "Danh từ: Anh trai.",
    compounds: [{ tc: "大哥", py: "dàgē", vn: "anh cả" }, { tc: "表哥", py: "biǎogē", vn: "anh họ" }],
    examples: [{ tc: "我哥哥是老師。", py: "Wǒ gēge shì lǎoshī.", vn: "Anh trai tôi là giáo viên." }],
    idiom: "稱兄道弟 (Chēng xiōng dào dì) - Gọi anh gọi em (thân thiết).", level: "TOCFL A"
  },
  {
    word: "看書", pinyin: "kànshū", ipa: "kʰan⁵¹ ʂu⁵⁵", hanViet: "Khán thư",
    image: "",
    radical: "看 (Bộ Mục 目 - mắt), 書 (Bộ Viết 曰). Dùng tay che mắt để nhìn rõ hơn.",
    explanation: "Động từ: Đọc sách.",
    compounds: [{ tc: "好看", py: "hǎokàn", vn: "đẹp, hay" }, { tc: "看見", py: "kànjiàn", vn: " nhìn thấy" }],
    examples: [{ tc: "我很喜歡看書。", py: "Wǒ hěn xǐhuān kànshū.", vn: "Tôi rất thích đọc sách." }],
    idiom: "走馬看花 (Zǒu mǎ kàn huā) - Cưỡi ngựa xem hoa.", level: "TOCFL A"
  },
  {
    word: "幾", pinyin: "jǐ", ipa: "tɕi²¹⁴", hanViet: "Kỷ",
    image: "",
    radical: "Bộ Yêu (幺) - Nhỏ bé, ít ỏi.",
    explanation: "Đại từ: Mấy, vài (dùng để hỏi số lượng nhỏ hơn 10).",
    compounds: [{ tc: "幾個", py: "jǐ gè", vn: "mấy cái" }, { tc: "幾歲", py: "jǐ suì", vn: "mấy tuổi" }],
    examples: [{ tc: "你有幾個哥哥？", py: "Nǐ yǒu jǐ gè gēge?", vn: "Bạn có mấy người anh trai?" }],
    idiom: "曾幾何時 (Céng jǐ hé shí) - Mới ngày nào đó.", level: "TOCFL A"
  },
  {
    word: "個", pinyin: "ge", ipa: "kɤ", hanViet: "Cá",
    image: "",
    radical: "Bộ Nhân đứng (亻) - Liên quan đến con người, cá thể.",
    explanation: "Lượng từ: Cái, con, người (lượng từ phổ biến nhất).",
    compounds: [{ tc: "個人", py: "gèrén", vn: "cá nhân" }, { tc: "這個", py: "zhège", vn: "cái này" }],
    examples: [{ tc: "我有一個妹妹。", py: "Wǒ yǒu yí gè mèimei.", vn: "Tôi có một đứa em gái." }],
    idiom: "各個擊破 (Gè gè jī pò) - Tiêu diệt từng cái một.", level: "TOCFL A"
  },
  {
    word: "沒", pinyin: "méi", ipa: "meɪ³⁵", hanViet: "Một / Một",
    image: "",
    radical: "Bộ Thủy (氵) - Liên quan đến nước, sự chìm ngập.",
    explanation: "Phó từ: Không có, chưa.",
    compounds: [{ tc: "沒有", py: "méiyǒu", vn: "không có" }, { tc: "沒事", py: "méishì", vn: "không sao" }],
    examples: [{ tc: "我沒有哥哥。", py: "Wǒ méiyǒu gēge.", vn: "Tôi không có anh trai." }],
    idiom: "沒完沒了 (Méi wán méi liǎo) - Không bao giờ kết thúc.", level: "TOCFL A"
  },
  {
    word: "兄弟", pinyin: "xiōngdì", ipa: "ɕjʊŋ⁵⁵ ti⁵¹", hanViet: "Huynh đệ",
    image: "",
    radical: "兄 (Bộ Nhân 儿), 弟 (Bộ Cung 弓).",
    explanation: "Danh từ: Anh em trai.",
    compounds: [{ tc: "大兄弟", py: "dà xiōngdì", vn: "người anh em" }],
    examples: [{ tc: "他們 là anh em tốt.", py: "Tāmen shì hǎo xiōngdì.", vn: "Họ là anh em tốt." }],
    idiom: "情同手足 (Qíng tóng shǒu zú) - Tình như thủ túc (anh em như tay chân).", level: "TOCFL A"
  },
  {
    word: "姐妹", pinyin: "jiěmèi", ipa: "tɕjɛ²¹⁴ meɪ⁵¹", hanViet: "Tỷ muội",
    image: "",
    radical: "Cả hai chữ đều có Bộ Nữ (女) chỉ người phụ nữ.",
    explanation: "Danh từ: Chị em gái.",
    compounds: [{ tc: "表姐妹", py: "biǎo jiěmèi", vn: "chị em họ" }],
    examples: [{ tc: "我們 là chị em tốt.", py: "Wǒmen shì hǎo jiěmèi.", vn: "Chúng tôi là chị em tốt." }],
    idiom: "情同姐妹 (Qíng tóng jiě mèi) - Thân thiết như chị em.", level: "TOCFL A"
  },
  {
    word: "五", pinyin: "wǔ", ipa: "wu²¹⁴", hanViet: "Ngũ",
    image: "",
    radical: "Bộ Nhị (二) - Số 5.",
    explanation: "Số từ: Năm (5).",
    compounds: [{ tc: "五月", py: "wǔyuè", vn: "tháng năm" }, { tc: "星期五", py: "xīngqīwǔ", vn: "thứ sáu" }],
    examples: [{ tc: "我有五本書。", py: "Wǒ yǒu wǔ běn shū.", vn: "Tôi có 5 cuốn sách." }],
    idiom: "五顏六色 (Wǔ yán liù sè) - Đủ màu sắc.", level: "TOCFL A"
  },
  {
    word: "兩", pinyin: "liǎng", ipa: "ljaŋ²¹⁴", hanViet: "Lưỡng",
    image: "",
    radical: "Bộ Nhập (入) - Đi vào.",
    explanation: "Số từ: Hai (dùng trước lượng từ).",
    compounds: [{ tc: "兩個", py: "liǎng gè", vn: "hai cái" }, { tc: "兩天", py: "liǎng tiān", vn: "hai ngày" }],
    examples: [{ tc: "我有兩個妹妹。", py: "Wǒ yǒu liǎng gè mèimei.", vn: "Tôi có hai em gái." }],
    idiom: "兩全其美 (Liǎng quán qí měi) - Vẹn cả đôi đường.", level: "TOCFL A"
  },
  {
    word: "的", pinyin: "de", ipa: "tɤ", hanViet: "Đích",
    image: "",
    radical: "Bộ Bạch (白) - Màu trắng. Bên phải là chữ Thước (勺).",
    explanation: "Trợ từ: Của (kết nối định ngữ và trung tâm ngữ).",
    compounds: [{ tc: "我的", py: "wǒ de", vn: "của tôi" }, { tc: "真的", py: "zhēnde", vn: "thật sự" }],
    examples: [{ tc: "這是我的書。", py: "Zhè shì wǒ de shū.", vn: "Đây là sách của tôi." }],
    idiom: "有的放矢 (Yǒu dì fàng shǐ) - Có đích mới bắn (làm việc có mục tiêu).", level: "TOCFL A"
  },
  {
    word: "家人", pinyin: "jiārén", ipa: "tɕja⁵⁵ ʐən³⁵", hanViet: "Gia nhân",
    image: "",
    radical: "家 (Bộ Miên 宀 - mái nhà), 人 (Bộ Nhân Nhân).",
    explanation: "Danh từ: Người nhà, thành viên gia đình.",
    compounds: [{ tc: "大家", py: "dàjiā", vn: "mọi người" }, { tc: "國家", py: "guójiā", vn: "quốc gia" }],
    examples: [{ tc: "我的家人在台灣。", py: "Wǒ de jiārén zài Táiwān.", vn: "Người nhà của tôi ở Đài Loan." }],
    idiom: "家和萬事興 (Jiā hé wàn shì xīng) - Gia hòa vạn sự hưng.", level: "TOCFL A"
  },
  {
    word: "家", pinyin: "jiā", ipa: "tɕja⁵⁵", hanViet: "Gia",
    image: "",
    radical: "Bộ Miên (宀 - mái nhà) che chở cho con heo (豕) ở dưới, tượng trưng cho nhà nông xưa.",
    explanation: "Danh từ / Lượng từ: Nhà, gia đình.",
    compounds: [{ tc: "回家", py: "huíjiā", vn: "về nhà" }, { tc: "家庭", py: "jiātíng", vn: "gia đình" }],
    examples: [{ tc: "我家有五個人。", py: "Wǒ jiā yǒu wǔ gè rén.", vn: "Nhà tôi có 5 người." }],
    idiom: "四海為家 (Sì hǎi wéi jiā) - Bốn bể là nhà.", level: "TOCFL A"
  },
  {
    word: "漂亮", pinyin: "piàoliàng", ipa: "pʰjaʊ⁵¹ ljaŋ⁵¹", hanViet: "Phiêu lượng",
    image: "",
    radical: "漂 (Bộ Thủy 氵), 亮 (Bộ Đầu 亠).",
    explanation: "Tính từ: Xinh đẹp, đẹp đẽ.",
    compounds: [{ tc: "很漂亮", py: "hěn piàoliàng", vn: "rất đẹp" }],
    examples: [{ tc: "你的房子很漂亮。", py: "Nǐ de fángzi hěn piàoliàng.", vn: "Nhà của bạn rất đẹp." }],
    idiom: "漂亮話 (Piàoliang huà) - Lời nói êm tai (chót lưỡi đầu môi).", level: "TOCFL A"
  },
  {
    word: "房子", pinyin: "fángzi", ipa: "faŋ³⁵ tsɨ", hanViet: "Phòng tử",
    image: "",
    radical: "房 (Bộ Hộ 戶 - cánh cửa), 子 (Bộ Tử Tử).",
    explanation: "Danh từ: Ngôi nhà, căn nhà.",
    compounds: [{ tc: "買房", py: "mǎifáng", vn: "mua nhà" }, { tc: "房間", py: "fángjiān", vn: "căn phòng" }],
    examples: [{ tc: "這棟房子很大。", py: "Zhè dòng fángzi hěn dà.", vn: "Căn nhà này rất lớn." }],
    idiom: "金屋藏嬌 (Jīn wū cáng jiāo) - Nhà vàng giấu người đẹp.", level: "TOCFL A"
  },
  {
    word: "坐", pinyin: "zuò", ipa: "tswɔ⁵¹", hanViet: "Tọa",
    image: "",
    radical: "Bộ Thổ (土) - Hai người (人) ngồi trên mặt đất (土).",
    explanation: "Động từ: Ngồi, đi (xe, tàu...).",
    compounds: [{ tc: "請坐", py: "qǐngzuò", vn: "mời ngồi" }, { tc: "坐車", py: "zuòchē", vn: "ngồi xe" }],
    examples: [{ tc: "請坐！", py: "Qǐng zuò!", vn: "Mời ngồi!" }],
    idiom: "坐井觀天 (Zuò jǐng guān tiān) - Ếch ngồi đáy giếng.", level: "TOCFL A"
  },
  {
    word: "有", pinyin: "yǒu", ipa: "joʊ²¹⁴", hanViet: "Hữu",
    image: "",
    radical: "Bộ Nguyệt (月) kết hợp với bộ Hựu (又).",
    explanation: "Động từ: Có.",
    compounds: [{ tc: "沒有", py: "méiyǒu", vn: "không có" }, { tc: "有名", py: "yǒumíng", vn: "nổi tiếng" }],
    examples: [{ tc: "我有兩個哥哥。", py: "Wǒ yǒu liǎng gè gēge.", vn: "Tôi có hai người anh trai." }],
    idiom: "有志竟成 (Yǒu zhì jìng chéng) - Có chí thì nên.", level: "TOCFL A"
  },
  {
    word: "多", pinyin: "duō", ipa: "twɔ⁵⁵", hanViet: "Đa",
    image: "",
    radical: "Bộ Tịch (夕) - Chiều tối. Hai chữ Tịch chồng lên nhau nghĩa là rất nhiều.",
    explanation: "Tính từ: Nhiều.",
    compounds: [{ tc: "多少", py: "duōshǎo", vn: "bao nhiêu" }, { tc: "很多", py: "hěnduō", vn: "rất nhiều" }],
    examples: [{ tc: "這裡有很多書。", py: "Zhèlǐ yǒu hěnduō shū.", vn: "Ở đây có rất nhiều sách." }],
    idiom: "多多益善 (Duō duō yì shàn) - Càng nhiều càng tốt.", level: "TOCFL A"
  },
  {
    word: "照片", pinyin: "zhàopiàn", ipa: "tʂaʊ⁵¹ pʰjɛn⁵¹", hanViet: "Chiếu phiến",
    image: "",
    radical: "照 (Bộ Hỏa 灬), 片 (Bộ Phiến 片 - tấm, mảnh).",
    explanation: "Danh từ: Bức ảnh, hình ảnh.",
    compounds: [{ tc: "拍照", py: "pāizhào", vn: "chụp ảnh" }, { tc: "相片", py: "xiàngpiàn", vn: "bức ảnh" }],
    examples: [{ tc: "這是我的家人照片。", py: "Zhè shì wǒ de jiārén zhàopiàn.", vn: "Đây là ảnh gia đình tôi." }],
    idiom: "按圖索驥 (Àn tú suǒ jì) - Tìm ngựa theo tranh (làm việc rập khuôn).", level: "TOCFL A"
  },
  {
    word: "都", pinyin: "dōu", ipa: "toʊ⁵⁵", hanViet: "Đô",
    image: "",
    radical: "Bộ Ấp (阝) nằm bên phải.",
    explanation: "Phó từ: Đều, tất cả.",
    compounds: [{ tc: "都是", py: "dōushì", vn: "đều là" }],
    examples: [{ tc: "我們都是台灣人。", py: "Wǒmen dōu shì Táiwān rén.", vn: "Chúng tôi đều là người Đài Loan." }],
    idiom: "名列前茅 (Míng liè qián máo) - Đứng đầu danh sách.", level: "TOCFL A"
  },
  {
    word: "照相", pinyin: "zhàoxiàng", ipa: "tʂaʊ⁵¹ ɕjaŋ⁵¹", hanViet: "Chiếu tướng",
    image: "",
    radical: "照 (Bộ Hỏa 灬), 相 (Bộ Mục Mục).",
    explanation: "Động từ: Chụp ảnh.",
    compounds: [{ tc: "照相機", py: "zhàoxiàngjī", vn: "máy ảnh" }],
    examples: [{ tc: "我們來照相吧！", py: "Wǒmen lái zhàoxiàng ba!", vn: "Chúng ta cùng chụp ảnh nhé!" }],
    idiom: "本來面目 (Běn lái miàn mù) - Bộ mặt thật.", level: "TOCFL A"
  },
  {
    word: "張", pinyin: "zhāng", ipa: "tʂaŋ⁵⁵", hanViet: "Trương",
    image: "",
    radical: "Bộ Cung (弓) - Cây cung. Bên phải là chữ Trường (長).",
    explanation: "Lượng từ: Tấm, tờ, chiếc (dùng cho vật mỏng, phẳng như giấy, ảnh, bàn).",
    compounds: [{ tc: "一張紙", py: "yì zhāng zhǐ", vn: "một tờ giấy" }],
    examples: [{ tc: "這是一張照片。", py: "Zhè shì yì zhāng zhàopiàn.", vn: "Đây là một bức ảnh." }],
    idiom: "明目張膽 (Míng mù zhāng dǎn) - Ngang nhiên trắng trợn.", level: "TOCFL A"
  },
  {
    word: "好看", pinyin: "hǎokàn", ipa: "xaʊ²¹⁴ kʰan⁵¹", hanViet: "Hảo khán",
    image: "",
    radical: "Hảo 好 (Bộ Nữ 女), Khán 看 (Bộ Mục Mục).",
    explanation: "Tính từ: Đẹp, dễ nhìn, hay (phim, sách).",
    compounds: [{ tc: "不好看", py: "bù hǎokàn", vn: "không đẹp" }],
    examples: [{ tc: "這本書很好看。", py: "Zhè běn shū hěn hǎokàn.", vn: "Cuốn sách này rất hay." }],
    idiom: "好看不中用 (Hǎokàn bù zhōng yòng) - Tốt mã giẻ cùi (Đẹp mà vô dụng).", level: "TOCFL A"
  },
  {
    word: "誰", pinyin: "shéi / shuí", ipa: "ʂeɪ³⁵", hanViet: "Thùy",
    image: "",
    radical: "Bộ Ngôn (言) - Lời nói.",
    explanation: "Đại từ: Ai (câu hỏi).",
    compounds: [{ tc: "是誰", py: "shì shéi", vn: "là ai" }],
    examples: [{ tc: "他是誰？", py: "Tā shì shéi?", vn: "Anh ấy là ai?" }],
    idiom: "誰 là ai sai (Shéi shì shéi fēi) - Ai đúng ai sai.", level: "TOCFL A"
  },
  {
    word: "姐姐", pinyin: "jiějie", ipa: "tɕjɛ²¹⁴ tɕjɛ", hanViet: "Tỷ tỷ",
    image: "",
    radical: "Bộ Nữ (女) - Liên quan đến phái nữ.",
    explanation: "Danh từ: Chị gái.",
    compounds: [{ tc: "小姐", py: "xiǎojiě", vn: "cô gái" }, { tc: "大姐", py: "dàjiě", vn: "chị cả" }],
    examples: [{ tc: "我姐姐很漂亮。", py: "Wǒ jiějie hěn piàoliàng.", vn: "Chị gái tôi rất đẹp." }],
    idiom: "情同姐妹 (Qíng tóng jiě mèi) - Thân thiết như chị em.", level: "TOCFL A"
  },
  {
    word: "妹妹", pinyin: "mèimei", ipa: "meɪ⁵¹ meɪ", hanViet: "Muội muội",
    image: "",
    radical: "Bộ Nữ (女) kết hợp với chữ Mùi (未).",
    explanation: "Danh từ: Em gái.",
    compounds: [{ tc: "兄妹", py: "xiōngmèi", vn: "anh em (trai gái)" }],
    examples: [{ tc: "我有兩個妹妹。", py: "Wǒ yǒu liǎng gè mèimei.", vn: "Tôi có hai đứa em gái." }],
    idiom: "姐妹情深 (Jiě mèi qíng shēn) - Tình chị em sâu đậm.", level: "TOCFL A"
  },
  {
    word: "爸爸", pinyin: "bàba", ipa: "pa⁵¹ pa", hanViet: "Ba ba",
    image: "",
    radical: "Bộ Phụ (父) - Cha. Chữ Ba 爸 có thêm chữ Ba 巴 ở dưới để mượn âm.",
    explanation: "Danh từ: Bố, ba.",
    compounds: [{ tc: "父母", py: "fùmǔ", vn: "bố mẹ" }, { tc: "老爸", py: "lǎobà", vn: "ông già (bố)" }],
    examples: [{ tc: "我爸爸 là医生.", py: "Wǒ bàba shì yīshēng.", vn: "Bố tôi là bác sĩ." }],
    idiom: "父慈子孝 (Fù cí zǐ xiào) - Cha hiền con hiếu.", level: "TOCFL A"
  },
  {
    word: "媽媽", pinyin: "māma", ipa: "ma⁵⁵ ma", hanViet: "Ma ma",
    image: "",
    radical: "Bộ Nữ (女) - Phụ nữ. Bên phải là chữ Mã (馬) mượn âm.",
    explanation: "Danh từ: Mẹ, má.",
    compounds: [{ tc: "父母", py: "fùmǔ", vn: "bố mẹ" }, { tc: "老媽", py: "lǎomā", vn: "bà già (mẹ)" }],
    examples: [{ tc: "我媽媽很漂亮。", py: "Wǒ māma hěn piàoliàng.", vn: "Mẹ tôi rất đẹp." }],
    idiom: "孟母三遷 (Mèng mǔ sān qiān) - Mạnh mẫu ba lần chuyển nhà (Mẹ hiền dạy con).", level: "TOCFL A"
  },
  {
    word: "請進", pinyin: "qǐng jìn", ipa: "tɕʰiŋ²¹⁴ tɕin⁵¹", hanViet: "Thỉnh tiến",
    image: "",
    radical: "請 (Bộ Ngôn 言), 進 (Bộ Sước 辶).",
    explanation: "Cụm từ: Xin mời vào.",
    compounds: [{ tc: "進來", py: "jìnlái", vn: "vào đây" }, { tc: "進步", py: "jìnbù", vn: "tiến bộ" }],
    examples: [{ tc: "歡迎！請進，請坐。", py: "Huānyíng! Qǐng jìn, Qǐng zuò.", vn: "Chào mừng! Xin mời vào, mời ngồi." }],
    idiom: "突飛猛進 (Tū fēi měng jìn) - Tiến bộ vượt bậc.", level: "TOCFL A"
  },

  // --- TỪ VỰNG BÀI 3 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  {
    word: "埋怨 / 抱怨", pinyin: "mányuàn / bàoyuàn", ipa: "man³⁵ yɛn⁵¹ / paʊ⁵¹ yɛn⁵¹", hanViet: "Mai oán / Bão oán",
    image: "", // <--- DÁN LINK ẢNH VÀO ĐÂY (VÍ DỤ: "link_anh_trach_moc.jpg")
    radical: "Mai 埋 (Bộ Thổ 土), Oán 怨 (Bộ Tâm 心), Bão 抱 (Bộ Thủ 扌).",
    explanation: "【抱怨】：Đối với người hoặc sự vật lòng mang bất mãn. (Phàn nàn). <br> 【埋怨】：Vì sự việc không như ý mà oán trách đối tượng. (Trách móc).",
    compounds: [{ tc: "怨恨", py: "yuànhèn", vn: "oán hận" }, { tc: "抱歉", py: "bàoqiàn", vn: "xin lỗi" }],
    examples: [{ tc: "他總是抱怨工作太累。", py: "Tā zǒngshì bàoyuàn gōngzuò tài lèi.", vn: "Anh ấy luôn phàn nàn công việc quá mệt." }],
    idiom: "任勞任怨 (Rèn láo rèn yuàn) - Chịu thương chịu khó.", level: "TOCFL B"
  },
  // ==========================================
  // --- TỪ VỰNG BÀI 3 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  // ==========================================
  {
    word: "週末", pinyin: "zhōumò", ipa: "tʂoʊ⁵⁵ mwɔ⁵¹", hanViet: "Chu mạt",
    image: "",
    radical: "週 (Bộ Sước 辶 - đi lại), 末 (Bộ Mộc 木 - nét gạch ngang dài ở trên chỉ ngọn cây/phần cuối).",
    explanation: "Danh từ: Cuối tuần.",
    compounds: [{ tc: "週末愉快", py: "zhōumò yúkuài", vn: "cuối tuần vui vẻ" }],
    examples: [{ tc: "這個週末你有空嗎？", py: "Zhège zhōumò nǐ yǒu kòng ma?", vn: "Cuối tuần này bạn có rảnh không?" }],
    idiom: "每逢週末 (Měi féng zhōumò) - Cứ mỗi dịp cuối tuần.", level: "TOCFL A"
  },
  {
    word: "聽", pinyin: "tīng", ipa: "tʰiŋ⁵⁵", hanViet: "Thính",
    image: "",
    radical: "Bộ Nhĩ (耳) - Lỗ tai. Chữ Thính phồn thể rất phức tạp, bao gồm tai (耳), mắt (目) và tim (心), ngụ ý lắng nghe phải dùng cả tâm trí.",
    explanation: "Động từ: Nghe, lắng nghe.",
    compounds: [{ tc: "聽說", py: "tīngshuō", vn: "nghe nói" }, { tc: "好聽", py: "hǎotīng", vn: "nghe hay" }],
    examples: [{ tc: "我喜歡聽音樂。", py: "Wǒ xǐhuān tīng yīnyuè.", vn: "Tôi thích nghe nhạc." }],
    idiom: "言聽計從 (Yán tīng jì cóng) - Nói gì nghe nấy (Răm rắp ngoan ngoãn).", level: "TOCFL A"
  },
  {
    word: "音樂", pinyin: "yīnyuè", ipa: "in⁵⁵ ɥɛ⁵¹", hanViet: "Âm nhạc",
    image: "",
    radical: "音 (Bộ Âm 音), 樂 (Bộ Mộc 木).",
    explanation: "Danh từ: Âm nhạc.",
    compounds: [{ tc: "音樂會", py: "yīnyuèhuì", vn: "buổi hòa nhạc" }],
    examples: [{ tc: "台灣的音樂很好聽。", py: "Táiwān de yīnyuè hěn hǎotīng.", vn: "Âm nhạc Đài Loan rất hay." }],
    idiom: "靡靡之音 (Mǐ mǐ zhī yīn) - Âm nhạc ủy mị.", level: "TOCFL A"
  },
  {
    word: "運動", pinyin: "yùndòng", ipa: "yn⁵¹ tʊŋ⁵¹", hanViet: "Vận động",
    image: "",
    radical: "運 (Bộ Sước 辶), 動 (Bộ Lực 力 - sức mạnh).",
    explanation: "Danh từ/Động từ: Thể thao, vận động, tập thể dục.",
    compounds: [{ tc: "做運動", py: "zuò yùndòng", vn: "tập thể thao" }],
    examples: [{ tc: "他常常去運動。", py: "Tā chángcháng qù yùndòng.", vn: "Anh ấy thường xuyên đi tập thể dục." }],
    idiom: "生命在於運動 (Shēngmìng zàiyú yùndòng) - Cuộc sống là phải vận động.", level: "TOCFL A"
  },
  {
    word: "打", pinyin: "dǎ", ipa: "ta²¹⁴", hanViet: "Đả",
    image: "",
    radical: "Bộ Thủ (扌) - Liên quan đến hành động của tay. Bên phải là chữ Đinh (丁).",
    explanation: "Động từ: Đánh, chơi (các môn thể thao dùng tay).",
    compounds: [{ tc: "打球", py: "dǎqiú", vn: "chơi bóng" }, { tc: "打電話", py: "dǎ diànhuà", vn: "gọi điện thoại" }],
    examples: [{ tc: "我們一起去打網球吧！", py: "Wǒmen yìqǐ qù dǎ wǎngqiú ba!", vn: "Chúng ta cùng đi đánh tennis đi!" }],
    idiom: "打抱不平 (Dǎ bào bù píng) - Ra tay bênh vực kẻ yếu.", level: "TOCFL A"
  },
  {
    word: "網球", pinyin: "wǎngqiú", ipa: "waŋ²¹⁴ tɕʰjoʊ³⁵", hanViet: "Võng cầu",
    image: "",
    radical: "網 (Bộ Võng 罒 - cái lưới), 球 (Bộ Ngọc 王/玉).",
    explanation: "Danh từ: Môn quần vợt (Tennis).",
    compounds: [{ tc: "打網球", py: "dǎ wǎngqiú", vn: "đánh tennis" }],
    examples: [{ tc: "週末我常去打網球。", py: "Zhōumò wǒ cháng qù dǎ wǎngqiú.", vn: "Cuối tuần tôi thường đi đánh tennis." }],
    idiom: "網開一面 (Wǎng kāi yí miàn) - Mở lưới một mặt (Khoan hồng độ lượng).", level: "TOCFL A"
  },
  {
    word: "棒球", pinyin: "bàngqiú", ipa: "paŋ⁵¹ tɕʰjoʊ³⁵", hanViet: "Bổng cầu",
    image: "",
    radical: "棒 (Bộ Mộc 木 - gậy gỗ), 球 (Bộ Ngọc 王/玉).",
    explanation: "Danh từ: Môn bóng chày (Môn thể thao vua tại Đài Loan).",
    compounds: [{ tc: "打棒球", py: "dǎ bàngqiú", vn: "chơi bóng chày" }, { tc: "很棒", py: "hěn bàng", vn: "rất giỏi/tuyệt vời" }],
    examples: [{ tc: "台灣人很喜歡看棒球。", py: "Táiwān rén hěn xǐhuān kàn bàngqiú.", vn: "Người Đài Loan rất thích xem bóng chày." }],
    idiom: "當頭棒喝 (Dāng tóu bàng hè) - Cảnh tỉnh mãnh liệt.", level: "TOCFL A"
  },
  {
    word: "和", pinyin: "hàn / hé", ipa: "xan⁵¹", hanViet: "Hòa",
    image: "",
    radical: "Bộ Khẩu (口) - Liên quan đến miệng. (Lưu ý: Ở Đài Loan thường đọc là 'hàn').",
    explanation: "Liên từ: Và, cùng với.",
    compounds: [{ tc: "和平", py: "hépíng", vn: "hòa bình" }],
    examples: [{ tc: "我和你一起去。", py: "Wǒ hàn nǐ yìqǐ qù.", vn: "Tôi và bạn cùng đi." }],
    idiom: "和氣生財 (Hé qì shēng cái) - Hòa khí sinh tài (Buôn bán cần vui vẻ).", level: "TOCFL A"
  },
  {
    word: "游泳", pinyin: "yóuyǒng", ipa: "joʊ³⁵ jʊŋ²¹⁴", hanViet: "Du vịnh",
    image: "",
    radical: "Cả hai chữ đều có Bộ Thủy (氵) - Liên quan đến nước.",
    explanation: "Động từ: Bơi lội.",
    compounds: [{ tc: "去游泳", py: "qù yóuyǒng", vn: "đi bơi" }],
    examples: [{ tc: "明天早上我們去游泳吧。", py: "Míngtiān zǎoshàng wǒmen qù yóuyǒng ba.", vn: "Sáng mai chúng ta đi bơi đi." }],
    idiom: "如魚得水 (Rú yǔ dé shuǐ) - Như cá gặp nước.", level: "TOCFL A"
  },
  {
    word: "常", pinyin: "cháng", ipa: "tʂʰaŋ³⁵", hanViet: "Thường",
    image: "",
    radical: "Bộ Cân (巾) - Khăn vải.",
    explanation: "Phó từ: Thường, thường xuyên.",
    compounds: [{ tc: "常常", py: "chángcháng", vn: "thường xuyên" }, { tc: "平常", py: "píngcháng", vn: "bình thường" }],
    examples: [{ tc: "我常去圖書館看書。", py: "Wǒ cháng qù túshūguǎn kànshū.", vn: "Tôi thường đến thư viện đọc sách." }],
    idiom: "家常便飯 (Jiā cháng biàn fàn) - Chuyện thường ngày ở huyện.", level: "TOCFL A"
  },
  {
    word: "籃球", pinyin: "lánqiú", ipa: "lan³⁵ tɕʰjoʊ³⁵", hanViet: "Lam cầu",
    image: "",
    radical: "籃 (Bộ Trúc 竹 - rổ đan bằng tre trúc), 球 (Bộ Ngọc 王/玉).",
    explanation: "Danh từ: Môn bóng rổ.",
    compounds: [{ tc: "打籃球", py: "dǎ lánqiú", vn: "chơi bóng rổ" }],
    examples: [{ tc: "下課後我們去打籃球。", py: "Xiàkè hòu wǒmen qù dǎ lánqiú.", vn: "Sau khi tan học chúng ta đi đánh bóng rổ nhé." }],
    idiom: "竹籃打水一場空 (Zhú lán dǎ shuǐ yì chǎng kōng) - Dã tràng xe cát biển Đông (Công cốc).", level: "TOCFL A"
  },
  {
    word: "也", pinyin: "yě", ipa: "jɛ²¹⁴", hanViet: "Dã",
    image: "",
    radical: "Bộ Ất (乙) - Nét cong.",
    explanation: "Phó từ: Cũng.",
    compounds: [{ tc: "也許", py: "yěxǔ", vn: "có lẽ" }, { tc: "也是", py: "yě shì", vn: "cũng là" }],
    examples: [{ tc: "我是學生，他也是學生。", py: "Wǒ shì xuéshēng, tā yě shì xuéshēng.", vn: "Tôi là học sinh, anh ấy cũng là học sinh." }],
    idiom: "空空如也 (Kōng kōng rú yě) - Trống rỗng chẳng có gì.", level: "TOCFL A"
  },
  {
    word: "踢", pinyin: "tī", ipa: "tʰi⁵⁵", hanViet: "Địch",
    image: "",
    radical: "Bộ Túc (足) - Liên quan đến chân, dùng chân tác động.",
    explanation: "Động từ: Đá (bóng).",
    compounds: [{ tc: "踢足球", py: "tī zúqiú", vn: "đá bóng" }],
    examples: [{ tc: "很多越南人喜歡踢足球。", py: "Hěnduō Yuènán rén xǐhuān tī zúqiú.", vn: "Rất nhiều người Việt Nam thích đá bóng." }],
    idiom: "拳打腳踢 (Quán dǎ jiǎo tī) - Đấm đá túi bụi.", level: "TOCFL A"
  },
  {
    word: "足球", pinyin: "zúqiú", ipa: "tsu³⁵ tɕʰjoʊ³⁵", hanViet: "Túc cầu",
    image: "",
    radical: "足 (Bộ Túc 足 - cái chân), 球 (Bộ Ngọc 王/玉).",
    explanation: "Danh từ: Môn bóng đá.",
    compounds: [{ tc: "踢足球", py: "tī zúqiú", vn: "chơi bóng đá" }],
    examples: [{ tc: "週末我們一起去看足球。", py: "Zhōumò wǒmen yìqǐ qù kàn zúqiú.", vn: "Cuối tuần chúng ta cùng đi xem bóng đá nhé." }],
    idiom: "舉足輕重 (Jǔ zú qīng zhòng) - Đóng vai trò quan trọng.", level: "TOCFL A"
  },
  {
    word: "覺得", pinyin: "juéde", ipa: "tɕɥɛ³⁵ tɤ", hanViet: "Giác đắc",
    image: "",
    radical: "覺 (Bộ Kiến 見 - nhìn thấy, cảm thấy), 得 (Bộ Xích 彳).",
    explanation: "Động từ: Cảm thấy, nghĩ rằng.",
    compounds: [{ tc: "感覺", py: "gǎnjué", vn: "cảm giác" }],
    examples: [{ tc: "我覺得台灣很漂亮。", py: "Wǒ juéde Táiwān hěn piàoliang.", vn: "Tôi cảm thấy Đài Loan rất đẹp." }],
    idiom: "不知不覺 (Bù zhī bù jué) - Bất tri bất giác (Không nhận ra).", level: "TOCFL A"
  },
  {
    word: "好玩", pinyin: "hǎowán", ipa: "xaʊ²¹⁴ wan³⁵", hanViet: "Hảo ngoạn",
    image: "",
    radical: "好 (Bộ Nữ 女), 玩 (Bộ Ngọc 王/玉 - ngày xưa đồ chơi thường làm bằng ngọc).",
    explanation: "Tính từ: Thú vị, vui, hay.",
    compounds: [{ tc: "玩笑", py: "wánxiào", vn: "trò đùa" }],
    examples: [{ tc: "這個遊戲很好玩。", py: "Zhège yóuxì hěn hǎowán.", vn: "Trò chơi này rất vui." }],
    idiom: "玩物喪志 (Wán wù sàng zhì) - Mải chơi quên chí lớn.", level: "TOCFL A"
  },
  {
    word: "明天", pinyin: "míngtiān", ipa: "miŋ³⁵ tʰjɛn⁵⁵", hanViet: "Minh thiên",
    image: "",
    radical: "明 (Bộ Nhật 日 và Nguyệt 月 - ngày mai luôn tươi sáng), 天 (Bộ Đại 大).",
    explanation: "Danh từ: Ngày mai.",
    compounds: [{ tc: "明白", py: "míngbái", vn: "rõ ràng/hiểu" }, { tc: "今天", py: "jīntiān", vn: "hôm nay" }],
    examples: [{ tc: "明天我要去學校。", py: "Míngtiān wǒ yào qù xuéxiào.", vn: "Ngày mai tôi phải đến trường." }],
    idiom: "明日黃花 (Míng rì huáng huā) - Đóa hoa ngày mai (Sự việc đã lỗi thời).", level: "TOCFL A"
  },
  {
    word: "早上", pinyin: "zǎoshàng", ipa: "tsaʊ²¹⁴ ʂaŋ⁵¹", hanViet: "Tảo thượng",
    image: "",
    radical: "早 (Bộ Nhật 日 - mặt trời mới nhú trên cỏ).",
    explanation: "Danh từ: Buổi sáng.",
    compounds: [{ tc: "早安", py: "zǎo'ān", vn: "chào buổi sáng" }, { tc: "早餐", py: "zǎocān", vn: "bữa sáng" }],
    examples: [{ tc: "早上好！", py: "Zǎoshàng hǎo!", vn: "Chào buổi sáng!" }],
    idiom: "起早貪黑 (Qǐ zǎo tān hēi) - Thức khuya dậy sớm.", level: "TOCFL A"
  },
  {
    word: "去", pinyin: "qù", ipa: "tɕʰy⁵¹", hanViet: "Khứ",
    image: "",
    radical: "Bộ Tư (厶).",
    explanation: "Động từ: Đi, đến (rời xa người nói).",
    compounds: [{ tc: "過去", py: "guòqù", vn: "quá khứ/qua đó" }, { tc: "去年", py: "qùnián", vn: "năm ngoái" }],
    examples: [{ tc: "我要去台灣學中文。", py: "Wǒ yào qù Táiwān xué Zhōngwén.", vn: "Tôi muốn đi Đài Loan học tiếng Trung." }],
    idiom: "來龍去脈 (Lái lóng qù mài) - Lai lịch ngọn nguồn.", level: "TOCFL A"
  },
  {
    word: "怎麼樣", pinyin: "zěnmeyàng", ipa: "tsən²¹⁴ mɤ jaŋ⁵¹", hanViet: "Chẩm ma dạng",
    image: "",
    radical: "怎 (Bộ Tâm 心), 樣 (Bộ Mộc 木).",
    explanation: "Đại từ nghi vấn: Thế nào? Ra sao? (Dùng để hỏi ý kiến).",
    compounds: [{ tc: "怎麼", py: "zěnme", vn: "như thế nào/sao lại" }, { tc: "樣子", py: "yàngzi", vn: "dáng vẻ" }],
    examples: [{ tc: "我們去踢足球，怎麼樣？", py: "Wǒmen qù tī zúqiú, zěnmeyàng?", vn: "Chúng ta đi đá bóng, thấy sao?" }],
    idiom: "裝模作樣 (Zhuāng mú zuò yàng) - Ra vẻ, làm bộ làm tịch.", level: "TOCFL A"
  },
  {
    word: "啊", pinyin: "a / a", ipa: "a", hanViet: "A",
    image: "",
    radical: "Bộ Khẩu (口) - Trợ từ ngữ khí cuối câu.",
    explanation: "Trợ từ: À, nhé, nha, đấy.",
    compounds: [{ tc: "好啊", py: "hǎo a", vn: "được chứ/ok" }],
    examples: [{ tc: "好啊，我們一起去！", py: "Hǎo a, wǒmen yìqǐ qù!", vn: "Được thôi, chúng ta cùng đi!" }],
    idiom: "啊 (A) - Thường đứng độc lập như từ cảm thán.", level: "TOCFL A"
  },
  {
    word: "今天", pinyin: "jīntiān", ipa: "tɕin⁵⁵ tʰjɛn⁵⁵", hanViet: "Kim thiên",
    image: "",
    radical: "今 (Bộ Nhân 人/nhân nón).",
    explanation: "Danh từ: Hôm nay.",
    compounds: [{ tc: "今年", py: "jīnnián", vn: "năm nay" }],
    examples: [{ tc: "今天天氣很好。", py: "Jīntiān tiānqì hěn hǎo.", vn: "Hôm nay thời tiết rất tốt." }],
    idiom: "今非昔比 (Jīn fēi xí bǐ) - Xưa đâu bằng nay.", level: "TOCFL A"
  },
  {
    word: "晚上", pinyin: "wǎnshàng", ipa: "wan²¹⁴ ʂaŋ⁵¹", hanViet: "Vãn thượng",
    image: "",
    radical: "晚 (Bộ Nhật 日 - mặt trời lặn).",
    explanation: "Danh từ: Buổi tối.",
    compounds: [{ tc: "晚安", py: "wǎn'ān", vn: "chúc ngủ ngon" }, { tc: "晚飯", py: "wǎnfàn", vn: "bữa tối" }],
    examples: [{ tc: "今天晚上你想吃什麼？", py: "Jīntiān wǎnshàng nǐ xiǎng chī shénme?", vn: "Tối nay bạn muốn ăn gì?" }],
    idiom: "大器晚成 (Dà qì wǎn chéng) - Đại khí vãn thành (Thành công muộn).", level: "TOCFL A"
  },
  {
    word: "看", pinyin: "kàn", ipa: "kʰan⁵¹", hanViet: "Khán",
    image: "",
    radical: "Bộ Mục (目) - Con mắt. Tay (扌) che trên mắt (目) để nhìn cho rõ.",
    explanation: "Động từ: Nhìn, xem, đọc.",
    compounds: [{ tc: "好看", py: "hǎokàn", vn: "đẹp/hay" }, { tc: "看見", py: "kànjiàn", vn: "nhìn thấy" }],
    examples: [{ tc: "週末我常在家看電影。", py: "Zhōumò wǒ cháng zài jiā kàn diànyǐng.", vn: "Cuối tuần tôi thường ở nhà xem phim." }],
    idiom: "刮目相看 (Guā mù xiāng kàn) - Lau mắt mà nhìn (Nhìn với ánh mắt khác).", level: "TOCFL A"
  },
  {
    word: "電影", pinyin: "diànyǐng", ipa: "tjɛn⁵¹ iŋ²¹⁴", hanViet: "Điện ảnh",
    image: "",
    radical: "電 (Bộ Vũ 雨 - tia chớp dưới mưa), 影 (Bộ Sam 彡 - hình bóng).",
    explanation: "Danh từ: Phim điện ảnh, bộ phim.",
    compounds: [{ tc: "電影院", py: "diànyǐngyuàn", vn: "rạp chiếu phim" }],
    examples: [{ tc: "我們一起去看電影吧。", py: "Wǒmen yìqǐ qù kàn diànyǐng ba.", vn: "Chúng ta cùng đi xem phim đi." }],
    idiom: "捕風捉影 (Bǔ fēng zhuō yǐng) - Bắt gió vồ bóng (Chuyện không có căn cứ).", level: "TOCFL A"
  },
  {
    word: "妳", pinyin: "nǐ", ipa: "ni²¹⁴", hanViet: "Nhĩ (nữ)",
    image: "",
    radical: "Bộ Nữ (女) - Dùng thay thế cho 你 để gọi phái nữ một cách tôn trọng/nhấn mạnh giới tính.",
    explanation: "Đại từ: Bạn, cô, chị (ngôi thứ 2 số ít, chỉ nữ giới).",
    compounds: [{ tc: "妳們", py: "nǐmen", vn: "các bạn (nữ)" }],
    examples: [{ tc: "妳今天很漂亮。", py: "Nǐ jīntiān hěn piàoliang.", vn: "Hôm nay bạn rất đẹp." }],
    idiom: "無 (Thường dùng chung thành ngữ với 你).", level: "TOCFL A"
  },
  {
    word: "想", pinyin: "xiǎng", ipa: "ɕjaŋ²¹⁴", hanViet: "Tưởng",
    image: "",
    radical: "Bộ Tâm (心) - Liên quan đến suy nghĩ từ trong lòng. Chữ Tương (相) ở trên chỉ âm.",
    explanation: "Động từ năng nguyện: Muốn, nghĩ, nhớ.",
    compounds: [{ tc: "想家", py: "xiǎngjiā", vn: "nhớ nhà" }, { tc: "想法", py: "xiǎngfǎ", vn: "cách nghĩ" }],
    examples: [{ tc: "我想去台灣學中文。", py: "Wǒ xiǎng qù Táiwān xué Zhōngwén.", vn: "Tôi muốn đi Đài Loan học tiếng Trung." }],
    idiom: "異想天開 (Yì xiǎng tiān kāi) - Nghĩ hão huyền (Nghĩ chuyện động trời).", level: "TOCFL A"
  },
  {
    word: "還是", pinyin: "háishì", ipa: "xaɪ³⁵ ʂɨ⁵¹", hanViet: "Hoàn thị",
    image: "",
    radical: "還 (Bộ Sước 辶), 是 (Bộ Nhật 日).",
    explanation: "Liên từ: Hay là (Dùng trong câu hỏi lựa chọn A hoặc B).",
    compounds: [{ tc: "還有", py: "háiyǒu", vn: "vẫn còn/ngoài ra" }],
    examples: [{ tc: "你想喝茶還是喝咖啡？", py: "Nǐ xiǎng hē chá háishì hē kāfēi?", vn: "Bạn muốn uống trà hay là uống cà phê?" }],
    idiom: "還是老樣子 (Háishì lǎo yàngzi) - Vẫn y như cũ.", level: "TOCFL A"
  },
  {
    word: "吧", pinyin: "ba", ipa: "pa", hanViet: "Ba",
    image: "",
    radical: "Bộ Khẩu (口) - Trợ từ ngữ khí cuối câu. Phải là chữ Ba (巴) chỉ âm.",
    explanation: "Trợ từ: Đi, nhé, thôi (Dùng để đưa ra đề nghị, yêu cầu nhẹ nhàng).",
    compounds: [{ tc: "好吧", py: "hǎo ba", vn: "được thôi" }, { tc: "走吧", py: "zǒu ba", vn: "đi thôi" }],
    examples: [{ tc: "我們去打網球吧！", py: "Wǒmen qù dǎ wǎngqiú ba!", vn: "Chúng ta đi đánh tennis đi!" }],
    idiom: "吧 (Ba) - Thường đứng cuối câu cầu khiến.", level: "TOCFL A"
  },
  {
    word: "可以", pinyin: "kěyǐ", ipa: "kʰɤ²¹⁴ i²¹⁴", hanViet: "Khả dĩ",
    image: "",
    radical: "可 (Bộ Khẩu 口), 以 (Bộ Nhân 人).",
    explanation: "Động từ năng nguyện: Có thể, được (chỉ sự cho phép hoặc khả năng).",
    compounds: [{ tc: "可愛", py: "kě'ài", vn: "đáng yêu" }, { tc: "所以", py: "suǒyǐ", vn: "cho nên" }],
    examples: [{ tc: "我可以去嗎？", py: "Wǒ kěyǐ qù ma?", vn: "Tôi có thể đi không?" }],
    idiom: "可想而知 (Kě xiǎng ér zhī) - Có thể hình dung được.", level: "TOCFL A"
  },
  {
    word: "學", pinyin: "xué", ipa: "ɕɥɛ³⁵", hanViet: "Học",
    image: "",
    radical: "Bộ Tử (子) - Đứa trẻ ở dưới mái nhà đang tiếp thu kiến thức.",
    explanation: "Động từ: Học, học tập.",
    compounds: [{ tc: "學生", py: "xuéshēng", vn: "học sinh" }, { tc: "學校", py: "xuéxiào", vn: "trường học" }],
    examples: [{ tc: "很多越南學生來台灣學中文。", py: "Hěnduō Yuènán xuéshēng lái Táiwān xué Zhōngwén.", vn: "Rất nhiều học sinh Việt Nam đến Đài Loan học tiếng Trung." }],
    idiom: "學無止境 (Xué wú zhǐ jìng) - Học không có điểm dừng.", level: "TOCFL A"
  },
  {
    word: "中文", pinyin: "Zhōngwén", ipa: "tʂʊŋ⁵⁵ wən³⁵", hanViet: "Trung văn",
    image: "",
    radical: "中 (Bộ Cổn 丨), 文 (Bộ Văn 文).",
    explanation: "Danh từ: Tiếng Trung Quốc.",
    compounds: [{ tc: "中國", py: "Zhōngguó", vn: "Trung Quốc" }, { tc: "文化", py: "wénhuà", vn: "văn hóa" }],
    examples: [{ tc: "我覺得中文很有意思。", py: "Wǒ juéde Zhōngwén hěn yǒu yìsi.", vn: "Tôi cảm thấy tiếng Trung rất thú vị." }],
    idiom: "咬文嚼字 (Yǎo wén jiáo zì) - Cắn câu nhai chữ (Trau chuốt từng chữ).", level: "TOCFL A"
  },
  {
    word: "一起", pinyin: "yìqǐ", ipa: "i⁵¹ tɕʰi²¹⁴", hanViet: "Nhất khởi",
    image: "",
    radical: "一 (Bộ Nhất 一), 起 (Bộ Tẩu 走 - chạy/đi lại).",
    explanation: "Phó từ: Cùng nhau.",
    compounds: [{ tc: "起來", py: "qǐlái", vn: "đứng lên/thức dậy" }],
    examples: [{ tc: "週末我們一起去看電影，好不好？", py: "Zhōumò wǒmen yìqǐ qù kàn diànyǐng, hǎo bù hǎo?", vn: "Cuối tuần chúng ta cùng đi xem phim nhé, được không?" }],
    idiom: "起死回生 (Qǐ sǐ huí shēng) - Cải tử hoàn sinh.", level: "TOCFL A"
  },
  {
    word: "吃", pinyin: "chī", ipa: "tʂʰɨ⁵⁵", hanViet: "Ngật",
    image: "",
    radical: "Bộ Khẩu (口) - Liên quan đến miệng, ăn uống. Kế bên là chữ Khất (乞).",
    explanation: "Động từ: Ăn.",
    compounds: [{ tc: "吃飯", py: "chīfàn", vn: "ăn cơm" }, { tc: "好吃", py: "hǎochī", vn: "ngon" }],
    examples: [{ tc: "你要吃什麼？", py: "Nǐ yào chī shénme?", vn: "Bạn muốn ăn gì?" }],
    idiom: "吃得苦中苦，方為人上人 (Chī de kǔ zhōng kǔ, fāng wéi rén shàng rén) - Có chịu được khổ mới làm được người trên vạn người.", level: "TOCFL A"
  },
  {
    word: "晚飯", pinyin: "wǎnfàn", ipa: "wan²¹⁴ fan⁵¹", hanViet: "Vãn phạn",
    image: "",
    radical: "晚 (Bộ Nhật 日), 飯 (Bộ Thực 飠- liên quan đến thức ăn).",
    explanation: "Danh từ: Bữa tối, cơm tối.",
    compounds: [{ tc: "早飯", py: "zǎofàn", vn: "bữa sáng" }, { tc: "中飯", py: "zhōngfàn", vn: "bữa trưa" }],
    examples: [{ tc: "今天晚上我們去吃晚飯吧。", py: "Jīntiān wǎnshàng wǒmen qù chī wǎnfàn ba.", vn: "Tối nay chúng ta đi ăn tối đi." }],
    idiom: "粗茶淡飯 (Cū chá dàn fàn) - Trà thô cơm nhạt.", level: "TOCFL A"
  },
  {
    word: "菜", pinyin: "cài", ipa: "tsʰaɪ⁵¹", hanViet: "Thái",
    image: "",
    radical: "Bộ Thảo (艹) - Liên quan đến cây cỏ, rau củ.",
    explanation: "Danh từ: Món ăn, rau, thức ăn.",
    compounds: [{ tc: "買菜", py: "mǎicài", vn: "đi chợ/mua thức ăn" }, { tc: "越南菜", py: "Yuènán cài", vn: "món ăn Việt Nam" }],
    examples: [{ tc: "台灣菜很好吃。", py: "Táiwān cài hěn hǎochī.", vn: "Món ăn Đài Loan rất ngon." }],
    idiom: "看菜吃飯 (Kàn cài chī fàn) - Liệu cơm gắp mắm.", level: "TOCFL A"
  },
  {
    word: "越南", pinyin: "Yuènán", ipa: "ɥɛ⁵¹ nan³⁵", hanViet: "Việt Nam",
    image: "",
    radical: "越 (Bộ Tẩu 走 - đi/vượt qua), 南 (Bộ Thập 十).",
    explanation: "Danh từ riêng: Nước Việt Nam.",
    compounds: [{ tc: "越南人", py: "Yuènán rén", vn: "người Việt Nam" }, { tc: "越南語", py: "Yuènán yǔ", vn: "tiếng Việt" }],
    examples: [{ tc: "我有一位越南學生。", py: "Wǒ yǒu yí wèi Yuènán xuéshēng.", vn: "Tôi có một bạn học sinh người Việt Nam." }],
    idiom: "南來北往 (Nán lái běi wǎng) - Kẻ Nam người Bắc (Đi lại tấp nập).", level: "TOCFL A"
  },
  {
    word: "好不好", pinyin: "hǎo bù hǎo", ipa: "xaʊ²¹⁴ pu³⁵ xaʊ²¹⁴", hanViet: "Hảo bất hảo",
    image: "",
    radical: "Cấu trúc ghép từ chữ Hảo (好) và Bất (不).",
    explanation: "Cụm từ: Được không? Thấy sao? (Dùng ở cuối câu để hỏi ý kiến/sự đồng tình).",
    compounds: [{ tc: "對不對", py: "duì bù duì", vn: "đúng không" }, { tc: "是不是", py: "shì bù shì", vn: "phải không" }],
    examples: [{ tc: "我們去打網球，好不好？", py: "Wǒmen qù dǎ wǎngqiú, hǎo bù hǎo?", vn: "Chúng ta đi đánh tennis, được không?" }],
    idiom: "好自為之 (Hǎo zì wéi zhī) - Tự lo liệu lấy.", level: "TOCFL A"
  },
  
  // ==========================================
  // --- TỪ VỰNG BÀI 4 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  // ==========================================
  {
    word: "支", pinyin: "zhī", ipa: "tʂɨ⁵⁵", hanViet: "Chi",
    image: "",
    radical: "Bộ Chi (支) - Cành cây, nhánh.",
    explanation: "Lượng từ: Cây, chiếc (Dùng cho các vật có hình thuôn dài như bút, điện thoại).",
    compounds: [{ tc: "一支手機", py: "yì zhī shǒujī", vn: "một chiếc điện thoại" }],
    examples: [{ tc: "這支手機很貴。", py: "Zhè zhī shǒujī hěn guì.", vn: "Chiếc điện thoại này rất đắt." }],
    idiom: "一木難支 (Yì mù nán zhī) - Một cây làm chẳng nên non.", level: "TOCFL A"
  },
  {
    word: "新", pinyin: "xīn", ipa: "ɕin⁵⁵", hanViet: "Tân",
    image: "",
    radical: "Bộ Cân (斤) - Cái rìu. Dùng rìu đốn củi để làm ra cái mới.",
    explanation: "Tính từ: Mới.",
    compounds: [{ tc: "新年", py: "xīnnián", vn: "năm mới" }, { tc: "新手", py: "xīnshǒu", vn: "người mới" }],
    examples: [{ tc: "我買了一支新手機。", py: "Wǒ mǎi le yì zhī xīn shǒujī.", vn: "Tôi đã mua một chiếc điện thoại mới." }],
    idiom: "新年快樂 (Xīn nián kuàilè) - Chúc mừng năm mới.", level: "TOCFL A"
  },
  {
    word: "手機", pinyin: "shǒujī", ipa: "ʂoʊ²¹⁴ tɕi⁵⁵", hanViet: "Thủ cơ",
    image: "",
    radical: "手 (Bộ Thủ 扌), 機 (Bộ Mộc 木 - cỗ máy). Máy móc cầm trên tay.",
    explanation: "Danh từ: Điện thoại di động.",
    compounds: [{ tc: "買手機", py: "mǎi shǒujī", vn: "mua điện thoại" }],
    examples: [{ tc: "你的手機號碼是多少？", py: "Nǐ de shǒujī hàomǎ shì duōshǎo?", vn: "Số điện thoại của bạn là bao nhiêu?" }],
    idiom: "機不可失 (Jī bù kě shī) - Cơ hội không thể bỏ lỡ.", level: "TOCFL A"
  },
  {
    word: "太", pinyin: "tài", ipa: "tʰaɪ⁵¹", hanViet: "Thái",
    image: "",
    radical: "Bộ Đại (大) - Thêm một dấu chấm để biểu thị mức độ lớn hơn cả 'đại'.",
    explanation: "Phó từ: Quá, lắm (Thường dùng với '...了').",
    compounds: [{ tc: "太好了", py: "tài hǎo le", vn: "tốt quá rồi" }, { tc: "太太", py: "tàitài", vn: "bà xã" }],
    examples: [{ tc: "這杯咖啡太熱了！", py: "Zhè bēi kāfēi tài rè le!", vn: "Ly cà phê này nóng quá!" }],
    idiom: "太平盛世 (Tàipíng shèng shì) - Thời kỳ thái bình thịnh vượng.", level: "TOCFL A"
  },
  {
    word: "舊", pinyin: "jiù", ipa: "tɕjoʊ⁵¹", hanViet: "Cựu",
    image: "",
    radical: "Bộ Cữu (臼) - Cái cối giã gạo (đồ dùng lâu năm).",
    explanation: "Tính từ: Cũ, xưa.",
    compounds: [{ tc: "舊書", py: "jiùshū", vn: "sách cũ" }, { tc: "懷舊", py: "huáijiù", vn: "hoài cổ" }],
    examples: [{ tc: "我的手機太舊了。", py: "Wǒ de shǒujī tài jiù le.", vn: "Điện thoại của tôi cũ quá rồi." }],
    idiom: "喜新厭舊 (Xǐ xīn yàn jiù) - Có mới nới cũ.", level: "TOCFL A"
  },
  {
    word: "了", pinyin: "le", ipa: "lɤ", hanViet: "Liễu",
    image: "",
    radical: "Bộ Quyết (亅) - Nét sổ có móc.",
    explanation: "Trợ từ: Rồi (Biểu thị sự việc đã xảy ra hoặc sự thay đổi).",
    compounds: [{ tc: "太貴了", py: "tài guì le", vn: "đắt quá rồi" }],
    examples: [{ tc: "他去台灣了。", py: "Tā qù Táiwān le.", vn: "Anh ấy đi Đài Loan rồi." }],
    idiom: "不了了之 (Bù liǎo liǎo zhī) - Bỏ lửng, không giải quyết triệt để.", level: "TOCFL A"
  },
  {
    word: "種", pinyin: "zhǒng", ipa: "tʂʊŋ²¹⁴", hanViet: "Chủng",
    image: "",
    radical: "Bộ Hòa (禾) - Cây lúa. Liên quan đến hạt giống, loại cây.",
    explanation: "Lượng từ: Loại, kiểu, thứ.",
    compounds: [{ tc: "這種", py: "zhè zhǒng", vn: "loại này" }, { tc: "各種", py: "gè zhǒng", vn: "các loại" }],
    examples: [{ tc: "我喜歡這種茶。", py: "Wǒ xǐhuān zhè zhǒng chá.", vn: "Tôi thích loại trà này." }],
    idiom: "種瓜得瓜 (Zhòng guā dé guā) - Trồng dưa được dưa (Gieo nhân nào gặt quả nấy).", level: "TOCFL A"
  },
  {
    word: "能", pinyin: "néng", ipa: "nəŋ³⁵", hanViet: "Năng",
    image: "",
    radical: "Bộ Nhục (肉/月) - Thịt, cơ thể. Thể hiện năng lực.",
    explanation: "Động từ năng nguyện: Có thể (Chỉ khả năng hoặc điều kiện cho phép).",
    compounds: [{ tc: "不能", py: "bùnéng", vn: "không thể" }, { tc: "能力", py: "nénglì", vn: "năng lực" }],
    examples: [{ tc: "這支手機上網。", py: "Zhè zhī shǒujī néng shàngwǎng.", vn: "Điện thoại này có thể lên mạng." }],
    idiom: "能者多勞 (Néng zhě duō láo) - Người tài giỏi thì vất vả nhiều.", level: "TOCFL A"
  },
  {
    word: "上網", pinyin: "shàngwǎng", ipa: "ʂaŋ⁵¹ waŋ²¹⁴", hanViet: "Thượng võng",
    image: "",
    radical: "上 (Bộ Nhất 一), 網 (Bộ Võng 罒 - cái lưới/mạng).",
    explanation: "Động từ: Lên mạng, truy cập internet.",
    compounds: [{ tc: "網吧", py: "wǎngbā", vn: "quán nét" }],
    examples: [{ tc: "我常在圖書館上網。", py: "Wǒ cháng zài túshūguǎn shàngwǎng.", vn: "Tôi thường lên mạng ở thư viện." }],
    idiom: "網開一面 (Wǎng kāi yí miàn) - Mở lưới một mặt (Khoan hồng).", level: "TOCFL A"
  },
  {
    word: "那", pinyin: "nà / nèi", ipa: "na⁵¹ / neɪ⁵¹", hanViet: "Na",
    image: "",
    radical: "Bộ Ấp (阝) nằm bên phải.",
    explanation: "Đại từ chỉ thị: Đó, kia (Thường đọc là nèi khi đi kèm lượng từ).",
    compounds: [{ tc: "那裡", py: "nàlǐ", vn: "ở đó" }, { tc: "那個", py: "nège", vn: "cái đó" }],
    examples: [{ tc: "那個人是誰？", py: "Nà gè rén shì shéi?", vn: "Người đó là ai?" }],
    idiom: "這山望著那山高 (Zhè shān wàng zhe nà shān gāo) - Đứng núi này trông núi nọ.", level: "TOCFL A"
  },
  {
    word: "貴", pinyin: "guì", ipa: "kweɪ⁵¹", hanViet: "Quý",
    image: "",
    radical: "Bộ Bối (貝) - Con sò (tiền cổ). Liên quan đến giá trị, tiền bạc.",
    explanation: "Tính từ: Đắt, đắt đỏ.",
    compounds: [{ tc: "太貴", py: "tài guì", vn: "quá đắt" }, { tc: "貴姓", py: "guìxìng", vn: "quý danh" }],
    examples: [{ tc: "這個包子太貴了！", py: "Zhège bāozi tài guì le!", vn: "Cái bánh bao này đắt quá!" }],
    idiom: "貴人多忘事 (Guì rén duō wàng shì) - Quý nhân hay quên.", level: "TOCFL A"
  },
  {
    word: "賣", pinyin: "mài", ipa: "maɪ⁵¹", hanViet: "Mại",
    image: "",
    radical: "Bộ Bối (貝) - Tiền bạc. Có chữ Thập (十) ở trên.",
    explanation: "Động từ: Bán.",
    compounds: [{ tc: "買賣", py: "mǎimài", vn: "mua bán" }],
    examples: [{ tc: "這家店賣很好喝的茶。", py: "Zhè jiā diàn mài hěn hǎohē de chá.", vn: "Cửa hàng này bán trà rất ngon." }],
    idiom: "賣國求榮 (Mài guó qiú róng) - Bán nước cầu vinh.", level: "TOCFL A"
  },
  {
    word: "便宜", pinyin: "piányí", ipa: "pʰjɛn³⁵ i³⁵", hanViet: "Tiện nghi",
    image: "",
    radical: "便 (Bộ Nhân 亻), 宜 (Bộ Miên 宀).",
    explanation: "Tính từ: Rẻ.",
    compounds: [{ tc: "很便宜", py: "hěn piányí", vn: "rất rẻ" }],
    examples: [{ tc: "這支手機不貴，很便宜。", py: "Zhè zhī shǒujī bú guì, hěn piányí.", vn: "Điện thoại này không đắt, rất rẻ." }],
    idiom: "占便宜 (Zhàn piányí) - Chiếm tiện nghi (Lợi dụng).", level: "TOCFL A"
  },
  {
    word: "要", pinyin: "yào", ipa: "jaʊ⁵¹", hanViet: "Yếu",
    image: "",
    radical: "Bộ Á (襾 / 覀) kết hợp với bộ Nữ (女).",
    explanation: "Động từ: Tốn, cần (Dùng để chỉ giá cả hoặc thời gian).",
    compounds: [{ tc: "多少錢", py: "duōshǎo qián", vn: "bao nhiêu tiền" }],
    examples: [{ tc: "這支手機要一萬塊。", py: "Zhè zhī shǒujī yào yí wàn kuài.", vn: "Điện thoại này giá mười nghìn tệ." }],
    idiom: "要言不煩 (Yào yán bù fán) - Nói ngắn gọn, không rườm rà.", level: "TOCFL A"
  },
  {
    word: "萬", pinyin: "wàn", ipa: "wan⁵¹", hanViet: "Vạn",
    image: "",
    radical: "Bộ Thảo (艹) hoặc Nhất (一). Chữ Phồn thể 萬 có bộ Nhu (禸).",
    explanation: "Số từ: Mười nghìn (10.000). Điểm khác biệt lớn của đếm số tiếng Trung.",
    compounds: [{ tc: "十萬", py: "shí wàn", vn: "một trăm nghìn" }],
    examples: [{ tc: "這個要兩萬塊。", py: "Zhège yào liǎng wàn kuài.", vn: "Cái này giá hai vạn (20.000) tệ." }],
    idiom: "萬事如意 (Wàn shì rú yì) - Vạn sự như ý.", level: "TOCFL A"
  },
  {
    word: "千", pinyin: "qiān", ipa: "tɕʰjɛn⁵⁵", hanViet: "Thiên",
    image: "",
    radical: "Bộ Thập (十).",
    explanation: "Số từ: Nghìn (1.000).",
    compounds: [{ tc: "幾千", py: "jǐ qiān", vn: "vài nghìn" }],
    examples: [{ tc: "這本書五千塊。", py: "Zhè běn shū wǔ qiān kuài.", vn: "Cuốn sách này 5.000 tệ." }],
    idiom: "千變萬化 (Qiān biàn wàn huà) - Thiên biến vạn hóa.", level: "TOCFL A"
  },
  {
    word: "為什麼", pinyin: "wèishénme", ipa: "weɪ⁵¹ ʂən³⁵ mɤ", hanViet: "Vị thập ma",
    image: "",
    radical: "為 (Bộ Hỏa 灬), 什 (Bộ Nhân 亻), 麼 (Bộ Ma 麻).",
    explanation: "Đại từ nghi vấn: Tại sao.",
    compounds: [{ tc: "因為", py: "yīnwèi", vn: "bởi vì" }],
    examples: [{ tc: "你為什麼不吃晚飯？", py: "Nǐ wèishénme bù chī wǎnfàn?", vn: "Tại sao bạn không ăn tối?" }],
    idiom: "為人師表 (Wéi rén shī biǎo) - Làm gương cho người (Vai trò người thầy).", level: "TOCFL A"
  },
  {
    word: "一共", pinyin: "yígòng", ipa: "i³⁵ kʊŋ⁵¹", hanViet: "Nhất cộng",
    image: "",
    radical: "一 (Bộ Nhất 一), 共 (Bộ Bát 八).",
    explanation: "Phó từ: Tổng cộng.",
    compounds: [{ tc: "共同", py: "gòngtóng", vn: "cùng nhau" }],
    examples: [{ tc: "這些書一共多少錢？", py: "Zhèxiē shū yígòng duōshǎo qián?", vn: "Những cuốn sách này tổng cộng bao nhiêu tiền?" }],
    idiom: "和衷共濟 (Hé zhōng gòng jì) - Đồng tâm hiệp lực.", level: "TOCFL A"
  },
  {
    word: "多少", pinyin: "duōshǎo", ipa: "twɔ⁵⁵ ʂaʊ²¹⁴", hanViet: "Đa thiểu",
    image: "",
    radical: "多 (Bộ Tịch 夕), 少 (Bộ Tiểu 小).",
    explanation: "Đại từ nghi vấn: Bao nhiêu (Dùng cho số lượng lớn hơn 10).",
    compounds: [{ tc: "多少錢", py: "duōshǎo qián", vn: "bao nhiêu tiền" }],
    examples: [{ tc: "請問，這個多少錢？", py: "Qǐngwèn, zhège duōshǎo qián?", vn: "Xin hỏi, cái này bao nhiêu tiền?" }],
    idiom: "積少成多 (Jī shǎo chéng duō) - Tích tiểu thành đại.", level: "TOCFL A"
  },
  {
    word: "錢", pinyin: "qián", ipa: "tɕʰjɛn³⁵", hanViet: "Tiền",
    image: "",
    radical: "Bộ Kim (金) - Liên quan đến kim loại, vàng bạc, tiền tệ.",
    explanation: "Danh từ: Tiền.",
    compounds: [{ tc: "賺錢", py: "zhuànqián", vn: "kiếm tiền" }, { tc: "花錢", py: "huāqián", vn: "tiêu tiền" }],
    examples: [{ tc: "我沒有很多錢。", py: "Wǒ méiyǒu hěnduō qián.", vn: "Tôi không có nhiều tiền." }],
    idiom: "見錢眼開 (Jiàn qián yǎn kāi) - Thấy tiền sáng mắt.", level: "TOCFL A"
  },
  {
    word: "老闆", pinyin: "lǎobǎn", ipa: "laʊ²¹⁴ pan²¹⁴", hanViet: "Lão bản",
    image: "",
    radical: "老 (Bộ Lão 老), 闆 (Bộ Mộc 木 - tấm ván/cửa hàng).",
    explanation: "Danh từ: Ông chủ, người bán hàng.",
    compounds: [{ tc: "老闆娘", py: "lǎobǎnniáng", vn: "bà chủ" }],
    examples: [{ tc: "老闆，我要買茶。", py: "Lǎobǎn, wǒ yào mǎi chá.", vn: "Ông chủ, tôi muốn mua trà." }],
    idiom: "無 (Thường dùng trong giao tiếp hàng ngày).", level: "TOCFL A"
  },
  {
    word: "買", pinyin: "mǎi", ipa: "maɪ²¹⁴", hanViet: "Mãi",
    image: "",
    radical: "Bộ Bối (貝) - Con sò/tiền cổ. Ở trên có bộ Võng (罒).",
    explanation: "Động từ: Mua.",
    compounds: [{ tc: "買東西", py: "mǎi dōngxī", vn: "mua đồ" }, { tc: "買賣", py: "mǎimài", vn: "mua bán" }],
    examples: [{ tc: "你要買什麼？", py: "Nǐ yào mǎi shénme?", vn: "Bạn muốn mua gì?" }],
    idiom: "招兵買馬 (Zhāo bīng mǎi mǎ) - Chiêu binh mãi mã.", level: "TOCFL A"
  },
  {
    word: "杯", pinyin: "bēi", ipa: "peɪ⁵⁵", hanViet: "Bôi",
    image: "",
    radical: "Bộ Mộc (木) - Cây gỗ. Phải là chữ Bất (不) chỉ âm. Cốc ngày xưa làm bằng gỗ.",
    explanation: "Lượng từ: Ly, cốc, tách.",
    compounds: [{ tc: "一杯茶", py: "yì bēi chá", vn: "một ly trà" }, { tc: "杯子", py: "bēizi", vn: "cái cốc" }],
    examples: [{ tc: "我要買兩杯咖啡。", py: "Wǒ yào mǎi liǎng bēi kāfēi.", vn: "Tôi muốn mua hai ly cà phê." }],
    idiom: "杯弓蛇影 (Bēi gōng shé yǐng) - Thần hồn nát thần tính.", level: "TOCFL A"
  },
  {
    word: "熱", pinyin: "rè", ipa: "ʐɤ⁵¹", hanViet: "Nhiệt",
    image: "",
    radical: "Bộ Hỏa (灬) - Bốn dấu chấm hỏa ở dưới cùng, chỉ sức nóng.",
    explanation: "Tính từ: Nóng.",
    compounds: [{ tc: "熱水", py: "rè shuǐ", vn: "nước nóng" }, { tc: "很熱", py: "hěn rè", vn: "rất nóng" }],
    examples: [{ tc: "台灣的夏天很熱。", py: "Táiwān de xiàtiān hěn rè.", vn: "Mùa hè ở Đài Loan rất nóng." }],
    idiom: "熱火朝天 (Rè huǒ cháo tiān) - Khí thế hừng hực.", level: "TOCFL A"
  },
  {
    word: "包子", pinyin: "bāozi", ipa: "paʊ⁵⁵ tsɨ", hanViet: "Bao tử",
    image: "",
    radical: "包 (Bộ Bao 勹 - bọc lại), 子 (Bộ Tử 子).",
    explanation: "Danh từ: Bánh bao.",
    compounds: [{ tc: "肉包", py: "ròubāo", vn: "bánh bao thịt" }, { tc: "小籠包", py: "xiǎolóngbāo", vn: "tiểu long bao" }],
    examples: [{ tc: "老闆，我要三個包子。", py: "Lǎobǎn, wǒ yào sān gè bāozi.", vn: "Ông chủ, tôi muốn ba cái bánh bao." }],
    idiom: "土包子 (Tǔ bāozi) - Đồ nhà quê (Tiếng lóng).", level: "TOCFL A"
  },
  {
    word: "大", pinyin: "dà", ipa: "ta⁵¹", hanViet: "Đại",
    image: "",
    radical: "Bộ Đại (大) - Hình dáng người dang rộng hai tay hai chân.",
    explanation: "Tính từ: Lớn, to.",
    compounds: [{ tc: "大家", py: "dàjiā", vn: "mọi người" }, { tc: "大杯", py: "dàbēi", vn: "ly lớn" }],
    examples: [{ tc: "我要大杯的烏龍茶。", py: "Wǒ yào dàbēi de wūlóngchá.", vn: "Tôi muốn ly trà Ô long lớn." }],
    idiom: "大驚小怪 (Dà jīng xiǎo guài) - Chuyện bé xé ra to.", level: "TOCFL A"
  },
  {
    word: "中", pinyin: "zhōng", ipa: "tʂʊŋ⁵⁵", hanViet: "Trung",
    image: "",
    radical: "Bộ Cổn (丨) xuyên qua hình vuông, biểu thị ở giữa.",
    explanation: "Tính từ: Vừa, trung bình.",
    compounds: [{ tc: "中杯", py: "zhōngbēi", vn: "ly vừa" }, { tc: "中文", py: "Zhōngwén", vn: "tiếng Trung" }],
    examples: [{ tc: "請給我中杯的咖啡。", py: "Qǐng gěi wǒ zhōngbēi de kāfēi.", vn: "Cho tôi ly cà phê cỡ vừa." }],
    idiom: "中規中矩 (Zhōng guī zhōng jǔ) - Chuẩn mực, quy củ.", level: "TOCFL A"
  },
  {
    word: "小", pinyin: "xiǎo", ipa: "ɕjaʊ²¹⁴", hanViet: "Tiểu",
    image: "",
    radical: "Bộ Tiểu (小) - Hình ảnh hạt cát chia nhỏ ra.",
    explanation: "Tính từ: Nhỏ, bé.",
    compounds: [{ tc: "小杯", py: "xiǎobēi", vn: "ly nhỏ" }, { tc: "小姐", py: "xiǎojiě", vn: "cô gái" }],
    examples: [{ tc: "這個包子太小了。", py: "Zhège bāozi tài xiǎo le.", vn: "Cái bánh bao này nhỏ quá." }],
    idiom: "小鳥依人 (Xiǎo niǎo yī rén) - Chim nhỏ dựa người (Dáng vẻ yếu điệu).", level: "TOCFL A"
  },
  {
    word: "幫", pinyin: "bāng", ipa: "paŋ⁵⁵", hanViet: "Bang",
    image: "",
    radical: "Bộ Cân (巾) - Khăn vải. Xưa kia giúp nhau hay buộc khăn làm dấu.",
    explanation: "Giới từ / Động từ: Giúp, làm hộ (Ai đó làm gì).",
    compounds: [{ tc: "幫忙", py: "bāngmáng", vn: "giúp đỡ" }],
    examples: [{ tc: "請幫我買一杯茶。", py: "Qǐng bāng wǒ mǎi yì bēi chá.", vn: "Xin hãy mua giúp tôi một ly trà." }],
    idiom: "拔刀相助 (Bá dāo xiāng zhù) - Rút đao tương trợ.", level: "TOCFL A"
  },
  {
    word: "微波", pinyin: "wéibō", ipa: "weɪ³⁵ pwɔ⁵⁵", hanViet: "Vi ba",
    image: "",
    radical: "微 (Bộ Xích 彳), 波 (Bộ Thủy 氵).",
    explanation: "Động từ: Quay lò vi sóng, hâm nóng.",
    compounds: [{ tc: "微波爐", py: "wéibōlú", vn: "lò vi sóng" }],
    examples: [{ tc: "老闆，請幫我微波。", py: "Lǎobǎn, qǐng bāng wǒ wéibō.", vn: "Ông chủ, xin hâm nóng giúp tôi." }],
    idiom: "微乎其微 (Wéi hū qí wéi) - Cực kỳ nhỏ bé.", level: "TOCFL A"
  },
  {
    word: "百", pinyin: "bǎi", ipa: "paɪ²¹⁴", hanViet: "Bách",
    image: "",
    radical: "Bộ Bạch (白) - Thêm một nét ngang (一) ở trên, chỉ số 100.",
    explanation: "Số từ: Trăm (100).",
    compounds: [{ tc: "兩百", py: "liǎng bǎi", vn: "hai trăm" }],
    examples: [{ tc: "這個包包五百塊。", py: "Zhège bāobāo wǔbǎi kuài.", vn: "Cái túi này 500 tệ." }],
    idiom: "百發百中 (Bǎi fā bǎi zhòng) - Bách phát bách trúng.", level: "TOCFL A"
  },
  {
    word: "塊", pinyin: "kuài", ipa: "kʰwaɪ⁵¹", hanViet: "Khối",
    image: "",
    radical: "Bộ Thổ (土) - Cục đất. Đơn vị tiền tệ phổ thông trong khẩu ngữ.",
    explanation: "Lượng từ: Đồng, tệ (đơn vị tiền).",
    compounds: [{ tc: "一塊錢", py: "yí kuài qián", vn: "một đồng" }],
    examples: [{ tc: "一杯咖啡多少塊？", py: "Yì bēi kāfēi duōshǎo kuài?", vn: "Một ly cà phê bao nhiêu tệ?" }],
    idiom: "大塊朵頤 (Dà kuài duǒ yí) - Ăn to nhai lớn (Ăn uống thỏa thích).", level: "TOCFL A"
  },
  {
    word: "好的", pinyin: "hǎode", ipa: "xaʊ²¹⁴ tɤ", hanViet: "Hảo đích",
    image: "",
    radical: "Hảo (Bộ Nữ 女), Đích (Bộ Bạch 白).",
    explanation: "Cụm từ: Được, OK, vâng (Đồng ý với yêu cầu).",
    compounds: [{ tc: "很好", py: "hěnhǎo", vn: "rất tốt" }],
    examples: [{ tc: "A: 請幫我微波。 B: 好的。", py: "A: Qǐng bāng wǒ wéibō. B: Hǎode.", vn: "A: Xin hâm nóng giúp tôi. B: Vâng ạ." }],
    idiom: "好自為之 (Hǎo zì wéi zhī) - Tự lo liệu lấy.", level: "TOCFL A"
  },
  {
    word: "外帶", pinyin: "wàidài", ipa: "waɪ⁵¹ taɪ⁵¹", hanViet: "Ngoại đới",
    image: "",
    radical: "外 (Bộ Tịch 夕 - bên ngoài), 帶 (Bộ Cân 巾).",
    explanation: "Cụm từ: Mang đi (Take out / To go) - Cực kỳ phổ biến khi mua đồ ăn ở Đài Loan.",
    compounds: [{ tc: "帶走", py: "dàizǒu", vn: "mang đi" }],
    examples: [{ tc: "老闆，我要外帶。", py: "Lǎobǎn, wǒ yào wàidài.", vn: "Ông chủ, tôi muốn mua mang đi." }],
    idiom: "世外桃源 (Shì wài táo yuán) - Chốn bồng lai tiên cảnh.", level: "TOCFL A"
  },
  {
    word: "內用", pinyin: "nèiyòng", ipa: "neɪ⁵¹ jʊŋ⁵¹", hanViet: "Nội dụng",
    image: "",
    radical: "內 (Bộ Nhập 入 / Quynh 冂 - bên trong), 用 (Bộ Dụng 用 - dùng).",
    explanation: "Cụm từ: Dùng tại quán (For here).",
    compounds: [{ tc: "裡面", py: "lǐmiàn", vn: "bên trong" }],
    examples: [{ tc: "請問，內用還是外帶？", py: "Qǐngwèn, nèiyòng háishì wàidài?", vn: "Xin hỏi, dùng tại quán hay mang đi?" }],
    idiom: "內外兼修 (Nèi wài jiān xiū) - Trong ngoài đều tốt.", level: "TOCFL A"
  },
  // ==========================================
  // --- TỪ VỰNG BÀI 5 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  // ==========================================
  {
    word: "牛肉", pinyin: "niúròu", ipa: "njoʊ³⁵ ʐoʊ⁵¹", hanViet: "Ngưu nhục",
    image: "",
    radical: "牛 (Bộ Ngưu 牛 - con bò), 肉 (Bộ Nhục 肉 - thịt).",
    explanation: "Danh từ: Thịt bò.",
    compounds: [{ tc: "牛肉麵", py: "niúròumiàn", vn: "mì bò" }],
    examples: [{ tc: "我不吃牛肉。", py: "Wǒ bù chī niúròu.", vn: "Tôi không ăn thịt bò." }],
    idiom: "殺雞焉用牛刀 (Shā jī yān yòng niú dāo) - Giết gà sao phải dùng dao mổ trâu.", level: "TOCFL A"
  },
  {
    word: "麵", pinyin: "miàn", ipa: "mjɛn⁵¹", hanViet: "Miến",
    image: "",
    radical: "Bộ Mạch (麥) - Lúa mạch. Bên phải là chữ Diện (面) chỉ âm.",
    explanation: "Danh từ: Mì, sợi mì.",
    compounds: [{ tc: "麵包", py: "miànbāo", vn: "bánh mì" }, { tc: "吃麵", py: "chī miàn", vn: "ăn mì" }],
    examples: [{ tc: "台灣的牛肉麵很好吃。", py: "Táiwān de niúròumiàn hěn hǎochī.", vn: "Mì bò Đài Loan rất ngon." }],
    idiom: "一面之緣 (Yí miàn zhī yuán) - Duyên gặp gỡ một lần.", level: "TOCFL A"
  },
  {
    word: "真", pinyin: "zhēn", ipa: "tʂən⁵⁵", hanViet: "Chân",
    image: "",
    radical: "Bộ Mục (目) - Con mắt. Nhìn bằng mắt để thấy sự thật.",
    explanation: "Phó từ: Thật, thật sự (Dùng để cảm thán).",
    compounds: [{ tc: "真的", py: "zhēnde", vn: "thật sự" }],
    examples: [{ tc: "這個包子真好吃！", py: "Zhège bāozi zhēn hǎochī!", vn: "Cái bánh bao này ngon thật!" }],
    idiom: "千真萬確 (Qiān zhēn wàn què) - Vô cùng chân thực (Đúng 100%).", level: "TOCFL A"
  },
  {
    word: "好吃", pinyin: "hǎochī", ipa: "xaʊ²¹⁴ tʂʰɨ⁵⁵", hanViet: "Hảo ngật",
    image: "",
    radical: "好 (Bộ Nữ 女), 吃 (Bộ Khẩu 口).",
    explanation: "Tính từ: Ngon (Dùng cho đồ ăn).",
    compounds: [{ tc: "不好吃", py: "bù hǎochī", vn: "không ngon" }],
    examples: [{ tc: "台灣小吃很好吃。", py: "Táiwān xiǎochī hěn hǎochī.", vn: "Đồ ăn vặt Đài Loan rất ngon." }],
    idiom: "山珍海味 (Shān zhēn hǎi wèi) - Sơn hào hải vị.", level: "TOCFL A"
  },
  {
    word: "說", pinyin: "shuō", ipa: "ʂwɔ⁵⁵", hanViet: "Thuyết",
    image: "",
    radical: "Bộ Ngôn (言) - Liên quan đến lời nói.",
    explanation: "Động từ: Nói.",
    compounds: [{ tc: "說話", py: "shuōhuà", vn: "nói chuyện" }, { tc: "聽說", py: "tīngshuō", vn: "nghe nói" }],
    examples: [{ tc: "請你說中文。", py: "Qǐng nǐ shuō Zhōngwén.", vn: "Xin bạn hãy nói tiếng Trung." }],
    idiom: "說到做到 (Shuō dào zuò dào) - Nói được làm được.", level: "TOCFL A"
  },
  {
    word: "少", pinyin: "shǎo", ipa: "ʂaʊ²¹⁴", hanViet: "Thiểu",
    image: "",
    radical: "Bộ Tiểu (小) - Nhỏ bé, thêm một nét phẩy ở dưới để nhấn mạnh sự ít ỏi.",
    explanation: "Tính từ: Ít.",
    compounds: [{ tc: "多少", py: "duōshǎo", vn: "bao nhiêu" }, { tc: "很少", py: "hěn shǎo", vn: "rất ít" }],
    examples: [{ tc: "今天來上課的人很少。", py: "Jīntiān lái shàngkè de rén hěn shǎo.", vn: "Hôm nay người đến lớp rất ít." }],
    idiom: "積少成多 (Jī shǎo chéng duō) - Tích tiểu thành đại.", level: "TOCFL A"
  },
  {
    word: "有名", pinyin: "yǒumíng", ipa: "joʊ²¹⁴ miŋ³⁵", hanViet: "Hữu danh",
    image: "",
    radical: "有 (Bộ Nguyệt 月), 名 (Bộ Khẩu 口).",
    explanation: "Tính từ: Nổi tiếng.",
    compounds: [{ tc: "名氣", py: "míngqì", vn: "danh tiếng" }],
    examples: [{ tc: "這家餐廳很有名。", py: "Zhè jiā cāntīng hěn yǒumíng.", vn: "Nhà hàng này rất nổi tiếng." }],
    idiom: "名不虛傳 (Míng bù xū chuán) - Danh bất hư truyền.", level: "TOCFL A"
  },
  {
    word: "小吃", pinyin: "xiǎochī", ipa: "ɕjaʊ²¹⁴ tʂʰɨ⁵⁵", hanViet: "Tiểu ngật",
    image: "",
    radical: "小 (Bộ Tiểu 小), 吃 (Bộ Khẩu 口).",
    explanation: "Danh từ: Đồ ăn vặt, món ăn đường phố (Đặc sản văn hóa Đài Loan).",
    compounds: [{ tc: "小吃店", py: "xiǎochīdiàn", vn: "quán ăn vặt" }],
    examples: [{ tc: "我想去夜市吃小吃。", py: "Wǒ xiǎng qù yèshì chī xiǎochī.", vn: "Tôi muốn đi chợ đêm ăn đồ ăn vặt." }],
    idiom: "風味小吃 (Fēng wèi xiǎo chī) - Món ăn vặt mang hương vị địa phương.", level: "TOCFL A"
  },
  {
    word: "最", pinyin: "zuì", ipa: "tsweɪ⁵¹", hanViet: "Tối",
    image: "",
    radical: "Bộ Viết (曰) nằm ở trên cùng.",
    explanation: "Phó từ: Nhất (Biểu thị mức độ cao nhất).",
    compounds: [{ tc: "最好", py: "zuì hǎo", vn: "tốt nhất" }, { tc: "最後", py: "zuìhòu", vn: "cuối cùng" }],
    examples: [{ tc: "我最喜歡喝烏龍茶。", py: "Wǒ zuì xǐhuān hē wūlóngchá.", vn: "Tôi thích uống trà Ô long nhất." }],
    idiom: "最後決戰 (Zuì hòu jué zhàn) - Trận quyết chiến cuối cùng.", level: "TOCFL A"
  },
  {
    word: "湯", pinyin: "tāng", ipa: "tʰaŋ⁵⁵", hanViet: "Thang",
    image: "",
    radical: "Bộ Thủy (氵) - Liên quan đến nước, chất lỏng.",
    explanation: "Danh từ: Canh, súp.",
    compounds: [{ tc: "喝湯", py: "hē tāng", vn: "húp canh" }, { tc: "牛肉湯", py: "niúròutāng", vn: "canh thịt bò" }],
    examples: [{ tc: "這碗湯真好喝。", py: "Zhè wǎn tāng zhēn hǎohē.", vn: "Bát canh này uống ngon thật." }],
    idiom: "赴湯蹈火 (Fù tāng dǎo huǒ) - Vào sinh ra tử (Nhảy vào nước sôi lửa bỏng).", level: "TOCFL A"
  },
  {
    word: "這麼", pinyin: "zhème", ipa: "tʂɤ⁵¹ mɤ", hanViet: "Giá ma",
    image: "",
    radical: "這 (Bộ Sước 辶), 麼 (Bộ Ma 麻).",
    explanation: "Phó từ: Như thế này, đến mức này (Nhấn mạnh mức độ).",
    compounds: [{ tc: "那麼", py: "nàme", vn: "như thế kia" }],
    examples: [{ tc: "你為什麼這麼晚來？", py: "Nǐ wèishénme zhème wǎn lái?", vn: "Sao bạn lại đến muộn như thế này?" }],
    idiom: "這麼說來 (Zhème shuō lái) - Nói như vậy thì...", level: "TOCFL A"
  },
  {
    word: "知道", pinyin: "zhīdào", ipa: "tʂɨ⁵⁵ taʊ⁵¹", hanViet: "Tri đạo",
    image: "",
    radical: "知 (Bộ Thỉ 矢), 道 (Bộ Sước 辶).",
    explanation: "Động từ: Biết (Nắm được thông tin, sự việc).",
    compounds: [{ tc: "不知道", py: "bù zhīdào", vn: "không biết" }],
    examples: [{ tc: "你知道這家餐廳在哪裡嗎？", py: "Nǐ zhīdào zhè jiā cāntīng zài nǎlǐ ma?", vn: "Bạn có biết nhà hàng này ở đâu không?" }],
    idiom: "知己知彼 (Zhī jǐ zhī bǐ) - Biết người biết ta.", level: "TOCFL A"
  },
  {
    word: "家", pinyin: "jiā", ipa: "tɕja⁵⁵", hanViet: "Gia",
    image: "",
    radical: "Bộ Miên (宀) - Mái nhà.",
    explanation: "Lượng từ: Dùng cho các cơ sở kinh doanh như nhà hàng, cửa tiệm, công ty.",
    compounds: [{ tc: "一家店", py: "yì jiā diàn", vn: "một cửa hàng" }],
    examples: [{ tc: "這家餐廳的菜很好吃。", py: "Zhè jiā cāntīng de cài hěn hǎochī.", vn: "Đồ ăn của nhà hàng này rất ngon." }],
    idiom: "家喻戶曉 (Jiā yù hù xiǎo) - Nhà nhà đều biết.", level: "TOCFL A"
  },
  {
    word: "店", pinyin: "diàn", ipa: "tjɛn⁵¹", hanViet: "Điếm",
    image: "",
    radical: "Bộ Nghiễm (广) - Mái nhà rộng. Mở tiệm buôn bán dưới mái hiên.",
    explanation: "Danh từ: Cửa hàng, tiệm.",
    compounds: [{ tc: "書店", py: "shūdiàn", vn: "nhà sách" }, { tc: "飯店", py: "fàndiàn", vn: "quán ăn / khách sạn" }],
    examples: [{ tc: "我們去那家店買杯子。", py: "Wǒmen qù nà jiā diàn mǎi bēizi.", vn: "Chúng ta đến cửa hàng kia mua cái cốc đi." }],
    idiom: "百年老店 (Bǎi nián lǎo diàn) - Cửa hiệu lâu đời.", level: "TOCFL A"
  },
  {
    word: "一定", pinyin: "yídìng", ipa: "i³⁵ tiŋ⁵¹", hanViet: "Nhất định",
    image: "",
    radical: "一 (Bộ Nhất 一), 定 (Bộ Miên 宀).",
    explanation: "Phó từ: Nhất định, chắc chắn.",
    compounds: [{ tc: "不一定", py: "bù yídìng", vn: "chưa chắc" }],
    examples: [{ tc: "你明天一定要來。", py: "Nǐ míngtiān yídìng yào lái.", vn: "Ngày mai bạn nhất định phải đến đấy." }],
    idiom: "一言為定 (Yì yán wéi dìng) - Một lời đã định.", level: "TOCFL A"
  },
  {
    word: "點", pinyin: "diǎn", ipa: "tjɛn²¹⁴", hanViet: "Điểm",
    image: "",
    radical: "Bộ Hắc (黑) - Dưới cùng là bốn dấu chấm Hỏa (灬).",
    explanation: "Động từ: Gọi món (trong nhà hàng).",
    compounds: [{ tc: "點菜", py: "diǎncài", vn: "gọi món" }, { tc: "點心", py: "diǎn xīn", vn: "điểm tâm" }],
    examples: [{ tc: "你想點什麼菜？", py: "Nǐ xiǎng diǎn shénme cài?", vn: "Bạn muốn gọi món gì?" }],
    idiom: "畫龍點睛 (Huà lóng diǎn jīng) - Vẽ rồng điểm mắt (Làm nổi bật điểm quan trọng).", level: "TOCFL A"
  },
  {
    word: "碗", pinyin: "wǎn", ipa: "wan²¹⁴", hanViet: "Oản",
    image: "",
    radical: "Bộ Thạch (石) - Cục đá. Ngày xưa bát đũa thường làm bằng đá/đất nung.",
    explanation: "Lượng từ / Danh từ: Bát, chén.",
    compounds: [{ tc: "一碗湯", py: "yì wǎn tāng", vn: "một bát canh" }],
    examples: [{ tc: "請給我一碗牛肉麵。", py: "Qǐng gěi wǒ yì wǎn niúròumiàn.", vn: "Cho tôi một bát mì bò." }],
    idiom: "捧鐵碗 (Pěng tiě wǎn) - Bưng bát sắt (Công việc ổn định).", level: "TOCFL A"
  },
  {
    word: "是啊", pinyin: "shì a", ipa: "ʂɨ⁵¹ a", hanViet: "Thị a",
    image: "",
    radical: "是 (Bộ Nhật 日), 啊 (Bộ Khẩu 口).",
    explanation: "Cụm từ: Đúng vậy, phải đấy (Biểu thị sự đồng tình mạnh mẽ).",
    compounds: [{ tc: "對啊", py: "duì a", vn: "đúng thế" }],
    examples: [{ tc: "A: 台灣小吃真好吃。 B: 是啊！", py: "A: Táiwān xiǎochī zhēn hǎochī. B: Shì a!", vn: "A: Đồ ăn vặt Đài Loan ngon thật. B: Đúng vậy!" }],
    idiom: "實事求是 (Shí shì qiú shì) - Thực sự cầu thị.", level: "TOCFL A"
  },
  {
    word: "小籠包", pinyin: "xiǎolóngbāo", ipa: "ɕjaʊ²¹⁴ lʊŋ³⁵ paʊ⁵⁵", hanViet: "Tiểu long bao",
    image: "",
    radical: "籠 (Bộ Trúc 竹 - lồng tre để hấp bánh).",
    explanation: "Danh từ: Tiểu long bao (Bánh bao nhỏ có nước súp bên trong - Món ăn trứ danh).",
    compounds: [{ tc: "包子", py: "bāozi", vn: "bánh bao" }],
    examples: [{ tc: "這家店的小籠包很有名。", py: "Zhè jiā diàn de xiǎolóngbāo hěn yǒumíng.", vn: "Tiểu long bao của quán này rất nổi tiếng." }],
    idiom: "籠中之鳥 (Lóng zhōng zhī niǎo) - Chim trong lồng.", level: "TOCFL A"
  },
  {
    word: "臭豆腐", pinyin: "chòu dòufǔ", ipa: "tʂʰoʊ⁵¹ toʊ⁵¹ fu", hanViet: "Xú đậu hủ",
    image: "",
    radical: "臭 (Bộ Tự 自).",
    explanation: "Danh từ: Đậu phụ thối (Món ăn đường phố đặc trưng của Đài Loan).",
    compounds: [{ tc: "豆腐", py: "dòufǔ", vn: "đậu phụ" }],
    examples: [{ tc: "很多越南學生怕吃臭豆腐。", py: "Hěnduō Yuènán xuéshēng pà chī chòu dòufǔ.", vn: "Nhiều học sinh Việt Nam sợ ăn đậu phụ thối." }],
    idiom: "遺臭萬年 (Yí chòu wàn nián) - Lưu xú muôn đời.", level: "TOCFL A"
  },
  {
    word: "太好了", pinyin: "tài hǎo le", ipa: "tʰaɪ⁵¹ xaʊ²¹⁴ lɤ", hanViet: "Thái hảo liễu",
    image: "",
    radical: "Cấu trúc cảm thán với chữ 太 (Bộ Đại 大).",
    explanation: "Cụm từ: Tốt quá rồi, tuyệt vời (Biểu thị sự vui mừng).",
    compounds: [{ tc: "太貴了", py: "tài guì le", vn: "đắt quá" }],
    examples: [{ tc: "明天放假，太好了！", py: "Míngtiān fàngjià, tài hǎo le!", vn: "Ngày mai được nghỉ, tuyệt quá rồi!" }],
    idiom: "天下太平 (Tiān xià tài píng) - Thiên hạ thái bình.", level: "TOCFL A"
  },
  {
    word: "昨天", pinyin: "zuótiān", ipa: "tswɔ³⁵ tʰjɛn⁵⁵", hanViet: "Tạc thiên",
    image: "",
    radical: "昨 (Bộ Nhật 日 - mặt trời/ngày tháng).",
    explanation: "Danh từ: Hôm qua.",
    compounds: [{ tc: "今天", py: "jīntiān", vn: "hôm nay" }, { tc: "明天", py: "míngtiān", vn: "ngày mai" }],
    examples: [{ tc: "昨天我去吃小籠包了。", py: "Zuótiān wǒ qù chī xiǎolóngbāo le.", vn: "Hôm qua tôi đi ăn tiểu long bao rồi." }],
    idiom: "昨日黃花 (Zuó rì huáng huā) - Hoa vàng ngày hôm qua (Sự việc đã qua).", level: "TOCFL A"
  },
  {
    word: "餐廳", pinyin: "cāntīng", ipa: "tsʰan⁵⁵ tʰiŋ⁵⁵", hanViet: "Xan sảnh",
    image: "",
    radical: "餐 (Bộ Thực 食 - ăn uống), 廳 (Bộ Nghiễm 广 - mái nhà rộng).",
    explanation: "Danh từ: Nhà hàng.",
    compounds: [{ tc: "去餐廳", py: "qù cāntīng", vn: "đi nhà hàng" }],
    examples: [{ tc: "我們週末去這家餐廳吃飯吧。", py: "Zhōumò wǒmen qù zhè jiā cāntīng chīfàn ba.", vn: "Cuối tuần chúng ta đến nhà hàng này ăn cơm nhé." }],
    idiom: "秀色可餐 (Xiù sè kě cān) - Đẹp đến mức như có thể ăn được.", level: "TOCFL A"
  },
  {
    word: "可是", pinyin: "kěshì", ipa: "kʰɤ²¹⁴ ʂɨ⁵¹", hanViet: "Khả thị",
    image: "",
    radical: "可 (Bộ Khẩu 口).",
    explanation: "Liên từ: Nhưng, thế nhưng.",
    compounds: [{ tc: "但是", py: "dànshì", vn: "nhưng mà" }],
    examples: [{ tc: "這家餐廳很好吃，可是太貴了。", py: "Zhè jiā cāntīng hěn hǎochī, kěshì tài guì le.", vn: "Nhà hàng này ăn rất ngon, nhưng đắt quá." }],
    idiom: "可想而知 (Kě xiǎng ér zhī) - Có thể hiểu được.", level: "TOCFL A"
  },
  {
    word: "辣", pinyin: "là", ipa: "la⁵¹", hanViet: "Lạt",
    image: "",
    radical: "Bộ Tân (辛) - Cay đắng, nhọc nhằn.",
    explanation: "Tính từ: Cay.",
    compounds: [{ tc: "很辣", py: "hěn là", vn: "rất cay" }, { tc: "不辣", py: "bú là", vn: "không cay" }],
    examples: [{ tc: "這個麵很辣，我不吃。", py: "Zhège miàn hěn là, wǒ bù chī.", vn: "Mì này rất cay, tôi không ăn." }],
    idiom: "心狠手辣 (Xīn hěn shǒu là) - Tâm ngoan thủ lạt (Độc ác, tàn nhẫn).", level: "TOCFL A"
  },
  {
    word: "怕", pinyin: "pà", ipa: "pʰa⁵¹", hanViet: "Phạ",
    image: "",
    radical: "Bộ Tâm (忄) - Liên quan đến cảm xúc trong lòng. Bên phải là chữ Bạch (白) chỉ âm.",
    explanation: "Động từ: Sợ, e ngại, không thích.",
    compounds: [{ tc: "害怕", py: "hàipà", vn: "sợ hãi" }, { tc: "恐怕", py: "kǒngpà", vn: "e rằng" }],
    examples: [{ tc: "我很怕吃辣。", py: "Wǒ hěn pà chī là.", vn: "Tôi rất sợ ăn cay." }],
    idiom: "貪生怕死 (Tān shēng pà sǐ) - Tham sinh úy tử (Tham sống sợ chết).", level: "TOCFL A"
  },
  {
    word: "所以", pinyin: "suǒyǐ", ipa: "swɔ²¹⁴ i²¹⁴", hanViet: "Sở dĩ",
    image: "",
    radical: "所 (Bộ Hộ 戶), 以 (Bộ Nhân 人).",
    explanation: "Liên từ: Cho nên, vì thế.",
    compounds: [{ tc: "因為...所以...", py: "yīnwèi... suǒyǐ...", vn: "bởi vì... cho nên..." }],
    examples: [{ tc: "我很怕辣，所以不吃這個。", py: "Wǒ hěn pà là, suǒyǐ bù chī zhège.", vn: "Tôi rất sợ cay, cho nên không ăn món này." }],
    idiom: "知其然，不知其所以然 (Zhī qí rán, bù zhī qí suǒ yǐ rán) - Biết bề nổi mà không hiểu nguyên nhân sâu xa.", level: "TOCFL A"
  },
  {
    word: "自己", pinyin: "zìjǐ", ipa: "tsɨ⁵¹ tɕi²¹⁴", hanViet: "Tự kỷ",
    image: "",
    radical: "自 (Bộ Tự 自 - bản thân), 己 (Bộ Kỷ 己).",
    explanation: "Đại từ: Bản thân, tự mình.",
    compounds: [{ tc: "我自己", py: "wǒ zìjǐ", vn: "tự tôi" }, { tc: "自己人", py: "zìjǐ rén", vn: "người nhà/người phe mình" }],
    examples: [{ tc: "週末我常自己做飯。", py: "Zhōumò wǒ cháng zài zìjǐ zuòfàn.", vn: "Cuối tuần tôi thường tự nấu ăn." }],
    idiom: "自欺欺人 (Zì qī qī rén) - Dối mình dối người.", level: "TOCFL A"
  },
  {
    word: "做飯", pinyin: "zuòfàn", ipa: "tswɔ⁵¹ fan⁵¹", hanViet: "Tác phạn",
    image: "",
    radical: "做 (Bộ Nhân 亻), 飯 (Bộ Thực 飠).",
    explanation: "Động từ: Nấu ăn.",
    compounds: [{ tc: "做菜", py: "zuòcài", vn: "nấu thức ăn" }],
    examples: [{ tc: "媽媽每天都自己做飯。", py: "Māma měitiān dōu zìjǐ zuòfàn.", vn: "Mẹ ngày nào cũng tự nấu ăn." }],
    idiom: "巧婦難為無米之炊 (Qiǎo fù nán wéi wú mǐ zhī chuī) - Vợ đảm khó nấu cơm không gạo (Có bột mới gột nên hồ).", level: "TOCFL A"
  },
  {
    word: "得", pinyin: "de", ipa: "tɤ", hanViet: "Đắc",
    image: "",
    radical: "Bộ Xích (彳) - Bước chân.",
    explanation: "Trợ từ: (Dùng sau động từ/tính từ để đánh dấu bổ ngữ trạng thái).",
    compounds: [{ tc: "覺得", py: "juéde", vn: "cảm thấy" }],
    examples: [{ tc: "他中文說得很好。", py: "Tā Zhōngwén shuō de hěn hǎo.", vn: "Anh ấy nói tiếng Trung rất giỏi." }],
    idiom: "得寸進尺 (Dé cùn jìn chǐ) - Được đằng chân lân đằng đầu.", level: "TOCFL A"
  },
  {
    word: "會", pinyin: "huì", ipa: "xweɪ⁵¹", hanViet: "Hội",
    image: "",
    radical: "Bộ Viết (曰) - Thường mang nghĩa tụ tập, họp lại. Ở đây là trợ từ.",
    explanation: "Động từ năng nguyện: Biết (Làm gì đó thông qua học tập), sẽ.",
    compounds: [{ tc: "不會", py: "bú huì", vn: "không biết" }, { tc: "開會", py: "kāihuì", vn: "họp" }],
    examples: [{ tc: "我會說一點中文。", py: "Wǒ huì shuō yìdiǎn Zhōngwén.", vn: "Tôi biết nói một chút tiếng Trung." }],
    idiom: "心領神會 (Xīn lǐng shén huì) - Tâm linh thần hội (Hiểu thấu đáo).", level: "TOCFL A"
  },
  {
    word: "甜點", pinyin: "tiándiǎn", ipa: "tʰjɛn³⁵ tjɛn²¹⁴", hanViet: "Điềm điểm",
    image: "",
    radical: "甜 (Bộ 甘 - ngọt/lưỡi liếm vị ngọt), 點 (Bộ Hắc 黑).",
    explanation: "Danh từ: Đồ tráng miệng, món tráng miệng.",
    compounds: [{ tc: "很甜", py: "hěn tián", vn: "rất ngọt" }],
    examples: [{ tc: "這家餐廳的甜點很好吃。", py: "Zhè jiā cāntīng de tiándiǎn hěn hǎochī.", vn: "Đồ tráng miệng của nhà hàng này rất ngon." }],
    idiom: "甜言蜜語 (Tián yán mì yǔ) - Lời ngon tiếng ngọt.", level: "TOCFL A"
  },
  {
    word: "不錯", pinyin: "búcuò", ipa: "pu³⁵ tsʰwɔ⁵¹", hanViet: "Bất thác",
    image: "",
    radical: "錯 (Bộ Kim 金).",
    explanation: "Tính từ: Không tồi, khá tốt.",
    compounds: [{ tc: "寫錯", py: "xiě cuò", vn: "viết sai" }],
    examples: [{ tc: "這杯茶真不錯。", py: "Zhè bēi chá zhēn búcuò.", vn: "Ly trà này thật không tồi (ngon)." }],
    idiom: "錯骨揚灰 (Cuò gǔ yáng huī) - Băm xương rắc tro (Chỉ sự căm thù).", level: "TOCFL A"
  },
  {
    word: "可以", pinyin: "kěyǐ", ipa: "kʰɤ²¹⁴ i²¹⁴", hanViet: "Khả dĩ",
    image: "",
    radical: "可 (Bộ Khẩu 口), 以 (Bộ Nhân 人).",
    explanation: "Động từ năng nguyện: Có thể (Chỉ sự cho phép hoặc khả năng).",
    compounds: [{ tc: "不可以", py: "bù kěyǐ", vn: "không được" }],
    examples: [{ tc: "我可以吃你的包子嗎？", py: "Wǒ kěyǐ chī nǐ de bāozi ma?", vn: "Tôi có thể ăn bánh bao của bạn không?" }],
    idiom: "可想而知 (Kě xiǎng ér zhī) - Có thể hiểu được.", level: "TOCFL A"
  },
  {
    word: "教", pinyin: "jiāo", ipa: "tɕjaʊ⁵⁵", hanViet: "Giáo",
    image: "",
    radical: "Bộ Phộc (攴 / 攵) - Đánh, gõ. Ngụ ý ngày xưa dạy dỗ bằng roi vọt.",
    explanation: "Động từ: Dạy, chỉ bảo.",
    compounds: [{ tc: "教師", py: "jiàoshī", vn: "giáo viên" }],
    examples: [{ tc: "老師教我們中文。", py: "Lǎoshī jiāo wǒmen Zhōngwén.", vn: "Thầy giáo dạy chúng tôi tiếng Trung." }],
    idiom: "因材施教 (Yīn cái shī jiào) - Dạy học theo khả năng của từng người.", level: "TOCFL A"
  },
  {
    word: "到", pinyin: "dào", ipa: "taʊ⁵¹", hanViet: "Đáo",
    image: "",
    radical: "Bộ Đao (刂) - Con dao.",
    explanation: "Giới từ / Động từ: Tới, đến.",
    compounds: [{ tc: "到了", py: "dào le", vn: "đến rồi" }, { tc: "遲到", py: "chídào", vn: "đến muộn" }],
    examples: [{ tc: "歡迎到台灣來！", py: "Huānyíng dào Táiwān lái!", vn: "Chào mừng đến với Đài Loan!" }],
    idiom: "水到渠成 (Shuǐ dào qú chéng) - Nước chảy thành mương (Việc gì đến sẽ đến).", level: "TOCFL A"
  },
  {
    word: "有一點", pinyin: "yǒu yìdiǎn", ipa: "joʊ²¹⁴ i⁵¹ tjɛn²¹⁴", hanViet: "Hữu nhất điểm",
    image: "",
    radical: "Ghép từ chữ Hữu 有, Nhất 一, Điểm 點.",
    explanation: "Cụm từ: Có một chút, hơi (Thường đi với tính từ tiêu cực).",
    compounds: [{ tc: "一點點", py: "yìdiǎndiǎn", vn: "một chút xíu" }],
    examples: [{ tc: "這個麵有一點辣。", py: "Zhège miàn yǒu yìdiǎn là.", vn: "Mì này có hơi cay một chút." }],
    idiom: "星星之火，可以燎原 (Xīng xīng zhī huǒ, kě yǐ liáo yuán) - Đốm lửa nhỏ có thể thiêu rụi đồng cỏ.", level: "TOCFL A"
  },
  {
    word: "不好", pinyin: "bù hǎo", ipa: "pu³⁵ xaʊ²¹⁴", hanViet: "Bất hảo",
    image: "",
    radical: "不 (Bộ Nhất 一), 好 (Bộ Nữ 女).",
    explanation: "Tính từ / Cụm từ: Không tốt, không khỏe.",
    compounds: [{ tc: "不好意思", py: "bù hǎoyìsi", vn: "ngại quá/xin lỗi" }],
    examples: [{ tc: "我今天覺得不好。", py: "Wǒ jīntiān juéde bù hǎo.", vn: "Hôm nay tôi cảm thấy không khỏe." }],
    idiom: "出言不遜 (Chū yán bú xùn) - Mở miệng là nói lời bất hảo.", level: "TOCFL A"
  },
  // ==========================================
  // --- TỪ VỰNG BÀI 6 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  // ==========================================
  {
    word: "他們", pinyin: "tāmen", ipa: "tʰa⁵⁵ mən", hanViet: "Tha môn",
    image: "",
    radical: "他 (Bộ Nhân 亻), 們 (Bộ Nhân 亻).",
    explanation: "Đại từ: Bọn họ, họ (Dùng cho nhóm người có nam hoặc cả nam lẫn nữ).",
    compounds: [{ tc: "她們", py: "tāmen", vn: "các cô ấy (toàn nữ)" }],
    examples: [{ tc: "他們都是我的朋友。", py: "Tāmen dōu shì wǒ de péngyǒu.", vn: "Bọn họ đều là bạn của tôi." }],
    idiom: "大庭廣眾 (Dà tíng guǎng zhòng) - Giữa chốn đông người.", level: "TOCFL A"
  },
  {
    word: "學校", pinyin: "xuéxiào", ipa: "ɕɥɛ³⁵ ɕjaʊ⁵¹", hanViet: "Học hiệu",
    image: "",
    radical: "學 (Bộ Tử 子), 校 (Bộ Mộc 木 - ngày xưa trường học xây bằng gỗ).",
    explanation: "Danh từ: Trường học.",
    compounds: [{ tc: "校長", py: "xiàozhǎng", vn: "hiệu trưởng" }, { tc: "校園", py: "xiàoyuán", vn: "khuôn viên trường" }],
    examples: [{ tc: "我的學校很漂亮。", py: "Wǒ de xuéxiào hěn piàoliang.", vn: "Trường học của tôi rất đẹp." }],
    idiom: "尊師重道 (Zūn shī zhòng dào) - Tôn sư trọng đạo.", level: "TOCFL A"
  },
  {
    word: "在", pinyin: "zài", ipa: "tsaɪ⁵¹", hanViet: "Tại",
    image: "",
    radical: "Bộ Thổ (土) - Mặt đất. Biểu thị sự tồn tại, vị trí trên mặt đất.",
    explanation: "Động từ / Giới từ: Ở, tại, đang.",
    compounds: [{ tc: "現在", py: "xiànzài", vn: "bây giờ" }, { tc: "在家", py: "zài jiā", vn: "ở nhà" }],
    examples: [{ tc: "他在圖書館看書。", py: "Tā zài túshūguǎn kànshū.", vn: "Anh ấy đang đọc sách ở thư viện." }],
    idiom: "自由自在 (Zì yóu zì zài) - Tự do tự tại.", level: "TOCFL A"
  },
  {
    word: "山上", pinyin: "shānshàng", ipa: "ʂan⁵⁵ ʂaŋ⁵¹", hanViet: "Sơn thượng",
    image: "",
    radical: "山 (Bộ Sơn 山), 上 (Bộ Nhất 一).",
    explanation: "Danh từ: Trên núi.",
    compounds: [{ tc: "山下", py: "shānxià", vn: "dưới núi" }, { tc: "高山", py: "gāoshān", vn: "núi cao" }],
    examples: [{ tc: "山上的風景很美。", py: "Shānshàng de fēngjǐng hěn měi.", vn: "Phong cảnh trên núi rất đẹp." }],
    idiom: "逼上梁山 (Bī shàng liáng shān) - Bức lên Lương Sơn (Bị ép đến bước đường cùng).", level: "TOCFL A"
  },
  {
    word: "哪裡 / 哪兒", pinyin: "nǎlǐ / nǎr", ipa: "na²¹⁴ li²¹⁴", hanViet: "Nạ lý",
    image: "",
    radical: "哪 (Bộ Khẩu 口 - câu hỏi), 裡 (Bộ Lý 里 - làng xóm/bên trong).",
    explanation: "Đại từ nghi vấn: Ở đâu, chỗ nào.",
    compounds: [{ tc: "去哪裡", py: "qù nǎlǐ", vn: "đi đâu" }],
    examples: [{ tc: "請問，圖書館在哪裡？", py: "Qǐngwèn, túshūguǎn zài nǎlǐ?", vn: "Xin hỏi, thư viện ở đâu?" }],
    idiom: "天涯海角在哪裡 (Tiān yá hǎi jiǎo zài nǎlǐ) - Chân trời góc bể ở nơi đâu.", level: "TOCFL A"
  },
  {
    word: "遠", pinyin: "yuǎn", ipa: "ɥɛn²¹⁴", hanViet: "Viễn",
    image: "",
    radical: "Bộ Sước (辶) - Bước đi. Đi một quãng đường rất dài.",
    explanation: "Tính từ: Xa.",
    compounds: [{ tc: "很遠", py: "hěn yuǎn", vn: "rất xa" }, { tc: "永遠", py: "yǒngyuǎn", vn: "vĩnh viễn" }],
    examples: [{ tc: "我家離學校很遠。", py: "Wǒ jiā lí xuéxiào hěn yuǎn.", vn: "Nhà tôi cách trường rất xa." }],
    idiom: "任重道遠 (Rèn zhòng dào yuǎn) - Gánh nặng đường xa.", level: "TOCFL A"
  },
  {
    word: "那裡 / 那兒", pinyin: "nàlǐ / nàr", ipa: "na⁵¹ li²¹⁴", hanViet: "Na lý",
    image: "",
    radical: "那 (Bộ Ấp 阝), 裡 (Bộ Lý 里).",
    explanation: "Đại từ chỉ thị: Chỗ đó, ở đó, nơi kia.",
    compounds: [{ tc: "那裡人", py: "nàlǐ rén", vn: "người ở đó" }],
    examples: [{ tc: "那裡有很多商店。", py: "Nàlǐ yǒu hěnduō shāngdiàn.", vn: "Ở đó có rất nhiều cửa hàng." }],
    idiom: "這山望著那山高 (Zhè shān wàng zhe nà shān gāo) - Đứng núi này trông núi nọ.", level: "TOCFL A"
  },
  {
    word: "風景", pinyin: "fēngjǐng", ipa: "fəŋ⁵⁵ tɕiŋ²¹⁴", hanViet: "Phong cảnh",
    image: "",
    radical: "風 (Bộ Phong 風 - gió), 景 (Bộ Nhật 日 - mặt trời chiếu sáng).",
    explanation: "Danh từ: Phong cảnh, cảnh vật.",
    compounds: [{ tc: "看風景", py: "kàn fēngjǐng", vn: "ngắm cảnh" }],
    examples: [{ tc: "花蓮的風景非常漂亮。", py: "Huālián de fēngjǐng fēicháng piàoliang.", vn: "Phong cảnh của Hoa Liên vô cùng đẹp." }],
    idiom: "風景如畫 (Fēng jǐng rú huà) - Phong cảnh đẹp như tranh.", level: "TOCFL A"
  },
  {
    word: "美", pinyin: "měi", ipa: "meɪ²¹⁴", hanViet: "Mỹ",
    image: "",
    radical: "Bộ Dương (羊) ở trên Bộ Đại (大). Cừu to béo là biểu tượng của sự tốt đẹp.",
    explanation: "Tính từ: Đẹp, xinh đẹp (Dùng cho phong cảnh hoặc người).",
    compounds: [{ tc: "美女", py: "měinǚ", vn: "mỹ nữ" }, { tc: "美味", py: "měiwèi", vn: "thơm ngon" }],
    examples: [{ tc: "這裡的海真美！", py: "Zhèlǐ de hǎi zhēn měi!", vn: "Biển ở đây đẹp thật!" }],
    idiom: "十全十美 (Shí quán shí měi) - Mười phân vẹn mười.", level: "TOCFL A"
  },
  {
    word: "前面", pinyin: "qiánmiàn", ipa: "tɕʰjɛn³⁵ mjɛn⁵¹", hanViet: "Tiền diện",
    image: "",
    radical: "前 (Bộ Đao 刂), 面 (Bộ Diện 面 - khuôn mặt).",
    explanation: "Danh từ chỉ phương hướng: Phía trước, đằng trước.",
    compounds: [{ tc: "往前走", py: "wǎng qián zǒu", vn: "đi về phía trước" }],
    examples: [{ tc: "學校的前面有一家餐廳。", py: "Xuéxiào de qiánmiàn yǒu yì jiā cāntīng.", vn: "Phía trước trường học có một nhà hàng." }],
    idiom: "勇往直前 (Yǒng wǎng zhí qián) - Dũng cảm tiến về phía trước.", level: "TOCFL A"
  },
  {
    word: "海", pinyin: "hǎi", ipa: "xaɪ²¹⁴", hanViet: "Hải",
    image: "",
    radical: "Bộ Thủy (氵) - Nước. Bên phải là chữ Mỗi (每) chỉ âm.",
    explanation: "Danh từ: Biển, đại dương.",
    compounds: [{ tc: "海邊", py: "hǎibiān", vn: "bờ biển" }, { tc: "看海", py: "kàn hǎi", vn: "ngắm biển" }],
    examples: [{ tc: "週末我們去海邊游泳。", py: "Zhōumò wǒmen qù hǎibiān yóuyǒng.", vn: "Cuối tuần chúng ta đi bơi ở bờ biển." }],
    idiom: "人山人海 (Rén shān rén hǎi) - Biển người tấp nập.", level: "TOCFL A"
  },
  {
    word: "後面", pinyin: "hòumiàn", ipa: "xoʊ⁵¹ mjɛn⁵¹", hanViet: "Hậu diện",
    image: "",
    radical: "後 (Bộ Xích 彳 - bước chân đi sau), 面 (Bộ Diện 面).",
    explanation: "Danh từ chỉ phương hướng: Phía sau, đằng sau.",
    compounds: [{ tc: "退後", py: "tuìhòu", vn: "lùi lại" }],
    examples: [{ tc: "我的宿舍在圖書館後面。", py: "Wǒ de sùshè zài túshūguǎn hòumiàn.", vn: "Ký túc xá của tôi ở phía sau thư viện." }],
    idiom: "後生可畏 (Hòu shēng kě wèi) - Hậu sinh khả úy (Thế hệ sau đáng nể).", level: "TOCFL A"
  },
  {
    word: "山", pinyin: "shān", ipa: "ʂan⁵⁵", hanViet: "Sơn",
    image: "",
    radical: "Bộ Sơn (山) - Hình ảnh ba ngọn núi nhấp nhô.",
    explanation: "Danh từ: Núi.",
    compounds: [{ tc: "爬山", py: "páshān", vn: "leo núi" }],
    examples: [{ tc: "台灣有很多高山。", py: "Táiwān yǒu hěnduō gāoshān.", vn: "Đài Loan có rất nhiều núi cao." }],
    idiom: "綠水青山 (Lǜ shuǐ qīng shān) - Non xanh nước biếc.", level: "TOCFL A"
  },
  {
    word: "真的", pinyin: "zhēnde", ipa: "tʂən⁵⁵ tɤ", hanViet: "Chân đích",
    image: "",
    radical: "真 (Bộ Mục 目 - mắt nhìn thấy sự thật), 的 (Bộ Bạch 白).",
    explanation: "Phó từ / Tính từ: Thật sự, đồ thật.",
    compounds: [{ tc: "真好", py: "zhēn hǎo", vn: "thật tốt" }],
    examples: [{ tc: "他說的是真的嗎？", py: "Tā shuō de shì zhēnde ma?", vn: "Những lời anh ấy nói là thật sao?" }],
    idiom: "千真萬確 (Qiān zhēn wàn què) - Vô cùng chân thực (Đúng 100%).", level: "TOCFL A"
  },
  {
    word: "地方", pinyin: "dìfāng", ipa: "ti⁵¹ faŋ⁵⁵", hanViet: "Địa phương",
    image: "",
    radical: "地 (Bộ Thổ 土 - đất đai), 方 (Bộ Phương 方 - vuông vức/phương hướng).",
    explanation: "Danh từ: Nơi, chỗ, địa điểm.",
    compounds: [{ tc: "好地方", py: "hǎo dìfāng", vn: "nơi tốt đẹp" }],
    examples: [{ tc: "這是一個很漂亮的地方。", py: "Zhè shì yí gè hěn piàoliang de dìfāng.", vn: "Đây là một nơi rất đẹp." }],
    idiom: "地靈人傑 (Dì líng rén jié) - Địa linh nhân kiệt.", level: "TOCFL A"
  },
  {
    word: "現在", pinyin: "xiànzài", ipa: "ɕjɛn⁵¹ tsaɪ⁵¹", hanViet: "Hiện tại",
    image: "",
    radical: "現 (Bộ Ngọc 王/玉), 在 (Bộ Thổ 土).",
    explanation: "Danh từ chỉ thời gian: Bây giờ, hiện tại.",
    compounds: [{ tc: "表現", py: "biǎoxiàn", vn: "thể hiện" }],
    examples: [{ tc: "你現在在哪裡？", py: "Nǐ xiànzài zài nǎlǐ?", vn: "Bây giờ bạn đang ở đâu?" }],
    idiom: "活在當下 (Huó zài dāng xià) - Sống cho hiện tại.", level: "TOCFL A"
  },
  {
    word: "附近", pinyin: "fùjìn", ipa: "fu⁵¹ tɕin⁵¹", hanViet: "Phụ cận",
    image: "",
    radical: "附 (Bộ Ấp 阝), 近 (Bộ Sước 辶 - di chuyển gần).",
    explanation: "Danh từ: Khu vực lân cận, gần đây.",
    compounds: [{ tc: "附近的人", py: "fùjìn de rén", vn: "người xung quanh" }],
    examples: [{ tc: "我家附近有一家咖啡廳。", py: "Wǒ jiā fùjìn yǒu yì jiā kāfēitīng.", vn: "Gần nhà tôi có một quán cà phê." }],
    idiom: "遠親不如近鄰 (Yuǎn qīn bù rú jìn lín) - Bán anh em xa mua láng giềng gần.", level: "TOCFL A"
  },
  {
    word: "樓下", pinyin: "lóuxià", ipa: "loʊ³⁵ ɕja⁵¹", hanViet: "Lâu hạ",
    image: "",
    radical: "樓 (Bộ Mộc 木 - nhà gỗ nhiều tầng), 下 (Bộ Nhất 一).",
    explanation: "Danh từ chỉ phương hướng: Dưới lầu, tầng dưới.",
    compounds: [{ tc: "樓上", py: "lóushàng", vn: "trên lầu" }],
    examples: [{ tc: "我的朋友在樓下等我。", py: "Wǒ de péngyǒu zài lóuxià děng wǒ.", vn: "Bạn tôi đang đợi tôi ở dưới lầu." }],
    idiom: "近水樓台先得月 (Jìn shuǐ lóu tái xiān dé yuè) - Gần nước được trăng (Có lợi thế do ở gần).", level: "TOCFL A"
  },
  {
    word: "找", pinyin: "zhǎo", ipa: "tʂaʊ²¹⁴", hanViet: "Trảo",
    image: "",
    radical: "Bộ Thủ (扌) - Dùng tay để lục lọi, tìm kiếm.",
    explanation: "Động từ: Tìm, tìm kiếm, thối (tiền), gặp gỡ (bạn bè).",
    compounds: [{ tc: "找錢", py: "zhǎo qián", vn: "thối tiền" }, { tc: "找朋友", py: "zhǎo péngyǒu", vn: "tìm/gặp bạn" }],
    examples: [{ tc: "你在找什麼東西？", py: "Nǐ zài zhǎo shénme dōngxi?", vn: "Bạn đang tìm đồ gì vậy?" }],
    idiom: "騎馬找馬 (Qí mǎ zhǎo mǎ) - Cưỡi ngựa tìm ngựa (Đứng núi này trông núi nọ).", level: "TOCFL A"
  },
  {
    word: "朋友", pinyin: "péngyǒu", ipa: "pʰəŋ³⁵ joʊ²¹⁴", hanViet: "Bằng hữu",
    image: "",
    radical: "朋 (Bộ Nguyệt 月 - hai mặt trăng song hành), 友 (Bộ Hựu 又 - hai bàn tay nắm lấy nhau).",
    explanation: "Danh từ: Bạn, bạn bè.",
    compounds: [{ tc: "男朋友", py: "nán péngyǒu", vn: "bạn trai" }, { tc: "女朋友", py: "nǚ péngyǒu", vn: "bạn gái" }],
    examples: [{ tc: "週末我要去找朋友。", py: "Zhōumò wǒ yào qù zhǎo péngyǒu.", vn: "Cuối tuần tôi sẽ đi gặp bạn bè." }],
    idiom: "良師益友 (Liáng shī yì yǒu) - Thầy giỏi bạn hiền.", level: "TOCFL A"
  },
  {
    word: "上課", pinyin: "shàngkè", ipa: "ʂaŋ⁵¹ kʰɤ⁵¹", hanViet: "Thượng khóa",
    image: "",
    radical: "上 (Bộ Nhất 一), 課 (Bộ Ngôn 言 - lời giảng của giáo viên).",
    explanation: "Động từ (ly hợp): Lên lớp, đi học, bắt đầu bài học.",
    compounds: [{ tc: "下課", py: "xiàkè", vn: "tan học" }, { tc: "課本", py: "kèběn", vn: "sách giáo khoa" }],
    examples: [{ tc: "我們八點上課。", py: "Wǒmen bā diǎn shàngkè.", vn: "Chúng ta lên lớp lúc 8 giờ." }],
    idiom: "專心致志 (Zhuān xīn zhì zhì) - Chuyên tâm chú ý (thường dùng khi đi học).", level: "TOCFL A"
  },
  {
    word: "花蓮", pinyin: "Huālián", ipa: "xwa⁵⁵ ljɛn³⁵", hanViet: "Hoa Liên",
    image: "",
    radical: "花 (Bộ Thảo 艹), 蓮 (Bộ Sước 辶 / Thảo 艹 - hoa sen).",
    explanation: "Danh từ riêng: Hoa Liên (Tên một thành phố nằm ở bờ biển phía Đông Đài Loan, nổi tiếng với phong cảnh tuyệt đẹp).",
    compounds: [{ tc: "去花蓮玩", py: "qù Huālián wán", vn: "đi Hoa Liên chơi" }],
    examples: [{ tc: "花蓮的風景真漂亮。", py: "Huālián de fēngjǐng zhēn piàoliang.", vn: "Phong cảnh Hoa Liên đẹp thật." }],
    idiom: "花好月圓 (Huā hǎo yuè yuán) - Hoa thơm trăng sáng (Chỉ sự viên mãn, trọn vẹn).", level: "TOCFL A"
  },
  {
    word: "聽說", pinyin: "tīngshuō", ipa: "tʰiŋ⁵⁵ ʂwɔ⁵⁵", hanViet: "Thính thuyết",
    image: "",
    radical: "聽 (Bộ Nhĩ 耳 - tai để nghe), 說 (Bộ Ngôn 言 - lời nói).",
    explanation: "Động từ: Nghe nói (Dùng để kể lại thông tin nghe được từ người khác).",
    compounds: [{ tc: "聽見", py: "tīngjiàn", vn: "nghe thấy" }],
    examples: [{ tc: "聽說台灣的臭豆腐很好吃。", py: "Tīngshuō Táiwān de chòu dòufǔ hěn hǎochī.", vn: "Nghe nói đậu phụ thối Đài Loan rất ngon." }],
    idiom: "道聽途說 (Dào tīng tú shuō) - Nghe đồn ngoài đường (Thông tin không có căn cứ).", level: "TOCFL A"
  },
  {
    word: "近", pinyin: "jìn", ipa: "tɕin⁵¹", hanViet: "Cận",
    image: "",
    radical: "Bộ Sước (辶) - Bước đi. Khoảng cách di chuyển ngắn.",
    explanation: "Tính từ: Gần.",
    compounds: [{ tc: "很近", py: "hěn jìn", vn: "rất gần" }, { tc: "最近", py: "zuìjìn", vn: "gần đây/dạo này" }],
    examples: [{ tc: "學校離我家很近。", py: "Xuéxiào lí wǒ jiā hěn jìn.", vn: "Trường học cách nhà tôi rất gần." }],
    idiom: "平易近人 (Píng yì jìn rén) - Bình dị dễ gần.", level: "TOCFL A"
  },
  {
    word: "方便", pinyin: "fāngbiàn", ipa: "faŋ⁵⁵ pjɛn⁵¹", hanViet: "Phương tiện",
    image: "",
    radical: "方 (Bộ Phương 方), 便 (Bộ Nhân 亻).",
    explanation: "Tính từ: Tiện lợi, thuận tiện.",
    compounds: [{ tc: "不方便", py: "bù fāngbiàn", vn: "bất tiện" }, { tc: "便利商店", py: "biànlì shāngdiàn", vn: "cửa hàng tiện lợi" }],
    examples: [{ tc: "住在學校裡面很方便。", py: "Zhù zài xuéxiào lǐmiàn hěn fāngbiàn.", vn: "Sống ở bên trong trường rất thuận tiện." }],
    idiom: "大開方便之門 (Dà kāi fāng biàn zhī mén) - Tạo điều kiện thuận lợi hết mức.", level: "TOCFL A"
  },
  {
    word: "這裡 / 這兒", pinyin: "zhèlǐ / zhèr", ipa: "tʂɤ⁵¹ li²¹⁴", hanViet: "Giá lý",
    image: "",
    radical: "這 (Bộ Sước 辶), 裡 (Bộ Lý 里).",
    explanation: "Đại từ chỉ thị: Ở đây, chỗ này.",
    compounds: [{ tc: "這裡人", py: "zhèlǐ rén", vn: "người vùng này" }],
    examples: [{ tc: "這裡有很多好吃的東西。", py: "Zhèlǐ yǒu hěnduō hǎochī de dōngxi.", vn: "Ở đây có rất nhiều đồ ăn ngon." }],
    idiom: "此地無銀三百兩 (Cǐ dì wú yín sān bǎi liǎng) - Lạy ông tôi ở bụi này (Chỉ sự che giấu vụng về).", level: "TOCFL A"
  },
  {
    word: "學生", pinyin: "xuéshēng", ipa: "ɕɥɛ³⁵ ʂəŋ⁵⁵", hanViet: "Học sinh",
    image: "",
    radical: "學 (Bộ Tử 子), 生 (Bộ Sinh 生 - sự sống, sinh ra).",
    explanation: "Danh từ: Học sinh, sinh viên.",
    compounds: [{ tc: "大學生", py: "dàxuéshēng", vn: "sinh viên đại học" }, { tc: "同學", py: "tóngxué", vn: "bạn học" }],
    examples: [{ tc: "我是台灣大學的學生。", py: "Wǒ shì Táiwān Dàxué de xuéshēng.", vn: "Tôi là sinh viên của Đại học Đài Loan." }],
    idiom: "品學兼優 (Pǐn xué jiān yōu) - Phẩm học kiêm ưu (Đạo đức và học tập đều xuất sắc).", level: "TOCFL A"
  },
  {
    word: "東西", pinyin: "dōngxi", ipa: "tʊŋ⁵⁵ ɕi", hanViet: "Đông tây",
    image: "",
    radical: "東 (Bộ Mộc 木 - Hướng Đông), 西 (Bộ Á 襾 - Hướng Tây). Gom đồ từ Đông sang Tây.",
    explanation: "Danh từ: Đồ đạc, thứ, đồ vật (Đọc thanh nhẹ chữ 'xi').",
    compounds: [{ tc: "買東西", py: "mǎi dōngxi", vn: "mua đồ" }, { tc: "吃東西", py: "chī dōngxi", vn: "ăn uống" }],
    examples: [{ tc: "你要去商店買什麼東西？", py: "Nǐ yào qù shāngdiàn mǎi shénme dōngxi?", vn: "Bạn muốn tới cửa hàng mua đồ gì?" }],
    idiom: "東張西望 (Dōng zhāng xī wàng) - Nhìn đông ngó tây (Mất tập trung).", level: "TOCFL A"
  },
  {
    word: "外面", pinyin: "wàimiàn", ipa: "waɪ⁵¹ mjɛn⁵¹", hanViet: "Ngoại diện",
    image: "",
    radical: "外 (Bộ Tịch 夕 - chập tối ra ngoài thì cần bói toán), 面 (Bộ Diện 面).",
    explanation: "Danh từ chỉ phương hướng: Bên ngoài.",
    compounds: [{ tc: "外國", py: "wàiguó", vn: "nước ngoài" }, { tc: "外帶", py: "wàidài", vn: "mang đi" }],
    examples: [{ tc: "外面很熱，我們進去吧。", py: "Wàimiàn hěn rè, wǒmen jìnqù ba.", vn: "Bên ngoài rất nóng, chúng ta đi vào trong thôi." }],
    idiom: "世外桃源 (Shì wài táo yuán) - Thế ngoại đào nguyên (Chốn bồng lai tiên cảnh).", level: "TOCFL A"
  },
  {
    word: "裡面", pinyin: "lǐmiàn", ipa: "li²¹⁴ mjɛn⁵¹", hanViet: "Lý diện",
    image: "",
    radical: "裡 (Bộ Lý 里 - Quần áo có lớp lót bên trong), 面 (Bộ Diện 面).",
    explanation: "Danh từ chỉ phương hướng: Bên trong.",
    compounds: [{ tc: "內用", py: "nèiyòng", vn: "ăn tại quán" }],
    examples: [{ tc: "圖書館裡面不能吃東西。", py: "Túshūguǎn lǐmiàn bù néng chī dōngxi.", vn: "Bên trong thư viện không được ăn uống." }],
    idiom: "裡應外合 (Lǐ yìng wài hé) - Trong ngoài phối hợp.", level: "TOCFL A"
  },
  {
    word: "商店", pinyin: "shāngdiàn", ipa: "ʂaŋ⁵⁵ tjɛn⁵¹", hanViet: "Thương điếm",
    image: "",
    radical: "商 (Bộ Khẩu 口 - bàn bạc giao thương), 店 (Bộ Nghiễm 广).",
    explanation: "Danh từ: Cửa tiệm, cửa hàng.",
    compounds: [{ tc: "便利商店", py: "biànlì shāngdiàn", vn: "cửa hàng tiện lợi (như 7-Eleven)" }],
    examples: [{ tc: "這家商店賣很多漂亮的衣服。", py: "Zhè jiā shāngdiàn mài hěnduō piàoliang de yīfú.", vn: "Cửa hàng này bán rất nhiều quần áo đẹp." }],
    idiom: "貨真價實 (Huò zhēn jià shí) - Hàng thật giá đúng.", level: "TOCFL A"
  },
  {
    word: "吃飯", pinyin: "chīfàn", ipa: "tʂʰɨ⁵⁵ fan⁵¹", hanViet: "Ngật phạn",
    image: "",
    radical: "吃 (Bộ Khẩu 口), 飯 (Bộ Thực 飠 - đồ ăn).",
    explanation: "Động từ (ly hợp): Ăn cơm, dùng bữa.",
    compounds: [{ tc: "晚飯", py: "wǎnfàn", vn: "bữa tối" }, { tc: "做飯", py: "zuòfàn", vn: "nấu ăn" }],
    examples: [{ tc: "你吃飯了嗎？", py: "Nǐ chīfàn le ma?", vn: "Bạn đã ăn cơm chưa?" }],
    idiom: "粗茶淡飯 (Cū chá dàn fàn) - Trà thô cơm nhạt (Cuộc sống bình dị).", level: "TOCFL A"
  },
  {
    word: "宿舍", pinyin: "sùshè", ipa: "su⁵¹ ʂɤ⁵¹", hanViet: "Túc xá",
    image: "",
    radical: "宿 (Bộ Miên 宀), 舍 (Bộ Thiệt 舌 - chỗ nghỉ ngơi).",
    explanation: "Danh từ: Ký túc xá.",
    compounds: [{ tc: "住宿", py: "zhùsù", vn: "trú ngụ/ở lại" }],
    examples: [{ tc: "我們學校的宿舍很新。", py: "Wǒmen xuéxiào de sùshè hěn xīn.", vn: "Ký túc xá của trường chúng tôi rất mới." }],
    idiom: "安居樂業 (Ān jū lè yè) - An cư lạc nghiệp.", level: "TOCFL A"
  },
  {
    word: "樓", pinyin: "lóu", ipa: "loʊ³⁵", hanViet: "Lâu",
    image: "",
    radical: "Bộ Mộc (木) - Ngày xưa các công trình nhiều tầng đều làm bằng gỗ.",
    explanation: "Danh từ / Lượng từ: Lầu, tầng, tòa nhà.",
    compounds: [{ tc: "一樓", py: "yì lóu", vn: "tầng 1" }, { tc: "樓上", py: "lóushàng", vn: "trên lầu" }],
    examples: [{ tc: "我的宿舍在三樓。", py: "Wǒ de sùshè zài sān lóu.", vn: "Ký túc xá của tôi ở tầng ba." }],
    idiom: "更上一層樓 (Gèng shàng yì céng lóu) - Lên thêm một tầng lầu (Chỉ sự thăng tiến, vươn xa hơn).", level: "TOCFL A"
  },
  {
    word: "棟", pinyin: "dòng", ipa: "tʊŋ⁵¹", hanViet: "Đống",
    image: "",
    radical: "Bộ Mộc (木) - Rường cột nhà.",
    explanation: "Lượng từ: Dãy, tòa (Dùng cho tòa nhà, khu nhà).",
    compounds: [{ tc: "一棟大樓", py: "yí dòng dàlóu", vn: "một tòa nhà lớn" }],
    examples: [{ tc: "那一棟是圖書館。", py: "Nà yí dòng shì túshūguǎn.", vn: "Tòa kia là thư viện." }],
    idiom: "棟樑之才 (Dòng liáng zhī cái) - Nhân tài đống lương (Người gánh vác việc lớn).", level: "TOCFL A"
  },
  {
    word: "大樓", pinyin: "dàlóu", ipa: "ta⁵¹ loʊ³⁵", hanViet: "Đại lâu",
    image: "",
    radical: "大 (Bộ Đại 大), 樓 (Bộ Mộc 木).",
    explanation: "Danh từ: Tòa nhà lớn, cao ốc.",
    compounds: [{ tc: "辦公大樓", py: "bàngōng dàlóu", vn: "tòa nhà văn phòng" }],
    examples: [{ tc: "學校附近有很多大樓。", py: "Xuéxiào fùjìn yǒu hěnduō dàlóu.", vn: "Gần trường học có rất nhiều tòa nhà lớn." }],
    idiom: "高樓大廈 (Gāo lóu dà shà) - Nhà cao cửa rộng.", level: "TOCFL A"
  },
  {
    word: "圖書館", pinyin: "túshūguǎn", ipa: "tʰu³⁵ ʂu⁵⁵ kwan²¹⁴", hanViet: "Đồ thư quán",
    image: "",
    radical: "圖 (Bộ Vi 囗), 書 (Bộ Viết 曰), 館 (Bộ Thực 飠).",
    explanation: "Danh từ: Thư viện.",
    compounds: [{ tc: "借書", py: "jiè shū", vn: "mượn sách" }, { tc: "看書", py: "kànshū", vn: "đọc sách" }],
    examples: [{ tc: "我常去圖書館借書。", py: "Wǒ cháng qù túshūguǎn jiè shū.", vn: "Tôi thường đến thư viện mượn sách." }],
    idiom: "博覽群書 (Bó lǎn qún shū) - Đọc nhiều hiểu rộng.", level: "TOCFL A"
  },
  {
    word: "旁邊", pinyin: "pángbiān", ipa: "pʰaŋ³⁵ pjɛn⁵⁵", hanViet: "Bàng biên",
    image: "",
    radical: "旁 (Bộ Phương 方), 邊 (Bộ Sước 辶 - rìa/mép ngoài).",
    explanation: "Danh từ chỉ phương hướng: Bên cạnh.",
    compounds: [{ tc: "海邊", py: "hǎibiān", vn: "bờ biển" }],
    examples: [{ tc: "圖書館旁邊是游泳池。", py: "Túshūguǎn pángbiān shì yóuyǒngchí.", vn: "Bên cạnh thư viện là hồ bơi." }],
    idiom: "旁觀者清 (Páng guān zhě qīng) - Người ngoài cuộc thường sáng suốt.", level: "TOCFL A"
  },
  {
    word: "教室", pinyin: "jiàoshì", ipa: "tɕjaʊ⁵¹ ʂɨ⁵¹", hanViet: "Giáo thất",
    image: "",
    radical: "教 (Bộ Phộc 攴/攵), 室 (Bộ Miên 宀 - phòng ốc/nhà).",
    explanation: "Danh từ: Phòng học, lớp học.",
    compounds: [{ tc: "上課", py: "shàngkè", vn: "lên lớp" }, { tc: "教師", py: "jiàoshī", vn: "giáo viên" }],
    examples: [{ tc: "我們的教室在五樓。", py: "Wǒmen de jiàoshì zài wǔ lóu.", vn: "Phòng học của chúng ta ở tầng 5." }],
    idiom: "鴉雀無聲 (Yā què wú shēng) - Im lặng như tờ (Không một tiếng động trong lớp học).", level: "TOCFL A"
  },
  {
    word: "游泳池", pinyin: "yóuyǒngchí", ipa: "joʊ³⁵ jʊŋ²¹⁴ tʂʰɨ³⁵", hanViet: "Du vịnh trì",
    image: "",
    radical: "游, 泳, 池 (Cả 3 chữ đều có chung Bộ Thủy 氵 - liên quan tới nước).",
    explanation: "Danh từ: Hồ bơi, bể bơi.",
    compounds: [{ tc: "去游泳", py: "qù yóuyǒng", vn: "đi bơi" }],
    examples: [{ tc: "學校的游泳池很大。", py: "Xuéxiào de yóuyǒngchí hěn dà.", vn: "Hồ bơi của trường rất lớn." }],
    idiom: "游刃有餘 (Yóu rèn yǒu yú) - Làm việc dễ dàng, thành thạo (như cá bơi trong nước).", level: "TOCFL A"
  },
  // ==========================================
  // --- TỪ VỰNG BÀI 7 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 ---
  // ==========================================
  {
    word: "在", pinyin: "zài", ipa: "tsaɪ⁵¹", hanViet: "Tại",
    image: "",
    radical: "Bộ Thổ (土) - Mặt đất.",
    explanation: "Phó từ (chỉ thể tiếp diễn): Đang (làm gì đó).",
    compounds: [{ tc: "正在", py: "zhèngzài", vn: "đang" }],
    examples: [{ tc: "我在上課，等一下找你。", py: "Wǒ zài shàngkè, děng yíxià zhǎo nǐ.", vn: "Tôi đang học bài, lát nữa sẽ tìm bạn." }],
    idiom: "歷歷在目 (Lì lì zài mù) - Rành rành trước mắt.", level: "TOCFL A"
  },
  {
    word: "午餐", pinyin: "wǔcān", ipa: "wu²¹⁴ tsʰan⁵⁵", hanViet: "Ngọ can",
    image: "",
    radical: "午 (Bộ Thập 十), 餐 (Bộ Thực 食).",
    explanation: "Danh từ: Bữa trưa.",
    compounds: [{ tc: "吃午餐", py: "chī wǔcān", vn: "ăn bữa trưa" }, { tc: "晚餐", py: "wǎncān", vn: "bữa tối" }],
    examples: [{ tc: "你今天午餐吃什麼？", py: "Nǐ jīntiān wǔcān chī shénme?", vn: "Bữa trưa hôm nay bạn ăn gì?" }],
    idiom: "秀色可餐 (Xiù sè kě cān) - Đẹp đến mức như có thể ăn được.", level: "TOCFL A"
  },
  {
    word: "剛", pinyin: "gāng", ipa: "kaŋ⁵⁵", hanViet: "Cương",
    image: "",
    radical: "Bộ Đao (刂) - Con dao. Bên trái là chữ Cương (岡).",
    explanation: "Phó từ: Vừa, vừa mới.",
    compounds: [{ tc: "剛剛", py: "gānggāng", vn: "vừa nãy" }, { tc: "剛好", py: "gānghǎo", vn: "vừa vặn" }],
    examples: [{ tc: "我剛下課。", py: "Wǒ gāng xiàkè.", vn: "Tôi vừa mới tan học." }],
    idiom: "血氣方剛 (Xuè qì fāng gāng) - Huyết khí phương cương (Tuổi trẻ bồng bột).", level: "TOCFL A"
  },
  {
    word: "下課", pinyin: "xiàkè", ipa: "ɕja⁵¹ kʰɤ⁵¹", hanViet: "Hạ khóa",
    image: "",
    radical: "下 (Bộ Nhất 一), 課 (Bộ Ngôn 言).",
    explanation: "Động từ (ly hợp): Tan học, kết thúc tiết học.",
    compounds: [{ tc: "上課", py: "shàngkè", vn: "vào lớp" }],
    examples: [{ tc: "我們下午三點半下課。", py: "Wǒmen xiàwǔ sān diǎn bàn xiàkè.", vn: "Chúng tôi tan học lúc 3 rưỡi chiều." }],
    idiom: "無 (Dùng trong sinh hoạt hàng ngày).", level: "TOCFL A"
  },
  {
    word: "下午", pinyin: "xiàwǔ", ipa: "ɕja⁵¹ wu²¹⁴", hanViet: "Hạ ngọ",
    image: "",
    radical: "下 (Bộ Nhất 一), 午 (Bộ Thập 十).",
    explanation: "Danh từ: Buổi chiều.",
    compounds: [{ tc: "上午", py: "shàngwǔ", vn: "buổi sáng" }, { tc: "中午", py: "zhōngwǔ", vn: "buổi trưa" }],
    examples: [{ tc: "今天下午你有空嗎？", py: "Jīntiān xiàwǔ nǐ yǒu kòng ma?", vn: "Chiều nay bạn có rảnh không?" }],
    idiom: "日過中天 (Rì guò zhōng tiān) - Mặt trời qua bóng ngọ (Buổi chiều).", level: "TOCFL A"
  },
  {
    word: "半", pinyin: "bàn", ipa: "pan⁵¹", hanViet: "Bán",
    image: "",
    radical: "Bộ Thập (十). Phân chia một vật ra làm đôi.",
    explanation: "Số từ / Danh từ: Rưỡi, một nửa.",
    compounds: [{ tc: "一半", py: "yíbàn", vn: "một nửa" }, { tc: "半天", py: "bàntiān", vn: "nửa ngày" }],
    examples: [{ tc: "現在是兩點半。", py: "Xiànzài shì liǎng diǎn bàn.", vn: "Bây giờ là hai giờ rưỡi." }],
    idiom: "事半功倍 (Shì bàn gōng bèi) - Việc nửa công gấp đôi (Làm ít công to).", level: "TOCFL A"
  },
  {
    word: "比賽", pinyin: "bǐsài", ipa: "pi²¹⁴ saɪ⁵¹", hanViet: "Tỷ tái",
    image: "",
    radical: "比 (Bộ Tỷ 比 - so sánh), 賽 (Bộ Bối 貝).",
    explanation: "Danh từ / Động từ: Cuộc thi, trận đấu, thi đấu.",
    compounds: [{ tc: "籃球比賽", py: "lánqiú bǐsài", vn: "trận đấu bóng rổ" }],
    examples: [{ tc: "週末我要去看棒球比賽。", py: "Zhōumò wǒ yào qù kàn bàngqiú bǐsài.", vn: "Cuối tuần tôi sẽ đi xem đấu bóng chày." }],
    idiom: "友誼第一，比賽第二 (Yǒuyì dì yī, bǐsài dì èr) - Tình bạn là chính, thi đấu là phụ.", level: "TOCFL A"
  },
  {
    word: "結束", pinyin: "jiéshù", ipa: "tɕjɛ³⁵ ʂu⁵¹", hanViet: "Kết thúc",
    image: "",
    radical: "結 (Bộ Mịch 糸 - sợi tơ), 束 (Bộ Mộc 木).",
    explanation: "Động từ: Kết thúc.",
    compounds: [{ tc: "快結束了", py: "kuài jiéshù le", vn: "sắp kết thúc rồi" }],
    examples: [{ tc: "電影什麼時候結束？", py: "Diànyǐng shénme shíhòu jiéshù?", vn: "Khi nào bộ phim kết thúc?" }],
    idiom: "善始善終 (Shàn shǐ shàn zhōng) - Khởi đầu tốt, kết thúc đẹp.", level: "TOCFL A"
  },
  {
    word: "最近", pinyin: "zuìjìn", ipa: "tsweɪ⁵¹ tɕin⁵¹", hanViet: "Tối cận",
    image: "",
    radical: "最 (Bộ Viết 曰), 近 (Bộ Sước 辶).",
    explanation: "Danh từ thời gian: Gần đây, dạo này.",
    compounds: [{ tc: "最近好嗎", py: "zuìjìn hǎo ma", vn: "dạo này khỏe không" }],
    examples: [{ tc: "你最近忙不忙？", py: "Nǐ zuìjìn máng bù máng?", vn: "Dạo này bạn có bận không?" }],
    idiom: "遠親不如近鄰 (Yuǎn qīn bù rú jìn lín) - Bán anh em xa mua láng giềng gần.", level: "TOCFL A"
  },
  {
    word: "忙", pinyin: "máng", ipa: "maŋ³⁵", hanViet: "Mang",
    image: "",
    radical: "Bộ Tâm (忄) - Tâm trí luôn bận rộn. Kế bên là chữ Vong (亡).",
    explanation: "Tính từ: Bận, bận rộn.",
    compounds: [{ tc: "很忙", py: "hěn máng", vn: "rất bận" }, { tc: "幫忙", py: "bāngmáng", vn: "giúp đỡ" }],
    examples: [{ tc: "我最近很忙，沒有空。", py: "Wǒ zuìjìn hěn máng, méiyǒu kòng.", vn: "Dạo này tôi rất bận, không có thời gian rảnh." }],
    idiom: "手忙腳亂 (Shǒu máng jiǎo luàn) - Cuống cuồng (Tay bận chân loạn).", level: "TOCFL A"
  },
  {
    word: "每", pinyin: "měi", ipa: "meɪ²¹⁴", hanViet: "Mỗi",
    image: "",
    radical: "Bộ Vô (毋) - Ở trên là chữ Nhân (人).",
    explanation: "Đại từ: Mỗi, mọi.",
    compounds: [{ tc: "每天", py: "měitiān", vn: "mỗi ngày" }, { tc: "每個人", py: "měi gè rén", vn: "mỗi người" }],
    examples: [{ tc: "我每天早上都喝咖啡。", py: "Wǒ měitiān zǎoshàng dōu hē kāfēi.", vn: "Sáng nào tôi cũng uống cà phê." }],
    idiom: "每況愈下 (Měi kuàng yù xià) - Ngày càng sa sút.", level: "TOCFL A"
  },
  {
    word: "天", pinyin: "tiān", ipa: "tʰjɛn⁵⁵", hanViet: "Thiên",
    image: "",
    radical: "Bộ Đại (大) - Có một nét gạch ngang trên đầu người, tượng trưng cho bầu trời.",
    explanation: "Lượng từ / Danh từ: Ngày, bầu trời.",
    compounds: [{ tc: "今天", py: "jīntiān", vn: "hôm nay" }, { tc: "明天", py: "míngtiān", vn: "ngày mai" }],
    examples: [{ tc: "我來台灣三天了。", py: "Wǒ lái Táiwān sān tiān le.", vn: "Tôi đến Đài Loan được 3 ngày rồi." }],
    idiom: "天長地久 (Tiān cháng dì jiǔ) - Thiên trường địa cửu.", level: "TOCFL A"
  },
  {
    word: "書法", pinyin: "shūfǎ", ipa: "ʂu⁵⁵ fa²¹⁴", hanViet: "Thư pháp",
    image: "",
    radical: "書 (Bộ Viết 曰), 法 (Bộ Thủy 氵).",
    explanation: "Danh từ: Thư pháp, nghệ thuật viết chữ Hán.",
    compounds: [{ tc: "寫書法", py: "xiě shūfǎ", vn: "viết thư pháp" }],
    examples: [{ tc: "他的書法寫得很漂亮。", py: "Tā de shūfǎ xiě de hěn piàoliang.", vn: "Thư pháp của anh ấy viết rất đẹp." }],
    idiom: "筆走龍蛇 (Bǐ zǒu lóng shé) - Bút tẩu long xà (Chữ viết bay bướm).", level: "TOCFL A"
  },
  {
    word: "課", pinyin: "kè", ipa: "kʰɤ⁵¹", hanViet: "Khóa",
    image: "",
    radical: "Bộ Ngôn (言) - Lời nói, lời giảng của thầy cô.",
    explanation: "Danh từ: Tiết học, bài học.",
    compounds: [{ tc: "上課", py: "shàngkè", vn: "đi học" }, { tc: "書法課", py: "shūfǎ kè", vn: "lớp thư pháp" }],
    examples: [{ tc: "你明天有什麼課？", py: "Nǐ míngtiān yǒu shénme kè?", vn: "Ngày mai bạn có tiết học gì?" }],
    idiom: "無 (Dùng trong sinh hoạt hàng ngày).", level: "TOCFL A"
  },
  {
    word: "開始", pinyin: "kāishǐ", ipa: "kʰaɪ⁵⁵ ʂɨ²¹⁴", hanViet: "Khai thủy",
    image: "",
    radical: "開 (Bộ Môn 門 - mở cửa), 始 (Bộ Nữ 女).",
    explanation: "Động từ: Bắt đầu.",
    compounds: [{ tc: "開始上課", py: "kāishǐ shàngkè", vn: "bắt đầu vào học" }],
    examples: [{ tc: "比賽什麼時候開始？", py: "Bǐsài shénme shíhòu kāishǐ?", vn: "Khi nào trận đấu bắt đầu?" }],
    idiom: "萬事起頭難 (Wàn shì qǐ tóu nán) - Vạn sự khởi đầu nan.", level: "TOCFL A"
  },
  {
    word: "點", pinyin: "diǎn", ipa: "tjɛn²¹⁴", hanViet: "Điểm",
    image: "",
    radical: "Bộ Hắc (黑) - Dưới cùng là bốn dấu chấm Hỏa (灬).",
    explanation: "Lượng từ: Giờ (dùng để nói giờ đồng hồ).",
    compounds: [{ tc: "幾點", py: "jǐ diǎn", vn: "mấy giờ" }, { tc: "八點", py: "bā diǎn", vn: "tám giờ" }],
    examples: [{ tc: "現在是幾點？", py: "Xiànzài shì jǐ diǎn?", vn: "Bây giờ là mấy giờ?" }],
    idiom: "畫龍點睛 (Huà lóng diǎn jīng) - Vẽ rồng điểm mắt.", level: "TOCFL A"
  },
  {
    word: "KTV", pinyin: "KTV", ipa: "kʰeɪ tʰi vi", hanViet: "Karaoke",
    image: "",
    radical: "Từ ngoại lai (Chữ viết tắt của Karaoke Television).",
    explanation: "Danh từ: Quán Karaoke (Một hình thức giải trí cực kỳ phổ biến ở Đài Loan).",
    compounds: [{ tc: "去KTV唱歌", py: "qù KTV chànggē", vn: "đi KTV hát" }],
    examples: [{ tc: "週末我們去KTV唱歌吧。", py: "Zhōumò wǒmen qù KTV chànggē ba.", vn: "Cuối tuần chúng ta đi KTV hát đi." }],
    idiom: "無 (Từ ngoại lai).", level: "TOCFL A"
  },
  {
    word: "唱歌", pinyin: "chànggē", ipa: "tʂʰaŋ⁵¹ kɤ⁵⁵", hanViet: "Xướng ca",
    image: "",
    radical: "唱 (Bộ Khẩu 口 - dùng miệng để hát), 歌 (Bộ Khiếm 欠).",
    explanation: "Động từ (ly hợp): Hát.",
    compounds: [{ tc: "好聽的歌", py: "hǎotīng de gē", vn: "bài hát hay" }],
    examples: [{ tc: "他唱歌唱得很好聽。", py: "Tā chànggē chàng de hěn hǎotīng.", vn: "Anh ấy hát rất hay." }],
    idiom: "載歌載舞 (Zài gē zài wǔ) - Vừa múa vừa hát.", level: "TOCFL A"
  },
  {
    word: "分", pinyin: "fēn", ipa: "fən⁵⁵", hanViet: "Phân",
    image: "",
    radical: "Bộ Đao (刀) - Dùng dao chia nhỏ sự vật.",
    explanation: "Lượng từ: Phút (thời gian).",
    compounds: [{ tc: "十分鐘", py: "shí fēnzhōng", vn: "mười phút" }],
    examples: [{ tc: "現在是兩點二十分。", py: "Xiànzài shì liǎng diǎn èrshí fēn.", vn: "Bây giờ là 2 giờ 20 phút." }],
    idiom: "一分一秒 (Yì fēn yì miǎo) - Một phút một giây.", level: "TOCFL A"
  },
  {
    word: "見面", pinyin: "jiànmiàn", ipa: "tɕjɛn⁵¹ mjɛn⁵¹", hanViet: "Kiến diện",
    image: "",
    radical: "見 (Bộ Kiến 見 - nhìn), 面 (Bộ Diện 面 - khuôn mặt).",
    explanation: "Động từ (ly hợp): Gặp mặt, gặp gỡ.",
    compounds: [{ tc: "見朋友", py: "jiàn péngyǒu", vn: "gặp bạn" }],
    examples: [{ tc: "我們明天在哪裡見面？", py: "Wǒmen míngtiān zài nǎlǐ jiànmiàn?", vn: "Ngày mai chúng ta gặp nhau ở đâu?" }],
    idiom: "一面之緣 (Yí miàn zhī yuán) - Duyên gặp gỡ một lần.", level: "TOCFL A"
  },
  {
    word: "從", pinyin: "cóng", ipa: "tsʰʊŋ³⁵", hanViet: "Tòng",
    image: "",
    radical: "Bộ Xích (彳) - Bước đi theo sau người khác.",
    explanation: "Giới từ: Từ (Chỉ mốc thời gian hoặc địa điểm bắt đầu).",
    compounds: [{ tc: "從...到...", py: "cóng... dào...", vn: "từ... đến..." }],
    examples: [{ tc: "我們從兩點開始上課。", py: "Wǒmen cóng liǎng diǎn kāishǐ shàngkè.", vn: "Chúng ta bắt đầu học từ 2 giờ." }],
    idiom: "力不從心 (Lì bù cóng xīn) - Lực bất tòng tâm.", level: "TOCFL A"
  },
  {
    word: "中午", pinyin: "zhōngwǔ", ipa: "tʂʊŋ⁵⁵ wu²¹⁴", hanViet: "Trung ngọ",
    image: "",
    radical: "中 (Bộ Cổn 丨), 午 (Bộ Thập 十).",
    explanation: "Danh từ: Buổi trưa.",
    compounds: [{ tc: "中午好", py: "zhōngwǔ hǎo", vn: "chào buổi trưa" }],
    examples: [{ tc: "我中午在學校吃飯。", py: "Wǒ zhōngwǔ zài xuéxiào chīfàn.", vn: "Buổi trưa tôi ăn cơm ở trường." }],
    idiom: "如日中天 (Rú rì zhōng tiān) - Như mặt trời giữa trưa (Thời kỳ hưng thịnh nhất).", level: "TOCFL A"
  },
  {
    word: "得", pinyin: "děi", ipa: "teɪ²¹⁴", hanViet: "Đắc",
    image: "",
    radical: "Bộ Xích (彳).",
    explanation: "Động từ năng nguyện: Phải, cần phải (Làm gì đó). *Lưu ý: Phát âm là děi, khác với trợ từ 'de'.*",
    compounds: [{ tc: "得去", py: "děi qù", vn: "phải đi" }],
    examples: [{ tc: "我明天得去銀行。", py: "Wǒ míngtiān děi qù yínháng.", vn: "Ngày mai tôi phải đi ngân hàng." }],
    idiom: "迫不得已 (Pò bù dé yǐ) - Bất đắc dĩ.", level: "TOCFL A"
  },
  {
    word: "銀行", pinyin: "yínháng", ipa: "in³⁵ xaŋ³⁵", hanViet: "Ngân hành",
    image: "",
    radical: "銀 (Bộ Kim 金 - liên quan tiền bạc), 行 (Bộ Hành 行).",
    explanation: "Danh từ: Ngân hàng.",
    compounds: [{ tc: "去銀行", py: "qù yínháng", vn: "đi ngân hàng" }],
    examples: [{ tc: "學校附近有一家銀行。", py: "Xuéxiào fùjìn yǒu yì jiā yínháng.", vn: "Gần trường có một ngân hàng." }],
    idiom: "無 (Dùng trong sinh hoạt hàng ngày).", level: "TOCFL A"
  },
  {
    word: "時候", pinyin: "shíhòu", ipa: "ʂɨ³⁵ xoʊ⁵¹", hanViet: "Thời hậu",
    image: "",
    radical: "時 (Bộ Nhật 日 - ngày, thời gian), 候 (Bộ Nhân 亻).",
    explanation: "Danh từ: Lúc, khi, thời gian.",
    compounds: [{ tc: "什麼時候", py: "shénme shíhòu", vn: "khi nào" }, { tc: "的時候", py: "de shíhòu", vn: "trong lúc..." }],
    examples: [{ tc: "你什麼時候去台灣？", py: "Nǐ shénme shíhòu qù Táiwān?", vn: "Khi nào bạn đi Đài Loan?" }],
    idiom: "曾幾何時 (Céng jǐ hé shí) - Mới ngày nào đó.", level: "TOCFL A"
  },
  {
    word: "後天", pinyin: "hòutiān", ipa: "xoʊ⁵¹ tʰjɛn⁵⁵", hanViet: "Hậu thiên",
    image: "",
    radical: "後 (Bộ Xích 彳), 天 (Bộ Đại 大).",
    explanation: "Danh từ: Ngày mốt, ngày kia (Sau ngày mai).",
    compounds: [{ tc: "明天", py: "míngtiān", vn: "ngày mai" }, { tc: "昨天", py: "zuótiān", vn: "hôm qua" }],
    examples: [{ tc: "我們後天見。", py: "Wǒmen hòutiān jiàn.", vn: "Ngày mốt chúng ta gặp nhé." }],
    idiom: "無 (Dùng trong sinh hoạt hàng ngày).", level: "TOCFL A"
  },
  {
    word: "大安", pinyin: "Dà'ān", ipa: "ta⁵¹ an⁵⁵", hanViet: "Đại An",
    image: "",
    radical: "大 (Bộ Đại 大), 安 (Bộ Miên 宀 - phụ nữ ở trong nhà thì an toàn).",
    explanation: "Danh từ riêng: Đại An (Tên một quận sầm uất ở Đài Bắc, cũng là tên một chi nhánh KTV nổi tiếng).",
    compounds: [{ tc: "大安區", py: "Dà'ān Qū", vn: "Quận Đại An" }],
    examples: [{ tc: "我們在大安的KTV見面。", py: "Wǒmen zài Dà'ān de KTV jiànmiàn.", vn: "Chúng ta gặp nhau ở quán KTV Đại An nhé." }],
    idiom: "平平安安 (Píng píng ān ān) - Bình bình an an.", level: "TOCFL A"
  },
  {
    word: "下次", pinyin: "xià cì", ipa: "ɕja⁵¹ tsʰɨ⁵¹", hanViet: "Hạ thứ",
    image: "",
    radical: "下 (Bộ Nhất 一), 次 (Bộ Khiếm 欠).",
    explanation: "Cụm từ: Lần sau, dịp sau.",
    compounds: [{ tc: "上次", py: "shàng cì", vn: "lần trước" }, { tc: "這次", py: "zhè cì", vn: "lần này" }],
    examples: [{ tc: "我今天很忙，我們下次見吧。", py: "Wǒ jīntiān hěn máng, wǒmen xià cì jiàn ba.", vn: "Hôm nay tôi rất bận, chúng ta gặp nhau lần sau nhé." }],
    idiom: "下不為例 (Xià bù wéi lì) - Lần sau không được như thế nữa.", level: "TOCFL A"
  },
  {
    word: "沒問題", pinyin: "méi wèntí", ipa: "meɪ³⁵ wən⁵¹ tʰi³⁵", hanViet: "Một vấn đề",
    image: "",
    radical: "沒 (Bộ Thủy 氵), 問 (Bộ Khẩu 口), 題 (Bộ Hiệt 頁).",
    explanation: "Cụm từ: Không vấn đề gì, không sao đâu (Dùng để đồng ý, trấn an).",
    compounds: [{ tc: "有問題", py: "yǒu wèntí", vn: "có vấn đề" }],
    examples: [{ tc: "A: 請幫我買咖啡。 B: 沒問題。", py: "A: Qǐng bāng wǒ mǎi kāfēi. B: Méi wèntí.", vn: "A: Giúp tôi mua cà phê nhé. B: Không vấn đề gì." }],
    idiom: "無 (Cụm khẩu ngữ).", level: "TOCFL A"
  },
  {
    word: "對了", pinyin: "duìle", ipa: "tweɪ⁵¹ lɤ", hanViet: "Đối liễu",
    image: "",
    radical: "對 (Bộ Thốn 寸), 了 (Bộ Quyết 亅).",
    explanation: "Cụm từ: À đúng rồi (Dùng ở đầu câu khi chợt nhớ ra chuyện gì đó hoặc muốn chuyển chủ đề).",
    compounds: [{ tc: "對不對", py: "duì bù duì", vn: "đúng không" }],
    examples: [{ tc: "對了，你的手機號碼是多少？", py: "Duìle, nǐ de shǒujī hàomǎ shì duōshǎo?", vn: "À đúng rồi, số điện thoại của bạn là bao nhiêu?" }],
    idiom: "答非所問 (Dá fēi suǒ wèn) - Trả lời không đúng trọng tâm.", level: "TOCFL A"
  },
  {
    word: "有空", pinyin: "yǒu kòng", ipa: "joʊ²¹⁴ kʰʊŋ⁵¹", hanViet: "Hữu không",
    image: "",
    radical: "有 (Bộ Nguyệt 月), 空 (Bộ Huyệt 穴 - hang động trống rỗng).",
    explanation: "Cụm động từ / Tính từ: Rảnh, rảnh rỗi, có thời gian.",
    compounds: [{ tc: "沒空", py: "méi kòng", vn: "không rảnh" }],
    examples: [{ tc: "你明天晚上有空嗎？", py: "Nǐ míngtiān wǎnshàng yǒu kòng ma?", vn: "Tối ngày mai bạn có rảnh không?" }],
    idiom: "空空如也 (Kōng kōng rú yě) - Trống rỗng chẳng có gì.", level: "TOCFL A"
  },
  {
    word: "再見", pinyin: "zàijiàn", ipa: "tsaɪ⁵¹ tɕjɛn⁵¹", hanViet: "Tái kiến",
    image: "",
    radical: "再 (Bộ Quynh 冂), 見 (Bộ Kiến 見 - nhìn). Gặp lại lần nữa.",
    explanation: "Cụm từ: Tạm biệt.",
    compounds: [{ tc: "下次見", py: "xià cì jiàn", vn: "lần sau gặp" }],
    examples: [{ tc: "老師再見，同學再見。", py: "Lǎoshī zàijiàn, tóngxué zàijiàn.", vn: "Tạm biệt thầy, tạm biệt các bạn." }],
    idiom: "再接再厲 (Zài jiē zài lì) - Tiếp tục cố gắng.", level: "TOCFL A"
  },
  {
    word: "等一下", pinyin: "děng yíxià", ipa: "təŋ²¹⁴ i³⁵ ɕja⁵¹", hanViet: "Đẳng nhất hạ",
    image: "",
    radical: "等 (Bộ Trúc 竹), 一 (Bộ Nhất 一), 下 (Bộ Nhất 一).",
    explanation: "Cụm từ: Đợi một lát, lát nữa.",
    compounds: [{ tc: "等等", py: "děngděng", vn: "vân vân / đợi đã" }],
    examples: [{ tc: "請等一下，我馬上來。", py: "Qǐng děng yíxià, wǒ mǎshàng lái.", vn: "Xin đợi một lát, tôi đến ngay." }],
    idiom: "等不及 (Děng bù jí) - Đợi không kịp (Rất nôn nóng).", level: "TOCFL A"
  },
  {
    word: "有事", pinyin: "yǒu shì", ipa: "joʊ²¹⁴ ʂɨ⁵¹", hanViet: "Hữu sự",
    image: "",
    radical: "有 (Bộ Nguyệt 月), 事 (Bộ Quyết 亅).",
    explanation: "Cụm từ: Có việc bận, bận việc.",
    compounds: [{ tc: "沒事", py: "méishì", vn: "không sao / rảnh" }],
    examples: [{ tc: "對不起，我明天有事，不能去。", py: "Duìbùqǐ, wǒ míngtiān yǒu shì, bù néng qù.", vn: "Xin lỗi, ngày mai tôi có việc bận, không đi được." }],
    idiom: "事半功倍 (Shì bàn gōng bèi) - Việc nửa công gấp đôi.", level: "TOCFL A"
  },
  {
    word: "有意思", pinyin: "yǒu yìsi", ipa: "joʊ²¹⁴ i⁵¹ sɨ", hanViet: "Hữu ý tứ",
    image: "",
    radical: "意 (Bộ Tâm 心), 思 (Bộ Tâm 心). Sự thú vị phát ra từ tâm trí.",
    explanation: "Tính từ: Thú vị, có ý nghĩa, hay.",
    compounds: [{ tc: "沒意思", py: "méi yìsi", vn: "vô vị / chán" }],
    examples: [{ tc: "這本中文書很有意思。", py: "Zhè běn Zhōngwén shū hěn yǒu yìsi.", vn: "Cuốn sách tiếng Trung này rất thú vị." }],
    idiom: "小意思 (Xiǎo yìsi) - Chút lòng thành (Chuyện nhỏ).", level: "TOCFL A"
  },
  // ==========================================
  // --- TỪ VỰNG BÀI 8 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 (BẢN NHIỀU VÍ DỤ) ---
  // ==========================================
  {
    word: "同學", pinyin: "tóngxué", ipa: "tʰʊŋ³⁵ ɕɥɛ³⁵", hanViet: "Đồng học",
    image: "",
    radical: "同 (Bộ Khẩu 口), 學 (Bộ Tử 子).",
    explanation: "Danh từ: Bạn học.",
    compounds: [
      { tc: "老同學", py: "lǎo tóngxué", vn: "bạn học cũ" },
      { tc: "同班同學", py: "tóng bān tóngxué", vn: "bạn cùng lớp" },
      { tc: "同事", py: "tóngshì", vn: "đồng nghiệp" }
    ],
    examples: [
      { tc: "他是我的大學同學。", py: "Tā shì wǒ de dàxué tóngxué.", vn: "Anh ấy là bạn học đại học của tôi." },
      { tc: "同學們，大家早！", py: "Tóngxuémen, dàjiā zǎo!", vn: "Chào buổi sáng các em học sinh!" }
    ],
    idiom: "同窗之誼 (Tóng chuāng zhī yì) - Tình nghĩa bạn học.", level: "TOCFL A"
  },
  {
    word: "參觀", pinyin: "cānguān", ipa: "tsʰan⁵⁵ kwan⁵⁵", hanViet: "Tham quan",
    image: "",
    radical: "參 (Bộ Tư 厶), 觀 (Bộ Kiến 見 - nhìn ngắm).",
    explanation: "Động từ: Tham quan, thăm thú (Dùng cho địa điểm, cơ quan, trường học).",
    compounds: [
      { tc: "參觀博物館", py: "cānguān bówùguǎn", vn: "tham quan bảo tàng" },
      { tc: "參觀校園", py: "cānguān xiàoyuán", vn: "tham quan khuôn viên trường" },
      { tc: "參加", py: "cānjiā", vn: "tham gia" }
    ],
    examples: [
      { tc: "週末我們去參觀故宮。", py: "Zhōumò wǒmen qù cānguān Gùgōng.", vn: "Cuối tuần chúng ta đi tham quan Cố Cung." },
      { tc: "歡迎來參觀國立臺南大學。", py: "Huānyíng lái cānguān Guólì Táinán Dàxué.", vn: "Chào mừng đến tham quan Đại học Quốc gia Đài Nam." }
    ],
    idiom: "走馬觀花 (Zǒu mǎ guān huā) - Cưỡi ngựa xem hoa (Tham quan qua loa).", level: "TOCFL A"
  },
  {
    word: "古代", pinyin: "gǔdài", ipa: "ku²¹⁴ taɪ⁵¹", hanViet: "Cổ đại",
    image: "",
    radical: "古 (Bộ Khẩu 口 - mười miệng truyền lại là đồ cổ), 代 (Bộ Nhân 亻).",
    explanation: "Danh từ: Thời cổ đại, thời xưa.",
    compounds: [
      { tc: "古人", py: "gǔrén", vn: "người xưa" },
      { tc: "古時候", py: "gǔ shíhòu", vn: "thời xa xưa" },
      { tc: "現代", py: "xiàndài", vn: "hiện đại" }
    ],
    examples: [
      { tc: "我對中國的古代歷史很有興趣。", py: "Wǒ duì Zhōngguó de gǔdài lìshǐ hěn yǒu xìngqù.", vn: "Tôi rất có hứng thú với lịch sử Trung Quốc cổ đại." },
      { tc: "這是一本古代的書。", py: "Zhè shì yì běn gǔdài de shū.", vn: "Đây là một cuốn sách thời cổ đại." }
    ],
    idiom: "博古通今 (Bó gǔ tōng jīn) - Bác cổ thông kim (Hiểu rộng biết nhiều cả xưa và nay).", level: "TOCFL A"
  },
  {
    word: "騎", pinyin: "qí", ipa: "tɕʰi³⁵", hanViet: "Kỵ",
    image: "",
    radical: "Bộ Mã (馬) - Con ngựa. Nghĩa gốc là cưỡi ngựa, nay dùng cho các phương tiện vắt hai chân sang hai bên.",
    explanation: "Động từ: Cưỡi, đi (Xe máy, xe đạp, ngựa).",
    compounds: [
      { tc: "騎機車", py: "qí jīchē", vn: "đi xe máy" },
      { tc: "騎腳踏車", py: "qí jiǎotàchē", vn: "đi xe đạp" },
      { tc: "騎馬", py: "qímǎ", vn: "cưỡi ngựa" }
    ],
    examples: [
      { tc: "在台灣，很多人騎機車。", py: "Zài Táiwān, hěnduō rén qí jīchē.", vn: "Ở Đài Loan, rất nhiều người đi xe máy." },
      { tc: "我每天騎腳踏車去學校。", py: "Wǒ měitiān qí jiǎotàchē qù xuéxiào.", vn: "Mỗi ngày tôi đều đạp xe đến trường." }
    ],
    idiom: "騎虎難下 (Qí hǔ nán xià) - Cưỡi hổ khó xuống.", level: "TOCFL A"
  },
  {
    word: "機車", pinyin: "jīchē", ipa: "tɕi⁵⁵ tʂʰɤ⁵⁵", hanViet: "Cơ xa",
    image: "",
    radical: "機 (Bộ Mộc 木), 車 (Bộ Xa 車).",
    explanation: "Danh từ: Xe máy (Cách gọi phổ biến nhất ở Đài Loan).",
    compounds: [
      { tc: "騎機車", py: "qí jīchē", vn: "chạy xe máy" },
      { tc: "買機車", py: "mǎi jīchē", vn: "mua xe máy" },
      { tc: "很機車", py: "hěn jīchē", vn: "rất khó chịu/phiền phức (tiếng lóng)" }
    ],
    examples: [
      { tc: "我的機車很舊了。", py: "Wǒ de jīchē hěn jiù le.", vn: "Xe máy của tôi rất cũ rồi." },
      { tc: "騎機車去夜市很方便。", py: "Qí jīchē qù yèshì hěn fāngbiàn.", vn: "Đi xe máy đến chợ đêm rất tiện." }
    ],
    idiom: "無 (Danh từ phương tiện).", level: "TOCFL A"
  },
  {
    word: "載", pinyin: "zài", ipa: "tsaɪ⁵¹", hanViet: "Tái",
    image: "",
    radical: "Bộ Xa (車) - Xe cộ dùng để chuyên chở.",
    explanation: "Động từ: Chở, đèo (Bằng phương tiện).",
    compounds: [
      { tc: "載我", py: "zài wǒ", vn: "chở tôi" },
      { tc: "下載", py: "xiàzài", vn: "tải xuống (internet)" },
      { tc: "滿載", py: "mǎnzài", vn: "chở đầy" }
    ],
    examples: [
      { tc: "我騎機車載你去學校。", py: "Wǒ qí jīchē zài nǐ qù xuéxiào.", vn: "Tôi đi xe máy chở bạn đến trường." },
      { tc: "你可以載我回家嗎？", py: "Nǐ kěyǐ zài wǒ huíjiā ma?", vn: "Bạn có thể chở tôi về nhà không?" }
    ],
    idiom: "滿載而歸 (Mǎn zài ér guī) - Chở đầy thành quả trở về.", level: "TOCFL A"
  },
  {
    word: "捷運", pinyin: "jiéyùn", ipa: "tɕjɛ³⁵ yn⁵¹", hanViet: "Tiệp vận",
    image: "",
    radical: "捷 (Bộ Thủ 扌), 運 (Bộ Sước 辶 - di chuyển).",
    explanation: "Danh từ: Tàu điện ngầm (MRT - Hệ thống giao thông công cộng chính ở Đài Bắc, Cao Hùng).",
    compounds: [
      { tc: "坐捷運", py: "zuò jiéyùn", vn: "đi tàu điện ngầm" },
      { tc: "捷運站", py: "jiéyùn zhàn", vn: "trạm tàu điện ngầm" },
      { tc: "幸運", py: "xìngyùn", vn: "may mắn" }
    ],
    examples: [
      { tc: "台北的捷運很方便。", py: "Táiběi de jiéyùn hěn fāngbiàn.", vn: "Tàu điện ngầm ở Đài Bắc rất thuận tiện." },
      { tc: "我們坐捷運去故宮吧。", py: "Wǒmen zuò jiéyùn qù Gùgōng ba.", vn: "Chúng ta đi tàu điện ngầm đến Cố Cung đi." }
    ],
    idiom: "無 (Danh từ phương tiện).", level: "TOCFL A"
  },
  {
    word: "比", pinyin: "bǐ", ipa: "pi²¹⁴", hanViet: "Tỷ",
    image: "",
    radical: "Bộ Tỷ (比) - Hình ảnh hai người đứng song song để so sánh.",
    explanation: "Giới từ / Động từ: So với, so sánh (Dùng trong câu so sánh hơn).",
    compounds: [
      { tc: "比較", py: "bǐjiào", vn: "so sánh / khá là" },
      { tc: "比賽", py: "bǐsài", vn: "trận đấu" },
      { tc: "比如", py: "bǐrú", vn: "ví dụ như" }
    ],
    examples: [
      { tc: "坐高鐵比坐火車快。", py: "Zuò gāotiě bǐ zuò huǒchē kuài.", vn: "Đi tàu cao tốc nhanh hơn so với đi xe lửa." },
      { tc: "他比我高。", py: "Tā bǐ wǒ gāo.", vn: "Anh ấy cao hơn tôi." }
    ],
    idiom: "比上不足，比下有餘 (Bǐ shàng bù zú, bǐ xià yǒu yú) - Nhìn lên thì chẳng bằng ai, nhìn xuống thì chẳng ai bằng mình.", level: "TOCFL A"
  },
  {
    word: "故宮博物院 (故宮)", pinyin: "Gùgōng Bówùyuàn", ipa: "ku⁵¹ kʊŋ⁵⁵ pwɔ³⁵ wu⁵¹ ɥɛn⁵¹", hanViet: "Cố Cung Bác Vật Viện",
    image: "",
    radical: "故 (Bộ Phộc 攵), 宮 (Bộ Miên 宀 - cung điện).",
    explanation: "Danh từ riêng: Bảo tàng Cố Cung (Một trong những bảo tàng lớn nhất thế giới, nằm ở Đài Bắc).",
    compounds: [
      { tc: "去故宮", py: "qù Gùgōng", vn: "đi Cố Cung" },
      { tc: "博物館", py: "bówùguǎn", vn: "bảo tàng" }
    ],
    examples: [
      { tc: "故宮裡有很多古代的東西。", py: "Gùgōng lǐ yǒu hěnduō gǔdài de dōngxi.", vn: "Trong Cố Cung có rất nhiều món đồ thời cổ đại." },
      { tc: "明天我們去參觀故宮博物院。", py: "Míngtiān wǒmen qù cānguān Gùgōng Bówùyuàn.", vn: "Ngày mai chúng ta đi tham quan Bảo tàng Cố Cung." }
    ],
    idiom: "無 (Danh từ riêng).", level: "TOCFL A"
  },
  {
    word: "中國", pinyin: "Zhōngguó", ipa: "tʂʊŋ⁵⁵ kwɔ³⁵", hanViet: "Trung Quốc",
    image: "",
    radical: "中 (Bộ Cổn 丨), 國 (Bộ Vi 囗).",
    explanation: "Danh từ riêng: Trung Quốc.",
    compounds: [
      { tc: "中國人", py: "Zhōngguó rén", vn: "người Trung Quốc" },
      { tc: "中國菜", py: "Zhōngguó cài", vn: "món ăn Trung Quốc" }
    ],
    examples: [
      { tc: "他打算去中國旅行。", py: "Tā dǎsuàn qù Zhōngguó lǚxíng.", vn: "Anh ấy dự định đi Trung Quốc du lịch." }
    ],
    idiom: "無 (Danh từ riêng).", level: "TOCFL A"
  },
  {
    word: "公共汽車 / 公車", pinyin: "gōnggòng qìchē / gōngchē", ipa: "kʊŋ⁵⁵ kʊŋ⁵¹ tɕʰi⁵¹ tʂʰɤ⁵⁵", hanViet: "Công cộng khí xa",
    image: "",
    radical: "公 (Bộ Bát 八), 車 (Bộ Xa 車).",
    explanation: "Danh từ: Xe buýt (Cách gọi phổ biến ở Đài Loan là 公車 - gōngchē).",
    compounds: [
      { tc: "坐公車", py: "zuò gōngchē", vn: "đi xe buýt" },
      { tc: "公車站", py: "gōngchē zhàn", vn: "trạm xe buýt" },
      { tc: "公車卡", py: "gōngchē kǎ", vn: "thẻ xe buýt" }
    ],
    examples: [
      { tc: "坐公車很便宜。", py: "Zuò gōngchē hěn piányí.", vn: "Đi xe buýt rất rẻ." },
      { tc: "學校前面有公車站。", py: "Xuéxiào qiánmiàn yǒu gōngchē zhàn.", vn: "Phía trước trường học có trạm xe buýt." }
    ],
    idiom: "無 (Danh từ phương tiện).", level: "TOCFL A"
  },
  {
    word: "不行", pinyin: "bù xíng", ipa: "pu³⁵ ɕiŋ³⁵", hanViet: "Bất hành",
    image: "",
    radical: "不 (Bộ Nhất 一), 行 (Bộ Hành 行).",
    explanation: "Cụm từ: Không được, không ổn, không thể (Dùng để từ chối hoặc cấm đoán).",
    compounds: [
      { tc: "行不行", py: "xíng bù xíng", vn: "có được không" },
      { tc: "太不行了", py: "tài bù xíng le", vn: "tệ quá rồi" }
    ],
    examples: [
      { tc: "A: 我可以喝你的咖啡嗎？ B: 不行！", py: "A: Wǒ kěyǐ hē nǐ de kāfēi ma? B: Bù xíng!", vn: "A: Tôi có thể uống cà phê của bạn không? B: Không được!" },
      { tc: "騎機車上高速公路不行。", py: "Qí jīchē shàng gāosù gōnglù bù xíng.", vn: "Chạy xe máy lên đường cao tốc là không được." }
    ],
    idiom: "一意孤行 (Yì yì gū xíng) - Cố chấp làm theo ý mình.", level: "TOCFL A"
  },
  {
    word: "計程車", pinyin: "jìchéngchē", ipa: "tɕi⁵¹ tʂʰəŋ³⁵ tʂʰɤ⁵⁵", hanViet: "Kế trình xa",
    image: "",
    radical: "計 (Bộ Ngôn 言 - tính toán), 車 (Bộ Xa 車).",
    explanation: "Danh từ: Xe taxi.",
    compounds: [
      { tc: "坐計程車", py: "zuò jìchéngchē", vn: "đi taxi" },
      { tc: "叫計程車", py: "jiào jìchéngchē", vn: "gọi taxi" },
      { tc: "計程車司機", py: "jìchéngchē sījī", vn: "tài xế taxi" }
    ],
    examples: [
      { tc: "晚了，我們坐計程車回家吧。", py: "Wǎn le, wǒmen zuò jìchéngchē huíjiā ba.", vn: "Muộn rồi, chúng ta đi taxi về nhà đi." },
      { tc: "坐計程車比較貴。", py: "Zuò jìchéngchē bǐjiào guì.", vn: "Đi taxi thì khá là đắt." }
    ],
    idiom: "無 (Danh từ phương tiện).", level: "TOCFL A"
  },
  {
    word: "差不多", pinyin: "chàbùduō", ipa: "tʂʰa⁵¹ pu³⁵ twɔ⁵⁵", hanViet: "Sai bất đa",
    image: "",
    radical: "差 (Bộ Công 工), 不 (Bộ Nhất 一), 多 (Bộ Tịch 夕).",
    explanation: "Phó từ / Tính từ: Khoảng chừng, gần như nhau, tàm tạm.",
    compounds: [
      { tc: "差一點", py: "chà yìdiǎn", vn: "suýt chút nữa" },
      { tc: "很差", py: "hěn chà", vn: "rất tệ" }
    ],
    examples: [
      { tc: "這兩支手機差不多貴。", py: "Zhè liǎng zhī shǒujī chàbùduō guì.", vn: "Hai chiếc điện thoại này đắt ngang ngửa nhau." },
      { tc: "我們差不多該走了。", py: "Wǒmen chàbùduō gāi zǒu le.", vn: "Chúng ta khoảng chừng nên đi rồi." }
    ],
    idiom: "千差萬別 (Qiān chā wàn bié) - Khác nhau một trời một vực.", level: "TOCFL A"
  },
  {
    word: "坐", pinyin: "zuò", ipa: "tswɔ⁵¹", hanViet: "Tọa",
    image: "",
    radical: "Bộ Thổ (土) - Hai người (人) ngồi trên mặt đất (土).",
    explanation: "Động từ: Ngồi, đi bằng (Phương tiện giao thông).",
    compounds: [
      { tc: "坐火車", py: "zuò huǒchē", vn: "đi xe lửa" },
      { tc: "坐船", py: "zuò chuán", vn: "đi tàu thủy" },
      { tc: "請坐", py: "qǐngzuò", vn: "mời ngồi" }
    ],
    examples: [
      { tc: "週末我們坐火車去臺南。", py: "Zhōumò wǒmen zuò huǒchē qù Táinán.", vn: "Cuối tuần chúng ta đi xe lửa đến Đài Nam." },
      { tc: "我喜歡坐捷運。", py: "Wǒ xǐhuān zuò jiéyùn.", vn: "Tôi thích đi tàu điện ngầm." }
    ],
    idiom: "坐井觀天 (Zuò jǐng guān tiān) - Ếch ngồi đáy giếng.", level: "TOCFL A"
  },
  {
    word: "火車", pinyin: "huǒchē", ipa: "xwɔ²¹⁴ tʂʰɤ⁵⁵", hanViet: "Hỏa xa",
    image: "",
    radical: "火 (Bộ Hỏa 火), 車 (Bộ Xa 車). Xe chạy bằng sức nóng của lửa (than đá thời xưa).",
    explanation: "Danh từ: Xe lửa, tàu hỏa.",
    compounds: [
      { tc: "火車站", py: "huǒchē zhàn", vn: "ga xe lửa" },
      { tc: "火車票", py: "huǒchē piào", vn: "vé xe lửa" }
    ],
    examples: [
      { tc: "我買了兩張火車票。", py: "Wǒ mǎi le liǎng zhāng huǒchē piào.", vn: "Tôi đã mua hai tấm vé xe lửa." },
      { tc: "這班火車到臺南。", py: "Zhè bān huǒchē dào Táinán.", vn: "Chuyến xe lửa này đi đến Đài Nam." }
    ],
    idiom: "火燒眉毛 (Huǒ shāo méi máo) - Lửa cháy xém lông mày (Chuyện cực kỳ khẩn cấp).", level: "TOCFL A"
  },
  {
    word: "跟", pinyin: "gēn", ipa: "kən⁵⁵", hanViet: "Cân",
    image: "",
    radical: "Bộ Túc (足) - Cái chân. Nghĩa gốc là gót chân, bước theo sau ai đó.",
    explanation: "Giới từ / Liên từ: Cùng với, đi theo, và.",
    compounds: [
      { tc: "跟我來", py: "gēn wǒ lái", vn: "đi theo tôi" },
      { tc: "跟朋友", py: "gēn péngyǒu", vn: "cùng bạn bè" },
      { tc: "跟著", py: "gēnzhe", vn: "đi theo" }
    ],
    examples: [
      { tc: "我想跟你一起去臺南。", py: "Wǒ xiǎng gēn nǐ yìqǐ qù Táinán.", vn: "Tôi muốn cùng đi Đài Nam với bạn." },
      { tc: "我的手機跟你的一樣。", py: "Wǒ de shǒujī gēn nǐ de yíyàng.", vn: "Điện thoại của tôi giống với của bạn." }
    ],
    idiom: "跟著感覺走 (Gēnzhe gǎn jué zǒu) - Cứ làm theo cảm giác mách bảo.", level: "TOCFL A"
  },
  {
    word: "玩", pinyin: "wán", ipa: "wan³⁵", hanViet: "Ngoạn",
    image: "",
    radical: "Bộ Ngọc (玉/王) - Ngày xưa đồ chơi thường làm bằng ngọc.",
    explanation: "Động từ: Chơi, đi chơi, vui chơi.",
    compounds: [
      { tc: "好玩", py: "hǎowán", vn: "vui / thú vị" },
      { tc: "出去玩", py: "chūqù wán", vn: "đi ra ngoài chơi" },
      { tc: "玩具", py: "wánjù", vn: "đồ chơi" }
    ],
    examples: [
      { tc: "週末我們去海邊玩。", py: "Zhōumò wǒmen qù hǎibiān wán.", vn: "Cuối tuần chúng ta đi ra bờ biển chơi." },
      { tc: "這家夜市有很多好玩的東西。", py: "Zhè jiā yèshì yǒu hěnduō hǎowán de dōngxi.", vn: "Chợ đêm này có rất nhiều thứ hay ho." }
    ],
    idiom: "玩物喪志 (Wán wù sàng zhì) - Mải chơi quên chí lớn.", level: "TOCFL A"
  },
  {
    word: "怎麼", pinyin: "zěnme", ipa: "tsən²¹⁴ mɤ", hanViet: "Chẩm ma",
    image: "",
    radical: "怎 (Bộ Tâm 心), 麼 (Bộ Ma 麻).",
    explanation: "Đại từ nghi vấn: Thế nào, sao lại, làm sao (Hỏi cách thức hoặc nguyên nhân).",
    compounds: [
      { tc: "怎麼樣", py: "zěnmeyàng", vn: "như thế nào" },
      { tc: "怎麼辦", py: "zěnmebàn", vn: "làm sao đây" },
      { tc: "怎麼走", py: "zěnme zǒu", vn: "đi đường nào" }
    ],
    examples: [
      { tc: "請問，去車站怎麼走？", py: "Qǐngwèn, qù chēzhàn zěnme zǒu?", vn: "Xin hỏi, đi đến nhà ga đường nào?" },
      { tc: "你今天怎麼沒上課？", py: "Nǐ jīntiān zěnme méi shàngkè?", vn: "Hôm nay sao bạn lại không đi học?" }
    ],
    idiom: "無 (Đại từ nghi vấn thông dụng).", level: "TOCFL A"
  },
  {
    word: "慢", pinyin: "màn", ipa: "man⁵¹", hanViet: "Mạn",
    image: "",
    radical: "Bộ Tâm (忄) - Tâm trí thảnh thơi, không vội vàng.",
    explanation: "Tính từ: Chậm, chậm chạp.",
    compounds: [
      { tc: "很慢", py: "hěn màn", vn: "rất chậm" },
      { tc: "慢慢來", py: "mànmàn lái", vn: "từ từ thôi" },
      { tc: "慢走", py: "màn zǒu", vn: "đi thong thả (chào khách về)" }
    ],
    examples: [
      { tc: "坐公車比較慢。", py: "Zuò gōngchē bǐjiào màn.", vn: "Đi xe buýt khá là chậm." },
      { tc: "請你說慢一點，好嗎？", py: "Qǐng nǐ shuō màn yìdiǎn, hǎo ma?", vn: "Xin bạn hãy nói chậm lại một chút, được không?" }
    ],
    idiom: "傲慢無禮 (Ào màn wú lǐ) - Kiêu ngạo vô lễ.", level: "TOCFL A"
  },
  {
    word: "鐘頭", pinyin: "zhōngtóu", ipa: "tʂʊŋ⁵⁵ tʰoʊ³⁵", hanViet: "Chung đầu",
    image: "",
    radical: "鐘 (Bộ Kim 金 - đồng hồ/chuông), 頭 (Bộ Hiệt 頁).",
    explanation: "Danh từ: Giờ đồng hồ, tiếng đồng hồ (Khẩu ngữ của 小時).",
    compounds: [
      { tc: "一個鐘頭", py: "yí gè zhōngtóu", vn: "một tiếng đồng hồ" },
      { tc: "半個鐘頭", py: "bàn gè zhōngtóu", vn: "nửa tiếng đồng hồ" }
    ],
    examples: [
      { tc: "從台北到臺南要幾個鐘頭？", py: "Cóng Táiběi dào Táinán yào jǐ gè zhōngtóu?", vn: "Từ Đài Bắc đến Đài Nam mất mấy tiếng đồng hồ?" },
      { tc: "我看書看了一個鐘頭。", py: "Wǒ kànshū kàn le yí gè zhōngtóu.", vn: "Tôi đọc sách được một tiếng đồng hồ rồi." }
    ],
    idiom: "老態龍鍾 (Lǎo tài lóng zhōng) - Lụm cụm già nua (Dùng chữ Chung đồng âm).", level: "TOCFL A"
  },
  {
    word: "比較", pinyin: "bǐjiào", ipa: "pi²¹⁴ tɕjaʊ⁵¹", hanViet: "Tỷ giảo",
    image: "",
    radical: "比 (Bộ Tỷ 比), 較 (Bộ Xa 車).",
    explanation: "Phó từ / Động từ: Khá là, tương đối, so với (Dùng để so sánh).",
    compounds: [
      { tc: "比較好", py: "bǐjiào hǎo", vn: "khá hơn / tốt hơn" },
      { tc: "比較貴", py: "bǐjiào guì", vn: "đắt hơn" },
      { tc: "計較", py: "jìjiào", vn: "so đo / tính toán" }
    ],
    examples: [
      { tc: "我覺得坐高鐵比較舒服。", py: "Wǒ juéde zuò gāotiě bǐjiào shūfú.", vn: "Tôi cảm thấy đi tàu cao tốc thoải mái hơn." },
      { tc: "這家餐廳的菜比較便宜。", py: "Zhè jiā cāntīng de cài bǐjiào piányí.", vn: "Đồ ăn của nhà hàng này tương đối rẻ." }
    ],
    idiom: "斤斤計較 (Jīn jīn jì jiào) - Tính toán chi li từng đồng.", level: "TOCFL A"
  },
  {
    word: "快", pinyin: "kuài", ipa: "kʰwaɪ⁵¹", hanViet: "Khoái",
    image: "",
    radical: "Bộ Tâm (忄) - Tâm trí nhạy bén, phản ứng nhanh.",
    explanation: "Tính từ: Nhanh, mau.",
    compounds: [
      { tc: "很快", py: "hěn kuài", vn: "rất nhanh" },
      { tc: "快一點", py: "kuài yìdiǎn", vn: "nhanh lên một chút" },
      { tc: "快要", py: "kuài yào", vn: "sắp sửa" },
      { tc: "快樂", py: "kuàilè", vn: "vui vẻ" }
    ],
    examples: [
      { tc: "坐高鐵非常快。", py: "Zuò gāotiě fēicháng kuài.", vn: "Đi tàu cao tốc vô cùng nhanh." },
      { tc: "快一點，火車要開了！", py: "Kuài yìdiǎn, huǒchē yào kāi le!", vn: "Nhanh lên, xe lửa sắp chạy rồi!" }
    ],
    idiom: "快馬加鞭 (Kuài mǎ jiā biān) - Thúc ngựa phi nhanh (Tăng tốc độ làm việc).", level: "TOCFL A"
  },
  {
    word: "車票", pinyin: "chēpiào", ipa: "tʂʰɤ⁵⁵ pʰjaʊ⁵¹", hanViet: "Xa phiếu",
    image: "",
    radical: "車 (Bộ Xa 車), 票 (Bộ Thị 示).",
    explanation: "Danh từ: Vé xe (dùng chung cho tàu, xe).",
    compounds: [
      { tc: "買車票", py: "mǎi chēpiào", vn: "mua vé xe" },
      { tc: "高鐵票", py: "gāotiě piào", vn: "vé tàu cao tốc" },
      { tc: "機票", py: "jīpiào", vn: "vé máy bay" }
    ],
    examples: [
      { tc: "你買車票了嗎？", py: "Nǐ mǎi chēpiào le ma?", vn: "Bạn đã mua vé xe chưa?" },
      { tc: "這張車票是去臺南的。", py: "Zhè zhāng chēpiào shì qù Táinán de.", vn: "Tấm vé xe này là đi Đài Nam." }
    ],
    idiom: "空頭支票 (Kōng tóu zhī piào) - Tờ ngân phiếu khống (Lời hứa suông).", level: "TOCFL A"
  },
  {
    word: "非常", pinyin: "fēicháng", ipa: "feɪ⁵⁵ tʂʰaŋ³⁵", hanViet: "Phi thường",
    image: "",
    radical: "非 (Bộ Phi 非 - không phải), 常 (Bộ Cân 巾).",
    explanation: "Phó từ: Vô cùng, hết sức, rất (Mức độ cao hơn 'hěn').",
    compounds: [
      { tc: "非常好", py: "fēicháng hǎo", vn: "vô cùng tốt" },
      { tc: "非常多", py: "fēicháng duō", vn: "vô cùng nhiều" },
      { tc: "是非", py: "shìfēi", vn: "thị phi / đúng sai" }
    ],
    examples: [
      { tc: "臺南的小吃非常有名。", py: "Táinán de xiǎochī fēicháng yǒumíng.", vn: "Đồ ăn vặt ở Đài Nam vô cùng nổi tiếng." },
      { tc: "今天天氣非常熱。", py: "Jīntiān tiānqì fēicháng rè.", vn: "Hôm nay thời tiết cực kỳ nóng." }
    ],
    idiom: "非同小可 (Fēi tóng xiǎo kě) - Không phải chuyện đùa.", level: "TOCFL A"
  },
  {
    word: "但是", pinyin: "dànshì", ipa: "tan⁵¹ ʂɨ⁵¹", hanViet: "Đãn thị",
    image: "",
    radical: "但 (Bộ Nhân 亻), 是 (Bộ Nhật 日).",
    explanation: "Liên từ: Nhưng, nhưng mà.",
    compounds: [
      { tc: "可是", py: "kěshì", vn: "nhưng mà (khẩu ngữ hơn)" },
      { tc: "不但", py: "búdàn", vn: "không những" }
    ],
    examples: [
      { tc: "我想去旅行，但是沒有錢。", py: "Wǒ xiǎng qù lǚxíng, dànshì méiyǒu qián.", vn: "Tôi muốn đi du lịch, nhưng mà không có tiền." },
      { tc: "這件衣服很好看，但是太貴了。", py: "Zhè jiàn yīfú hěn hǎokàn, dànshì tài guì le.", vn: "Chiếc áo này rất đẹp, nhưng lại đắt quá." }
    ],
    idiom: "無 (Liên từ thông dụng).", level: "TOCFL A"
  },
  {
    word: "又", pinyin: "yòu", ipa: "joʊ⁵¹", hanViet: "Hựu",
    image: "",
    radical: "Bộ Hựu (又) - Bàn tay phải. Lặp đi lặp lại hành động.",
    explanation: "Phó từ: Lại, vừa... vừa... (Biểu thị sự lặp lại hoặc hai đặc điểm tồn tại cùng lúc).",
    compounds: [
      { tc: "又...又...", py: "yòu... yòu...", vn: "vừa... vừa..." },
      { tc: "又是", py: "yòu shì", vn: "lại là" },
      { tc: "又來了", py: "yòu lái le", vn: "lại đến nữa rồi" }
    ],
    examples: [
      { tc: "這家餐廳的菜又便宜又好吃。", py: "Zhè jiā cāntīng de cài yòu piányí yòu hǎochī.", vn: "Món ăn ở nhà hàng này vừa rẻ lại vừa ngon." },
      { tc: "你怎麼又遲到了？", py: "Nǐ zěnme yòu chídào le?", vn: "Sao bạn lại đi muộn nữa rồi?" }
    ],
    idiom: "欲言又止 (Yù yán yòu zhǐ) - Ngập ngừng muốn nói lại thôi.", level: "TOCFL A"
  },
  {
    word: "舒服", pinyin: "shūfú", ipa: "ʂu⁵⁵ fu", hanViet: "Thư phục",
    image: "",
    radical: "舒 (Bộ Nhân 人/Thiệt 舌), 服 (Bộ Nguyệt 月).",
    explanation: "Tính từ: Thoải mái, dễ chịu.",
    compounds: [
      { tc: "很舒服", py: "hěn shūfú", vn: "rất thoải mái" },
      { tc: "不舒服", py: "bù shūfú", vn: "không thoải mái / khó ở" },
      { tc: "服裝", py: "fúzhuāng", vn: "trang phục" }
    ],
    examples: [
      { tc: "坐高鐵非常舒服。", py: "Zuò gāotiě fēicháng shūfú.", vn: "Đi tàu cao tốc cực kỳ thoải mái." },
      { tc: "我今天覺得有一點不舒服。", py: "Wǒ jīntiān juéde yǒu yìdiǎn bù shūfú.", vn: "Hôm nay tôi cảm thấy hơi khó ở trong người." }
    ],
    idiom: "舒舒服服 (Shū shū fú fu) - Vô cùng thư thái, nhàn hạ.", level: "TOCFL A"
  },
  {
    word: "站", pinyin: "zhàn", ipa: "tʂan⁵¹", hanViet: "Trạm",
    image: "",
    radical: "Bộ Lập (立) - Đứng. Đứng đợi tàu xe.",
    explanation: "Danh từ / Động từ: Trạm, bến, nhà ga; Đứng.",
    compounds: [
      { tc: "火車站", py: "huǒchē zhàn", vn: "ga xe lửa" },
      { tc: "車站", py: "chēzhàn", vn: "nhà ga / bến xe" },
      { tc: "站起來", py: "zhàn qǐlái", vn: "đứng lên" }
    ],
    examples: [
      { tc: "我們在公車站見面。", py: "Wǒmen zài gōngchē zhàn jiànmiàn.", vn: "Chúng ta gặp nhau ở trạm xe buýt nhé." },
      { tc: "請大家站起來。", py: "Qǐng dàjiā zhàn qǐlái.", vn: "Mời mọi người đứng lên." }
    ],
    idiom: "站不住腳 (Zhàn bù zhù jiǎo) - Không đứng vững (Lý lẽ không có căn cứ).", level: "TOCFL A"
  },
  {
    word: "或是", pinyin: "huòshì", ipa: "xwɔ⁵¹ ʂɨ⁵¹", hanViet: "Hoặc thị",
    image: "",
    radical: "或 (Bộ Qua 戈), 是 (Bộ Nhật 日).",
    explanation: "Liên từ: Hoặc là, hay là (Dùng trong câu trần thuật).",
    compounds: [
      { tc: "或者", py: "huòzhě", vn: "hoặc là" },
      { tc: "或許", py: "huòxǔ", vn: "có lẽ" }
    ],
    examples: [
      { tc: "週末我打算在家看書或是看電影。", py: "Zhōumò wǒ dǎsuàn zài jiā kànshū huòshì kàn diànyǐng.", vn: "Cuối tuần tôi dự định ở nhà đọc sách hoặc là xem phim." },
      { tc: "我們坐火車或是坐客運都可以。", py: "Wǒmen zuò huǒchē huòshì zuò kèyùn dōu kěyǐ.", vn: "Chúng ta đi xe lửa hay là đi xe khách đều được." }
    ],
    idiom: "不可或缺 (Bù kě huò quē) - Không thể thiếu được.", level: "TOCFL A"
  },
  {
    word: "臺南 / 台南", pinyin: "Táinán", ipa: "tʰaɪ³⁵ nan³⁵", hanViet: "Đài Nam",
    image: "",
    radical: "台 (Bộ Khẩu 口), 南 (Bộ Thập 十 - phương Nam).",
    explanation: "Danh từ riêng: Đài Nam (Thành phố cổ kính và là kinh đô ẩm thực ở phía Tây Nam Đài Loan, nơi có Đại học Quốc gia Đài Nam NUTN).",
    compounds: [
      { tc: "去臺南玩", py: "qù Táinán wán", vn: "đi Đài Nam chơi" },
      { tc: "臺南人", py: "Táinán rén", vn: "người Đài Nam" },
      { tc: "國立臺南大學", py: "Guólì Táinán Dàxué", vn: "Đại học Quốc gia Đài Nam" }
    ],
    examples: [
      { tc: "我是國立臺南大學的學生。", py: "Wǒ shì Guólì Táinán Dàxué de xuéshēng.", vn: "Tôi là sinh viên của Đại học Quốc gia Đài Nam." },
      { tc: "週末我們坐火車去臺南吃小吃。", py: "Zhōumò wǒmen zuò huǒchē qù Táinán chī xiǎochī.", vn: "Cuối tuần chúng ta đi xe lửa đến Đài Nam ăn vặt." }
    ],
    idiom: "南來北往 (Nán lái běi wǎng) - Kẻ Nam người Bắc (Đi lại tấp nập).", level: "TOCFL A"
  },
  {
    word: "高鐵", pinyin: "gāotiě", ipa: "kaʊ⁵⁵ tʰjɛ²¹⁴", hanViet: "Cao thiết",
    image: "",
    radical: "高 (Bộ Cao 高), 鐵 (Bộ Kim 金 - sắt thép).",
    explanation: "Danh từ: Tàu cao tốc (Viết tắt của 高速鐵路 - Hệ thống tàu chạy cực nhanh dọc bờ Tây Đài Loan).",
    compounds: [
      { tc: "坐高鐵", py: "zuò gāotiě", vn: "đi tàu cao tốc" },
      { tc: "高鐵站", py: "gāotiě zhàn", vn: "ga tàu cao tốc" },
      { tc: "高鐵票", py: "gāotiě piào", vn: "vé tàu cao tốc" }
    ],
    examples: [
      { tc: "從台北坐高鐵到臺南非常快。", py: "Cóng Táiběi zuò gāotiě dào Táinán fēicháng kuài.", vn: "Từ Đài Bắc đi tàu cao tốc đến Đài Nam vô cùng nhanh." },
      { tc: "高鐵票比較貴，但是很舒服。", py: "Gāotiě piào bǐjiào guì, dànshì hěn shūfú.", vn: "Vé tàu cao tốc khá đắt, nhưng rất thoải mái." }
    ],
    idiom: "鐵面無私 (Tiě miàn wú sī) - Thiết diện vô tư (Mặt sắt nghiêm minh).", level: "TOCFL A"
  },
  {
    word: "網路上", pinyin: "wǎnglù shàng", ipa: "waŋ²¹⁴ lu⁵¹ ʂaŋ⁵¹", hanViet: "Võng lộ thượng",
    image: "",
    radical: "Ghép từ chữ Võng (網), Lộ (路), Thượng (上).",
    explanation: "Cụm từ: Trên mạng, trên internet.",
    compounds: [
      { tc: "上網", py: "shàngwǎng", vn: "lên mạng" },
      { tc: "網路", py: "wǎnglù", vn: "internet/mạng" }
    ],
    examples: [
      { tc: "我們可以在網路上買高鐵票。", py: "Wǒmen kěyǐ zài wǎnglù shàng mǎi gāotiě piào.", vn: "Chúng ta có thể mua vé tàu cao tốc ở trên mạng." },
      { tc: "網路上有很多有趣的影片。", py: "Wǎnglù shàng yǒu hěnduō yǒuqù de yǐngpiàn.", vn: "Trên mạng có rất nhiều video thú vị." }
    ],
    idiom: "天羅地網 (Tiān luó dì wǎng) - Thiên la địa võng.", level: "TOCFL A"
  },
  {
    word: "便利商店", pinyin: "biànlì shāngdiàn", ipa: "pjɛn⁵¹ li⁵¹ ʂaŋ⁵⁵ tjɛn⁵¹", hanViet: "Tiện lợi thương điếm",
    image: "",
    radical: "Ghép từ Tiện (便), Lợi (利), Thương (商), Điếm (店).",
    explanation: "Danh từ: Cửa hàng tiện lợi (Như 7-Eleven, FamilyMart, cực kỳ dày đặc ở Đài Loan).",
    compounds: [
      { tc: "商店", py: "shāngdiàn", vn: "cửa hàng" },
      { tc: "很便利", py: "hěn biànlì", vn: "rất tiện lợi" }
    ],
    examples: [
      { tc: "台灣的便利商店很方便。", py: "Táiwān de biànlì shāngdiàn hěn fāngbiàn.", vn: "Cửa hàng tiện lợi ở Đài Loan rất thuận tiện." },
      { tc: "我去便利商店買一杯咖啡。", py: "Wǒ qù biànlì shāngdiàn mǎi yì bēi kāfēi.", vn: "Tôi đi cửa hàng tiện lợi mua một ly cà phê." }
    ],
    idiom: "無 (Danh từ địa điểm).", level: "TOCFL A"
  },
  // ==========================================
  // --- TỪ VỰNG BÀI 9 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 (BẢN NHIỀU VÍ DỤ) ---
  // ==========================================
  {
    word: "星期", pinyin: "xīngqí", ipa: "ɕiŋ⁵⁵ tɕʰi³⁵", hanViet: "Tinh kỳ",
    image: "",
    radical: "星 (Bộ Nhật 日), 期 (Bộ Nguyệt 月 - chu kỳ mặt trăng).",
    explanation: "Danh từ: Tuần, thứ (trong tuần).",
    compounds: [
      { tc: "下個星期", py: "xià ge xīngqí", vn: "tuần sau" }, 
      { tc: "星期一", py: "xīngqíyī", vn: "thứ hai" },
      { tc: "週末", py: "zhōumò", vn: "cuối tuần" },
      { tc: "星期天", py: "xīngqítiān", vn: "chủ nhật" }
    ],
    examples: [
      { tc: "這個星期我很忙。", py: "Zhège xīngqí wǒ hěn máng.", vn: "Tuần này tôi rất bận." },
      { tc: "你下個星期有空嗎？", py: "Nǐ xià ge xīngqí yǒu kòng ma?", vn: "Tuần sau bạn có rảnh không?" },
      { tc: "請問，今天是星期幾？", py: "Qǐngwèn, jīntiān shì xīngqí jǐ?", vn: "Xin hỏi, hôm nay là thứ mấy?" }
    ],
    idiom: "遙遙無期 (Yáo yáo wú qī) - Xa xôi vô thời hạn.", level: "TOCFL A"
  },
  {
    word: "回國", pinyin: "huíguó", ipa: "xweɪ³⁵ kwɔ³⁵", hanViet: "Hồi quốc",
    image: "",
    radical: "回 (Bộ Vi 囗 - bao quanh), 國 (Bộ Vi 囗).",
    explanation: "Động từ (ly hợp): Về nước.",
    compounds: [
      { tc: "回家", py: "huíjiā", vn: "về nhà" },
      { tc: "回來", py: "huílái", vn: "trở lại" },
      { tc: "出國", py: "chūguó", vn: "xuất ngoại/đi nước ngoài" }
    ],
    examples: [
      { tc: "你打算什麼時候回國？", py: "Nǐ dǎsuàn shénme shíhòu huíguó?", vn: "Bạn dự định khi nào về nước?" },
      { tc: "我下個月就要回國了。", py: "Wǒ xià ge yuè jiù yào huíguó le.", vn: "Tháng sau tôi chuẩn bị về nước rồi." }
    ],
    idiom: "滿載而歸 (Mǎn zài ér guī) - Chở đầy thành quả trở về.", level: "TOCFL A"
  },
  {
    word: "打算", pinyin: "dǎsuàn", ipa: "ta²¹⁴ swan⁵¹", hanViet: "Đả toán",
    image: "",
    radical: "打 (Bộ Thủ 扌), 算 (Bộ Trúc 竹 - dùng thẻ trúc để tính toán).",
    explanation: "Động từ / Danh từ: Dự định, lên kế hoạch.",
    compounds: [
      { tc: "打算去", py: "dǎsuàn qù", vn: "dự định đi" },
      { tc: "好打算", py: "hǎo dǎsuàn", vn: "kế hoạch hay" },
      { tc: "計算", py: "jìsuàn", vn: "tính toán" }
    ],
    examples: [
      { tc: "週末你打算做什麼？", py: "Zhōumò nǐ dǎsuàn zuò shénme?", vn: "Cuối tuần bạn dự định làm gì?" },
      { tc: "我打算去花蓮旅行。", py: "Wǒ dǎsuàn qù Huālián lǚxíng.", vn: "Tôi dự định đi Hoa Liên du lịch." },
      { tc: "他打算買一支新手機。", py: "Tā dǎsuàn mǎi yì zhī xīn shǒujī.", vn: "Anh ấy dự định mua một chiếc điện thoại mới." }
    ],
    idiom: "精打細算 (Jīng dǎ xì suàn) - Tính toán chi li, cẩn thận.", level: "TOCFL A"
  },
  {
    word: "電視", pinyin: "diànshì", ipa: "tjɛn⁵¹ ʂɨ⁵¹", hanViet: "Điện thị",
    image: "",
    radical: "電 (Bộ Vũ 雨 - sấm chớp), 視 (Bộ Kiến 見 - nhìn).",
    explanation: "Danh từ: Tivi, vô tuyến truyền hình.",
    compounds: [
      { tc: "看電視", py: "kàn diànshì", vn: "xem tivi" },
      { tc: "電視機", py: "diànshìjī", vn: "cái tivi" },
      { tc: "電視節目", py: "diànshì jiémù", vn: "chương trình tivi" }
    ],
    examples: [
      { tc: "我不常看電視。", py: "Wǒ bù cháng kàn diànshì.", vn: "Tôi không thường xem tivi." },
      { tc: "晚上我們一起在家看電視吧。", py: "Wǎnshàng wǒmen yìqǐ zài jiā kàn diànshì ba.", vn: "Buổi tối chúng ta cùng ở nhà xem tivi nhé." }
    ],
    idiom: "視而不見 (Shì ér bú jiàn) - Nhìn mà như không thấy.", level: "TOCFL A"
  },
  {
    word: "影片", pinyin: "yǐngpiàn", ipa: "iŋ²¹⁴ pʰjɛn⁵¹", hanViet: "Ảnh phiến",
    image: "",
    radical: "影 (Bộ Sam 彡 - hình bóng), 片 (Bộ Phiến 片 - tấm, mảnh).",
    explanation: "Danh từ: Phim, đoạn video.",
    compounds: [
      { tc: "看影片", py: "kàn yǐngpiàn", vn: "xem video" },
      { tc: "拍影片", py: "pāi yǐngpiàn", vn: "quay video" },
      { tc: "紀錄片", py: "jìlùpiàn", vn: "phim tài liệu" }
    ],
    examples: [
      { tc: "這部影片很有意思。", py: "Zhè bù yǐngpiàn hěn yǒu yìsi.", vn: "Đoạn video này rất thú vị." },
      { tc: "你喜歡看什麼影片？", py: "Nǐ xǐhuān kàn shénme yǐngpiàn?", vn: "Bạn thích xem thể loại video gì?" }
    ],
    idiom: "捕風捉影 (Bǔ fēng zhuō yǐng) - Bắt gió vồ bóng (Chuyện không có căn cứ).", level: "TOCFL A"
  },
  {
    word: "旅行", pinyin: "lǚxíng", ipa: "ly²¹⁴ ɕiŋ³⁵", hanViet: "Lữ hành",
    image: "",
    radical: "旅 (Bộ Phương 方), 行 (Bộ Hành 行).",
    explanation: "Động từ: Đi du lịch.",
    compounds: [
      { tc: "去旅行", py: "qù lǚxíng", vn: "đi du lịch" },
      { tc: "旅行社", py: "lǚxíngshè", vn: "công ty du lịch" },
      { tc: "旅遊", py: "lǚyóu", vn: "du lịch (nói chung)" }
    ],
    examples: [
      { tc: "我打算去花蓮旅行。", py: "Wǒ dǎsuàn qù Huālián lǚxíng.", vn: "Tôi dự định đi Hoa Liên du lịch." },
      { tc: "他常常一個人去旅行。", py: "Tā chángcháng yí gè rén qù lǚxíng.", vn: "Anh ấy thường xuyên đi du lịch một mình." },
      { tc: "旅行可以認識很多新朋友。", py: "Lǚxíng kěyǐ rènshí hěnduō xīn péngyǒu.", vn: "Đi du lịch có thể làm quen được nhiều bạn mới." }
    ],
    idiom: "讀萬卷書，行萬里路 (Dú wàn juǎn shū, xíng wàn lǐ lù) - Đọc vạn cuốn sách, đi vạn dặm đường.", level: "TOCFL A"
  },
  {
    word: "功課", pinyin: "gōngkè", ipa: "kʊŋ⁵⁵ kʰɤ⁵¹", hanViet: "Công khóa",
    image: "",
    radical: "功 (Bộ Lực 力 - nỗ lực), 課 (Bộ Ngôn 言).",
    explanation: "Danh từ: Bài tập về nhà.",
    compounds: [
      { tc: "寫功課", py: "xiě gōngkè", vn: "làm bài tập" },
      { tc: "做功課", py: "zuò gōngkè", vn: "làm bài tập" },
      { tc: "課本", py: "kèběn", vn: "sách giáo khoa" }
    ],
    examples: [
      { tc: "今天的功課很多。", py: "Jīntiān de gōngkè hěnduō.", vn: "Bài tập hôm nay rất nhiều." },
      { tc: "我還沒寫完中文功課。", py: "Wǒ hái méi xiě wán Zhōngwén gōngkè.", vn: "Tôi vẫn chưa viết xong bài tập tiếng Trung." }
    ],
    idiom: "事半功倍 (Shì bàn gōng bèi) - Làm ít công to.", level: "TOCFL A"
  },
  {
    word: "出去", pinyin: "chūqù", ipa: "tʂʰu⁵⁵ tɕʰy⁵¹", hanViet: "Xuất khứ",
    image: "",
    radical: "出 (Bộ Khảm 凵), 去 (Bộ Tư 厶).",
    explanation: "Động từ: Đi ra ngoài.",
    compounds: [
      { tc: "出門", py: "chūmén", vn: "ra khỏi nhà" },
      { tc: "出來", py: "chūlái", vn: "ra đây" },
      { tc: "出國", py: "chūguó", vn: "ra nước ngoài" }
    ],
    examples: [
      { tc: "外面很熱，我不想出去。", py: "Wàimiàn hěn rè, wǒ bù xiǎng chūqù.", vn: "Bên ngoài rất nóng, tôi không muốn ra ngoài." },
      { tc: "週末我打算跟朋友出去玩。", py: "Zhōumò wǒ dǎsuàn gēn péngyǒu chūqù wán.", vn: "Cuối tuần tôi dự định cùng bạn bè ra ngoài chơi." }
    ],
    idiom: "脫口而出 (Tuō kǒu ér chū) - Buột miệng thốt ra.", level: "TOCFL A"
  },
  {
    word: "大概", pinyin: "dàgài", ipa: "ta⁵¹ kaɪ⁵¹", hanViet: "Đại khái",
    image: "",
    radical: "大 (Bộ Đại 大), 概 (Bộ Mộc 木).",
    explanation: "Phó từ: Khoảng, ước chừng, đại khái, có lẽ.",
    compounds: [
      { tc: "大約", py: "dàyuē", vn: "khoảng chừng" },
      { tc: "大概是", py: "dàgài shì", vn: "có lẽ là" }
    ],
    examples: [
      { tc: "從這裡到圖書館大概要十分鐘。", py: "Cóng zhèlǐ dào túshūguǎn dàgài yào shí fēnzhōng.", vn: "Từ đây đến thư viện mất khoảng 10 phút." },
      { tc: "這支新手機大概多少錢？", py: "Zhè zhī xīn shǒujī dàgài duōshǎo qián?", vn: "Chiếc điện thoại mới này khoảng bao nhiêu tiền?" }
    ],
    idiom: "粗枝大葉 (Cū zhī dà yè) - Sơ sài, đại khái, không tỉ mỉ.", level: "TOCFL A"
  },
  {
    word: "放假", pinyin: "fàngjià", ipa: "faŋ⁵¹ tɕja⁵¹", hanViet: "Phóng giả",
    image: "",
    radical: "放 (Bộ Phộc 攵), 假 (Bộ Nhân 亻).",
    explanation: "Động từ (ly hợp): Nghỉ lễ, được nghỉ học/nghỉ làm.",
    compounds: [
      { tc: "放假了", py: "fàngjià le", vn: "được nghỉ rồi" },
      { tc: "寒假", py: "hánjià", vn: "nghỉ đông" },
      { tc: "暑假", py: "shǔjià", vn: "nghỉ hè" },
      { tc: "請假", py: "qǐngjià", vn: "xin nghỉ" }
    ],
    examples: [
      { tc: "下個星期學校放假。", py: "Xià ge xīngqí xuéxiào fàngjià.", vn: "Tuần sau trường học được nghỉ." },
      { tc: "放假的時候你打算去哪裡？", py: "Fàngjià de shíhòu nǐ dǎsuàn qù nǎlǐ?", vn: "Lúc được nghỉ bạn dự định đi đâu?" },
      { tc: "太好了，明天放假！", py: "Tài hǎo le, míngtiān fàngjià!", vn: "Tuyệt quá, ngày mai được nghỉ!" }
    ],
    idiom: "半真半假 (Bàn zhēn bàn jiǎ) - Nửa thật nửa giả.", level: "TOCFL A"
  },
  {
    word: "下個星期", pinyin: "xià ge xīngqí", ipa: "ɕja⁵¹ kɤ ɕiŋ⁵⁵ tɕʰi³⁵", hanViet: "Hạ cá tinh kỳ",
    image: "",
    radical: "Ghép từ chữ Hạ (下), Cá (個), Tinh (星), Kỳ (期).",
    explanation: "Danh từ thời gian: Tuần sau.",
    compounds: [
      { tc: "上個星期", py: "shàng ge xīngqí", vn: "tuần trước" },
      { tc: "這個星期", py: "zhège xīngqí", vn: "tuần này" },
      { tc: "下個月", py: "xià ge yuè", vn: "tháng sau" }
    ],
    examples: [
      { tc: "下個星期我有籃球比賽。", py: "Xià ge xīngqí wǒ yǒu lánqiú bǐsài.", vn: "Tuần sau tôi có trận đấu bóng rổ." },
      { tc: "我們下個星期見。", py: "Wǒmen xià ge xīngqí jiàn.", vn: "Chúng ta hẹn gặp vào tuần sau." }
    ],
    idiom: "無 (Cụm từ thông dụng).", level: "TOCFL A"
  },
  {
    word: "有時候", pinyin: "yǒu shíhòu", ipa: "joʊ²¹⁴ ʂɨ³⁵ xoʊ⁵¹", hanViet: "Hữu thời hậu",
    image: "",
    radical: "Ghép từ chữ Hữu (有), Thời (時), Hậu (候).",
    explanation: "Trạng từ thời gian: Có lúc, thỉnh thoảng.",
    compounds: [
      { tc: "有的時候", py: "yǒu de shíhòu", vn: "có những lúc" },
      { tc: "什麼時候", py: "shénme shíhòu", vn: "khi nào" }
    ],
    examples: [
      { tc: "週末我有時候去看電影。", py: "Zhōumò wǒ yǒu shíhòu qù kàn diànyǐng.", vn: "Cuối tuần thỉnh thoảng tôi đi xem phim." },
      { tc: "我有時候自己做飯，有時候去外面吃。", py: "Wǒ yǒu shíhòu zìjǐ zuòfàn, yǒu shíhòu qù wàimiàn chī.", vn: "Có lúc tôi tự nấu ăn, có lúc lại ra ngoài ăn." }
    ],
    idiom: "無 (Cụm từ thông dụng).", level: "TOCFL A"
  },
  {
    word: "多久", pinyin: "duō jiǔ", ipa: "twɔ⁵⁵ tɕjoʊ²¹⁴", hanViet: "Đa cửu",
    image: "",
    radical: "多 (Bộ Tịch 夕), 久 (Bộ Phiệt 丿 - thời gian lâu dài).",
    explanation: "Đại từ nghi vấn: Bao lâu (hỏi về khoảng thời gian).",
    compounds: [
      { tc: "很久", py: "hěn jiǔ", vn: "rất lâu" },
      { tc: "不久", py: "bù jiǔ", vn: "không lâu" },
      { tc: "好久不見", py: "hǎo jiǔ bú jiàn", vn: "lâu rồi không gặp" }
    ],
    examples: [
      { tc: "你學中文學了多久？", py: "Nǐ xué Zhōngwén xué le duō jiǔ?", vn: "Bạn học tiếng Trung được bao lâu rồi?" },
      { tc: "從台北到台東要多久？", py: "Cóng Táiběi dào Táidōng yào duō jiǔ?", vn: "Từ Đài Bắc đến Đài Đông mất bao lâu?" }
    ],
    idiom: "天長地久 (Tiān cháng dì jiǔ) - Thiên trường địa cửu (Dài lâu như trời đất).", level: "TOCFL A"
  },
  {
    word: "臺東 / 台東", pinyin: "Táidōng", ipa: "tʰaɪ³⁵ tʊŋ⁵⁵", hanViet: "Đài Đông",
    image: "",
    radical: "台 (Bộ Khẩu 口), 東 (Bộ Mộc 木 - phương Đông).",
    explanation: "Danh từ riêng: Đài Đông (Tên một thành phố ven biển tuyệt đẹp ở miền Đông Nam Đài Loan).",
    compounds: [
      { tc: "去台東玩", py: "qù Táidōng wán", vn: "đi Đài Đông chơi" },
      { tc: "台東人", py: "Táidōng rén", vn: "người Đài Đông" },
      { tc: "台北", py: "Táiběi", vn: "Đài Bắc" }
    ],
    examples: [
      { tc: "台東的風景很漂亮。", py: "Táidōng de fēngjǐng hěn piàoliang.", vn: "Phong cảnh của Đài Đông rất đẹp." },
      { tc: "我下個月要去台東旅行。", py: "Wǒ xià ge yuè yào qù Táidōng lǚxíng.", vn: "Tháng sau tôi sẽ đi Đài Đông du lịch." }
    ],
    idiom: "東張西望 (Dōng zhāng xī wàng) - Nhìn đông ngó tây.", level: "TOCFL A"
  },
  {
    word: "女", pinyin: "nǚ", ipa: "ny²¹⁴", hanViet: "Nữ",
    image: "",
    radical: "Bộ Nữ (女) - Hình dáng người phụ nữ đang ngồi vắt chéo chân.",
    explanation: "Danh từ: Nữ giới, con gái (Thường dùng ghép với danh từ khác).",
    compounds: [
      { tc: "女孩", py: "nǚhái", vn: "bé gái/cô gái" },
      { tc: "女學生", py: "nǚ xuéshēng", vn: "nữ sinh" },
      { tc: "女朋友", py: "nǚ péngyǒu", vn: "bạn gái" },
      { tc: "女人", py: "nǚrén", vn: "phụ nữ" }
    ],
    examples: [
      { tc: "那個女學生是越南人。", py: "Nà gè nǚ xuéshēng shì Yuènán rén.", vn: "Nữ sinh kia là người Việt Nam." },
      { tc: "她是我哥哥的女朋友。", py: "Tā shì wǒ gēge de nǚ péngyǒu.", vn: "Cô ấy là bạn gái của anh trai tôi." }
    ],
    idiom: "男尊女卑 (Nán zūn nǚ bēi) - Trọng nam khinh nữ.", level: "TOCFL A"
  },
  {
    word: "月", pinyin: "yuè", ipa: "ɥɛ⁵¹", hanViet: "Nguyệt",
    image: "",
    radical: "Bộ Nguyệt (月) - Mặt trăng. Thời xưa tính tháng dựa theo chu kỳ mặt trăng.",
    explanation: "Danh từ / Lượng từ: Tháng.",
    compounds: [
      { tc: "幾月", py: "jǐ yuè", vn: "tháng mấy" },
      { tc: "一個月", py: "yí gè yuè", vn: "một tháng" },
      { tc: "每個月", py: "měi gè yuè", vn: "mỗi tháng" },
      { tc: "月亮", py: "yuèliàng", vn: "mặt trăng" }
    ],
    examples: [
      { tc: "現在是五月。", py: "Xiànzài shì wǔ yuè.", vn: "Bây giờ là tháng Năm." },
      { tc: "他去美國兩個月了。", py: "Tā qù Měiguó liǎng gè yuè le.", vn: "Anh ấy đi Mỹ được 2 tháng rồi." }
    ],
    idiom: "日積月累 (Rì jī yuè lěi) - Tích tiểu thành đại (Tích lũy theo năm tháng).", level: "TOCFL A"
  },
  {
    word: "號", pinyin: "hào", ipa: "xaʊ⁵¹", hanViet: "Hiệu",
    image: "",
    radical: "Bộ Hổ (虍) - Con hổ. Dùng để đánh dấu, gọi tên.",
    explanation: "Danh từ: Ngày (trong tháng, dùng trong khẩu ngữ).",
    compounds: [
      { tc: "幾號", py: "jǐ hào", vn: "ngày mấy" },
      { tc: "號碼", py: "hàomǎ", vn: "số hiệu / mã số" },
      { tc: "手機號", py: "shǒujī hào", vn: "số điện thoại" }
    ],
    examples: [
      { tc: "今天是五月一號。", py: "Jīntiān shì wǔ yuè yī hào.", vn: "Hôm nay là ngày 1 tháng 5." },
      { tc: "請問你的手機號碼是幾號？", py: "Qǐngwèn nǐ de shǒujī hàomǎ shì jǐ hào?", vn: "Xin hỏi số điện thoại của bạn là bao nhiêu?" }
    ],
    idiom: "發號施令 (Fā hào shī lìng) - Phát hiệu thi lệnh (Ra lệnh).", level: "TOCFL A"
  },
  {
    word: "帶", pinyin: "dài", ipa: "taɪ⁵¹", hanViet: "Đới",
    image: "",
    radical: "Bộ Cân (巾) - Khăn vải. Nghĩa gốc là dây thắt lưng.",
    explanation: "Động từ: Dẫn, mang, đem theo.",
    compounds: [
      { tc: "帶去", py: "dài qù", vn: "mang đi" },
      { tc: "外帶", py: "wàidài", vn: "mang về (đồ ăn)" },
      { tc: "帶來", py: "dàilái", vn: "mang đến" },
      { tc: "帶走", py: "dàizǒu", vn: "đem đi" }
    ],
    examples: [
      { tc: "我帶你去夜市吃小吃。", py: "Wǒ dài nǐ qù yèshì chī xiǎochī.", vn: "Tôi dẫn bạn đi chợ đêm ăn đồ vặt." },
      { tc: "明天出門記得帶雨傘。", py: "Míngtiān chūmén jìdé dài yǔsǎn.", vn: "Ngày mai ra khỏi nhà nhớ mang theo ô." },
      { tc: "老闆，我要外帶。", py: "Lǎobǎn, wǒ yào wàidài.", vn: "Ông chủ, tôi muốn mua mang đi." }
    ],
    idiom: "拖泥帶水 (Tuō ní dài shuǐ) - Dây dưa lề mề (Kéo bùn mang nước).", level: "TOCFL A"
  },
  {
    word: "她", pinyin: "tā", ipa: "tʰa⁵⁵", hanViet: "Tha",
    image: "",
    radical: "Bộ Nữ (女) - Dành riêng cho phái nữ. Bên phải là chữ Dã (也).",
    explanation: "Đại từ: Cô ấy, bà ấy, chị ấy.",
    compounds: [
      { tc: "她們", py: "tāmen", vn: "các cô ấy" },
      { tc: "她的", py: "tā de", vn: "của cô ấy" },
      { tc: "她自己", py: "tā zìjǐ", vn: "chính cô ấy" }
    ],
    examples: [
      { tc: "她是我的好朋友。", py: "Tā shì wǒ de hǎo péngyǒu.", vn: "Cô ấy là bạn tốt của tôi." },
      { tc: "她的中文說得很好。", py: "Tā de Zhōngwén shuō de hěn hǎo.", vn: "Cô ấy nói tiếng Trung rất giỏi." }
    ],
    idiom: "無 (Dùng chung với 他).", level: "TOCFL A"
  },
  {
    word: "還", pinyin: "hái", ipa: "xaɪ³⁵", hanViet: "Hoàn",
    image: "",
    radical: "Bộ Sước (辶) - Bước đi.",
    explanation: "Phó từ: Vẫn, vẫn còn, ngoài ra còn.",
    compounds: [
      { tc: "還有", py: "háiyǒu", vn: "vẫn còn / ngoài ra" },
      { tc: "還是", py: "háishì", vn: "hay là" },
      { tc: "還沒", py: "hái méi", vn: "vẫn chưa" },
      { tc: "還要", py: "hái yào", vn: "vẫn muốn" }
    ],
    examples: [
      { tc: "我還沒寫功課。", py: "Wǒ hái méi xiě gōngkè.", vn: "Tôi vẫn chưa làm bài tập." },
      { tc: "你想喝茶還是咖啡？", py: "Nǐ xiǎng hē chá háishì kāfēi?", vn: "Bạn muốn uống trà hay uống cà phê?" },
      { tc: "我還要買一杯烏龍茶。", py: "Wǒ hái yào mǎi yì bēi wūlóngchá.", vn: "Tôi còn muốn mua thêm một ly trà Ô Long." }
    ],
    idiom: "討價還價 (Tǎo jià huán jià) - Mặc cả, trả giá.", level: "TOCFL A"
  },
  {
    word: "建議", pinyin: "jiànyì", ipa: "tɕjɛn⁵¹ i⁵¹", hanViet: "Kiến nghị",
    image: "",
    radical: "建 (Bộ Dẫn 廴), 議 (Bộ Ngôn 言).",
    explanation: "Động từ / Danh từ: Đề nghị, gợi ý.",
    compounds: [
      { tc: "好建議", py: "hǎo jiànyì", vn: "gợi ý hay" },
      { tc: "給建議", py: "gěi jiànyì", vn: "đưa ra lời khuyên" },
      { tc: "提議", py: "tíyì", vn: "đề xướng" }
    ],
    examples: [
      { tc: "我建議你去花蓮旅行。", py: "Wǒ jiànyì nǐ qù Huālián lǚxíng.", vn: "Tôi đề nghị bạn đi Hoa Liên du lịch." },
      { tc: "謝謝你的好建議。", py: "Xièxie nǐ de hǎo jiànyì.", vn: "Cảm ơn lời khuyên rất hay của bạn." }
    ],
    idiom: "不可思議 (Bù kě sī yì) - Không thể tưởng tượng nổi.", level: "TOCFL A"
  },
  {
    word: "夜市", pinyin: "yèshì", ipa: "jɛ⁵¹ ʂɨ⁵¹", hanViet: "Dạ thị",
    image: "",
    radical: "夜 (Bộ Tịch 夕 - ban đêm), 市 (Bộ Cân 巾).",
    explanation: "Danh từ: Chợ đêm (Nét văn hóa đặc trưng nhất của Đài Loan).",
    compounds: [
      { tc: "逛夜市", py: "guàng yèshì", vn: "dạo chợ đêm" },
      { tc: "夜市小吃", py: "yèshì xiǎochī", vn: "đồ ăn vặt chợ đêm" },
      { tc: "超市", py: "chāoshì", vn: "siêu thị" }
    ],
    examples: [
      { tc: "台灣的夜市很有名。", py: "Táiwān de yèshì hěn yǒumíng.", vn: "Chợ đêm Đài Loan rất nổi tiếng." },
      { tc: "週末我們一起去逛夜市吧。", py: "Zhōumò wǒmen yìqǐ qù guàng yèshì ba.", vn: "Cuối tuần chúng ta cùng đi dạo chợ đêm nhé." }
    ],
    idiom: "門庭若市 (Mén tíng ruò shì) - Khách đông như họp chợ.", level: "TOCFL A"
  },
  {
    word: "應該", pinyin: "yīnggāi", ipa: "iŋ⁵⁵ kaɪ⁵⁵", hanViet: "Ưng cai",
    image: "",
    radical: "應 (Bộ Tâm 心), 該 (Bộ Ngôn 言).",
    explanation: "Động từ năng nguyện: Nên, phải.",
    compounds: [
      { tc: "不應該", py: "bù yīnggāi", vn: "không nên" },
      { tc: "答應", py: "dāyìng", vn: "đồng ý / hứa" },
      { tc: "該做", py: "gāi zuò", vn: "nên làm" }
    ],
    examples: [
      { tc: "你應該多學一點中文。", py: "Nǐ yīnggāi duō xué yìdiǎn Zhōngwén.", vn: "Bạn nên học nhiều tiếng Trung hơn một chút." },
      { tc: "已經十二點了，我應該回家了。", py: "Yǐjīng shí'èr diǎn le, wǒ yīnggāi huíjiā le.", vn: "Đã mười hai giờ rồi, tôi nên về nhà thôi." }
    ],
    idiom: "理所當然 (Lǐ suǒ dāng rán) - Lẽ dĩ nhiên (Điều nên làm).", level: "TOCFL A"
  },
  {
    word: "逛", pinyin: "guàng", ipa: "kwaŋ⁵¹", hanViet: "Cuống",
    image: "",
    radical: "Bộ Sước (辶) - Bước đi tản mạn. Bên trong là chữ Cuồng (狂).",
    explanation: "Động từ: Đi dạo, đi chơi, lượn phố.",
    compounds: [
      { tc: "逛街", py: "guàngjiē", vn: "dạo phố" },
      { tc: "逛夜市", py: "guàng yèshì", vn: "dạo chợ đêm" },
      { tc: "閒逛", py: "xiánguàng", vn: "đi dạo thong dong" },
      { tc: "逛逛", py: "guàngguang", vn: "đi dạo một vòng" }
    ],
    examples: [
      { tc: "週末我喜歡跟朋友去逛街。", py: "Zhōumò wǒ xǐhuān gēn péngyǒu qù guàngjiē.", vn: "Cuối tuần tôi thích cùng bạn bè đi dạo phố." },
      { tc: "我們去百貨公司逛逛吧。", py: "Wǒmen qù bǎihuò gōngsī guàngguang ba.", vn: "Chúng ta tới trung tâm thương mại lượn lờ chút đi." }
    ],
    idiom: "閒逛 (Xián guàng) - Đi dạo nhẩn nha.", level: "TOCFL A"
  },
  {
    word: "特別", pinyin: "tèbié", ipa: "tʰɤ⁵¹ pjɛ³⁵", hanViet: "Đặc biệt",
    image: "",
    radical: "特 (Bộ Ngưu 牛), 別 (Bộ Đao 刂).",
    explanation: "Tính từ / Phó từ: Đặc biệt, vô cùng.",
    compounds: [
      { tc: "很特別", py: "hěn tèbié", vn: "rất đặc biệt" },
      { tc: "特別好", py: "tèbié hǎo", vn: "đặc biệt tốt" },
      { tc: "特色", py: "tèsè", vn: "đặc sắc" },
      { tc: "別的", py: "biéde", vn: "cái khác" }
    ],
    examples: [
      { tc: "臭豆腐的味道很特別。", py: "Chòu dòufǔ de wèidào hěn tèbié.", vn: "Mùi vị của đậu phụ thối rất đặc biệt." },
      { tc: "這家餐廳的牛肉麵特別好吃。", py: "Zhè jiā cāntīng de niúròumiàn tèbié hǎochī.", vn: "Mì bò của nhà hàng này đặc biệt ngon." }
    ],
    idiom: "與眾不同 (Yǔ zhòng bù tóng) - Khác biệt với số đông.", level: "TOCFL A"
  },
  {
    word: "茶館", pinyin: "cháguǎn", ipa: "tʂʰa³⁵ kwan²¹⁴", hanViet: "Trà quán",
    image: "",
    radical: "茶 (Bộ Thảo 艹), 館 (Bộ Thực 飠- nơi kinh doanh đồ ăn uống).",
    explanation: "Danh từ: Quán trà, phòng trà.",
    compounds: [
      { tc: "去茶館", py: "qù cháguǎn", vn: "đi quán trà" },
      { tc: "喝茶", py: "hē chá", vn: "uống trà" },
      { tc: "圖書館", py: "túshūguǎn", vn: "thư viện" },
      { tc: "飯館", py: "fànguǎn", vn: "quán ăn" },
      { tc: "咖啡館", py: "kāfēiguǎn", vn: "quán cà phê" }
    ],
    examples: [
      { tc: "我們去茶館喝茶吧。", py: "Wǒmen qù cháguǎn hē chá ba.", vn: "Chúng ta đến quán trà uống trà đi." },
      { tc: "這家茶館的風景很美。", py: "Zhè jiā cháguǎn de fēngjǐng hěn měi.", vn: "Phong cảnh của quán trà này rất đẹp." }
    ],
    idiom: "無 (Dùng trong sinh hoạt hàng ngày).", level: "TOCFL A"
  },
  {
    word: "決定", pinyin: "juédìng", ipa: "tɕɥɛ³⁵ tiŋ⁵¹", hanViet: "Quyết định",
    image: "",
    radical: "決 (Bộ Thủy 氵), 定 (Bộ Miên 宀).",
    explanation: "Động từ / Danh từ: Quyết định.",
    compounds: [
      { tc: "好決定", py: "hǎo juédìng", vn: "quyết định tốt" },
      { tc: "決定去", py: "juédìng qù", vn: "quyết định đi" },
      { tc: "決心", py: "juéxīn", vn: "quyết tâm" },
      { tc: "肯定", py: "kěndìng", vn: "chắc chắn" }
    ],
    examples: [
      { tc: "我決定去台灣學中文。", py: "Wǒ juédìng qù Táiwān xué Zhōngwén.", vn: "Tôi quyết định đi Đài Loan học tiếng Trung." },
      { tc: "你決定週末要做什麼了嗎？", py: "Nǐ juédìng zhōumò yào zuò shénme le ma?", vn: "Bạn đã quyết định cuối tuần làm gì chưa?" }
    ],
    idiom: "猶豫不決 (Yóu yù bù jué) - Do dự không quyết.", level: "TOCFL A"
  },
  {
    word: "要是", pinyin: "yàoshì", ipa: "jaʊ⁵¹ ʂɨ⁵¹", hanViet: "Yếu thị",
    image: "",
    radical: "要 (Bộ Á 襾), 是 (Bộ Nhật 日).",
    explanation: "Liên từ: Nếu, nếu như (thường đi kèm với 就).",
    compounds: [
      { tc: "只要", py: "zhǐyào", vn: "chỉ cần" },
      { tc: "如果", py: "rúguǒ", vn: "nếu như" },
      { tc: "想要", py: "xiǎngyào", vn: "muốn" }
    ],
    examples: [
      { tc: "要是明天下雨，我們就不去。", py: "Yàoshì míngtiān xiàyǔ, wǒmen jiù bú qù.", vn: "Nếu như ngày mai trời mưa, chúng ta sẽ không đi." },
      { tc: "要是你沒空，我們下次再見。", py: "Yàoshì nǐ méi kòng, wǒmen xià cì zàijiàn.", vn: "Nếu như bạn không rảnh, chúng ta gặp lại vào lần sau." }
    ],
    idiom: "無 (Cụm từ thông dụng).", level: "TOCFL A"
  },
  {
    word: "就", pinyin: "jiù", ipa: "tɕjoʊ⁵¹", hanViet: "Tựu",
    image: "",
    radical: "Bộ Uông (尢) - Người có chân đi khập khiễng.",
    explanation: "Phó từ: Thì, liền, ngay (Nhấn mạnh kết quả hoặc sự việc xảy ra sớm).",
    compounds: [
      { tc: "就是", py: "jiù shì", vn: "chính là" },
      { tc: "就要", py: "jiù yào", vn: "sắp sửa" },
      { tc: "早就", py: "zǎo jiù", vn: "đã sớm" },
      { tc: "成就", py: "chéngjiù", vn: "thành tựu" }
    ],
    examples: [
      { tc: "你有空就來找我。", py: "Nǐ yǒu kòng jiù lái zhǎo wǒ.", vn: "Bạn rảnh thì đến tìm tôi nhé." },
      { tc: "吃了晚飯我們就去看電影。", py: "Chī le wǎnfàn wǒmen jiù qù kàn diànyǐng.", vn: "Ăn tối xong chúng ta liền đi xem phim." },
      { tc: "他就是我的老師。", py: "Tā jiù shì wǒ de lǎoshī.", vn: "Thầy ấy chính là giáo viên của tôi." }
    ],
    idiom: "按部就班 (Àn bù jiù bān) - Làm việc theo thứ tự, lớp lang.", level: "TOCFL A"
  },
  {
    word: "貓空", pinyin: "Māokōng", ipa: "maʊ⁵⁵ kʰʊŋ⁵⁵", hanViet: "Miêu Không",
    image: "",
    radical: "貓 (Bộ Khuyển 犭 - loài mèo/thú), 空 (Bộ Huyệt 穴 - hang động).",
    explanation: "Danh từ riêng: Miêu Không (Tên một khu vực ở ngoại ô Đài Bắc nổi tiếng với đồi chè, cáp treo và phòng trà).",
    compounds: [
      { tc: "去貓空喝茶", py: "qù Māokōng hē chá", vn: "đi Miêu Không uống trà" },
      { tc: "貓咪", py: "māomī", vn: "con mèo nhỏ" },
      { tc: "天空", py: "tiānkōng", vn: "bầu trời" }
    ],
    examples: [
      { tc: "週末我們去貓空喝茶看風景。", py: "Zhōumò wǒmen qù Māokōng hē chá kàn fēngjǐng.", vn: "Cuối tuần chúng ta đi Miêu Không uống trà ngắm cảnh nhé." },
      { tc: "貓空是台北很有名的地方。", py: "Māokōng shì Táiběi hěn yǒumíng de dìfāng.", vn: "Miêu Không là một nơi rất nổi tiếng ở Đài Bắc." }
    ],
    idiom: "無 (Danh từ riêng).", level: "TOCFL A"
  },
// ==========================================
  // --- TỪ VỰNG BÀI 10 - GIÁO TRÌNH ĐƯƠNG ĐẠI 1 (BẢN NHIỀU VÍ DỤ) ---
  // ==========================================
  {
    word: "水果", pinyin: "shuǐguǒ", ipa: "ʂweɪ²¹⁴ kwɔ²¹⁴", hanViet: "Thủy quả",
    image: "",
    radical: "水 (Bộ Thủy 水), 果 (Bộ Mộc 木 - trái cây mọc trên cây).",
    explanation: "Danh từ: Trái cây, hoa quả.",
    compounds: [
      { tc: "吃水果", py: "chī shuǐguǒ", vn: "ăn trái cây" },
      { tc: "水果店", py: "shuǐguǒ diàn", vn: "cửa hàng trái cây" },
      { tc: "買水果", py: "mǎi shuǐguǒ", vn: "mua trái cây" }
    ],
    examples: [
      { tc: "台灣的水果很好吃。", py: "Táiwān de shuǐguǒ hěn hǎochī.", vn: "Trái cây Đài Loan rất ngon." },
      { tc: "你最喜歡吃什麼水果？", py: "Nǐ zuì xǐhuān chī shénme shuǐguǒ?", vn: "Bạn thích ăn loại trái cây nào nhất?" },
      { tc: "多吃水果對身體好。", py: "Duō chī shuǐguǒ duì shēntǐ hǎo.", vn: "Ăn nhiều trái cây rất tốt cho cơ thể." }
    ],
    idiom: "開花結果 (Kāi huā jié guǒ) - Đơm hoa kết trái.", level: "TOCFL A"
  },
  {
    word: "黃色", pinyin: "huángsè", ipa: "xwaŋ³⁵ sɤ⁵¹", hanViet: "Hoàng sắc",
    image: "",
    radical: "黃 (Bộ Hoàng 黃), 色 (Bộ Sắc 色).",
    explanation: "Danh từ: Màu vàng.",
    compounds: [
      { tc: "黃牛", py: "huángniú", vn: "con bò vàng/kẻ đầu cơ" },
      { tc: "黃金", py: "huángjīn", vn: "vàng (kim loại)" },
      { tc: "顏色", py: "yánsè", vn: "màu sắc" }
    ],
    examples: [
      { tc: "我買了一件黃色的衣服。", py: "Wǒ mǎi le yí jiàn huángsè de yīfú.", vn: "Tôi đã mua một chiếc áo màu vàng." },
      { tc: "這個芒果是黃色的。", py: "Zhège mángguǒ shì huángsè de.", vn: "Quả xoài này màu vàng." }
    ],
    idiom: "黃道吉日 (Huáng dào jí rì) - Ngày hoàng đạo (Ngày tốt).", level: "TOCFL A"
  },
  {
    word: "芒果", pinyin: "mángguǒ", ipa: "maŋ³⁵ kwɔ²¹⁴", hanViet: "Mang quả",
    image: "",
    radical: "芒 (Bộ Thảo 艹), 果 (Bộ Mộc 木).",
    explanation: "Danh từ: Quả xoài.",
    compounds: [
      { tc: "芒果冰", py: "mángguǒ bīng", vn: "đá bào xoài" },
      { tc: "愛文芒果", py: "Àiwén mángguǒ", vn: "xoài Ái Văn (đặc sản Đài Nam)" },
      { tc: "芒果汁", py: "mángguǒ zhī", vn: "nước ép xoài" }
    ],
    examples: [
      { tc: "台南的愛文芒果特別有名。", py: "Táinán de Àiwén mángguǒ tèbié yǒumíng.", vn: "Xoài Ái Văn của Đài Nam đặc biệt nổi tiếng." },
      { tc: "夏天我最喜歡吃芒果冰。", py: "Xiàtiān wǒ zuì xǐhuān chī mángguǒ bīng.", vn: "Mùa hè tôi thích ăn đá bào xoài nhất." }
    ],
    idiom: "無 (Danh từ chỉ thực vật).", level: "TOCFL A"
  },
  {
    word: "給", pinyin: "gěi", ipa: "keɪ²¹⁴", hanViet: "Cấp",
    image: "",
    radical: "Bộ Mịch (糸) - Sợi tơ. Bên phải là chữ Hợp (合).",
    explanation: "Động từ / Giới từ: Cho, đưa cho.",
    compounds: [
      { tc: "給你", py: "gěi nǐ", vn: "cho bạn" },
      { tc: "交給", py: "jiāogěi", vn: "giao cho" },
      { tc: "給錢", py: "gěi qián", vn: "đưa tiền" }
    ],
    examples: [
      { tc: "這本書給你。", py: "Zhè běn shū gěi nǐ.", vn: "Quyển sách này cho bạn." },
      { tc: "請給我一杯咖啡。", py: "Qǐng gěi wǒ yì bēi kāfēi.", vn: "Xin cho tôi một ly cà phê." },
      { tc: "媽媽每個月都給我錢。", py: "Māma měi gè yuè dōu gěi wǒ qián.", vn: "Mẹ tháng nào cũng cho tôi tiền." }
    ],
    idiom: "自給自足 (Zì jǐ zì zú) - Tự cấp tự túc.", level: "TOCFL A"
  },
  {
    word: "塊", pinyin: "kuài", ipa: "kʰwaɪ⁵¹", hanViet: "Khối",
    image: "",
    radical: "Bộ Thổ (土) - Cục đất.",
    explanation: "Lượng từ: Miếng, mẩu, cục (Dùng cho bánh ngọt, thịt, dưa hấu...).",
    compounds: [
      { tc: "一塊蛋糕", py: "yí kuài dàngāo", vn: "một miếng bánh ngọt" },
      { tc: "一塊肉", py: "yí kuài ròu", vn: "một miếng thịt" },
      { tc: "兩塊西瓜", py: "liǎng kuài xīguā", vn: "hai miếng dưa hấu" }
    ],
    examples: [
      { tc: "請給我一塊西瓜。", py: "Qǐng gěi wǒ yí kuài xīguā.", vn: "Xin cho tôi một miếng dưa hấu." },
      { tc: "這塊牛肉很好吃。", py: "Zhè kuài niúròu hěn hǎochī.", vn: "Miếng thịt bò này rất ngon." }
    ],
    idiom: "大塊朵頤 (Dà kuài duǒ yí) - Ăn uống thỏa thích.", level: "TOCFL A"
  },
  {
    word: "香", pinyin: "xiāng", ipa: "ɕjaŋ⁵⁵", hanViet: "Hương",
    image: "",
    radical: "Bộ Hương (香) - Lúa (禾) vừa nấu chín có mùi thơm (甘).",
    explanation: "Tính từ: Thơm (Dùng cho món ăn, hoa, nước hoa).",
    compounds: [
      { tc: "很香", py: "hěn xiāng", vn: "rất thơm" },
      { tc: "香水", py: "xiāngshuǐ", vn: "nước hoa" },
      { tc: "香氣", py: "xiāngqì", vn: "hương thơm" }
    ],
    examples: [
      { tc: "這碗牛肉麵好香啊！", py: "Zhè wǎn niúròumiàn hǎo xiāng a!", vn: "Bát mì bò này thơm quá!" },
      { tc: "這杯茶有一點香。", py: "Zhè bēi chá yǒu yìdiǎn xiāng.", vn: "Ly trà này có chút mùi thơm." }
    ],
    idiom: "鳥語花香 (Niǎo yǔ huā xiāng) - Chim hót hoa thơm.", level: "TOCFL A"
  },
  {
    word: "甜", pinyin: "tián", ipa: "tʰjɛn³⁵", hanViet: "Điềm",
    image: "",
    radical: "Bộ Cam (甘) - Vị ngọt. Bên trái là chữ Thiệt (舌 - cái lưỡi). Dùng lưỡi nếm vị ngọt.",
    explanation: "Tính từ: Ngọt.",
    compounds: [
      { tc: "很甜", py: "hěn tián", vn: "rất ngọt" },
      { tc: "甜點", py: "tiándiǎn", vn: "tráng miệng" },
      { tc: "甜言蜜語", py: "tián yán mì yǔ", vn: "lời đường mật" }
    ],
    examples: [
      { tc: "台灣的水果很甜。", py: "Táiwān de shuǐguǒ hěn tián.", vn: "Trái cây Đài Loan rất ngọt." },
      { tc: "這杯烏龍茶太甜了。", py: "Zhè bēi wūlóngchá tài tián le.", vn: "Ly trà Ô long này ngọt quá." }
    ],
    idiom: "憶苦思甜 (Yì kǔ sī tián) - Ôn nghèo nhớ khổ (Nhớ lúc khổ để trân trọng lúc sướng).", level: "TOCFL A"
  },
  {
    word: "紅色", pinyin: "hóngsè", ipa: "xʊŋ³⁵ sɤ⁵¹", hanViet: "Hồng sắc",
    image: "",
    radical: "紅 (Bộ Mịch 糸), 色 (Bộ Sắc 色).",
    explanation: "Danh từ: Màu đỏ.",
    compounds: [
      { tc: "紅包", py: "hóngbāo", vn: "lì xì" },
      { tc: "紅茶", py: "hóngchá", vn: "hồng trà" },
      { tc: "大紅人", py: "dà hóng rén", vn: "người đang nổi tiếng" }
    ],
    examples: [
      { tc: "她穿了一件紅色的衣服。", py: "Tā chuān le yí jiàn hóngsè de yīfú.", vn: "Cô ấy mặc một chiếc áo màu đỏ." },
      { tc: "過年的時候，大家喜歡紅色。", py: "Guònián de shíhòu, dàjiā xǐhuān hóngsè.", vn: "Lúc ăn Tết, mọi người đều thích màu đỏ." }
    ],
    idiom: "紅顏薄命 (Hóng yán bó mìng) - Hồng nhan bạc phận.", level: "TOCFL A"
  },
  {
    word: "西瓜", pinyin: "xīguā", ipa: "ɕi⁵⁵ kwa⁵⁵", hanViet: "Tây qua",
    image: "",
    radical: "西 (Bộ Á 襾), 瓜 (Bộ Qua 瓜).",
    explanation: "Danh từ: Dưa hấu.",
    compounds: [
      { tc: "西瓜汁", py: "xīguā zhī", vn: "nước ép dưa hấu" },
      { tc: "吃西瓜", py: "chī xīguā", vn: "ăn dưa hấu" }
    ],
    examples: [
      { tc: "夏天吃西瓜很舒服。", py: "Xiàtiān chī xīguā hěn shūfú.", vn: "Mùa hè ăn dưa hấu rất thoải mái." },
      { tc: "老闆，請給我一杯西瓜汁。", py: "Lǎobǎn, qǐng gěi wǒ yì bēi xīguā zhī.", vn: "Ông chủ, xin cho tôi một ly nước ép dưa hấu." }
    ],
    idiom: "順藤摸瓜 (Shùn téng mō guā) - Lần theo dây leo tìm dưa (Thuận nước đẩy thuyền).", level: "TOCFL A"
  },
  {
    word: "吧", pinyin: "ba", ipa: "pa", hanViet: "Ba",
    image: "",
    radical: "Bộ Khẩu (口) - Trợ từ đặt ở cuối câu.",
    explanation: "Trợ từ: Chắc là... nhỉ? (Dùng cuối câu để biểu thị sự phỏng đoán).",
    compounds: [
      { tc: "是吧", py: "shì ba", vn: "đúng không" },
      { tc: "對吧", py: "duì ba", vn: "phải không" }
    ],
    examples: [
      { tc: "你是越南人吧？", py: "Nǐ shì Yuènán rén ba?", vn: "Bạn là người Việt Nam nhỉ?" },
      { tc: "這個芒果很甜吧？", py: "Zhège mángguǒ hěn tián ba?", vn: "Quả xoài này rất ngọt phải không?" }
    ],
    idiom: "無 (Trợ từ ngữ khí).", level: "TOCFL A"
  },
  {
    word: "對", pinyin: "duì", ipa: "tweɪ⁵¹", hanViet: "Đối",
    image: "",
    radical: "Bộ Thốn (寸).",
    explanation: "Tính từ: Đúng, chính xác.",
    compounds: [
      { tc: "對不對", py: "duì bú duì", vn: "đúng không" },
      { tc: "對了", py: "duì le", vn: "à đúng rồi" },
      { tc: "答對了", py: "dá duì le", vn: "trả lời đúng rồi" }
    ],
    examples: [
      { tc: "你說得很對。", py: "Nǐ shuō de hěn duì.", vn: "Bạn nói rất đúng." },
      { tc: "這句話對不對？", py: "Zhè jù huà duì bú duì?", vn: "Câu nói này có đúng không?" }
    ],
    idiom: "對牛彈琴 (Duì niú tán qín) - Đàn gảy tai trâu.", level: "TOCFL A"
  },
  {
    word: "以前", pinyin: "yǐqián", ipa: "i²¹⁴ tɕʰjɛn³⁵", hanViet: "Dĩ tiền",
    image: "",
    radical: "以 (Bộ Nhân 人), 前 (Bộ Đao 刂).",
    explanation: "Danh từ thời gian: Trước đây, ngày trước, trước khi.",
    compounds: [
      { tc: "很久以前", py: "hěn jiǔ yǐqián", vn: "rất lâu trước đây" },
      { tc: "以後", py: "yǐhòu", vn: "sau này / sau khi" }
    ],
    examples: [
      { tc: "我以前不會說中文。", py: "Wǒ yǐqián bú huì shuō Zhōngwén.", vn: "Trước đây tôi không biết nói tiếng Trung." },
      { tc: "來台灣以前，我在越南學過中文。", py: "Lái Táiwān yǐqián, wǒ zài Yuènán xué guò Zhōngwén.", vn: "Trước khi đến Đài Loan, tôi từng học tiếng Trung ở Việt Nam." }
    ],
    idiom: "史無前例 (Shǐ wú qián lì) - Xưa nay chưa từng có.", level: "TOCFL A"
  },
  {
    word: "機會", pinyin: "jīhuì", ipa: "tɕi⁵⁵ xweɪ⁵¹", hanViet: "Cơ hội",
    image: "",
    radical: "機 (Bộ Mộc 木), 會 (Bộ Viết 曰).",
    explanation: "Danh từ: Cơ hội, dịp.",
    compounds: [
      { tc: "好機會", py: "hǎo jīhuì", vn: "cơ hội tốt" },
      { tc: "找機會", py: "zhǎo jīhuì", vn: "tìm cơ hội" },
      { tc: "給機會", py: "gěi jīhuì", vn: "trao cơ hội" }
    ],
    examples: [
      { tc: "這是一個很好的機會。", py: "Zhè shì yí gè hěn hǎo de jīhuì.", vn: "Đây là một cơ hội rất tốt." },
      { tc: "如果有機會，我想去美國旅行。", py: "Rúguǒ yǒu jīhuì, wǒ xiǎng qù Měiguó lǚxíng.", vn: "Nếu có cơ hội, tôi muốn đi Mỹ du lịch." }
    ],
    idiom: "機不可失 (Jī bù kě shī) - Cơ hội không thể bỏ lỡ.", level: "TOCFL A"
  },
  {
    word: "請", pinyin: "qǐng", ipa: "tɕʰiŋ²¹⁴", hanViet: "Thỉnh",
    image: "",
    radical: "Bộ Ngôn (言) - Lời nói.",
    explanation: "Động từ: Mời, khao, bao (Ai đó ăn uống).",
    compounds: [
      { tc: "請客", py: "qǐngkè", vn: "mời khách / khao" },
      { tc: "請吃飯", py: "qǐng chīfàn", vn: "mời ăn cơm" }
    ],
    examples: [
      { tc: "今天我請你喝珍珠奶茶。", py: "Jīntiān wǒ qǐng nǐ hē zhēnzhū nǎichá.", vn: "Hôm nay tôi mời bạn uống trà sữa trân châu." },
      { tc: "下次換我請你。", py: "Xià cì huàn wǒ qǐng nǐ.", vn: "Lần sau đổi lại tôi mời bạn nhé." }
    ],
    idiom: "請將不如激將 (Qǐng jiàng bùrú jī jiàng) - Mời tướng không bằng khích tướng.", level: "TOCFL A"
  },
  {
    word: "吃吃看", pinyin: "chī chī kàn", ipa: "tʂʰɨ⁵⁵ tʂʰɨ⁵⁵ kʰan⁵¹", hanViet: "Ngật ngật khán",
    image: "",
    radical: "Cấu trúc lặp động từ + 看 (Thử làm gì đó xem sao).",
    explanation: "Cụm từ: Ăn thử xem, nếm thử xem.",
    compounds: [
      { tc: "看看", py: "kànkan", vn: "xem thử" },
      { tc: "聽聽看", py: "tīng tīng kàn", vn: "nghe thử xem" }
    ],
    examples: [
      { tc: "這個芒果很甜，你吃吃看。", py: "Zhège mángguǒ hěn tián, nǐ chī chī kàn.", vn: "Quả xoài này rất ngọt, bạn ăn thử xem." },
      { tc: "沒吃過臭豆腐？你吃吃看！", py: "Méi chī guò chòu dòufǔ? Nǐ chī chī kàn!", vn: "Chưa ăn đậu phụ thối bao giờ à? Bạn nếm thử xem!" }
    ],
    idiom: "無 (Cụm khẩu ngữ).", level: "TOCFL A"
  },
  {
    word: "拍", pinyin: "pāi", ipa: "pʰaɪ⁵⁵", hanViet: "Phách",
    image: "",
    radical: "Bộ Thủ (扌) - Dùng tay để chụp, vỗ.",
    explanation: "Động từ: Chụp (ảnh), vỗ (tay).",
    compounds: [
      { tc: "拍照", py: "pāizhào", vn: "chụp ảnh" },
      { tc: "拍影片", py: "pāi yǐngpiàn", vn: "quay video" },
      { tc: "拍手", py: "pāishǒu", vn: "vỗ tay" }
    ],
    examples: [
      { tc: "請幫我拍一張照片。", py: "Qǐng bāng wǒ pāi yì zhāng zhàopiàn.", vn: "Xin chụp giúp tôi một tấm ảnh." },
      { tc: "這裡的風景很美，我想多拍幾張。", py: "Zhèlǐ de fēngjǐng hěn měi, wǒ xiǎng duō pāi jǐ zhāng.", vn: "Phong cảnh ở đây rất đẹp, tôi muốn chụp thêm vài tấm." }
    ],
    idiom: "拍案叫絕 (Pāi àn jiào jué) - Vỗ bàn khen hay.", level: "TOCFL A"
  },
  {
    word: "笑", pinyin: "xiào", ipa: "ɕjaʊ⁵¹", hanViet: "Tiếu",
    image: "",
    radical: "Bộ Trúc (竹) - Hình ảnh khuôn mặt tươi cười.",
    explanation: "Động từ: Cười.",
    compounds: [
      { tc: "大笑", py: "dàxiào", vn: "cười lớn" },
      { tc: "好笑", py: "hǎoxiào", vn: "buồn cười" },
      { tc: "玩笑", py: "wánxiào", vn: "trò đùa" }
    ],
    examples: [
      { tc: "拍照的時候，請笑一下。", py: "Pāizhào de shíhòu, qǐng xiào yíxià.", vn: "Lúc chụp ảnh, xin hãy cười một chút." },
      { tc: "他常常笑。", py: "Tā chángcháng xiào.", vn: "Anh ấy rất hay cười." }
    ],
    idiom: "笑口常開 (Xiào kǒu cháng kāi) - Miệng luôn tươi cười.", level: "TOCFL A"
  },
  {
    word: "開心", pinyin: "kāixīn", ipa: "kʰaɪ⁵⁵ ɕin⁵⁵", hanViet: "Khai tâm",
    image: "",
    radical: "開 (Bộ Môn 門), 心 (Bộ Tâm 心). Mở lòng ra thì sẽ thấy vui vẻ.",
    explanation: "Tính từ: Vui vẻ, vui sướng.",
    compounds: [
      { tc: "很開心", py: "hěn kāixīn", vn: "rất vui" },
      { tc: "不開心", py: "bù kāixīn", vn: "không vui" }
    ],
    examples: [
      { tc: "今天放假，我真開心。", py: "Jīntiān fàngjià, wǒ zhēn kāixīn.", vn: "Hôm nay được nghỉ, tôi thật sự rất vui." },
      { tc: "看到你來，他很開心。", py: "Kàndào nǐ lái, tā hěn kāixīn.", vn: "Thấy bạn đến, anh ấy rất vui." }
    ],
    idiom: "開誠佈公 (Kāi chéng bù gōng) - Mở lòng chân thành.", level: "TOCFL A"
  },
  {
    word: "穿", pinyin: "chuān", ipa: "tʂʰwan⁵⁵", hanViet: "Xuyên",
    image: "",
    radical: "Bộ Huyệt (穴) - Hang động, lỗ hổng. Xỏ qua lỗ hổng.",
    explanation: "Động từ: Mặc, mang, xỏ (quần áo, giày dép).",
    compounds: [
      { tc: "穿衣服", py: "chuān yīfú", vn: "mặc quần áo" },
      { tc: "穿鞋子", py: "chuān xiézi", vn: "mang giày" }
    ],
    examples: [
      { tc: "今天很冷，你要多穿一點。", py: "Jīntiān hěn lěng, nǐ yào duō chuān yìdiǎn.", vn: "Hôm nay rất lạnh, bạn phải mặc nhiều một chút." },
      { tc: "她穿了一件紅色的衣服。", py: "Tā chuān le yí jiàn hóngsè de yīfú.", vn: "Cô ấy đã mặc một chiếc áo màu đỏ." }
    ],
    idiom: "望眼欲穿 (Wàng yǎn yù chuān) - Nhìn mòn con mắt (Chờ đợi mỏi mòn).", level: "TOCFL A"
  },
  {
    word: "衣服", pinyin: "yīfú", ipa: "i⁵⁵ fu", hanViet: "Y phục",
    image: "",
    radical: "衣 (Bộ Y 衣 - cái áo), 服 (Bộ Nguyệt 月).",
    explanation: "Danh từ: Quần áo, y phục.",
    compounds: [
      { tc: "買衣服", py: "mǎi yīfú", vn: "mua quần áo" },
      { tc: "洗衣服", py: "xǐ yīfú", vn: "giặt quần áo" },
      { tc: "新衣服", py: "xīn yīfú", vn: "quần áo mới" }
    ],
    examples: [
      { tc: "這件衣服很漂亮。", py: "Zhè jiàn yīfú hěn piàoliang.", vn: "Bộ quần áo này rất đẹp." },
      { tc: "我想去逛街買衣服。", py: "Wǒ xiǎng qù guàngjiē mǎi yīfú.", vn: "Tôi muốn đi dạo phố mua quần áo." }
    ],
    idiom: "衣食父母 (Yī shí fù mǔ) - Người nuôi sống mình (Khách hàng là thượng đế).", level: "TOCFL A"
  },
  {
    word: "旅館", pinyin: "lǚguǎn", ipa: "ly²¹⁴ kwan²¹⁴", hanViet: "Lữ quán",
    image: "",
    radical: "旅 (Bộ Phương 方), 館 (Bộ Thực 飠).",
    explanation: "Danh từ: Khách sạn, nhà nghỉ.",
    compounds: [
      { tc: "住旅館", py: "zhù lǚguǎn", vn: "ở khách sạn" },
      { tc: "飯店", py: "fàndiàn", vn: "khách sạn lớn" }
    ],
    examples: [
      { tc: "這家旅館很乾淨。", py: "Zhè jiā lǚguǎn hěn gānjìng.", vn: "Khách sạn này rất sạch sẽ." },
      { tc: "我們明天去花蓮，住在這家旅館。", py: "Wǒmen míngtiān qù Huālián, zhù zài zhè jiā lǚguǎn.", vn: "Ngày mai chúng ta đi Hoa Liên, sẽ ở tại khách sạn này." }
    ],
    idiom: "無 (Danh từ thông dụng).", level: "TOCFL A"
  },
  {
    word: "太太", pinyin: "tàitai", ipa: "tʰaɪ⁵¹ tʰaɪ", hanViet: "Thái thái",
    image: "",
    radical: "Bộ Đại (大).",
    explanation: "Danh từ: Vợ, bà xã, phu nhân.",
    compounds: [
      { tc: "王太太", py: "Wáng tàitai", vn: "Bà Vương" },
      { tc: "我太太", py: "wǒ tàitai", vn: "vợ tôi" }
    ],
    examples: [
      { tc: "她是我太太。", py: "Tā shì wǒ tàitai.", vn: "Cô ấy là vợ tôi." },
      { tc: "李太太，您好！", py: "Lǐ tàitai, nín hǎo!", vn: "Chào bà Lý!" }
    ],
    idiom: "老態龍鍾 (Lǎo tài lóng zhōng) - Lụm cụm già nua (Dùng chữ Thái đồng âm).", level: "TOCFL A"
  },
  {
    word: "男", pinyin: "nán", ipa: "nan³⁵", hanViet: "Nam",
    image: "",
    radical: "Bộ Điền (田) và Lực (力). Người dùng sức cày ruộng là đàn ông.",
    explanation: "Danh từ: Nam giới, con trai.",
    compounds: [
      { tc: "男孩", py: "nánhái", vn: "cậu bé" },
      { tc: "男朋友", py: "nán péngyǒu", vn: "bạn trai" },
      { tc: "男人", py: "nánrén", vn: "đàn ông" }
    ],
    examples: [
      { tc: "那個男生很高。", py: "Nà gè nánshēng hěn gāo.", vn: "Chàng trai kia rất cao." },
      { tc: "他有兩個弟弟。", py: "Tā yǒu liǎng gè nán dìdi.", vn: "Anh ấy có hai người em trai." }
    ],
    idiom: "重男輕女 (Zhòng nán qīng nǚ) - Trọng nam khinh nữ.", level: "TOCFL A"
  },
  {
    word: "矮", pinyin: "ǎi", ipa: "aɪ²¹⁴", hanViet: "Ảy",
    image: "",
    radical: "Bộ Thỉ (矢) - Mũi tên. Thêm bộ Nữ (委) ngụ ý sự nhỏ bé.",
    explanation: "Tính từ: Thấp, lùn (Chỉ chiều cao con người hoặc sự vật).",
    compounds: [
      { tc: "很矮", py: "hěn ǎi", vn: "rất thấp" },
      { tc: "高矮", py: "gāo ǎi", vn: "cao thấp" }
    ],
    examples: [
      { tc: "我不高，有一點矮。", py: "Wǒ bù gāo, yǒu yìdiǎn ǎi.", vn: "Tôi không cao, hơi thấp một chút." },
      { tc: "那個男生比較矮。", py: "Nà gè nánshēng bǐjiào ǎi.", vn: "Bạn nam kia thấp hơn." }
    ],
    idiom: "矮人一截 (Ǎi rén yì jié) - Thua kém người ta một bậc.", level: "TOCFL A"
  },
  {
    word: "高", pinyin: "gāo", ipa: "kaʊ⁵⁵", hanViet: "Cao",
    image: "",
    radical: "Bộ Cao (高) - Hình dáng một tòa tháp nhiều tầng.",
    explanation: "Tính từ: Cao.",
    compounds: [
      { tc: "很高", py: "hěn gāo", vn: "rất cao" },
      { tc: "高山", py: "gāoshān", vn: "núi cao" },
      { tc: "高興", py: "gāoxìng", vn: "vui vẻ" }
    ],
    examples: [
      { tc: "我的哥哥很高。", py: "Wǒ de gēge hěn gāo.", vn: "Anh trai tôi rất cao." },
      { tc: "台北101大樓非常高。", py: "Táiběi 101 dàlóu fēicháng gāo.", vn: "Tòa nhà Taipei 101 vô cùng cao." }
    ],
    idiom: "高高在上 (Gāo gāo zài shàng) - Cao cao tại thượng.", level: "TOCFL A"
  },
  {
    word: "弟弟", pinyin: "dìdi", ipa: "ti⁵¹ ti", hanViet: "Đệ đệ",
    image: "",
    radical: "Bộ Cung (弓) - Cây cung.",
    explanation: "Danh từ: Em trai.",
    compounds: [
      { tc: "兄弟", py: "xiōngdì", vn: "anh em trai" },
      { tc: "表弟", py: "biǎodì", vn: "em họ (trai)" }
    ],
    examples: [
      { tc: "我弟弟喜歡打棒球。", py: "Wǒ dìdi xǐhuān dǎ bàngqiú.", vn: "Em trai tôi thích chơi bóng chày." },
      { tc: "他弟弟今年二十歲。", py: "Tā dìdi jīnnián èrshí suì.", vn: "Em trai anh ấy năm nay 20 tuổi." }
    ],
    idiom: "稱兄道弟 (Chēng xiōng dào dì) - Gọi anh gọi em (Kết tình anh em).", level: "TOCFL A"
  },
  {
    word: "乾淨", pinyin: "gānjìng", ipa: "kan⁵⁵ tɕiŋ⁵¹", hanViet: "Can tịnh",
    image: "",
    radical: "乾 (Bộ Ất 乙), 淨 (Bộ Thủy 氵).",
    explanation: "Tính từ: Sạch sẽ.",
    compounds: [
      { tc: "很乾淨", py: "hěn gānjìng", vn: "rất sạch sẽ" },
      { tc: "不乾淨", py: "bù gānjìng", vn: "không sạch" }
    ],
    examples: [
      { tc: "這家餐廳很乾淨。", py: "Zhè jiā cāntīng hěn gānjìng.", vn: "Nhà hàng này rất sạch sẽ." },
      { tc: "我的房間很乾淨。", py: "Wǒ de fángjiān hěn gānjìng.", vn: "Phòng của tôi rất sạch." }
    ],
    idiom: "一乾二淨 (Yì gān èr jìng) - Sạch sành sanh.", level: "TOCFL A"
  },
  {
    word: "窗戶", pinyin: "chuānghù", ipa: "tʂʰwaŋ⁵⁵ xu⁵¹", hanViet: "Song hộ",
    image: "",
    radical: "窗 (Bộ Huyệt 穴 - lỗ hổng trên tường để đón gió), 戶 (Bộ Hộ 戶 - cánh cửa).",
    explanation: "Danh từ: Cửa sổ.",
    compounds: [
      { tc: "開窗戶", py: "kāi chuānghù", vn: "mở cửa sổ" },
      { tc: "關窗戶", py: "guān chuānghù", vn: "đóng cửa sổ" }
    ],
    examples: [
      { tc: "請幫我開窗戶。", py: "Qǐng bāng wǒ kāi chuānghù.", vn: "Xin giúp tôi mở cửa sổ." },
      { tc: "這家旅館的窗戶很大。", py: "Zhè jiā lǚguǎn de chuānghù hěn dà.", vn: "Cửa sổ của khách sạn này rất lớn." }
    ],
    idiom: "十年寒窗 (Shí nián hán chuāng) - Mười năm đèn sách (Mười năm cửa sổ lạnh).", level: "TOCFL A"
  },
  {
    word: "往", pinyin: "wǎng", ipa: "waŋ²¹⁴", hanViet: "Vãng",
    image: "",
    radical: "Bộ Xích (彳) - Bước đi.",
    explanation: "Giới từ: Về phía, hướng tới.",
    compounds: [
      { tc: "往前走", py: "wǎng qián zǒu", vn: "đi về phía trước" },
      { tc: "往後退", py: "wǎng hòu tuì", vn: "lùi về phía sau" },
      { tc: "來往", py: "láiwǎng", vn: "qua lại" }
    ],
    examples: [
      { tc: "請一直往前走。", py: "Qǐng yìzhí wǎng qián zǒu.", vn: "Xin hãy cứ đi thẳng về phía trước." },
      { tc: "往那邊看，風景很美。", py: "Wǎng nà biān kàn, fēngjǐng hěn měi.", vn: "Nhìn về hướng kia kìa, phong cảnh rất đẹp." }
    ],
    idiom: "勇往直前 (Yǒng wǎng zhí qián) - Dũng cảm tiến về phía trước.", level: "TOCFL A"
  },
  {
    word: "藍色", pinyin: "lánsè", ipa: "lan³⁵ sɤ⁵¹", hanViet: "Lam sắc",
    image: "",
    radical: "藍 (Bộ Thảo 艹 - cây chàm để nhuộm màu lam), 色 (Bộ Sắc 色).",
    explanation: "Danh từ: Màu xanh da trời, màu xanh lam.",
    compounds: [
      { tc: "藍天", py: "lántiān", vn: "trời xanh" },
      { tc: "深藍", py: "shēnlán", vn: "xanh đậm" }
    ],
    examples: [
      { tc: "我喜歡藍色的海。", py: "Wǒ xǐhuān lánsè de hǎi.", vn: "Tôi thích biển màu xanh dương." },
      { tc: "他穿著一件藍色的衣服。", py: "Tā chuān zhe yí jiàn lánsè de yīfú.", vn: "Anh ấy đang mặc một chiếc áo màu xanh." }
    ],
    idiom: "青出於藍 (Qīng chū yú lán) - Trò giỏi hơn thầy (Màu xanh từ cây chàm mà ra nhưng lại xanh hơn chàm).", level: "TOCFL A"
  },
  {
    word: "因為", pinyin: "yīnwèi", ipa: "in⁵⁵ weɪ⁵¹", hanViet: "Nhân vị",
    image: "",
    radical: "因 (Bộ Vi 囗), 為 (Bộ Hỏa 灬).",
    explanation: "Liên từ: Bởi vì.",
    compounds: [
      { tc: "因為...所以...", py: "yīnwèi... suǒyǐ...", vn: "bởi vì... cho nên..." },
      { tc: "原因", py: "yuányīn", vn: "nguyên nhân" }
    ],
    examples: [
      { tc: "因為今天下雨，所以我沒出去。", py: "Yīnwèi jīntiān xiàyǔ, suǒyǐ wǒ méi chūqù.", vn: "Bởi vì hôm nay trời mưa, cho nên tôi không ra ngoài." },
      { tc: "他沒來上課，因為他有事。", py: "Tā méi lái shàngkè, yīnwèi tā yǒu shì.", vn: "Anh ấy không đến lớp, bởi vì anh ấy có việc." }
    ],
    idiom: "前因後果 (Qián yīn hòu guǒ) - Nguyên nhân kết quả.", level: "TOCFL A"
  },
  {
    word: "住", pinyin: "zhù", ipa: "tʂu⁵¹", hanViet: "Trú",
    image: "",
    radical: "Bộ Nhân (亻) - Con người đứng cạnh ngọn đuốc (chữ Chủ 主) để sưởi ấm, tức là cư trú.",
    explanation: "Động từ: Ở, cư trú.",
    compounds: [
      { tc: "住在哪裡", py: "zhù zài nǎlǐ", vn: "ở đâu" },
      { tc: "住宿", py: "zhùsù", vn: "trú ngụ" },
      { tc: "住家", py: "zhùjiā", vn: "nhà ở" }
    ],
    examples: [
      { tc: "你住在台灣哪裡？", py: "Nǐ zhù zài Táiwān nǎlǐ?", vn: "Bạn sống ở đâu tại Đài Loan?" },
      { tc: "我住在學校的宿舍。", py: "Wǒ zhù zài xuéxiào de sùshè.", vn: "Tôi ở trong ký túc xá của trường." }
    ],
    idiom: "安居樂業 (Ān jū lè yè) - An cư lạc nghiệp.", level: "TOCFL A"
  },
  {
    word: "上個月", pinyin: "shàng ge yuè", ipa: "ʂaŋ⁵¹ kɤ ɥɛ⁵¹", hanViet: "Thượng cá nguyệt",
    image: "",
    radical: "Ghép từ chữ Thượng (上), Cá (個), Nguyệt (月).",
    explanation: "Danh từ thời gian: Tháng trước.",
    compounds: [
      { tc: "下個月", py: "xià ge yuè", vn: "tháng sau" },
      { tc: "這個月", py: "zhège yuè", vn: "tháng này" }
    ],
    examples: [
      { tc: "上個月我去台東旅行。", py: "Shàng ge yuè wǒ qù Táidōng lǚxíng.", vn: "Tháng trước tôi đi Đài Đông du lịch." },
      { tc: "我上個月剛來台灣。", py: "Wǒ shàng ge yuè gāng lái Táiwān.", vn: "Tháng trước tôi vừa mới đến Đài Loan." }
    ],
    idiom: "無 (Cụm từ thông dụng).", level: "TOCFL A"
  },
  {
    word: "這些", pinyin: "zhèxiē", ipa: "tʂɤ⁵¹ ɕjɛ⁵⁵", hanViet: "Giá ta",
    image: "",
    radical: "這 (Bộ Sước 辶), 些 (Bộ Nhị 二).",
    explanation: "Đại từ chỉ thị (số nhiều): Những cái này, những... này.",
    compounds: [
      { tc: "那些", py: "nàxiē", vn: "những cái kia" },
      { tc: "一些", py: "yìxiē", vn: "một vài" }
    ],
    examples: [
      { tc: "這些水果都很甜。", py: "Zhèxiē shuǐguǒ dōu hěn tián.", vn: "Những trái cây này đều rất ngọt." },
      { tc: "這些衣服是誰的？", py: "Zhèxiē yīfú shì shéi de?", vn: "Những bộ quần áo này là của ai?" }
    ],
    idiom: "無 (Đại từ thông dụng).", level: "TOCFL A"
  }
];

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
// 4. HÀM HIỂN THỊ GIAO DIỆN CHÍNH (ĐÃ CẬP NHẬT ẢNH & FONT TO)
// ==========================================
function displayWords(data) {
  const container = document.getElementById('dictionary-container');
  if (!container) return;
  
  container.innerHTML = data.map((item, index) => {
    const wordsArray = item.word.split('/');
    const wordHeaderHtml = wordsArray.map(w => {
      const trimmedWord = w.trim();
      return `${trimmedWord} <button onclick="playAudio('${trimmedWord}', 'zh-TW')" class="audio-btn" style="border:none; background:none; cursor:pointer; font-size:24px; vertical-align:middle;">🔊</button>`;
    }).join(' <span class="divider" style="color:#ccc;">/</span> ');

    const rawIdiom = item.idiom;
    const idiomSplit = rawIdiom.split('-');
    const idiomZhandPy = idiomSplit[0].trim(); 
    const idiomVn = idiomSplit[1] ? idiomSplit[1].trim() : ''; 
    const idiomOnlyZh = idiomZhandPy.split('(')[0].trim(); 

    return `
    <div class="word-card" style="border:1px solid #ddd; padding:25px; margin:20px 0; border-radius:15px; background:#fff; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
      
      <div class="card-header-flex">
        
        <div class="word-info-group">
          <span class="badge" style="background:#f39c12; color:white; padding:5px 12px; border-radius:20px; font-size:12px; font-weight:bold;">${item.level}</span>
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

      <div class="stroke-section" style="margin: 15px 0; display: flex; gap: 15px; flex-wrap: wrap;" id="stroke-container-${index}"></div>
      
      <div class="content-section" style="background: #fff8f8; padding: 15px; border-radius: 8px; margin-top: 10px; border-left: 4px solid #e74c3c;">
        <span class="label" style="color: #c0392b;">TỪ GHÉP (合成詞):</span>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; margin-top: 8px;">
          ${item.compounds ? item.compounds.map(c => `
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
        ${item.examples.map(ex => `
          <div class="ex-item" style="margin-top: 10px; border-bottom: 1px dashed #ccc; padding-bottom: 10px;">
            <div class="example-zh">
              ${ex.tc} <button onclick="playAudio('${ex.tc}', 'zh-TW')" class="audio-btn-sm" style="border:none; background:none; cursor:pointer; font-size:18px;">🔊</button>
            </div>
            <div class="ex-phonetic" style="color: #2980b9; margin: 4px 0; font-weight:500;">
              ${ex.py}
            </div>
            <div class="example-vi" style="color: #555;">${ex.vn}</div>
          </div>
        `).join('')}
      </div>

      <div class="content-section" style="border: none; background: #fffbe6; padding: 12px; border-radius: 8px; margin-top: 15px; border-left: 4px solid #f39c12;">
        <strong>💡 Thành ngữ / Cụm từ hay:</strong> 
        <span style="color: #d35400; font-weight: bold; margin-left:5px;">${idiomZhandPy}</span>
        <button onclick="playAudio('${idiomOnlyZh}', 'zh-TW')" class="audio-btn-sm" style="border:none; background:none; cursor:pointer; margin-left:5px;">🔊</button>
        <div style="font-size: 0.9em; color: #555; margin-top: 5px;">
          Nghĩa: ${idiomVn}
        </div>
      </div>
    </div>
    `;
  }).join('');

  // KHỞI TẠO VẼ NÉT CHỮ & NÚT TẢI PDF
  if (typeof HanziWriter !== 'undefined') {
    data.forEach((item, index) => {
      const targetDiv = document.getElementById(`stroke-container-${index}`);
      if (!targetDiv) return;
      
      const mainWord = item.word.split('/')[0].replace(/[a-zA-Z0-9\s，。？！、]/g, '').trim();
      
      mainWord.split('').forEach(char => {
        const wrapDiv = document.createElement('div');
        wrapDiv.style.display = 'flex';
        wrapDiv.style.flexDirection = 'column';
        wrapDiv.style.alignItems = 'center';
        wrapDiv.style.gap = '8px';

        const charDiv = document.createElement('div');
        charDiv.style.width = '70px';
        charDiv.style.height = '70px';
        charDiv.style.border = '1px dashed #bdc3c7';
        charDiv.style.borderRadius = '8px';
        charDiv.style.background = '#fff';
        charDiv.style.cursor = 'pointer';

        const pdfBtn = document.createElement('button');
        pdfBtn.innerHTML = '📥 Tải PDF Luyện Viết';
        pdfBtn.style.fontSize = '12px';
        pdfBtn.style.color = '#e74c3c';
        pdfBtn.style.border = '1px solid #e74c3c';
        pdfBtn.style.padding = '5px 12px';
        pdfBtn.style.borderRadius = '15px';
        pdfBtn.style.backgroundColor = '#fff';
        pdfBtn.style.cursor = 'pointer';
        pdfBtn.style.transition = 'all 0.3s';
        
        pdfBtn.onmouseover = () => { pdfBtn.style.backgroundColor = '#e74c3c'; pdfBtn.style.color = '#fff'; };
        pdfBtn.onmouseout = () => { pdfBtn.style.backgroundColor = '#fff'; pdfBtn.style.color = '#e74c3c'; };
        
        pdfBtn.onclick = () => downloadPDF(char, item.pinyin, item.hanViet);

        wrapDiv.appendChild(charDiv);
        wrapDiv.appendChild(pdfBtn);
        targetDiv.appendChild(wrapDiv);

        const writer = HanziWriter.create(charDiv, char, {
          width: 70, height: 70, padding: 5, showOutline: true, 
          strokeAnimationSpeed: 1.5,
          delayBetweenStrokes: 50,
          radicals: { color: '#e74c3c' } 
        });
        
        charDiv.addEventListener('click', () => { writer.animateCharacter(); });
        setTimeout(() => { writer.animateCharacter(); }, 1000);
      });
    });
  }
}

// ==========================================
// 5. HÀM TÌM KIẾM
// ==========================================
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
