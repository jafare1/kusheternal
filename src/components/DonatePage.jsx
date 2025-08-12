import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { ArrowLeft, Heart, DollarSign, Users, Target, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function DonatePage({ language = 'en' }) {
  const navigate = useNavigate()
  const [donationData, setDonationData] = useState({
    amount: '',
    donation_type: 'one-time',
    donor_name: '',
    donor_email: '',
    message: '',
    anonymous: false,
    currency: 'USD'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [stats, setStats] = useState({
    total_donations: 0,
    donation_count: 0,
    recent_donations: []
  })

  const content = {
    en: {
      title: "Support KushEternal",
      subtitle: "Help preserve and share Sudan's ancient heritage",
      backButton: "Back to Home",
      impact: {
        title: "Your Impact",
        subtitle: "Every donation helps preserve history for future generations",
        items: [
          {
            icon: Target,
            title: "Research Funding",
            description: "Support archaeological research and documentation projects"
          },
          {
            icon: Users,
            title: "Educational Outreach",
            description: "Create educational materials and programs for schools"
          },
          {
            icon: TrendingUp,
            title: "Digital Preservation",
            description: "Digitize artifacts and historical documents"
          }
        ]
      },
      form: {
        amount: "Donation Amount",
        amountPlaceholder: "Enter amount",
        type: "Donation Type",
        name: "Your Name (Optional)",
        namePlaceholder: "Enter your name",
        email: "Email Address (Optional)",
        emailPlaceholder: "Enter your email",
        message: "Message (Optional)",
        messagePlaceholder: "Share why you're supporting us...",
        anonymous: "Make this donation anonymous",
        submit: "Donate Now"
      },
      types: {
        "one-time": "One-time Donation",
        "monthly": "Monthly Donation"
      },
      amounts: [25, 50, 100, 250, 500],
      stats: {
        title: "Community Impact",
        totalRaised: "Total Raised",
        donors: "Generous Donors",
        recentTitle: "Recent Supporters"
      },
      success: {
        title: "Thank You for Your Donation!",
        message: "Your generous contribution will help preserve Sudan's ancient heritage for future generations.",
        action: "Donate Again"
      },
      error: {
        title: "Donation Failed",
        message: "There was an error processing your donation. Please try again.",
        action: "Try Again"
      }
    },
    ar: {
      title: "ادعم كوش الأبدية",
      subtitle: "ساعد في الحفاظ على التراث السوداني القديم ومشاركته",
      backButton: "العودة للرئيسية",
      impact: {
        title: "تأثيرك",
        subtitle: "كل تبرع يساعد في الحفاظ على التاريخ للأجيال القادمة",
        items: [
          {
            icon: Target,
            title: "تمويل البحوث",
            description: "دعم مشاريع البحث الأثري والتوثيق"
          },
          {
            icon: Users,
            title: "التوعية التعليمية",
            description: "إنشاء مواد وبرامج تعليمية للمدارس"
          },
          {
            icon: TrendingUp,
            title: "الحفظ الرقمي",
            description: "رقمنة الآثار والوثائق التاريخية"
          }
        ]
      },
      form: {
        amount: "مبلغ التبرع",
        amountPlaceholder: "أدخل المبلغ",
        type: "نوع التبرع",
        name: "اسمك (اختياري)",
        namePlaceholder: "أدخل اسمك",
        email: "عنوان البريد الإلكتروني (اختياري)",
        emailPlaceholder: "أدخل بريدك الإلكتروني",
        message: "رسالة (اختيارية)",
        messagePlaceholder: "شارك سبب دعمك لنا...",
        anonymous: "اجعل هذا التبرع مجهولاً",
        submit: "تبرع الآن"
      },
      types: {
        "one-time": "تبرع لمرة واحدة",
        "monthly": "تبرع شهري"
      },
      amounts: [25, 50, 100, 250, 500],
      stats: {
        title: "تأثير المجتمع",
        totalRaised: "إجمالي المبلغ المجمع",
        donors: "المتبرعون الكرماء",
        recentTitle: "الداعمون الحديثون"
      },
      success: {
        title: "شكراً لك على تبرعك!",
        message: "مساهمتك الكريمة ستساعد في الحفاظ على التراث السوداني القديم للأجيال القادمة.",
        action: "تبرع مرة أخرى"
      },
      error: {
        title: "فشل التبرع",
        message: "حدث خطأ في معالجة تبرعك. يرجى المحاولة مرة أخرى.",
        action: "حاول مرة أخرى"
      }
    }
  }

  const currentContent = content[language]

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/donations')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Error fetching donation stats:', error)
    }
  }

  const handleInputChange = (field, value) => {
    setDonationData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAmountSelect = (amount) => {
    setDonationData(prev => ({
      ...prev,
      amount: amount.toString()
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData)
      })

      if (response.ok) {
        setSubmitStatus('success')
        setDonationData({
          amount: '',
          donation_type: 'one-time',
          donor_name: '',
          donor_email: '',
          message: '',
          anonymous: false,
          currency: 'USD'
        })
        fetchStats() // Refresh stats
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error processing donation:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitStatus(null)
    setDonationData({
      amount: '',
      donation_type: 'one-time',
      donor_name: '',
      donor_email: '',
      message: '',
      anonymous: false,
      currency: 'USD'
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
      <div className="container mx-auto max-w-6xl">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-6 text-amber-700 hover:text-amber-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {currentContent.backButton}
        </Button>

        <div className="text-center mb-12">
          <Heart className="h-16 w-16 text-amber-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-xl text-gray-600">
            {currentContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Impact Section */}
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-amber-900">{currentContent.impact.title}</CardTitle>
                <CardDescription>{currentContent.impact.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {currentContent.impact.items.map((item, index) => (
                    <div key={index} className="text-center">
                      <item.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                      <h3 className="font-semibold text-amber-900 mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Donation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Make a Donation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {currentContent.form.amount}
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-4">
                      {currentContent.amounts.map((amount) => (
                        <Button
                          key={amount}
                          type="button"
                          variant={donationData.amount === amount.toString() ? "default" : "outline"}
                          className={donationData.amount === amount.toString() ? "bg-amber-600 hover:bg-amber-700" : "border-amber-600 text-amber-600"}
                          onClick={() => handleAmountSelect(amount)}
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <Input
                      type="number"
                      value={donationData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      placeholder={currentContent.form.amountPlaceholder}
                      min="1"
                      required
                    />
                  </div>

                  {/* Donation Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.type}
                    </label>
                    <Select value={donationData.donation_type} onValueChange={(value) => handleInputChange('donation_type', value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(currentContent.types).map(([key, value]) => (
                          <SelectItem key={key} value={key}>{value}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.name}
                      </label>
                      <Input
                        value={donationData.donor_name}
                        onChange={(e) => handleInputChange('donor_name', e.target.value)}
                        placeholder={currentContent.form.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {currentContent.form.email}
                      </label>
                      <Input
                        type="email"
                        value={donationData.donor_email}
                        onChange={(e) => handleInputChange('donor_email', e.target.value)}
                        placeholder={currentContent.form.emailPlaceholder}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {currentContent.form.message}
                    </label>
                    <Textarea
                      value={donationData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={currentContent.form.messagePlaceholder}
                      rows={3}
                    />
                  </div>

                  {/* Anonymous Option */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={donationData.anonymous}
                      onChange={(e) => handleInputChange('anonymous', e.target.checked)}
                      className="rounded border-gray-300"
                    />
                    <label htmlFor="anonymous" className="text-sm text-gray-700">
                      {currentContent.form.anonymous}
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </div>
                    ) : (
                      <>
                        <Heart className="h-4 w-4 mr-2" />
                        {currentContent.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-900">{currentContent.stats.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">${stats.total_donations.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">{currentContent.stats.totalRaised}</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">{stats.donation_count}</div>
                  <div className="text-sm text-gray-600">{currentContent.stats.donors}</div>
                </div>

                {stats.recent_donations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-3">{currentContent.stats.recentTitle}</h4>
                    <div className="space-y-2">
                      {stats.recent_donations.slice(0, 5).map((donation, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-600">{donation.donor_name}</span>
                          <Badge variant="outline" className="text-amber-600">
                            ${donation.amount}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonatePage

