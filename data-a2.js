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
      { tc: "我們走吧！", py: "Wǒmen zǒu ba!", vn: "Chúng ta đi thôi**!"** },
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
  },
{
    word: "應該", pinyin: "yīnggāi", hanViet: "Ưng cai",
    image: "",
    radical: "應 (Bộ Tâm 心), 該 (Bộ Ngôn 言)",
    explanation: "Động từ năng nguyện: Nên, phải, chắc là.",
    compounds: [
      { tc: "不應該", py: "bù yīnggāi", vn: "không nên" }
    ],
    examples: [
      { tc: "你應該多喝水。", py: "Nǐ yīnggāi duō hē shuǐ.", vn: "Bạn nên uống nhiều nước." }
    ],
    idiom: "這是應該的 (Zhè shì yīnggāi de) - Đây là việc nên làm mà. Ngữ cảnh: Khi bạn giúp đỡ ai đó và họ nói cảm ơn, thay vì chỉ nói '不客氣' (đừng khách sáo) như trong sách, người Đài Loan thường khiêm tốn nói câu này để bày tỏ sự nhiệt tình.",
    level: "TOCFL A2"
  },
  {
    word: "郵局", pinyin: "yóujú", hanViet: "Bưu cục",
    image: "",
    radical: "郵 (Bộ Ấp 邑), 局 (Bộ Thi 尸)",
    explanation: "Danh từ: Bưu điện.",
    compounds: [
      { tc: "郵票", py: "yóupiào", vn: "tem thư" }
    ],
    examples: [
      { tc: "我要去郵局寄信。", py: "Wǒ yào qù yóujú jì xìn.", vn: "Tôi muốn đi bưu điện gửi thư." }
    ],
    idiom: "跑郵局 (Pǎo yóujú) - Chạy ra bưu điện. Ngữ cảnh: Từ '跑' (chạy) được dùng rất nhiều trong văn nói để chỉ việc đi làm thủ tục hoặc mua bán nhanh gọn. Ví dụ dân văn phòng hay nói '我中午要跑一趟郵局' (Trưa nay tôi phải chạy ra bưu điện một chuyến).",
    level: "TOCFL A2"
  },
  {
    word: "提", pinyin: "tí", hanViet: "Đề",
    image: "",
    radical: "提 (Bộ Thủ 手)",
    explanation: "Động từ: Xách, nhấc lên, rút (tiền).",
    compounds: [
      { tc: "提早", py: "tízǎo", vn: "sớm hơn dự định" },
      { tc: "提醒", py: "tíxǐng", vn: "nhắc nhở" }
    ],
    examples: [
      { tc: "他手裡提著一個包。", py: "Tā shǒu lǐ tízhe yí ge bāo.", vn: "Trong tay anh ấy đang xách một cái túi." }
    ],
    idiom: "提早 (Tízǎo) - Làm gì đó sớm hơn. Ngữ cảnh: Cụm từ sinh hoạt rất phổ biến. Khi có bão (颱風), người Đài Loan thường nhắc nhau: '今天會下大雨，大家提早下班吧' (Hôm nay trời sẽ mưa to, mọi người tan làm sớm đi).",
    level: "TOCFL A2"
  },
  {
    word: "那邊", pinyin: "nàbiān", hanViet: "Na biên",
    image: "",
    radical: "那 (Bộ Ấp 邑), 邊 (Bộ Xước 辶)",
    explanation: "Danh từ: Bên kia, chỗ kia.",
    compounds: [
      { tc: "這邊", py: "zhèbiān", vn: "bên này" }
    ],
    examples: [
      { tc: "請看那邊。", py: "Qǐng kàn nàbiān.", vn: "Xin hãy nhìn bên kia." }
    ],
    idiom: "就在那邊 (Jiù zài nàbiān) - Ngay bên kia kìa! Ngữ cảnh: Khi bạn hỏi đường, người dân Đài Loan thường vừa chỉ tay vừa dùng cụm từ này để nhấn mạnh rằng địa điểm đó rất gần và dễ nhìn thấy.",
    level: "TOCFL A2"
  },
  {
    word: "師大", pinyin: "Shīdà", hanViet: "Sư đại",
    image: "",
    radical: "師 (Bộ Cân 巾), 大 (Bộ Đại 大)",
    explanation: "Danh từ riêng: Viết tắt của 師範大學 (Đại học Sư phạm).",
    compounds: [
      { tc: "台大", py: "Táidà", vn: "ĐH Đài Loan" }
    ],
    examples: [
      { tc: "他在師大學中文。", py: "Tā zài Shīdà xué Zhōngwén.", vn: "Anh ấy học tiếng Trung ở trường Sư Đại." }
    ],
    idiom: "師大夜市 (Shīdà yèshì) - Chợ đêm Sư Đại. Ngữ cảnh: Mặc dù là tên trường học, nhưng khi nhắc đến '師大', giới trẻ Đài Bắc thường nghĩ ngay đến khu chợ đêm nổi tiếng nằm cạnh trường với rất nhiều quần áo và đồ ăn vặt.",
    level: "TOCFL A2"
  },
  {
    word: "和平東路", pinyin: "Hépíng Dōng Lù", hanViet: "Hòa Bình Đông Lộ",
    image: "",
    radical: "和 (Bộ Khẩu 口), 平 (Bộ Can 干), 東 (Bộ Mộc 木), 路 (Bộ Túc 足)",
    explanation: "Danh từ riêng: Đường Hòa Bình Đông (Một con đường lớn tại Đài Bắc).",
    compounds: [
      { tc: "馬路", py: "mǎlù", vn: "đường lớn" }
    ],
    examples: [
      { tc: "我家在和平東路上。", py: "Wǒ jiā zài Hépíng Dōng lù shàng.", vn: "Nhà tôi nằm trên đường Hòa Bình Đông." }
    ],
    idiom: "走和平東路 (Zǒu Hépíng Dōng lù) - Đi đường Hòa Bình Đông. Ngữ cảnh: Khi ngồi taxi, tài xế thường hỏi bạn muốn đi lộ trình nào cho đỡ tắc đường, bạn có thể nói '司機，請走和平東路' (Bác tài, vui lòng đi đường Hòa Bình Đông nhé).",
    level: "TOCFL A2"
  },
  {
    word: "往前", pinyin: "wǎng qián", hanViet: "Vãng tiền",
    image: "",
    radical: "往 (Bộ Xích 彳), 前 (Bộ Đao 刀)",
    explanation: "Cụm từ: Hướng về phía trước.",
    compounds: [
      { tc: "往後", py: "wǎng hòu", vn: "về phía sau" }
    ],
    examples: [
      { tc: "一直往前走。", py: "Yìzhí wǎng qián zǒu.", vn: "Cứ đi thẳng về phía trước." }
    ],
    idiom: "一直往前走 (Yìzhí wǎng qián zǒu) - Cứ đi thẳng mãi. Ngữ cảnh: Cụm từ không thể thiếu khi hỏi đường tại Đài Loan. Người chỉ đường sẽ thường kết hợp nó với các mốc giao thông: '一直往前走，看到紅綠燈右轉' (Cứ đi thẳng, thấy đèn xanh đèn đỏ thì rẽ phải).",
    level: "TOCFL A2"
  },
  {
    word: "右轉", pinyin: "yòu zhuǎn", hanViet: "Hữu chuyển",
    image: "",
    radical: "右 (Bộ Khẩu 口), 轉 (Bộ Xa 車)",
    explanation: "Động từ: Rẽ phải.",
    compounds: [
      { tc: "左轉", py: "zuǒ zhuǎn", vn: "rẽ trái" }
    ],
    examples: [
      { tc: "前面路口右轉。", py: "Qiánmiàn lùkǒu yòu zhuǎn.", vn: "Ngã rẽ phía trước rẽ phải." }
    ],
    idiom: "下個路口右轉 (Xià ge lùkǒu yòu zhuǎn) - Ngã tư tiếp theo rẽ phải. Ngữ cảnh: Khi đi xe máy chung với bạn bè hoặc dùng Google Maps, đây là khẩu lệnh cảnh báo chuyển hướng phổ biến nhất.",
    level: "TOCFL A2"
  },
  {
    word: "聽起來", pinyin: "tīng qǐlái", hanViet: "Thính khởi lai",
    image: "",
    radical: "聽 (Bộ Nhĩ 耳), 起 (Bộ Tẩu 走), 來 (Bộ Nhân 人)",
    explanation: "Cụm động từ: Nghe có vẻ.",
    compounds: [
      { tc: "看起來", py: "kàn qǐlái", vn: "nhìn có vẻ" }
    ],
    examples: [
      { tc: "這個主意聽起來不錯。", py: "Zhège zhǔyì tīng qǐlái búcuò.", vn: "Ý kiến này nghe có vẻ không tồi." }
    ],
    idiom: "聽起來不錯 (Tīng qǐlái búcuò) - Nghe hợp lý đấy / Nghe ngon đấy. Ngữ cảnh: Thường dùng để tán thành một lời rủ rê. Ví dụ bạn rủ: 'Tối nay đi ăn lẩu nhé?', người nghe sẽ hào hứng đáp: '聽起來不錯喔！' (Nghe có vẻ được đấy!).",
    level: "TOCFL A2"
  },
  {
    word: "看見", pinyin: "kànjiàn", hanViet: "Khán kiến",
    image: "",
    radical: "看 (Bộ Mục 目), 見 (Bộ Kiến 見)",
    explanation: "Động từ: Nhìn thấy.",
    compounds: [
      { tc: "聽見", py: "tīngjiàn", vn: "nghe thấy" }
    ],
    examples: [
      { tc: "你看見我的書了嗎？", py: "Nǐ kànjiàn wǒ de shū le ma?", vn: "Bạn có nhìn thấy sách của tôi không?" }
    ],
    idiom: "沒看見 (Méi kànjiàn) - Không nhìn thấy. Ngữ cảnh: Thường đi kèm với ngữ điệu phủ nhận nhanh trong giao tiếp hàng ngày. Khi ai đó hỏi bạn có thấy đồ vật của họ đâu không, bạn có thể lắc đầu: '我沒看見耶' (Tôi không thấy á).",
    level: "TOCFL A2"
  },
  {
    word: "下載", pinyin: "xiàzài", hanViet: "Hạ tái",
    image: "",
    radical: "下 (Bộ Nhất 一), 載 (Bộ Xa 車)",
    explanation: "Động từ: Tải xuống, download.",
    compounds: [
      { tc: "上傳", py: "shàngchuán", vn: "tải lên" }
    ],
    examples: [
      { tc: "請下載這個 APP。", py: "Qǐng xiàzài zhège APP.", vn: "Vui lòng tải ứng dụng này." }
    ],
    idiom: "下載 APP (Xiàzài APP) - Tải ứng dụng. Ngữ cảnh: Ở Đài Loan, chữ 'APP' thường được đánh vần từng chữ cái (ê-pi-pi). Bạn sẽ nghe câu này rất nhiều khi quét mã QR thanh toán hoặc khi nhận khuyến mãi tại các cửa hàng.",
    level: "TOCFL A2"
  },
  {
    word: "地圖", pinyin: "dìtú", hanViet: "Địa đồ",
    image: "",
    radical: "地 (Bộ Thổ 土), 圖 (Bộ Vi 囗)",
    explanation: "Danh từ: Bản đồ.",
    compounds: [
      { tc: "捷運地圖", py: "jiéyùn dìtú", vn: "bản đồ tàu điện ngầm" }
    ],
    examples: [
      { tc: "我手機裡有地圖。", py: "Wǒ shǒujī lǐ yǒu dìtú.", vn: "Trong điện thoại tôi có bản đồ." }
    ],
    idiom: "開導航 (Kāi dǎoháng) - Bật điều hướng (bản đồ). Ngữ cảnh: Mặc dù học từ '地圖' (Bản đồ), nhưng khi lái xe máy ở Đài Loan, giới trẻ thường nói '開導航' (bật điều hướng) thay vì nói 'xem bản đồ' một cách cứng ngắc.",
    level: "TOCFL A2"
  },
  {
    word: "好用", pinyin: "hǎoyòng", hanViet: "Hảo dụng",
    image: "",
    radical: "好 (Bộ Nữ 女), 用 (Bộ Dụng 用)",
    explanation: "Tính từ: Dễ dùng, tiện dụng, xài tốt.",
    compounds: [
      { tc: "好吃", py: "hǎochī", vn: "ngon (đồ ăn)" },
      { tc: "好玩", py: "hǎowán", vn: "vui (trò chơi, nơi chốn)" }
    ],
    examples: [
      { tc: "這個筆很好用。", py: "Zhège bǐ hěn hǎoyòng.", vn: "Cây bút này rất dễ viết." }
    ],
    idiom: "超好用 (Chāo hǎoyòng) - Siêu tiện lợi / Xài siêu thích. Ngữ cảnh: Thêm chữ '超' (Siêu) lên trước tính từ là thói quen cửa miệng đặc trưng của người Đài Loan khi muốn khen ngợi một món đồ nào đó mua trên Shopee hoặc ngoài siêu thị.",
    level: "TOCFL A2"
  },
  {
    word: "著", pinyin: "zhe", hanViet: "Trứ",
    image: "",
    radical: "著 (Bộ Thảo 艸)",
    explanation: "Trợ từ: Đứng sau động từ để biểu thị trạng thái đang diễn ra hoặc đang tiếp diễn.",
    compounds: [
      { tc: "看著", py: "kànzhe", vn: "đang nhìn" },
      { tc: "笑著", py: "xiàozhe", vn: "đang cười" }
    ],
    examples: [
      { tc: "他穿著一件紅色的衣服。", py: "Tā chuānzhe yí jiàn hóngsè de yīfú.", vn: "Anh ấy đang mặc một chiếc áo màu đỏ." }
    ],
    idiom: "帶著 (Dàizhe) - Mang theo. Ngữ cảnh: Rất hay dùng trong dặn dò hàng ngày. Ví dụ khi dự báo thời tiết có mưa, mẹ sẽ dặn con: '記得帶著雨傘！' (Nhớ mang theo ô đang đi nhé!).",
    level: "TOCFL A2"
  },
  {
    word: "日用品", pinyin: "rìyòngpǐn", hanViet: "Nhật dụng phẩm",
    image: "",
    radical: "日 (Bộ Nhật 日), 用 (Bộ Dụng 用), 品 (Bộ Khẩu 口)",
    explanation: "Danh từ: Đồ dùng sinh hoạt hàng ngày (kem đánh răng, giấy vệ sinh...).",
    compounds: [
      { tc: "用品", py: "yòngpǐn", vn: "đồ dùng" }
    ],
    examples: [
      { tc: "我要去超市買日用品。", py: "Wǒ yào qù chāoshì mǎi rìyòngpǐn.", vn: "Tôi muốn đi siêu thị mua đồ dùng hàng ngày." }
    ],
    idiom: "採買 (Cǎimǎi) - Mua sắm đồ đạc. Ngữ cảnh: Thay vì nói '買日用品' hơi dài dòng, khi đến chuỗi siêu thị như PX Mart (全聯), người Đài Loan thường dùng từ '採買' để chỉ việc mua sắm nhu yếu phẩm tích trữ cho cả tuần.",
    level: "TOCFL A2"
  },
  {
    word: "經過", pinyin: "jīngguò", hanViet: "Kinh quá",
    image: "",
    radical: "經 (Bộ Mịch 糸), 過 (Bộ Xước 辶)",
    explanation: "Động từ: Đi ngang qua.",
    compounds: [
      { tc: "路過", py: "lùguò", vn: "đi ngang đường" }
    ],
    examples: [
      { tc: "我每天去學校都會經過這家麵店。", py: "Wǒ měitiān qù xuéxiào dōu huì jīngguò zhè jiā miàndiàn.", vn: "Mỗi ngày đến trường tôi đều đi ngang qua tiệm mỳ này." }
    ],
    idiom: "剛好經過 (Gānghǎo jīngguò) - Vừa hay đi ngang qua. Ngữ cảnh: Một câu nói rất dễ thương. Ví dụ khi bạn lặn lội đi mua ly trà sữa ngon mang đến cho bạn bè, bạn có thể nói dối cho đỡ ngại: '我剛好經過，就順便買了' (Tôi tiện đường đi ngang qua, nên mua đại đó).",
    level: "TOCFL A2"
  },
  {
    word: "巷子", pinyin: "xiàngzi", hanViet: "Hạng tử",
    image: "",
    radical: "巷 (Bộ Kỷ 己), 子 (Bộ Tử 子)",
    explanation: "Danh từ: Con hẻm, ngõ nhỏ.",
    compounds: [
      { tc: "巷口", py: "xiàngkǒu", vn: "đầu hẻm" }
    ],
    examples: [
      { tc: "我家在前面的巷子裡。", py: "Wǒ jiā zài qiánmiàn de xiàngzi lǐ.", vn: "Nhà tôi ở trong con hẻm phía trước." }
    ],
    idiom: "巷子內的 (Xiàngzi nèi de) - Người trong hẻm (Chỉ người sành sỏi). Ngữ cảnh: Đây là cụm từ lóng cực hay của Đài Loan. Những quán ăn ngon nhất thường giấu trong hẻm, nên 'người trong hẻm' được hiểu là người rất sành sỏi, biết rành rọt những thứ tốt nhất mà người ngoài không biết.",
    level: "TOCFL A2"
  },
  {
    word: "餓", pinyin: "è", hanViet: "Ngạ",
    image: "",
    radical: "餓 (Bộ Thực 食)",
    explanation: "Tính từ: Đói bụng.",
    compounds: [
      { tc: "肚子餓", py: "dùzi è", vn: "bụng đói" }
    ],
    examples: [
      { tc: "我好餓，我們去吃飯吧。", py: "Wǒ hǎo è, wǒmen qù chīfàn ba.", vn: "Tôi đói quá, chúng ta đi ăn cơm thôi." }
    ],
    idiom: "肚子餓死了 (Dùzi è sǐ le) - Đói chết đi được. Ngữ cảnh: Giới trẻ Đài Loan rất hay thêm chữ '死了' (chết đi được) vào sau tính từ để phóng đại cảm xúc. Đây là câu cửa miệng sinh viên thường than vãn với nhau sau khi tan học.",
    level: "TOCFL A2"
  },
  {
    word: "一邊", pinyin: "yìbiān", hanViet: "Nhất biên",
    image: "",
    radical: "一 (Bộ Nhất 一), 邊 (Bộ Xước 辶)",
    explanation: "Phó từ: Vừa... vừa... (Chỉ hai hành động xảy ra cùng lúc).",
    compounds: [
      { tc: "一邊...一邊...", py: "yìbiān... yìbiān...", vn: "vừa... vừa..." }
    ],
    examples: [
      { tc: "他喜歡一邊吃飯一邊看電視。", py: "Tā xǐhuān yìbiān chīfàn yìbiān kàn diànshì.", vn: "Anh ấy thích vừa ăn cơm vừa xem tivi." }
    ],
    idiom: "邊走邊吃 (Biān zǒu biān chī) - Vừa đi vừa ăn. Ngữ cảnh: Đây là đặc sản văn hóa tại các chợ đêm Đài Loan. Trong giao tiếp, người Đài thường lược bỏ chữ '一', chỉ nói ngắn gọn là '邊...邊...' cho nhanh.",
    level: "TOCFL A2"
  },
  {
    word: "發現", pinyin: "fāxiàn", hanViet: "Phát hiện",
    image: "",
    radical: "發 (Bộ Bát 癶), 現 (Bộ Ngọc 玉)",
    explanation: "Động từ: Phát hiện ra, nhận ra.",
    compounds: [
      { tc: "發明", py: "fāmíng", vn: "phát minh" }
    ],
    examples: [
      { tc: "我發現這裡有一家新餐廳。", py: "Wǒ fāxiàn zhèlǐ yǒu yì jiā xīn cāntīng.", vn: "Tôi phát hiện ra ở đây có một nhà hàng mới." }
    ],
    idiom: "突然發現 (Túrán fāxiàn) - Đột nhiên nhận ra. Ngữ cảnh: Rất thường dùng khi kể chuyện. Ví dụ: '我走到一半，突然發現忘記帶錢包' (Tôi đi được nửa đường, đột nhiên nhận ra quên mang ví).",
    level: "TOCFL A2"
  },
  {
    word: "離", pinyin: "lí", hanViet: "Ly",
    image: "",
    radical: "離 (Bộ Chuy 隹)",
    explanation: "Giới từ: Cách, cách xa (chỉ khoảng cách thời gian hoặc không gian).",
    compounds: [
      { tc: "離開", py: "líkāi", vn: "rời đi" }
    ],
    examples: [
      { tc: "學校離我家很近。", py: "Xuéxiào lí wǒ jiā hěn jìn.", vn: "Trường học cách nhà tôi rất gần." }
    ],
    idiom: "離這裡很近 (Lí zhèlǐ hěn jìn) - Cách đây rất gần. Ngữ cảnh: Câu phản hồi lý tưởng khi chỉ đường cho khách du lịch, giúp họ yên tâm rằng họ có thể đi bộ tới nơi một cách dễ dàng.",
    level: "TOCFL A2"
  },
  {
    word: "背包", pinyin: "bēibāo", hanViet: "Bối bao",
    image: "",
    radical: "背 (Bộ Nhục 肉), 包 (Bộ Bao 勹)",
    explanation: "Danh từ: Ba lô.",
    compounds: [
      { tc: "包包", py: "bāobāo", vn: "túi xách nói chung" }
    ],
    examples: [
      { tc: "我的背包裡有一本書。", py: "Wǒ de bēibāo lǐ yǒu yì běn shū.", vn: "Trong ba lô của tôi có một quyển sách." }
    ],
    idiom: "背包客 (Bēibāokè) - Khách du lịch bụi, Tây ba lô. Ngữ cảnh: Ở Đài Loan, những bạn trẻ tự khoác ba lô đi du lịch vòng quanh đảo (環島) thường tự gọi mình là các '背包客' để thể hiện tinh thần trải nghiệm tự do.",
    level: "TOCFL A2"
  },
  {
    word: "正好", pinyin: "zhènghǎo", hanViet: "Chính hảo",
    image: "",
    radical: "正 (Bộ Chỉ 止), 好 (Bộ Nữ 女)",
    explanation: "Phó từ / Tính từ: Vừa vặn, đúng lúc.",
    compounds: [
      { tc: "剛好", py: "gānghǎo", vn: "vừa hay" }
    ],
    examples: [
      { tc: "這件衣服我穿正好。", py: "Zhè jiàn yīfú wǒ chuān zhènghǎo.", vn: "Chiếc áo này tôi mặc vừa vặn." },
      { tc: "你來得正好，我們一起去吃飯吧。", py: "Nǐ lái de zhènghǎo, wǒmen yìqǐ qù chīfàn ba.", vn: "Bạn đến đúng lúc lắm, chúng ta cùng đi ăn nhé." }
    ],
    idiom: "來的正好 (Lái de zhènghǎo) - Đến đúng lúc lắm! Ngữ cảnh: Một câu chào mừng cực kỳ nồng nhiệt. Ví dụ khi bạn đang cần thêm một người chơi board game và bạn của bạn vừa mở cửa bước vào, bạn lập tức reo lên: '你來的正好！' (Cậu đến đúng lúc lắm!).",
    level: "TOCFL A2"
  }
];
 
