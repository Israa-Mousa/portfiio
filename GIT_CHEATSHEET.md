# ⚡ بطاقة سريعة - أوامر Git الأساسية

## 🚀 أولى المرات - الإعداد الأولي

```bash
# الذهاب إلى مجلد البورتفيليو
cd path/to/portfolio

# إنشاء مستودع محلي
git init

# إضافة ملفات المستودع البعيد
git remote add origin https://github.com/username/username.github.io.git

# التحقق من الملفات المتغيرة
git status
```

## 📤 رفع الملفات للمرة الأولى

```bash
# إضافة جميع الملفات
git add .

# حفظ التغييرات مع رسالة
git commit -m "Initial portfolio commit"

# تعيين اسم الفرع الرئيسي
git branch -M main

# رفع الملفات
git push -u origin main
```

## 🔄 تحديثات لاحقة

```bash
# رؤية الملفات المتغيرة
git status

# إضافة ملفات محددة
git add filename.html
git add .              # أو أضف كل الملفات

# حفظ التغييرات
git commit -m "وصف التغيير"

# رفع التغييرات
git push
```

## 📋 أمثلة على رسائل Commit جيدة

```bash
# ✅ جيد
git commit -m "إضافة section المشاريع"
git commit -m "تصحيح أخطاء CSS في الهاتف"
git commit -m "تحديث معلومات التواصل"

# ❌ سيء
git commit -m "تعديل"
git commit -m "fix bug"
git commit -m "updated"
```

## 🔍 معلومات مفيدة

```bash
# عرض سجل التغييرات
git log

# عرض الفرق بين الإصدارات
git diff

# إلغاء آخر تغيير
git revert HEAD

# عرض الفروع
git branch

# طلب التحديثات من الخادم
git pull
```

## 🐛 حل المشاكل

### تغيير آخر commit
```bash
git commit --amend -m "رسالة جديدة"
git push --force-with-lease
```

### إرجاع ملف إلى نسخة قديمة
```bash
git checkout HEAD -- filename.css
```

### حذف ملف من التتبع
```bash
git rm --cached filename.js
git commit -m "Remove filename.js"
git push
```

## 💾 النسخ الاحتياطية

```bash
# حفظ التغييرات مؤقتاً
git stash

# استرجاع التغييرات المؤقتة
git stash pop

# عرض النسخ المؤقتة
git stash list
```

## 🌳 إدارة الفروع

```bash
# إنشاء فرع جديد
git branch new-feature

# الانتقال للفرع الجديد
git checkout new-feature

# أو إنشء والانتقال مباشرة
git checkout -b new-feature

# الاندماج مع main
git checkout main
git merge new-feature

# حذف الفرع
git branch -d new-feature
```

---

## 🎯 الخطوات الموصى بها يومياً

```bash
# 1. الصباح - تحديث الملفات
git pull

# 2. العمل على التغييرات
# ... عدّل الملفات ...

# 3. المساء - حفظ التغييرات
git add .
git commit -m "وصف التغييرات"
git push
```

---

## 📱 عبر GitHub على الويب (بدون أوامر)

إذا كنت تريد تجنب خط الأوامر:

1. **فتح الملف** من المستودع
2. **اضغط** ✏️ (تحرير)
3. **عدّل** المحتوى
4. **Commit changes** بإضافة رسالة

---

**ملاحظة:** احفظ هذا الملف للرجوع إليه!
