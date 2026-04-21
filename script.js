// 1. DỮ LIỆU ĐẦY ĐỦ 18 CẶP TỪ
const dictionaryData = [
  {
    word: "埋怨 / 抱怨",
    pinyin: "Mányuàn / Bàoyuàn",
    hanViet: "Mai oán / Bão oán",
    explanation: "【抱怨】：對人或事物心懷不滿，並把這種不滿說出來。(Phàn nàn về người hoặc việc, nói ra sự bất mãn đó). <br> 【埋怨】：因事情不如意而怪罪對象，語氣較重。(Trách móc đối tượng khi sự việc không như ý, ngữ khí nặng hơn).",
    den: "Lời nói thể hiện sự bất mãn.",
    bong: "Sự oán hận tích tụ trong lòng.",
    examples: [
      { tc: "他總是抱怨工作太累。", py: "Tā zǒngshì bàoyuàn gōngzuò tài lèi.", vn: "Anh ấy luôn phàn nàn công việc quá mệt." },
      { tc: "這件事只能怪你自己，不能埋怨別人。", py: "Zhè jiàn shì zhǐnéng guài nǐ zìjǐ, bùnéng mányuàn biérén.", vn: "Việc này chỉ có thể trách bản thân bạn, không thể trách móc người khác." }
    ],
    idiom: "任勞任怨 (Rèn láo rèn yuàn) - Chịu thương chịu khó, không oán thán.",
    level: "TOCFL B"
  },
  {
    word: "靠",
    pinyin: "Kào",
    hanViet: "Khảo / Khấu",
    explanation: "【靠】：依附、憑藉，或身體的一部分挨近物體。(Dựa vào, nhờ vả, hoặc một phần thân thể sát gần vật thể).",
    den: "Tựa lưng vào ghế, để vật gì đó sát vào tường (靠牆).",
    bong: "Nhờ cậy sự giúp đỡ của người khác hoặc dựa vào năng lực bản thân.",
    examples: [
      { tc: "請不要靠著牆站，牆上有油漆。", py: "Qǐng bùyào kàozhe qiáng zhàn, qiáng shàng yǒu yóuqī.", vn: "Vui lòng đừng đứng tựa vào tường, trên tường có sơn." },
      { tc: "他全靠自己的努力才有今天。", py: "Tā quán kào zìjǐ de nǔlì cái yǒu jīntiān.", vn: "Anh ấy hoàn toàn dựa vào nỗ lực của bản thân mới có ngày hôm nay." }
    ],
    idiom: "在家靠父母，出外靠朋友 (Zài jiā kào fùmǔ, chūwài kào péngyǒu)",
    level: "TOCFL A"
  },
  {
    word: "描述 / 描寫",
    pinyin: "Miáoshù / Miáoxiě",
    hanViet: "Miêu thuật / Miêu tả",
    explanation: "【描述】：客觀地敘述事物的情狀或過程。(Thuật lại tình trạng hoặc quá trình khách quan). <br> 【描寫】：用語言文字把事物的形象表現出來。(Dùng ngôn từ thể hiện hình ảnh nghệ thuật).",
    den: "Nói về đặc điểm bên ngoài.",
    bong: "Khắc họa lại bản chất của một vấn đề.",
    examples: [
      { tc: "請向警察描述歹徒的外貌。", py: "Qǐng xiàng jǐngchá miáoshù dǎitú de wàimào.", vn: "Hãy mô tả diện mạo tên cướp với cảnh sát." },
      { tc: "這篇小說描寫得很生動。", py: "Zhè piān xiǎoshuō miáoxiě de hěn shēngdòng.", vn: "Cuốn tiểu thuyết này miêu tả rất sinh động." }
    ],
    idiom: "繪聲繪色 (Huì shēng huì sè) - Miêu tả sinh động như thật.",
    level: "TOCFL B"
  },
  {
    word: "催",
    pinyin: "Cuī",
    hanViet: "Thôi",
    explanation: "【催】：使事物的進度加快，或叫人趕快行動。(Làm tiến độ nhanh hơn, hoặc giục người khác mau hành động).",
    den: "Giục ai đó làm nhanh lên (giục đi học, giục trả tiền).",
    bong: "Sự hối thúc của thời gian hoặc định mệnh.",
    examples: [
      { tc: "媽媽催我快點起床，上學要遲到了。", py: "Māmā cuī wǒ kuàidiǎn qǐchuáng, shàngxué yào chídào le.", vn: "Mẹ giục tôi mau dậy đi, đi học sắp muộn rồi." },
      { tc: "房東又來催租金了。", py: "Fángdōng yòu lái cuī zūjīn le.", vn: "Chủ nhà lại đến đòi tiền thuê nhà rồi." }
    ],
    idiom: "催人奮進 (Cuī rén fènjìn) - Thúc đẩy con người ta nỗ lực tiến lên.",
    level: "TOCFL B"
  },
  {
    word: "裝修 / 裝潢",
    pinyin: "Zhuāngxiū / Zhuānghuáng",
    hanViet: "Trang tu / Trang hoàng",
    explanation: "【裝修】：指建築物的基礎修繕及設施安裝。(Sửa sang cơ bản). <br> 【裝潢】：側重於室內的美化與藝術佈置。(Thiên về làm đẹp nội thất).",
    den: "Cải tạo nhà cửa.",
    bong: "Che đậy, tô điểm vẻ bề ngoài.",
    examples: [
      { tc: "這間房子正在裝修，不能進去。", py: "Zhè jiān fángzi zhèngzài zhuāngxiū, bùnéng jìnqù.", vn: "Ngôi nhà này đang sửa chữa, không được vào." },
      { tc: "這家書店的裝潢很有設計感。", py: "Zhè jiā shūdiàn de zhuānghuáng hěn yǒu shèjì gǎn.", vn: "Trang trí của hiệu sách này rất có gu thiết kế." }
    ],
    idiom: "富麗堂皇 (Fùlì tánghuáng) - Trang hoàng lộng lẫy, rực rỡ.",
    level: "TOCFL B"
  },
  {
    word: "立刻 / 馬上",
    pinyin: "Lìkè / Mǎshàng",
    hanViet: "Lập khắc / Mã thượng",
    explanation: "【立刻】：表示動作在極短的時間內發生，較正式。(Thời gian cực ngắn, chính thức). <br> 【馬上】：表示很快就會發生，較口語。(Sẽ sớm xảy ra, khẩu ngữ).",
    den: "Hành động tức thì.",
    bong: "Chỉ sự khẩn trương, cấp bách.",
    examples: [
      { tc: "聽見鈴聲，同學們立刻進教室。", py: "Tīngjiàn língshēng, tóngxuémen lìkè jìn jiàoshì.", vn: "Nghe tiếng chuông, học sinh lập tức vào lớp." },
      { tc: "你等我一下，我馬上就來。", py: "Nǐ děng wǒ yīxià, wǒ mǎshàng jiù lái.", vn: "Bạn đợi tôi xíu, tôi đến ngay đây." }
    ],
    idiom: "立竿見影 (Lì gān jiàn yǐng) - Có kết quả ngay tức thì.",
    level: "TOCFL A"
  },
  {
    word: "傍晚 / 黃昏",
    pinyin: "Bàngwǎn / Huánghūn",
    hanViet: "Bàng vãn / Hoàng hôn",
    explanation: "【傍晚】：指臨近晚上的時候。(Lúc gần tối). <br> 【黃昏】：日落後到天黑前的時刻。(Sau khi mặt trời lặn đến trước khi trời tối).",
    den: "Thời điểm trời sập tối.",
    bong: "Ám chỉ giai đoạn cuối của một thời kỳ.",
    examples: [
      { tc: "傍晚時分，公園裡有很多老人在散步。", py: "Bàngwǎn shífēn, gōngyuán lǐ hěnduō lǎorén zài sànbù.", vn: "Lúc chạng vạng, trong công viên có rất nhiều người già tản bộ." },
      { tc: "黃昏的景色雖然美麗，卻令人感到憂傷。", py: "Huánghūn de jǐngsè suīrán měilì, què lìng rén gǎndào yōushāng.", vn: "Cảnh hoàng hôn tuy đẹp nhưng lại khiến người ta u sầu." }
    ],
    idiom: "夕陽無限好，只是近黃昏 (Xīyáng wúxiàn hǎo, zhǐshì jìn huánghūn)",
    level: "TOCFL B"
  },
  {
    word: "舒適 / 舒服",
    pinyin: "Shūshì / Shūfú",
    hanViet: "Thư thích / Thư phục",
    explanation: "【舒適】：側重於環境使人感到愉快。(Môi trường dễ chịu). <br> 【舒服】：指身體或精神感到輕鬆。(Cơ thể hoặc tinh thần khoan khoái).",
    den: "Cảm giác dễ chịu.",
    bong: "Sự an nhàn, vùng an toàn.",
    examples: [
      { tc: "這家飯店的房間非常舒適。", py: "Zhè jiā fàndiàn de fángjiān fēicháng shūshì.", vn: "Phòng của khách sạn này rất tiện nghi thoải mái." },
      { tc: "睡了一覺以後，我身體舒服多了。", py: "Shuì le yī jiào yǐhòu, wǒ shēntǐ shūfú duō le.", vn: "Sau khi ngủ một giấc, cơ thể tôi dễ chịu hơn nhiều rồi." }
    ],
    idiom: "舒適圈 (Shūshì quān) - Vùng an toàn.",
    level: "TOCFL A"
  },
  {
    word: "包括 / 包含",
    pinyin: "Bāokuò / Bāohán",
    hanViet: "Bao quát / Bao hàm",
    explanation: "【包括】：包含所有部分，指具體項目。(Gồm hạng mục cụ thể). <br> 【包含】：裡頭含有，側重於內在意義。(Chứa đựng ý nghĩa ẩn sâu).",
    den: "Gồm có (liệt kê thành phần).",
    bong: "Sự bao dung, hàm chứa bên trong.",
    examples: [
      { tc: "房租包括水電費在內。", py: "Fángzū bāokuò shuǐdiànfèi zàinèi.", vn: "Tiền thuê nhà bao gồm cả tiền điện nước." },
      { tc: "這句話包含了父母對你的愛。", py: "Zhè jiù huà bāohán le fùmǔ duì nǐ de ài.", vn: "Câu nói này chứa đựng tình yêu của cha mẹ." }
    ],
    idiom: "無所不包 (Wú suǒ bù bāo) - Không gì không bao hàm, rất đầy đủ.",
    level: "TOCFL B"
  },
  {
    word: "勤奮 / 勤勞",
    pinyin: "Qínfèn / Qínláo",
    hanViet: "Cần phấn / Cần lao",
    explanation: "【勤奮】：不懈地努力，側重於學習。(Thiên về học tập). <br> 【勤勞】：努力勞動，不怕辛苦。(Thiên về lao động).",
    den: "Chăm chỉ làm lụng, học hành.",
    bong: "Sự nỗ lực bền bỉ về ý chí.",
    examples: [
      { tc: "他學習非常勤奮，所以進步很快。", py: "Tā xuéxí fēicháng qínfèn, suǒyǐ jìnbù hěn kuài.", vn: "Anh ấy học hành rất cần mẫn nên tiến bộ rất nhanh." },
      { tc: "農村的人們過著勤勞的生活。", py: "Nóngcūn de rénmen guòzhe qínláo de shēnghuó.", vn: "Người dân nông thôn sống một cuộc đời cần lao." }
    ],
    idiom: "天道酬勤 (Tiāndào chóuqín) - Đạo trời đền đáp người chăm chỉ.",
    level: "TOCFL B"
  },
  {
    word: "意思 / 意義",
    pinyin: "Yìsi / Yìyì",
    hanViet: "Ý tứ / Ý nghĩa",
    explanation: "【意思】：含義、趣味或心意。(Hàm ý, thú vị hoặc lòng thành). <br> 【意義】：價值或深刻的作用。(Giá trị hoặc tác dụng sâu sắc).",
    den: "Nghĩa của từ vựng.",
    bong: "Giá trị nhân văn, mục đích sống.",
    examples: [
      { tc: "我不懂這個詞的意思。", py: "Wǒ bù dǒng zhè ge cí de yìsi.", vn: "Tôi không hiểu nghĩa của từ này." },
      { tc: "做志工是一件很有意義的事。", py: "Zuò zhìgōng shì yī jiàn hěn yǒu yìyì de shì.", vn: "Làm tình nguyện là một việc rất có ý nghĩa." }
    ],
    idiom: "小意思 (Xiǎo yìsi) - Chút lòng thành / Chuyện nhỏ.",
    level: "TOCFL A"
  },
  {
    word: "只有 / 只要",
    pinyin: "Zhǐyǒu / Zhǐyào",
    hanViet: "Chỉ hữu / Chỉ yếu",
    explanation: "【只有】：唯一的條件。(Điều kiện duy nhất). <br> 【只要】：充足的條件。(Điều kiện cần).",
    den: "Các liên từ nối điều kiện.",
    bong: "Thể hiện ranh giới hoặc lòng quyết tâm.",
    examples: [
      { tc: "只有努力，才能成功。", py: "Zhǐyǒu nǔlì, cáinéng chénggōng.", vn: "Chỉ có nỗ lực mới có thể thành công." },
      { tc: "只要你肯學，我就教你。", py: "Zhǐyào nǐ kěn xué, wǒ jiù jiāo nǐ.", vn: "Chỉ cần bạn chịu học, tôi sẽ dạy bạn." }
    ],
    idiom: "獨一無二 (Dú yī wú èr) - Duy nhất, không có cái thứ hai.",
    level: "TOCFL A"
  },
  {
    word: "突然 / 忽然",
    pinyin: "Túrán / Hūrán",
    hanViet: "Đột nhiên / Hốt nhiên",
    explanation: "【突然】：急促且出人意料。(Sự việc gấp gáp). <br> 【忽然】：很快且出乎意料。(Hành động bất ngờ).",
    den: "Sự việc xảy ra bất thình lình.",
    bong: "Sự thay đổi không báo trước của số phận.",
    examples: [
      { tc: "天空突然下起了大雨。", py: "Tiānkōng túrán xià qǐ le dàyǔ.", vn: "Bầu trời đột nhiên đổ mưa lớn." },
      { tc: "我忽然想起來今天有考試。", py: "Wǒ hūrán xiǎng qǐlái jīntiān yǒu kǎoshì.", vn: "Tôi bỗng nhiên nhớ ra hôm nay có bài kiểm tra." }
    ],
    idiom: "忽然之間 (Hūrán zhī jiān) - Trong chớp mắt, bỗng chốc.",
    level: "TOCFL A"
  },
  {
    word: "了解 / 理解",
    pinyin: "Liǎojiě / Lǐjiě",
    hanViet: "Liễu giải / Lý giải",
    explanation: "【了解】：知道得很清楚。(Biết rõ thông tin). <br> 【理解】：明白道理或對方的處境。(Thấu hiểu đạo lý/hoàn cảnh).",
    den: "Nắm bắt thông tin, sự thật.",
    bong: "Sự đồng cảm, thấu hiểu tâm hồn.",
    examples: [
      { tc: "我很了解這間公司的情況。", py: "Wǒ hěn liǎojiě zhè jiān gōngsī de qíngkuàng.", vn: "Tôi rất rõ tình hình công ty này." },
      { tc: "請理解我這麼做的原因。", py: "Qǐng lǐjiě wǒ zhème zuò de yuányīn.", vn: "Vui lòng thấu hiểu nguyên nhân tôi làm như vậy." }
    ],
    idiom: "通情達理 (Tōng qíng dá lǐ) - Hiểu tình đạt lý, thấu tình đạt lý.",
    level: "TOCFL A"
  },
  {
    word: "願意 / 希望",
    pinyin: "Yuànyì / Xīwàng",
    hanViet: "Nguyện ý / Hy vọng",
    explanation: "【願意】：出於自願。(Tự nguyện làm gì). <br> 【希望】：盼望理想情況發生。(Kỳ vọng điều tốt đẹp).",
    den: "Mong muốn của cá nhân.",
    bong: "Kỳ vọng vào một tương lai tốt hơn.",
    examples: [
      { tc: "你願意嫁給他嗎？", py: "Nǐ yuànyì jià gěi tā ma?", vn: "Bạn có nguyện ý lấy anh ấy không?" },
      { tc: "我希望明天是個好天氣。", py: "Wǒ xīwàng míngtiān shì ge hǎo tiānqì.", vn: "Tôi hy vọng ngày mai trời đẹp." }
    ],
    idiom: "心甘情願 (Xīn gān qíng yuàn) - Hoàn toàn tự nguyện, cam tâm tình nguyện.",
    level: "TOCFL A"
  },
  {
    word: "決定 / 打算",
    pinyin: "Juédìng / Dǎsuàn",
    hanViet: "Quyết định / Đả toán",
    explanation: "【決定】：做出最後判斷。(Chốt phương án). <br> 【打算】：考慮、計畫。(Dự tính, kế hoạch).",
    den: "Kế hoạch cho tương lai.",
    bong: "Sự quyết đoán trong cuộc sống.",
    examples: [
      { tc: "我決定畢業後去台灣留學。", py: "Wǒ juédìng bìyè hòu qù Táiwān liúxué.", vn: "Tôi quyết định tốt nghiệp xong đi Đài Loan du học." },
      { tc: "暑假你有什麼打算？", py: "Shǔjià nǐ yǒu shéme dǎsuàn?", vn: "Nghỉ hè bạn có dự định gì không?" }
    ],
    idiom: "人算不如天算 (Rén suàn bù rú tiān suàn) - Người tính không bằng trời tính.",
    level: "TOCFL A"
  },
  {
    word: "普通 / 一般",
    pinyin: "Pǔtōng / Yībān",
    hanViet: "Phổ thông / Nhất bàn",
    explanation: "【普通】：平常、沒有特色。(Bình thường). <br> 【一般】：通常情況、程度中等。(Mức trung bình).",
    den: "Mức độ trung bình của sự vật.",
    bong: "Sự khiêm tốn, không phô trương.",
    examples: [
      { tc: "這只是普通的手錶，不貴。", py: "Zhè zhǐshì pǔtōng de shǒubiǎo, bù guì.", vn: "Đây chỉ là đồng hồ bình thường thôi, không đắt." },
      { tc: "他的成績一般，沒有特別突出。", py: "Tā de chéngjī yībān, méiyǒu tèbié tūchū.", vn: "Thành tích anh ấy bình thường, không nổi trội." }
    ],
    idiom: "平淡無奇 (Píng dàn wú qí) - Tầm thường, không có gì đặc sắc.",
    level: "TOCFL A"
  },
  {
    word: "改變 / 變化",
    pinyin: "Gǎibiàn / Biànhuà",
    hanViet: "Cải biến / Biến hóa",
    explanation: "【改變】：使事物發生更動。(Làm thay đổi). <br> 【變化】：性質形態產生不同。(Sự thay đổi).",
    den: "Sự biến đổi của sự vật.",
    bong: "Sự vận động không ngừng của cuộc sống.",
    examples: [
      { tc: "環境改變了人的性格。", py: "Huánjìng gǎibiàn le rén de xìnggé.", vn: "Môi trường làm thay đổi tính cách con người." },
      { tc: "幾年不見，這裡的變化真大。", py: "Jǐ nián bùjiàn, zhèlǐ de biànhuà zhēn dà.", vn: "Mấy năm không gặp, nơi này thay đổi lớn thật." }
    ],
    idiom: "千變萬化 (Qiānbiàn wànhuà) - Thiên biến vạn hóa, thay đổi khôn lường.",
    level: "TOCFL A"
  }
];

