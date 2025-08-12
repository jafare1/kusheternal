import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Crown, Globe, Languages, Menu, X, Heart, Search, Users, BookOpen, Pyramid, Scroll, Star, Clock } from 'lucide-react'
import PharaohDetail from './components/PharaohDetail.jsx'
import Timeline from './components/Timeline.jsx'
import ContributePage from './components/ContributePage.jsx'
import DonatePage from './components/DonatePage.jsx'
import './App.css'

// Import images
import piyeImage from './assets/piye.png'
import taharqaImage from './assets/taharqa.png'
import shabakaImage from './assets/shabaka.png'
import tantamaniImage from './assets/tantamani.png'
import amanirenaImage from './assets/amanirenas.png'
import amanishakhetoImage from './assets/amanishakheto.png'
import meroeImage from './assets/5LTGjoVNv84C.jpg'
import elkurruImage from './assets/t4Mb5spc72Gq.jpeg'
import nuriImage from './assets/nzYXrbolphzE.jpg'
import templeImage from './assets/QLg8VHmZIXpc.jpg'

function HomePage({ language, content }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-800/20"></div>
        <div className="relative container mx-auto max-w-4xl">
          <Badge className="mb-4 bg-amber-600 text-white">
            <Globe className="h-4 w-4 mr-2" />
            Ancient Civilization
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6">
            {content.hero.title}
          </h2>
          <p className="text-xl text-amber-800 mb-4 font-semibold">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            {content.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/timeline">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3">
                <Clock className="h-5 w-5 mr-2" />
                {content.hero.cta}
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              <Search className="h-5 w-5 mr-2" />
              Explore Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              {content.features.title}
            </h3>
            <p className="text-lg text-gray-600">
              {content.features.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.features.items.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                  <CardTitle className="text-amber-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pharaohs Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              {content.pharaohs.title}
            </h3>
            <p className="text-lg text-gray-600">
              {content.pharaohs.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.pharaohs.items.map((pharaoh, index) => (
              <Link key={index} to={`/pharaoh/${pharaoh.name.toLowerCase()}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={pharaoh.image} 
                      alt={pharaoh.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-900">{pharaoh.name}</CardTitle>
                    <CardDescription className="text-amber-700 font-semibold">
                      {pharaoh.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{pharaoh.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Queens Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              {content.queens.title}
            </h3>
            <p className="text-lg text-gray-600">
              {content.queens.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.queens.items.map((queen, index) => (
              <Link key={index} to={`/pharaoh/${queen.name.toLowerCase().replace(/\s+/g, '')}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={queen.image} 
                      alt={queen.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-amber-900">{queen.name}</CardTitle>
                    <CardDescription className="text-amber-700 font-semibold">
                      {queen.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{queen.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sites Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-amber-900 mb-4">
              {content.sites.title}
            </h3>
            <p className="text-lg text-gray-600">
              {content.sites.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {content.sites.items.map((site, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={site.image} 
                    alt={site.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-900">{site.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{site.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 px-4 bg-amber-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="h-16 w-16 text-amber-300 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">
            {content.donate}
          </h3>
          <p className="text-xl text-amber-200 mb-8">
            Help us preserve and share the remarkable heritage of ancient Sudan for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
              One-time Donation
            </Button>
            <Button size="lg" variant="outline" className="border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-900">
              Monthly Support
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en')
  }

  const content = {
    en: {
      title: "KushEternal",
      subtitle: "The Hidden Pharaohs of Sudan",
      nav: {
        home: "Home",
        timeline: "Timeline",
        royals: "Royals",
        artifacts: "Artifacts",
        articles: "Articles",
        contribute: "Contribute",
        donate: "Donate",
        about: "About",
        contact: "Contact"
      },
      hero: {
        title: "Discover the Lost Kingdom of Kush",
        subtitle: "Unveiling the Hidden Truths of Sudan's Ancient Pharaohs",
        description: "Journey through the remarkable civilization that ruled Egypt for nearly a century, revealing the untold stories of the Nubian pharaohs who shaped ancient history.",
        cta: "Explore Timeline"
      },
      features: {
        title: "Explore Ancient Kush",
        subtitle: "Discover the rich heritage of Sudan's forgotten pharaohs",
        items: [
          {
            icon: Crown,
            title: "Royal Dynasty",
            description: "Learn about the 25th Dynasty pharaohs who ruled both Egypt and Kush"
          },
          {
            icon: Pyramid,
            title: "Sacred Architecture",
            description: "Explore the magnificent pyramids and temples of Meroë, El-Kurru, and Nuri"
          },
          {
            icon: Scroll,
            title: "Hidden Truths",
            description: "Uncover the advanced ironworking, matriarchal elements, and global influence"
          },
          {
            icon: Star,
            title: "Cultural Legacy",
            description: "Discover how Kushite civilization influenced the ancient world"
          }
        ]
      },
      pharaohs: {
        title: "The Great Pharaohs",
        subtitle: "Meet the rulers who conquered Egypt and built an empire",
        items: [
          {
            name: "Piye",
            title: "The Conqueror",
            description: "Founded the 25th Dynasty and conquered Egypt",
            image: piyeImage
          },
          {
            name: "Taharqa",
            title: "The Builder",
            description: "Greatest of the Kushite pharaohs, builder of monuments",
            image: taharqaImage
          },
          {
            name: "Shabaka",
            title: "The Restorer",
            description: "Restored Egyptian traditions and culture",
            image: shabakaImage
          },
          {
            name: "Tantamani",
            title: "The Last",
            description: "Final pharaoh of the 25th Dynasty",
            image: tantamaniImage
          }
        ]
      },
      queens: {
        title: "The Mighty Kandakes",
        subtitle: "Powerful queens who ruled with strength and wisdom",
        items: [
          {
            name: "Amanirenas",
            title: "The Warrior",
            description: "Defeated the Roman Empire in battle",
            image: amanirenaImage
          },
          {
            name: "Amanishakheto",
            title: "The Builder",
            description: "Built one of the largest pyramids at Meroë",
            image: amanishakhetoImage
          }
        ]
      },
      sites: {
        title: "Sacred Sites",
        subtitle: "Explore the archaeological wonders of ancient Kush",
        items: [
          {
            name: "Meroë",
            description: "Capital city with over 200 pyramids",
            image: meroeImage
          },
          {
            name: "El-Kurru",
            description: "Royal cemetery of early Kushite kings",
            image: elkurruImage
          },
          {
            name: "Nuri",
            description: "Burial site of Taharqa and later kings",
            image: nuriImage
          }
        ]
      },
      donate: "Donate to Preserve Sudanese Heritage"
    },
    ar: {
      title: "كوش الأبدية",
      subtitle: "فراعنة السودان المخفيون",
      nav: {
        home: "الرئيسية",
        timeline: "الجدول الزمني",
        royals: "الملوك",
        artifacts: "الآثار",
        articles: "المقالات",
        contribute: "المساهمة",
        donate: "التبرع",
        about: "حول",
        contact: "اتصل"
      },
      hero: {
        title: "اكتشف مملكة كوش المفقودة",
        subtitle: "كشف الحقائق المخفية لفراعنة السودان القدماء",
        description: "رحلة عبر الحضارة الرائعة التي حكمت مصر لما يقرب من قرن، وكشف القصص غير المروية للفراعنة النوبيين الذين شكلوا التاريخ القديم.",
        cta: "استكشف الجدول الزمني"
      },
      features: {
        title: "استكشف كوش القديمة",
        subtitle: "اكتشف التراث الغني لفراعنة السودان المنسيين",
        items: [
          {
            icon: Crown,
            title: "السلالة الملكية",
            description: "تعرف على فراعنة الأسرة الخامسة والعشرين الذين حكموا مصر وكوش"
          },
          {
            icon: Pyramid,
            title: "العمارة المقدسة",
            description: "استكشف الأهرامات والمعابد الرائعة في مروي والكرو ونوري"
          },
          {
            icon: Scroll,
            title: "الحقائق المخفية",
            description: "اكتشف صناعة الحديد المتقدمة والعناصر الأمومية والتأثير العالمي"
          },
          {
            icon: Star,
            title: "الإرث الثقافي",
            description: "اكتشف كيف أثرت حضارة كوش على العالم القديم"
          }
        ]
      },
      pharaohs: {
        title: "الفراعنة العظام",
        subtitle: "تعرف على الحكام الذين غزوا مصر وبنوا إمبراطورية",
        items: [
          {
            name: "بعانخي",
            title: "الفاتح",
            description: "أسس الأسرة الخامسة والعشرين وغزا مصر",
            image: piyeImage
          },
          {
            name: "تهارقا",
            title: "البناء",
            description: "أعظم الفراعنة الكوشيين، باني الآثار",
            image: taharqaImage
          },
          {
            name: "شباكا",
            title: "المرمم",
            description: "أعاد التقاليد والثقافة المصرية",
            image: shabakaImage
          },
          {
            name: "تنوت آمون",
            title: "الأخير",
            description: "آخر فرعون من الأسرة الخامسة والعشرين",
            image: tantamaniImage
          }
        ]
      },
      queens: {
        title: "الكنداكات العظيمات",
        subtitle: "ملكات قويات حكمن بقوة وحكمة",
        items: [
          {
            name: "أمانيريناس",
            title: "المحاربة",
            description: "هزمت الإمبراطورية الرومانية في المعركة",
            image: amanirenaImage
          },
          {
            name: "أمانيشاخيتو",
            title: "البناءة",
            description: "بنت واحداً من أكبر الأهرامات في مروي",
            image: amanishakhetoImage
          }
        ]
      },
      sites: {
        title: "المواقع المقدسة",
        subtitle: "استكشف عجائب الآثار في كوش القديمة",
        items: [
          {
            name: "مروي",
            description: "العاصمة مع أكثر من 200 هرم",
            image: meroeImage
          },
          {
            name: "الكرو",
            description: "المقبرة الملكية لملوك كوش الأوائل",
            image: elkurruImage
          },
          {
            name: "نوري",
            description: "موقع دفن تهارقا والملوك اللاحقين",
            image: nuriImage
          }
        ]
      },
      donate: "تبرع للحفاظ على التراث السوداني"
    }
  }

  const currentContent = content[language]

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        {/* Header */}
        <header className="bg-gradient-to-r from-amber-900 to-orange-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3">
                <Crown className="h-8 w-8 text-amber-300" />
                <div>
                  <h1 className="text-2xl font-bold">{currentContent.title}</h1>
                  <p className="text-amber-200 text-sm">{currentContent.subtitle}</p>
                </div>
              </Link>
              
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-white hover:bg-amber-800"
                >
                  <Languages className="h-4 w-4 mr-2" />
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden text-white hover:bg-amber-800"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
                <Link
                  to="/"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.home}
                </Link>
                <Link
                  to="/timeline"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.timeline}
                </Link>
                <a
                  href="#royals"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.royals}
                </a>
                <a
                  href="#artifacts"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.artifacts}
                </a>
                <a
                  href="#articles"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.articles}
                </a>
                <Link
                  to="/contribute"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.contribute}
                </Link>
                <Link
                  to="/donate"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.donate}
                </Link>
                <a
                  href="#about"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.about}
                </a>
                <a
                  href="#contact"
                  className="text-amber-200 hover:text-white transition-colors duration-200 px-3 py-2 rounded-md hover:bg-amber-800"
                >
                  {currentContent.nav.contact}
                </a>
              </div>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage language={language} content={currentContent} />} />
            <Route path="/timeline" element={<Timeline language={language} />} />
            <Route path="/pharaoh/:id" element={<PharaohDetail language={language} />} />
            <Route path="/contribute" element={<ContributePage language={language} />} />
            <Route path="/donate" element={<DonatePage language={language} />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-amber-950 text-amber-200 py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Crown className="h-6 w-6 text-amber-400" />
                  <h4 className="text-lg font-bold text-white">{currentContent.title}</h4>
                </div>
                <p className="text-sm">
                  Preserving the legacy of Sudan's ancient pharaohs and sharing their remarkable stories with the world.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-3">Quick Links</h5>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                  <li><Link to="/timeline" className="hover:text-amber-400 transition-colors">Timeline</Link></li>
                  <li><a href="#royals" className="hover:text-amber-400 transition-colors">Royals</a></li>
                  <li><a href="#artifacts" className="hover:text-amber-400 transition-colors">Artifacts</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-3">Get Involved</h5>
                <ul className="space-y-2 text-sm">
                  <li><a href="#contribute" className="hover:text-amber-400 transition-colors">Contribute</a></li>
                  <li><a href="#donate" className="hover:text-amber-400 transition-colors">Donate</a></li>
                  <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a></li>
                  <li><a href="#about" className="hover:text-amber-400 transition-colors">About</a></li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-3">Connect</h5>
                <p className="text-sm mb-4">
                  Join our community of history enthusiasts and researchers.
                </p>
                <div className="flex space-x-3">
                  <Button size="sm" variant="ghost" className="text-amber-200 hover:text-amber-400">
                    <Users className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-amber-200 hover:text-amber-400">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-amber-200 hover:text-amber-400">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm">
              <p>&copy; 2025 KushEternal. All rights reserved. Preserving Sudan's ancient heritage.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App

