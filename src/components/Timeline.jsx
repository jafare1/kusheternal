import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Crown, Sword, Building, Scroll, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

const timelineData = {
  en: {
    title: "Timeline of the Kingdom of Kush",
    subtitle: "Journey through 1,000 years of Kushite civilization",
    periods: [
      {
        id: 1,
        period: "Early Kingdom",
        years: "1070-744 BC",
        color: "bg-amber-600",
        icon: Crown,
        events: [
          {
            year: "1070 BC",
            title: "Kingdom of Kush Emerges",
            description: "Following the collapse of Egyptian control, the Kingdom of Kush emerges as an independent power in Nubia.",
            type: "political"
          },
          {
            year: "1000 BC",
            title: "Napata Becomes Capital",
            description: "The city of Napata, near Jebel Barkal, is established as the capital of the growing Kushite kingdom.",
            type: "political"
          },
          {
            year: "900 BC",
            title: "Temple of Amun Restored",
            description: "Major restoration work begins on the Temple of Amun at Jebel Barkal, establishing it as a religious center.",
            type: "religious"
          },
          {
            year: "760 BC",
            title: "Kashta Rules Kush",
            description: "King Kashta consolidates Kushite power and begins expansion northward toward Egypt.",
            type: "political"
          }
        ]
      },
      {
        id: 2,
        period: "25th Dynasty",
        years: "744-656 BC",
        color: "bg-orange-600",
        icon: Sword,
        events: [
          {
            year: "744 BC",
            title: "Piye Conquers Egypt",
            description: "Piye launches his campaign to conquer Egypt, founding the 25th Dynasty and unifying the Nile Valley.",
            type: "military"
          },
          {
            year: "721 BC",
            title: "Shabaka Consolidates Rule",
            description: "Shabaka becomes pharaoh and consolidates Kushite control over all of Egypt, moving the capital to Memphis.",
            type: "political"
          },
          {
            year: "690 BC",
            title: "Taharqa's Golden Age",
            description: "Taharqa ascends to the throne, beginning the most prosperous period of Kushite rule with extensive building projects.",
            type: "cultural"
          },
          {
            year: "671 BC",
            title: "First Assyrian Invasion",
            description: "Assyrian forces under Esarhaddon invade Egypt, beginning the conflicts that would end Kushite rule.",
            type: "military"
          },
          {
            year: "656 BC",
            title: "End of 25th Dynasty",
            description: "Tantamani retreats to Nubia, ending Kushite rule in Egypt but preserving the kingdom in the south.",
            type: "political"
          }
        ]
      },
      {
        id: 3,
        period: "Napatan Period",
        years: "656-300 BC",
        color: "bg-amber-700",
        icon: Building,
        events: [
          {
            year: "656 BC",
            title: "Return to Napata",
            description: "After losing Egypt, the Kushite rulers return to Napata and focus on strengthening their Nubian kingdom.",
            type: "political"
          },
          {
            year: "593 BC",
            title: "Egyptian Invasion Repelled",
            description: "Kushite forces successfully repel an Egyptian invasion led by Psamtik II, maintaining independence.",
            type: "military"
          },
          {
            year: "500 BC",
            title: "Cultural Renaissance",
            description: "A period of cultural flowering begins, with distinctive Kushite art and architecture developing.",
            type: "cultural"
          },
          {
            year: "400 BC",
            title: "Trade Networks Expand",
            description: "Kushite trade networks expand across Africa and the Mediterranean, bringing wealth and cultural exchange.",
            type: "economic"
          },
          {
            year: "300 BC",
            title: "Capital Moves to Meroë",
            description: "The capital is moved from Napata to Meroë, beginning a new phase of Kushite civilization.",
            type: "political"
          }
        ]
      },
      {
        id: 4,
        period: "Meroitic Period",
        years: "300 BC-350 AD",
        color: "bg-red-600",
        icon: Scroll,
        events: [
          {
            year: "300 BC",
            title: "Meroë Becomes Capital",
            description: "The capital moves to Meroë, marking the beginning of the Meroitic period with its own script and culture.",
            type: "cultural"
          },
          {
            year: "200 BC",
            title: "Iron Industry Flourishes",
            description: "Meroë becomes a major center of iron production, earning the nickname 'Birmingham of Africa'.",
            type: "economic"
          },
          {
            year: "25 BC",
            title: "War with Rome",
            description: "Queen Amanirenas leads successful resistance against Roman expansion, negotiating favorable peace terms.",
            type: "military"
          },
          {
            year: "100 AD",
            title: "Peak of Meroitic Culture",
            description: "Meroitic civilization reaches its peak with distinctive art, architecture, and the fully developed Meroitic script.",
            type: "cultural"
          },
          {
            year: "350 AD",
            title: "Fall of Meroë",
            description: "The Kingdom of Kush comes to an end with the conquest by the Kingdom of Aksum.",
            type: "political"
          }
        ]
      }
    ]
  },
  ar: {
    title: "الجدول الزمني لمملكة كوش",
    subtitle: "رحلة عبر 1000 عام من الحضارة الكوشية",
    periods: [
      {
        id: 1,
        period: "المملكة المبكرة",
        years: "1070-744 ق.م",
        color: "bg-amber-600",
        icon: Crown,
        events: [
          {
            year: "1070 ق.م",
            title: "ظهور مملكة كوش",
            description: "بعد انهيار السيطرة المصرية، تظهر مملكة كوش كقوة مستقلة في النوبة.",
            type: "political"
          },
          {
            year: "1000 ق.م",
            title: "نبتة تصبح العاصمة",
            description: "تأسست مدينة نبتة، بالقرب من جبل البركل، كعاصمة للمملكة الكوشية المتنامية.",
            type: "political"
          },
          {
            year: "900 ق.م",
            title: "ترميم معبد آمون",
            description: "تبدأ أعمال الترميم الكبرى في معبد آمون في جبل البركل، مما يجعله مركزاً دينياً.",
            type: "religious"
          },
          {
            year: "760 ق.م",
            title: "كاشتا يحكم كوش",
            description: "الملك كاشتا يوحد القوة الكوشية ويبدأ التوسع شمالاً نحو مصر.",
            type: "political"
          }
        ]
      },
      {
        id: 2,
        period: "الأسرة الخامسة والعشرون",
        years: "744-656 ق.م",
        color: "bg-orange-600",
        icon: Sword,
        events: [
          {
            year: "744 ق.م",
            title: "بعانخي يغزو مصر",
            description: "بعانخي يشن حملته لغزو مصر، مؤسساً الأسرة الخامسة والعشرين وموحداً وادي النيل.",
            type: "military"
          },
          {
            year: "721 ق.م",
            title: "شباكا يوحد الحكم",
            description: "شباكا يصبح فرعوناً ويوحد السيطرة الكوشية على كل مصر، وينقل العاصمة إلى منف.",
            type: "political"
          },
          {
            year: "690 ق.م",
            title: "العصر الذهبي لتهارقا",
            description: "تهارقا يصعد إلى العرش، بادئاً أكثر فترات الحكم الكوشي ازدهاراً مع مشاريع بناء واسعة.",
            type: "cultural"
          },
          {
            year: "671 ق.م",
            title: "الغزو الآشوري الأول",
            description: "القوات الآشورية تحت قيادة إسرحدون تغزو مصر، بادئة الصراعات التي ستنهي الحكم الكوشي.",
            type: "military"
          },
          {
            year: "656 ق.م",
            title: "نهاية الأسرة الخامسة والعشرين",
            description: "تنوت آمون يتراجع إلى النوبة، منهياً الحكم الكوشي في مصر لكن محافظاً على المملكة في الجنوب.",
            type: "political"
          }
        ]
      },
      {
        id: 3,
        period: "الفترة النبتية",
        years: "656-300 ق.م",
        color: "bg-amber-700",
        icon: Building,
        events: [
          {
            year: "656 ق.م",
            title: "العودة إلى نبتة",
            description: "بعد فقدان مصر، يعود الحكام الكوشيون إلى نبتة ويركزون على تقوية مملكتهم النوبية.",
            type: "political"
          },
          {
            year: "593 ق.م",
            title: "صد الغزو المصري",
            description: "القوات الكوشية تصد بنجاح غزواً مصرياً بقيادة بسماتيك الثاني، محافظة على الاستقلال.",
            type: "military"
          },
          {
            year: "500 ق.م",
            title: "النهضة الثقافية",
            description: "تبدأ فترة ازدهار ثقافي، مع تطور فن وعمارة كوشية مميزة.",
            type: "cultural"
          },
          {
            year: "400 ق.م",
            title: "توسع شبكات التجارة",
            description: "شبكات التجارة الكوشية تتوسع عبر أفريقيا والبحر الأبيض المتوسط، جالبة الثروة والتبادل الثقافي.",
            type: "economic"
          },
          {
            year: "300 ق.م",
            title: "العاصمة تنتقل إلى مروي",
            description: "العاصمة تنتقل من نبتة إلى مروي، بادئة مرحلة جديدة من الحضارة الكوشية.",
            type: "political"
          }
        ]
      },
      {
        id: 4,
        period: "الفترة المروية",
        years: "300 ق.م-350 م",
        color: "bg-red-600",
        icon: Scroll,
        events: [
          {
            year: "300 ق.م",
            title: "مروي تصبح العاصمة",
            description: "العاصمة تنتقل إلى مروي، مما يمثل بداية الفترة المروية مع خطها وثقافتها الخاصة.",
            type: "cultural"
          },
          {
            year: "200 ق.م",
            title: "ازدهار صناعة الحديد",
            description: "مروي تصبح مركزاً رئيسياً لإنتاج الحديد، كاسبة لقب 'برمنغهام أفريقيا'.",
            type: "economic"
          },
          {
            year: "25 ق.م",
            title: "الحرب مع روما",
            description: "الملكة أمانيريناس تقود مقاومة ناجحة ضد التوسع الروماني، متفاوضة على شروط سلام مواتية.",
            type: "military"
          },
          {
            year: "100 م",
            title: "ذروة الثقافة المروية",
            description: "الحضارة المروية تصل إلى ذروتها مع فن وعمارة مميزة والخط المروي المطور بالكامل.",
            type: "cultural"
          },
          {
            year: "350 م",
            title: "سقوط مروي",
            description: "مملكة كوش تنتهي مع الغزو من قبل مملكة أكسوم.",
            type: "political"
          }
        ]
      }
    ]
  }
}

