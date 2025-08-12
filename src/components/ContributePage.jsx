import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { ArrowLeft, Send, Users, BookOpen, Heart, CheckCircle, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function ContributePage({ language = 'en' }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    contributor_name: '',
    contributor_email: '',
    category: '',
    language: language
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const content = {
    en: {
      title: "Contribute to KushEternal",
      subtitle: "Share your knowledge and help preserve Sudanese heritage",
      backButton: "Back to Home",
      form: {
        title: "Contribution Title",
        titlePlaceholder: "Enter a descriptive title for your contribution",
        content: "Content",
        contentPlaceholder: "Share your knowledge, research, or insights about Kushite civilization...",
        name: "Your Name",
        namePlaceholder: "Enter your full name",
        email: "Email Address",
        emailPlaceholder: "Enter your email address",
        category: "Category",
        categoryPlaceholder: "Select a category",
        submit: "Submit Contribution"
      },
      categories: {
        pharaoh: "Pharaoh Biography",
        queen: "Queen Biography", 
        artifact: "Artifact Information",
        site: "Archaeological Site",
        history: "Historical Event",
        culture: "Cultural Practice",
        research: "Research Finding",
        translation: "Translation Work"
      },
      guidelines: {
        title: "Contribution Guidelines",
        items: [
          "Provide accurate and well-researched information",
          "Include sources and references when possible",
          "Respect cultural sensitivity and historical accuracy",
          "Write in clear, accessible language",
          "Avoid speculation without proper evidence",
          "All contributions are reviewed before publication"
        ]
      },
      success: {
        title: "Contribution Submitted Successfully!",
        message: "Thank you for your contribution. Our team will review it and get back to you soon.",
        action: "Submit Another"
      },
      error: {
        title: "Submission Failed",
        message: "There was an error submitting your contribution. Please try again.",
        action: "Try Again"
      }
    },
    ar: {
      title: "ساهم في كوش الأبدية",
      subtitle: "شارك معرفتك وساعد في الحفاظ على التراث السوداني",
      backButton: "العودة للرئيسية",
      form: {
        title: "عنوان المساهمة",
        titlePlaceholder: "أدخل عنواناً وصفياً لمساهمتك",
        content: "المحتوى",
        contentPlaceholder: "شارك معرفتك أو بحثك أو رؤيتك حول الحضارة الكوشية...",
        name: "اسمك",
        namePlaceholder: "أدخل اسمك الكامل",
        email: "عنوان البريد الإلكتروني",
        emailPlaceholder: "أدخل عنوان بريدك الإلكتروني",
        category: "الفئة",
        categoryPlaceholder: "اختر فئة",
        submit: "إرسال المساهمة"
      },
      categories: {
        pharaoh: "سيرة فرعون",
        queen: "سيرة ملكة",
        artifact: "معلومات أثرية",
        site: "موقع أثري",
        history: "حدث تاريخي",
        culture: "ممارسة ثقافية",
        research: "نتيجة بحثية",
        translation: "عمل ترجمة"
      },
      guidelines: {
        title: "إرشادات المساهمة",
        items: [
          "قدم معلومات دقيقة ومدروسة جيداً",
          "أدرج المصادر والمراجع عند الإمكان",
          "احترم الحساسية الثقافية والدقة التاريخية",
          "اكتب بلغة واضحة ومفهومة",
          "تجنب التكهن بدون أدلة مناسبة",
          "جميع المساهمات تُراجع قبل النشر"
        ]
      },
      success: {
        title: "تم إرسال المساهمة بنجاح!",
        message: "شكراً لك على مساهمتك. سيراجعها فريقنا ويتواصل معك قريباً.",
        action: "إرسال أخرى"
      },
      error: {
        title: "فشل الإرسال",
        message: "حدث خطأ في إرسال مساهمتك. يرجى المحاولة مرة أخرى.",
        action: "حاول مرة أخرى"
      }
    }
  }

  const currentContent = content[language]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contributions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          title: '',
          content: '',
          contributor_name: '',
          contributor_email: '',
          category: '',
          language: language
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting contribution:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitStatus(null)
    setFormData({
      title: '',
      content: '',
      contributor_name: '',
      contributor_email: '',
      category: '',
      language: language
    })
  }

  if (submitStatus === 'success') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-amber-900 mb-4">
              {currentContent.success.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {currentContent.success.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={resetForm} className="bg-amber-600 hover:bg-amber-700">
                {currentContent.success.action}
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="border-amber-600 text-amber-600">
                {currentContent.backButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (submitStatus === 'error') {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto max-w-2xl">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-red-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-amber-900 mb-4">
              {currentContent.error.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {currentContent.error.message}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={resetForm} className="bg-amber-600 hover:bg-amber-700">
                {currentContent.error.action}
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="border-amber-600 text-amber-600">
                {currentContent.backButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto max-w-4xl">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-6 text-amber-700 hover:text-amber-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {currentContent.backButton}
        </Button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Guidelines */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <BookOpen className="h-5 w-5 mr-2" />
                  {currentContent.guidelines.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {currentContent.guidelines.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Users className="h-5 w-5 mr-2" />
                  Share Your Knowledge
                </CardTitle>
                <CardDescription>
                  Help us build the most comprehensive resource on Kushite civilization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.title}
                    </label>
                    <Input
                      value={formData.title}
                      onChange={(e) => handleInputChange('title', e.target.value)}
                      placeholder={currentContent.form.titlePlaceholder}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.category}
                    </label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder={currentContent.form.categoryPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(currentContent.categories).map(([key, value]) => (
                          <SelectItem key={key} value={key}>{value}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.content}
                    </label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => handleInputChange('content', e.target.value)}
                      placeholder={currentContent.form.contentPlaceholder}
                      rows={8}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.name}
                      </label>
                      <Input
                        value={formData.contributor_name}
                        onChange={(e) => handleInputChange('contributor_name', e.target.value)}
                        placeholder={currentContent.form.namePlaceholder}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.email}
                      </label>
                      <Input
                        type="email"
                        value={formData.contributor_email}
                        onChange={(e) => handleInputChange('contributor_email', e.target.value)}
                        placeholder={currentContent.form.emailPlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {currentContent.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContributePage

