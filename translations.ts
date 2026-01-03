import { MenuItem, Testimonial } from './types';

export const TRANSLATIONS = {
  en: {
    nav: {
      home: "Home",
      cakes: "Our Cakes",
      about: "About",
      visit: "Visit Us",
      order: "Order Now",
      call: "Call"
    },
    hero: {
      est: "Est. Riad Salam",
      title: "The Sweetest Corner",
      titleHighlight: "in Agadir.",
      subtitle: "Artisanal Breads, Decadent Cakes, and the Magic of Mini Brioche. Experience the taste of tradition baked fresh daily.",
      ctaOrder: "Order Your Cake",
      ctaDirections: "Get Directions"
    },
    testimonials: {
      badge: "Rated 4.2/5 Stars by our Neighbors",
      title: "Customer Love",
      readAll: "Read all 245+ reviews on Google Maps"
    },
    menu: {
      specialties: "Our Specialties",
      title: "Pastry",
      subtitle: "Every creation is a masterpiece, made with the freshest local ingredients and artistic devotion.",
      categories: {
        all: "All Delights",
        cake: "Custom Cakes",
        moroccan: "Moroccan Sweets",
        french: "French Patisserie"
      },
      inquire: "Inquire"
    },
    about: {
      story: "Our Story",
      title: "A Staple of Riad Salam",
      p1: "For years, Mini Brioche has been the heart of the neighborhood—a place where the aroma of freshly baked bread brings families together. We believe in the power of simple ingredients transformed by time, heat, and passion.",
      p2: "Whether you need a show-stopping cake for a wedding or just a warm baguette for dinner, our doors are open until 9:30 PM every single day.",
      hoursTitle: "Opening Hours",
      days: "Monday - Sunday",
      hours: "7:00 AM - 9:30 PM",
      findTitle: "Find Us",
      address1: "8, rue Mehdi Ben Barka",
      address2: "Riad Salam, Agadir",
      openMaps: "Open in Maps"
    },
    footer: {
      subtitle: "Agadir's Favorite Boulangerie & Pâtisserie.",
      madeWith: "Made with flour, sugar & love in Agadir."
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      cakes: "Nos Gâteaux",
      about: "À Propos",
      visit: "Visitez-nous",
      order: "Commander",
      call: "Appeler"
    },
    hero: {
      est: "Établi à Riad Salam",
      title: "Le Coin le Plus Doux",
      titleHighlight: "à Agadir.",
      subtitle: "Pains artisanaux, gâteaux décadents et la magie de Mini Brioche. Découvrez le goût de la tradition, cuit frais chaque jour.",
      ctaOrder: "Commander un Gâteau",
      ctaDirections: "Itinéraire"
    },
    testimonials: {
      badge: "Noté 4.2/5 étoiles par nos voisins",
      title: "L'Amour des Clients",
      readAll: "Lire tous les 245+ avis sur Google Maps"
    },
    menu: {
      specialties: "Nos spécialités",
      title: "La Pâtisserie",
      subtitle: "Chaque création est un chef-d'œuvre, réalisé avec les ingrédients locaux les plus frais et une dévotion artistique.",
      categories: {
        all: "Tous les Délices",
        cake: "Gâteaux Sur Mesure",
        moroccan: "Douceurs Marocaines",
        french: "Pâtisserie Française"
      },
      inquire: "Se Renseigner"
    },
    about: {
      story: "Notre Histoire",
      title: "Un Incontournable de Riad Salam",
      p1: "Depuis des années, Mini Brioche est le cœur du quartier—un lieu où l'odeur du pain frais rassemble les familles. Nous croyons au pouvoir des ingrédients simples transformés par le temps, la chaleur et la passion.",
      p2: "Que vous ayez besoin d'un gâteau spectaculaire pour un mariage ou simplement d'une baguette chaude pour le dîner, nos portes sont ouvertes jusqu'à 21h30 tous les jours.",
      hoursTitle: "Heures d'Ouverture",
      days: "Lundi - Dimanche",
      hours: "7h00 - 21h30",
      findTitle: "Trouvez-nous",
      address1: "8, rue Mehdi Ben Barka",
      address2: "Riad Salam, Agadir",
      openMaps: "Ouvrir dans Maps"
    },
    footer: {
      subtitle: "La Boulangerie & Pâtisserie Préférée d'Agadir.",
      madeWith: "Fait avec farine, sucre & amour à Agadir."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      cakes: "كعكاتنا",
      about: "قصتنا",
      visit: "زورونا",
      order: "اطلب الآن",
      call: "اتصل"
    },
    hero: {
      est: "تأسست في رياض السلام",
      title: "أحلى ركن",
      titleHighlight: "في أكادير.",
      subtitle: "خبز حرفي، كعك فاخر، وسحر ميني بريوش. تذوق طعم التقاليد المخبوزة طازجة يومياً.",
      ctaOrder: "اطلب كعكتك",
      ctaDirections: "احصل على الاتجاهات"
    },
    testimonials: {
      badge: "تقييم 4.2/5 نجوم من جيراننا",
      title: "حب العملاء",
      readAll: "اقرأ جميع المراجعات الـ 245+ على خرائط جوجل"
    },
    menu: {
      specialties: "تخصصاتنا",
      title: "المعجنات",
      subtitle: "كل إبداع هو تحفة فنية، مصنوعة من المكونات المحلية الطازجة والتفاني الفني.",
      categories: {
        all: "كل الحلويات",
        cake: "كعك مخصص",
        moroccan: "حلويات مغربية",
        french: "معجنات فرنسية"
      },
      inquire: "استفسار"
    },
    about: {
      story: "قصتنا",
      title: "ركن أساسي في رياض السلام",
      p1: "لسنوات، كان ميني بريوش قلب الحي - مكان يجمع العائلات برائحة الخبز الطازج. نؤمن بقوة المكونات البسيطة التي تتحول بالوقت والحرارة والشغف.",
      p2: "سواء كنت بحاجة إلى كعكة مذهلة لحفل زفاف أو مجرد خبز باغيت دافئ للعشاء، أبوابنا مفتوحة حتى الساعة 9:30 مساءً كل يوم.",
      hoursTitle: "ساعات العمل",
      days: "الاثنين - الأحد",
      hours: "7:00 ص - 9:30 م",
      findTitle: "موقعنا",
      address1: "8، شارع مهدي بن بركة",
      address2: "رياض السلام، أكادير",
      openMaps: "فتح في الخرائط"
    },
    footer: {
      subtitle: "المخبز والحلويات المفضل في أكادير.",
      madeWith: "صنع بالدقيق والسكر والحب في أكادير."
    }
  }
};