const eventTypeColors = {
  political: "bg-blue-100 text-blue-800",
  military: "bg-red-100 text-red-800",
  cultural: "bg-purple-100 text-purple-800",
  religious: "bg-green-100 text-green-800",
  economic: "bg-yellow-100 text-yellow-800"
}

const eventTypeIcons = {
  political: Crown,
  military: Sword,
  cultural: Building,
  religious: Building,
  economic: Scroll
}

function Timeline({ language = 'en' }) {
  const [selectedPeriod, setSelectedPeriod] = useState(1)
  const [selectedEvent, setSelectedEvent] = useState(null)
  
  const data = timelineData[language]
  const currentPeriod = data.periods.find(p => p.id === selectedPeriod)

  const nextPeriod = () => {
    if (selectedPeriod < data.periods.length) {
      setSelectedPeriod(selectedPeriod + 1)
      setSelectedEvent(null)
    }
  }

  const prevPeriod = () => {
    if (selectedPeriod > 1) {
      setSelectedPeriod(selectedPeriod - 1)
      setSelectedEvent(null)
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-16 px-4 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            {data.title}
          </h1>
          <p className="text-xl text-gray-600">
            {data.subtitle}
          </p>
        </div>

        {/* Period Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={prevPeriod} 
              disabled={selectedPeriod === 1}
              variant="outline"
              size="sm"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {data.periods.map((period) => (
                <Button
                  key={period.id}
                  onClick={() => {
                    setSelectedPeriod(period.id)
                    setSelectedEvent(null)
                  }}
                  variant={selectedPeriod === period.id ? "default" : "outline"}
                  className={selectedPeriod === period.id ? period.color : ""}
                  size="sm"
                >
                  <period.icon className="h-4 w-4 mr-2" />
                  {period.period}
                </Button>
              ))}
            </div>
            
            <Button 
              onClick={nextPeriod} 
              disabled={selectedPeriod === data.periods.length}
              variant="outline"
              size="sm"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Current Period Header */}
        <div className="text-center mb-8">
          <Badge className={`${currentPeriod.color} text-white text-lg px-4 py-2 mb-4`}>
            <currentPeriod.icon className="h-5 w-5 mr-2" />
            {currentPeriod.period}
          </Badge>
          <h2 className="text-2xl font-bold text-amber-900">{currentPeriod.years}</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-amber-300 h-full"></div>
          
          {/* Events */}
          <div className="space-y-8">
            {currentPeriod.events.map((event, index) => {
              const EventIcon = eventTypeIcons[event.type]
              const isLeft = index % 2 === 0
              
              return (
                <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card 
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedEvent === index ? 'ring-2 ring-amber-500 shadow-lg' : ''
                      }`}
                      onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge className={eventTypeColors[event.type]}>
                            <EventIcon className="h-3 w-3 mr-1" />
                            {event.type}
                          </Badge>
                          <Badge variant="outline" className="text-amber-700">
                            <Calendar className="h-3 w-3 mr-1" />
                            {event.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-amber-900">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full border-4 border-white ${currentPeriod.color}`}></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="max-w-2xl w-full max-h-96 overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className={eventTypeColors[currentPeriod.events[selectedEvent].type]}>
                    {currentPeriod.events[selectedEvent].type}
                  </Badge>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setSelectedEvent(null)}
                  >
                    ×
                  </Button>
                </div>
                <CardTitle className="text-amber-900">
                  {currentPeriod.events[selectedEvent].title}
                </CardTitle>
                <CardDescription>
                  {currentPeriod.events[selectedEvent].year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {currentPeriod.events[selectedEvent].description}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default Timeline

