import { useParams, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ArrowLeft, Crown, Calendar, MapPin, Scroll, Star } from 'lucide-react'

// Import images
import piyeImage from '../assets/piye.png'
import taharqaImage from '../assets/taharqa.png'
import shabakaImage from '../assets/shabaka.png'
import tantamaniImage from '../assets/tantamani.png'
import amanirenaImage from '../assets/amanirenas.png'
import amanishakhetoImage from '../assets/amanishakheto.png'

const pharaohsData = {
  en: {
    piye: {
      name: "Piye",
      title: "The Conqueror",
      reign: "744-714 BC",
      capital: "Napata",
      image: piyeImage,
      description: "Piye was the founder of the Twenty-fifth Dynasty of Egypt and the first Kushite pharaoh to rule over a unified Egypt and Kush. Born in the Kingdom of Kush, he launched a military campaign that would forever change the course of ancient history.",
      achievements: [
        "Founded the 25th Dynasty of Egypt",
        "Conquered Memphis and unified Egypt under Kushite rule",
        "Restored Egyptian temples and traditions",
        "Established Kushite control over the Nile Valley",
        "Created the largest empire in Africa at the time"
      ],
      biography: "Piye's rise to power began in the Kingdom of Kush, where he inherited the throne from his father Kashta. Recognizing the political fragmentation of Egypt during the Third Intermediate Period, Piye saw an opportunity to restore order and unity to the land of the pharaohs. His military campaign, known as the Piye Stela, details his methodical conquest of Egypt, city by city, until he controlled the entire Nile Valley from Nubia to the Mediterranean. Unlike previous conquerors, Piye showed remarkable respect for Egyptian culture and religion, positioning himself as a legitimate pharaoh rather than a foreign ruler. His reign marked the beginning of a Kushite renaissance that would influence both Egyptian and Nubian civilizations for generations.",
      legacy: "Piye's legacy extends far beyond his military conquests. He established a precedent for Kushite rule that emphasized cultural preservation and religious devotion. His successors would continue his policies of restoration and expansion, creating one of the most prosperous periods in ancient African history. The Piye Stela, discovered at Jebel Barkal, remains one of the most important historical documents of ancient Africa, providing detailed insights into Kushite military strategy, diplomacy, and religious beliefs."
    },
    taharqa: {
      name: "Taharqa",
      title: "The Builder",
      reign: "690-664 BC",
      capital: "Memphis & Napata",
      image: taharqaImage,
      description: "Taharqa was the greatest of the Kushite pharaohs, known for his extensive building projects, military campaigns, and cultural achievements. His reign represented the height of Kushite power and influence in the ancient world.",
      achievements: [
        "Built more monuments than any other Kushite pharaoh",
        "Expanded the empire to its greatest extent",
        "Defeated Assyrian invasions multiple times",
        "Restored the Temple of Amun at Jebel Barkal",
        "Established diplomatic relations across the ancient world"
      ],
      biography: "Taharqa ascended to the throne during a period of unprecedented prosperity for the Kushite Empire. His reign of 26 years was marked by ambitious building projects that spanned from Nubia to the Nile Delta. He constructed temples, pyramids, and monuments that rivaled those of the greatest Egyptian pharaohs. Taharqa's military prowess was equally impressive, as he successfully defended Egypt against multiple Assyrian invasions, earning the respect of his enemies and allies alike. His court attracted scholars, artists, and diplomats from across the known world, making it a center of learning and culture. The biblical references to 'Tirhakah king of Ethiopia' in the Book of Kings attest to his international prominence.",
      legacy: "Taharqa's architectural legacy is visible throughout Sudan and Egypt, with his monuments at Jebel Barkal, Sanam, and Kawa standing as testaments to Kushite engineering and artistic achievement. His pyramid at Nuri is one of the largest built by any Kushite ruler. Modern archaeological discoveries continue to reveal the extent of his influence, from trade networks that reached the Mediterranean to diplomatic correspondence with distant kingdoms."
    },
    shabaka: {
      name: "Shabaka",
      title: "The Restorer",
      reign: "721-707 BC",
      capital: "Memphis",
      image: shabakaImage,
      description: "Shabaka was a Kushite pharaoh who consolidated Kushite control over Egypt and became known for his efforts to restore Egyptian religious traditions and cultural practices.",
      achievements: [
        "Consolidated Kushite rule over all of Egypt",
        "Restored ancient Egyptian religious texts",
        "Rebuilt temples throughout Egypt",
        "Established Memphis as his primary capital",
        "Created the Shabaka Stone with ancient creation myths"
      ],
      biography: "Shabaka inherited a kingdom that spanned from the Fourth Cataract to the Mediterranean, but his greatest challenge was maintaining unity between the diverse populations of Egypt and Kush. He approached this challenge through cultural restoration rather than military force, earning him the title 'The Restorer.' Shabaka commissioned scribes to copy ancient Egyptian religious texts that had been lost or damaged, preserving them for future generations. His most famous contribution is the Shabaka Stone, which contains one of the oldest known creation myths from Memphis. This granite slab, now in the British Museum, demonstrates his commitment to preserving Egyptian theological traditions.",
      legacy: "Shabaka's reign is remembered as a period of cultural renaissance and religious revival. His efforts to preserve ancient Egyptian texts and traditions helped maintain continuity between the Old Kingdom and the Kushite period. Many of the religious practices he restored continued to influence Egyptian religion well into the Ptolemaic period."
    },
    tantamani: {
      name: "Tantamani",
      title: "The Last",
      reign: "664-653 BC",
      capital: "Napata",
      image: tantamaniImage,
      description: "Tantamani was the last Kushite pharaoh to rule over Egypt, marking the end of the Twenty-fifth Dynasty. Despite facing overwhelming Assyrian forces, he fought valiantly to preserve Kushite rule.",
      achievements: [
        "Last pharaoh of the 25th Dynasty",
        "Attempted to reconquer Egypt from the Assyrians",
        "Preserved Kushite independence in Nubia",
        "Maintained diplomatic relations with Egyptian nobles",
        "Ensured the survival of Kushite culture"
      ],
      biography: "Tantamani inherited a kingdom under siege. The Assyrian Empire, under Ashurbanipal, had launched a massive invasion of Egypt, forcing his predecessor Taharqa to retreat to Nubia. Undeterred, Tantamani launched a bold campaign to reconquer Egypt, initially achieving success by capturing Memphis and receiving support from Egyptian nobles who preferred Kushite rule to Assyrian occupation. However, the Assyrian response was swift and devastating. Despite his military setbacks, Tantamani's retreat to Nubia ensured the survival of the Kushite kingdom, which would continue to flourish for another thousand years.",
      legacy: "Though Tantamani's reign marked the end of Kushite rule in Egypt, his legacy lies in preserving Kushite independence and culture. His withdrawal to Nubia allowed the kingdom to regroup and eventually establish Meroë as a new capital, leading to the Meroitic period of Kushite civilization. His story represents the resilience and adaptability that characterized Kushite leadership."
    }
  },
  ar: {
    piye: {
      name: "بعانخي",
      title: "الفاتح",
      reign: "744-714 ق.م",
      capital: "نبتة",
      image: piyeImage,
      description: "كان بعانخي مؤسس الأسرة الخامسة والعشرين في مصر وأول فرعون كوشي يحكم مصر وكوش الموحدتين. وُلد في مملكة كوش، وشن حملة عسكرية غيرت مجرى التاريخ القديم إلى الأبد.",
      achievements: [
        "أسس الأسرة الخامسة والعشرين في مصر",
        "غزا منف ووحد مصر تحت الحكم الكوشي",
        "أعاد المعابد والتقاليد المصرية",
        "أسس السيطرة الكوشية على وادي النيل",
        "أنشأ أكبر إمبراطورية في أفريقيا في ذلك الوقت"
      ],
      biography: "بدأت نهضة بعانخي إلى السلطة في مملكة كوش، حيث ورث العرش من والده كاشتا. وإدراكاً للتفكك السياسي في مصر خلال الفترة الانتقالية الثالثة، رأى بعانخي فرصة لاستعادة النظام والوحدة إلى أرض الفراعنة.",
      legacy: "يمتد إرث بعانخي إلى ما هو أبعد من فتوحاته العسكرية. لقد أسس سابقة للحكم الكوشي أكدت على الحفاظ على الثقافة والتفاني الديني."
    },
    taharqa: {
      name: "تهارقا",
      title: "البناء",
      reign: "690-664 ق.م",
      capital: "منف ونبتة",
      image: taharqaImage,
      description: "كان تهارقا أعظم الفراعنة الكوشيين، المعروف بمشاريعه البنائية الواسعة وحملاته العسكرية وإنجازاته الثقافية. مثل عهده ذروة القوة والنفوذ الكوشي في العالم القديم.",
      achievements: [
        "بنى آثاراً أكثر من أي فرعون كوشي آخر",
        "وسع الإمبراطورية إلى أقصى مداها",
        "هزم الغزوات الآشورية عدة مرات",
        "أعاد معبد آمون في جبل البركل",
        "أقام علاقات دبلوماسية عبر العالم القديم"
      ],
      biography: "صعد تهارقا إلى العرش خلال فترة ازدهار غير مسبوق للإمبراطورية الكوشية. تميز عهده الذي دام 26 عاماً بمشاريع بناء طموحة امتدت من النوبة إلى دلتا النيل.",
      legacy: "إرث تهارقا المعماري مرئي في جميع أنحاء السودان ومصر، حيث تقف آثاره في جبل البركل وسنام وكاوا كشاهد على الإنجاز الهندسي والفني الكوشي."
    },
    shabaka: {
      name: "شباكا",
      title: "المرمم",
      reign: "721-707 ق.م",
      capital: "منف",
      image: shabakaImage,
      description: "كان شباكا فرعوناً كوشياً عزز السيطرة الكوشية على مصر وأصبح معروفاً بجهوده لاستعادة التقاليد الدينية والممارسات الثقافية المصرية.",
      achievements: [
        "عزز الحكم الكوشي على كل مصر",
        "أعاد النصوص الدينية المصرية القديمة",
        "أعاد بناء المعابد في جميع أنحاء مصر",
        "أسس منف كعاصمة أساسية له",
        "أنشأ حجر شباكا مع أساطير الخلق القديمة"
      ],
      biography: "ورث شباكا مملكة امتدت من الشلال الرابع إلى البحر الأبيض المتوسط، لكن تحديه الأكبر كان الحفاظ على الوحدة بين السكان المتنوعين في مصر وكوش.",
      legacy: "يُذكر عهد شباكا كفترة نهضة ثقافية وإحياء ديني. ساعدت جهوده للحفاظ على النصوص والتقاليد المصرية القديمة في الحفاظ على الاستمرارية بين المملكة القديمة والفترة الكوشية."
    },
    tantamani: {
      name: "تنوت آمون",
      title: "الأخير",
      reign: "664-653 ق.م",
      capital: "نبتة",
      image: tantamaniImage,
      description: "كان تنوت آمون آخر فرعون كوشي يحكم مصر، مما يمثل نهاية الأسرة الخامسة والعشرين. رغم مواجهة قوات آشورية ساحقة، قاتل ببسالة للحفاظ على الحكم الكوشي.",
      achievements: [
        "آخر فرعون من الأسرة الخامسة والعشرين",
        "حاول إعادة غزو مصر من الآشوريين",
        "حافظ على الاستقلال الكوشي في النوبة",
        "حافظ على العلاقات الدبلوماسية مع النبلاء المصريين",
        "ضمن بقاء الثقافة الكوشية"
      ],
      biography: "ورث تنوت آمون مملكة تحت الحصار. كانت الإمبراطورية الآشورية، تحت قيادة آشوربانيبال، قد شنت غزواً ضخماً لمصر، مما أجبر سلفه تهارقا على التراجع إلى النوبة.",
      legacy: "رغم أن عهد تنوت آمون مثل نهاية الحكم الكوشي في مصر، فإن إرثه يكمن في الحفاظ على الاستقلال والثقافة الكوشية."
    }
  }
}