export const getTestimonials = (lang: 'en' | 'fr' | 'ar'): Testimonial[] => {
  const content = {
    en: [
      {
        id: '1',
        name: "Verified Customer",
        rating: 5,
        text: "The security guard gave me a warm welcome at the entrance, and the waitresses served me quickly and were all smiles. The products are of excellent quality and the prices are low. The display cases are very clean.",
        date: "Recently"
      },
      {
        id: '2',
        name: "Verified Customer",
        rating: 5,
        text: "I was given some Moroccan pastries from there. They were absolutely delicious! I'm noting down the address so I can go there next time I'm in Agadir.",
        date: "Recently"
      },
      {
        id: '3',
        name: "Verified Customer",
        rating: 5,
        text: "An exceptional experience at this pastry shop! Their products are high-quality and varied in shapes and flavors. The pastries are fresh and delicious, and you can truly feel the craftsmanship in every bite.",
        date: "Recently"
      }
    ],
    fr: [
      {
        id: '1',
        name: "Client Vérifié",
        rating: 5,
        text: "Le gardien m'a réservé un accueil chaleureux à l'entrée, et les serveuses m'ont servi rapidement avec le sourire. Les produits sont d'excellente qualité et les prix sont bas. Les vitrines sont très propres.",
        date: "Récemment"
      },
      {
        id: '2',
        name: "Client Vérifié",
        rating: 5,
        text: "On m'a offert des pâtisseries marocaines venant de là-bas. Elles étaient absolument délicieuses ! Je note l'adresse pour y aller la prochaine fois que je serai à Agadir.",
        date: "Récemment"
      },
      {
        id: '3',
        name: "Client Vérifié",
        rating: 5,
        text: "Une expérience exceptionnelle dans cette pâtisserie ! Leurs produits sont de haute qualité et variés en formes et en saveurs. Les pâtisseries sont fraîches et délicieuses, et on sent vraiment le savoir-faire dans chaque bouchée.",
        date: "Récemment"
      }
    ],
    ar: [
      {
        id: '1',
        name: "عميل موثوق",
        rating: 5,
        text: "استقبلني حارس الأمن بترحيب حار عند المدخل، وخدمتني النادلات بسرعة بابتسامة عريضة. المنتجات ذات جودة ممتازة والأسعار منخفضة. واجهات العرض نظيفة جداً.",
        date: "مؤخراً"
      },
      {
        id: '2',
        name: "عميل موثوق",
        rating: 5,
        text: "لقد تم إهدائي بعض الحلويات المغربية من هناك. كانت لذيذة للغاية! سأقوم بتدوين العنوان حتى أتمكن من الذهاب إلى هناك في المرة القادمة التي أكون فيها في أكادير.",
        date: "مؤخراً"
      },
      {
        id: '3',
        name: "عميل موثوق",
        rating: 5,
        text: "تجربة استثنائية في متجر الحلويات هذا! منتجاتهم عالية الجودة ومتنوعة في الأشكال والنكهات. المعجنات طازجة ولذيذة، ويمكنك حقاً الشعور بالحرفية في كل لقمة.",
        date: "مؤخراً"
      }
    ]
  };

  return content[lang];
};

export const getMenuItems = (lang: 'en' | 'fr' | 'ar'): MenuItem[] => {
  const isAr = lang === 'ar';
  const isFr = lang === 'fr';
  
  return [
    {
      id: 'c1',
      title: isAr ? "كعكة رويال" : (isFr ? "Gâteau Royal" : "Royal Cake"),
      description: isAr ? "طبقات من الفانيليا. مثالية للاحتفالات." : (isFr ? "Couches de vanille. Parfait pour les célébrations." : "Layers of vanilla. Perfect for celebrations."),
      category: 'cake',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz3LnfRkszmNQUqo2WPdCqO-kUvomCoW12AsmtHVfNmsiVsclPfyNM0ZtvguHANmw83U04P4tDLKutsKNNsGmeGQ1qxf7Fom6S-nobKJQd_IVB2pN4i-G4lr_P7xc-yw2dLTW6Bxg=w172-h224-p-k-no",
    },
    {
      id: 'c2',
      title: isAr ? "كعكة الزفاف" : (isFr ? "Gâteau de Mariage" : "Wedding Cake"),
      description: isAr ? "كعكة أنيقة متعددة الطبقات بكريمة الفانيليا ولمسات ذهبية." : (isFr ? "Gâteau élégant à plusieurs étages avec crème à la vanille." : "Elegant multi-tier cake with vanilla bean cream and edible gold leaf accents."),
      category: 'cake',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxATF0vsV6PvFsnsIsmFCYmHtL-Pn-_hYYVP5zJTqSUEUwn17LoIgDtUVaKc7VtetNKieuNWOAd8uMaM1BAIlU5M8Iyjdhd7pLBX2-fzXtqByrXnf_L6abWI2XMSzXL-TiYzUQB=w172-h224-p-k-no",
    },
    {
      id: 'c3',
      title: isAr ? "كعكة البحر" : (isFr ? "Gâteau theme Ocean" : "Ocean Cake"),
      description: isAr ? "كعكة أنيقة متعددة الطبقات بكريمة الفانيليا ولمسات ذهبية." : (isFr ? "Gâteau élégant à plusieurs étages avec crème à la vanille." : "Elegant multi-tier cake with vanilla bean cream and edible gold leaf accents."),
      category: 'cake',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzU5gINRPVJlL33ogTndbhrmgAAfBhg4a6IzoqNh18RDUhhl3W3IJNMI1wvhOv0JdHxXpTL-CzDr9oP3ZEz32-jUNgX54vEZaJ1RjNSWZCPBaFYCbCsit7BVWpeDf_CJ1rV494i=w172-h224-p-k-no",
    },
    {
      id: 'm1',
      title: isAr ? "صينية الكيك" : (isFr ? "Plateau de gateaux" : "Plate of cakes"),
      description: isAr ? "حلوى مغربية تقليدية بالسمسم والعسل." : (isFr ? "Biscuits marocains traditionnels au sésame, miel et eau de rose." : "Traditional Moroccan sesame cookies coated in honey and rose water."),
      category: 'moroccan',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwiVA7qSsISORz9HgV_d4SjmsIY3dIlcWAZxHyxE1S3DRYFwtTR-LI5EwVqYrD1DbsA2Mng6c7bJekJDatLYcP3vvo4EOmc8YwPBDEjfUG6rIVrzf_fmJU6QacwxrkClxpJDO7egA=w172-h224-p-k-no",
      tags: isAr ? ["أفضل قيمة"] : (isFr ? ["Meilleure Valeur"] : ["Best Value"])
    },
    {
      id: 'm2',
      title: isAr ? "ملوي/مسمن" : (isFr ? "Meloui/Msemen" : "Meloui/Msemen"),
      description: isAr ? "فطائر مغربية تقليدية مورقة ومقرمشة، تقدم عادة مع الزبدة والعسل." : (isFr 
        ? "Crêpes marocaines traditionnelles feuilletées et croustillantes, généralement servies avec du beurre et du miel." 
        : "Traditional Moroccan layered flatbreads, flaky and crispy, typically served with butter and honey."
      ),
      category: 'moroccan',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyKdDFTyWX3ylVN3a8qGxDqkmU-1pAEYI-vkHnNoc5lxZ-4iOaoXu0qXMrHbH0nHifmCURAAuWne2-1aCjhda3NNgNKeBUIyooKz3puh_o8GzbybONic35eyTWGxMQmO0W2RI8EMQ=w172-h224-p-k-no"
    },
    {
      id: 'm3',
      title: isAr ? "بسكويت صغير" : (isFr ? "Petits Biscuits" : "Small Biscuits"),
      description: isAr ? "مجموعة متنوعة من الحلويات المغربية الصغيرة المقرمشة، مثالية لتقديمها مع الشاي." 
    : (isFr 
        ? "Une variété de petits biscuits marocains croquants, parfaits pour accompagner le thé." 
        : "A variety of small, crunchy Moroccan biscuits, perfect for serving with tea."
      ),
      category: 'moroccan',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSy_j_dXulvmXiCrshhdBXSBn9pEQdSApWkwtU4NXmLelgHxfhAdKh5QdNH7F9NF-v-L68ZFz9t_oGQymUAjWB-zJAoegLsKBNcSzZ0oIyWGbtc6k4ClR9vvSUXs1rP8PWUZ8oKU5A=w172-h224-p-k-no"
    },
    {
      id: 'f1',
      title: isAr ? "كرواسون بالزبدة" : (isFr ? "Croissant au Beurre" : "Butter Croissant"),
      description: isAr ? "هش، بالزبدة، وذهبي. يخبز طازجاً كل صباح." : (isFr ? "Feuilleté, au beurre et doré. Cuit frais tous les matins." : "Flaky, buttery, and golden. Baked fresh every morning at 6 AM."),
      category: 'french',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyONAKanNUjHJRERq1NCaWXOy_S_zV7_kZIbmbH_mCqXU31aKzF-zahqwGuXItppMzK2Moh69LDIDIm79siFfovai7kuhWxOMv8sZqhk9CfnHeYaAeakAdBYaL8QR_gppvK7KvCoA=w172-h224-p-k-no"
    },
    {
      id: 'f2',
      title: isAr ? "سويسري/فانيليا/خبز محشو" : (isFr ? "Pain Suisse/Vanille/Fourré" : "Swiss Bread/Vanilla/Stuffed"),
      description: isAr ? "بريوش ناعم محشو بكريمة الحلواني بالفانيليا ورقائق الشوكولاتة." 
        : (isFr 
            ? "Brioche moelleuse fourrée à la crème pâtissière à la vanille et aux pépites de chocolat." 
            : "Soft brioche pastry filled with vanilla pastry cream and chocolate chips."
          ),
      category: 'french',
      image: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz74OqNKkMTux11yo4XJOMMuTvgtxvBWv0J51G4In7tyCEfU-6mVLFFwRzuLnOOb4GT0GE1WDdYBraOEtBznQSqQlsVxO540glHr9ap0-EwXsHMHn_03kWcXmjDbYVh3Mz5XAZFEQ=w172-h224-p-k-no"
    }
  ];
};