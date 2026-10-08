// =======================================================
// DỮ LIỆU LUYỆN THI TOCFL (data-exam.js)
// =======================================================

const examData = [
  {
    exam_id: "tocfl_bandA_test1",
    title: "Đề thi thử TOCFL Band A - Đề số 1",
    level: "TOCFL Band A",
    description: "Đề thi thử mô phỏng cấu trúc thực tế, bao gồm đầy đủ 2 kỹ năng Nghe hiểu (50 câu) và Đọc hiểu (50 câu).",
    
    // --- PHẦN 2: KỸ NĂNG NGHE (聽力) ---
    listening_sections: [
      {
        part_name: "第一部分：辨識句意 (Phần 1: Nhận diện ý câu)",
        description_zh: "說明：Mỗi câu nghe 2 lần, chọn tranh đúng.",
        questions: [
          // Sau này chúng ta sẽ nhét 50 câu nghe vào đây
        ]
      }
    ],

    // --- PHẦN 1: KỸ NĂNG ĐỌC (閱讀) ---
    reading_sections: [
      {
        part_name: "第一部分：看圖辨義 (Phần 1: Nhìn hình đoán câu)",
        description_zh: "說明：在這個部分，你會看到一個句子和(A)(B)(C)三張圖片。請根據句子的意思，從三張圖片中選出與句子意思相符的圖片。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ thấy một câu và 3 bức tranh (A)(B)(C). Vui lòng chọn bức tranh phù hợp với ý nghĩa của câu.</i>",
        questions: [
          { id: 1, question_zh: "1. 妹妹今天很忙，什麼地方都沒去。", question_vn: "1. Em gái hôm nay rất bận, không đi đâu cả.", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q1_A.png" }, { label: "B", image: "images/Test_01/q1_B.png" }, { label: "C", image: "images/Test_01/q1_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「什麼地方都沒去」nghĩa là 'không đi bất cứ nơi đâu' (ở nhà). Hình A vẽ cảnh cô bé đang ở nhà cặm cụi học bài là phù hợp nhất." },
          { id: 2, question_zh: "2. 今天一直下雨，我們不能去打球了。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q2_A.png" }, { label: "B", image: "images/Test_01/q2_B.png" }, { label: "C", image: "images/Test_01/q2_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「下雨」nghĩa là trời mưa. Hình C trời đang mưa to là đáp án chính xác." },
          { id: 3, question_zh: "3. 週末的時候，他喜歡在圖書館看書。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q3_A.png" }, { label: "B", image: "images/Test_01/q3_B.png" }, { label: "C", image: "images/Test_01/q3_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「圖書館看書」nghĩa là đọc sách trong thư viện. Hình B là đáp án chính xác." },
          { id: 4, question_zh: "4. 媽媽去超市買了幾個蘋果。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q4_A.png" }, { label: "B", image: "images/Test_01/q4_B.png" }, { label: "C", image: "images/Test_01/q4_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「幾個蘋果」nghĩa là vài quả táo. Hình A là đáp án chính xác." },
          { id: 5, question_zh: "5. 這件紅色的衣服很好看。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q5_A.png" }, { label: "B", image: "images/Test_01/q5_B.png" }, { label: "C", image: "images/Test_01/q5_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「紅色」là màu đỏ, 「衣服」là áo. Hình C chiếc áo đỏ là đáp án đúng." },
          { id: 6, question_zh: "6. 桌子上有一支筆和一本書。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q6_A.png" }, { label: "B", image: "images/Test_01/q6_B.png" }, { label: "C", image: "images/Test_01/q6_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「一支筆和一本書」nghĩa là một cây bút và một quyển sách. Chọn hình B." },
          { id: 7, question_zh: "7. 下課以後，弟弟和朋友一起踢足球。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q7_A.png" }, { label: "B", image: "images/Test_01/q7_B.png" }, { label: "C", image: "images/Test_01/q7_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「踢足球」là đá bóng. Hình C là các cậu bé đang đá bóng." },
          { id: 8, question_zh: "8. 不好意思，請問洗手間在哪裡？", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q8_A.png" }, { label: "B", image: "images/Test_01/q8_B.png" }, { label: "C", image: "images/Test_01/q8_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「洗手間」là nhà vệ sinh. Chọn hình C có biển báo nhà vệ sinh." },
          { id: 9, question_zh: "9. 他生病了，現在在醫院休息。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q9_A.png" }, { label: "B", image: "images/Test_01/q9_B.png" }, { label: "C", image: "images/Test_01/q9_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「生病」là bị ốm, 「在醫院休息」là nghỉ ngơi ở bệnh viện. Chọn hình B." },
          { id: 10, question_zh: "10. 姐姐的頭髮長長的，很漂亮。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q10_A.png" }, { label: "B", image: "images/Test_01/q10_B.png" }, { label: "C", image: "images/Test_01/q10_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「頭髮長長的」là mái tóc dài. Hình A cô gái tóc dài là chính xác." },
          { id: 11, question_zh: "11. 晚上八點，我們一家人正在吃晚餐。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q11_A.png" }, { label: "B", image: "images/Test_01/q11_B.png" }, { label: "C", image: "images/Test_01/q11_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「正在吃晚餐」nghĩa là đang ăn tối. Hình C gia đình đang quây quần ăn uống." },
          { id: 12, question_zh: "12. 爸爸今天坐計程車去公司。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q12_A.png" }, { label: "B", image: "images/Test_01/q12_B.png" }, { label: "C", image: "images/Test_01/q12_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「計程車」là xe taxi. Chọn hình B." },
          { id: 13, question_zh: "13. 這是我的好朋友，小明。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q13_A.png" }, { label: "B", image: "images/Test_01/q13_B.png" }, { label: "C", image: "images/Test_01/q13_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「好朋友」là bạn thân. Hình B có hai người bạn là hợp lý nhất." },
          { id: 14, question_zh: "14. 你看，樹下有一隻小貓。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q14_A.png" }, { label: "B", image: "images/Test_01/q14_B.png" }, { label: "C", image: "images/Test_01/q14_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「樹下」là dưới gốc cây, 「小貓」là chú mèo. Chọn hình C." },
          { id: 15, question_zh: "15. 放假的時候，他們喜歡在海邊玩水。", type: "image_choice", options: [{ label: "A", image: "images/Test_01/q15_A.png" }, { label: "B", image: "images/Test_01/q15_B.png" }, { label: "C", image: "images/Test_01/q15_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「海邊」là bãi biển, 「玩水」là chơi đùa với nước. Chọn hình A." }
        ]
      },
      {
        part_name: "第二部分：看圖釋義 (Phần 2: Nhìn hình chọn câu)",
        description_zh: "說明：在這個部分，你會看到一張圖片。請根據圖片，從 (A)(B)(C) 三個選項中選出與圖片內容相符的句子。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ thấy một bức tranh. Dựa vào bức tranh, hãy chọn câu phù hợp nhất trong 3 đáp án (A)(B)(C).</i>",
        questions: [
          { id: 16, type: "text_choice", question_image: "images/Test_01/q16.png", question_zh: "16. 請選出與圖片相符的句子。", options: [{ label: "A", text: "他在吃早飯。" }, { label: "B", text: "他正在睡覺。" }, { label: "C", text: "他要去上課。" }], correctAnswer: "B", explanation: "Giải thích: Hình ảnh đồng hồ chỉ 10 giờ đêm và người đang ngủ, tương ứng với câu B (Anh ấy đang ngủ)." },
          { id: 17, type: "text_choice", question_image: "images/Test_01/q17.png", question_zh: "17. 請選出與圖片相符的句子。", options: [{ label: "A", text: "他們在喝咖啡。" }, { label: "B", text: "他們在打籃球。" }, { label: "C", text: "他們在買衣服。" }], correctAnswer: "A", explanation: "Giải thích: Trong hình hai người đang uống cà phê (喝咖啡)." },
          { id: 18, type: "text_choice", question_image: "images/Test_01/q18.png", question_zh: "18. 請選出與圖片相符的句子。", options: [{ label: "A", text: "她在圖書館借書。" }, { label: "B", text: "她在餐廳點菜。" }, { label: "C", text: "她在超市買東西。" }], correctAnswer: "C", explanation: "Giải thích: Cô gái đang trả tiền tại siêu thị (超市買東西)." },
          { id: 19, type: "text_choice", question_image: "images/Test_01/q19.png", question_zh: "19. 請選出與圖片相符的句子。", options: [{ label: "A", text: "今天天氣很冷。" }, { label: "B", text: "今天下雪了。" }, { label: "C", text: "今天天氣很熱。" }], correctAnswer: "C", explanation: "Giải thích: Hình ảnh nắng gắt, lau mồ hôi cho thấy thời tiết rất nóng (天氣很熱)." },
          { id: 20, type: "text_choice", question_image: "images/Test_01/q20.png", question_zh: "20. 請選出與圖片相符的句子。", options: [{ label: "A", text: "學生在唱歌。" }, { label: "B", text: "學生在寫作業。" }, { label: "C", text: "學生在看電視。" }], correctAnswer: "B", explanation: "Giải thích: Học sinh đang làm bài tập (寫作業)." },
          { id: 21, type: "text_choice", question_image: "images/Test_01/q21.png", question_zh: "21. 請選出與圖片相符的句子。", options: [{ label: "A", text: "他在開車。" }, { label: "B", text: "他在講電話。" }, { label: "C", text: "他在聽音樂。" }], correctAnswer: "B", explanation: "Giải thích: Người trong hình đang nghe/nói chuyện điện thoại (講電話)." },
          { id: 22, type: "text_choice", question_image: "images/Test_01/q22.png", question_zh: "22. 請選出與圖片相符的句子。", options: [{ label: "A", text: "桌子上有包子和湯。" }, { label: "B", text: "桌子上有漢堡和可樂。" }, { label: "C", text: "桌子上有麵包和牛奶。" }], correctAnswer: "A", explanation: "Giải thích: Hình ảnh là bánh bao và canh (包子和湯)." },
          { id: 23, type: "text_choice", question_image: "images/Test_01/q23.png", question_zh: "23. 請選出與圖片相符的句子。", options: [{ label: "A", text: "老師在上課。" }, { label: "B", text: "警察在幫忙。" }, { label: "C", text: "醫生在看病。" }], correctAnswer: "C", explanation: "Giải thích: Bác sĩ đang khám bệnh (醫生在看病)." },
          { id: 24, type: "text_choice", question_image: "images/Test_01/q24.png", question_zh: "24. 請選出與圖片相符的句子。", options: [{ label: "A", text: "他在打掃房子。" }, { label: "B", text: "他在洗衣服。" }, { label: "C", text: "他在做飯。" }], correctAnswer: "A", explanation: "Giải thích: Người đàn ông đang lau cửa sổ, tức là đang dọn dẹp nhà cửa (打掃房子)." },
          { id: 25, type: "text_choice", question_image: "images/Test_01/q25.png", question_zh: "25. 請選出與圖片相符的句子。", options: [{ label: "A", text: "大家在等火車。" }, { label: "B", text: "有人上公車了。" }, { label: "C", text: "他們自己開車。" }], correctAnswer: "B", explanation: "Giải thích: Có người đang bước lên xe buýt (上公車)." },
          { id: 26, type: "text_choice", question_image: "images/Test_01/q26.png", question_zh: "26. 請選出與圖片相符的句子。", options: [{ label: "A", text: "她想去運動。" }, { label: "B", text: "她想去旅行。" }, { label: "C", text: "她想看電影。" }], correctAnswer: "C", explanation: "Giải thích: Cô gái cầm vé phim đứng trước rạp chiếu phim (想看電影)." },
          { id: 27, type: "text_choice", question_image: "images/Test_01/q27.png", question_zh: "27. 請選出與圖片相符的句子。", options: [{ label: "A", text: "這是一頂舊帽子。" }, { label: "B", text: "這是一件漂亮的裙子。" }, { label: "C", text: "這是一雙新鞋子。" }], correctAnswer: "C", explanation: "Giải thích: Hình ảnh là một đôi giày mới (一雙新鞋子)." },
          { id: 28, type: "text_choice", question_image: "images/Test_01/q28.png", question_zh: "28. 請選出與圖片相符的句子。", options: [{ label: "A", text: "現在是早上七點。" }, { label: "B", text: "現在是晚上七點。" }, { label: "C", text: "現在是中午十二點。" }], correctAnswer: "A", explanation: "Giải thích: Có mặt trời và đồng hồ chỉ 7 giờ nên là 7 giờ sáng (早上七點)." },
          { id: 29, type: "text_choice", question_image: "images/Test_01/q29.png", question_zh: "29. 請選出與圖片相符的句子。", options: [{ label: "A", text: "他們在公園散步。" }, { label: "B", text: "他們在等紅綠燈。" }, { label: "C", text: "他們在買火車票。" }], correctAnswer: "B", explanation: "Giải thích: Đứng ở ngã tư chờ đèn đỏ (等紅綠燈)." },
          { id: 30, type: "text_choice", question_image: "images/Test_01/q30.png", question_zh: "30. 請選出與圖片相符的句子。", options: [{ label: "A", text: "他在說謝謝。" }, { label: "B", text: "他在說對不起。" }, { label: "C", text: "他在說再見。" }], correctAnswer: "C", explanation: "Giải thích: Hành động vẫy tay tươi cười thường là chào tạm biệt (說再見)." }
        ]
      },
      {
        part_name: "第三部分：填空 (Phần 3: Điền vào chỗ trống)",
        description_zh: "說明：在這個部分，每個題組會有一張情境圖片，圖片下面有幾個句子。請根據圖片情境，選出最合適的答案。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, mỗi nhóm câu hỏi sẽ có một bức tranh tình huống và vài câu bên dưới. Dựa vào tình huống, hãy chọn đáp án phù hợp nhất.</i>",
        questions: [
          { id: 31, type: "text_choice", passage_zh: "小美今天去菜市場買水果。她看見蘋果很漂亮，就問老闆一 (31) 多少錢。老闆說：「五十元。」小美覺得有一點 (32) ，可是她還是買了。除了蘋果，她 (33) 買了幾根香蕉。因為媽媽喜歡吃香蕉，她想帶回家 (34) 媽媽吃。回家後，媽媽 (35) 高興。", question_image: "images/Test_01/q31_35.png", question_zh: "31. 請選擇正確的詞語：", options: [{ label: "A", text: "雙" }, { label: "B", text: "斤" }, { label: "C", text: "塊" }], correctAnswer: "B", explanation: "Giải thích: Trái cây thường được cân bằng '斤' (cân/nửa ký)." },
          { id: 32, type: "text_choice", question_zh: "32. 請選擇正確的詞語：", options: [{ label: "A", text: "便宜" }, { label: "B", text: "遠" }, { label: "C", text: "貴" }], correctAnswer: "C", explanation: "Giải thích: Thấy đắt (貴) nhưng vẫn quyết định mua." },
          { id: 33, type: "text_choice", question_zh: "33. 請選擇正確的詞語：", options: [{ label: "A", text: "都" }, { label: "B", text: "也" }, { label: "C", text: "就" }], correctAnswer: "B", explanation: "Giải thích: Ngoài táo, cô ấy 'cũng' (也) mua thêm chuối." },
          { id: 34, type: "text_choice", question_zh: "34. 請選擇正確的詞語：", options: [{ label: "A", text: "請" }, { label: "B", text: "讓" }, { label: "C", text: "給" }], correctAnswer: "C", explanation: "Giải thích: Mang về 'cho' mẹ ăn (給媽媽吃)." },
          { id: 35, type: "text_choice", question_zh: "35. 請選擇正確的詞語：", options: [{ label: "A", text: "比較" }, { label: "B", text: "非常" }, { label: "C", text: "最" }], correctAnswer: "B", explanation: "Giải thích: Mẹ rất vui (非常高興)." },
          { id: 36, type: "text_choice", passage_zh: "王明是一個大學生，他正在學習中文。他覺得中文的 (36) 很難寫，可是他說得很好。每天下課 (37) ，他都會去圖書館複習功課。有時候，他會和台灣朋友一起 (38) 中文，這樣進步得比較快。他希望明年可以 (39) 台灣旅行，親眼看看那裡的 (40)。", question_image: "images/Test_01/q36_40.png", question_zh: "36. 請選擇正確的詞語：", options: [{ label: "A", text: "筆" }, { label: "B", text: "書" }, { label: "C", text: "字" }], correctAnswer: "C", explanation: "Giải thích: Chữ Hán (字) rất khó viết." },
          { id: 37, type: "text_choice", question_zh: "37. 請選擇正確的詞語：", options: [{ label: "A", text: "以後" }, { label: "B", text: "以前" }, { label: "C", text: "的時候" }], correctAnswer: "A", explanation: "Giải thích: 'Sau khi' tan học (下課以後)." },
          { id: 38, type: "text_choice", question_zh: "38. 請選擇正確的詞語：", options: [{ label: "A", text: "準備" }, { label: "B", text: "練習" }, { label: "C", text: "休息" }], correctAnswer: "B", explanation: "Giải thích: 'Luyện tập' tiếng Trung cùng bạn bè (練習)." },
          { id: 39, type: "text_choice", question_zh: "39. 請選擇正確的詞語：", options: [{ label: "A", text: "到" }, { label: "B", text: "來" }, { label: "C", text: "去" }], correctAnswer: "C", explanation: "Giải thích: 'Đi' du lịch Đài Loan (去台灣旅行)." },
          { id: 40, type: "text_choice", question_zh: "40. 請選擇正確的詞語：", options: [{ label: "A", text: "風景" }, { label: "B", text: "交通" }, { label: "C", text: "節目" }], correctAnswer: "A", explanation: "Giải thích: Tận mắt ngắm 'phong cảnh' nơi đó (風景)." }
        ]
      },
      {
        part_name: "第四部分：完成段落 (Phần 4: Hoàn thành đoạn văn)",
        description_zh: "說明：在這個部分，你會看到一段短文，短文中有五個空格，短文下方有六個選項。請根據短文的上下文，選出最適合該空格的答案。注意，一個選項只能用一次。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ đọc một đoạn văn ngắn có 5 chỗ trống và 6 lựa chọn. Hãy chọn đáp án phù hợp nhất cho mỗi chỗ trống. Lưu ý: mỗi lựa chọn chỉ được dùng 1 lần.</i>",
        questions: [
          { id: 41, type: "text_choice", passage_zh: "昨天是我的生日，我的好朋友們幫我辦了一個生日派對。(41)，有我最喜歡的巧克力蛋糕，還有很多好吃的點心。大家一起唱生日快樂歌，(42)。我許了願，希望家人都健康，(43)。然後，我收到了很多禮物，(44)。雖然我們聊到很晚，(45)，這真是一個開心的生日！", question_zh: "41. 請選擇最適合的句子：", options: [{ label: "A", text: "大家都玩得很開心" }, { label: "B", text: "每一件我都非常喜歡" }, { label: "C", text: "他們準備了很多東西" }, { label: "D", text: "可是我一點都不覺得累" }, { label: "E", text: "也希望考試能考一百分" }, { label: "F", text: "我昨天忘記帶錢包了" }], correctAnswer: "C", explanation: "Giải thích: Phía sau kể ra bánh và điểm tâm, nên câu C (Họ đã chuẩn bị rất nhiều thứ) là hợp lý nhất." },
          { id: 42, type: "text_choice", question_zh: "42. 請選擇最適合的句子：", options: [{ label: "A", text: "大家都玩得很開心" }, { label: "B", text: "每一件我都非常喜歡" }, { label: "C", text: "他們準備了很多東西" }, { label: "D", text: "可是我一點都不覺得累" }, { label: "E", text: "也希望考試能考一百分" }, { label: "F", text: "我昨天忘記帶錢包了" }], correctAnswer: "A", explanation: "Giải thích: Hát chúc mừng sinh nhật, mọi người đều rất vui vẻ (A)." },
          { id: 43, type: "text_choice", question_zh: "43. 請選擇最適合的句子：", options: [{ label: "A", text: "大家都玩得很開心" }, { label: "B", text: "每一件我都非常喜歡" }, { label: "C", text: "他們準備了很多東西" }, { label: "D", text: "可是我一點都不覺得累" }, { label: "E", text: "也希望考試能考一百分" }, { label: "F", text: "我昨天忘記帶錢包了" }], correctAnswer: "E", explanation: "Giải thích: Tiếp nối việc ước gia đình mạnh khỏe là ước thi được 100 điểm (E)." },
          { id: 44, type: "text_choice", question_zh: "44. 請選擇最適合的句子：", options: [{ label: "A", text: "大家都玩得很開心" }, { label: "B", text: "每一件我都非常喜歡" }, { label: "C", text: "他們準備了很多東西" }, { label: "D", text: "可是我一點都不覺得累" }, { label: "E", text: "也希望考試能考一百分" }, { label: "F", text: "我昨天忘記帶錢包了" }], correctAnswer: "B", explanation: "Giải thích: Nhận được nhiều quà, mỗi món tôi đều rất thích (B)." },
          { id: 45, type: "text_choice", question_zh: "45. 請選擇最適合的句子：", options: [{ label: "A", text: "大家都玩得很開心" }, { label: "B", text: "每一件我都非常喜歡" }, { label: "C", text: "他們準備了很多東西" }, { label: "D", text: "可是我一點都不覺得累" }, { label: "E", text: "也希望考試能考一百分" }, { label: "F", text: "我昨天忘記帶錢包了" }], correctAnswer: "D", explanation: "Giải thích: Mặc dù (雖然) nói chuyện đến khuya, nhưng (可是) tôi không thấy mệt chút nào (D)." }
        ]
      },
      {
        part_name: "第五部分：閱讀理解 (Phần 5: Đọc hiểu)",
        description_zh: "說明：在這個部分，你會看到幾篇短文，每一篇短文後面都有一個問題，請根據短文的內容回答問題。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ đọc các đoạn văn ngắn, theo sau là một câu hỏi. Dựa vào nội dung đoạn văn, hãy trả lời câu hỏi.</i>",
        questions: [
          { id: 46, type: "text_choice", passage_zh: "小張：明天放假，我們去爬山好不好？\n小李：天氣太熱了，而且我有點累，我們去電影院看電影、吹冷氣吧！\n小張：好啊，那我現在上網買電影票。", question_zh: "46. 關於小李，下面哪一個是對的？", options: [{ label: "A", text: "他明天要上班。" }, { label: "B", text: "他已經買好票了。" }, { label: "C", text: "他比較想去看電影。" }, { label: "D", text: "他覺得爬山很有趣。" }], correctAnswer: "C", explanation: "Giải thích: Tiểu Lý từ chối leo núi và rủ đi xem phim, tức là anh ấy muốn đi xem phim hơn." },
          { id: 47, type: "text_choice", passage_zh: "這家餐廳很有名，每天都有很多人來吃飯。他們最有名的是牛肉麵，不但牛肉多，湯也很好喝。不過，如果要來吃飯，最好早一點來，不然沒有位子，要等很久。", question_zh: "47. 這家餐廳怎麼樣？", options: [{ label: "A", text: "吃飯的時間需要等。" }, { label: "B", text: "賣的麵不好吃。" }, { label: "C", text: "客人很少。" }, { label: "D", text: "牛肉給得很少。" }], correctAnswer: "A", explanation: "Giải thích: Đoạn văn nhắc nhở phải đến sớm, nếu không sẽ phải đợi lâu (需要等)." },
          { id: 48, type: "text_choice", passage_zh: "張老師每天早上七點出門，坐半個小時的公車到學校。她教學生數學，學生都很喜歡上她的課。下午四點下課後，她會去超市買菜，然後回家做晚飯。", question_zh: "48. 張老師每天早上幾點到學校？", options: [{ label: "A", text: "四點" }, { label: "B", text: "八點" }, { label: "C", text: "七點" }, { label: "D", text: "七點半" }], correctAnswer: "D", explanation: "Giải thích: 7 giờ ra khỏi nhà, đi xe buýt nửa tiếng, nên đến trường lúc 7 rưỡi (七點半)." },
          { id: 49, type: "text_choice", passage_zh: "林小姐最近想買一輛新車，因為她現在的車已經開了十年，常常壞掉。昨天她去車行看了幾輛，有一輛白色的車她很喜歡，可是價錢太高了，她打算下個星期帶先生一起來看看再決定。", question_zh: "49. 林小姐為什麼昨天還沒買車？", options: [{ label: "A", text: "因為沒有她喜歡的顏色。" }, { label: "B", text: "因為車行昨天沒開門。" }, { label: "C", text: "因為她想跟先生討論一下。" }, { label: "D", text: "因為她想買便宜的舊車。" }], correctAnswer: "C", explanation: "Giải thích: Giá cao nên cô ấy dự định đưa chồng đến xem rồi mới quyết định (想跟先生討論一下)." },
          { id: 50, type: "text_choice", passage_zh: "各位旅客，歡迎搭乘開往台北的高鐵。本列車中途將停靠台中、新竹。為了您的安全，請不要在車廂內奔跑。如果您需要任何幫助，請通知我們的服務人員，謝謝！", question_zh: "50. 這段話最可能是在哪裡聽到的？", options: [{ label: "A", text: "高鐵上" }, { label: "B", text: "飛機上" }, { label: "C", text: "捷運站" }, { label: "D", text: "公車上" }], correctAnswer: "A", explanation: "Giải thích: Có nhắc đến 'tàu cao tốc đi Đài Bắc' (開往台北的高鐵) nên đoạn này được phát trên tàu cao tốc." }
        ]
      }
    ]
  }
];
