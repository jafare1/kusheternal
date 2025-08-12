import React, { useState } from 'react';

const NewsletterSignup = ({ language }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const content = {
    en: {
      title: 'Stay Updated',
      subtitle: 'Get the latest discoveries and insights about Kushite civilization',
      namePlaceholder: 'Your name (optional)',
      emailPlaceholder: 'Enter your email address',
      subscribe: 'Subscribe',
      success: 'Thank you for subscribing!',
      error: 'Something went wrong. Please try again.',
      privacy: 'We respect your privacy. Unsubscribe at any time.'
    },
    ar: {
      title: 'ابق على اطلاع',
      subtitle: 'احصل على آخر الاكتشافات والرؤى حول الحضارة الكوشية',
      namePlaceholder: 'اسمك (اختياري)',
      emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
      subscribe: 'اشترك',
      success: 'شكراً لك على الاشتراك!',
      error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
      privacy: 'نحن نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.'
    }
  };

  const t = content[language] || content.en;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          language
        }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <div className={`bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-lg shadow-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className="max-w-md mx-auto">
        <h3 className="text-2xl font-bold text-amber-900 mb-2">{t.title}</h3>
        <p className="text-amber-700 mb-6">{t.subtitle}</p>
        
        {status === 'success' ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
            {t.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder={t.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
            <input
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              dir={language === 'ar' ? 'rtl' : 'ltr'}
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50"
            >
              {loading ? '...' : t.subscribe}
            </button>
            {status === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {t.error}
              </div>
            )}
          </form>
        )}
        
        <p className="text-xs text-amber-600 mt-4">{t.privacy}</p>
      </div>
    </div>
  );
};

export default NewsletterSignup;

