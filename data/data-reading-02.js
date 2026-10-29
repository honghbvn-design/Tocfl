const readingExamData_Test2 = {
    reading_sections: [
        // ==========================================
        // PHẦN 1: NHÌN HÌNH ĐOÁN CÂU (Câu 1 - 15)
        // ==========================================
        {
            part_name: "第一部分：看圖辨義 (Phần 1: Nhìn hình đoán câu)",
            description_zh: "說明：在這個部分，你會看到一個句子和(A)(B)(C)三張圖片。請根據句子的意思，從三張圖片中選出與句子意思相符的圖片。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ thấy một câu và 3 bức tranh (A)(B)(C). Vui lòng chọn bức tranh phù hợp với ý nghĩa của câu.</i>",
            questions: [
                { id: 1, question_zh: "1. 老闆，我要買兩瓶牛奶和半斤豬肉。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q1_A.png" }, { label: "B", image: "images/Test_02/q1_B.png" }, { label: "C", image: "images/Test_02/q1_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「牛奶」(sữa), 「豬肉」(thịt lợn). Hình C có sữa và thịt lợn là đáp án chính xác." },
                { id: 2, question_zh: "2. 我最喜歡的運動是打網球。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q2_A.png" }, { label: "B", image: "images/Test_02/q2_B.png" }, { label: "C", image: "images/Test_02/q2_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「打網球」(chơi tennis). Hình A là đáp án đúng." },
                { id: 3, question_zh: "3. 已經很晚了，請把電視關掉，快去睡覺。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q3_A.png" }, { label: "B", image: "images/Test_02/q3_B.png" }, { label: "C", image: "images/Test_02/q3_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「關電視」(tắt tivi). Hình B là người đang tắt tivi." },
                { id: 4, question_zh: "4. 妹妹把一塊蛋糕放在桌子上。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q4_A.png" }, { label: "B", image: "images/Test_02/q4_B.png" }, { label: "C", image: "images/Test_02/q4_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「桌子上」(trên bàn), 「蛋糕」(bánh kem). Hình C có miếng bánh kem trên bàn là chính xác." },
                { id: 5, question_zh: "5. 外面太陽很大，記得戴帽子。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q5_A.png" }, { label: "B", image: "images/Test_02/q5_B.png" }, { label: "C", image: "images/Test_02/q5_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「戴帽子」(đội mũ). Hình B là đáp án đúng." },
                { id: 6, question_zh: "6. 我哥哥在醫院上班，他是一位醫生。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q6_A.png" }, { label: "B", image: "images/Test_02/q6_B.png" }, { label: "C", image: "images/Test_02/q6_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「醫生」(bác sĩ). Hình C là bác sĩ." },
                { id: 7, question_zh: "7. 這個路口不能右轉。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q7_A.png" }, { label: "B", image: "images/Test_02/q7_B.png" }, { label: "C", image: "images/Test_02/q7_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「不能右轉」(không được rẽ phải). Hình B là biển cấm rẽ phải." },
                { id: 8, question_zh: "8. 她穿著一件黃色的洋裝，很漂亮。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q8_A.png" }, { label: "B", image: "images/Test_02/q8_B.png" }, { label: "C", image: "images/Test_02/q8_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「黃色的洋裝」(chiếc váy màu vàng). Hình A là đáp án đúng." },
                { id: 9, question_zh: "9. 下午三點半，我們在咖啡廳見面。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q9_A.png" }, { label: "B", image: "images/Test_02/q9_B.png" }, { label: "C", image: "images/Test_02/q9_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「三點半」(3 giờ rưỡi). Hình A đồng hồ chỉ 3:30." },
                { id: 10, question_zh: "10. 這隻小狗的耳朵長長的，真可愛。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q10_A.png" }, { label: "B", image: "images/Test_02/q10_B.png" }, { label: "C", image: "images/Test_02/q10_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「長長的耳朵」(tai dài). Hình C là chú chó tai dài." },
                { id: 11, question_zh: "11. 他每天早上都去公園散步。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q11_A.png" }, { label: "B", image: "images/Test_02/q11_B.png" }, { label: "C", image: "images/Test_02/q11_C.png" }], correctAnswer: "B", explanation: "Giải thích: 「公園散步」(đi dạo công viên). Hình B là người đang đi dạo." },
                { id: 12, question_zh: "12. 爸爸去超級市場買東西，他用信用卡付錢。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q12_A.png" }, { label: "B", image: "images/Test_02/q12_B.png" }, { label: "C", image: "images/Test_02/q12_C.png" }], correctAnswer: "C", explanation: "Giải thích: 「信用卡付錢」(trả bằng thẻ tín dụng). Hình C là quẹt thẻ." },
                { id: 13, question_zh: "13. 這裡有一雙筷子和一個碗。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q13_A.png" }, { label: "B", image: "images/Test_02/q13_B.png" }, { label: "C", image: "images/Test_02/q13_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「一雙筷子和一個碗」(đũa và bát). Hình A là đáp án đúng." },
                { id: 14, question_zh: "14. 冰箱裡什麼都沒有了。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q14_A.png" }, { label: "B", image: "images/Test_02/q14_B.png" }, { label: "C", image: "images/Test_02/q14_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「什麼都沒有」(không có gì cả - tủ lạnh trống). Hình A là chính xác." },
                { id: 15, question_zh: "15. 我們下個月要去日本旅行。", type: "image_choice", options: [{ label: "A", image: "images/Test_02/q15_A.png" }, { label: "B", image: "images/Test_02/q15_B.png" }, { label: "C", image: "images/Test_02/q15_C.png" }], correctAnswer: "A", explanation: "Giải thích: 「去旅行」(đi du lịch). Hình A có máy bay và vali là phù hợp nhất." }
            ]
        },

        // ==========================================
        // PHẦN 2: NHÌN HÌNH CHỌN CÂU (Câu 16 - 30)
        // ==========================================
        {
            part_name: "第二部分：看圖釋義 (Phần 2: Nhìn hình chọn câu)",
            description_zh: "說明：在這個部分，你會看到一張圖片。請根據圖片，從 (A)(B)(C) 三個選項中選出與圖片內容相符的句子。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ thấy một bức tranh. Dựa vào bức tranh, hãy chọn câu phù hợp nhất trong 3 đáp án (A)(B)(C).</i>",
            questions: [
                { id: 16, question_zh: "16. 請選出與圖片相符的句子。", question_image: "images/Test_02/q16.png", type: "text_choice", options: [{ label: "A", text: "他在洗衣服。" }, { label: "B", text: "他在洗碗。" }, { label: "C", text: "他在洗菜。" }], correctAnswer: "B", explanation: "Giải thích: Hình ảnh người đàn ông rửa bát tương ứng với 「洗碗」(rửa bát)." },
                { id: 17, question_zh: "17. 請選出與圖片相符的句子。", question_image: "images/Test_02/q17.png", type: "text_choice", options: [{ label: "A", text: "她在唱歌。" }, { label: "B", text: "她在打電話。" }, { label: "C", text: "她在聽音樂。" }], correctAnswer: "C", explanation: "Giải thích: Hình ảnh cô gái đeo tai nghe tương ứng với 「聽音樂」(nghe nhạc)." },
                { id: 18, question_zh: "18. 請選出與圖片相符的句子。", question_image: "images/Test_02/q18.png", type: "text_choice", options: [{ label: "A", text: "這裡是醫院。" }, { label: "B", text: "這裡是郵局。" }, { label: "C", text: "這裡是銀行。" }], correctAnswer: "B", explanation: "Giải thích: Biển hiệu bưu điện tương ứng với 「郵局」(Bưu điện)." },
                { id: 19, question_zh: "19. 請選出與圖片相符的句子。", question_image: "images/Test_02/q19.png", type: "text_choice", options: [{ label: "A", text: "眼鏡在盒子裡。" }, { label: "B", text: "眼鏡在書下面。" }, { label: "C", text: "眼鏡在書上面。" }], correctAnswer: "C", explanation: "Giải thích: Kính nằm trên quyển sách tương ứng với 「書上面」(trên quyển sách)." },
                { id: 20, question_zh: "20. 請選出與圖片相符的句子。", question_image: "images/Test_02/q20.png", type: "text_choice", options: [{ label: "A", text: "他們在打棒球。" }, { label: "B", text: "他們在打籃球。" }, { label: "C", text: "他們在踢足球。" }], correctAnswer: "B", explanation: "Giải thích: Hình ảnh chơi bóng rổ tương ứng với 「打籃球」(chơi bóng rổ)." },
                { id: 21, question_zh: "21. 請選出與圖片相符的句子。", question_image: "images/Test_02/q21.png", type: "text_choice", options: [{ label: "A", text: "今天天氣很好。" }, { label: "B", text: "今天非常熱。" }, { label: "C", text: "今天非常冷。" }], correctAnswer: "C", explanation: "Giải thích: Trời tuyết lạnh run rẩy tương ứng với 「非常冷」(rất lạnh)." },
                { id: 22, question_zh: "22. 請選出與圖片相符的句子。", question_image: "images/Test_02/q22.png", type: "text_choice", options: [{ label: "A", text: "她在買水果。" }, { label: "B", text: "她在買菜。" }, { label: "C", text: "她在買衣服。" }], correctAnswer: "B", explanation: "Giải thích: Mua bắp cải ở chợ tương ứng với 「買菜」(mua rau)." },
                { id: 23, question_zh: "23. 請選出與圖片相符的句子。", question_image: "images/Test_02/q23.png", type: "text_choice", options: [{ label: "A", text: "他在寫信。" }, { label: "B", text: "他迷路了。" }, { label: "C", text: "他在看報紙。" }], correctAnswer: "B", explanation: "Giải thích: Cầm bản đồ gãi đầu tương ứng với 「迷路」(lạc đường)." },
                { id: 24, question_zh: "24. 請選出與圖片相符的句子。", question_image: "images/Test_02/q24.png", type: "text_choice", options: [{ label: "A", text: "他們正在吃飯。" }, { label: "B", text: "他們正在照相。" }, { label: "C", text: "他們正在睡覺。" }], correctAnswer: "B", explanation: "Giải thích: Cười nhìn vào máy ảnh tương ứng với 「照相」(chụp ảnh)." },
                { id: 25, question_zh: "25. 請選出與圖片相符的句子。", question_image: "images/Test_02/q25.png", type: "text_choice", options: [{ label: "A", text: "椅子壞了。" }, { label: "B", text: "窗戶打破了。" }, { label: "C", text: "杯子打破了。" }], correctAnswer: "C", explanation: "Giải thích: Cốc thủy tinh vỡ tương ứng với 「杯子打破」(cốc bị vỡ)." },
                { id: 26, question_zh: "26. 請選出與圖片相符的句子。", question_image: "images/Test_02/q26.png", type: "text_choice", options: [{ label: "A", text: "他送給她一個禮物。" }, { label: "B", text: "他請她喝咖啡。" }, { label: "C", text: "他幫她拿行李。" }], correctAnswer: "A", explanation: "Giải thích: Đưa hộp quà tương ứng với 「送禮物」(tặng quà)." },
                { id: 27, question_zh: "27. 請選出與圖片相符的句子。", question_image: "images/Test_02/q27.png", type: "text_choice", options: [{ label: "A", text: "狗在沙發上睡覺。" }, { label: "B", text: "貓在沙發上睡覺。" }, { label: "C", text: "貓在桌子下睡覺。" }], correctAnswer: "B", explanation: "Giải thích: 「貓」(mèo), 「沙發」(sofa). Đáp án B là mèo ngủ trên sofa." },
                { id: 28, question_zh: "28. 請選出與圖片相符的句子。", question_image: "images/Test_02/q28.png", type: "text_choice", options: [{ label: "A", text: "學生正在睡覺。" }, { label: "B", text: "學生正在唱歌。" }, { label: "C", text: "學生有問題想問。" }], correctAnswer: "C", explanation: "Giải thích: Học sinh giơ tay tương ứng với 「問問題」(hỏi câu hỏi)." },
                { id: 29, question_zh: "29. 請選出與圖片相符的句子。", question_image: "images/Test_02/q29.png", type: "text_choice", options: [{ label: "A", text: "公車上沒有人。" }, { label: "B", text: "公車上很多人。" }, { label: "C", text: "公車上只有兩個人。" }], correctAnswer: "B", explanation: "Giải thích: Xe buýt chật kín người tương ứng với 「很多人」(rất nhiều người)." },
                { id: 30, question_zh: "30. 請選出與圖片相符的句子。", question_image: "images/Test_02/q30.png", type: "text_choice", options: [{ label: "A", text: "她坐公車去上班。" }, { label: "B", text: "她騎機車去上班。" }, { label: "C", text: "她開車去上班。" }], correctAnswer: "B", explanation: "Giải thích: Cô gái đi xe máy tương ứng với 「騎機車」(đi xe máy)." }
                ]
        },

