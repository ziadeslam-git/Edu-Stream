export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number; // index 0-3
}

export interface ModuleQuiz {
  moduleId: string;
  questions: QuizQuestion[];
}

export const quizzes: ModuleQuiz[] = [
  {
    moduleId: "1",
    questions: [
      { id: "m1q1", question: "ما تعريف التلعيب (Gamification)؟", options: ["إنشاء ألعاب فيديو للتعليم", "تطبيق عناصر اللعبة في سياقات غير لعبية لتحقيق أهداف تعليمية", "استخدام الألعاب كمكافأة للطلاب", "تحويل المناهج إلى ألعاب كاملة"], correct: 1 },
      { id: "m1q2", question: "أي من التالي مثال على عنصر التلعيب الهيكلي؟", options: ["القصص التفاعلية", "الشخصيات الرمزية (Avatars)", "لوحات الصدارة (Leaderboards)", "سيناريوهات التحدي"], correct: 2 },
      { id: "m1q3", question: "ما الفرق بين التلعيب الهيكلي والمحتوي؟", options: ["لا فرق بينهما", "الهيكلي يضيف عناصر اللعبة دون تغيير المحتوى، المحتوي يدمجها داخل المحتوى", "الهيكلي للمجموعات، المحتوي للأفراد", "الهيكلي رقمي، المحتوي ورقي"], correct: 1 },
      { id: "m1q4", question: "أي تطبيق يوظّف التلعيب في تعلم اللغات؟", options: ["Microsoft Word", "Duolingo", "Google Maps", "Adobe Photoshop"], correct: 1 },
      { id: "m1q5", question: "ما اسم الأداة الجانبية في Genially لإضافة تفاعلية للعناصر؟", options: ["Animation", "Interactivity", "Templates", "Insert"], correct: 1 },
      { id: "m1q6", question: "ما وظيفة الطبقات (Layers) في Genially؟", options: ["تغيير خلفية الشريحة", "تنظيم العناصر فوق بعضها", "إضافة صوت للعرض", "نشر العرض على الإنترنت"], correct: 1 },
      { id: "m1q7", question: "أي من الفوائد التالية للتلعيب في التعليم؟", options: ["زيادة قلق التعلم", "الحد من المشاركة", "تحسين الحفظ والفهم", "تقليل التفاعل"], correct: 2 },
      { id: "m1q8", question: "ما الذي تتيحه أداة Templates في Genially؟", options: ["إضافة صور", "جداول زمنية جاهزة بضغطة واحدة", "تسجيل صوتي", "تصدير ملف PDF"], correct: 1 },
      { id: "m1q9", question: "التلعيب الاجتماعي يركز أساساً على:", options: ["المحتوى التعليمي", "الرسومات والتصميم", "التفاعل والتعاون بين المشاركين", "استخدام الفيديو"], correct: 2 },
      { id: "m1q10", question: "ما زر النشر في Genially؟", options: ["Preview", "Export", "All set!", "Settings"], correct: 2 },
    ],
  },
  {
    moduleId: "2",
    questions: [
      { id: "m2q1", question: "لتفعيل السحب والإفلات (Drag & Drop) في Genially، ما الخيار الذي يجب تفعيله؟", options: ["Autoplay", "Loop", "Drag elements", "Hide player"], correct: 2 },
      { id: "m2q2", question: "لإضافة موسيقى خلفية تعمل تلقائياً، أي خيارات يجب تفعيلها؟", options: ["Drag + Loop + Hide player", "Autoplay + Loop + Hide player", "Autoplay + Insert + Preview", "Loop + Export + Settings"], correct: 1 },
      { id: "m2q3", question: "في لعبة 'من سيربح المليون'، ماذا يحدث عند الإجابة الخاطئة؟", options: ["ينتقل للسؤال التالي", "تنتهي اللعبة فوراً", "يذهب لصفحة 'حاول مرة أخرى'", "تُخصم نقاط"], correct: 2 },
      { id: "m2q4", question: "ما أداة التفاعل المستخدمة لإنشاء لعبة المتاهة؟", options: ["Drag elements", "Invisible Area", "Window popup", "Go to page"], correct: 1 },
      { id: "m2q5", question: "ما وظيفة أيقونة Interactivity في Genially؟", options: ["تحريك العناصر", "السماح بتحريك الأجسام", "تجعل العنصر ينطق أو يفتح نافذة أو ينقل", "إضافة فيديو"], correct: 2 },
      { id: "m2q6", question: "كيف تسجّل صوتك مباشرة في Genially؟", options: ["Design > Record", "Insert > Audio > ميكروفون", "Settings > Voice", "Templates > Audio"], correct: 1 },
      { id: "m2q7", question: "ما وظيفة أيقونة Animation في Genially؟", options: ["إضافة صوت", "السماح بالسحب", "تحريك العناصر (دخول، خروج، مستمر)", "نشر العرض"], correct: 2 },
      { id: "m2q8", question: "في لعبة 'افتح الصندوق'، ما الخطوة الأولى؟", options: ["اضغط على Interactivity", "ضع الإجابة في الخلف", "ضع صورة الصندوق/البطاقة في المقدمة", "اختر Window أو Animation"], correct: 2 },
      { id: "m2q9", question: "لإنشاء مسابقة من سيربح المليون باحترافية، أي نمط تختار من Navigation؟", options: ["Classic", "Microsite", "Linear", "Gallery"], correct: 1 },
      { id: "m2q10", question: "ما الغرض من 'Drag elements' في الإعدادات؟", options: ["تغيير ترتيب الشرائح", "السماح للطالب بتحريك الأجسام داخل اللعبة", "إضافة تأثير حركة", "تصدير العرض"], correct: 1 },
    ],
  },
  {
    moduleId: "3",
    questions: [
      { id: "m3q1", question: "ما نوع الألعاب في Genially الذي يعتمد على حل ألغاز للانتقال من غرفة لأخرى؟", options: ["Quizzes", "Board Games", "Escape Rooms", "Memory Games"], correct: 2 },
      { id: "m3q2", question: "عند برمجة التفاعل في Genially، ماذا يحدث عند الإجابة الصحيحة؟", options: ["يعود للبداية", "يذهب لصفحة 'حاول مرة أخرى'", "ينتقل للمرحلة التالية عبر Go to page", "لا شيء"], correct: 2 },
      { id: "m3q3", question: "ما خاصية 'Reusable' في Genially؟", options: ["تمكين تسجيل الصوت", "تمكين الزملاء من أخذ نسخة قابلة للتعديل", "تفعيل الموسيقى الخلفية", "تصدير ملف PDF"], correct: 1 },
      { id: "m3q4", question: "كيف تضيف زملاءك للتعديل المتزامن في Genially؟", options: ["عبر Settings > Share", "بضغط أيقونة الشخص مع '+' وإضافة بريدهم الإلكتروني", "عبر قائمة Export", "بإرسال رابط فقط"], correct: 1 },
      { id: "m3q5", question: "ما نوع اللعبة التي تعتمد على مطابقة الصور والمعلومات؟", options: ["Escape Rooms", "Board Games", "Memory Games", "Quizzes"], correct: 2 },
      { id: "m3q6", question: "الخطوة الأولى لإنشاء لعبة في Genially هي:", options: ["تخصيص المحتوى", "اختيار القالب من قسم Gamification", "برمجة التفاعل", "إضافة الأنيميشن"], correct: 1 },
      { id: "m3q7", question: "لدمج الجيناللي في Google Classroom، ماذا تفعل؟", options: ["تصدير ملف PDF", "إدراج الرابط المباشر كنشاط تفاعلي", "رفع ملف من الجهاز", "إرسال بريد إلكتروني"], correct: 1 },
      { id: "m3q8", question: "ما معنى نظام التنقل غير الخطي (Non-linear) في Genially؟", options: ["المتعلم يسير بترتيب محدد مسبقاً", "المتعلم يختار مساره بحرية", "الشرائح لا تتصل ببعضها", "لا يوجد تنقل"], correct: 1 },
      { id: "m3q9", question: "ما الأداة التي تجعل الأزرار تنبض (Pulse) لجذب الانتباه؟", options: ["Interactivity", "Animation", "Insert", "Templates"], correct: 1 },
      { id: "m3q10", question: "ما نوع الألعاب التي تشبه ألعاب اللوحة التقليدية بطريقة رقمية؟", options: ["Quizzes", "Escape Rooms", "Memory Games", "Board Games"], correct: 3 },
    ],
  },
  {
    moduleId: "4",
    questions: [
      { id: "m4q1", question: "ما التعريف الصحيح للإعلام الرقمي؟", options: ["الإعلام المطبوع فقط", "الإعلام الذي يعتمد على الحاسب في إنتاج وتخزين وتوزيع المعلومات", "التلفزيون والراديو فقط", "إعلام الصحف الورقية"], correct: 1 },
      { id: "m4q2", question: "في إعلام 2.0، ما دور المعلم؟", options: ["مستهلك للمعلومة فقط", "ناشر ومنتج للمحتوى", "متلقٍّ سلبي", "لا يملك دوراً"], correct: 1 },
      { id: "m4q3", question: "ما قاعدة 'الثلاثة ألوان' في الإنفوجرافيك؟", options: ["استخدام ثلاثة أنواع من الخطوط", "لا تستخدم أكثر من 3 ألوان رئيسية", "تقسيم الإنفوجرافيك لثلاثة أقسام", "استخدام ثلاث صور فقط"], correct: 1 },
      { id: "m4q4", question: "ما نسبة النص في الإنفوجرافيك التعليمي الجيد؟", options: ["80% نص + 20% بصري", "50% نص + 50% بصري", "20% نص + 80% بصري", "100% نص"], correct: 2 },
      { id: "m4q5", question: "أي تطبيق يُستخدم لإنتاج الفيديوهات القصيرة وإزالة الخلفية؟", options: ["Audacity", "CapCut", "Canva", "Piktochart"], correct: 1 },
      { id: "m4q6", question: "ما نسبة العرض للطول المناسبة للفيديو على الهاتف وسوشيال ميديا؟", options: ["16:9", "4:3", "9:16", "1:1"], correct: 2 },
      { id: "m4q7", question: "ما خاصية الانتشار (Ubiquity) في الإعلام الرقمي؟", options: ["سرعة نشر الأخبار", "إمكانية الوصول عبر مختلف الأجهزة", "التفاعل مع الجمهور", "إمكانية التعديل المستمر"], correct: 1 },
      { id: "m4q8", question: "ما منصة النشر المجانية المخصصة للبودكاست؟", options: ["YouTube", "Spotify for Podcasters", "Canva", "Google Drive"], correct: 1 },
      { id: "m4q9", question: "ما خاصية الآنية (Immediacy) في الإعلام الرقمي؟", options: ["إمكانية الوصول من أي مكان", "30 إجابة في نفس الدقيقة وتغذية راجعة فورية", "إمكانية تعديل المحتوى", "إمكانية المشاركة"], correct: 1 },
      { id: "m4q10", question: "ما الفرق الأساسي بين الإعلام التقليدي والرقمي من حيث دور المتلقي؟", options: ["التقليدي أسرع", "التقليدي: سلبي (مستمع) — الرقمي: إيجابي (مشارك ومصمم)", "الرقمي أكثر موثوقية", "لا فرق بينهما"], correct: 1 },
    ],
  },
  {
    moduleId: "5",
    questions: [
      { id: "m5q1", question: "ما أفضل منصة لمشاركة ملفات كبيرة (حتى 2 جيجابايت) وروابط Genially بين المعلمين؟", options: ["Microsoft Teams", "Telegram", "WhatsApp", "Facebook"], correct: 1 },
      { id: "m5q2", question: "ما الفرق بين Stream وClasswork في Google Classroom؟", options: ["لا فرق", "Stream للتواصل الاجتماعي، Classwork لتنظيم الواجبات في موضوعات", "Stream للواجبات، Classwork للتواصل", "كلاهما للاختبارات فقط"], correct: 1 },
      { id: "m5q3", question: "ما المقصود بـ Branching في Google Forms؟", options: ["إضافة صور للأسئلة", "مسارات ذكية حسب إجابة المشارك", "تصدير النتائج لـ Excel", "تحديد وقت الاختبار"], correct: 1 },
      { id: "m5q4", question: "ما مبدأ 'التفاعلية لا التراكمية' في إدارة المحتوى؟", options: ["تجميع أكبر قدر من الملفات", "تحويل PDF إلى إنفوجرافيك تفاعلي بدلاً من التراكم", "نشر الدروس بشكل يومي", "استخدام ملفات Word"], correct: 1 },
      { id: "m5q5", question: "ما ميزة قنوات Microsoft Teams التخصصية؟", options: ["مشاركة الفيديوهات فقط", "تنظيم حسب التخصص وتبادل الخبرات", "إجراء الاختبارات", "إرسال رسائل نصية فقط"], correct: 1 },
      { id: "m5q6", question: "أي أداة تُستخدم لمراقبة سلوك الطلاب الرقمي وتطوير المحتوى؟", options: ["WordPress", "Google Analytics", "Blogger", "Microsoft Forms"], correct: 1 },
      { id: "m5q7", question: "ما الأداة المناسبة لبناء موقع أو مدونة تعليمية وأرشفة الإنتاج الفكري؟", options: ["Google Classroom", "WordPress/Blogger", "Microsoft Forms", "Telegram"], correct: 1 },
      { id: "m5q8", question: "ما الميزة الرئيسية لـ Telegram عن WhatsApp في البيئة التعليمية؟", options: ["سهولة الاستخدام", "ملفات حتى 2GB وبوتات وقنوات بآلاف المشتركين", "مجاني بالكامل", "دعم الفيديو"], correct: 1 },
      { id: "m5q9", question: "ما الغرض من Rubrics في Google Classroom؟", options: ["جدولة المنشورات", "معايير التقييم الواضحة للطلاب", "دعوة الطلاب للفصل", "مشاركة الملفات"], correct: 1 },
      { id: "m5q10", question: "ما أحد آداب التواصل الرقمي (Netiquette) عند مشاركة رابط Genially؟", options: ["نشر الرابط فقط بدون وصف", "كتابة وصف يتضمن الهدف والصف المستهدف", "إرسال الرابط لشخص واحد فقط", "عدم مشاركة الروابط"], correct: 1 },
    ],
  },
  {
    moduleId: "6",
    questions: [
      { id: "m6q1", question: "ما نسبة الاختراقات التي تمنعها المصادقة الثنائية (2FA/MFA)؟", options: ["50%", "75%", "99%", "100%"], correct: 2 },
      { id: "m6q2", question: "ما مبدأ 'قاعدة 3-2-1' في النسخ الاحتياطي؟", options: ["3 أجهزة، 2 مستخدمين، 1 كلمة مرور", "3 نسخ، نوعان من الوسائط، نسخة خارج مكان العمل", "3 تطبيقات، 2 ملفات، 1 مجلد", "3 مرات يومياً، 2 أسبوعياً، 1 شهرياً"], correct: 1 },
      { id: "m6q3", question: "ما الخطوة الأولى لحماية بيانات الطلاب عند استخدام Google Forms؟", options: ["جمع أكبر قدر من البيانات", "الحد الأدنى من البيانات — لا تطلب رقم الهاتف أو العنوان", "نشر نتائج الاختبارات علناً", "مشاركة كلمة المرور مع الطلاب"], correct: 1 },
      { id: "m6q4", question: "ما موقع VirusTotal ويستخدم لـ:", options: ["تصميم الإنفوجرافيك", "فحص الروابط المشكوك فيها", "تحرير الفيديو", "إنشاء البودكاست"], correct: 1 },
      { id: "m6q5", question: "ما قاعدة 'فكر قبل النقر' في الأمن الرقمي؟", options: ["اضغط على كل الروابط المرسلة", "لا تفتح روابط مجهولة المصدر", "شارك كلمة مرورك مع الزملاء", "استخدم نفس كلمة المرور لكل الحسابات"], correct: 1 },
      { id: "m6q6", question: "أي من التالي يُعد استخداماً أخلاقياً صحيحاً للذكاء الاصطناعي في التعليم؟", options: ["نسب محتوى AI بالكامل لنفسك", "عدم التحقق من معلومات AI", "استخدام AI كمساعد مع التحقق وذكر المصدر", "الاعتماد الكلي على AI"], correct: 2 },
      { id: "m6q7", question: "ما الفرق بين الفصل بين البريد الشخصي والمهني؟", options: ["لا فرق — بريد واحد يكفي", "البريد الرسمي للمنصات التعليمية يحمي بياناتك المهنية", "البريد الشخصي أكثر أماناً", "يجب استخدام بريد واحد للجميع"], correct: 1 },
      { id: "m6q8", question: "ما تطبيق ChatGPT ويمكن استخدامه لـ:", options: ["تصوير الفيديو", "توليد اختبارات وشرح مفاهيم معقدة وتصحيح النصوص", "تصميم الإنفوجرافيك فقط", "نشر البودكاست"], correct: 1 },
      { id: "m6q9", question: "لماذا يجب إغلاق رؤية الطلاب لإيميلات بعضهم في Google Classroom؟", options: ["لتوفير مساحة التخزين", "لحماية خصوصية الطلاب", "لتسريع الاتصال", "لا سبب لذلك"], correct: 1 },
      { id: "m6q10", question: "ما أدوات توليد الصور بالذكاء الاصطناعي لإنشاء صور تعليمية؟", options: ["CapCut وAudacity", "Midjourney وDALL-E", "Canva وPiktochart", "Blogger وWordPress"], correct: 1 },
    ],
  },
];
