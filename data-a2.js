const dataA2 = [
// ==========================================
  // --- TỪ VỰNG BÀI 1 - GIÁO TRÌNH ĐƯƠNG ĐẠI 2 ---
  // ==========================================
  {
    word: "走", pinyin: "zǒu", hanViet: "Tẩu",
    image: "",
    radical: "走 (Bộ Tẩu 走)",
    explanation: "Động từ: Đi, đi tới (chỉ hành động di chuyển).",
    compounds: [
      { tc: "走路", py: "zǒulù", vn: "đi bộ" },
      { tc: "走開", py: "zǒukāi", vn: "tránh ra" }
    ],
    examples: [
      { tc: "我們走吧！", py: "Wǒmen zǒu ba!", vn: "Chúng ta đi thôi!" },
      { tc: "從這裡往前走。", py: "Cóng zhèlǐ wǎng qián zǒu.", vn: "Từ đây đi về phía trước." }
    ],
    idiom: "走一走 (zǒu yi zǒu) - Đi dạo một lát. Ngữ cảnh: Khi bạn cảm thấy chán nản hoặc mệt mỏi vì ở trong nhà quá lâu, người Đài Loan thường rủ '我們出去走一走吧' (Chúng ta ra ngoài đi dạo chút đi) để thay đổi không khí và thư giãn.", 
    level: "TOCFL A2"
  },
  {
    word: "路人", pinyin: "lùrén", hanViet: "Lộ nhân",
    image: "",
    radical: "路 (Bộ Túc 足), 人 (Bộ Nhân 人)",
    explanation: "Danh từ: Người qua đường.",
    compounds: [
      { tc: "馬路", py: "mǎlù", vn: "đường lớn" }
    ],
    examples: [
      { tc: "你可以問路人。", py: "Nǐ kěyǐ wèn lùrén.", vn: "Bạn có thể hỏi người qua đường." }
    ],
    idiom: "路人甲 (Lùrén jiǎ) - Người qua đường không ai biết tên. Ngữ cảnh: Thường dùng trong văn nói giới trẻ để tự trào phúng hoặc trêu đùa. Ví dụ khi đi dự tiệc mà không ai chú ý đến mình, bạn có thể đùa: '我就像個路人甲' (Tôi cứ như một người vô hình qua đường vậy).", 
    level: "TOCFL A2"
  },
  {
    word: "幫忙", pinyin: "bāngmáng", hanViet: "Bang mang",
    image: "",
    radical: "幫 (Bộ Cân 巾), 忙 (Bộ Tâm 心)",
    explanation: "Động từ ly hợp: Giúp đỡ, phụ giúp.",
    compounds: [
      { tc: "幫助", py: "bāngzhù", vn: "giúp đỡ (hành động cụ thể)" },
      { tc: "幫手", py: "bāngshǒu", vn: "người phụ giúp" }
    ],
    examples: [
      { tc: "謝謝你的幫忙。", py: "Xièxiè nǐ de bāngmáng.", vn: "Cảm ơn sự giúp đỡ của bạn." }
    ],
    idiom: "幫個忙 (Bāng ge máng) - Giúp một tay nhé. Ngữ cảnh: Khi bạn đang bê đồ nặng hoặc cần ai đó giữ cửa giúp, bạn có thể nói nhanh '可以幫個忙嗎？' (Có thể giúp tôi một tay không?). Đây là cách nhờ vả rất tự nhiên, nhẹ nhàng và lịch sự trong đời sống hàng ngày.", 
    level: "TOCFL A2"
  },
  {
    word: "迷路", pinyin: "mílù", hanViet: "Mê lộ",
    image: "",
    radical: "迷 (Bộ Xước 辶), 路 (Bộ Túc 足)",
    explanation: "Động từ ly hợp: Lạc đường.",
    compounds: [
      { tc: "迷宮", py: "mígōng", vn: "mê cung" }
    ],
    examples: [
      { tc: "我好像迷路了。", py: "Wǒ hǎoxiàng mílù le.", vn: "Tôi hình như lạc đường rồi." }
    ],
    idiom: "大迷路 (Dà mílù) - Lạc đường mất tiêu rồi! Ngữ cảnh: Giới trẻ Đài Loan rất thích thêm chữ '大' (Đại) lên trước động từ để nhấn mạnh sự việc. Khi bạn đi tìm quán ăn mà lạc hẳn sang khu khác, bạn có thể gọi cho bạn bè than vãn: '我大迷路了，快來救我！' (Tôi lạc đường hoàn toàn rồi, mau tới cứu tôi!).", 
    level: "TOCFL A2"
  },
  {
    word: "下", pinyin: "xià", hanViet: "Hạ",
    image: "",
    radical: "下 (Bộ Nhất 一)",
    explanation: "Đại từ chỉ định: Tiếp theo, tới, dưới.",
    compounds: [
      { tc: "下面", py: "xiàmiàn", vn: "phía dưới" },
      { tc: "下車", py: "xiàchē", vn: "xuống xe" }
    ],
    examples: [
      { tc: "我們下個月去台灣。", py: "Wǒmen xià ge yuè qù Táiwān.", vn: "Tháng sau chúng tôi đi Đài Loan." }
    ],
    idiom: "下一站 (Xià yí zhàn) - Trạm tiếp theo. Ngữ cảnh: Cụm từ sinh tồn cho du học sinh! Bạn sẽ nghe thấy câu này liên tục trên loa thông báo của xe buýt hoặc tàu điện ngầm (MRT). Ví dụ: '下一站，台北車站' (Trạm tiếp theo, Ga Đài Bắc). Học sinh cần lắng nghe kỹ để không bị lỡ trạm.", 
    level: "TOCFL A2"
  },
  {
    word: "路口", pinyin: "lùkǒu", hanViet: "Lộ khẩu",
    image: "",
    radical: "路 (Bộ Túc 足), 口 (Bộ Khẩu 口)",
    explanation: "Danh từ: Giao lộ, ngã rẽ.",
    compounds: [
      { tc: "巷口", py: "xiàngkǒu", vn: "đầu hẻm" }
    ],
    examples: [
      { tc: "在下一個路口右轉。", py: "Zài xià yí ge lùkǒu yòu zhuǎn.", vn: "Rẽ phải ở ngã rẽ tiếp theo." }
    ],
    idiom: "十字路口 (Shízì lùkǒu) - Ngã tư đường (giao lộ chữ Thập). Ngữ cảnh: Khi người Đài Loan chỉ đường, họ rất hay dùng mốc này để đếm thay vì nói ngã tư chung chung. Ví dụ: '一直往前走，到了第二個十字路口右轉' (Cứ đi thẳng, đến ngã tư thứ hai thì rẽ phải). Cực kỳ hữu ích khi hỏi đường.", 
    level: "TOCFL A2"
  },
  {
    word: "段", pinyin: "duàn", hanViet: "Đoạn",
    image: "",
    radical: "段 (Bộ Thù 殳)",
    explanation: "Danh từ / Lượng từ: Đoạn, khúc, phần.",
    compounds: [
      { tc: "一段時間", py: "yí duàn shíjiān", vn: "một khoảng thời gian" }
    ],
    examples: [
      { tc: "這段路很難走。", py: "Zhè duàn lù hěn nán zǒu.", vn: "Đoạn đường này rất khó đi." }
    ],
    idiom: "段 (Duàn) - Đoạn đường. Ngữ cảnh: Đặc sản của địa chỉ Đài Loan! Những con đường lớn sẽ được chia thành nhiều đoạn. Ví dụ nhà bạn ở '台灣大道二段' (Đại lộ Đài Loan đoạn 2). Khi gọi taxi hoặc dùng bản đồ, học sinh bắt buộc phải đọc rõ chữ '段' này, nếu không sẽ bị đưa đi sai chỗ.", 
    level: "TOCFL A2"
  },
  {
    word: "過", pinyin: "guò", hanViet: "Quá",
    image: "",
    radical: "過 (Bộ Xước 辶)",
    explanation: "Động từ: Băng qua, vượt qua, đi qua.",
    compounds: [
      { tc: "過來", py: "guòlái", vn: "qua đây" },
      { tc: "過去", py: "guòqù", vn: "qua đó / quá khứ" }
    ],
    examples: [
      { tc: "過馬路要小心。", py: "Guò mǎlù yào xiǎoxīn.", vn: "Qua đường phải cẩn thận." }
    ],
    idiom: "過來一下 (Guòlái yíxià) - Qua đây một lát nhé. Ngữ cảnh: Cách gọi rất phổ biến và thân thiện. Khi giáo viên muốn xem bài tập của bạn, hoặc bạn bè muốn cho bạn xem một clip vui trên điện thoại, họ sẽ gọi: '你過來一下，看這個！' (Bạn qua đây một lát, xem cái này nè!).", 
    level: "TOCFL A2"
  },
  {
    word: "第", pinyin: "dì", hanViet: "Đệ",
    image: "",
    radical: "第 (Bộ Trúc 竹)",
    explanation: "Từ tố: Đứng trước số đếm để chỉ số thứ tự.",
    compounds: [
      { tc: "第一", py: "dì yī", vn: "thứ nhất" },
      { tc: "第二", py: "dì èr", vn: "thứ hai" }
    ],
    examples: [
      { tc: "這是他第一次來台灣。", py: "Zhè shì tā dì yī cì lái Táiwān.", vn: "Đây là lần đầu tiên anh ấy đến Đài Loan." }
    ],
    idiom: "第一名 (Dì yī míng) - Hạng nhất, đỉnh cao. Ngữ cảnh: Không chỉ dùng trong thi cử, người Đài Loan dùng cụm này để khen ngợi mọi thứ trong đời sống! Nếu bạn dẫn bạn bè đi uống một ly trà sữa rất ngon, họ có thể khen: '這家珍奶真的是我心中的第一名！' (Trà sữa quán này đúng là số 1 trong lòng tôi!).", 
    level: "TOCFL A2"
  },
  {
    word: "紅綠燈", pinyin: "hónglùdēng", hanViet: "Hồng lục đăng",
    image: "",
    radical: "紅 (Bộ Mịch 糸), 綠 (Bộ Mịch 糸), 燈 (Bộ Hỏa 火)",
    explanation: "Danh từ: Đèn giao thông (đỏ và xanh).",
    compounds: [
      { tc: "紅燈", py: "hóngdēng", vn: "đèn đỏ" },
      { tc: "綠燈", py: "lǜdēng", vn: "đèn xanh" }
    ],
    examples: [
      { tc: "過紅綠燈就到了。", py: "Guò hónglùdēng jiù dào le.", vn: "Qua đèn giao thông là tới rồi." }
    ],
    idiom: "等紅綠燈 (Děng hónglùdēng) - Đợi đèn đỏ. Ngữ cảnh: Tiếng Việt mình thường nói 'chờ đèn đỏ', nhưng người Đài Loan sẽ nói là 'chờ hồng lục đăng'. Ví dụ khi bạn đi làm muộn và sếp gọi điện hỏi đang ở đâu, bạn có thể trả lời: '我在等紅綠燈，馬上到！' (Tôi đang đợi đèn giao thông, tới liền đây!).", 
    level: "TOCFL A2"
  },
  {
    word: "告訴", pinyin: "gàosù", hanViet: "Cáo tố",
    image: "",
    radical: "告 (Bộ Khẩu 口), 訴 (Bộ Ngôn 言)",
    explanation: "Động từ: Nói cho biết, bảo.",
    compounds: [
      { tc: "報告", py: "bàogào", vn: "báo cáo" }
    ],
    examples: [
      { tc: "請你告訴我。", py: "Qǐng nǐ gàosù wǒ.", vn: "Xin hãy nói cho tôi biết." }
    ],
    idiom: "我告訴你 (Wǒ gàosù nǐ...) - Để tôi nói cho bạn nghe này... Ngữ cảnh: Đây là câu 'mở bài' kinh điển của người Đài Loan khi chuẩn bị kể một chuyện bát quái, một tin sốt dẻo hoặc chia sẻ bí quyết. Ví dụ: '我告訴你，那家餐廳超級好吃！' (Để tôi nói cho bạn nghe, nhà hàng đó ăn ngon cực kỳ!).", 
    level: "TOCFL A2"
  },
  {
    word: "提款機", pinyin: "tíkuǎnjī", hanViet: "Đề khoản cơ",
    image: "",
    radical: "提 (Bộ Thủ 手), 款 (Bộ Khiếm 欠), 機 (Bộ Mộc 木)",
    explanation: "Danh từ: Máy rút tiền tự động (ATM).",
    compounds: [
      { tc: "提款卡", py: "tíkuǎnkǎ", vn: "thẻ rút tiền" }
    ],
    examples: [
      { tc: "請問提款機在哪裡？", py: "Qǐngwèn tíkuǎnjī zài nǎlǐ?", vn: "Xin hỏi máy rút tiền ở đâu?" }
    ],
    idiom: "去領錢 (Qù lǐng qián) - Đi rút tiền. Ngữ cảnh: Mặc dù sách giáo khoa dạy từ '提款機' (máy rút tiền), nhưng trong văn nói hàng ngày, người Đài Loan hiếm khi dùng từ này. Họ thường chỉ nói đơn giản: '我要去超商領錢' (Tôi muốn ra cửa hàng tiện lợi rút tiền) hoặc gọi thẳng cái máy là 'ATM' (đọc tiếng Anh).", 
    level: "TOCFL A2"
  },
  {
    word: "超商", pinyin: "chāoshāng", hanViet: "Siêu thương",
    image: "",
    radical: "超 (Bộ Tẩu 走), 商 (Bộ Khẩu 口)",
    explanation: "Danh từ: Cửa hàng tiện lợi (viết tắt của 超級商店 hoặc 便利商店).",
    compounds: [
      { tc: "超市", py: "chāoshì", vn: "siêu thị (lớn hơn siêu thương)" }
    ],
    examples: [
      { tc: "我要去超商買咖啡。", py: "Wǒ yào qù chāoshāng mǎi kāfēi.", vn: "Tôi muốn đi cửa hàng tiện lợi mua cà phê." }
    ],
    idiom: "去超商取貨 (Qù chāoshāng qǔ huò) - Ra cửa hàng lấy hàng. Ngữ cảnh: Văn hóa mua sắm online tại Đài Loan! Sinh viên rất ít khi nhận hàng tại nhà mà thường chọn giao đến cửa hàng tiện lợi (7-11, FamilyMart...). Vì vậy câu nói '我要去超商取貨' (Tôi phải ra cửa hàng lấy đồ) là câu cửa miệng mà ai cũng dùng.", 
    level: "TOCFL A2"
  }
];
  
