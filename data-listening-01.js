const listeningExamData = [
    // ==========================================
    // PHẦN 1: NGHE VÀ CHỌN ĐÁP ÁN ĐÚNG THEO TRANH (Câu 1 - 15)
    // ==========================================
    {
        id: 1, part: 1,
        audio: "audio/Test_01/q1.mp3",
        question_image: "images/Listening/Test_01/q1.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }],
        correctAnswer: "B",
        transcript: "請問，這是什麼？\n(A) 這是一雙鞋子。\n(B) 這是一件外套。\n(C) 這是一條褲子。"
    },
    {
        id: 2, part: 1, audio: "audio/Test_01/q2.mp3", question_image: "images/Listening/Test_01/q2.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "A",
        transcript: "請問，他在做什麼？\n(A) 他在游泳。\n(B) 他在唱歌。\n(C) 他在跑步。"
    },
    {
        id: 3, part: 1, audio: "audio/Test_01/q3.mp3", question_image: "images/Listening/Test_01/q3.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "C",
        transcript: "請問，現在是幾點？\n(A) 七點。\n(B) 九點。\n(C) 八點。"
    },
    {
        id: 4, part: 1, audio: "audio/Test_01/q4.mp3", question_image: "images/Listening/Test_01/q4.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "A",
        transcript: "請問，今天天氣怎麼樣？\n(A) 正在下雨。\n(B) 天氣很好。\n(C) 正在下雪。"
    },
    {
        id: 5, part: 1, audio: "audio/Test_01/q5.mp3", question_image: "images/Listening/Test_01/q5.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "B",
        transcript: "請問，椅子上面有什麼？\n(A) 有一本書。\n(B) 有一隻貓。\n(C) 有一隻狗。"
    },
    {
        id: 6, part: 1, audio: "audio/Test_01/q6.mp3", question_image: "images/Listening/Test_01/q6.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "C",
        transcript: "請問，王先生每天怎麼去上班？\n(A) 坐火車。\n(B) 自己開車。\n(C) 坐公車。"
    },
    {
        id: 7, part: 1, audio: "audio/Test_01/q7.mp3", question_image: "images/Listening/Test_01/q7.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "B",
        transcript: "請問，這位先生做什麼工作？\n(A) 他是老師。\n(B) 他是醫生。\n(C) 他是學生。"
    },
    {
        id: 8, part: 1, audio: "audio/Test_01/q8.mp3", question_image: "images/Listening/Test_01/q8.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "C",
        transcript: "請問，弟弟正在做什麼？\n(A) 他在看電視。\n(B) 他在睡覺。\n(C) 他在打電話。"
    },
    {
        id: 9, part: 1, audio: "audio/Test_01/q9.mp3", question_image: "images/Listening/Test_01/q9.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "A",
        transcript: "請問，小姐手裡拿著什麼？\n(A) 一杯咖啡。\n(B) 一杯水。\n(C) 一杯茶。"
    },
    {
        id: 10, part: 1, audio: "audio/Test_01/q10.mp3", question_image: "images/Listening/Test_01/q10.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "B",
        transcript: "請問，他們現在在哪裡？\n(A) 在醫院。\n(B) 在超級市場。\n(C) 在學校。"
    },
    {
        id: 11, part: 1, audio: "audio/Test_01/q11.mp3", question_image: "images/Listening/Test_01/q11.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "C",
        transcript: "請問，桌子上有什麼水果？\n(A) 蘋果。\n(B) 西瓜。\n(C) 香蕉。"
    },
    {
        id: 12, part: 1, audio: "audio/Test_01/q12.mp3", question_image: "images/Listening/Test_01/q12.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "B",
        transcript: "請問，哥哥週末喜歡做什麼？\n(A) 看書。\n(B) 騎腳踏車。\n(C) 爬山。"
    },
    {
        id: 13, part: 1, audio: "audio/Test_01/q13.mp3", question_image: "images/Listening/Test_01/q13.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "B",
        transcript: "請問，那個女孩怎麼了？\n(A) 她很高興。\n(B) 她很難過。\n(C) 她很生氣。"
    },
    {
        id: 14, part: 1, audio: "audio/Test_01/q14.mp3", question_image: "images/Listening/Test_01/q14.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "A",
        transcript: "請問，這是什麼食物？\n(A) 牛肉麵。\n(B) 蛋炒飯。\n(C) 三明治。"
    },
    {
        id: 15, part: 1, audio: "audio/Test_01/q15.mp3", question_image: "images/Listening/Test_01/q15.png",
        options: [{ label: "A" }, { label: "B" }, { label: "C" }], correctAnswer: "B",
        transcript: "請問，吃飯前要做什麼？\n(A) 洗臉。\n(B) 洗手。\n(C) 洗碗。"
    },

    // ==========================================
    // PHẦN 2 & 3: NGHE ĐOẠN HỘI THOẠI VÀ CHỌN TRANH (Câu 16 - 40)
    // ==========================================
    {
        id: 16, part: 2, audio: "audio/Test_01/q16.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q16_A.png" }, { label: "B", image: "images/Listening/Test_01/q16_B.png" }, { label: "C", image: "images/Listening/Test_01/q16_C.png" }],
        correctAnswer: "B", transcript: "男：你昨天晚上做什麼了？\n女：我看了一個很好看的節目。"
    },
    {
        id: 17, part: 2, audio: "audio/Test_01/q17.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q17_A.png" }, { label: "B", image: "images/Listening/Test_01/q17_B.png" }, { label: "C", image: "images/Listening/Test_01/q17_C.png" }],
        correctAnswer: "C", transcript: "女：從台北到高雄，坐什麼最快？\n男：當然是坐高鐵。"
    },
    {
        id: 18, part: 2, audio: "audio/Test_01/q18.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q18_A.png" }, { label: "B", image: "images/Listening/Test_01/q18_B.png" }, { label: "C", image: "images/Listening/Test_01/q18_C.png" }],
        correctAnswer: "B", transcript: "男：你怎麼了？不舒服嗎？\n女：我吃太多了，現在肚子好痛。"
    },
    {
        id: 19, part: 2, audio: "audio/Test_01/q19.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q19_A.png" }, { label: "B", image: "images/Listening/Test_01/q19_B.png" }, { label: "C", image: "images/Listening/Test_01/q19_C.png" }],
        correctAnswer: "B", transcript: "女：你家有養小動物嗎？\n男：有，我有一隻可愛的小貓。"
    },
    {
        id: 20, part: 2, audio: "audio/Test_01/q20.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q20_A.png" }, { label: "B", image: "images/Listening/Test_01/q20_B.png" }, { label: "C", image: "images/Listening/Test_01/q20_C.png" }],
        correctAnswer: "B", transcript: "男：弟弟呢？在房間嗎？\n女：他在洗澡，等一下就出來。"
    },
    {
        id: 21, part: 2, audio: "audio/Test_01/q21.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q21_A.png" }, { label: "B", image: "images/Listening/Test_01/q21_B.png" }, { label: "C", image: "images/Listening/Test_01/q21_C.png" }],
        correctAnswer: "B", transcript: "女：請問這本書多少錢？\n男：五百元。"
    },
    {
        id: 22, part: 2, audio: "audio/Test_01/q22.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q22_A.png" }, { label: "B", image: "images/Listening/Test_01/q22_B.png" }, { label: "C", image: "images/Listening/Test_01/q22_C.png" }],
        correctAnswer: "A", transcript: "男：今天是媽媽的生日，我們送她什麼好？\n女：買一個漂亮的蛋糕吧！"
    },
    {
        id: 23, part: 2, audio: "audio/Test_01/q23.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q23_A.png" }, { label: "B", image: "images/Listening/Test_01/q23_B.png" }, { label: "C", image: "images/Listening/Test_01/q23_C.png" }],
        correctAnswer: "A", transcript: "女：明天的體育課我們要打籃球嗎？\n男：不是，明天老師要我們踢足球。"
    },
    {
        id: 24, part: 2, audio: "audio/Test_01/q24.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q24_A.png" }, { label: "B", image: "images/Listening/Test_01/q24_B.png" }, { label: "C", image: "images/Listening/Test_01/q24_C.png" }],
        correctAnswer: "A", transcript: "男：請問你要喝什麼飲料？\n女：請給我一杯珍珠奶茶，謝謝。"
    },
    {
        id: 25, part: 2, audio: "audio/Test_01/q25.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q25_A.png" }, { label: "B", image: "images/Listening/Test_01/q25_B.png" }, { label: "C", image: "images/Listening/Test_01/q25_C.png" }],
        correctAnswer: "B", transcript: "女：外面好冷啊！\n男：對啊，你應該多穿一點衣服。"
    },
    {
        id: 26, part: 2, audio: "audio/Test_01/q26.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q26_A.png" }, { label: "B", image: "images/Listening/Test_01/q26_B.png" }, { label: "C", image: "images/Listening/Test_01/q26_C.png" }],
        correctAnswer: "B", transcript: "男：你在聽什麼？\n女：這是一首很好聽的英文歌。"
    },
    {
        id: 27, part: 2, audio: "audio/Test_01/q27.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q27_A.png" }, { label: "B", image: "images/Listening/Test_01/q27_B.png" }, { label: "C", image: "images/Listening/Test_01/q27_C.png" }],
        correctAnswer: "C", transcript: "女：小明怎麼看起來不太高興？\n男：他的手機不見了，所以很生氣。"
    },
    {
        id: 28, part: 2, audio: "audio/Test_01/q28.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q28_A.png" }, { label: "B", image: "images/Listening/Test_01/q28_B.png" }, { label: "C", image: "images/Listening/Test_01/q28_C.png" }],
        correctAnswer: "B", transcript: "男：我來幫你打掃吧。\n女：好，那你幫我把地掃乾淨。"
    },
    {
        id: 29, part: 2, audio: "audio/Test_01/q29.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q29_A.png" }, { label: "B", image: "images/Listening/Test_01/q29_B.png" }, { label: "C", image: "images/Listening/Test_01/q29_C.png" }],
        correctAnswer: "C", transcript: "女：你要出門嗎？要去哪裡？\n男：我要去銀行換錢。"
    },
    {
        id: 30, part: 2, audio: "audio/Test_01/q30.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q30_A.png" }, { label: "B", image: "images/Listening/Test_01/q30_B.png" }, { label: "C", image: "images/Listening/Test_01/q30_C.png" }],
        correctAnswer: "B", transcript: "男：這件紅色的裙子真好看。\n女：可是我覺得太長了，我不買。"
    },
    {
        id: 31, part: 3, audio: "audio/Test_01/q31.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q31_A.png" }, { label: "B", image: "images/Listening/Test_01/q31_B.png" }, { label: "C", image: "images/Listening/Test_01/q31_C.png" }],
        correctAnswer: "C", transcript: "男：你看起來很累，生病了嗎？\n女：對，我從昨天晚上開始發燒。\n男：那你去看醫生了嗎？\n女：已經看過了，醫生叫我多休息。\n問：這位小姐怎麼了？"
    },
    {
        id: 32, part: 3, audio: "audio/Test_01/q32.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q32_A.png" }, { label: "B", image: "images/Listening/Test_01/q32_B.png" }, { label: "C", image: "images/Listening/Test_01/q32_C.png" }],
        correctAnswer: "C", transcript: "女：你每天怎麼去學校？\n男：我平常都坐捷運。\n女：今天天氣很好，怎麼不騎腳踏車？\n男：因為我的腳踏車壞了。\n問：這位先生平常怎麼去學校？"
    },
    {
        id: 33, part: 3, audio: "audio/Test_01/q33.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q33_A.png" }, { label: "B", image: "images/Listening/Test_01/q33_B.png" }, { label: "C", image: "images/Listening/Test_01/q33_C.png" }],
        correctAnswer: "C", transcript: "男：小美的生日快到了。\n女：她的生日是在五月嗎？\n男：不是，她的生日是八月。\n女：那我們下個月再買禮物吧。\n問：小美的生日是幾月？"
    },
    {
        id: 34, part: 3, audio: "audio/Test_01/q34.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q34_A.png" }, { label: "B", image: "images/Listening/Test_01/q34_B.png" }, { label: "C", image: "images/Listening/Test_01/q34_C.png" }],
        correctAnswer: "C", transcript: "女：等一下我們要去哪裡？\n男：我們去喝杯咖啡怎麼樣？\n女：可是我想先去超市買點東西。\n男：好，那我們買完東西再去喝咖啡。\n問：他們等一下最先要去哪裡？"
    },
    {
        id: 35, part: 3, audio: "audio/Test_01/q35.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q35_A.png" }, { label: "B", image: "images/Listening/Test_01/q35_B.png" }, { label: "C", image: "images/Listening/Test_01/q35_C.png" }],
        correctAnswer: "C", transcript: "男：你的手機怎麼了？\n女：不小心掉到地上，壞掉了。\n男：那你現在能打電話嗎？\n女：不行，我明天要去買一支新的。\n問：這位小姐的什麼東西壞了？"
    },
    {
        id: 36, part: 3, audio: "audio/Test_01/q36.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q36_A.png" }, { label: "B", image: "images/Listening/Test_01/q36_B.png" }, { label: "C", image: "images/Listening/Test_01/q36_C.png" }],
        correctAnswer: "B", transcript: "女：開會是幾點開始？\n男：本來是九點，可是老闆晚點才來。\n女：那時間改成幾點了？\n男：改到九點半了。\n問：開會是什麼時候開始？"
    },
    {
        id: 37, part: 3, audio: "audio/Test_01/q37.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q37_A.png" }, { label: "B", image: "images/Listening/Test_01/q37_B.png" }, { label: "C", image: "images/Listening/Test_01/q37_C.png" }],
        correctAnswer: "B", transcript: "男：你的興趣是什麼？\n女：我喜歡去外面照相。你呢？\n男：我喜歡唱歌，週末常常去KTV。\n女：真不錯。\n問：這位小姐的興趣是什麼？"
    },
    {
        id: 38, part: 3, audio: "audio/Test_01/q38.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q38_A.png" }, { label: "B", image: "images/Listening/Test_01/q38_B.png" }, { label: "C", image: "images/Listening/Test_01/q38_C.png" }],
        correctAnswer: "B", transcript: "女：這家餐廳什麼菜最好吃？\n男：我覺得他們的牛肉麵不錯。\n女：可是我不吃牛。\n男：那你可以點他們的烤雞肉，也很好吃。\n問：這位小姐不吃什麼肉？"
    },
    {
        id: 39, part: 3, audio: "audio/Test_01/q39.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q39_A.png" }, { label: "B", image: "images/Listening/Test_01/q39_B.png" }, { label: "C", image: "images/Listening/Test_01/q39_C.png" }],
        correctAnswer: "C", transcript: "男：媽媽，有什麼我可以幫忙的嗎？\n女：你去把房間打掃一下吧。\n男：房間我昨天整理過了。\n女：那去把垃圾拿出去丟。\n問：媽媽最後叫這位先生做什麼事？"
    },
    {
        id: 40, part: 3, audio: "audio/Test_01/q40.mp3",
        options: [{ label: "A", image: "images/Listening/Test_01/q40_A.png" }, { label: "B", image: "images/Listening/Test_01/q40_B.png" }, { label: "C", image: "images/Listening/Test_01/q40_C.png" }],
        correctAnswer: "A", transcript: "女：外面雨下得太大了！\n男：對啊，你有帶雨傘嗎？\n女：有，可是風太大了，雨傘沒用。\n男：那我借你一件雨衣吧。\n問：這位先生借給小姐什麼東西？"
    },

    // ==========================================
    // PHẦN 4: NGHE VÀ CHỌN ĐÁP ÁN CHỮ (Câu 41 - 50)
    // ==========================================
    {
        id: 41, part: 4, audio: "audio/Test_01/q41.mp3",
        options: [
            { label: "A", text: "火車站" }, { label: "B", text: "圖書館" },
            { label: "C", text: "醫院" }, { label: "D", text: "電影院" }
        ],
        correctAnswer: "B", transcript: "男：請問，這附近有借書的地方嗎？\n女：有，前面就有一間。\n男：離這裡近嗎？\n女：很近，走路三分鐘就到了。\n問：這位先生在找什麼地方？"
    },
    {
        id: 42, part: 4, audio: "audio/Test_01/q42.mp3",
        options: [
            { label: "A", text: "天氣太熱了" }, { label: "B", text: "沒有帶錢包" },
            { label: "C", text: "找不到想買的書" }, { label: "D", text: "東西太貴了" }
        ],
        correctAnswer: "C", transcript: "女：你逛了半天，怎麼什麼都沒買？\n男：我想買的書，這裡都沒有。\n女：那我們去別家書店看看吧。\n男：好，希望能找到。\n問：這位先生為什麼沒買東西？"
    },
    {
        id: 43, part: 4, audio: "audio/Test_01/q43.mp3",
        options: [
            { label: "A", text: "學生" }, { label: "B", text: "老闆" },
            { label: "C", text: "醫生" }, { label: "D", text: "司機" }
        ],
        correctAnswer: "B", transcript: "男：不好意思，我今天可以請假嗎？\n女：怎麼了？哪裡不舒服嗎？\n男：我有點發燒，想去看醫生。\n女：好的，你多休息，工作的事明天再說。\n問：這位小姐可能是什麼人？"
    },
    {
        id: 44, part: 4, audio: "audio/Test_01/q44.mp3",
        options: [
            { label: "A", text: "兩百元" }, { label: "B", text: "三百元" },
            { label: "C", text: "四百元" }, { label: "D", text: "五百元" }
        ],
        correctAnswer: "B", transcript: "女：老闆，請問兩張電影票多少錢？\n男：一張兩百元，兩張四百。\n女：學生有打折嗎？\n男：學生便宜一百元。\n問：這位小姐買兩張學生票要付多少錢？"
    },
    {
        id: 45, part: 4, audio: "audio/Test_01/q45.mp3",
        options: [
            { label: "A", text: "沒聽到老師說話" }, { label: "B", text: "作業寫錯了" },
            { label: "C", text: "忘了寫名字" }, { label: "D", text: "忘了帶作業" }
        ],
        correctAnswer: "D", transcript: "男：老師，對不起。\n女：怎麼了？你的作業呢？\n男：我昨天寫完了，可是今天忘了帶。\n女：明天一定要記得帶來。\n問：這位男同學怎麼了？"
    },
    {
        id: 46, part: 4, audio: "audio/Test_01/q46.mp3",
        options: [
            { label: "A", text: "運動" }, { label: "B", text: "睡覺" },
            { label: "C", text: "看電視" }, { label: "D", text: "上網" }
        ],
        correctAnswer: "A", transcript: "女：你最近怎麼變瘦了？\n男：因為我現在每天下班後都去跑步。\n女：每天跑嗎？不會很累嗎？\n男：一開始很累，現在覺得身體變好了。\n問：這位先生每天下班後做什麼？"
    },
    {
        id: 47, part: 4, audio: "audio/Test_01/q47.mp3",
        options: [
            { label: "A", text: "搭公車" }, { label: "B", text: "搭飛機" },
            { label: "C", text: "自己開車" }, { label: "D", text: "搭火車" }
        ],
        correctAnswer: "B", transcript: "男：你這次去日本玩，機票買了嗎？\n女：買好了，下個星期五出發。\n男：要我去機場送你嗎？\n女：不用了，我坐捷運去就可以了。\n問：這位小姐要去日本玩，她要怎麼去？"
    },
    {
        id: 48, part: 4, audio: "audio/Test_01/q48.mp3",
        options: [
            { label: "A", text: "冷氣壞掉了" }, { label: "B", text: "他們要搬家了" },
            { label: "C", text: "房間太小了" }, { label: "D", text: "想買新房子" }
        ],
        correctAnswer: "A", transcript: "女：房間裡好熱啊！\n男：冷氣怎麼不涼了？\n女：好像壞掉了，打電話請人來修吧。\n男：好，我現在就打。\n問：他們遇到了什麼問題？"
    },
    {
        id: 49, part: 4, audio: "audio/Test_01/q49.mp3",
        options: [
            { label: "A", text: "想要學做菜" }, { label: "B", text: "覺得很好吃" },
            { label: "C", text: "覺得很難吃" }, { label: "D", text: "覺得肚子痛" }
        ],
        correctAnswer: "B", transcript: "男：這魚是你做的嗎？真好吃！\n女：謝謝，這是我跟媽媽學的。\n男：你真的很會做菜。\n女：哪裡，你喜歡的話多吃一點。\n問：這位先生覺得這道菜怎麼樣？"
    },
    {
        id: 50, part: 4, audio: "audio/Test_01/q50.mp3",
        options: [
            { label: "A", text: "想買新的紅衣服" }, { label: "B", text: "買錯東西了" },
            { label: "C", text: "不想去參加晚會" }, { label: "D", text: "衣服穿不下了" }
        ],
        correctAnswer: "D", transcript: "女：奇怪，這件紅色的衣服怎麼穿不下了？\n男：你是不是變胖了？\n女：可能吧，最近吃太多了。\n男：那你晚上的舞會要穿哪一件？\n問：這位小姐怎麼了？"
    }
];
