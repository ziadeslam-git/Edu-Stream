export interface Section {
  title: string;
  content: string | string[] | { title: string; desc: string }[];
  type?: "text" | "list" | "comparison" | "steps" | "table";
}

export interface Module {
  id: string;
  title: string;
  color: string;
  icon: string;
  objectives: string[];
  sections: Section[];
  videos?: { title: string; url: string }[];
}

export const modules: Module[] = [
  {
    id: "1",
    title: "المفاهيم الأساسية في إنتاج برامج التلعيب",
    color: "#4F46E5",
    icon: "🎮",
    objectives: [
      "تعريف التلعيب بدقة",
      "تعداد أنواع التلعيب",
      "شرح خصائص برامج التلعيب",
      "بيان فوائد برامج التلعيب",
      "إنشاء حساب على Genially",
      "تحليل مكونات لوحة الأيقونات",
      "اختيار قالب مناسب",
      "التحكم في الخلفيات",
      "استخدام الطبقات (Layers)",
      "تنسيق النصوص",
      "شرح أوامر قائمة Transaction",
      "توضيح قائمة Animations"
    ],
    sections: [
      {
        title: "تعريف التلعيب",
        content: "التلعيب هو تطبيق عناصر اللعبة وتقنيات التصميم الرقمي للألعاب في تحقيق أهداف وحل مشاكل في ميادين أخرى خارج سياق الألعاب مثل الإعلام والتسويق والتعليم. يُحقق التلعيب في التعليم من خلال: إضافة نقاط، منح شارات، إنشاء لوائح ترتيبية، تحديد مستويات، ربط الشارات بالمستويات.",
        type: "text"
      },
      {
        title: "أنواع التلعيب الثلاثة",
        content: [
          { title: "التلعيب الهيكلي (Structural)", desc: "عناصر اللعبة كإطار تحفيزي دون تغيير المحتوى — النقاط، الشارات، لوحات الصدارة، المستويات" },
          { title: "التلعيب المحتوي (Content)", desc: "دمج عناصر اللعبة داخل المحتوى — القصص، الشخصيات الرمزية، التحديات" },
          { title: "التلعيب الاجتماعي (Social)", desc: "التفاعل والتعاون — العمل الجماعي، المسابقات، التعليقات الفورية" }
        ],
        type: "list"
      },
      {
        title: "فوائد التلعيب",
        content: ["تعزيز الانخراط", "تحسين الحفظ والفهم", "تهيئة مسارات التعلم الشخصية", "توطيد روح التعاون", "تطبيق المعارف النظرية عملياً", "الحد من قلق التعلم"],
        type: "list"
      },
      {
        title: "تطبيقات التلعيب",
        content: [
          { title: "ClassDojo", desc: "إدارة الفصول" },
          { title: "Duolingo", desc: "تعلم اللغات" },
          { title: "Kahoot", desc: "الاختبارات التفاعلية" },
          { title: "Genially", desc: "إنشاء محتوى تفاعلي" }
        ],
        type: "list"
      },
      {
        title: "مكونات Genially",
        content: [
          { title: "الأدوات الجانبية", desc: "Insert, Design, Animation, Interactivity" },
          { title: "الشريط العلوي", desc: "Preview, All set! (النشر), Settings" },
          { title: "الطبقات (Layers)", desc: "تنظيم العناصر فوق بعضها" },
          { title: "Transition", desc: "تأثيرات الانتقال بين الشرائح" },
          { title: "Templates", desc: "قوالب جاهزة (عروض، ألعاب، خرائط ذهنية)" }
        ],
        type: "list"
      }
    ],
    videos: [
      { title: "مقدمة عن التلعيب", url: "https://www.youtube.com/watch?v=example1" },
      { title: "شرح برنامج Genially", url: "https://www.youtube.com/watch?v=example2" }
    ]
  },
  {
    id: "2",
    title: "مهارة تصميم الألعاب التعليمية باستخدام برنامج Genially",
    color: "#7C3AED",
    icon: "🕹️",
    objectives: [
      "تصميم ألعاب السحب والإفلات",
      "إنشاء ألعاب متعددة الاختيارات",
      "إنشاء المتاهات التفاعلية",
      "استخدام الجداول الزمنية",
      "تصميم ألعاب افتح الصندوق وبطاقات الذاكرة ومن سيربح المليون",
      "إنشاء مستويات ونقاط",
      "إضافة مؤثرات صوتية",
      "إدراج تسجيلات صوتية"
    ],
    sections: [
      {
        title: "السحب والإفلات (Drag & Drop)",
        content: [
          "حدد العنصر",
          "اضغط أيقونة اليد",
          "فعّل 'Drag elements' في الإعدادات",
          "الطالب يسحب العناصر"
        ],
        type: "steps"
      },
      {
        title: "إضافة الصوت والتسجيل",
        content: [
          { title: "تسجيل الصوت", desc: "Insert > Audio > ميكروفون" },
          { title: "موسيقى خلفية", desc: "رفع ملف صوتي + تفعيل Autoplay + Loop + Hide player" }
        ],
        type: "list"
      },
      {
        title: "ألعاب 'افتح الصندوق' والبطاقات المخفية",
        content: [
          "ضع صورة الصندوق/البطاقة في المقدمة",
          "ضع الإجابة خلفها",
          "اضغط الصندوق واختر Interactivity",
          "اختر Window أو Animation"
        ],
        type: "steps"
      },
      {
        title: "مسابقة 'من سيربح المليون'",
        content: "إجابة صحيحة ← Go to page للسؤال التالي، إجابة خاطئة ← صفحة 'حاول مرة أخرى'. من قائمة Navigation اختر نمط Microsite.",
        type: "text"
      },
      {
        title: "المتاهة التفاعلية",
        content: "من قائمة Interactive Elements اختر 'Invisible Area' — ارسم مسارات المتاهة، الجدار الشفاف مربوط بـ 'العودة لصفحة البداية'",
        type: "text"
      },
      {
        title: "لوحة مرجعية سريعة للأيقونات",
        content: [
          { title: "Interactivity", desc: "تجعل العنصر ينطق أو يفتح نافذة أو ينقل" },
          { title: "Animation", desc: "تحريك العناصر (دخول، خروج، مستمر)" },
          { title: "Drag", desc: "السماح للطالب بتحريك الأجسام" },
          { title: "Insert", desc: "إضافة فيديو أو تسجيل أو كود" },
          { title: "Templates", desc: "جداول زمنية جاهزة" }
        ],
        type: "list"
      }
    ],
    videos: [
      { title: "تصميم الألعاب", url: "https://www.youtube.com/watch?v=iYNMe1Ohwbo" },
      { title: "بريزنتيشن", url: "https://www.youtube.com/watch?v=DRI5OJK1nIQ" },
      { title: "Genially", url: "https://www.youtube.com/watch?v=hWIxEr4G3EQ" }
    ]
  },
  {
    id: "3",
    title: "مهارات دمج الوسائط المتعددة وإنشاء اختبارات تفاعلية",
    color: "#059669",
    icon: "🎬",
    objectives: [
      "ضبط خصائص الصورة",
      "إدراج فيديو من YouTube/Vimeo/Webcam",
      "إضافة خرائط تفاعلية وإنفوجرافيك",
      "إدراج روابط بين الصفحات",
      "إنشاء سيناريوهات تعليمية",
      "تصميم Quiz (اختيارات متعددة/صح-خطأ)",
      "تحديد استجابات وتغذية راجعة",
      "نظام التنقل الحر (Non-linear)",
      "إدراج محتوى بمولد AI",
      "إنشاء شخصيات افتراضية",
      "المشاركة الجماعية"
    ],
    sections: [
      {
        title: "أنواع الألعاب التفاعلية في Genially",
        content: [
          { title: "ألعاب الهروب (Escape Rooms)", desc: "حل ألغاز للانتقال من غرفة لأخرى" },
          { title: "ألعاب المسابقات (Quizzes)", desc: "نظام النقاط والمنافسة" },
          { title: "ألعاب الذاكرة", desc: "مطابقة الصور والمعلومات" },
          { title: "ألعاب المسارات (Board Games)", desc: "ألعاب لوحة رقمية تفاعلية" }
        ],
        type: "list"
      },
      {
        title: "خطوات إنشاء لعبة تعليمية",
        content: [
          "اختيار القالب — Create Genially > Gamification > Quizzes/Games/Escape Game",
          "تخصيص المحتوى — اضغط مرتين على النص واستبدل بأسئلتك",
          "برمجة التفاعل — صحيح: Go to page، خاطئ: حاول مرة أخرى، نوافذ منبثقة",
          "إضافة أنيميشن — الأزرار تنبض (Pulse)، صوت عند الإجابة، موسيقى تشويقية",
          "النشر — All set! > رابط مباشر أو كود للتضمين، دمج في Classroom أو Teams"
        ],
        type: "steps"
      },
      {
        title: "التعاون الجماعي",
        content: [
          { title: "Collaborators", desc: "أضف البريد الإلكتروني لزملائك للتعديل المتزامن" },
          { title: "Reusable", desc: "تمكين الزملاء من أخذ نسخة القالب" },
          { title: "الربط مع Classroom", desc: "إدراج رابط Genially كنشاط تفاعلي" }
        ],
        type: "list"
      }
    ]
  },
  {
    id: "4",
    title: "مهارات الإعلام الرقمي",
    color: "#DC2626",
    icon: "📡",
    objectives: [
      "تعريف الإعلام الرقمي",
      "تعداد أشكاله",
      "استخدام الكلمات المفتاحية",
      "التمييز بين مصادر المعلومات",
      "تمييز المحتوى Open Access",
      "تصميم إنفوجرافيك تعليمي",
      "إنتاج فيديوهات بـ CapCut",
      "إنشاء بودكاست",
      "إنشاء محتوى مرخص",
      "نشر محتوى بمجتمع التعلم"
    ],
    sections: [
      {
        title: "مفهوم الإعلام الرقمي وتطوره",
        content: "الإعلام الرقمي يعتمد على الحاسب في إنتاج وتخزين وتوزيع المعلومات، مرتبط بالإنترنت والأجهزة النقالة.\n- إعلام 1.0: القراءة فقط (الجريدة الإلكترونية)\n- إعلام 2.0: التشاركي — Genially وCanva جعلت المعلم ناشراً\n- إعلام 3.0: الذكاء والارتباط — محتوى مخصص",
        type: "text"
      },
      {
        title: "الفرق بين التقليدي والرقمي",
        content: [
          { title: "اتجاه الاتصال", desc: "أحادي ← متعدد تفاعلي" },
          { title: "التكلفة", desc: "عالية ← منخفضة" },
          { title: "دور المتلقي", desc: "سلبي ← إيجابي" },
          { title: "الحدود", desc: "مرتبط بالوقت والمكان ← Anytime Anywhere" }
        ],
        type: "comparison"
      },
      {
        title: "خصائص الإعلام الرقمي",
        content: [
          { title: "الانتشار (Ubiquity)", desc: "وصول عبر مختلف الأجهزة" },
          { title: "المشاركة (Participation)", desc: "الطالب مشارك وليس مستقبلاً" },
          { title: "التحرير المستمر (Editability)", desc: "تعديل الدرس في ثانية" },
          { title: "تعدد الوسائط (Hyper-multimedia)", desc: "يدمج النص والصوت والصورة" },
          { title: "التفاعلية (Interactivity)", desc: "حوار المتعلم مع الآلة" },
          { title: "الآنية (Immediacy)", desc: "30 إجابة في نفس الدقيقة" }
        ],
        type: "list"
      },
      {
        title: "إنتاج المحتوى الإعلامي الرقمي",
        content: [
          { title: "إنفوجرافيك", desc: "Canva/Genially/Piktochart — قاعدة 3 ألوان — 20% نص + 80% بصري" },
          { title: "فيديو CapCut", desc: "قص وترتيب، 9:16 للهاتف، Auto Captions، إزالة الخلفية، Voiceover" },
          { title: "بودكاست", desc: "نقاط رئيسية (لا نص حرفي)، Audacity/Dolby On، Spotify for Podcasters" }
        ],
        type: "list"
      },
      {
        title: "الملكية الفكرية",
        content: "Creative Commons، المحتوى Open Access، ذكر المصدر دائماً",
        type: "text"
      }
    ]
  },
  {
    id: "5",
    title: "توظيف المنصات الاجتماعية وإدارة التعلم",
    color: "#0EA5E9",
    icon: "🌐",
    objectives: [
      "توظيف Telegram وMicrosoft Teams",
      "تنظيم مجموعات نقاش",
      "إدارة بيئة تفاعلية",
      "استخدام Google Classroom",
      "إعداد اختبارات بـ Google Forms وMicrosoft Forms",
      "WordPress وBlogger",
      "تحليل البيانات بـ Google Analytics"
    ],
    sections: [
      {
        title: "منصات التواصل المهني",
        content: [
          { title: "Microsoft Teams", desc: "قنوات تخصصية، مشاركة ملفات Cloud، اجتماعات أونلاين، تكامل مع التطبيقات" },
          { title: "Telegram", desc: "قنوات لنشر روابط Genially، ملفات حتى 2GB، بوتات للمسابقات، لا تستهلك مساحة الهاتف" },
          { title: "آداب التواصل (Netiquette)", desc: "احترم الأوقات، اكتب وصف الرابط (الهدف - الصف المستهدف)" }
        ],
        type: "list"
      },
      {
        title: "إدارة بيئات التعلم",
        content: [
          { title: "التخطيط الهندسي", desc: "سهولة الوصول على كل الأجهزة، UI/UX لأقسام المصادر والواجبات والنقاش" },
          { title: "إدارة المحتوى", desc: "التفاعلية لا التراكمية، كبسولات معرفية، تحديث مستمر" }
        ],
        type: "list"
      },
      {
        title: "أنظمة إدارة التعلم (LMS)",
        content: [
          { title: "Google Classroom", desc: "إنشاء الفصل بالرموز، Stream للتواصل، Classwork للواجبات، Rubrics للتقييم" },
          { title: "Google/Microsoft Forms", desc: "الفرق بين النموذج والاختبار، التصحيح التلقائي، Branching (مسارات ذكية)" }
        ],
        type: "list"
      },
      {
        title: "نشاط المنظومة المتكاملة",
        content: "Blogger ← Genially ← CapCut ← Telegram",
        type: "text"
      }
    ]
  },
  {
    id: "6",
    title: "الذكاء الاصطناعي وحماية البيانات في الإعلام الرقمي",
    color: "#4F46E5",
    icon: "🤖",
    objectives: [
      "أسس حماية البيانات الشخصية",
      "برامج الحماية وتجنب المواقع المشبوهة",
      "السلوك الآمن على الإنترنت",
      "حماية الأجهزة من الفيروسات",
      "استخدام كلمات مرور قوية",
      "مفهوم الذكاء الاصطناعي",
      "التفريق بين أنواعه",
      "أدوات AI: ChatGPT/توليد الصور",
      "دمج AI في التدريس"
    ],
    sections: [
      {
        title: "حماية البيانات الشخصية",
        content: [
          { title: "بيانات المعلم", desc: "فصل الشخصي عن المهني، كلمات مرور معقدة، مصادقة ثنائية 2FA، تجنب Phishing" },
          { title: "بيانات الطلاب", desc: "الحد الأدنى من البيانات، لا تنشر صور بدون إذن، إغلاق رؤية الإيميلات، تخلص آمن من السجلات" },
          { title: "التطبيقات الخارجية", desc: "اقرأ سياسة الخصوصية، أذونات CapCut، تأكد من https://" }
        ],
        type: "list"
      },
      {
        title: "قائمة تفقد (Checklist)",
        content: "كلمة مرور قوية، تجنب الموقع الجغرافي، عدم مشاركة كلمة المرور، إغلاق الكاميرا، استشارة المعلم قبل التسجيل",
        type: "text"
      },
      {
        title: "السلوك الآمن (Cyber Hygiene)",
        content: [
          { title: "إدارة الهوية الرقمية", desc: "كلمة المرور 'جملة' لا كلمة، لا نفس كلمة المرور لكل الحسابات، MFA تمنع 99% من الاختراقات" },
          { title: "التصفح الآمن", desc: "'فكر قبل النقر'، VirusTotal للروابط المشكوك، لا تحمّل برامج 'مكركة'" },
          { title: "الخصوصية", desc: "أوقف الموقع الجغرافي في تطبيقات الكاميرا، راجع الصلاحيات" },
          { title: "قاعدة النسخ الاحتياطي 3-2-1", desc: "3 نسخ، نوعان من الوسائط، نسخة خارج مكان العمل" }
        ],
        type: "list"
      },
      {
        title: "الذكاء الاصطناعي في التعليم والإعلام",
        content: [
          { title: "ChatGPT", desc: "توليد اختبارات، خطط دراسية، شرح مفاهيم معقدة، تصحيح النصوص" },
          { title: "توليد الصور AI", desc: "Midjourney وDALL-E لإنشاء صور تعليمية" },
          { title: "ملاحظات أخلاقية", desc: "لا تعتمد على AI كلياً، تحقق من المعلومات، اذكر المصدر" }
        ],
        type: "list"
      }
    ]
  }
];