const queensData = {
  en: {
    amanirenas: {
      name: "Amanirenas",
      title: "The Warrior Queen",
      reign: "40-10 BC",
      capital: "Meroë",
      image: amanirenaImage,
      description: "Amanirenas was a Kandake (queen) of the Kingdom of Kush who is famous for her fierce resistance against Roman expansion into Nubia. She successfully defended her kingdom and negotiated a favorable peace treaty with Rome.",
      achievements: [
        "Defeated Roman legions in battle",
        "Negotiated favorable peace treaty with Augustus",
        "Preserved Kushite independence",
        "Led military campaigns personally",
        "Established diplomatic relations with Rome"
      ],
      biography: "Amanirenas ruled during one of the most challenging periods in Kushite history, when the Roman Empire was expanding southward into Nubia. When Roman forces occupied Lower Nubia and imposed heavy taxes, she responded with military action. Leading her armies personally, she captured several Roman forts and even reached as far as Aswan in Egypt. Her military success forced the Romans to negotiate, resulting in a peace treaty that recognized Kushite sovereignty and removed Roman taxes from Nubian territory.",
      legacy: "Amanirenas is remembered as one of the greatest warrior queens in African history. Her successful resistance against Rome demonstrated the military capabilities of Kushite forces and established a precedent for female leadership in the kingdom. Her story has inspired countless generations and remains a symbol of African resistance against foreign domination."
    },
    amanishakheto: {
      name: "Amanishakheto",
      title: "The Builder Queen",
      reign: "10 BC - 1 AD",
      capital: "Meroë",
      image: amanishakhetoImage,
      description: "Amanishakheto was a Kandake of Kush known for her extensive building projects and the wealth of her tomb. She built one of the largest pyramids at Meroë and was buried with extraordinary treasures.",
      achievements: [
        "Built one of the largest pyramids at Meroë",
        "Commissioned extensive temple construction",
        "Accumulated vast wealth and treasures",
        "Promoted arts and craftsmanship",
        "Strengthened trade networks"
      ],
      biography: "Amanishakheto's reign marked a period of prosperity and artistic achievement in the Kingdom of Kush. She commissioned numerous building projects, including temples, palaces, and her magnificent pyramid at Meroë. Her tomb, discovered by Italian explorer Giuseppe Ferlini in 1834, contained an extraordinary collection of gold jewelry and artifacts that demonstrated the wealth and sophistication of Kushite craftsmanship. These treasures, now scattered in museums around the world, provide invaluable insights into Meroitic art and culture.",
      legacy: "Amanishakheto's architectural legacy is still visible today at Meroë, where her pyramid stands as one of the most impressive monuments of the site. Her treasures have become iconic representations of Kushite wealth and artistic achievement, inspiring modern appreciation for ancient African civilizations."
    }
  },
  ar: {
    amanirenas: {
      name: "أمانيريناس",
      title: "الملكة المحاربة",
      reign: "40-10 ق.م",
      capital: "مروي",
      image: amanirenaImage,
      description: "كانت أمانيريناس كنداكة (ملكة) مملكة كوش المشهورة بمقاومتها الشرسة ضد التوسع الروماني في النوبة. دافعت بنجاح عن مملكتها وتفاوضت على معاهدة سلام مواتية مع روما.",
      achievements: [
        "هزمت الفيالق الرومانية في المعركة",
        "تفاوضت على معاهدة سلام مواتية مع أوغسطس",
        "حافظت على الاستقلال الكوشي",
        "قادت الحملات العسكرية شخصياً",
        "أقامت علاقات دبلوماسية مع روما"
      ],
      biography: "حكمت أمانيريناس خلال إحدى أصعب الفترات في التاريخ الكوشي، عندما كانت الإمبراطورية الرومانية تتوسع جنوباً إلى النوبة.",
      legacy: "تُذكر أمانيريناس كواحدة من أعظم الملكات المحاربات في التاريخ الأفريقي."
    },
    amanishakheto: {
      name: "أمانيشاخيتو",
      title: "الملكة البناءة",
      reign: "10 ق.م - 1 م",
      capital: "مروي",
      image: amanishakhetoImage,
      description: "كانت أمانيشاخيتو كنداكة كوش المعروفة بمشاريعها البنائية الواسعة وثروة قبرها. بنت واحداً من أكبر الأهرامات في مروي ودُفنت مع كنوز استثنائية.",
      achievements: [
        "بنت واحداً من أكبر الأهرامات في مروي",
        "كلفت ببناء معابد واسعة",
        "جمعت ثروات وكنوز هائلة",
        "روجت للفنون والحرف اليدوية",
        "عززت شبكات التجارة"
      ],
      biography: "مثل عهد أمانيشاخيتو فترة ازدهار وإنجاز فني في مملكة كوش.",
      legacy: "إرث أمانيشاخيتو المعماري لا يزال مرئياً اليوم في مروي، حيث يقف هرمها كواحد من أكثر آثار الموقع إثارة للإعجاب."
    }
  }
}