// 2. HÀM ÂM THANH (DÙNG WEB SPEECH API - CỰC KỲ ỔN ĐỊNH)
function playAudio(text, lang) {
  if (!text) return;

  // Dừng mọi giọng nói đang phát dở để không bị chồng chéo
  window.speechSynthesis.cancel();

  // Làm sạch văn bản trước khi đọc
  const cleanText = text.replace(/[【】()（）:<br>]/g, " ").trim();
  
  const utterance = new SpeechSynthesisUtterance(cleanText);

  // Thiết lập ngôn ngữ chuẩn
  // Nếu lang là 'zh-TW' thì dùng giọng Trung, ngược lại dùng tiếng Việt
  utterance.lang = lang; 

  // Tốc độ đọc (0.8 là chậm rãi, phù hợp cho sinh viên học ngoại ngữ)
  utterance.rate = 0.85; 
  utterance.pitch = 1;

  // Thực hiện lệnh đọc
  window.speechSynthesis.speak(utterance);
}

// 3. HÀM HIỂN THỊ CHI TIẾT
// 3. HÀM HIỂN THỊ CHI TIẾT
function displayWords(data) {
  const container = document.getElementById('dictionary-container');
  if (!container) return;
  
  container.innerHTML = data.map(item => `
    <div class="word-card">
      <span class="badge">${item.level}</span>
      <h1 class="word-head">
        ${item.word} 
        <button onclick="playAudio('${item.word.split('/')[0].trim()}', 'zh-TW')">🔊</button>
      </h1>
      <p class="pinyin">${item.pinyin}</p>
      <p><strong>Hán Việt:</strong> ${item.hanViet}</p>
      
      <div class="content-section" style="border-left: 5px solid #b22222;">
        <span class="label">GIẢI THÍCH (解釋):</span>
        <p>${item.explanation}</p>
      </div>

      <div style="display: flex; gap: 10px; margin: 10px 0;">
        <div class="content-section" style="flex:1;"><strong>Nghĩa đen:</strong> ${item.den}</div>
        <div class="content-section" style="flex:1;"><strong>Nghĩa bóng:</strong> ${item.bong}</div>
      </div>

      <div class="content-section" style="background: #f0f7ff;">
        <span class="label">VÍ DỤ (例子):</span>
        ${item.examples.map(ex => `
          <div style="margin-bottom: 10px;">
            <div class="example-zh">${ex.tc} <button onclick="playAudio('${ex.tc}', 'zh-TW')">🔊</button></div>
            <div style="font-size: 0.9em; color: #666;">${ex.py}</div>
            <div class="example-vi">${ex.vn}</div>
          </div>
        `).join('')}
      </div>

      <div class="content-section" style="border: none;">
        <strong>💡 Thành ngữ:</strong> ${item.idiom}
      </div>
    </div>
  `).join('');
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