// ==========================================
        // PHẦN 3: ĐIỀN VÀO CHỖ TRỐNG (Câu 31 - 40)
        // ==========================================
        {
            part_name: "第三部分：填空 (Phần 3: Điền vào chỗ trống)",
            description_zh: "說明：在這個部分，每個題組會有一張情境圖片，圖片下面有幾個句子。請根據圖片情境，選出最合適的答案。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, mỗi nhóm câu hỏi sẽ có một bức tranh tình huống và vài câu bên dưới. Dựa vào tình huống, hãy chọn đáp án phù hợp nhất.</i>",
            questions: [
                // --- ĐOẠN VĂN 1 (Câu 31 - 35) ---
                { 
                    id: 31, 
                    context_text: "這家餐廳的 (31) 很特別，因為裡面有很多外國菜。大衛 (32) 了一份義大利麵，他說他要一杯熱紅茶，(33) 要加一點糖。吃飽以後，他們覺得這家餐廳的菜不但好吃，而且服務也很 (34) 。最後，大衛拿出錢包準備 (35) 。",
                    context_image: "images/Test_02/q31_35.png", 
                    question_zh: "31. 請選擇正確的詞語：", 
                    type: "text_choice", options: [{ label: "A", text: "菜單" }, { label: "B", text: "照片" }, { label: "C", text: "地圖" }], correctAnswer: "A", explanation: "Giải thích: 「菜單」(Thực đơn của nhà hàng có nhiều món ngoại)." 
                },
                { id: 32, question_zh: "32. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "做" }, { label: "B", text: "點" }, { label: "C", text: "喝" }], correctAnswer: "B", explanation: "Giải thích: 「點」(Điểm/gọi món - 點了一份義大利麵 = gọi 1 phần mì Ý)." },
                { id: 33, question_zh: "33. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "就" }, { label: "B", text: "還" }, { label: "C", text: "才" }], correctAnswer: "B", explanation: "Giải thích: 「還」(Còn/thêm - 還要加一點糖 = còn muốn thêm chút đường)." },
                { id: 34, question_zh: "34. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "奇怪" }, { label: "B", text: "麻煩" }, { label: "C", text: "不錯" }], correctAnswer: "C", explanation: "Giải thích: 「不錯」(Phục vụ cũng rất 'không tồi' / tốt)." },
                { id: 35, question_zh: "35. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "找錢" }, { label: "B", text: "買單" }, { label: "C", text: "點菜" }], correctAnswer: "B", explanation: "Giải thích: 「買單」(Lấy ví ra chuẩn bị 'thanh toán')." },
                
                // --- ĐOẠN VĂN 2 (Câu 36 - 40) ---
                { 
                    id: 36, 
                    context_text: "他租了一 (36) 新房子，離捷運站很近。雖然新房子不大，可是很乾淨，而且外面有一個小公園，(37) 很好。這個週末，他的好朋友小王來幫他 (38) 東西。因為東西很多，他們從早上忙 (39) 下午才做完。為了謝謝小王，小李晚上 (40) 他去吃大餐。",
                    context_image: "images/Test_02/q36_40.png", 
                    question_zh: "36. 請選擇正確的詞語：", 
                    type: "text_choice", options: [{ label: "A", text: "間" }, { label: "B", text: "輛" }, { label: "C", text: "張" }], correctAnswer: "A", explanation: "Giải thích: 「間」(Lượng từ của nhà/phòng là 間)." 
                },
                { id: 37, question_zh: "37. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "時間" }, { label: "B", text: "環境" }, { label: "C", text: "交通" }], correctAnswer: "B", explanation: "Giải thích: 「環境」(Có công viên nên 'môi trường' rất tốt)." },
                { id: 38, question_zh: "38. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "搬" }, { label: "B", text: "買" }, { label: "C", text: "洗" }], correctAnswer: "A", explanation: "Giải thích: 「搬」(Bạn đến giúp 'chuyển' đồ đạc)." },
                { id: 39, question_zh: "39. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "在" }, { label: "B", text: "到" }, { label: "C", text: "從" }], correctAnswer: "B", explanation: "Giải thích: 「到」(Từ sáng 'đến' chiều)." },
                { id: 40, question_zh: "40. 請選擇正確的詞語：", type: "text_choice", options: [{ label: "A", text: "給" }, { label: "B", text: "讓" }, { label: "C", text: "請" }], correctAnswer: "C", explanation: "Giải thích: 「請」(Để cảm ơn nên 'mời' đi ăn)." }
            ]
        },

        // ==========================================
        // PHẦN 4: ĐOẠN VĂN (Câu 41 - 45)
        // ==========================================
        {
            part_name: "第四部分：段落填空 (Phần 4: Hoàn thành đoạn văn)",
            description_zh: "說明：在這個部分，你會看到一段短文，短文中有五個空格，短文下方有六個選項。請根據短文的上下文，選出最適合該空格的答案。注意，一個選項只能用一次。<br><i style='color: #666;'>Hướng dẫn: Ở phần này, bạn sẽ đọc một đoạn văn có 5 chỗ trống và 6 lựa chọn bên dưới. Hãy chọn đáp án phù hợp nhất cho mỗi chỗ trống. Mỗi đáp án chỉ được dùng 1 lần.</i>",
            questions: [
                { id: 41, question_zh: "41. 我們是坐火車去的，( )。", type: "text_choice", options: [{ label: "A", text: "可是我們玩得非常開心" }, { label: "B", text: "吃了有很多名的小吃" }, { label: "C", text: "因為火車比自己開車快多了" }, { label: "D", text: "下次放假還要再來玩" }, { label: "E", text: "我們在海邊拍了很多照片" }, { label: "F", text: "所以我忘了帶照相機" }], correctAnswer: "C", explanation: "Giải thích: Đi bằng xe lửa, bởi vì xe lửa nhanh hơn tự lái xe." },
                { id: 42, question_zh: "42. 花蓮的海邊非常漂亮，( )。", type: "text_choice", options: [{ label: "A", text: "可是我們玩得非常開心" }, { label: "B", text: "吃了有很多名的小吃" }, { label: "C", text: "因為火車比自己開車快多了" }, { label: "D", text: "下次放假還要再來玩" }, { label: "E", text: "我們在海邊拍了很多照片" }, { label: "F", text: "所以我忘了帶照相機" }], correctAnswer: "E", explanation: "Giải thích: Biển Hóa Liên rất đẹp, chúng tôi đã chụp rất nhiều ảnh ở biển." },
                { id: 43, question_zh: "43. 晚上，我們去逛了當地的夜市，( )。", type: "text_choice", options: [{ label: "A", text: "可是我們玩得非常開心" }, { label: "B", text: "吃了有很多名的小吃" }, { label: "C", text: "因為火車比自己開車快多了" }, { label: "D", text: "下次放假還要再來玩" }, { label: "E", text: "我們在海邊拍了很多照片" }, { label: "F", text: "所以我忘了帶照相機" }], correctAnswer: "B", explanation: "Giải thích: Đi dạo chợ đêm địa phương, đã ăn rất nhiều món ăn vặt nổi tiếng." },
                { id: 44, question_zh: "44. 雖然這次旅行只有兩天，( )。", type: "text_choice", options: [{ label: "A", text: "可是我們玩得非常開心" }, { label: "B", text: "吃了有很多名的小吃" }, { label: "C", text: "因為火車比自己開車快多了" }, { label: "D", text: "下次放假還要再來玩" }, { label: "E", text: "我們在海邊拍了很多照片" }, { label: "F", text: "所以我忘了帶照相機" }], correctAnswer: "A", explanation: "Giải thích: Dù du lịch chỉ 2 ngày, nhưng chúng tôi chơi rất vui vẻ." },
                { id: 45, question_zh: "45. 我們已經決定了，( )！", type: "text_choice", options: [{ label: "A", text: "可是我們玩得非常開心" }, { label: "B", text: "吃了有很多名的小吃" }, { label: "C", text: "因為火車比自己開車快多了" }, { label: "D", text: "下次放假還要再來玩" }, { label: "E", text: "我們在海邊拍了很多照片" }, { label: "F", text: "所以我忘了帶照相機" }], correctAnswer: "D", explanation: "Giải thích: Chúng tôi quyết định rồi, kỳ nghỉ sau nhất định sẽ lại đến chơi." }
            ]
        },

        // ==========================================
        // PHẦN 5: ĐỌC HIỂU (Câu 46 - 50)
        // ==========================================
        {
            part_name: "第五部分：閱讀理解 (Phần 5: Đọc hiểu văn bản)",
            description_zh: "說明：在這個部分，你會看到幾篇短文，每一篇短文後面都有一個問題，請根據短文的內容回答問題。<br><i style='color: #666;'>Hướng dẫn: Đọc các đoạn văn ngắn dưới đây và trả lời câu hỏi tương ứng.</i>",
            questions: [
                { id: 46, question_zh: "<b>(一)</b><br>張同學你好：<br>我昨天在圖書館的二樓撿到一本紅色的字典，裡面有寫你的名字。如果你看到這張紙條，請到一樓的辦公室來找我拿。<br>王老師 留言<br><br><b>46. 王老師寫這張紙條的目的是什麼？</b>", type: "text_choice", options: [{ label: "A", text: "告訴張同學圖書館在哪裡。" }, { label: "B", text: "請張同學來拿他的字典。" }, { label: "C", text: "問張同學字典多少錢。" }, { label: "D", text: "請張同學幫忙打掃辦公室。" }], correctAnswer: "B", explanation: "Giải thích: Thầy Vương nhặt được từ điển, bảo bạn Trương đến lấy -> 請張同學來拿他的字典 (Mời bạn Trương tới lấy từ điển)." },
                { id: 47, question_zh: "<b>(二)</b><br>各位客人您好：<br>本店為了重新裝潢(trang trí lại)，下週一到週三休息三天。週四早上十點開始正常營業。下週四來買咖啡的客人，我們將送您一塊小蛋糕。謝謝！<br><br><b>47. 如果下週二想來這家店買咖啡，會怎麼樣？</b>", type: "text_choice", options: [{ label: "A", text: "可以免費得到一塊蛋糕。" }, { label: "B", text: "可以買到很便宜的咖啡。" }, { label: "C", text: "這家店沒有開門。" }, { label: "D", text: "早上十點以後才能買。" }], correctAnswer: "C", explanation: "Giải thích: Thông báo nghỉ từ thứ Hai đến thứ Tư (下週一到週三休息). Thứ Ba tới sẽ không mở cửa -> 這家店沒有開門 (Cửa hàng không mở cửa)." },
                { id: 48, question_zh: "<b>(三)</b><br>明天受颱風影響，北部和東部會有大雨，出門請記得帶雨具，並注意安全。南部天氣是多雲到晴，氣溫比較高，出門記得多喝水。<br><br><b>48. 關於明天的天氣，下面哪一個是對的？</b>", type: "text_choice", options: [{ label: "A", text: "北部天氣很好，不會下雨。" }, { label: "B", text: "全台灣都會下大雨。" }, { label: "C", text: "南部比較熱，要注意多喝水。" }, { label: "D", text: "東部天氣很冷，會下雪。" }], correctAnswer: "C", explanation: "Giải thích: Miền Nam nhiệt độ cao, chú ý uống nhiều nước -> 南部比較熱，要注意多喝水." },
                { id: 49, question_zh: "<b>(四)</b><br>林媽媽以前不會用智慧型手機，每次要跟在外國讀書的女兒聯絡，都只能打公共電話。上個月，女兒送了她一支新手機，還教她怎麼用。現在林媽媽不但會用手機打電話，還會用手機跟女兒視訊(gọi video)了。<br><br><b>49. 林媽媽現在能用新手機做什麼？</b>", type: "text_choice", options: [{ label: "A", text: "只能打公共電話。" }, { label: "B", text: "可以跟女兒視訊。" }, { label: "C", text: "可以上網買東西。" }, { label: "D", text: "教朋友怎麼用手機。" }], correctAnswer: "B", explanation: "Giải thích: Mẹ Lâm giờ không chỉ biết gọi điện mà còn biết gọi video (視訊) -> 可以跟女兒視訊." },
                { id: 50, question_zh: "<b>(五)</b><br>誠徵(Tuyển dụng) 晚班工讀生<br>工作時間：晚上六點到十點（一週上四天，週末必須上班）<br>工作內容：幫忙點餐、整理桌子、洗碗<br>薪水：一小時 180 元<br>有興趣的人請下午兩點以後打電話：0912-345-678 找陳經理。<br><br><b>50. 關於這個工作，哪一個是對的？</b>", type: "text_choice", options: [{ label: "A", text: "週末不能休息。" }, { label: "B", text: "每天都要上班。" }, { label: "C", text: "早上八點可以打電話找陳經理。" }, { label: "D", text: "工作內容是幫忙送信。" }], correctAnswer: "A", explanation: "Giải thích: Công việc yêu cầu cuối tuần bắt buộc phải đi làm (週末必須上班) -> Cuối tuần không được nghỉ (週末不能休息)." }
            ]
        }
    ]
};