function PharaohDetail({ language = 'en' }) {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const allData = { ...pharaohsData[language], ...queensData[language] }
  const ruler = allData[id]
  
  if (!ruler) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Ruler Not Found</h1>
          <Button onClick={() => navigate('/')} className="bg-amber-600 hover:bg-amber-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return Home
          </Button>
        </div>
      </div>
    )
  }

  const content = {
    en: {
      backButton: "Back to Home",
      reignLabel: "Reign",
      capitalLabel: "Capital",
      achievementsTitle: "Major Achievements",
      biographyTitle: "Biography",
      legacyTitle: "Legacy"
    },
    ar: {
      backButton: "العودة للرئيسية",
      reignLabel: "فترة الحكم",
      capitalLabel: "العاصمة",
      achievementsTitle: "الإنجازات الرئيسية",
      biographyTitle: "السيرة الذاتية",
      legacyTitle: "الإرث"
    }
  }

  const currentContent = content[language]

  return (
    <div className={`min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-6 text-amber-700 hover:text-amber-900"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {currentContent.backButton}
        </Button>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-amber-600 text-white">
                <Crown className="h-4 w-4 mr-2" />
                {ruler.title}
              </Badge>
              <h1 className="text-5xl font-bold text-amber-900 mb-4">{ruler.name}</h1>
              <p className="text-xl text-gray-700 leading-relaxed">{ruler.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-amber-900">
                    <Calendar className="h-5 w-5 mr-2" />
                    {currentContent.reignLabel}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-700">{ruler.reign}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-amber-900">
                    <MapPin className="h-5 w-5 mr-2" />
                    {currentContent.capitalLabel}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold text-gray-700">{ruler.capital}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={ruler.image} 
                alt={ruler.name}
                className="w-full max-w-md h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center text-amber-900">
                <Star className="h-5 w-5 mr-2" />
                {currentContent.achievementsTitle}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {ruler.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Scroll className="h-5 w-5 mr-2" />
                  {currentContent.biographyTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">{ruler.biography}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-amber-900">
                  <Crown className="h-5 w-5 mr-2" />
                  {currentContent.legacyTitle}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">{ruler.legacy}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharaohDetail

