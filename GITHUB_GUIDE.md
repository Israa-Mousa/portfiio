# 📚 دليل رفع البورتفيليو على GitHub

## 🎯 خطوات سهلة لنشر موقعك

### الخطوة 1️⃣: إنشاء حساب GitHub

إذا لم يكن لديك حساب:
1. اذهب إلى [github.com](https://github.com)
2. اضغط "Sign up"
3. ملء البيانات المطلوبة
4. تأكيد بريدك الإلكتروني

---

### الخطوة 2️⃣: إنشاء مستودع جديد

**الطريقة الأولى (الأسهل - عبر الموقع):**

1. سجل دخول إلى GitHub
2. اضغط على **+** في الزاوية العلوية اليسرى
3. اختر **"New repository"**
4. أكمل البيانات:
   - **Repository name:** `your-username.github.io`
   - **Description:** (اختياري) `My Portfolio Website`
   - **Public** ✓ (تأكد من اختيار Public)
5. اضغط **"Create repository"**

---

### الخطوة 3️⃣: رفع الملفات

**الطريقة المباشرة (الأسهل للمبتدئين):**

1. من صفحة المستودع الجديد
2. اضغط **"Upload files"**
3. اسحب الملفات التالية:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ `README.md`
4. اضغط **"Commit changes"**

**إذا كنت تفضل استخدام Git (خط الأوامر):**

```bash
# قم بفتح Terminal/Command Prompt

# 1. انتقل إلى مجلد البورتفيليو
cd "C:\Users\israa mazar3a\Documents\portfiio"

# 2. هيّئ المستودع المحلي
git init

# 3. أضف جميع الملفات
git add .

# 4. قم بـ commit الأول
git commit -m "Initial portfolio commit"

# 5. أضف العنوان البعيد (غيّر username إلى اسم مستخدمك)
git remote add origin https://github.com/username/username.github.io.git

# 6. أعد تسمية الفرع الرئيسي
git branch -M main

# 7. ارفع الملفات
git push -u origin main
```

---

### الخطوة 4️⃣: تفعيل GitHub Pages

**اختياري - إذا لم ينشر الموقع تلقائياً:**

1. اذهب إلى صفحة المستودع
2. اضغط على **Settings** (الإعدادات)
3. من القائمة اليسرى، اختر **"Pages"**
4. تحت **"Source"**, اختر:
   - Branch: `main`
   - Folder: `/ (root)`
5. اضغط **"Save"**
6. انتظر دقيقة أو دقيتين...

---

### 🎉 تهانينا!

موقعك الآن مباشراً على:
```
https://username.github.io
```

**مثال:**
- اسم المستخدم: `israamousa96`
- الرابط: `https://israamousa96.github.io`

---

## 🔧 تحديث الموقع لاحقاً

إذا أردت تعديل أي شيء:

### عبر GitHub Web:
1. فتح الملف المطلوب من المستودع
2. اضغط على أيقونة التحرير (✏️)
3. عدّل محتويات الملف
4. اضغط **"Commit changes"**

### عبر Git (خط الأوامر):
```bash
# غيّر الملفات المطلوبة محلياً

# أضف التعديلات
git add .

# قم بـ commit
git commit -m "Update portfolio"

# ارفع التعديلات
git push
```

---

## ⚠️ مشاكل شائعة

### ❌ الموقع لا يظهر

**الحل:**
1. تأكد من اسم المستودع: `username.github.io` (بالضبط)
2. تأكد من أن `index.html` في الجذر
3. انتظر 2-5 دقائق للتحديث

### ❌ التصاميم لا تظهر بشكل صحيح

**الحل:**
1. تأكد من وجود `styles.css` و `script.js` في نفس المجلد
2. تحقق من أسماء الملفات (أحرف صغيرة/كبيرة)
3. افتح المتصفح في وضع خاص (Incognito)

### ❌ أحصل على خطأ 404

**الحل:**
1. تأكد من أن المستودع **public**
2. تأكد من تفعيل GitHub Pages
3. انتظر دقائق قليلة للمعالجة

---

## 📊 معلومات إضافية

### حد مجاني من GitHub Pages:
- ✅ استضافة مجانية
- ✅ نطاقات فرعية
- ✅ تحديثات غير محدودة
- ✅ SSL مجاني

### نصائح مهمة:
- 💡 احفظ كلمة المرور في مكان آمن
- 💡 استخدم **commit messages** واضحة
- 💡 حدّث موقعك بانتظام
- 💡 أضف صورة profile جميلة

---

## 🎓 موارد مفيدة

- [GitHub Docs](https://docs.github.com)
- [GitHub Pages](https://pages.github.com)
- [Git Tutorial](https://git-scm.com/doc)
- [Markdown Guide](https://www.markdownguide.org)

---

**هل تحتاج مساعدة؟** 
💬 اسأل في GitHub Discussions أو Community

**تم إنشاؤه بواسطة:** إسراء موسى  
**التاريخ:** 2025
