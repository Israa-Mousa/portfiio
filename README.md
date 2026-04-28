# 🎨 Portfolio Website - إسراء مزارعة

موقع بورتفيليو احترافي وحديث مبني بـ HTML و CSS و JavaScript بالكامل.

## ✨ المميزات

- 🎯 تصميم حديث وجذاب
- 📱 استجابة كاملة (Responsive)
- ⚡ أداء عالي وسريع
- 🎨 تأثيرات بصرية رائعة
- ♿ متوافق مع معايير الوصولية
- 📊 أقسام متعددة (الرئيسية، عني، مهارات، شهادات، مشاريع، تواصل)

## 📁 هيكل الملفات

```
portfolio/
├── index.html      # الصفحة الرئيسية
├── styles.css      # تصميم الموقع
├── script.js       # الوظائف التفاعلية
└── README.md       # ملف التوثيق
```

## 🚀 كيفية الاستخدام المحلي

1. **استنساخ المستودع:**
   ```bash
   git clone https://github.com/Israa-Mousa/portfiio.git
   ```

2. **فتح الموقع:**
   - انقر مباشرة على ملف `index.html`
   - أو استخدم خادم محلي:
   ```bash
   # إذا كان لديك Python
   python -m http.server 8000
   
   # أو استخدم Live Server في VS Code
   ```

3. افتح المتصفح على: `http://localhost:8000`

## 🌐 نشر على GitHub Pages

### الطريقة الأولى: عبر GitHub Web Interface

1. **أنشئ مستودع جديد:**
   - اذهب إلى github.com وانقر على "New Repository"
   - سمه: `Israa-Mousa/portfiio`
   - اختر "Public"
   - اضغط "Create Repository"

2. **أضف الملفات:**
   - انقر على "Add file" ثم "Upload files"
   - اسحب وأفلت:
     - `index.html`
     - `styles.css`
     - `script.js`
   - اضغط "Commit changes"

3. **فعّل GitHub Pages:**
   - اذهب إلى Settings
   - ابحث عن "Pages" في القائمة اليسرى
   - اختر "Deploy from a branch"
   - اختر الفرع `main` والمجلد `/ (root)`
   - اضغط "Save"

4. **الموقع جاهز!**
   - بعد دقائق، ستجد موقعك على: `https://Israa-Mousa.github.io/portfiio`

### الطريقة الثانية: عبر Git Command Line

```bash
# 1. أنشئ مستودع محلي
git init

# 2. أضف جميع الملفات
git add .

# 3. قم بـ Commit الأولي
git commit -m "Initial portfolio commit"

# 4. أضف المستودع البعيد
git remote add origin https://github.com/Israa-Mousa/portfiio.git

# 5. ارفع الملفات
git branch -M main
git push -u origin main
```

## ⚙️ التخصيص

### تعديل المعلومات الشخصية:
في ملف `index.html`:
- غيّر الاسم والبريد الإلكتروني
- حدّث روابط وسائل التواصل
- عدّل المشاريع والمهارات والشهادات

### تغيير الألوان:
في ملف `styles.css`:
```css
:root {
    --primary-color: #d81dd8;      /* اللون الأساسي */
    --secondary-color: #861e8a;    /* اللون الثانوي */
    --text-dark: #1a202c;
    --bg-light: #f8f9fa;
}
```

## 📧 إضافة بريد إلكتروني حقيقي

لجعل نموذج التواصل يعمل فعلياً، يمكنك استخدام خدمات مثل:

### EmailJS
```javascript
const EMAILJS_SERVICE_ID = 'your_service_id';
const EMAILJS_TEMPLATE_ID = 'your_template_id';
const EMAILJS_PUBLIC_KEY = 'your_public_key';
```

### Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" placeholder="اسمك" required>
    <input type="email" name="email" placeholder="بريدك الإلكتروني" required>
    <textarea name="message" placeholder="رسالتك" required></textarea>
    <button type="submit">إرسال الرسالة</button>
</form>
```

## 📄 الترخيص

هذا المشروع مفتوح المصدر تحت رخصة MIT.
